
import { mapContext } from "./contexts/map";
import { getPlayer } from "./converters";

// ============================================================================
// Map Setup API
//
//  These are native functions for describing the map configuration
//  these funcs should only be used in the "config" function of
//  a map script. The functions should also be called in this order
//  ( i.e. call SetPlayers before SetPlayerColor...
//

type StartLocation = {
	x: number;
	y: number;
}

// type ES6Map = Map;

type Map = {
	name: string;
	description: string;
	teams: Array<Array<player>>;
	players: Array<player>;
	startLocations: Array<StartLocation>;
	// supportGameType: ES6Map<gametype, boolean>;
}

const wrapMap = mapContext.dataWrapper(
	() => ( { name: "", description: "", teams: [], players: [], startLocations: [] } as Map ),
);

export const SetMapName = wrapMap( ( map: Map, name: string ): void => { map.name = name } );
export const SetMapDescription = wrapMap( ( map: Map, description: string ): void => { map.description = description } );
export const SetTeams = wrapMap( ( map: Map, teamCount: number ): void => { map.teams.length = teamCount } );
export const SetPlayers = wrapMap( ( map: Map, playerCount: number ): void => { map.players.length = playerCount } );
export const DefineStartLocation = wrapMap( ( map: Map, whichStartLoc: number, x: number, y: number ): void => {

	map.startLocations[ whichStartLoc ] = { x, y };

} );
export const DefineStartLocationLoc = wrapMap( ( map: Map, whichStartLoc: number, whichLocation: location ): void => {} );
export const SetStartLocPrioCount = wrapMap( ( map: Map, whichStartLoc: number, prioSlotCount: number ): void => {} );
export const SetStartLocPrio = wrapMap( ( map: Map, whichStartLoc: number, prioSlotIndex: number, otherStartLocIndex: number, priority: startlocprio ): void => {} );
export const GetStartLocPrioSlot = wrapMap( ( map: Map, whichStartLoc: number, prioSlotIndex: number ): number => {} );
export const GetStartLocPrio = wrapMap( ( map: Map, whichStartLoc: number, prioSlotIndex: number ): startlocprio => {} );
export const SetGameTypeSupported = wrapMap( ( map: Map, whichGameType: gametype, value: boolean ): void => {} );

export const SetMapFlag = wrapMap( ( map: Map, whichMapFlag: mapflag, value: boolean ): void => {} );

export const SetGamePlacement = wrapMap( ( map: Map, whichPlacementType: placement ): void => {} );

export const SetGameSpeed = wrapMap( ( map: Map, whichspeed: gamespeed ): void => {} );

export const SetGameDifficulty = wrapMap( ( map: Map, whichdifficulty: gamedifficulty ): void => {} );

export const SetResourceDensity = wrapMap( ( map: Map, whichdensity: mapdensity ): void => {} );

export const SetCreatureDensity = wrapMap( ( map: Map, whichdensity: mapdensity ): void => {} );

export const GetTeams = wrapMap( ( map: Map ): number => {} );

export const GetPlayers = wrapMap( ( map: Map ): number => {} );

export const IsGameTypeSupported = wrapMap( ( map: Map, whichGameType: gametype ): boolean => {} );

export const GetGameTypeSelected = wrapMap( ( map: Map ): gametype => {} );

export const IsMapFlagSet = wrapMap( ( map: Map, whichMapFlag: mapflag ): boolean => {} );

export const GetGamePlacement = wrapMap( ( map: Map ): placement => {} );

export const GetGameSpeed = wrapMap( ( map: Map ): gamespeed => {} );

export const GetGameDifficulty = wrapMap( ( map: Map ): gamedifficulty => {} );

export const GetResourceDensity = wrapMap( ( map: Map ): mapdensity => {} );

export const GetCreatureDensity = wrapMap( ( map: Map ): mapdensity => {} );

export const GetStartLocationX = wrapMap( ( map: Map, whichStartLocation: number ): number => {} );

export const GetStartLocationY = wrapMap( ( map: Map, whichStartLocation: number ): number => {} );

export const GetStartLocationLoc = wrapMap( ( map: Map, whichStartLocation: number ): location => {} );

export const SetPlayerTeam = wrapMap( ( map: Map, whichPlayer: player, whichTeam: number ): void => {} );

export const SetPlayerStartLocation = wrapMap( ( map: Map, whichPlayer: player, startLocIndex: number ): void => {} );
/* eslint-enable padded-blocks */

// forces player to have the specified start loc and marks the start loc as occupied
// which removes it from consideration for subsequently placed players
// ( i.e. you can use this to put people in a fixed loc and then
//   use random placement for any unplaced players etc )
export const ForcePlayerStartLocation = wrapMap( ( map: Map, whichPlayer: player, startLocIndex: number ): void => {} );

export const SetPlayerColor = wrapMap( ( map: Map, whichPlayer: player, color: playercolor ): void => {} );

export const SetPlayerAlliance = wrapMap( ( map: Map, sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype, value: boolean ): void => {} );

export const SetPlayerTaxRate = wrapMap( ( map: Map, sourcePlayer: player, otherPlayer: player, whichResource: playerstate, rate: number ): void => {} );

export const SetPlayerRacePreference = wrapMap( ( map: Map, whichPlayer: player, whichRacePreference: racepreference ): void => {} );

export const SetPlayerRaceSelectable = wrapMap( ( map: Map, whichPlayer: player, value: boolean ): void => {} );

export const SetPlayerController = wrapMap( ( map: Map, whichPlayer: player, controlType: mapcontrol ): void => {} );

export const SetPlayerName = wrapMap( ( map: Map, whichPlayer: player, name: string ): void => {} );

export const SetPlayerOnScoreScreen = wrapMap( ( map: Map, whichPlayer: player, flag: boolean ): void => {} );

export const GetPlayerTeam = wrapMap( ( map: Map, whichPlayer: player ): number => {} );

export const GetPlayerStartLocation = wrapMap( ( map: Map, whichPlayer: player ): number => {} );

export const GetPlayerColor = wrapMap( ( map: Map, whichPlayer: player ): playercolor => {} );

export const GetPlayerSelectable = wrapMap( ( map: Map, whichPlayer: player ): boolean => {} );

export const GetPlayerController = wrapMap( ( map: Map, whichPlayer: player ): mapcontrol => {} );

export const GetPlayerSlotState = wrapMap( ( map: Map, whichPlayer: player ): playerslotstate => {} );

export const GetPlayerTaxRate = wrapMap( ( map: Map, sourcePlayer: player, otherPlayer: player, whichResource: playerstate ): number => {} );

export const IsPlayerRacePrefSet = wrapMap( ( map: Map, whichPlayer: player, pref: racepreference ): boolean => {} );

export const GetPlayerName = wrapMap( ( map: Map, whichPlayer: player ): string => {} );
