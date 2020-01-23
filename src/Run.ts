
import { runContext } from "./contexts";

type RunData = {
    clickedButton: button | null;
    clickedDialog: dialog | null;
    enteringUnit: unit | null;
    enumDestructable: destructable | null;
    enumItem: item | null;
    enumPlayer: player | null;
    enumUnit: unit | null;
    eventGameState: gamestate | null;
    filterDestructable: destructable | null;
    filterItem: item | null;
    filterPlayer: player | null;
    filterUnit: unit | null;
    leavingUnit: unit | null;
    saveBasicFilename: string;
    tournamentFinishNowPlayer: player | null;
    tournamentFinishNowRule: number | null;
    tournamentFinishSoonTimeRemaining: number | null;
    triggeringEventId: eventid | null;
    triggeringRegion: region | null;
    triggeringTrackable: trackable | null;
    triggeringTrigger: trigger | null;
    winningPlayer: player | null;
}

export const wrapRun = runContext.dataWrapper( (): RunData => ( {
	clickedButton: null,
	clickedDialog: null,
	enteringUnit: null,
	enumDestructable: null,
	enumItem: null,
	enumPlayer: null,
	enumUnit: null,
	eventGameState: null,
	filterDestructable: null,
	filterItem: null,
	filterPlayer: null,
	filterUnit: null,
	leavingUnit: null,
	saveBasicFilename: "",
	tournamentFinishNowPlayer: null,
	tournamentFinishNowRule: null,
	tournamentFinishSoonTimeRemaining: null,
	triggeringEventId: null,
	triggeringRegion: null,
	triggeringTrackable: null,
	triggeringTrigger: null,
	winningPlayer: null,
} ) );
export const getRun = wrapRun( g => g );
