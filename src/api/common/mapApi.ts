
import {
	GAME_TYPE_USE_MAP_SETTINGS,
} from "./constants/mapSetup";
import { initStartLocation } from "./converters";
import { Location } from "./geometry";
import { wrapGame, Game } from "../../Game";
import { notImplemented } from "../../errors";

// ============================================================================
// Map Setup API
//
//  These are native functions for describing the game configuration
//  these funcs should only be used in the "config" function of
//  a game script. The functions should also be called in this order
//  ( i.e. call SetPlayers before SetPlayerColor...
//

export const SetMapName = wrapGame( ( game: Game, name: string ): void => { game.name = name } );
export const SetMapDescription = wrapGame( ( game: Game, description: string ): void => { game.description = description } );
export const SetTeams = wrapGame( ( game: Game, teamCount: number ): void => { game.teams = teamCount } );
export const SetPlayers = wrapGame( ( game: Game, playerCount: number ): void => { game.players.length = playerCount } );
export const DefineStartLocation = wrapGame( ( game: Game, whichStartLoc: number, x: number, y: number ): void => {

	game.startLocations[ whichStartLoc ] = {
		...initStartLocation(),
		...game.startLocations[ whichStartLoc ],
		x, y,
	};

} );
export const DefineStartLocationLoc = wrapGame( ( game: Game, whichStartLoc: number, whichLocation: location ): void => {

	game.startLocations[ whichStartLoc ] = {
		...initStartLocation(),
		...game.startLocations[ whichStartLoc ],
		x: whichLocation.x, y: whichLocation.y,
	};

} );
export const SetStartLocPrioCount = wrapGame( ( game: Game, whichStartLoc: number, prioSlotCount: number ): void => {

	const startLocation = game.startLocations[ whichStartLoc ] ||
		( game.startLocations[ whichStartLoc ] = initStartLocation() );

	startLocation.priorities.length = prioSlotCount;

} );
export const SetStartLocPrio = wrapGame( ( game: Game, whichStartLoc: number, prioSlotIndex: number, otherStartLocIndex: number, priority: startlocprio ): void => {} );
export const GetStartLocPrioSlot = wrapGame( ( game: Game, whichStartLoc: number, prioSlotIndex: number ): number => 0 );
export const GetStartLocPrio = wrapGame( ( game: Game, whichStartLoc: number, prioSlotIndex: number ): startlocprio => {

	const startLocation = game.startLocations[ whichStartLoc ] ||
		( game.startLocations[ whichStartLoc ] = initStartLocation() );

	return startLocation.priorities[ prioSlotIndex ];

} );
export const SetGameTypeSupported = wrapGame( ( game: Game, whichGameType: gametype, value: boolean ): void => { game.supportedGameTypes.set( whichGameType, value ) } );
export const SetMapFlag = wrapGame( ( game: Game, whichMapFlag: mapflag, value: boolean ): void => { game.mapFlags.set( whichMapFlag, value ) } );
export const SetGamePlacement = wrapGame( ( game: Game, whichPlacementType: placement ): void => { game.placement = whichPlacementType } );
export const SetGameSpeed = wrapGame( ( game: Game, whichspeed: gamespeed ): void => { game.gameSpeed = whichspeed } );
export const SetGameDifficulty = wrapGame( ( game: Game, whichdifficulty: gamedifficulty ): void => { game.gameDifficulty = whichdifficulty } );
export const SetResourceDensity = wrapGame( ( game: Game, whichdensity: mapdensity ): void => { game.resourceDensity = whichdensity } );
export const SetCreatureDensity = wrapGame( ( game: Game, whichdensity: mapdensity ): void => { game.creatureDensity = whichdensity } );
export const GetTeams = wrapGame( ( game: Game ): number => game.teams );
export const GetPlayers = wrapGame( ( game: Game ): number => game.players.length );
export const IsGameTypeSupported = wrapGame( ( game: Game, whichGameType: gametype ): boolean => game.supportedGameTypes.get( whichGameType ) || false );
export const GetGameTypeSelected = wrapGame( (): gametype => {

	notImplemented( "GetGameTypeSelected" );
	return GAME_TYPE_USE_MAP_SETTINGS;

} );
export const IsMapFlagSet = wrapGame( ( game: Game, whichMapFlag: mapflag ): boolean =>game.mapFlags.get( whichMapFlag ) || false );
export const GetGamePlacement = wrapGame( ( game: Game ): placement => game.placement );
export const GetGameSpeed = wrapGame( ( game: Game ): gamespeed => game.gameSpeed );
export const GetGameDifficulty = wrapGame( ( game: Game ): gamedifficulty => game.gameDifficulty );
export const GetResourceDensity = wrapGame( ( game: Game ): mapdensity => game.resourceDensity );
export const GetCreatureDensity = wrapGame( ( game: Game ): mapdensity => game.creatureDensity );
export const GetStartLocationX = wrapGame( ( game: Game, whichStartLocation: number ): number => game.startLocations[ whichStartLocation ].x );
export const GetStartLocationY = wrapGame( ( game: Game, whichStartLocation: number ): number => game.startLocations[ whichStartLocation ].y );
export const GetStartLocationLoc = wrapGame( ( game: Game, whichStartLocation: number ): location => Location( 0, 0 ) );
export const SetPlayerTeam = ( whichPlayer: player, whichTeam: number ): void => { whichPlayer.team = whichTeam };
export const SetPlayerStartLocation = ( whichPlayer: player, startLocIndex: number ): void => { whichPlayer.startLocation = startLocIndex };
/* eslint-enable padded-blocks */

// forces player to have the specified start loc and marks the start loc as occupied
// which removes it from consideration for subsequently placed players
// ( i.e. you can use this to put people in a fixed loc and then
//   use random placement for any unplaced players etc )
export const ForcePlayerStartLocation = ( whichPlayer: player, startLocIndex: number ): void => { whichPlayer.startLocation = startLocIndex };
export const SetPlayerColor = ( whichPlayer: player, color: playercolor ): void => { whichPlayer.color = color };
export const SetPlayerAlliance = ( sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype, value: boolean ): void => {

	if ( ! sourcePlayer.alliances.has( otherPlayer ) ) sourcePlayer.alliances.set( otherPlayer, new Map() );

	const alliances = sourcePlayer.alliances.get( otherPlayer );
	if ( ! alliances ) throw new Error( "This can't happen" );

	alliances.set( whichAllianceSetting, value );

};
export const SetPlayerTaxRate = ( sourcePlayer: player, otherPlayer: player, whichResource: playerstate, rate: number ): void => {

	if ( ! sourcePlayer.taxRates.has( otherPlayer ) ) sourcePlayer.taxRates.set( otherPlayer, new Map() );

	const taxRates = sourcePlayer.taxRates.get( otherPlayer );
	if ( ! taxRates ) throw new Error( "This can't happen" );

	taxRates.set( whichResource, rate );

};
export const SetPlayerRacePreference = ( whichPlayer: player, whichRacePreference: racepreference ): void => { whichPlayer.racePreference = whichRacePreference };
export const SetPlayerRaceSelectable = ( whichPlayer: player, value: boolean ): void => { whichPlayer.raceSelectable = value };
export const SetPlayerController = ( whichPlayer: player, controlType: mapcontrol ): void => { whichPlayer.controller = controlType };
export const SetPlayerName = ( whichPlayer: player, name: string ): void => { whichPlayer.name = name };
export const SetPlayerOnScoreScreen = ( whichPlayer: player, flag: boolean ): void => { whichPlayer.onScoreScreen = flag };
export const GetPlayerTeam = ( whichPlayer: player ): number => whichPlayer.team;
export const GetPlayerStartLocation = ( whichPlayer: player ): number => whichPlayer.startLocation;
export const GetPlayerColor = ( whichPlayer: player ): playercolor => whichPlayer.color;
export const GetPlayerSelectable = ( whichPlayer: player ): boolean => whichPlayer.raceSelectable;
export const GetPlayerController = ( whichPlayer: player ): mapcontrol => whichPlayer.controller;
export const GetPlayerSlotState = ( whichPlayer: player ): playerslotstate => whichPlayer.slotState;
export const GetPlayerTaxRate = ( sourcePlayer: player, otherPlayer: player, whichResource: playerstate ): number => {

	if ( ! sourcePlayer.taxRates.has( otherPlayer ) ) sourcePlayer.taxRates.set( otherPlayer, new Map() );

	const taxRates = sourcePlayer.taxRates.get( otherPlayer );
	if ( ! taxRates ) throw new Error( "This can't happen" );

	return taxRates.get( whichResource ) || 0;

};
export const IsPlayerRacePrefSet = ( whichPlayer: player, pref: racepreference ): boolean => whichPlayer.racePreference === pref;
export const GetPlayerName = ( whichPlayer: player ): string => whichPlayer.name;
