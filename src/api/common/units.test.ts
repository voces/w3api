import { promises as fs } from "fs";

import { gameContext } from "../../contexts.js";
import { getGame, wrapGame } from "../../Game.js";
import { getPlayer } from "../../PlayerClass.js";
import { RACE_HUMAN, RACE_UNDEAD } from "./constants/index.js";
import { FourCC } from "./string.js";
import {
  CreateUnit,
  GetFoodUsed,
  GetHeroStr,
  GetUnitDefaultAcquireRange,
  GetUnitDefaultFlyHeight,
  GetUnitDefaultMoveSpeed,
  GetUnitDefaultPropWindow,
  GetUnitDefaultTurnSpeed,
  GetUnitFoodUsed,
  GetUnitLevel,
  GetUnitName,
  GetUnitPointValue,
  GetUnitPointValueByType,
  GetUnitRace,
  IsHeroUnitId,
  IsUnitIllusion,
  IsUnitOwnedByPlayer,
} from "./units.js";

it("IsUnitIllusion reflects the unit's isIllusion field", () =>
  gameContext.withTemp(
    wrapGame(() => {
      const unit = CreateUnit(getPlayer(0), 0, 0, 0, 0);
      expect(IsUnitIllusion(unit)).toBe(false);
      unit.isIllusion = true;
      expect(IsUnitIllusion(unit)).toBe(true);
    }),
  ));

describe("with loaded map data", () => {
  let w3u: Buffer;
  let wts: Buffer;

  beforeAll(async () => {
    [w3u, wts] = await Promise.all([
      fs.readFile("src/test/data/war3map.w3u"),
      fs.readFile("src/test/data/war3map.wts"),
    ]);
  });

  const inGame = (fn: () => void) =>
    gameContext.withTemp(
      wrapGame(() => {
        getGame().loadData({ w3u, wts });
        fn();
      }),
    );

  it("reads name, race, level from the spec", () =>
    inGame(() => {
      const footman = CreateUnit(getPlayer(0), FourCC("hfoo"), 0, 0, 0);
      expect(GetUnitName(footman)).toBe("Footman");
      expect(GetUnitRace(footman)).toBe(RACE_HUMAN);
      expect(GetUnitLevel(footman)).toBe(2);

      const sheep = CreateUnit(getPlayer(0), FourCC("uC04"), 0, 0, 0);
      expect(GetUnitName(sheep)).toBe("Sheep");
      expect(GetUnitRace(sheep)).toBe(RACE_UNDEAD);
      expect(GetUnitLevel(sheep)).toBe(1);
    }));

  it("reads default movement and combat ranges from the spec", () =>
    inGame(() => {
      const footman = CreateUnit(getPlayer(0), FourCC("hfoo"), 0, 0, 0);
      expect(GetUnitDefaultMoveSpeed(footman)).toBe(270);
      expect(GetUnitDefaultAcquireRange(footman)).toBe(500);
      expect(GetUnitDefaultTurnSpeed(footman)).toBeCloseTo(0.6);
      expect(GetUnitDefaultPropWindow(footman)).toBe(60);
      expect(GetUnitDefaultFlyHeight(footman)).toBe(0);
    }));

  it("reads point value and food from the spec", () =>
    inGame(() => {
      const footman = CreateUnit(getPlayer(0), FourCC("hfoo"), 0, 0, 0);
      expect(GetUnitPointValue(footman)).toBe(100);
      expect(GetUnitPointValueByType(FourCC("hfoo"))).toBe(100);
      expect(GetUnitFoodUsed(footman)).toBe(2);
      expect(GetFoodUsed(FourCC("hfoo"))).toBe(2);
    }));

  it("returns base stats and rejects non-heroes for IsHeroUnitId", () =>
    inGame(() => {
      const footman = CreateUnit(getPlayer(0), FourCC("hfoo"), 0, 0, 0);
      // Footman has no Primary attribute set, so hero stats default to 0
      expect(GetHeroStr(footman, false)).toBe(0);
      expect(IsHeroUnitId(FourCC("hfoo"))).toBe(false);
    }));

  it("IsUnitOwnedByPlayer compares the unit owner identity", () =>
    inGame(() => {
      const p0 = getPlayer(0);
      const p1 = getPlayer(1);
      const footman = CreateUnit(p0, FourCC("hfoo"), 0, 0, 0);
      expect(IsUnitOwnedByPlayer(footman, p0)).toBe(true);
      expect(IsUnitOwnedByPlayer(footman, p1)).toBe(false);
    }));

  it("honors map modifications layered on the stock spec", () =>
    inGame(() => {
      // ewsp is the stock Wisp; the fixture renames it to "Rock Golem"
      // and rewrites level, food, move speed, and acquire range.
      const golem = CreateUnit(getPlayer(0), FourCC("ewsp"), 0, 0, 0);
      expect(GetUnitName(golem)).toBe("Rock Golem");
      expect(GetUnitLevel(golem)).toBe(6);
      expect(GetUnitFoodUsed(golem)).toBe(5);
      expect(GetUnitDefaultMoveSpeed(golem)).toBe(340);
      expect(GetUnitDefaultAcquireRange(golem)).toBe(500);
    }));
});
