
import { BinaryHeap } from "./BianryHeap";
import { gameContext } from "./contexts";
import {
	MAP_PLACEMENT_RANDOM,
	MAP_SPEED_FASTEST,
	MAP_DIFFICULTY_NORMAL,
	MAP_DENSITY_MEDIUM,
} from "./api/common/constants/mapSetup";

export class Game {

	name = "";
	description = "";
	teams = 1;
	players: Array<player> = [];
	startLocations: Array<StartLocation> = [];
	startLocationPriorites: Array<startlocprio> = [];
	supportedGameTypes: Map<gametype, boolean> = new Map();
	mapFlags: Map<mapflag, boolean> = new Map();
	placement: placement = MAP_PLACEMENT_RANDOM;
	gameSpeed: gamespeed = MAP_SPEED_FASTEST;
	gameDifficulty: gamedifficulty = MAP_DIFFICULTY_NORMAL;
	resourceDensity: mapdensity = MAP_DENSITY_MEDIUM;
	creatureDensity: mapdensity = MAP_DENSITY_MEDIUM;

	time = 0;
	timers = new BinaryHeap( ( t: timer ) => t.nextTick );
	triggers: Set<trigger> = new Set();
	globalTickChecks: Set<() => void> = new Set();

	log: Array<{from?: player; to?: player; message: string}> = [];

	tick( delta: number ): void {

		const newTime = this.time + delta;

		while ( this.timers.size && this.timers.peak().nextTick <= newTime ) {

			const timer = this.timers.pop();
			timer.lastTick += timer.interval;
			if ( timer.periodic ) {

				timer.nextTick += timer.interval;
				this.timers.push( timer );

			} else timer.nextTick = timer.lastTick;

			if ( timer.callback ) {

				this.time = timer.lastTick;
				timer.callback();

			}

		}

		this.globalTickChecks.forEach( v => v() );

		this.time = newTime;

	}

}

export const wrapGame = gameContext.dataWrapper( () => new Game() );
export const getGame = wrapGame( g => g );
