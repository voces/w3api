import { gameContext } from "../../contexts.js";
import { wrapGame } from "../../Game.js";
import { CreateItem, GetItemTypeId } from "./items.js";

it("CreateItem stores type and position", () =>
  gameContext.withTemp(
    wrapGame(() => {
      const item = CreateItem(0x69437374, 10, 20);
      expect(item.type).toBe(0x69437374);
      expect(item.x).toBe(10);
      expect(item.y).toBe(20);
      expect(GetItemTypeId(item)).toBe(0x69437374);
    }),
  ));
