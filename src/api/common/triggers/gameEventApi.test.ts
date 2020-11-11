import { getGame } from "../../../Game";
import { GREATER_THAN } from "../constants/limitEventApi";
import { TriggerRegisterVariableEvent } from "./gameEventApi";
import { CreateTrigger } from "./interface";

it("TriggerRegisterVariableEvent", () => {
	const game = getGame();
	const t = CreateTrigger();
	globalThis.__some_global_variable = 0;
	TriggerRegisterVariableEvent(t, "__some_global_variable", GREATER_THAN, 5);
	game.tick(1);

	expect(t.evaluations).toEqual(0);

	globalThis.__some_global_variable = 4;
	game.tick(1);

	expect(t.evaluations).toEqual(0);

	globalThis.__some_global_variable = 7;
	game.tick(1);

	expect(t.evaluations).toEqual(1);
	expect(t.executions).toEqual(1);
});
