import { notImplemented } from "../../errors";
import { wrapGame } from "../../Game";
import { contextIndexer, getAgent } from "../../handles";

// ============================================================================
// Timer Dialog API

export const CreateTimerDialog = contextIndexer(
  wrapGame(
    (game, id: number, t: timer | null): timerdialog => {
      notImplemented("CreateTimerDialog", false);
      return { ...getAgent(), timerdialogId: id };
    },
  ),
);

export const DestroyTimerDialog = (whichDialog: timerdialog): void => {
  notImplemented("DestroyTimerDialog");
};

export const TimerDialogSetTitle = (
  whichDialog: timerdialog,
  title: string,
): void => {
  notImplemented("TimerDialogSetTitle");
};

export const TimerDialogSetTitleColor = (
  whichDialog: timerdialog,
  red: number,
  green: number,
  blue: number,
  alpha: number,
): void => {
  notImplemented("TimerDialogSetTitleColor");
};

export const TimerDialogSetTimeColor = (
  whichDialog: timerdialog,
  red: number,
  green: number,
  blue: number,
  alpha: number,
): void => {
  notImplemented("TimerDialogSetTimeColor");
};

export const TimerDialogSetSpeed = (
  whichDialog: timerdialog,
  speedMultFactor: number,
): void => {
  notImplemented("TimerDialogSetSpeed");
};

export const TimerDialogDisplay = (
  whichDialog: timerdialog,
  display: boolean,
): void => {
  notImplemented("TimerDialogDisplay");
};

export const IsTimerDialogDisplayed = (whichDialog: timerdialog): boolean => {
  notImplemented("IsTimerDialogDisplayed");
  return false;
};

export const TimerDialogSetRealTimeRemaining = (
  whichDialog: timerdialog,
  timeRemaining: number,
): void => {
  notImplemented("TimerDialogSetRealTimeRemaining");
};
