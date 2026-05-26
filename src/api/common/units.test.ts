import { gameContext } from "../../contexts.js";
import { wrapGame } from "../../Game.js";
import { getPlayer } from "../../PlayerClass.js";
import { CreateUnit, IsUnitIllusion } from "./units.js";

it("IsUnitIllusion reflects the unit's isIllusion field", () =>
  gameContext.withTemp(
    wrapGame(() => {
      const unit = CreateUnit(getPlayer(0), 0, 0, 0, 0);
      expect(IsUnitIllusion(unit)).toBe(false);
      unit.isIllusion = true;
      expect(IsUnitIllusion(unit)).toBe(true);
    }),
  ));
