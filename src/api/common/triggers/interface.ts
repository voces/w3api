import { wrapGame } from "../../../Game";
import { contextIndexer, getAgent } from "../../../handles";
import { wrapRun } from "../../../Run";

// ============================================================================
// Native trigger interface
//
export const CreateTrigger = contextIndexer(
  wrapGame(
    (game, id: number): trigger => {
      const trigger: trigger = {
        ...getAgent(),
        actions: [],
        conditions: [],
        enabled: true,
        evaluate: (): boolean => {
          trigger.evaluations++;
          return trigger.conditions.every((triggerCondition) => {
            try {
              return triggerCondition.condition.func();
            } catch (err) {
              console.error(err);
              return false;
            }
          });
        },
        evaluations: 0,
        events: [],
        execute: (): void => {
          trigger.executions++;
          trigger.actions.forEach((triggerAction) => {
            try {
              triggerAction.func();
            } catch (err) {
              console.error(err);
            }
          });
        },
        executions: 0,
        triggerId: id,
        waitOnSleeps: true,
      };

      game.triggers.add(trigger);

      return trigger;
    },
  ),
);
export const DestroyTrigger = (whichTrigger: trigger): void =>
  whichTrigger.remove();
export const ResetTrigger = (whichTrigger: trigger): void => {
  whichTrigger.evaluations = 0;
  whichTrigger.executions = 0;
};
export const EnableTrigger = (whichTrigger: trigger): void => {
  whichTrigger.enabled = true;
};
export const DisableTrigger = (whichTrigger: trigger): void => {
  whichTrigger.enabled = false;
};
export const IsTriggerEnabled = (whichTrigger: trigger): boolean =>
  whichTrigger.enabled;
export const TriggerWaitOnSleeps = (
  whichTrigger: trigger,
  flag: boolean,
): void => {
  whichTrigger.waitOnSleeps = flag;
};
export const IsTriggerWaitOnSleeps = (whichTrigger: trigger): boolean =>
  whichTrigger.waitOnSleeps;
export const GetFilterUnit = wrapRun((run): unit | null => run.filterUnit);
export const GetEnumUnit = wrapRun((run): unit | null => run.enumUnit);
export const GetFilterDestructable = wrapRun(
  (run): destructable | null => run.filterDestructable,
);
export const GetEnumDestructable = wrapRun(
  (run): destructable | null => run.enumDestructable,
);
export const GetFilterItem = wrapRun((run): item | null => run.filterItem);
export const GetEnumItem = wrapRun((run): item | null => run.enumItem);
export const GetFilterPlayer = wrapRun(
  (run): player | null => run.filterPlayer,
);
export const GetEnumPlayer = wrapRun((run): player | null => run.enumPlayer);
export const GetTriggeringTrigger = wrapRun(
  (run): trigger | null => run.triggeringTrigger,
);
export const GetTriggerEventId = wrapRun(
  (run): eventid | null => run.triggeringEventId,
);
export const GetTriggerEvalCount = (whichTrigger: trigger): number =>
  whichTrigger.evaluations;
export const GetTriggerExecCount = (whichTrigger: trigger): number =>
  whichTrigger.executions;
export const ExecuteFunc = (funcName: string): void => globalThis[funcName as keyof typeof globalThis]();
