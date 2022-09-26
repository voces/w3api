// deno-lint-ignore-file no-unused-vars

import { notImplemented } from "../../../errors";
import { contextIndexer, getAgent, getHandle } from "../../../handles";

export const TriggerAddCondition = contextIndexer((
  id,
  whichTrigger: trigger,
  condition: boolexpr,
): triggercondition => {
  const triggerCondition: triggercondition = {
    ...getAgent(),
    triggerconditionId: id,
    condition,
  };

  whichTrigger.conditions.push(triggerCondition);

  return triggerCondition;
});

export const TriggerRemoveCondition = (
  whichTrigger: trigger,
  whichCondition: triggercondition,
): void => {
  const index = whichTrigger.conditions.indexOf(whichCondition);
  if (index >= 0) whichTrigger.conditions.splice(index, 1);
};

export const TriggerClearConditions = (whichTrigger: trigger): void => {
  whichTrigger.conditions = [];
};

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
): void => {
  const index = whichTrigger.actions.indexOf(whichAction);
  if (index >= 0) whichTrigger.actions.splice(index, 1);
};

export const TriggerClearActions = (whichTrigger: trigger): void => {
  whichTrigger.actions = [];
};

export const TriggerSleepAction = (timeout: number): void => {};

export const TriggerWaitForSound = (s: sound, offset: number): void => {};

export const TriggerEvaluate = (whichTrigger: trigger | null): boolean =>
  whichTrigger?.evaluate() ?? false;

export const TriggerExecute = (whichTrigger: trigger | null): void => {
  whichTrigger?.execute();
};

export const TriggerExecuteWait = (whichTrigger: trigger): void => {
  notImplemented("TriggerExecuteWait", true);
  whichTrigger?.execute();
};

export const TriggerSyncStart = (): void => {};

export const TriggerSyncReady = (): void => {};
