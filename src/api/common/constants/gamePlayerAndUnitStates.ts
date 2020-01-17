
import {
	ConvertIGameState,
	ConvertFGameState,
	ConvertPlayerState,
	ConvertUnitState,
	ConvertAIDifficulty,
	ConvertPlayerScore,
} from "../converters";

// ===================================================
// Game, Player, and Unit States
//
// For use with TriggerRegister<X>StateEvent
//
// ===================================================

export const GAME_STATE_DIVINE_INTERVENTION = ConvertIGameState( 0 );
export const GAME_STATE_DISCONNECTED = ConvertIGameState( 1 );
export const GAME_STATE_TIME_OF_DAY = ConvertFGameState( 2 );

export const PLAYER_STATE_GAME_RESULT = ConvertPlayerState( 0 );

// current resource levels
//
export const PLAYER_STATE_RESOURCE_GOLD = ConvertPlayerState( 1 );
export const PLAYER_STATE_RESOURCE_LUMBER = ConvertPlayerState( 2 );
export const PLAYER_STATE_RESOURCE_HERO_TOKENS = ConvertPlayerState( 3 );
export const PLAYER_STATE_RESOURCE_FOOD_CAP = ConvertPlayerState( 4 );
export const PLAYER_STATE_RESOURCE_FOOD_USED = ConvertPlayerState( 5 );
export const PLAYER_STATE_FOOD_CAP_CEILING = ConvertPlayerState( 6 );

export const PLAYER_STATE_GIVES_BOUNTY = ConvertPlayerState( 7 );
export const PLAYER_STATE_ALLIED_VICTORY = ConvertPlayerState( 8 );
export const PLAYER_STATE_PLACED = ConvertPlayerState( 9 );
export const PLAYER_STATE_OBSERVER_ON_DEATH = ConvertPlayerState( 10 );
export const PLAYER_STATE_OBSERVER = ConvertPlayerState( 11 );
export const PLAYER_STATE_UNFOLLOWABLE = ConvertPlayerState( 12 );

// taxation rate for each resource
//
export const PLAYER_STATE_GOLD_UPKEEP_RATE = ConvertPlayerState( 13 );
export const PLAYER_STATE_LUMBER_UPKEEP_RATE = ConvertPlayerState( 14 );

// cumulative resources collected by the player during the mission
//
export const PLAYER_STATE_GOLD_GATHERED = ConvertPlayerState( 15 );
export const PLAYER_STATE_LUMBER_GATHERED = ConvertPlayerState( 16 );

export const PLAYER_STATE_NO_CREEP_SLEEP = ConvertPlayerState( 25 );

export const UNIT_STATE_LIFE = ConvertUnitState( 0 );
export const UNIT_STATE_MAX_LIFE = ConvertUnitState( 1 );
export const UNIT_STATE_MANA = ConvertUnitState( 2 );
export const UNIT_STATE_MAX_MANA = ConvertUnitState( 3 );

export const AI_DIFFICULTY_NEWBIE = ConvertAIDifficulty( 0 );
export const AI_DIFFICULTY_NORMAL = ConvertAIDifficulty( 1 );
export const AI_DIFFICULTY_INSANE = ConvertAIDifficulty( 2 );

// player score values
export const PLAYER_SCORE_UNITS_TRAINED = ConvertPlayerScore( 0 );
export const PLAYER_SCORE_UNITS_KILLED = ConvertPlayerScore( 1 );
export const PLAYER_SCORE_STRUCT_BUILT = ConvertPlayerScore( 2 );
export const PLAYER_SCORE_STRUCT_RAZED = ConvertPlayerScore( 3 );
export const PLAYER_SCORE_TECH_PERCENT = ConvertPlayerScore( 4 );
export const PLAYER_SCORE_FOOD_MAXPROD = ConvertPlayerScore( 5 );
export const PLAYER_SCORE_FOOD_MAXUSED = ConvertPlayerScore( 6 );
export const PLAYER_SCORE_HEROES_KILLED = ConvertPlayerScore( 7 );
export const PLAYER_SCORE_ITEMS_GAINED = ConvertPlayerScore( 8 );
export const PLAYER_SCORE_MERCS_HIRED = ConvertPlayerScore( 9 );
export const PLAYER_SCORE_GOLD_MINED_TOTAL = ConvertPlayerScore( 10 );
export const PLAYER_SCORE_GOLD_MINED_UPKEEP = ConvertPlayerScore( 11 );
export const PLAYER_SCORE_GOLD_LOST_UPKEEP = ConvertPlayerScore( 12 );
export const PLAYER_SCORE_GOLD_LOST_TAX = ConvertPlayerScore( 13 );
export const PLAYER_SCORE_GOLD_GIVEN = ConvertPlayerScore( 14 );
export const PLAYER_SCORE_GOLD_RECEIVED = ConvertPlayerScore( 15 );
export const PLAYER_SCORE_LUMBER_TOTAL = ConvertPlayerScore( 16 );
export const PLAYER_SCORE_LUMBER_LOST_UPKEEP = ConvertPlayerScore( 17 );
export const PLAYER_SCORE_LUMBER_LOST_TAX = ConvertPlayerScore( 18 );
export const PLAYER_SCORE_LUMBER_GIVEN = ConvertPlayerScore( 19 );
export const PLAYER_SCORE_LUMBER_RECEIVED = ConvertPlayerScore( 20 );
export const PLAYER_SCORE_UNIT_TOTAL = ConvertPlayerScore( 21 );
export const PLAYER_SCORE_HERO_TOTAL = ConvertPlayerScore( 22 );
export const PLAYER_SCORE_RESOURCE_TOTAL = ConvertPlayerScore( 23 );
export const PLAYER_SCORE_TOTAL = ConvertPlayerScore( 24 );
