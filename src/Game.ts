
import { mapUnitSpecs, UnitSpec, mapStrings, replaceStrings } from "w3xdata";
import { BinaryHeap } from "./BianryHeap";
import { gameContext } from "./contexts";
import {
	MAP_PLACEMENT_RANDOM,
	MAP_SPEED_FASTEST,
	MAP_DIFFICULTY_NORMAL,
	MAP_DENSITY_MEDIUM,
} from "./api/common/constants/mapSetup";

export class Game {

	creatureDensity: mapdensity = MAP_DENSITY_MEDIUM;
	description = "";
	gameDifficulty: gamedifficulty = MAP_DIFFICULTY_NORMAL;
	gameSpeed: gamespeed = MAP_SPEED_FASTEST;
	globalTickChecks: Set<() => void> = new Set();
	log: Array<{from?: player; to?: player; message: string}> = [];
	mapFlags: Map<mapflag, boolean> = new Map();
	name = "";
	placement: placement = MAP_PLACEMENT_RANDOM;
	players: Array<player> = [];
	regions: Set<region> = new Set();
	resourceDensity: mapdensity = MAP_DENSITY_MEDIUM;
	startLocationPriorites: Array<startlocprio> = [];
	startLocations: Array<StartLocation> = [];
	supportedGameTypes: Map<gametype, boolean> = new Map();
	teams = 1;
	time = 0;
	timers = new BinaryHeap( ( t: timer ) => t.nextTick );
	triggers: Set<trigger> = new Set();

	data: {
		units: Record<string, UnitSpec>;
		strings: Record<string, string>;
	} = { units: {}, strings: {} };

	private units: Set<unit> = new Set();

	// apparently the delta should ALWAYS 1/32 ?
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

	addUnit( unit: unit ): void {

		this.units.add( unit );
		for ( const region of this.regions )
			if ( region.contains( unit ) )
				region.addUnit( unit );

	}

	forEachUnit( fn: ( unit: unit ) => void ): void {

		this.units.forEach( u => fn( u ) );

	}

	loadData( { w3u, wts }: {w3u: Buffer; wts: Buffer} ): void {

		this.data.strings = mapStrings( wts );
		this.data.units = replaceStrings( mapUnitSpecs( w3u ), this.data.strings );

	}

}

export const wrapGame = gameContext.dataWrapper( () => new Game() );
export const getGame = wrapGame( g => g );
