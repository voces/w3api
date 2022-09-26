// deno-lint-ignore-file no-unused-vars
import { runContext } from "../../../contexts";
import { notImplemented } from "../../../errors";
import { wrapGame } from "../../../Game";
import { getRun, newRun, wrapRun } from "../../../Run";
import {
  EVENT_DIALOG_BUTTON_CLICK,
  EVENT_DIALOG_CLICK,
  EVENT_GAME_ENTER_REGION,
  EVENT_GAME_LEAVE_REGION,
  EVENT_GAME_STATE_LIMIT,
  EVENT_GAME_TIMER_EXPIRED,
  EVENT_GAME_TRACKABLE_HIT,
  EVENT_GAME_TRACKABLE_TRACK,
  EVENT_GAME_VARIABLE_LIMIT,
} from "../constants/gamePlayerAndUnitEvents";
import {
  EQUAL,
  GREATER_THAN,
  GREATER_THAN_OR_EQUAL,
  LESS_THAN,
  LESS_THAN_OR_EQUAL,
  NOT_EQUAL,
} from "../constants/limitEventApi";
import { CreateTimer, TimerStart } from "../timers";
import { getEvent } from "./events";

// ============================================================================
// Trigger Game Event API
// ============================================================================

const variableEventConditions: Map<
  limitop,
  (a: number, b: number) => boolean
> = new Map();
variableEventConditions.set(LESS_THAN, (a: number, b: number) => a < b);
variableEventConditions.set(
  LESS_THAN_OR_EQUAL,
  (a: number, b: number) => a <= b,
);
variableEventConditions.set(EQUAL, (a: number, b: number) => a === b);
variableEventConditions.set(
  GREATER_THAN_OR_EQUAL,
  (a: number, b: number) => a >= b,
);
variableEventConditions.set(GREATER_THAN, (a: number, b: number) => a > b);
variableEventConditions.set(NOT_EQUAL, (a: number, b: number) => a !== b);

export const TriggerRegisterVariableEvent = wrapGame(
  (
    game,
    whichTrigger: trigger,
    varName: string,
    opcode: limitop,
    limitval: number,
  ): event => {
    const event = getEvent(EVENT_GAME_VARIABLE_LIMIT);
    whichTrigger.events.push(event);
    let hit = false;
    const condition = variableEventConditions.get(opcode);
    if (!condition) {
      throw new Error(`Unhandled variable event ${opcode.limitopId}`);
    }
    game.globalTickChecks.add((): void => {
      if (!whichTrigger.enabled) return;
      if (condition(globalThis[varName as keyof typeof globalThis], limitval)) {
        if (!hit) {
          hit = true;
          runContext.withTemp(() => {
            const run = getRun();
            run.triggeringTrigger = whichTrigger;
            if (whichTrigger.evaluate()) whichTrigger.execute();
          });
        }
      } else hit = false;
    });

    return event;
  },
);

// EVENT_GAME_VARIABLE_LIMIT
// constant native string GetTriggeringVariableName takes nothing returns string

// Creates it's own timer and triggers when it expires
export const TriggerRegisterTimerEvent = (
  whichTrigger: trigger,
  timeout: number,
  periodic: boolean,
): event => {
  // todo: does WC3 use timers; do we care about the handle
  const timer = CreateTimer();
  TimerStart(timer, timeout, periodic, () => {
    newRun(
      {
        triggeringTrigger: whichTrigger,
      },
      () => {
        if (whichTrigger.evaluate()) whichTrigger.execute();
      },
    );
  });

  const event = getEvent(EVENT_GAME_TIMER_EXPIRED);
  whichTrigger.events.push(event);

  return event;
};

// Triggers when the timer you tell it about expires
export const TriggerRegisterTimerExpireEvent = (
  whichTrigger: trigger,
  t: timer,
): event => {
  notImplemented("TriggerRegisterTimerExpireEvent");

  const event = getEvent(EVENT_GAME_TIMER_EXPIRED);
  whichTrigger.events.push(event);

  const oldCallback = t.callback;
  t.callback = () =>
    newRun({ triggeringTrigger: whichTrigger }, () => {
      let error;
      try {
        if (whichTrigger.evaluate()) whichTrigger.execute();
      } catch (err) {
        error = err;
      }

      if (oldCallback) {
        try {
          oldCallback();
        } catch (err) {
          if (!error) error = err;
        }
      }

      if (error) throw error;
    });

  return event;
};

export const TriggerRegisterGameStateEvent = (
  whichTrigger: trigger,
  whichState: gamestate,
  opcode: limitop,
  limitval: number,
): event => {
  notImplemented("TriggerRegisterGameStateEvent", true);
  const event = getEvent(EVENT_GAME_STATE_LIMIT);
  event.gamestate = whichState;
  event.limitop = opcode;
  event.limitval = limitval;
  whichTrigger.events.push(event);
  return event;
};

export const TriggerRegisterDialogEvent = (
  whichTrigger: trigger,
  whichDialog: dialog,
): event => {
  notImplemented("TriggerRegisterDialogEvent", true);
  const event = getEvent(EVENT_DIALOG_CLICK);
  event.dialog = whichDialog;
  whichTrigger.events.push(event);
  return event;
};

export const TriggerRegisterDialogButtonEvent = (
  whichTrigger: trigger,
  whichButton: button,
): event => {
  notImplemented("TriggerRegisterDialogButtonEvent", true);
  const event = getEvent(EVENT_DIALOG_BUTTON_CLICK);
  event.button = whichButton;
  whichTrigger.events.push(event);
  return event;
};

//  EVENT_GAME_STATE_LIMIT
export const GetEventGameState = wrapRun(
  (run): gamestate | null => run.eventGameState,
);

export const TriggerRegisterGameEvent = (
  whichTrigger: trigger,
  whichGameEvent: gameevent,
): event => {
  notImplemented("TriggerRegisterGameEvent", true);
  const event = getEvent(whichGameEvent);
  whichTrigger.events.push(event);
  return event;
};

// EVENT_GAME_VICTORY
export const GetWinningPlayer = wrapRun(
  (run): player | null => run.winningPlayer,
);

export const TriggerRegisterEnterRegion = (
  whichTrigger: trigger,
  whichRegion: region,
  filter: boolexpr | null,
): event => {
  const callback = (unit: unit): void => {
    if (filter && !newRun({ filterUnit: unit }, filter.func)) return;

    newRun(
      {
        triggeringTrigger: whichTrigger,
        triggerUnit: unit,
      },
      () => {
        if (whichTrigger.evaluate()) whichTrigger.execute();
      },
    );
  };

  const event = getEvent(EVENT_GAME_ENTER_REGION);
  event.region = whichRegion;
  if (filter) event.filter = filter;

  whichRegion.addEnterListener(callback, event);

  // this isn't wired up to the game, so it'll never automatically fire
  notImplemented("TriggerRegisterEnterRegion", true);
  return event;
};

// EVENT_GAME_ENTER_REGION
export const GetTriggeringRegion = wrapRun(
  (run): region | null => run.triggeringRegion,
);

export const GetEnteringUnit = wrapRun((run): unit | null => run.enteringUnit);

// EVENT_GAME_LEAVE_REGION

export const TriggerRegisterLeaveRegion = (
  whichTrigger: trigger,
  whichRegion: region,
  filter: boolexpr | null,
): event => {
  notImplemented("TriggerRegisterLeaveRegion", true);
  const event = getEvent(EVENT_GAME_LEAVE_REGION);
  event.region = whichRegion;
  if (filter) event.filter = filter;
  whichTrigger.events.push(event);
  return event;
};

export const GetLeavingUnit = wrapRun((run): unit | null => run.leavingUnit);

export const TriggerRegisterTrackableHitEvent = (
  whichTrigger: trigger,
  t: trackable,
): event => {
  notImplemented("TriggerRegisterTrackableHitEvent", true);
  const event = getEvent(EVENT_GAME_TRACKABLE_HIT);
  event.trackable = t;
  whichTrigger.events.push(event);
  return event;
};

export const TriggerRegisterTrackableTrackEvent = (
  whichTrigger: trigger,
  t: trackable,
): event => {
  notImplemented("TriggerRegisterTrackableTrackEvent", true);
  const event = getEvent(EVENT_GAME_TRACKABLE_TRACK);
  event.trackable = t;
  whichTrigger.events.push(event);
  return event;
};

// EVENT_GAME_TRACKABLE_HIT
// EVENT_GAME_TRACKABLE_TRACK
export const GetTriggeringTrackable = wrapRun(
  (run): trackable | null => run.triggeringTrackable,
);

// EVENT_DIALOG_BUTTON_CLICK
export const GetClickedButton = wrapRun(
  (run): button | null => run.clickedButton,
);

export const GetClickedDialog = wrapRun(
  (run): dialog | null => run.clickedDialog,
);

// EVENT_GAME_TOURNAMENT_FINISH_SOON
export const GetTournamentFinishSoonTimeRemaining = wrapRun(
  (run): number | null => run.tournamentFinishSoonTimeRemaining,
);

export const GetTournamentFinishNowRule = wrapRun(
  (run): number | null => run.tournamentFinishNowRule,
);

export const GetTournamentFinishNowPlayer = wrapRun(
  (run): player | null => run.tournamentFinishNowPlayer,
);

export const GetTournamentScore = (whichPlayer: player): number => {
  notImplemented("GetTournamentScore");
  return 0;
};

// EVENT_GAME_SAVE
export const GetSaveBasicFilename = wrapRun(
  (run): string => run.saveBasicFilename,
);
