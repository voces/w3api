import { wrapRun } from "../../Run";
import { Game, wrapGame } from "../../Game";
import { contextIndexer, getAgent } from "../../handles";

export const CreateTimer = contextIndexer(
  wrapGame(
    (game: Game, id: number): timer => ({
      ...getAgent(),
      active: false,
      callback: null,
      interval: 1,
      lastTick: game.time,
      nextTick: game.time + 1,
      periodic: false,
      start: game.time,
      timerId: id,
    }),
  ),
);

export const DestroyTimer = (whichTimer: timer | null): void =>
  whichTimer ? whichTimer.remove() : undefined;

export const TimerStart = wrapGame(
  (
    game: Game,
    whichTimer: timer,
    timeout: number,
    periodic: boolean,
    handlerFunc: (() => void) | null,
  ): void => {
    whichTimer.callback = handlerFunc;
    whichTimer.interval = timeout;
    whichTimer.lastTick = game.time;
    whichTimer.nextTick = game.time + timeout;
    whichTimer.periodic = periodic;
    whichTimer.start = game.time;

    if (!whichTimer.active) game.timers.push(whichTimer);
    whichTimer.active = true;
  },
);

export const TimerGetElapsed = wrapGame(
  (game: Game, whichTimer: timer): number => game.time - whichTimer.start,
);

export const TimerGetRemaining = (whichTimer: timer): number =>
  whichTimer.nextTick - whichTimer.start;

export const TimerGetTimeout = (whichTimer: timer): number =>
  whichTimer.interval;

export const PauseTimer = wrapGame((game: Game, whichTimer: timer): void => {
  whichTimer.active = false;
  game.timers.remove(whichTimer);
});

export const ResumeTimer = wrapGame((game: Game, whichTimer: timer): void => {
  whichTimer.lastTick = game.time;
  whichTimer.nextTick = game.time + whichTimer.interval;
  whichTimer.start = game.time;
  if (!whichTimer.active) game.timers.push(whichTimer);
  whichTimer.active = true;
});

export const GetExpiredTimer = wrapRun((run) => run.expiredTimer);
