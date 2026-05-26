import { gameContext } from "../../../contexts.js";
import { getGame, wrapGame } from "../../../Game.js";
import { getPlayer } from "../../../PlayerClass.js";
import { TriggerAddAction } from "./core.js";
import { CreateTrigger, DestroyTrigger } from "./interface.js";
import {
  BlzGetTriggerSyncData,
  BlzGetTriggerSyncPrefix,
  BlzSendSyncData,
  BlzTriggerRegisterPlayerSyncEvent,
} from "./sync.js";

it("BlzSendSyncData fires triggers registered for matching player + prefix", () =>
  gameContext.withTemp(
    wrapGame(() => {
      const game = getGame();
      const local = getPlayer(0);
      game.players[0] = local;
      game.localPlayerId = 0;

      const captured: Array<{ prefix: string; data: string }> = [];
      const t = CreateTrigger();
      TriggerAddAction(t, () => {
        captured.push({
          prefix: BlzGetTriggerSyncPrefix(),
          data: BlzGetTriggerSyncData(),
        });
      });
      BlzTriggerRegisterPlayerSyncEvent(t, local, "ping", false);

      expect(BlzSendSyncData("ping", "hello")).toBe(true);
      expect(BlzSendSyncData("other", "ignored")).toBe(true);

      expect(captured).toEqual([{ prefix: "ping", data: "hello" }]);
      expect(t.executions).toBe(1);
    }),
  ));

it("BlzSendSyncData ignores triggers registered for a different player", () =>
  gameContext.withTemp(
    wrapGame(() => {
      const game = getGame();
      const local = getPlayer(0);
      const other = getPlayer(1);
      game.players[0] = local;
      game.players[1] = other;
      game.localPlayerId = 0;

      const t = CreateTrigger();
      TriggerAddAction(t, () => {});
      BlzTriggerRegisterPlayerSyncEvent(t, other, "ping", false);

      BlzSendSyncData("ping", "hello");

      expect(t.executions).toBe(0);
    }),
  ));

it("destroying the trigger removes its sync registration", () =>
  gameContext.withTemp(
    wrapGame(() => {
      const game = getGame();
      const local = getPlayer(0);
      game.players[0] = local;
      game.localPlayerId = 0;

      const t = CreateTrigger();
      TriggerAddAction(t, () => {});
      BlzTriggerRegisterPlayerSyncEvent(t, local, "ping", false);

      DestroyTrigger(t);
      BlzSendSyncData("ping", "hello");

      expect(t.executions).toBe(0);
    }),
  ));
