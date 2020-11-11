import { getPlayer } from "../../PlayerClass";

// ============================================================================
// Player API
export const Player = (number: number): player => getPlayer(number);

export const GetLocalPlayer = (): player => {};

export const IsPlayerAlly = (
	whichPlayer: player,
	otherPlayer: player,
): boolean => {};

export const IsPlayerEnemy = (
	whichPlayer: player,
	otherPlayer: player,
): boolean => {};

export const IsPlayerInForce = (
	whichPlayer: player,
	whichForce: force,
): boolean => whichForce.players.has(whichPlayer);

export const IsPlayerObserver = (whichPlayer: player): boolean => {};

export const IsVisibleToPlayer = (
	x: number,
	y: number,
	whichPlayer: player,
): boolean => {};

export const IsLocationVisibleToPlayer = (
	whichLocation: location,
	whichPlayer: player,
): boolean => {};

export const IsFoggedToPlayer = (
	x: number,
	y: number,
	whichPlayer: player,
): boolean => {};

export const IsLocationFoggedToPlayer = (
	whichLocation: location,
	whichPlayer: player,
): boolean => {};

export const IsMaskedToPlayer = (
	x: number,
	y: number,
	whichPlayer: player,
): boolean => {};

export const IsLocationMaskedToPlayer = (
	whichLocation: location,
	whichPlayer: player,
): boolean => {};

export const GetPlayerRace = (whichPlayer: player): race => {};

export const GetPlayerId = (whichPlayer: player): number =>
	whichPlayer.playerId;

export const GetPlayerUnitCount = (
	whichPlayer: player,
	includeIncomplete: boolean,
): number => {};

export const GetPlayerTypedUnitCount = (
	whichPlayer: player,
	unitName: string,
	includeIncomplete: boolean,
	includeUpgrades: boolean,
): number => {};

export const GetPlayerStructureCount = (
	whichPlayer: player,
	includeIncomplete: boolean,
): number => {};

export const GetPlayerState = (
	whichPlayer: player,
	whichPlayerState: playerstate,
): number => {};

export const GetPlayerScore = (
	whichPlayer: player,
	whichPlayerScore: playerscore,
): number => {};

export const GetPlayerAlliance = (
	sourcePlayer: player,
	otherPlayer: player,
	whichAllianceSetting: alliancetype,
): boolean => {};

export const GetPlayerHandicap = (whichPlayer: player): number => {};

export const GetPlayerHandicapXP = (whichPlayer: player): number => {};

export const SetPlayerHandicap = (
	whichPlayer: player,
	handicap: number,
): void => {};

export const SetPlayerHandicapXP = (
	whichPlayer: player,
	handicap: number,
): void => {};

export const SetPlayerTechMaxAllowed = (
	whichPlayer: player,
	techid: number,
	maximum: number,
): void => {};

export const GetPlayerTechMaxAllowed = (
	whichPlayer: player,
	techid: number,
): number => {};

export const AddPlayerTechResearched = (
	whichPlayer: player,
	techid: number,
	levels: number,
): void => {};

export const SetPlayerTechResearched = (
	whichPlayer: player,
	techid: number,
	setToLevel: number,
): void => {};

export const GetPlayerTechResearched = (
	whichPlayer: player,
	techid: number,
	specificonly: boolean,
): boolean => {};

export const GetPlayerTechCount = (
	whichPlayer: player,
	techid: number,
	specificonly: boolean,
): number => {};

export const SetPlayerUnitsOwner = (
	whichPlayer: player,
	newOwner: number,
): void => {};

export const CripplePlayer = (
	whichPlayer: player,
	toWhichPlayers: force,
	flag: boolean,
): void => {};

export const SetPlayerAbilityAvailable = (
	whichPlayer: player,
	abilid: number,
	avail: boolean,
): void => {};

export const SetPlayerState = (
	whichPlayer: player,
	whichPlayerState: playerstate,
	value: number,
): void => {};

export const RemovePlayer = (
	whichPlayer: player,
	gameResult: playergameresult,
): void => {};

// Used to store hero level data for the scorescreen
// before units are moved to neutral passive in melee games
//
export const CachePlayerHeroData = (whichPlayer: player): void => {};
