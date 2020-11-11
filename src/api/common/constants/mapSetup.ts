import {
	ConvertGameDifficulty,
	ConvertGameSpeed,
	ConvertGameType,
	ConvertMapControl,
	ConvertMapDensity,
	ConvertMapFlag,
	ConvertPlacement,
	ConvertPlayerSlotState,
	ConvertRacePref,
	ConvertStartLocPrio,
} from "../converters";

// ===================================================
// Map Setup Constants
// ===================================================

export const RACE_PREF_HUMAN = ConvertRacePref(1);
export const RACE_PREF_ORC = ConvertRacePref(2);
export const RACE_PREF_NIGHTELF = ConvertRacePref(4);
export const RACE_PREF_UNDEAD = ConvertRacePref(8);
export const RACE_PREF_DEMON = ConvertRacePref(16);
export const RACE_PREF_RANDOM = ConvertRacePref(32);
export const RACE_PREF_USER_SELECTABLE = ConvertRacePref(64);

export const MAP_CONTROL_USER = ConvertMapControl(0);
export const MAP_CONTROL_COMPUTER = ConvertMapControl(1);
export const MAP_CONTROL_RESCUABLE = ConvertMapControl(2);
export const MAP_CONTROL_NEUTRAL = ConvertMapControl(3);
export const MAP_CONTROL_CREEP = ConvertMapControl(4);
export const MAP_CONTROL_NONE = ConvertMapControl(5);

export const GAME_TYPE_MELEE = ConvertGameType(1);
export const GAME_TYPE_FFA = ConvertGameType(2);
export const GAME_TYPE_USE_MAP_SETTINGS = ConvertGameType(4);
export const GAME_TYPE_BLIZ = ConvertGameType(8);
export const GAME_TYPE_ONE_ON_ONE = ConvertGameType(16);
export const GAME_TYPE_TWO_TEAM_PLAY = ConvertGameType(32);
export const GAME_TYPE_THREE_TEAM_PLAY = ConvertGameType(64);
export const GAME_TYPE_FOUR_TEAM_PLAY = ConvertGameType(128);

export const MAP_FOG_HIDE_TERRAIN = ConvertMapFlag(1);
export const MAP_FOG_MAP_EXPLORED = ConvertMapFlag(2);
export const MAP_FOG_ALWAYS_VISIBLE = ConvertMapFlag(4);

export const MAP_USE_HANDICAPS = ConvertMapFlag(8);
export const MAP_OBSERVERS = ConvertMapFlag(16);
export const MAP_OBSERVERS_ON_DEATH = ConvertMapFlag(32);

export const MAP_FIXED_COLORS = ConvertMapFlag(128);

export const MAP_LOCK_RESOURCE_TRADING = ConvertMapFlag(256);
export const MAP_RESOURCE_TRADING_ALLIES_ONLY = ConvertMapFlag(512);

export const MAP_LOCK_ALLIANCE_CHANGES = ConvertMapFlag(1024);
export const MAP_ALLIANCE_CHANGES_HIDDEN = ConvertMapFlag(2048);

export const MAP_CHEATS = ConvertMapFlag(4096);
export const MAP_CHEATS_HIDDEN = ConvertMapFlag(8192);

export const MAP_LOCK_SPEED = ConvertMapFlag(8192 * 2);
export const MAP_LOCK_RANDOM_SEED = ConvertMapFlag(8192 * 4);
export const MAP_SHARED_ADVANCED_CONTROL = ConvertMapFlag(8192 * 8);
export const MAP_RANDOM_HERO = ConvertMapFlag(8192 * 16);
export const MAP_RANDOM_RACES = ConvertMapFlag(8192 * 32);
export const MAP_RELOADED = ConvertMapFlag(8192 * 64);

export const MAP_PLACEMENT_RANDOM = ConvertPlacement(0);
export const MAP_PLACEMENT_FIXED = ConvertPlacement(1);
export const MAP_PLACEMENT_USE_MAP_SETTINGS = ConvertPlacement(2);
export const MAP_PLACEMENT_TEAMS_TOGETHER = ConvertPlacement(3);

export const MAP_LOC_PRIO_LOW = ConvertStartLocPrio(0);
export const MAP_LOC_PRIO_HIGH = ConvertStartLocPrio(1);
export const MAP_LOC_PRIO_NOT = ConvertStartLocPrio(2);

export const MAP_DENSITY_NONE = ConvertMapDensity(0);
export const MAP_DENSITY_LIGHT = ConvertMapDensity(1);
export const MAP_DENSITY_MEDIUM = ConvertMapDensity(2);
export const MAP_DENSITY_HEAVY = ConvertMapDensity(3);

export const MAP_DIFFICULTY_EASY = ConvertGameDifficulty(0);
export const MAP_DIFFICULTY_NORMAL = ConvertGameDifficulty(1);
export const MAP_DIFFICULTY_HARD = ConvertGameDifficulty(2);
export const MAP_DIFFICULTY_INSANE = ConvertGameDifficulty(3);

export const MAP_SPEED_SLOWEST = ConvertGameSpeed(0);
export const MAP_SPEED_SLOW = ConvertGameSpeed(1);
export const MAP_SPEED_NORMAL = ConvertGameSpeed(2);
export const MAP_SPEED_FAST = ConvertGameSpeed(3);
export const MAP_SPEED_FASTEST = ConvertGameSpeed(4);

export const PLAYER_SLOT_STATE_EMPTY = ConvertPlayerSlotState(0);
export const PLAYER_SLOT_STATE_PLAYING = ConvertPlayerSlotState(1);
export const PLAYER_SLOT_STATE_LEFT = ConvertPlayerSlotState(2);
