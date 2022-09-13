import { runContext } from "./contexts";

type RunData = {
  chatString: string;
  clickedButton: button | null;
  clickedDialog: dialog | null;
  enteringUnit: unit | null;
  enumDestructable: destructable | null;
  enumItem: item | null;
  enumPlayer: player | null;
  enumUnit: unit | null;
  eventGameState: gamestate | null;
  expiredTimer: timer | null;
  filterDestructable: destructable | null;
  filterItem: item | null;
  filterPlayer: player | null;
  filterUnit: unit | null;
  leavingUnit: unit | null;
  matchedChatString: string;
  saveBasicFilename: string;
  tournamentFinishNowPlayer: player | null;
  tournamentFinishNowRule: number | null;
  tournamentFinishSoonTimeRemaining: number | null;
  triggeringEventId: eventid | null;
  triggeringPlayer: player | null;
  triggeringRegion: region | null;
  triggeringTrackable: trackable | null;
  triggeringTrigger: trigger | null;
  triggerUnit: unit | null;
  winningPlayer: player | null;
};

export const wrapRun = runContext.dataWrapper(
  (): RunData => ({
    chatString: "",
    clickedButton: null,
    clickedDialog: null,
    enteringUnit: null,
    enumDestructable: null,
    enumItem: null,
    enumPlayer: null,
    enumUnit: null,
    eventGameState: null,
    expiredTimer: null,
    filterDestructable: null,
    filterItem: null,
    filterPlayer: null,
    filterUnit: null,
    leavingUnit: null,
    matchedChatString: "",
    saveBasicFilename: "",
    tournamentFinishNowPlayer: null,
    tournamentFinishNowRule: null,
    tournamentFinishSoonTimeRemaining: null,
    triggeringEventId: null,
    triggeringPlayer: null,
    triggeringRegion: null,
    triggeringTrackable: null,
    triggeringTrigger: null,
    triggerUnit: null,
    winningPlayer: null,
  }),
);
export const getRun = wrapRun((g) => g);
export const newRun = <T>(data: Partial<RunData>, fn: () => T): T =>
  runContext.withTemp(() => {
    const run = getRun();
    Object.assign(run, data);
    return fn();
  });
