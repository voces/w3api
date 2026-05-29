import { promises as fs } from "fs";

import { gameContext } from "../../contexts.js";
import { getGame, wrapGame } from "../../Game.js";
import {
  BlzGetItemDescription,
  BlzGetItemExtendedTooltip,
  BlzGetItemIconPath,
  BlzGetItemTooltip,
  CreateItem,
  GetItemLevel,
  GetItemName,
  GetItemTypeId,
  GetItemX,
  GetItemY,
  IsItemIdPawnable,
  IsItemIdPowerup,
  IsItemIdSellable,
  IsItemPawnable,
  IsItemPowerup,
  IsItemSellable,
} from "./items.js";
import { FourCC } from "./string.js";

it("CreateItem stores type and position", () =>
  gameContext.withTemp(
    wrapGame(() => {
      const item = CreateItem(0x69437374, 10, 20);
      expect(item.type).toBe(0x69437374);
      expect(item.x).toBe(10);
      expect(item.y).toBe(20);
      expect(GetItemTypeId(item)).toBe(0x69437374);
      expect(GetItemX(item)).toBe(10);
      expect(GetItemY(item)).toBe(20);
    }),
  ));

describe("with loaded map data", () => {
  let w3t: Buffer;

  beforeAll(async () => {
    w3t = await fs.readFile("src/test/data/war3map.w3t");
  });

  const inGame = (fn: () => void) =>
    gameContext.withTemp(
      wrapGame(() => {
        getGame().loadData({ w3t });
        fn();
      }),
    );

  it("reads name, level, and icon from the spec", () =>
    inGame(() => {
      const ankh = CreateItem(FourCC("ankh"), 0, 0);
      expect(GetItemName(ankh)).toBe("Ankh of Reincarnation");
      expect(GetItemLevel(ankh)).toBe(4);
      expect(BlzGetItemIconPath(ankh)).toBe(
        "ReplaceableTextures\\CommandButtons\\BTNAnkh.blp",
      );
    }));

  it("reads description and tooltips from the spec", () =>
    inGame(() => {
      const amrc = CreateItem(FourCC("amrc"), 0, 0);
      expect(BlzGetItemDescription(amrc)).toBe(
        "Can be used to teleport units to the user.",
      );
      expect(BlzGetItemTooltip(amrc)).toBe("Purchase Amulet of Recall");
      expect(BlzGetItemExtendedTooltip(amrc)).toContain("Teleports");
    }));

  it("reports powerup, sellable, pawnable from the spec", () =>
    inGame(() => {
      const ankh = CreateItem(FourCC("ankh"), 0, 0);
      expect(IsItemPowerup(ankh)).toBe(false);
      expect(IsItemSellable(ankh)).toBe(true);
      expect(IsItemPawnable(ankh)).toBe(true);

      // dkfw (Keg of Thunderwater) is a powerup in this fixture
      const keg = CreateItem(FourCC("dkfw"), 0, 0);
      expect(IsItemPowerup(keg)).toBe(true);
    }));

  it("reports the same flags via the id-only variants", () =>
    inGame(() => {
      expect(IsItemIdPowerup(FourCC("dkfw"))).toBe(true);
      expect(IsItemIdPowerup(FourCC("ankh"))).toBe(false);
      expect(IsItemIdSellable(FourCC("ankh"))).toBe(true);
      expect(IsItemIdPawnable(FourCC("ankh"))).toBe(true);
    }));

  it("honors map modifications layered on the stock spec", () =>
    inGame(() => {
      // Stock Boots of Speed is level 3; fixus bumps it to 8.
      const boots = CreateItem(FourCC("bspd"), 0, 0);
      expect(GetItemName(boots)).toBe("Boots of Speed");
      expect(GetItemLevel(boots)).toBe(8);
    }));
});
