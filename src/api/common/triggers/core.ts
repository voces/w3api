// deno-lint-ignore-file no-unused-vars
import { notImplemented } from "../../../errors";
import { contextIndexer, getHandle } from "../../../handles";

export const TriggerAddCondition = (
  whichTrigger: trigger,
  condition: boolexpr,
): triggercondition => {
  notImplemented("TriggerAddCondition");
  return (null as unknown) as triggercondition;
};

export const TriggerRemoveCondition = (
  whichTrigger: trigger,
  whichCondition: triggercondition,
): void => {};

export const TriggerClearConditions = (whichTrigger: trigger): void => {};

export const TriggerAddAction = contextIndexer(
  (id, whichTrigger: trigger, actionFunc: () => void): triggeraction => {
    const triggerAction = {
      ...getHandle(),
      triggeractionId: id,
      func: actionFunc,
    };

    whichTrigger.actions.push(triggerAction);

    return triggerAction;
  },
);

export const TriggerRemoveAction = (
  whichTrigger: trigger,
  whichAction: triggeraction,
): void => {};

export const TriggerClearActions = (whichTrigger: trigger): void => {};

export const TriggerSleepAction = (timeout: number): void => {};

export const TriggerWaitForSound = (s: sound, offset: number): void => {};

export const TriggerEvaluate = (whichTrigger: trigger | null): boolean => {
  notImplemented("TriggerEvaluate");
  return false;
};

export const TriggerExecute = (whichTrigger: trigger | null): void => {};

export const TriggerExecuteWait = (whichTrigger: trigger): void => {};

export const TriggerSyncStart = (): void => {};

export const TriggerSyncReady = (): void => {};
