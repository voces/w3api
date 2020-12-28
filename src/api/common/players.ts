/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { notImplemented } from "../../errors";
import { wrapGame } from "../../Game";
import { getPlayer } from "../../PlayerClass";

// ============================================================================
// Player API
export const Player = (number: number): player => getPlayer(number);

export const GetLocalPlayer = wrapGame(
	(game): player => game.players[game.localPlayerId],
);

export const IsPlayerAlly = (
	whichPlayer: player,
	otherPlayer: player,
): boolean => {
	notImplemented("IsPlayerAlly");
	return false;
};

export const IsPlayerEnemy = (
	whichPlayer: player,
	otherPlayer: player,
): boolean => {
	notImplemented("IsPlayerEnemy");
	return false;
};

export const IsPlayerInForce = (
	whichPlayer: player,
	whichForce: force,
): boolean => whichForce.players.has(whichPlayer);

export const IsPlayerObserver = (whichPlayer: player): boolean => {
	notImplemented("IsPlayerObserver");
	return false;
};

export const IsVisibleToPlayer = (
	x: number,
	y: number,
	whichPlayer: player,
): boolean => {
	notImplemented("IsVisibleToPlayer");
	return false;
};

export const IsLocationVisibleToPlayer = (
	whichLocation: location,
	whichPlayer: player,
): boolean => {
	notImplemented("IsLocationVisibleToPlayer");
	return false;
};

export const IsFoggedToPlayer = (
	x: number,
	y: number,
	whichPlayer: player,
): boolean => {
	notImplemented("IsFoggedToPlayer");
	return false;
};

export const IsLocationFoggedToPlayer = (
	whichLocation: location,
	whichPlayer: player,
): boolean => {
	notImplemented("IsLocationFoggedToPlayer");
	return false;
};

export const IsMaskedToPlayer = (
	x: number,
	y: number,
	whichPlayer: player,
): boolean => {
	notImplemented("IsMaskedToPlayer");
	return false;
};

export const IsLocationMaskedToPlayer = (
	whichLocation: location,
	whichPlayer: player,
): boolean => {
	notImplemented("IsLocationMaskedToPlayer");
	return false;
};

export const GetPlayerRace = (whichPlayer: player): race => {
	notImplemented("GetPlayerRace");
	return (null as any) as race;
};

export const GetPlayerId = (whichPlayer: player): number =>
	whichPlayer?.playerId ?? 0;

export const GetPlayerUnitCount = (
	whichPlayer: player,
	includeIncomplete: boolean,
): number => {
	notImplemented("GetPlayerUnitCount");
	return 0;
};

export const GetPlayerTypedUnitCount = (
	whichPlayer: player,
	unitName: string,
	includeIncomplete: boolean,
	includeUpgrades: boolean,
): number => {
	notImplemented("GetPlayerTypedUnitCount");
	return 0;
};

export const GetPlayerStructureCount = (
	whichPlayer: player,
	includeIncomplete: boolean,
): number => {
	notImplemented("GetPlayerStructureCount");
	return 0;
};

export const GetPlayerState = (
	whichPlayer: player,
	whichPlayerState: playerstate,
): number => {
	notImplemented("GetPlayerState");
	return 0;
};

export const GetPlayerScore = (
	whichPlayer: player,
	whichPlayerScore: playerscore,
): number => {
	notImplemented("GetPlayerScore");
	return 0;
};

export const GetPlayerAlliance = (
	sourcePlayer: player,
	otherPlayer: player,
	whichAllianceSetting: alliancetype,
): boolean => {
	notImplemented("GetPlayerAlliance");
	return false;
};

export const GetPlayerHandicap = (whichPlayer: player): number => {
	notImplemented("GetPlayerHandicap");
	return 0;
};

export const GetPlayerHandicapXP = (whichPlayer: player): number => {
	notImplemented("GetPlayerHandicapXP");
	return 0;
};

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
): number => {
	notImplemented("GetPlayerTechMaxAllowed");
	return 0;
};

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
): boolean => {
	notImplemented("GetPlayerTechResearched");
	return false;
};

export const GetPlayerTechCount = (
	whichPlayer: player,
	techid: number,
	specificonly: boolean,
): number => {
	notImplemented("GetPlayerTechCount");
	return 0;
};

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
