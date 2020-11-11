import { wrapRun } from "../../../Run";

// ============================================================================
// Trigger Unit Based Event API
// ============================================================================

// returns handle to unit which triggered the most recent event when called from
// within a trigger action function...returns null handle when used incorrectly

export const GetTriggerUnit = wrapRun((run): unit | null => run.triggerUnit);

export const TriggerRegisterUnitStateEvent = (
	whichTrigger: trigger,
	whichUnit: unit,
	whichState: unitstate,
	opcode: limitop,
	limitval: number,
): event => {};

// EVENT_UNIT_STATE_LIMIT
export const GetEventUnitState = (): unitstate => {};

export const TriggerRegisterUnitEvent = (
	whichTrigger: trigger,
	whichUnit: unit,
	whichEvent: unitevent,
): event => {};

// EVENT_UNIT_DAMAGED
export const GetEventDamage = (): number => {};

export const GetEventDamageSource = (): unit => {};

// EVENT_UNIT_DEATH
// EVENT_UNIT_DECAY
// Use the GetDyingUnit and GetDecayingUnit funcs above

// EVENT_UNIT_DETECTED
export const GetEventDetectingPlayer = (): player => {};

export const TriggerRegisterFilterUnitEvent = (
	whichTrigger: trigger,
	whichUnit: unit,
	whichEvent: unitevent,
	filter: boolexpr,
): event => {};

// EVENT_UNIT_ACQUIRED_TARGET
// EVENT_UNIT_TARGET_IN_RANGE
export const GetEventTargetUnit = (): unit => {};

// EVENT_UNIT_ATTACKED
// Use GetAttacker from the Player Unit Event API Below...

// EVENT_UNIT_RESCUEDED
// Use GetRescuer from the Player Unit Event API Below...

// EVENT_UNIT_CONSTRUCT_CANCEL
// EVENT_UNIT_CONSTRUCT_FINISH

// See the Player Unit Construction Event API above for event info funcs

// EVENT_UNIT_TRAIN_START
// EVENT_UNIT_TRAIN_CANCELLED
// EVENT_UNIT_TRAIN_FINISH

// See the Player Unit Training Event API above for event info funcs

// EVENT_UNIT_SELL

// See the Player Unit Sell Event API above for event info funcs

// EVENT_UNIT_DROP_ITEM
// EVENT_UNIT_PICKUP_ITEM
// EVENT_UNIT_USE_ITEM
// See the Player Unit/Item manipulation Event API above for event info funcs

// EVENT_UNIT_ISSUED_ORDER
// EVENT_UNIT_ISSUED_POINT_ORDER
// EVENT_UNIT_ISSUED_TARGET_ORDER

// See the Player Unit Order Event API above for event info funcs

export const TriggerRegisterUnitInRange = (
	whichTrigger: trigger,
	whichUnit: unit,
	range: number,
	filter: boolexpr | null,
): event => {};
