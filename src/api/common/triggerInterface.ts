
import { contextIndexer, getAgent } from "../../handles";
import { wrapGame } from "../../Game";

// ============================================================================
// Native trigger interface
//
export const CreateTrigger = contextIndexer( wrapGame( ( game, id ): trigger => {

	const trigger = {
		...getAgent(),
		enabled: true,
		evaluations: 0,
		executions: 0,
		triggerId: id,
		waitOnSleeps: true,
	};

	game.triggers.add( trigger );

	return trigger;

} ) );
export const DestroyTrigger = ( whichTrigger: trigger ): void => whichTrigger.remove();
export const ResetTrigger = ( whichTrigger: trigger ): void => {

	whichTrigger.evaluations = 0;
	whichTrigger.executions = 0;

};
export const EnableTrigger = ( whichTrigger: trigger ): void => { whichTrigger.enabled = true };
export const DisableTrigger = ( whichTrigger: trigger ): void => { whichTrigger.enabled = false };
export const IsTriggerEnabled = ( whichTrigger: trigger ): boolean => whichTrigger.enabled;
export const TriggerWaitOnSleeps = ( whichTrigger: trigger, flag: boolean ): void => { whichTrigger.waitOnSleeps = flag };
export const IsTriggerWaitOnSleeps = ( whichTrigger: trigger ): boolean => whichTrigger.waitOnSleeps;
export const GetFilterUnit = (): unit => {};
export const GetEnumUnit = (): unit => {};
export const GetFilterDestructable = (): destructable => {};
export const GetEnumDestructable = (): destructable => {};
export const GetFilterItem = (): item => {};
export const GetEnumItem = (): item => {};
export const GetFilterPlayer = (): player => {};
export const GetEnumPlayer = (): player => {};
export const GetTriggeringTrigger = (): trigger => {};
export const GetTriggerEventId = (): eventid => {};
export const GetTriggerEvalCount = ( whichTrigger: trigger ): number => {};
export const GetTriggerExecCount = ( whichTrigger: trigger ): number => {};
export const ExecuteFunc = ( funcName: string ): void => {};
