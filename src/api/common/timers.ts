
import { contextIndexer, getAgent } from "./converters";
import { wrapGame, Game } from "../../Game";

// ============================================================================
// Timer API
//
export const CreateTimer = contextIndexer( wrapGame( ( game: Game, id: number ): timer => ( {
	...getAgent(),
	active: false,
	interval: 1,
	lastTick: game.time,
	nextTick: game.time + 1,
	periodic: false,
	start: game.time,
	timerId: id,
} ) ) );
export const DestroyTimer = ( whichTimer: timer ): void => whichTimer.remove();
export const TimerStart = wrapGame( ( game: Game, whichTimer: timer, timeout: number, periodic: boolean, handlerFunc?: () => void ): void => {

	whichTimer.callback = handlerFunc;
	whichTimer.interval = timeout;
	whichTimer.lastTick = game.time;
	whichTimer.nextTick = game.time + timeout;
	whichTimer.periodic = periodic;
	whichTimer.start = game.time;

	if ( ! whichTimer.active ) game.timers.push( whichTimer );
	whichTimer.active = true;

} );
export const TimerGetElapsed = wrapGame( ( game: Game, whichTimer: timer ): number => game.time - whichTimer.start );
export const TimerGetRemaining = ( whichTimer: timer ): number => whichTimer.nextTick - whichTimer.start;
export const TimerGetTimeout = ( whichTimer: timer ): number => whichTimer.interval;
export const PauseTimer = wrapGame( ( game: Game, whichTimer: timer ): void => {

	whichTimer.active = false;
	game.timers.remove( whichTimer );

} );
export const ResumeTimer = wrapGame( ( game: Game, whichTimer: timer ): void => {

	whichTimer.lastTick = game.time;
	whichTimer.nextTick = game.time + whichTimer.interval;
	whichTimer.start = game.time;
	if ( ! whichTimer.active ) game.timers.push( whichTimer );
	whichTimer.active = true;

} );
export const GetExpiredTimer = (): timer => {

	console.warn( "GetExpiredTimer not yet implemented" );
	return CreateTimer();

};
