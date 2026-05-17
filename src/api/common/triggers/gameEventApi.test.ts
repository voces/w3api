import { getGame } from "../../../Game.js";
import { GREATER_THAN } from "../constants/limitEventApi.js";
import { TriggerRegisterVariableEvent } from "./gameEventApi.js";
import { CreateTrigger } from "./interface.js";

it("TriggerRegisterVariableEvent", () => {
  const game = getGame();
  const t = CreateTrigger();
  Reflect.set(globalThis, "__some_global_variable", 0);
  TriggerRegisterVariableEvent(t, "__some_global_variable", GREATER_THAN, 5);
  game.tick(1);

  expect(t.evaluations).toEqual(0);

  Reflect.set(globalThis, "__some_global_variable", 4);
  game.tick(1);

  expect(t.evaluations).toEqual(0);

  Reflect.set(globalThis, "__some_global_variable", 7);
  game.tick(1);

  expect(t.evaluations).toEqual(1);
  expect(t.executions).toEqual(1);
});
