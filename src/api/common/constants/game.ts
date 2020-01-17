
import { GetPlayerNeutralPassive, GetPlayerNeutralAggressive } from "./general";
import {
	ConvertPlayerColor,
	ConvertRace,
	ConvertPlayerGameResult,
	ConvertAllianceType,
	ConvertVersion,
	ConvertAttackType,
	ConvertDamageType,
	ConvertWeaponType,
	ConvertPathingType,
	ConvertMouseButtonType,
	ConvertAnimType,
	ConvertSubAnimType,
} from "../converters";

// ===================================================
// Game Constants
// ===================================================

// pfff
export const FALSE = false;
export const TRUE = true;
export const JASS_MAX_ARRAY_SIZE = 32768;

export const PLAYER_NEUTRAL_PASSIVE = GetPlayerNeutralPassive();
export const PLAYER_NEUTRAL_AGGRESSIVE = GetPlayerNeutralAggressive();

export const PLAYER_COLOR_RED = ConvertPlayerColor( 0 );
export const PLAYER_COLOR_BLUE = ConvertPlayerColor( 1 );
export const PLAYER_COLOR_CYAN = ConvertPlayerColor( 2 );
export const PLAYER_COLOR_PURPLE = ConvertPlayerColor( 3 );
export const PLAYER_COLOR_YELLOW = ConvertPlayerColor( 4 );
export const PLAYER_COLOR_ORANGE = ConvertPlayerColor( 5 );
export const PLAYER_COLOR_GREEN = ConvertPlayerColor( 6 );
export const PLAYER_COLOR_PINK = ConvertPlayerColor( 7 );
export const PLAYER_COLOR_LIGHT_GRAY = ConvertPlayerColor( 8 );
export const PLAYER_COLOR_LIGHT_BLUE = ConvertPlayerColor( 9 );
export const PLAYER_COLOR_AQUA = ConvertPlayerColor( 10 );
export const PLAYER_COLOR_BROWN = ConvertPlayerColor( 11 );
export const PLAYER_COLOR_MAROON = ConvertPlayerColor( 12 );
export const PLAYER_COLOR_NAVY = ConvertPlayerColor( 13 );
export const PLAYER_COLOR_TURQUOISE = ConvertPlayerColor( 14 );
export const PLAYER_COLOR_VIOLET = ConvertPlayerColor( 15 );
export const PLAYER_COLOR_WHEAT = ConvertPlayerColor( 16 );
export const PLAYER_COLOR_PEACH = ConvertPlayerColor( 17 );
export const PLAYER_COLOR_MINT = ConvertPlayerColor( 18 );
export const PLAYER_COLOR_LAVENDER = ConvertPlayerColor( 19 );
export const PLAYER_COLOR_COAL = ConvertPlayerColor( 20 );
export const PLAYER_COLOR_SNOW = ConvertPlayerColor( 21 );
export const PLAYER_COLOR_EMERALD = ConvertPlayerColor( 22 );
export const PLAYER_COLOR_PEANUT = ConvertPlayerColor( 23 );

export const RACE_HUMAN = ConvertRace( 1 );
export const RACE_ORC = ConvertRace( 2 );
export const RACE_UNDEAD = ConvertRace( 3 );
export const RACE_NIGHTELF = ConvertRace( 4 );
export const RACE_DEMON = ConvertRace( 5 );
export const RACE_OTHER = ConvertRace( 7 );

export const PLAYER_GAME_RESULT_VICTORY = ConvertPlayerGameResult( 0 );
export const PLAYER_GAME_RESULT_DEFEAT = ConvertPlayerGameResult( 1 );
export const PLAYER_GAME_RESULT_TIE = ConvertPlayerGameResult( 2 );
export const PLAYER_GAME_RESULT_NEUTRAL = ConvertPlayerGameResult( 3 );

export const ALLIANCE_PASSIVE = ConvertAllianceType( 0 );
export const ALLIANCE_HELP_REQUEST = ConvertAllianceType( 1 );
export const ALLIANCE_HELP_RESPONSE = ConvertAllianceType( 2 );
export const ALLIANCE_SHARED_XP = ConvertAllianceType( 3 );
export const ALLIANCE_SHARED_SPELLS = ConvertAllianceType( 4 );
export const ALLIANCE_SHARED_VISION = ConvertAllianceType( 5 );
export const ALLIANCE_SHARED_CONTROL = ConvertAllianceType( 6 );
export const ALLIANCE_SHARED_ADVANCED_CONTROL = ConvertAllianceType( 7 );
export const ALLIANCE_RESCUABLE = ConvertAllianceType( 8 );
export const ALLIANCE_SHARED_VISION_FORCED = ConvertAllianceType( 9 );

export const VERSION_REIGN_OF_CHAOS = ConvertVersion( 0 );
export const VERSION_FROZEN_THRONE = ConvertVersion( 1 );

export const ATTACK_TYPE_NORMAL = ConvertAttackType( 0 );
export const ATTACK_TYPE_MELEE = ConvertAttackType( 1 );
export const ATTACK_TYPE_PIERCE = ConvertAttackType( 2 );
export const ATTACK_TYPE_SIEGE = ConvertAttackType( 3 );
export const ATTACK_TYPE_MAGIC = ConvertAttackType( 4 );
export const ATTACK_TYPE_CHAOS = ConvertAttackType( 5 );
export const ATTACK_TYPE_HERO = ConvertAttackType( 6 );

export const DAMAGE_TYPE_UNKNOWN = ConvertDamageType( 0 );
export const DAMAGE_TYPE_NORMAL = ConvertDamageType( 4 );
export const DAMAGE_TYPE_ENHANCED = ConvertDamageType( 5 );
export const DAMAGE_TYPE_FIRE = ConvertDamageType( 8 );
export const DAMAGE_TYPE_COLD = ConvertDamageType( 9 );
export const DAMAGE_TYPE_LIGHTNING = ConvertDamageType( 10 );
export const DAMAGE_TYPE_POISON = ConvertDamageType( 11 );
export const DAMAGE_TYPE_DISEASE = ConvertDamageType( 12 );
export const DAMAGE_TYPE_DIVINE = ConvertDamageType( 13 );
export const DAMAGE_TYPE_MAGIC = ConvertDamageType( 14 );
export const DAMAGE_TYPE_SONIC = ConvertDamageType( 15 );
export const DAMAGE_TYPE_ACID = ConvertDamageType( 16 );
export const DAMAGE_TYPE_FORCE = ConvertDamageType( 17 );
export const DAMAGE_TYPE_DEATH = ConvertDamageType( 18 );
export const DAMAGE_TYPE_MIND = ConvertDamageType( 19 );
export const DAMAGE_TYPE_PLANT = ConvertDamageType( 20 );
export const DAMAGE_TYPE_DEFENSIVE = ConvertDamageType( 21 );
export const DAMAGE_TYPE_DEMOLITION = ConvertDamageType( 22 );
export const DAMAGE_TYPE_SLOW_POISON = ConvertDamageType( 23 );
export const DAMAGE_TYPE_SPIRIT_LINK = ConvertDamageType( 24 );
export const DAMAGE_TYPE_SHADOW_STRIKE = ConvertDamageType( 25 );
export const DAMAGE_TYPE_UNIVERSAL = ConvertDamageType( 26 );

export const WEAPON_TYPE_WHOKNOWS = ConvertWeaponType( 0 );
export const WEAPON_TYPE_METAL_LIGHT_CHOP = ConvertWeaponType( 1 );
export const WEAPON_TYPE_METAL_MEDIUM_CHOP = ConvertWeaponType( 2 );
export const WEAPON_TYPE_METAL_HEAVY_CHOP = ConvertWeaponType( 3 );
export const WEAPON_TYPE_METAL_LIGHT_SLICE = ConvertWeaponType( 4 );
export const WEAPON_TYPE_METAL_MEDIUM_SLICE = ConvertWeaponType( 5 );
export const WEAPON_TYPE_METAL_HEAVY_SLICE = ConvertWeaponType( 6 );
export const WEAPON_TYPE_METAL_MEDIUM_BASH = ConvertWeaponType( 7 );
export const WEAPON_TYPE_METAL_HEAVY_BASH = ConvertWeaponType( 8 );
export const WEAPON_TYPE_METAL_MEDIUM_STAB = ConvertWeaponType( 9 );
export const WEAPON_TYPE_METAL_HEAVY_STAB = ConvertWeaponType( 10 );
export const WEAPON_TYPE_WOOD_LIGHT_SLICE = ConvertWeaponType( 11 );
export const WEAPON_TYPE_WOOD_MEDIUM_SLICE = ConvertWeaponType( 12 );
export const WEAPON_TYPE_WOOD_HEAVY_SLICE = ConvertWeaponType( 13 );
export const WEAPON_TYPE_WOOD_LIGHT_BASH = ConvertWeaponType( 14 );
export const WEAPON_TYPE_WOOD_MEDIUM_BASH = ConvertWeaponType( 15 );
export const WEAPON_TYPE_WOOD_HEAVY_BASH = ConvertWeaponType( 16 );
export const WEAPON_TYPE_WOOD_LIGHT_STAB = ConvertWeaponType( 17 );
export const WEAPON_TYPE_WOOD_MEDIUM_STAB = ConvertWeaponType( 18 );
export const WEAPON_TYPE_CLAW_LIGHT_SLICE = ConvertWeaponType( 19 );
export const WEAPON_TYPE_CLAW_MEDIUM_SLICE = ConvertWeaponType( 20 );
export const WEAPON_TYPE_CLAW_HEAVY_SLICE = ConvertWeaponType( 21 );
export const WEAPON_TYPE_AXE_MEDIUM_CHOP = ConvertWeaponType( 22 );
export const WEAPON_TYPE_ROCK_HEAVY_BASH = ConvertWeaponType( 23 );

export const PATHING_TYPE_ANY = ConvertPathingType( 0 );
export const PATHING_TYPE_WALKABILITY = ConvertPathingType( 1 );
export const PATHING_TYPE_FLYABILITY = ConvertPathingType( 2 );
export const PATHING_TYPE_BUILDABILITY = ConvertPathingType( 3 );
export const PATHING_TYPE_PEONHARVESTPATHING = ConvertPathingType( 4 );
export const PATHING_TYPE_BLIGHTPATHING = ConvertPathingType( 5 );
export const PATHING_TYPE_FLOATABILITY = ConvertPathingType( 6 );
export const PATHING_TYPE_AMPHIBIOUSPATHING = ConvertPathingType( 7 );

export const MOUSE_BUTTON_TYPE_LEFT = ConvertMouseButtonType( 1 );
export const MOUSE_BUTTON_TYPE_MIDDLE = ConvertMouseButtonType( 2 );
export const MOUSE_BUTTON_TYPE_RIGHT = ConvertMouseButtonType( 3 );

export const ANIM_TYPE_BIRTH = ConvertAnimType( 0 );
export const ANIM_TYPE_DEATH = ConvertAnimType( 1 );
export const ANIM_TYPE_DECAY = ConvertAnimType( 2 );
export const ANIM_TYPE_DISSIPATE = ConvertAnimType( 3 );
export const ANIM_TYPE_STAND = ConvertAnimType( 4 );
export const ANIM_TYPE_WALK = ConvertAnimType( 5 );
export const ANIM_TYPE_ATTACK = ConvertAnimType( 6 );
export const ANIM_TYPE_MORPH = ConvertAnimType( 7 );
export const ANIM_TYPE_SLEEP = ConvertAnimType( 8 );
export const ANIM_TYPE_SPELL = ConvertAnimType( 9 );
export const ANIM_TYPE_PORTRAIT = ConvertAnimType( 10 );

export const SUBANIM_TYPE_ROOTED = ConvertSubAnimType( 11 );
export const SUBANIM_TYPE_ALTERNATE_EX = ConvertSubAnimType( 12 );
export const SUBANIM_TYPE_LOOPING = ConvertSubAnimType( 13 );
export const SUBANIM_TYPE_SLAM = ConvertSubAnimType( 14 );
export const SUBANIM_TYPE_THROW = ConvertSubAnimType( 15 );
export const SUBANIM_TYPE_SPIKED = ConvertSubAnimType( 16 );
export const SUBANIM_TYPE_FAST = ConvertSubAnimType( 17 );
export const SUBANIM_TYPE_SPIN = ConvertSubAnimType( 18 );
export const SUBANIM_TYPE_READY = ConvertSubAnimType( 19 );
export const SUBANIM_TYPE_CHANNEL = ConvertSubAnimType( 20 );
export const SUBANIM_TYPE_DEFEND = ConvertSubAnimType( 21 );
export const SUBANIM_TYPE_VICTORY = ConvertSubAnimType( 22 );
export const SUBANIM_TYPE_TURN = ConvertSubAnimType( 23 );
export const SUBANIM_TYPE_LEFT = ConvertSubAnimType( 24 );
export const SUBANIM_TYPE_RIGHT = ConvertSubAnimType( 25 );
export const SUBANIM_TYPE_FIRE = ConvertSubAnimType( 26 );
export const SUBANIM_TYPE_FLESH = ConvertSubAnimType( 27 );
export const SUBANIM_TYPE_HIT = ConvertSubAnimType( 28 );
export const SUBANIM_TYPE_WOUNDED = ConvertSubAnimType( 29 );
export const SUBANIM_TYPE_LIGHT = ConvertSubAnimType( 30 );
export const SUBANIM_TYPE_MODERATE = ConvertSubAnimType( 31 );
export const SUBANIM_TYPE_SEVERE = ConvertSubAnimType( 32 );
export const SUBANIM_TYPE_CRITICAL = ConvertSubAnimType( 33 );
export const SUBANIM_TYPE_COMPLETE = ConvertSubAnimType( 34 );
export const SUBANIM_TYPE_GOLD = ConvertSubAnimType( 35 );
export const SUBANIM_TYPE_LUMBER = ConvertSubAnimType( 36 );
export const SUBANIM_TYPE_WORK = ConvertSubAnimType( 37 );
export const SUBANIM_TYPE_TALK = ConvertSubAnimType( 38 );
export const SUBANIM_TYPE_FIRST = ConvertSubAnimType( 39 );
export const SUBANIM_TYPE_SECOND = ConvertSubAnimType( 40 );
export const SUBANIM_TYPE_THIRD = ConvertSubAnimType( 41 );
export const SUBANIM_TYPE_FOURTH = ConvertSubAnimType( 42 );
export const SUBANIM_TYPE_FIFTH = ConvertSubAnimType( 43 );
export const SUBANIM_TYPE_ONE = ConvertSubAnimType( 44 );
export const SUBANIM_TYPE_TWO = ConvertSubAnimType( 45 );
export const SUBANIM_TYPE_THREE = ConvertSubAnimType( 46 );
export const SUBANIM_TYPE_FOUR = ConvertSubAnimType( 47 );
export const SUBANIM_TYPE_FIVE = ConvertSubAnimType( 48 );
export const SUBANIM_TYPE_SMALL = ConvertSubAnimType( 49 );
export const SUBANIM_TYPE_MEDIUM = ConvertSubAnimType( 50 );
export const SUBANIM_TYPE_LARGE = ConvertSubAnimType( 51 );
export const SUBANIM_TYPE_UPGRADE = ConvertSubAnimType( 52 );
export const SUBANIM_TYPE_DRAIN = ConvertSubAnimType( 53 );
export const SUBANIM_TYPE_FILL = ConvertSubAnimType( 54 );
export const SUBANIM_TYPE_CHAINLIGHTNING = ConvertSubAnimType( 55 );
export const SUBANIM_TYPE_EATTREE = ConvertSubAnimType( 56 );
export const SUBANIM_TYPE_PUKE = ConvertSubAnimType( 57 );
export const SUBANIM_TYPE_FLAIL = ConvertSubAnimType( 58 );
export const SUBANIM_TYPE_OFF = ConvertSubAnimType( 59 );
export const SUBANIM_TYPE_SWIM = ConvertSubAnimType( 60 );
export const SUBANIM_TYPE_ENTANGLE = ConvertSubAnimType( 61 );
export const SUBANIM_TYPE_BERSERK = ConvertSubAnimType( 62 );
