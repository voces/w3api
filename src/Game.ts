
// import { ObjectsTranslator } from "wc3maptranslator/lib/translators/object/ObjectsTranslator";
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

	private data: Record<number, Record<string, any>> = {}
	private units: Set<unit> = new Set();

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

	// loadData( buffer: Buffer ): void {

	// 	// const translator = new ObjectsTranslator();
	// 	// const { errors, json } = translator.warToJson( translator.ObjectType.Units, buffer );

	// 	if ( errors.length ) throw new Error( errors[ 0 ] );

	// 	debugger;
	// 	console.log( json );

	// 	// eslint-disable-next-line no-extra-parens
	// 	// ( json as unknown as TranslatorUnit[] ).forEach( v => {

	// 	// 	this.data[ v.type ] = v;

	// 	// } );

	// }

}

export const wrapGame = gameContext.dataWrapper( () => new Game() );
export const getGame = wrapGame( g => g );
