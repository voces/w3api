
import { runContext } from "./contexts";

type RunData = {
    filterUnit: unit | null;
    enumUnit: unit | null;
}

export const wrapRun = runContext.dataWrapper( (): RunData => ( {
	filterUnit: null,
	enumUnit: null,
} ) );
export const getRun = wrapRun( g => g );
