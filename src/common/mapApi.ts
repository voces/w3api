
// ============================================================================
// Map Setup API
//
//  These are native functions for describing the map configuration
//  these funcs should only be used in the "config" function of
//  a map script. The functions should also be called in this order
//  ( i.e. call SetPlayers before SetPlayerColor...
//
const map = {
	name: "",
	description: "",
	teams: [] as Array<Array<player>>,
	players: [] as Array<player>,
};
export const SetMapName = ( name: string ): void => { map.name = name };
export const SetMapDescription = ( description: string ): void => { map.description = description };
export const SetTeams = ( teamCount: number ): void => { map.teams.length = teamCount };
export const SetPlayers = ( playerCount: number ): void => { map.players.length = playerCount };
export const DefineStartLocation = ( whichStartLoc: number, x: number, y: number ): void => {

	const player = map.players[ whichStartLoc ] || { __player: true, __handle: nextHandleId() };
	if ( player.startLocation ) player.startLocation = { ...player.startLocation, x, y };
	else player.startLocation = { x, y };

};
export const DefineStartLocationLoc = ( whichStartLoc: number, whichLocation: location ): void => { DefineStartLocation( whichStartLoc, whichLocation.x, whichLocation.y ) };
export const SetStartLocPrioCount = ( whichStartLoc: number, prioSlotCount: number ): void => {

	const player = map.players[ whichStartLoc ] || { __player: true, __handle: nextHandleId() };
	if ( player.startLocation ) player.startLocation = { ...player.startLocation, priority: prioSlotCount };
	else player.startLocation = { x: 0, y: 0, priority: prioSlotCount };

};

export const SetStartLocPrio = ( whichStartLoc: number, prioSlotIndex: number, otherStartLocIndex: number, priority: startlocprio ): void => {};

export const GetStartLocPrioSlot = ( whichStartLoc: number, prioSlotIndex: number ): number => {};

export const GetStartLocPrio = ( whichStartLoc: number, prioSlotIndex: number ): startlocprio => {};

export const SetGameTypeSupported = ( whichGameType: gametype, value: boolean ): void => {};

export const SetMapFlag = ( whichMapFlag: mapflag, value: boolean ): void => {};

export const SetGamePlacement = ( whichPlacementType: placement ): void => {};

export const SetGameSpeed = ( whichspeed: gamespeed ): void => {};

export const SetGameDifficulty = ( whichdifficulty: gamedifficulty ): void => {};

export const SetResourceDensity = ( whichdensity: mapdensity ): void => {};

export const SetCreatureDensity = ( whichdensity: mapdensity ): void => {};

export const GetTeams = (): number => {};

export const GetPlayers = (): number => {};

export const IsGameTypeSupported = ( whichGameType: gametype ): boolean => {};

export const GetGameTypeSelected = (): gametype => {};

export const IsMapFlagSet = ( whichMapFlag: mapflag ): boolean => {};

export const GetGamePlacement = (): placement => {};

export const GetGameSpeed = (): gamespeed => {};

export const GetGameDifficulty = (): gamedifficulty => {};

export const GetResourceDensity = (): mapdensity => {};

export const GetCreatureDensity = (): mapdensity => {};

export const GetStartLocationX = ( whichStartLocation: number ): number => {};

export const GetStartLocationY = ( whichStartLocation: number ): number => {};

export const GetStartLocationLoc = ( whichStartLocation: number ): location => {};

export const SetPlayerTeam = ( whichPlayer: player, whichTeam: number ): void => {};

export const SetPlayerStartLocation = ( whichPlayer: player, startLocIndex: number ): void => {};
/* eslint-enable padded-blocks */

// forces player to have the specified start loc and marks the start loc as occupied
// which removes it from consideration for subsequently placed players
// ( i.e. you can use this to put people in a fixed loc and then
//   use random placement for any unplaced players etc )
export const ForcePlayerStartLocation = ( whichPlayer: player, startLocIndex: number ): void => {};

export const SetPlayerColor = ( whichPlayer: player, color: playercolor ): void => {};

export const SetPlayerAlliance = ( sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype, value: boolean ): void => {};

export const SetPlayerTaxRate = ( sourcePlayer: player, otherPlayer: player, whichResource: playerstate, rate: number ): void => {};

export const SetPlayerRacePreference = ( whichPlayer: player, whichRacePreference: racepreference ): void => {};

export const SetPlayerRaceSelectable = ( whichPlayer: player, value: boolean ): void => {};

export const SetPlayerController = ( whichPlayer: player, controlType: mapcontrol ): void => {};

export const SetPlayerName = ( whichPlayer: player, name: string ): void => {};

export const SetPlayerOnScoreScreen = ( whichPlayer: player, flag: boolean ): void => {};

export const GetPlayerTeam = ( whichPlayer: player ): number => {};

export const GetPlayerStartLocation = ( whichPlayer: player ): number => {};

export const GetPlayerColor = ( whichPlayer: player ): playercolor => {};

export const GetPlayerSelectable = ( whichPlayer: player ): boolean => {};

export const GetPlayerController = ( whichPlayer: player ): mapcontrol => {};

export const GetPlayerSlotState = ( whichPlayer: player ): playerslotstate => {};

export const GetPlayerTaxRate = ( sourcePlayer: player, otherPlayer: player, whichResource: playerstate ): number => {};

export const IsPlayerRacePrefSet = ( whichPlayer: player, pref: racepreference ): boolean => {};

export const GetPlayerName = ( whichPlayer: player ): string => {};
