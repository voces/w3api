// ============================================================================
// Native types. All native functions take extended handle types when
// possible to help prevent passing bad values to native functions
//
/* eslint-disable @typescript-eslint/class-name-casing */
declare interface handle { __handle: boolean }
declare interface agent extends handle { __agent: boolean }
declare interface event extends agent { __event: boolean }
declare interface player extends agent { __player: boolean }
declare interface widget extends agent { __widget: boolean }
declare interface unit extends widget { __unit: boolean }
declare interface destructable extends widget { __destructable: boolean }
declare interface item extends widget { __item: boolean }
declare interface ability extends agent { __ability: boolean }
declare interface buff extends ability { __buff: boolean }
declare interface force extends agent { __force: boolean }
declare interface group extends agent { __group: boolean }
declare interface trigger extends agent { __trigger: boolean }
declare interface triggercondition extends agent { __triggercondition: boolean }
declare interface triggeraction extends handle { __triggeraction: boolean }
declare interface timer extends agent { __timer: boolean }
declare interface location extends agent { __location: boolean }
declare interface region extends agent { __region: boolean }
declare interface rect extends agent { __rect: boolean }
declare interface boolexpr extends agent { __boolexpr: boolean }
declare interface sound extends agent { __sound: boolean }
declare interface conditionfunc extends boolexpr { __conditionfunc: boolean }
declare interface filterfunc extends boolexpr { __filterfunc: boolean }
declare interface unitpool extends handle { __unitpool: boolean }
declare interface itempool extends handle { __itempool: boolean }
declare interface race extends handle { __race: boolean }
declare interface alliancetype extends handle { __alliancetype: boolean }
declare interface racepreference extends handle { __racepreference: boolean }
declare interface gamestate extends handle { __gamestate: boolean }
declare interface igamestate extends gamestate { __igamestate: boolean }
declare interface fgamestate extends gamestate { __fgamestate: boolean }
declare interface playerstate extends handle { __playerstate: boolean }
declare interface playerscore extends handle { __playerscore: boolean }
declare interface playergameresult extends handle { __playergameresult: boolean }
declare interface unitstate extends handle { __unitstate: boolean }
declare interface aidifficulty extends handle { __aidifficulty: boolean }

declare interface eventid extends handle { __eventid: boolean }
declare interface gameevent extends eventid { __gameevent: boolean }
declare interface playerevent extends eventid { __playerevent: boolean }
declare interface playerunitevent extends eventid { __playerunitevent: boolean }
declare interface unitevent extends eventid { __unitevent: boolean }
declare interface limitop extends eventid { __limitop: boolean }
declare interface widgetevent extends eventid { __widgetevent: boolean }
declare interface dialogevent extends eventid { __dialogevent: boolean }
declare interface unittype extends handle { __unittype: boolean }

declare interface gamespeed extends handle { __gamespeed: boolean }
declare interface gamedifficulty extends handle { __gamedifficulty: boolean }
declare interface gametype extends handle { __gametype: boolean }
declare interface mapflag extends handle { __mapflag: boolean }
declare interface mapvisibility extends handle { __mapvisibility: boolean }
declare interface mapsetting extends handle { __mapsetting: boolean }
declare interface mapdensity extends handle { __mapdensity: boolean }
declare interface mapcontrol extends handle { __mapcontrol: boolean }
declare interface playerslotstate extends handle { __playerslotstate: boolean }
declare interface volumegroup extends handle { __volumegroup: boolean }
declare interface camerafield extends handle { __camerafield: boolean }
declare interface camerasetup extends handle { __camerasetup: boolean }
declare interface playercolor extends handle { __playercolor: boolean }
declare interface placement extends handle { __placement: boolean }
declare interface startlocprio extends handle { __startlocprio: boolean }
declare interface raritycontrol extends handle { __raritycontrol: boolean }
declare interface blendmode extends handle { __blendmode: boolean }
declare interface texmapflags extends handle { __texmapflags: boolean }
declare interface effect extends agent { __effect: boolean }
declare interface effecttype extends handle { __effecttype: boolean }
declare interface weathereffect extends handle { __weathereffect: boolean }
declare interface terraindeformation extends handle { __terraindeformation: boolean }
declare interface fogstate extends handle { __fogstate: boolean }
declare interface fogmodifier extends agent { __fogmodifier: boolean }
declare interface dialog extends agent { __dialog: boolean }
declare interface button extends agent { __button: boolean }
declare interface quest extends agent { __quest: boolean }
declare interface questitem extends agent { __questitem: boolean }
declare interface defeatcondition extends agent { __defeatcondition: boolean }
declare interface timerdialog extends agent { __timerdialog: boolean }
declare interface leaderboard extends agent { __leaderboard: boolean }
declare interface multiboard extends agent { __multiboard: boolean }
declare interface multiboarditem extends agent { __multiboarditem: boolean }
declare interface trackable extends agent { __trackable: boolean }
declare interface gamecache extends agent { __gamecache: boolean }
declare interface version extends handle { __version: boolean }
declare interface itemtype extends handle { __itemtype: boolean }
declare interface texttag extends handle { __texttag: boolean }
declare interface attacktype extends handle { __attacktype: boolean }
declare interface damagetype extends handle { __damagetype: boolean }
declare interface weapontype extends handle { __weapontype: boolean }
declare interface soundtype extends handle { __soundtype: boolean }
declare interface lightning extends handle { __lightning: boolean }
declare interface pathingtype extends handle { __pathingtype: boolean }
declare interface mousebuttontype extends handle { __mousebuttontype: boolean }
declare interface animtype extends handle { __animtype: boolean }
declare interface subanimtype extends handle { __subanimtype: boolean }
declare interface image extends handle { __image: boolean }
declare interface ubersplat extends handle { __ubersplat: boolean }
declare interface hashtable extends agent { __hashtable: boolean }
declare interface framehandle extends handle { __framehandle: boolean }
declare interface originframetype extends handle { __originframetype: boolean }
declare interface framepointtype extends handle { __framepointtype: boolean }
declare interface textaligntype extends handle { __textaligntype: boolean }
declare interface frameeventtype extends handle { __frameeventtype: boolean }
declare interface oskeytype extends handle { __oskeytype: boolean }
declare interface abilityintegerfield extends handle { __abilityintegerfield: boolean }
declare interface abilityrealfield extends handle { __abilityrealfield: boolean }
declare interface abilitybooleanfield extends handle { __abilitybooleanfield: boolean }
declare interface abilitystringfield extends handle { __abilitystringfield: boolean }
declare interface abilityintegerlevelfield extends handle { __abilityintegerlevelfield: boolean }
declare interface abilityreallevelfield extends handle { __abilityreallevelfield: boolean }
declare interface abilitybooleanlevelfield extends handle { __abilitybooleanlevelfield: boolean }
declare interface abilitystringlevelfield extends handle { __abilitystringlevelfield: boolean }
declare interface abilityintegerlevelarrayfield extends handle { __abilityintegerlevelarrayfield: boolean }
declare interface abilityreallevelarrayfield extends handle { __abilityreallevelarrayfield: boolean }
declare interface abilitybooleanlevelarrayfield extends handle { __abilitybooleanlevelarrayfield: boolean }
declare interface abilitystringlevelarrayfield extends handle { __abilitystringlevelarrayfield: boolean }
declare interface unitintegerfield extends handle { __unitintegerfield: boolean }
declare interface unitrealfield extends handle { __unitrealfield: boolean }
declare interface unitbooleanfield extends handle { __unitbooleanfield: boolean }
declare interface unitstringfield extends handle { __unitstringfield: boolean }
declare interface unitweaponintegerfield extends handle { __unitweaponintegerfield: boolean }
declare interface unitweaponrealfield extends handle { __unitweaponrealfield: boolean }
declare interface unitweaponbooleanfield extends handle { __unitweaponbooleanfield: boolean }
declare interface unitweaponstringfield extends handle { __unitweaponstringfield: boolean }
declare interface itemintegerfield extends handle { __itemintegerfield: boolean }
declare interface itemrealfield extends handle { __itemrealfield: boolean }
declare interface itembooleanfield extends handle { __itembooleanfield: boolean }
declare interface itemstringfield extends handle { __itemstringfield: boolean }
declare interface movetype extends handle { __movetype: boolean }
declare interface targetflag extends handle { __targetflag: boolean }
declare interface armortype extends handle { __armortype: boolean }
declare interface heroattribute extends handle { __heroattribute: boolean }
declare interface defensetype extends handle { __defensetype: boolean }
declare interface regentype extends handle { __regentype: boolean }
declare interface unitcategory extends handle { __unitcategory: boolean }
declare interface pathingflag extends handle { __pathingflag: boolean }

declare interface abilitynumberfield extends handle { __abilitynumberfield: boolean }
declare interface abilitynumberlevelfield extends handle { __abilitynumberlevelfield: boolean }
declare interface abilitynumberlevelarrayfield extends handle { __abilitynumberlevelarrayfield: boolean }
declare interface unitnumberfield extends handle { __unitnumberfield: boolean }
declare interface unitweaponnumberfield extends handle { __unitweaponnumberfield: boolean }
declare interface itemnumberfield extends handle { __itemnumberfield: boolean }
/* eslint-enable @typescript-eslint/class-name-casing */

const converter = <T>( fn: () => T ) => {

	const memory: Array<T> = [];
	return ( i: number ) => {

		if ( memory[ i ] !== undefined ) return memory[ i ];
		memory[ i ] = fn();
		return memory[ i ];

	};

};

export const ConvertRace = converter( (): race => ( { __race: true, __handle: true } ) );
export const ConvertAllianceType = converter( (): alliancetype => ( { __alliancetype: true, __handle: true } ) );
export const ConvertRacePref = converter( (): racepreference => ( { __racepreference: true, __handle: true } ) );
export const ConvertIGameState = converter( (): igamestate => ( { __igamestate: true, __gamestate: true, __handle: true } ) );
export const ConvertFGameState = converter( (): fgamestate => ( { __fgamestate: true, __gamestate: true, __handle: true } ) );
export const ConvertPlayerState = converter( (): playerstate => ( { __playerstate: true, __handle: true } ) );
export const ConvertPlayerScore = converter( (): playerscore => ( { __playerscore: true, __handle: true } ) );
export const ConvertPlayerGameResult = converter( (): playergameresult => ( { __playergameresult: true, __handle: true } ) );
export const ConvertUnitState = converter( (): unitstate => ( { __unitstate: true, __handle: true } ) );
export const ConvertAIDifficulty = converter( (): aidifficulty => ( { __aidifficulty: true, __handle: true } ) );
export const ConvertGameEvent = converter( (): gameevent => ( { __gameevent: true, __eventid: true, __handle: true } ) );
export const ConvertPlayerEvent = converter( (): playerevent => ( { __playerevent: true, __eventid: true, __handle: true } ) );
export const ConvertPlayerUnitEvent = converter( (): playerunitevent => ( { __playerunitevent: true, __eventid: true, __handle: true } ) );
export const ConvertWidgetEvent = converter( (): widgetevent => ( { __widgetevent: true, __eventid: true, __handle: true } ) );
export const ConvertDialogEvent = converter( (): dialogevent => ( { __dialogevent: true, __eventid: true, __handle: true } ) );
export const ConvertUnitEvent = converter( (): unitevent => ( { __unitevent: true, __eventid: true, __handle: true } ) );
export const ConvertLimitOp = converter( (): limitop => ( { __limitop: true, __eventid: true, __handle: true } ) );
export const ConvertUnitType = converter( (): unittype => ( { __unittype: true, __handle: true } ) );
export const ConvertGameSpeed = converter( (): gamespeed => ( { __gamespeed: true, __handle: true } ) );
export const ConvertPlacement = converter( (): placement => ( { __placement: true, __handle: true } ) );
export const ConvertStartLocPrio = converter( (): startlocprio => ( { __startlocprio: true, __handle: true } ) );
export const ConvertGameDifficulty = converter( (): gamedifficulty => ( { __gamedifficulty: true, __handle: true } ) );
export const ConvertGameType = converter( (): gametype => ( { __gametype: true, __handle: true } ) );
export const ConvertMapFlag = converter( (): mapflag => ( { __mapflag: true, __handle: true } ) );
export const ConvertMapVisibility = converter( (): mapvisibility => ( { __mapvisibility: true, __handle: true } ) );
export const ConvertMapSetting = converter( (): mapsetting => ( { __mapsetting: true, __handle: true } ) );
export const ConvertMapDensity = converter( (): mapdensity => ( { __mapdensity: true, __handle: true } ) );
export const ConvertMapControl = converter( (): mapcontrol => ( { __mapcontrol: true, __handle: true } ) );
export const ConvertPlayerColor = converter( (): playercolor => ( { __playercolor: true, __handle: true } ) );
export const ConvertPlayerSlotState = converter( (): playerslotstate => ( { __playerslotstate: true, __handle: true } ) );
export const ConvertVolumeGroup = converter( (): volumegroup => ( { __volumegroup: true, __handle: true } ) );
export const ConvertCameraField = converter( (): camerafield => ( { __camerafield: true, __handle: true } ) );
export const ConvertBlendMode = converter( (): blendmode => ( { __blendmode: true, __handle: true } ) );
export const ConvertRarityControl = converter( (): raritycontrol => ( { __raritycontrol: true, __handle: true } ) );
export const ConvertTexMapFlags = converter( (): texmapflags => ( { __texmapflags: true, __handle: true } ) );
export const ConvertFogState = converter( (): fogstate => ( { __fogstate: true, __handle: true } ) );
export const ConvertEffectType = converter( (): effecttype => ( { __effecttype: true, __handle: true } ) );
export const ConvertVersion = converter( (): version => ( { __version: true, __handle: true } ) );
export const ConvertItemType = converter( (): itemtype => ( { __itemtype: true, __handle: true } ) );
export const ConvertAttackType = converter( (): attacktype => ( { __attacktype: true, __handle: true } ) );
export const ConvertDamageType = converter( (): damagetype => ( { __damagetype: true, __handle: true } ) );
export const ConvertWeaponType = converter( (): weapontype => ( { __weapontype: true, __handle: true } ) );
export const ConvertSoundType = converter( (): soundtype => ( { __soundtype: true, __handle: true } ) );
export const ConvertPathingType = converter( (): pathingtype => ( { __pathingtype: true, __handle: true } ) );
export const ConvertMouseButtonType = converter( (): mousebuttontype => ( { __mousebuttontype: true, __handle: true } ) );
export const ConvertAnimType = converter( (): animtype => ( { __animtype: true, __handle: true } ) );
export const ConvertSubAnimType = converter( (): subanimtype => ( { __subanimtype: true, __handle: true } ) );
export const ConvertOriginFrameType = converter( (): originframetype => ( { __originframetype: true, __handle: true } ) );
export const ConvertFramePointType = converter( (): framepointtype => ( { __framepointtype: true, __handle: true } ) );
export const ConvertTextAlignType = converter( (): textaligntype => ( { __textaligntype: true, __handle: true } ) );
export const ConvertFrameEventType = converter( (): frameeventtype => ( { __frameeventtype: true, __handle: true } ) );
export const ConvertOsKeyType = converter( (): oskeytype => ( { __oskeytype: true, __handle: true } ) );
export const ConvertAbilityIntegerField = converter( (): abilitynumberfield => ( { __abilitynumberfield: true, __handle: true } ) );
export const ConvertAbilityRealField = converter( (): abilitynumberfield => ( { __abilitynumberfield: true, __handle: true } ) );
export const ConvertAbilityBooleanField = converter( (): abilitybooleanfield => ( { __abilitybooleanfield: true, __handle: true } ) );
export const ConvertAbilityStringField = converter( (): abilitystringfield => ( { __abilitystringfield: true, __handle: true } ) );
export const ConvertAbilityIntegerLevelField = converter( (): abilitynumberlevelfield => ( { __abilitynumberlevelfield: true, __handle: true } ) );
export const ConvertAbilityRealLevelField = converter( (): abilitynumberlevelfield => ( { __abilitynumberlevelfield: true, __handle: true } ) );
export const ConvertAbilityBooleanLevelField = converter( (): abilitybooleanlevelfield => ( { __abilitybooleanlevelfield: true, __handle: true } ) );
export const ConvertAbilityStringLevelField = converter( (): abilitystringlevelfield => ( { __abilitystringlevelfield: true, __handle: true } ) );
export const ConvertAbilityIntegerLevelArrayField = converter( (): abilitynumberlevelarrayfield => ( { __abilitynumberlevelarrayfield: true, __handle: true } ) );
export const ConvertAbilityRealLevelArrayField = converter( (): abilitynumberlevelarrayfield => ( { __abilitynumberlevelarrayfield: true, __handle: true } ) );
export const ConvertAbilityBooleanLevelArrayField = converter( (): abilitybooleanlevelarrayfield => ( { __abilitybooleanlevelarrayfield: true, __handle: true } ) );
export const ConvertAbilityStringLevelArrayField = converter( (): abilitystringlevelarrayfield => ( { __abilitystringlevelarrayfield: true, __handle: true } ) );
export const ConvertUnitIntegerField = converter( (): unitnumberfield => ( { __unitnumberfield: true, __handle: true } ) );
export const ConvertUnitRealField = converter( (): unitnumberfield => ( { __unitnumberfield: true, __handle: true } ) );
export const ConvertUnitBooleanField = converter( (): unitbooleanfield => ( { __unitbooleanfield: true, __handle: true } ) );
export const ConvertUnitStringField = converter( (): unitstringfield => ( { __unitstringfield: true, __handle: true } ) );
export const ConvertUnitWeaponIntegerField = converter( (): unitweaponnumberfield => ( { __unitweaponnumberfield: true, __handle: true } ) );
export const ConvertUnitWeaponRealField = converter( (): unitweaponnumberfield => ( { __unitweaponnumberfield: true, __handle: true } ) );
export const ConvertUnitWeaponBooleanField = converter( (): unitweaponbooleanfield => ( { __unitweaponbooleanfield: true, __handle: true } ) );
export const ConvertUnitWeaponStringField = converter( (): unitweaponstringfield => ( { __unitweaponstringfield: true, __handle: true } ) );
export const ConvertItemIntegerField = converter( (): itemnumberfield => ( { __itemnumberfield: true, __handle: true } ) );
export const ConvertItemRealField = converter( (): itemnumberfield => ( { __itemnumberfield: true, __handle: true } ) );
export const ConvertItemBooleanField = converter( (): itembooleanfield => ( { __itembooleanfield: true, __handle: true } ) );
export const ConvertItemStringField = converter( (): itemstringfield => ( { __itemstringfield: true, __handle: true } ) );
export const ConvertMoveType = converter( (): movetype => ( { __movetype: true, __handle: true } ) );
export const ConvertTargetFlag = converter( (): targetflag => ( { __targetflag: true, __handle: true } ) );
export const ConvertArmorType = converter( (): armortype => ( { __armortype: true, __handle: true } ) );
export const ConvertHeroAttribute = converter( (): heroattribute => ( { __heroattribute: true, __handle: true } ) );
export const ConvertDefenseType = converter( (): defensetype => ( { __defensetype: true, __handle: true } ) );
export const ConvertRegenType = converter( (): regentype => ( { __regentype: true, __handle: true } ) );
export const ConvertUnitCategory = converter( (): unitcategory => ( { __unitcategory: true, __handle: true } ) );
export const ConvertPathingFlag = converter( (): pathingflag => ( { __pathingflag: true, __handle: true } ) );

export const OrderId = ( orderIdString: string ): number => {

    console.warn("OrderID not implemented")
    return 0;

};

export const OrderId2String = ( orderId: number ): string => {};

export const UnitId = ( unitIdString: string ): number => {};

export const UnitId2String = ( unitId: number ): string => {};

// Not currently working correctly...
export const AbilityId = ( abilityIdString: string ): number => {};

export const AbilityId2String = ( abilityId: number ): string => {};

// Looks up the "name" field for any object (unit, item, ability)
export const GetObjectName = ( objectId: number ): string => {};

export const GetBJMaxPlayers = (): number => {};

export const GetBJPlayerNeutralVictim = (): number => {};

export const GetBJPlayerNeutralExtra = (): number => {};

export const GetBJMaxPlayerSlots = (): number => {};

export const GetPlayerNeutralPassive = (): number => {};

export const GetPlayerNeutralAggressive = (): number => {};

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

// ===================================================
// Map Setup Constants
// ===================================================

export const RACE_PREF_HUMAN = ConvertRacePref( 1 );
export const RACE_PREF_ORC = ConvertRacePref( 2 );
export const RACE_PREF_NIGHTELF = ConvertRacePref( 4 );
export const RACE_PREF_UNDEAD = ConvertRacePref( 8 );
export const RACE_PREF_DEMON = ConvertRacePref( 16 );
export const RACE_PREF_RANDOM = ConvertRacePref( 32 );
export const RACE_PREF_USER_SELECTABLE = ConvertRacePref( 64 );

export const MAP_CONTROL_USER = ConvertMapControl( 0 );
export const MAP_CONTROL_COMPUTER = ConvertMapControl( 1 );
export const MAP_CONTROL_RESCUABLE = ConvertMapControl( 2 );
export const MAP_CONTROL_NEUTRAL = ConvertMapControl( 3 );
export const MAP_CONTROL_CREEP = ConvertMapControl( 4 );
export const MAP_CONTROL_NONE = ConvertMapControl( 5 );

export const GAME_TYPE_MELEE = ConvertGameType( 1 );
export const GAME_TYPE_FFA = ConvertGameType( 2 );
export const GAME_TYPE_USE_MAP_SETTINGS = ConvertGameType( 4 );
export const GAME_TYPE_BLIZ = ConvertGameType( 8 );
export const GAME_TYPE_ONE_ON_ONE = ConvertGameType( 16 );
export const GAME_TYPE_TWO_TEAM_PLAY = ConvertGameType( 32 );
export const GAME_TYPE_THREE_TEAM_PLAY = ConvertGameType( 64 );
export const GAME_TYPE_FOUR_TEAM_PLAY = ConvertGameType( 128 );

export const MAP_FOG_HIDE_TERRAIN = ConvertMapFlag( 1 );
export const MAP_FOG_MAP_EXPLORED = ConvertMapFlag( 2 );
export const MAP_FOG_ALWAYS_VISIBLE = ConvertMapFlag( 4 );

export const MAP_USE_HANDICAPS = ConvertMapFlag( 8 );
export const MAP_OBSERVERS = ConvertMapFlag( 16 );
export const MAP_OBSERVERS_ON_DEATH = ConvertMapFlag( 32 );

export const MAP_FIXED_COLORS = ConvertMapFlag( 128 );

export const MAP_LOCK_RESOURCE_TRADING = ConvertMapFlag( 256 );
export const MAP_RESOURCE_TRADING_ALLIES_ONLY = ConvertMapFlag( 512 );

export const MAP_LOCK_ALLIANCE_CHANGES = ConvertMapFlag( 1024 );
export const MAP_ALLIANCE_CHANGES_HIDDEN = ConvertMapFlag( 2048 );

export const MAP_CHEATS = ConvertMapFlag( 4096 );
export const MAP_CHEATS_HIDDEN = ConvertMapFlag( 8192 );

export const MAP_LOCK_SPEED = ConvertMapFlag( 8192 * 2 );
export const MAP_LOCK_RANDOM_SEED = ConvertMapFlag( 8192 * 4 );
export const MAP_SHARED_ADVANCED_CONTROL = ConvertMapFlag( 8192 * 8 );
export const MAP_RANDOM_HERO = ConvertMapFlag( 8192 * 16 );
export const MAP_RANDOM_RACES = ConvertMapFlag( 8192 * 32 );
export const MAP_RELOADED = ConvertMapFlag( 8192 * 64 );

export const MAP_PLACEMENT_RANDOM = ConvertPlacement( 0 );
export const MAP_PLACEMENT_FIXED = ConvertPlacement( 1 );
export const MAP_PLACEMENT_USE_MAP_SETTINGS = ConvertPlacement( 2 );
export const MAP_PLACEMENT_TEAMS_TOGETHER = ConvertPlacement( 3 );

export const MAP_LOC_PRIO_LOW = ConvertStartLocPrio( 0 );
export const MAP_LOC_PRIO_HIGH = ConvertStartLocPrio( 1 );
export const MAP_LOC_PRIO_NOT = ConvertStartLocPrio( 2 );

export const MAP_DENSITY_NONE = ConvertMapDensity( 0 );
export const MAP_DENSITY_LIGHT = ConvertMapDensity( 1 );
export const MAP_DENSITY_MEDIUM = ConvertMapDensity( 2 );
export const MAP_DENSITY_HEAVY = ConvertMapDensity( 3 );

export const MAP_DIFFICULTY_EASY = ConvertGameDifficulty( 0 );
export const MAP_DIFFICULTY_NORMAL = ConvertGameDifficulty( 1 );
export const MAP_DIFFICULTY_HARD = ConvertGameDifficulty( 2 );
export const MAP_DIFFICULTY_INSANE = ConvertGameDifficulty( 3 );

export const MAP_SPEED_SLOWEST = ConvertGameSpeed( 0 );
export const MAP_SPEED_SLOW = ConvertGameSpeed( 1 );
export const MAP_SPEED_NORMAL = ConvertGameSpeed( 2 );
export const MAP_SPEED_FAST = ConvertGameSpeed( 3 );
export const MAP_SPEED_FASTEST = ConvertGameSpeed( 4 );

export const PLAYER_SLOT_STATE_EMPTY = ConvertPlayerSlotState( 0 );
export const PLAYER_SLOT_STATE_PLAYING = ConvertPlayerSlotState( 1 );
export const PLAYER_SLOT_STATE_LEFT = ConvertPlayerSlotState( 2 );

// ===================================================
// Sound Constants
// ===================================================
export const SOUND_VOLUMEGROUP_UNITMOVEMENT = ConvertVolumeGroup( 0 );
export const SOUND_VOLUMEGROUP_UNITSOUNDS = ConvertVolumeGroup( 1 );
export const SOUND_VOLUMEGROUP_COMBAT = ConvertVolumeGroup( 2 );
export const SOUND_VOLUMEGROUP_SPELLS = ConvertVolumeGroup( 3 );
export const SOUND_VOLUMEGROUP_UI = ConvertVolumeGroup( 4 );
export const SOUND_VOLUMEGROUP_MUSIC = ConvertVolumeGroup( 5 );
export const SOUND_VOLUMEGROUP_AMBIENTSOUNDS = ConvertVolumeGroup( 6 );
export const SOUND_VOLUMEGROUP_FIRE = ConvertVolumeGroup( 7 );

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

// ===================================================
// Game, Player and Unit Events
//
//  When an event causes a trigger to fire these
//  values allow the action code to determine which
//  event was dispatched and therefore which set of
//  native functions should be used to get information
//  about the event.
//
// Do NOT change the order or value of these constants
// without insuring that the JASS_GAME_EVENTS_WAR3 enum
// is changed to match.
//
// ===================================================

// ===================================================
// For use with TriggerRegisterGameEvent
// ===================================================

export const EVENT_GAME_VICTORY = ConvertGameEvent( 0 );
export const EVENT_GAME_END_LEVEL = ConvertGameEvent( 1 );

export const EVENT_GAME_VARIABLE_LIMIT = ConvertGameEvent( 2 );
export const EVENT_GAME_STATE_LIMIT = ConvertGameEvent( 3 );

export const EVENT_GAME_TIMER_EXPIRED = ConvertGameEvent( 4 );

export const EVENT_GAME_ENTER_REGION = ConvertGameEvent( 5 );
export const EVENT_GAME_LEAVE_REGION = ConvertGameEvent( 6 );

export const EVENT_GAME_TRACKABLE_HIT = ConvertGameEvent( 7 );
export const EVENT_GAME_TRACKABLE_TRACK = ConvertGameEvent( 8 );

export const EVENT_GAME_SHOW_SKILL = ConvertGameEvent( 9 );
export const EVENT_GAME_BUILD_SUBMENU = ConvertGameEvent( 10 );

// ===================================================
// For use with TriggerRegisterPlayerEvent
// ===================================================
export const EVENT_PLAYER_STATE_LIMIT = ConvertPlayerEvent( 11 );
export const EVENT_PLAYER_ALLIANCE_CHANGED = ConvertPlayerEvent( 12 );

export const EVENT_PLAYER_DEFEAT = ConvertPlayerEvent( 13 );
export const EVENT_PLAYER_VICTORY = ConvertPlayerEvent( 14 );
export const EVENT_PLAYER_LEAVE = ConvertPlayerEvent( 15 );
export const EVENT_PLAYER_CHAT = ConvertPlayerEvent( 16 );
export const EVENT_PLAYER_END_CINEMATIC = ConvertPlayerEvent( 17 );

// ===================================================
// For use with TriggerRegisterPlayerUnitEvent
// ===================================================

export const EVENT_PLAYER_UNIT_ATTACKED = ConvertPlayerUnitEvent( 18 );
export const EVENT_PLAYER_UNIT_RESCUED = ConvertPlayerUnitEvent( 19 );

export const EVENT_PLAYER_UNIT_DEATH = ConvertPlayerUnitEvent( 20 );
export const EVENT_PLAYER_UNIT_DECAY = ConvertPlayerUnitEvent( 21 );

export const EVENT_PLAYER_UNIT_DETECTED = ConvertPlayerUnitEvent( 22 );
export const EVENT_PLAYER_UNIT_HIDDEN = ConvertPlayerUnitEvent( 23 );

export const EVENT_PLAYER_UNIT_SELECTED = ConvertPlayerUnitEvent( 24 );
export const EVENT_PLAYER_UNIT_DESELECTED = ConvertPlayerUnitEvent( 25 );

export const EVENT_PLAYER_UNIT_CONSTRUCT_START = ConvertPlayerUnitEvent( 26 );
export const EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL = ConvertPlayerUnitEvent( 27 );
export const EVENT_PLAYER_UNIT_CONSTRUCT_FINISH = ConvertPlayerUnitEvent( 28 );

export const EVENT_PLAYER_UNIT_UPGRADE_START = ConvertPlayerUnitEvent( 29 );
export const EVENT_PLAYER_UNIT_UPGRADE_CANCEL = ConvertPlayerUnitEvent( 30 );
export const EVENT_PLAYER_UNIT_UPGRADE_FINISH = ConvertPlayerUnitEvent( 31 );

export const EVENT_PLAYER_UNIT_TRAIN_START = ConvertPlayerUnitEvent( 32 );
export const EVENT_PLAYER_UNIT_TRAIN_CANCEL = ConvertPlayerUnitEvent( 33 );
export const EVENT_PLAYER_UNIT_TRAIN_FINISH = ConvertPlayerUnitEvent( 34 );

export const EVENT_PLAYER_UNIT_RESEARCH_START = ConvertPlayerUnitEvent( 35 );
export const EVENT_PLAYER_UNIT_RESEARCH_CANCEL = ConvertPlayerUnitEvent( 36 );
export const EVENT_PLAYER_UNIT_RESEARCH_FINISH = ConvertPlayerUnitEvent( 37 );
export const EVENT_PLAYER_UNIT_ISSUED_ORDER = ConvertPlayerUnitEvent( 38 );
export const EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER = ConvertPlayerUnitEvent( 39 );
export const EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER = ConvertPlayerUnitEvent( 40 );
export const EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER = ConvertPlayerUnitEvent( 40 );

export const EVENT_PLAYER_HERO_LEVEL = ConvertPlayerUnitEvent( 41 );
export const EVENT_PLAYER_HERO_SKILL = ConvertPlayerUnitEvent( 42 );

export const EVENT_PLAYER_HERO_REVIVABLE = ConvertPlayerUnitEvent( 43 );

export const EVENT_PLAYER_HERO_REVIVE_START = ConvertPlayerUnitEvent( 44 );
export const EVENT_PLAYER_HERO_REVIVE_CANCEL = ConvertPlayerUnitEvent( 45 );
export const EVENT_PLAYER_HERO_REVIVE_FINISH = ConvertPlayerUnitEvent( 46 );
export const EVENT_PLAYER_UNIT_SUMMON = ConvertPlayerUnitEvent( 47 );
export const EVENT_PLAYER_UNIT_DROP_ITEM = ConvertPlayerUnitEvent( 48 );
export const EVENT_PLAYER_UNIT_PICKUP_ITEM = ConvertPlayerUnitEvent( 49 );
export const EVENT_PLAYER_UNIT_USE_ITEM = ConvertPlayerUnitEvent( 50 );

export const EVENT_PLAYER_UNIT_LOADED = ConvertPlayerUnitEvent( 51 );
export const EVENT_PLAYER_UNIT_DAMAGED = ConvertPlayerUnitEvent( 308 );
export const EVENT_PLAYER_UNIT_DAMAGING = ConvertPlayerUnitEvent( 315 );

// ===================================================
// For use with TriggerRegisterUnitEvent
// ===================================================

export const EVENT_UNIT_DAMAGED = ConvertUnitEvent( 52 );
export const EVENT_UNIT_DAMAGING = ConvertUnitEvent( 314 );
export const EVENT_UNIT_DEATH = ConvertUnitEvent( 53 );
export const EVENT_UNIT_DECAY = ConvertUnitEvent( 54 );
export const EVENT_UNIT_DETECTED = ConvertUnitEvent( 55 );
export const EVENT_UNIT_HIDDEN = ConvertUnitEvent( 56 );
export const EVENT_UNIT_SELECTED = ConvertUnitEvent( 57 );
export const EVENT_UNIT_DESELECTED = ConvertUnitEvent( 58 );

export const EVENT_UNIT_STATE_LIMIT = ConvertUnitEvent( 59 );

// Events which may have a filter for the "other unit"
//
export const EVENT_UNIT_ACQUIRED_TARGET = ConvertUnitEvent( 60 );
export const EVENT_UNIT_TARGET_IN_RANGE = ConvertUnitEvent( 61 );
export const EVENT_UNIT_ATTACKED = ConvertUnitEvent( 62 );
export const EVENT_UNIT_RESCUED = ConvertUnitEvent( 63 );

export const EVENT_UNIT_CONSTRUCT_CANCEL = ConvertUnitEvent( 64 );
export const EVENT_UNIT_CONSTRUCT_FINISH = ConvertUnitEvent( 65 );

export const EVENT_UNIT_UPGRADE_START = ConvertUnitEvent( 66 );
export const EVENT_UNIT_UPGRADE_CANCEL = ConvertUnitEvent( 67 );
export const EVENT_UNIT_UPGRADE_FINISH = ConvertUnitEvent( 68 );

// Events which involve the specified unit performing
// training of other units
//
export const EVENT_UNIT_TRAIN_START = ConvertUnitEvent( 69 );
export const EVENT_UNIT_TRAIN_CANCEL = ConvertUnitEvent( 70 );
export const EVENT_UNIT_TRAIN_FINISH = ConvertUnitEvent( 71 );

export const EVENT_UNIT_RESEARCH_START = ConvertUnitEvent( 72 );
export const EVENT_UNIT_RESEARCH_CANCEL = ConvertUnitEvent( 73 );
export const EVENT_UNIT_RESEARCH_FINISH = ConvertUnitEvent( 74 );

export const EVENT_UNIT_ISSUED_ORDER = ConvertUnitEvent( 75 );
export const EVENT_UNIT_ISSUED_POINT_ORDER = ConvertUnitEvent( 76 );
export const EVENT_UNIT_ISSUED_TARGET_ORDER = ConvertUnitEvent( 77 );

export const EVENT_UNIT_HERO_LEVEL = ConvertUnitEvent( 78 );
export const EVENT_UNIT_HERO_SKILL = ConvertUnitEvent( 79 );

export const EVENT_UNIT_HERO_REVIVABLE = ConvertUnitEvent( 80 );
export const EVENT_UNIT_HERO_REVIVE_START = ConvertUnitEvent( 81 );
export const EVENT_UNIT_HERO_REVIVE_CANCEL = ConvertUnitEvent( 82 );
export const EVENT_UNIT_HERO_REVIVE_FINISH = ConvertUnitEvent( 83 );

export const EVENT_UNIT_SUMMON = ConvertUnitEvent( 84 );

export const EVENT_UNIT_DROP_ITEM = ConvertUnitEvent( 85 );
export const EVENT_UNIT_PICKUP_ITEM = ConvertUnitEvent( 86 );
export const EVENT_UNIT_USE_ITEM = ConvertUnitEvent( 87 );

export const EVENT_UNIT_LOADED = ConvertUnitEvent( 88 );

export const EVENT_WIDGET_DEATH = ConvertWidgetEvent( 89 );

export const EVENT_DIALOG_BUTTON_CLICK = ConvertDialogEvent( 90 );
export const EVENT_DIALOG_CLICK = ConvertDialogEvent( 91 );

// ===================================================
// Frozen Throne Expansion Events
// Need to be added here to preserve compat
// ===================================================

export const EVENT_GAME_LOADED = ConvertGameEvent( 256 );
export const EVENT_GAME_TOURNAMENT_FINISH_SOON = ConvertGameEvent( 257 );
export const EVENT_GAME_TOURNAMENT_FINISH_NOW = ConvertGameEvent( 258 );
export const EVENT_GAME_SAVE = ConvertGameEvent( 259 );
export const EVENT_GAME_CUSTOM_UI_FRAME = ConvertGameEvent( 310 );

// ===================================================
// For use with TriggerRegisterPlayerEvent
// ===================================================

export const EVENT_PLAYER_ARROW_LEFT_DOWN = ConvertPlayerEvent( 261 );
export const EVENT_PLAYER_ARROW_LEFT_UP = ConvertPlayerEvent( 262 );
export const EVENT_PLAYER_ARROW_RIGHT_DOWN = ConvertPlayerEvent( 263 );
export const EVENT_PLAYER_ARROW_RIGHT_UP = ConvertPlayerEvent( 264 );
export const EVENT_PLAYER_ARROW_DOWN_DOWN = ConvertPlayerEvent( 265 );
export const EVENT_PLAYER_ARROW_DOWN_UP = ConvertPlayerEvent( 266 );
export const EVENT_PLAYER_ARROW_UP_DOWN = ConvertPlayerEvent( 267 );
export const EVENT_PLAYER_ARROW_UP_UP = ConvertPlayerEvent( 268 );
export const EVENT_PLAYER_MOUSE_DOWN = ConvertPlayerEvent( 305 );
export const EVENT_PLAYER_MOUSE_UP = ConvertPlayerEvent( 306 );
export const EVENT_PLAYER_MOUSE_MOVE = ConvertPlayerEvent( 307 );
export const EVENT_PLAYER_SYNC_DATA = ConvertPlayerEvent( 309 );
export const EVENT_PLAYER_KEY = ConvertPlayerEvent( 311 );
export const EVENT_PLAYER_KEY_DOWN = ConvertPlayerEvent( 312 );
export const EVENT_PLAYER_KEY_UP = ConvertPlayerEvent( 313 );

// ===================================================
// For use with TriggerRegisterPlayerUnitEvent
// ===================================================

export const EVENT_PLAYER_UNIT_SELL = ConvertPlayerUnitEvent( 269 );
export const EVENT_PLAYER_UNIT_CHANGE_OWNER = ConvertPlayerUnitEvent( 270 );
export const EVENT_PLAYER_UNIT_SELL_ITEM = ConvertPlayerUnitEvent( 271 );
export const EVENT_PLAYER_UNIT_SPELL_CHANNEL = ConvertPlayerUnitEvent( 272 );
export const EVENT_PLAYER_UNIT_SPELL_CAST = ConvertPlayerUnitEvent( 273 );
export const EVENT_PLAYER_UNIT_SPELL_EFFECT = ConvertPlayerUnitEvent( 274 );
export const EVENT_PLAYER_UNIT_SPELL_FINISH = ConvertPlayerUnitEvent( 275 );
export const EVENT_PLAYER_UNIT_SPELL_ENDCAST = ConvertPlayerUnitEvent( 276 );
export const EVENT_PLAYER_UNIT_PAWN_ITEM = ConvertPlayerUnitEvent( 277 );

// ===================================================
// For use with TriggerRegisterUnitEvent
// ===================================================

export const EVENT_UNIT_SELL = ConvertUnitEvent( 286 );
export const EVENT_UNIT_CHANGE_OWNER = ConvertUnitEvent( 287 );
export const EVENT_UNIT_SELL_ITEM = ConvertUnitEvent( 288 );
export const EVENT_UNIT_SPELL_CHANNEL = ConvertUnitEvent( 289 );
export const EVENT_UNIT_SPELL_CAST = ConvertUnitEvent( 290 );
export const EVENT_UNIT_SPELL_EFFECT = ConvertUnitEvent( 291 );
export const EVENT_UNIT_SPELL_FINISH = ConvertUnitEvent( 292 );
export const EVENT_UNIT_SPELL_ENDCAST = ConvertUnitEvent( 293 );
export const EVENT_UNIT_PAWN_ITEM = ConvertUnitEvent( 294 );

// ===================================================
// Limit Event API constants
// variable, player state, game state, and unit state events
// ( do NOT change the order of these... )
// ===================================================
export const LESS_THAN = ConvertLimitOp( 0 );
export const LESS_THAN_OR_EQUAL = ConvertLimitOp( 1 );
export const EQUAL = ConvertLimitOp( 2 );
export const GREATER_THAN_OR_EQUAL = ConvertLimitOp( 3 );
export const GREATER_THAN = ConvertLimitOp( 4 );
export const NOT_EQUAL = ConvertLimitOp( 5 );

// ===================================================
// Unit Type Constants for use with IsUnitType()
// ===================================================

export const UNIT_TYPE_HERO = ConvertUnitType( 0 );
export const UNIT_TYPE_DEAD = ConvertUnitType( 1 );
export const UNIT_TYPE_STRUCTURE = ConvertUnitType( 2 );

export const UNIT_TYPE_FLYING = ConvertUnitType( 3 );
export const UNIT_TYPE_GROUND = ConvertUnitType( 4 );

export const UNIT_TYPE_ATTACKS_FLYING = ConvertUnitType( 5 );
export const UNIT_TYPE_ATTACKS_GROUND = ConvertUnitType( 6 );

export const UNIT_TYPE_MELEE_ATTACKER = ConvertUnitType( 7 );
export const UNIT_TYPE_RANGED_ATTACKER = ConvertUnitType( 8 );

export const UNIT_TYPE_GIANT = ConvertUnitType( 9 );
export const UNIT_TYPE_SUMMONED = ConvertUnitType( 10 );
export const UNIT_TYPE_STUNNED = ConvertUnitType( 11 );
export const UNIT_TYPE_PLAGUED = ConvertUnitType( 12 );
export const UNIT_TYPE_SNARED = ConvertUnitType( 13 );

export const UNIT_TYPE_UNDEAD = ConvertUnitType( 14 );
export const UNIT_TYPE_MECHANICAL = ConvertUnitType( 15 );
export const UNIT_TYPE_PEON = ConvertUnitType( 16 );
export const UNIT_TYPE_SAPPER = ConvertUnitType( 17 );
export const UNIT_TYPE_TOWNHALL = ConvertUnitType( 18 );
export const UNIT_TYPE_ANCIENT = ConvertUnitType( 19 );

export const UNIT_TYPE_TAUREN = ConvertUnitType( 20 );
export const UNIT_TYPE_POISONED = ConvertUnitType( 21 );
export const UNIT_TYPE_POLYMORPHED = ConvertUnitType( 22 );
export const UNIT_TYPE_SLEEPING = ConvertUnitType( 23 );
export const UNIT_TYPE_RESISTANT = ConvertUnitType( 24 );
export const UNIT_TYPE_ETHEREAL = ConvertUnitType( 25 );
export const UNIT_TYPE_MAGIC_IMMUNE = ConvertUnitType( 26 );

// ===================================================
// Unit Type Constants for use with ChooseRandomItemEx()
// ===================================================

export const ITEM_TYPE_PERMANENT = ConvertItemType( 0 );
export const ITEM_TYPE_CHARGED = ConvertItemType( 1 );
export const ITEM_TYPE_POWERUP = ConvertItemType( 2 );
export const ITEM_TYPE_ARTIFACT = ConvertItemType( 3 );
export const ITEM_TYPE_PURCHASABLE = ConvertItemType( 4 );
export const ITEM_TYPE_CAMPAIGN = ConvertItemType( 5 );
export const ITEM_TYPE_MISCELLANEOUS = ConvertItemType( 6 );
export const ITEM_TYPE_UNKNOWN = ConvertItemType( 7 );
export const ITEM_TYPE_ANY = ConvertItemType( 8 );

// Deprecated, should use ITEM_TYPE_POWERUP
export const ITEM_TYPE_TOME = ConvertItemType( 2 );

// ===================================================
// Animatable Camera Fields
// ===================================================

export const CAMERA_FIELD_TARGET_DISTANCE = ConvertCameraField( 0 );
export const CAMERA_FIELD_FARZ = ConvertCameraField( 1 );
export const CAMERA_FIELD_ANGLE_OF_ATTACK = ConvertCameraField( 2 );
export const CAMERA_FIELD_FIELD_OF_VIEW = ConvertCameraField( 3 );
export const CAMERA_FIELD_ROLL = ConvertCameraField( 4 );
export const CAMERA_FIELD_ROTATION = ConvertCameraField( 5 );
export const CAMERA_FIELD_ZOFFSET = ConvertCameraField( 6 );
export const CAMERA_FIELD_NEARZ = ConvertCameraField( 7 );
export const CAMERA_FIELD_LOCAL_PITCH = ConvertCameraField( 8 );
export const CAMERA_FIELD_LOCAL_YAW = ConvertCameraField( 9 );
export const CAMERA_FIELD_LOCAL_ROLL = ConvertCameraField( 10 );

export const BLEND_MODE_NONE = ConvertBlendMode( 0 );
export const BLEND_MODE_DONT_CARE = ConvertBlendMode( 0 );
export const BLEND_MODE_KEYALPHA = ConvertBlendMode( 1 );
export const BLEND_MODE_BLEND = ConvertBlendMode( 2 );
export const BLEND_MODE_ADDITIVE = ConvertBlendMode( 3 );
export const BLEND_MODE_MODULATE = ConvertBlendMode( 4 );
export const BLEND_MODE_MODULATE_2X = ConvertBlendMode( 5 );

export const RARITY_FREQUENT = ConvertRarityControl( 0 );
export const RARITY_RARE = ConvertRarityControl( 1 );

export const TEXMAP_FLAG_NONE = ConvertTexMapFlags( 0 );
export const TEXMAP_FLAG_WRAP_U = ConvertTexMapFlags( 1 );
export const TEXMAP_FLAG_WRAP_V = ConvertTexMapFlags( 2 );
export const TEXMAP_FLAG_WRAP_UV = ConvertTexMapFlags( 3 );

export const FOG_OF_WAR_MASKED = ConvertFogState( 1 );
export const FOG_OF_WAR_FOGGED = ConvertFogState( 2 );
export const FOG_OF_WAR_VISIBLE = ConvertFogState( 4 );

// ===================================================
// Camera Margin constants for use with GetCameraMargin
// ===================================================

export const CAMERA_MARGIN_LEFT = 0;
export const CAMERA_MARGIN_RIGHT = 1;
export const CAMERA_MARGIN_TOP = 2;
export const CAMERA_MARGIN_BOTTOM = 3;

// ===================================================
// Effect API constants
// ===================================================

export const EFFECT_TYPE_EFFECT = ConvertEffectType( 0 );
export const EFFECT_TYPE_TARGET = ConvertEffectType( 1 );
export const EFFECT_TYPE_CASTER = ConvertEffectType( 2 );
export const EFFECT_TYPE_SPECIAL = ConvertEffectType( 3 );
export const EFFECT_TYPE_AREA_EFFECT = ConvertEffectType( 4 );
export const EFFECT_TYPE_MISSILE = ConvertEffectType( 5 );
export const EFFECT_TYPE_LIGHTNING = ConvertEffectType( 6 );

export const SOUND_TYPE_EFFECT = ConvertSoundType( 0 );
export const SOUND_TYPE_EFFECT_LOOPED = ConvertSoundType( 1 );

// ===================================================
// Custom UI API constants
// ===================================================

export const ORIGIN_FRAME_GAME_UI = ConvertOriginFrameType( 0 );
export const ORIGIN_FRAME_COMMAND_BUTTON = ConvertOriginFrameType( 1 );
export const ORIGIN_FRAME_HERO_BAR = ConvertOriginFrameType( 2 );
export const ORIGIN_FRAME_HERO_BUTTON = ConvertOriginFrameType( 3 );
export const ORIGIN_FRAME_HERO_HP_BAR = ConvertOriginFrameType( 4 );
export const ORIGIN_FRAME_HERO_MANA_BAR = ConvertOriginFrameType( 5 );
export const ORIGIN_FRAME_HERO_BUTTON_INDICATOR = ConvertOriginFrameType( 6 );
export const ORIGIN_FRAME_ITEM_BUTTON = ConvertOriginFrameType( 7 );
export const ORIGIN_FRAME_MINIMAP = ConvertOriginFrameType( 8 );
export const ORIGIN_FRAME_MINIMAP_BUTTON = ConvertOriginFrameType( 9 );
export const ORIGIN_FRAME_SYSTEM_BUTTON = ConvertOriginFrameType( 10 );
export const ORIGIN_FRAME_TOOLTIP = ConvertOriginFrameType( 11 );
export const ORIGIN_FRAME_UBERTOOLTIP = ConvertOriginFrameType( 12 );
export const ORIGIN_FRAME_CHAT_MSG = ConvertOriginFrameType( 13 );
export const ORIGIN_FRAME_UNIT_MSG = ConvertOriginFrameType( 14 );
export const ORIGIN_FRAME_TOP_MSG = ConvertOriginFrameType( 15 );
export const ORIGIN_FRAME_PORTRAIT = ConvertOriginFrameType( 16 );
export const ORIGIN_FRAME_WORLD_FRAME = ConvertOriginFrameType( 17 );

export const FRAMEPOINT_TOPLEFT = ConvertFramePointType( 0 );
export const FRAMEPOINT_TOP = ConvertFramePointType( 1 );
export const FRAMEPOINT_TOPRIGHT = ConvertFramePointType( 2 );
export const FRAMEPOINT_LEFT = ConvertFramePointType( 3 );
export const FRAMEPOINT_CENTER = ConvertFramePointType( 4 );
export const FRAMEPOINT_RIGHT = ConvertFramePointType( 5 );
export const FRAMEPOINT_BOTTOMLEFT = ConvertFramePointType( 6 );
export const FRAMEPOINT_BOTTOM = ConvertFramePointType( 7 );
export const FRAMEPOINT_BOTTOMRIGHT = ConvertFramePointType( 8 );

export const TEXT_JUSTIFY_TOP = ConvertTextAlignType( 0 );
export const TEXT_JUSTIFY_MIDDLE = ConvertTextAlignType( 1 );
export const TEXT_JUSTIFY_BOTTOM = ConvertTextAlignType( 2 );
export const TEXT_JUSTIFY_LEFT = ConvertTextAlignType( 3 );
export const TEXT_JUSTIFY_CENTER = ConvertTextAlignType( 4 );
export const TEXT_JUSTIFY_RIGHT = ConvertTextAlignType( 5 );

export const FRAMEEVENT_CONTROL_CLICK = ConvertFrameEventType( 1 );
export const FRAMEEVENT_MOUSE_ENTER = ConvertFrameEventType( 2 );
export const FRAMEEVENT_MOUSE_LEAVE = ConvertFrameEventType( 3 );
export const FRAMEEVENT_MOUSE_UP = ConvertFrameEventType( 4 );
export const FRAMEEVENT_MOUSE_DOWN = ConvertFrameEventType( 5 );
export const FRAMEEVENT_MOUSE_WHEEL = ConvertFrameEventType( 6 );
export const FRAMEEVENT_CHECKBOX_CHECKED = ConvertFrameEventType( 7 );
export const FRAMEEVENT_CHECKBOX_UNCHECKED = ConvertFrameEventType( 8 );
export const FRAMEEVENT_EDITBOX_TEXT_CHANGED = ConvertFrameEventType( 9 );
export const FRAMEEVENT_POPUPMENU_ITEM_CHANGED = ConvertFrameEventType( 10 );
export const FRAMEEVENT_MOUSE_DOUBLECLICK = ConvertFrameEventType( 11 );
export const FRAMEEVENT_SPRITE_ANIM_UPDATE = ConvertFrameEventType( 12 );
export const FRAMEEVENT_SLIDER_VALUE_CHANGED = ConvertFrameEventType( 13 );
export const FRAMEEVENT_DIALOG_CANCEL = ConvertFrameEventType( 14 );
export const FRAMEEVENT_DIALOG_ACCEPT = ConvertFrameEventType( 15 );
export const FRAMEEVENT_EDITBOX_ENTER = ConvertFrameEventType( 16 );

// ===================================================
// OS Key constants
// ===================================================

export const OSKEY_BACKSPACE = ConvertOsKeyType( 8 );
export const OSKEY_TAB = ConvertOsKeyType( 9 );
export const OSKEY_CLEAR = ConvertOsKeyType( 12 );
export const OSKEY_RETURN = ConvertOsKeyType( 13 );
export const OSKEY_SHIFT = ConvertOsKeyType( 16 );
export const OSKEY_CONTROL = ConvertOsKeyType( 17 );
export const OSKEY_ALT = ConvertOsKeyType( 18 );
export const OSKEY_PAUSE = ConvertOsKeyType( 19 );
export const OSKEY_CAPSLOCK = ConvertOsKeyType( 20 );
export const OSKEY_KANA = ConvertOsKeyType( 21 );
export const OSKEY_HANGUL = ConvertOsKeyType( 21 );
export const OSKEY_JUNJA = ConvertOsKeyType( 23 );
export const OSKEY_FINAL = ConvertOsKeyType( 24 );
export const OSKEY_HANJA = ConvertOsKeyType( 25 );
export const OSKEY_KANJI = ConvertOsKeyType( 25 );
export const OSKEY_ESCAPE = ConvertOsKeyType( 27 );
export const OSKEY_CONVERT = ConvertOsKeyType( 28 );
export const OSKEY_NONCONVERT = ConvertOsKeyType( 29 );
export const OSKEY_ACCEPT = ConvertOsKeyType( 30 );
export const OSKEY_MODECHANGE = ConvertOsKeyType( 31 );
export const OSKEY_SPACE = ConvertOsKeyType( 32 );
export const OSKEY_PAGEUP = ConvertOsKeyType( 33 );
export const OSKEY_PAGEDOWN = ConvertOsKeyType( 34 );
export const OSKEY_END = ConvertOsKeyType( 35 );
export const OSKEY_HOME = ConvertOsKeyType( 36 );
export const OSKEY_LEFT = ConvertOsKeyType( 37 );
export const OSKEY_UP = ConvertOsKeyType( 38 );
export const OSKEY_RIGHT = ConvertOsKeyType( 39 );
export const OSKEY_DOWN = ConvertOsKeyType( 40 );
export const OSKEY_SELECT = ConvertOsKeyType( 41 );
export const OSKEY_PRINT = ConvertOsKeyType( 42 );
export const OSKEY_EXECUTE = ConvertOsKeyType( 43 );
export const OSKEY_PRINTSCREEN = ConvertOsKeyType( 44 );
export const OSKEY_INSERT = ConvertOsKeyType( 45 );
export const OSKEY_DELETE = ConvertOsKeyType( 46 );
export const OSKEY_HELP = ConvertOsKeyType( 47 );
export const OSKEY_0 = ConvertOsKeyType( 48 );
export const OSKEY_1 = ConvertOsKeyType( 49 );
export const OSKEY_2 = ConvertOsKeyType( 50 );
export const OSKEY_3 = ConvertOsKeyType( 51 );
export const OSKEY_4 = ConvertOsKeyType( 52 );
export const OSKEY_5 = ConvertOsKeyType( 53 );
export const OSKEY_6 = ConvertOsKeyType( 54 );
export const OSKEY_7 = ConvertOsKeyType( 55 );
export const OSKEY_8 = ConvertOsKeyType( 56 );
export const OSKEY_9 = ConvertOsKeyType( 57 );
export const OSKEY_A = ConvertOsKeyType( 65 );
export const OSKEY_B = ConvertOsKeyType( 66 );
export const OSKEY_C = ConvertOsKeyType( 67 );
export const OSKEY_D = ConvertOsKeyType( 68 );
export const OSKEY_E = ConvertOsKeyType( 69 );
export const OSKEY_F = ConvertOsKeyType( 70 );
export const OSKEY_G = ConvertOsKeyType( 71 );
export const OSKEY_H = ConvertOsKeyType( 72 );
export const OSKEY_I = ConvertOsKeyType( 73 );
export const OSKEY_J = ConvertOsKeyType( 74 );
export const OSKEY_K = ConvertOsKeyType( 75 );
export const OSKEY_L = ConvertOsKeyType( 76 );
export const OSKEY_M = ConvertOsKeyType( 77 );
export const OSKEY_N = ConvertOsKeyType( 78 );
export const OSKEY_O = ConvertOsKeyType( 79 );
export const OSKEY_P = ConvertOsKeyType( 80 );
export const OSKEY_Q = ConvertOsKeyType( 81 );
export const OSKEY_R = ConvertOsKeyType( 82 );
export const OSKEY_S = ConvertOsKeyType( 83 );
export const OSKEY_T = ConvertOsKeyType( 84 );
export const OSKEY_U = ConvertOsKeyType( 85 );
export const OSKEY_V = ConvertOsKeyType( 86 );
export const OSKEY_W = ConvertOsKeyType( 87 );
export const OSKEY_X = ConvertOsKeyType( 88 );
export const OSKEY_Y = ConvertOsKeyType( 89 );
export const OSKEY_Z = ConvertOsKeyType( 90 );
export const OSKEY_LMETA = ConvertOsKeyType( 91 );
export const OSKEY_RMETA = ConvertOsKeyType( 92 );
export const OSKEY_APPS = ConvertOsKeyType( 93 );
export const OSKEY_SLEEP = ConvertOsKeyType( 95 );
export const OSKEY_NUMPAD0 = ConvertOsKeyType( 96 );
export const OSKEY_NUMPAD1 = ConvertOsKeyType( 97 );
export const OSKEY_NUMPAD2 = ConvertOsKeyType( 98 );
export const OSKEY_NUMPAD3 = ConvertOsKeyType( 99 );
export const OSKEY_NUMPAD4 = ConvertOsKeyType( 100 );
export const OSKEY_NUMPAD5 = ConvertOsKeyType( 101 );
export const OSKEY_NUMPAD6 = ConvertOsKeyType( 102 );
export const OSKEY_NUMPAD7 = ConvertOsKeyType( 103 );
export const OSKEY_NUMPAD8 = ConvertOsKeyType( 104 );
export const OSKEY_NUMPAD9 = ConvertOsKeyType( 105 );
export const OSKEY_MULTIPLY = ConvertOsKeyType( 106 );
export const OSKEY_ADD = ConvertOsKeyType( 107 );
export const OSKEY_SEPARATOR = ConvertOsKeyType( 108 );
export const OSKEY_SUBTRACT = ConvertOsKeyType( 109 );
export const OSKEY_DECIMAL = ConvertOsKeyType( 110 );
export const OSKEY_DIVIDE = ConvertOsKeyType( 111 );
export const OSKEY_F1 = ConvertOsKeyType( 112 );
export const OSKEY_F2 = ConvertOsKeyType( 113 );
export const OSKEY_F3 = ConvertOsKeyType( 114 );
export const OSKEY_F4 = ConvertOsKeyType( 115 );
export const OSKEY_F5 = ConvertOsKeyType( 116 );
export const OSKEY_F6 = ConvertOsKeyType( 117 );
export const OSKEY_F7 = ConvertOsKeyType( 118 );
export const OSKEY_F8 = ConvertOsKeyType( 119 );
export const OSKEY_F9 = ConvertOsKeyType( 120 );
export const OSKEY_F10 = ConvertOsKeyType( 121 );
export const OSKEY_F11 = ConvertOsKeyType( 122 );
export const OSKEY_F12 = ConvertOsKeyType( 123 );
export const OSKEY_F13 = ConvertOsKeyType( 124 );
export const OSKEY_F14 = ConvertOsKeyType( 125 );
export const OSKEY_F15 = ConvertOsKeyType( 126 );
export const OSKEY_F16 = ConvertOsKeyType( 127 );
export const OSKEY_F17 = ConvertOsKeyType( 128 );
export const OSKEY_F18 = ConvertOsKeyType( 129 );
export const OSKEY_F19 = ConvertOsKeyType( 130 );
export const OSKEY_F20 = ConvertOsKeyType( 131 );
export const OSKEY_F21 = ConvertOsKeyType( 132 );
export const OSKEY_F22 = ConvertOsKeyType( 133 );
export const OSKEY_F23 = ConvertOsKeyType( 134 );
export const OSKEY_F24 = ConvertOsKeyType( 135 );
export const OSKEY_NUMLOCK = ConvertOsKeyType( 144 );
export const OSKEY_SCROLLLOCK = ConvertOsKeyType( 145 );
export const OSKEY_OEM_NEC_EQUAL = ConvertOsKeyType( 146 );
export const OSKEY_OEM_FJ_JISHO = ConvertOsKeyType( 146 );
export const OSKEY_OEM_FJ_MASSHOU = ConvertOsKeyType( 147 );
export const OSKEY_OEM_FJ_TOUROKU = ConvertOsKeyType( 148 );
export const OSKEY_OEM_FJ_LOYA = ConvertOsKeyType( 149 );
export const OSKEY_OEM_FJ_ROYA = ConvertOsKeyType( 150 );
export const OSKEY_LSHIFT = ConvertOsKeyType( 160 );
export const OSKEY_RSHIFT = ConvertOsKeyType( 161 );
export const OSKEY_LCONTROL = ConvertOsKeyType( 162 );
export const OSKEY_RCONTROL = ConvertOsKeyType( 163 );
export const OSKEY_LALT = ConvertOsKeyType( 164 );
export const OSKEY_RALT = ConvertOsKeyType( 165 );
export const OSKEY_BROWSER_BACK = ConvertOsKeyType( 166 );
export const OSKEY_BROWSER_FORWARD = ConvertOsKeyType( 167 );
export const OSKEY_BROWSER_REFRESH = ConvertOsKeyType( 168 );
export const OSKEY_BROWSER_STOP = ConvertOsKeyType( 169 );
export const OSKEY_BROWSER_SEARCH = ConvertOsKeyType( 170 );
export const OSKEY_BROWSER_FAVORITES = ConvertOsKeyType( 171 );
export const OSKEY_BROWSER_HOME = ConvertOsKeyType( 172 );
export const OSKEY_VOLUME_MUTE = ConvertOsKeyType( 173 );
export const OSKEY_VOLUME_DOWN = ConvertOsKeyType( 174 );
export const OSKEY_VOLUME_UP = ConvertOsKeyType( 175 );
export const OSKEY_MEDIA_NEXT_TRACK = ConvertOsKeyType( 176 );
export const OSKEY_MEDIA_PREV_TRACK = ConvertOsKeyType( 177 );
export const OSKEY_MEDIA_STOP = ConvertOsKeyType( 178 );
export const OSKEY_MEDIA_PLAY_PAUSE = ConvertOsKeyType( 179 );
export const OSKEY_LAUNCH_MAIL = ConvertOsKeyType( 180 );
export const OSKEY_LAUNCH_MEDIA_SELECT = ConvertOsKeyType( 181 );
export const OSKEY_LAUNCH_APP1 = ConvertOsKeyType( 182 );
export const OSKEY_LAUNCH_APP2 = ConvertOsKeyType( 183 );
export const OSKEY_OEM_1 = ConvertOsKeyType( 186 );
export const OSKEY_OEM_PLUS = ConvertOsKeyType( 187 );
export const OSKEY_OEM_COMMA = ConvertOsKeyType( 188 );
export const OSKEY_OEM_MINUS = ConvertOsKeyType( 189 );
export const OSKEY_OEM_PERIOD = ConvertOsKeyType( 190 );
export const OSKEY_OEM_2 = ConvertOsKeyType( 191 );
export const OSKEY_OEM_3 = ConvertOsKeyType( 192 );
export const OSKEY_OEM_4 = ConvertOsKeyType( 219 );
export const OSKEY_OEM_5 = ConvertOsKeyType( 220 );
export const OSKEY_OEM_6 = ConvertOsKeyType( 221 );
export const OSKEY_OEM_7 = ConvertOsKeyType( 222 );
export const OSKEY_OEM_8 = ConvertOsKeyType( 223 );
export const OSKEY_OEM_AX = ConvertOsKeyType( 225 );
export const OSKEY_OEM_102 = ConvertOsKeyType( 226 );
export const OSKEY_ICO_HELP = ConvertOsKeyType( 227 );
export const OSKEY_ICO_00 = ConvertOsKeyType( 228 );
export const OSKEY_PROCESSKEY = ConvertOsKeyType( 229 );
export const OSKEY_ICO_CLEAR = ConvertOsKeyType( 230 );
export const OSKEY_PACKET = ConvertOsKeyType( 231 );
export const OSKEY_OEM_RESET = ConvertOsKeyType( 233 );
export const OSKEY_OEM_JUMP = ConvertOsKeyType( 234 );
export const OSKEY_OEM_PA1 = ConvertOsKeyType( 235 );
export const OSKEY_OEM_PA2 = ConvertOsKeyType( 236 );
export const OSKEY_OEM_PA3 = ConvertOsKeyType( 237 );
export const OSKEY_OEM_WSCTRL = ConvertOsKeyType( 238 );
export const OSKEY_OEM_CUSEL = ConvertOsKeyType( 239 );
export const OSKEY_OEM_ATTN = ConvertOsKeyType( 240 );
export const OSKEY_OEM_FINISH = ConvertOsKeyType( 241 );
export const OSKEY_OEM_COPY = ConvertOsKeyType( 242 );
export const OSKEY_OEM_AUTO = ConvertOsKeyType( 243 );
export const OSKEY_OEM_ENLW = ConvertOsKeyType( 244 );
export const OSKEY_OEM_BACKTAB = ConvertOsKeyType( 245 );
export const OSKEY_ATTN = ConvertOsKeyType( 246 );
export const OSKEY_CRSEL = ConvertOsKeyType( 247 );
export const OSKEY_EXSEL = ConvertOsKeyType( 248 );
export const OSKEY_EREOF = ConvertOsKeyType( 249 );
export const OSKEY_PLAY = ConvertOsKeyType( 250 );
export const OSKEY_ZOOM = ConvertOsKeyType( 251 );
export const OSKEY_NONAME = ConvertOsKeyType( 252 );
export const OSKEY_PA1 = ConvertOsKeyType( 253 );
export const OSKEY_OEM_CLEAR = ConvertOsKeyType( 254 );

// ===================================================
// Instanced Object Operation API constants
// ===================================================

// Ability
export const ABILITY_IF_BUTTON_POSITION_NORMAL_X = ConvertAbilityIntegerField( FourCC( "abpx" ) );
export const ABILITY_IF_BUTTON_POSITION_NORMAL_Y = ConvertAbilityIntegerField( FourCC( "abpy" ) );
export const ABILITY_IF_BUTTON_POSITION_ACTIVATED_X = ConvertAbilityIntegerField( FourCC( "aubx" ) );
export const ABILITY_IF_BUTTON_POSITION_ACTIVATED_Y = ConvertAbilityIntegerField( FourCC( "auby" ) );
export const ABILITY_IF_BUTTON_POSITION_RESEARCH_X = ConvertAbilityIntegerField( FourCC( "arpx" ) );
export const ABILITY_IF_BUTTON_POSITION_RESEARCH_Y = ConvertAbilityIntegerField( FourCC( "arpy" ) );
export const ABILITY_IF_MISSILE_SPEED = ConvertAbilityIntegerField( FourCC( "amsp" ) );
export const ABILITY_IF_TARGET_ATTACHMENTS = ConvertAbilityIntegerField( FourCC( "atac" ) );
export const ABILITY_IF_CASTER_ATTACHMENTS = ConvertAbilityIntegerField( FourCC( "acac" ) );
export const ABILITY_IF_PRIORITY = ConvertAbilityIntegerField( FourCC( "apri" ) );
export const ABILITY_IF_LEVELS = ConvertAbilityIntegerField( FourCC( "alev" ) );
export const ABILITY_IF_REQUIRED_LEVEL = ConvertAbilityIntegerField( FourCC( "arlv" ) );
export const ABILITY_IF_LEVEL_SKIP_REQUIREMENT = ConvertAbilityIntegerField( FourCC( "alsk" ) );

export const ABILITY_BF_HERO_ABILITY = ConvertAbilityBooleanField( FourCC( "aher" ) );
export const ABILITY_BF_ITEM_ABILITY = ConvertAbilityBooleanField( FourCC( "aite" ) );
export const ABILITY_BF_CHECK_DEPENDENCIES = ConvertAbilityBooleanField( FourCC( "achd" ) );

export const ABILITY_RF_ARF_MISSILE_ARC = ConvertAbilityRealField( FourCC( "amac" ) );

export const ABILITY_SF_NAME = ConvertAbilityStringField( FourCC( "anam" ) );
export const ABILITY_SF_ICON_ACTIVATED = ConvertAbilityStringField( FourCC( "auar" ) );
export const ABILITY_SF_ICON_RESEARCH = ConvertAbilityStringField( FourCC( "arar" ) );
export const ABILITY_SF_EFFECT_SOUND = ConvertAbilityStringField( FourCC( "aefs" ) );
export const ABILITY_SF_EFFECT_SOUND_LOOPING = ConvertAbilityStringField( FourCC( "aefl" ) );

export const ABILITY_ILF_MANA_COST = ConvertAbilityIntegerLevelField( FourCC( "amcs" ) );
export const ABILITY_ILF_NUMBER_OF_WAVES = ConvertAbilityIntegerLevelField( FourCC( "Hbz1" ) );
export const ABILITY_ILF_NUMBER_OF_SHARDS = ConvertAbilityIntegerLevelField( FourCC( "Hbz3" ) );
export const ABILITY_ILF_NUMBER_OF_UNITS_TELEPORTED = ConvertAbilityIntegerLevelField( FourCC( "Hmt1" ) );
export const ABILITY_ILF_SUMMONED_UNIT_COUNT_HWE2 = ConvertAbilityIntegerLevelField( FourCC( "Hwe2" ) );
export const ABILITY_ILF_NUMBER_OF_IMAGES = ConvertAbilityIntegerLevelField( FourCC( "Omi1" ) );
export const ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_UAN1 = ConvertAbilityIntegerLevelField( FourCC( "Uan1" ) );
export const ABILITY_ILF_MORPHING_FLAGS = ConvertAbilityIntegerLevelField( FourCC( "Eme2" ) );
export const ABILITY_ILF_STRENGTH_BONUS_NRG5 = ConvertAbilityIntegerLevelField( FourCC( "Nrg5" ) );
export const ABILITY_ILF_DEFENSE_BONUS_NRG6 = ConvertAbilityIntegerLevelField( FourCC( "Nrg6" ) );
export const ABILITY_ILF_NUMBER_OF_TARGETS_HIT = ConvertAbilityIntegerLevelField( FourCC( "Ocl2" ) );
export const ABILITY_ILF_DETECTION_TYPE_OFS1 = ConvertAbilityIntegerLevelField( FourCC( "Ofs1" ) );
export const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_OSF2 = ConvertAbilityIntegerLevelField( FourCC( "Osf2" ) );
export const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_EFN1 = ConvertAbilityIntegerLevelField( FourCC( "Efn1" ) );
export const ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_HRE1 = ConvertAbilityIntegerLevelField( FourCC( "Hre1" ) );
export const ABILITY_ILF_STACK_FLAGS = ConvertAbilityIntegerLevelField( FourCC( "Hca4" ) );
export const ABILITY_ILF_MINIMUM_NUMBER_OF_UNITS = ConvertAbilityIntegerLevelField( FourCC( "Ndp2" ) );
export const ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_NDP3 = ConvertAbilityIntegerLevelField( FourCC( "Ndp3" ) );
export const ABILITY_ILF_NUMBER_OF_UNITS_CREATED_NRC2 = ConvertAbilityIntegerLevelField( FourCC( "Nrc2" ) );
export const ABILITY_ILF_SHIELD_LIFE = ConvertAbilityIntegerLevelField( FourCC( "Ams3" ) );
export const ABILITY_ILF_MANA_LOSS_AMS4 = ConvertAbilityIntegerLevelField( FourCC( "Ams4" ) );
export const ABILITY_ILF_GOLD_PER_INTERVAL_BGM1 = ConvertAbilityIntegerLevelField( FourCC( "Bgm1" ) );
export const ABILITY_ILF_MAX_NUMBER_OF_MINERS = ConvertAbilityIntegerLevelField( FourCC( "Bgm3" ) );
export const ABILITY_ILF_CARGO_CAPACITY = ConvertAbilityIntegerLevelField( FourCC( "Car1" ) );
export const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_DEV3 = ConvertAbilityIntegerLevelField( FourCC( "Dev3" ) );
export const ABILITY_ILF_MAX_CREEP_LEVEL_DEV1 = ConvertAbilityIntegerLevelField( FourCC( "Dev1" ) );
export const ABILITY_ILF_GOLD_PER_INTERVAL_EGM1 = ConvertAbilityIntegerLevelField( FourCC( "Egm1" ) );
export const ABILITY_ILF_DEFENSE_REDUCTION = ConvertAbilityIntegerLevelField( FourCC( "Fae1" ) );
export const ABILITY_ILF_DETECTION_TYPE_FLA1 = ConvertAbilityIntegerLevelField( FourCC( "Fla1" ) );
export const ABILITY_ILF_FLARE_COUNT = ConvertAbilityIntegerLevelField( FourCC( "Fla3" ) );
export const ABILITY_ILF_MAX_GOLD = ConvertAbilityIntegerLevelField( FourCC( "Gld1" ) );
export const ABILITY_ILF_MINING_CAPACITY = ConvertAbilityIntegerLevelField( FourCC( "Gld3" ) );
export const ABILITY_ILF_MAXIMUM_NUMBER_OF_CORPSES_GYD1 = ConvertAbilityIntegerLevelField( FourCC( "Gyd1" ) );
export const ABILITY_ILF_DAMAGE_TO_TREE = ConvertAbilityIntegerLevelField( FourCC( "Har1" ) );
export const ABILITY_ILF_LUMBER_CAPACITY = ConvertAbilityIntegerLevelField( FourCC( "Har2" ) );
export const ABILITY_ILF_GOLD_CAPACITY = ConvertAbilityIntegerLevelField( FourCC( "Har3" ) );
export const ABILITY_ILF_DEFENSE_INCREASE_INF2 = ConvertAbilityIntegerLevelField( FourCC( "Inf2" ) );
export const ABILITY_ILF_INTERACTION_TYPE = ConvertAbilityIntegerLevelField( FourCC( "Neu2" ) );
export const ABILITY_ILF_GOLD_COST_NDT1 = ConvertAbilityIntegerLevelField( FourCC( "Ndt1" ) );
export const ABILITY_ILF_LUMBER_COST_NDT2 = ConvertAbilityIntegerLevelField( FourCC( "Ndt2" ) );
export const ABILITY_ILF_DETECTION_TYPE_NDT3 = ConvertAbilityIntegerLevelField( FourCC( "Ndt3" ) );
export const ABILITY_ILF_STACKING_TYPE_POI4 = ConvertAbilityIntegerLevelField( FourCC( "Poi4" ) );
export const ABILITY_ILF_STACKING_TYPE_POA5 = ConvertAbilityIntegerLevelField( FourCC( "Poa5" ) );
export const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_PLY1 = ConvertAbilityIntegerLevelField( FourCC( "Ply1" ) );
export const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_POS1 = ConvertAbilityIntegerLevelField( FourCC( "Pos1" ) );
export const ABILITY_ILF_MOVEMENT_UPDATE_FREQUENCY_PRG1 = ConvertAbilityIntegerLevelField( FourCC( "Prg1" ) );
export const ABILITY_ILF_ATTACK_UPDATE_FREQUENCY_PRG2 = ConvertAbilityIntegerLevelField( FourCC( "Prg2" ) );
export const ABILITY_ILF_MANA_LOSS_PRG6 = ConvertAbilityIntegerLevelField( FourCC( "Prg6" ) );
export const ABILITY_ILF_UNITS_SUMMONED_TYPE_ONE = ConvertAbilityIntegerLevelField( FourCC( "Rai1" ) );
export const ABILITY_ILF_UNITS_SUMMONED_TYPE_TWO = ConvertAbilityIntegerLevelField( FourCC( "Rai2" ) );
export const ABILITY_ILF_MAX_UNITS_SUMMONED = ConvertAbilityIntegerLevelField( FourCC( "Ucb5" ) );
export const ABILITY_ILF_ALLOW_WHEN_FULL_REJ3 = ConvertAbilityIntegerLevelField( FourCC( "Rej3" ) );
export const ABILITY_ILF_MAXIMUM_UNITS_CHARGED_TO_CASTER = ConvertAbilityIntegerLevelField( FourCC( "Rpb5" ) );
export const ABILITY_ILF_MAXIMUM_UNITS_AFFECTED = ConvertAbilityIntegerLevelField( FourCC( "Rpb6" ) );
export const ABILITY_ILF_DEFENSE_INCREASE_ROA2 = ConvertAbilityIntegerLevelField( FourCC( "Roa2" ) );
export const ABILITY_ILF_MAX_UNITS_ROA7 = ConvertAbilityIntegerLevelField( FourCC( "Roa7" ) );
export const ABILITY_ILF_ROOTED_WEAPONS = ConvertAbilityIntegerLevelField( FourCC( "Roo1" ) );
export const ABILITY_ILF_UPROOTED_WEAPONS = ConvertAbilityIntegerLevelField( FourCC( "Roo2" ) );
export const ABILITY_ILF_UPROOTED_DEFENSE_TYPE = ConvertAbilityIntegerLevelField( FourCC( "Roo4" ) );
export const ABILITY_ILF_ACCUMULATION_STEP = ConvertAbilityIntegerLevelField( FourCC( "Sal2" ) );
export const ABILITY_ILF_NUMBER_OF_OWLS = ConvertAbilityIntegerLevelField( FourCC( "Esn4" ) );
export const ABILITY_ILF_STACKING_TYPE_SPO4 = ConvertAbilityIntegerLevelField( FourCC( "Spo4" ) );
export const ABILITY_ILF_NUMBER_OF_UNITS = ConvertAbilityIntegerLevelField( FourCC( "Sod1" ) );
export const ABILITY_ILF_SPIDER_CAPACITY = ConvertAbilityIntegerLevelField( FourCC( "Spa1" ) );
export const ABILITY_ILF_INTERVALS_BEFORE_CHANGING_TREES = ConvertAbilityIntegerLevelField( FourCC( "Wha2" ) );
export const ABILITY_ILF_AGILITY_BONUS = ConvertAbilityIntegerLevelField( FourCC( "Iagi" ) );
export const ABILITY_ILF_INTELLIGENCE_BONUS = ConvertAbilityIntegerLevelField( FourCC( "Iint" ) );
export const ABILITY_ILF_STRENGTH_BONUS_ISTR = ConvertAbilityIntegerLevelField( FourCC( "Istr" ) );
export const ABILITY_ILF_ATTACK_BONUS = ConvertAbilityIntegerLevelField( FourCC( "Iatt" ) );
export const ABILITY_ILF_DEFENSE_BONUS_IDEF = ConvertAbilityIntegerLevelField( FourCC( "Idef" ) );
export const ABILITY_ILF_SUMMON_1_AMOUNT = ConvertAbilityIntegerLevelField( FourCC( "Isn1" ) );
export const ABILITY_ILF_SUMMON_2_AMOUNT = ConvertAbilityIntegerLevelField( FourCC( "Isn2" ) );
export const ABILITY_ILF_EXPERIENCE_GAINED = ConvertAbilityIntegerLevelField( FourCC( "Ixpg" ) );
export const ABILITY_ILF_HIT_POINTS_GAINED_IHPG = ConvertAbilityIntegerLevelField( FourCC( "Ihpg" ) );
export const ABILITY_ILF_MANA_POINTS_GAINED_IMPG = ConvertAbilityIntegerLevelField( FourCC( "Impg" ) );
export const ABILITY_ILF_HIT_POINTS_GAINED_IHP2 = ConvertAbilityIntegerLevelField( FourCC( "Ihp2" ) );
export const ABILITY_ILF_MANA_POINTS_GAINED_IMP2 = ConvertAbilityIntegerLevelField( FourCC( "Imp2" ) );
export const ABILITY_ILF_DAMAGE_BONUS_DICE = ConvertAbilityIntegerLevelField( FourCC( "Idic" ) );
export const ABILITY_ILF_ARMOR_PENALTY_IARP = ConvertAbilityIntegerLevelField( FourCC( "Iarp" ) );
export const ABILITY_ILF_ENABLED_ATTACK_INDEX_IOB5 = ConvertAbilityIntegerLevelField( FourCC( "Iob5" ) );
export const ABILITY_ILF_LEVELS_GAINED = ConvertAbilityIntegerLevelField( FourCC( "Ilev" ) );
export const ABILITY_ILF_MAX_LIFE_GAINED = ConvertAbilityIntegerLevelField( FourCC( "Ilif" ) );
export const ABILITY_ILF_MAX_MANA_GAINED = ConvertAbilityIntegerLevelField( FourCC( "Iman" ) );
export const ABILITY_ILF_GOLD_GIVEN = ConvertAbilityIntegerLevelField( FourCC( "Igol" ) );
export const ABILITY_ILF_LUMBER_GIVEN = ConvertAbilityIntegerLevelField( FourCC( "Ilum" ) );
export const ABILITY_ILF_DETECTION_TYPE_IFA1 = ConvertAbilityIntegerLevelField( FourCC( "Ifa1" ) );
export const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_ICRE = ConvertAbilityIntegerLevelField( FourCC( "Icre" ) );
export const ABILITY_ILF_MOVEMENT_SPEED_BONUS = ConvertAbilityIntegerLevelField( FourCC( "Imvb" ) );
export const ABILITY_ILF_HIT_POINTS_REGENERATED_PER_SECOND = ConvertAbilityIntegerLevelField( FourCC( "Ihpr" ) );
export const ABILITY_ILF_SIGHT_RANGE_BONUS = ConvertAbilityIntegerLevelField( FourCC( "Isib" ) );
export const ABILITY_ILF_DAMAGE_PER_DURATION = ConvertAbilityIntegerLevelField( FourCC( "Icfd" ) );
export const ABILITY_ILF_MANA_USED_PER_SECOND = ConvertAbilityIntegerLevelField( FourCC( "Icfm" ) );
export const ABILITY_ILF_EXTRA_MANA_REQUIRED = ConvertAbilityIntegerLevelField( FourCC( "Icfx" ) );
export const ABILITY_ILF_DETECTION_RADIUS_IDET = ConvertAbilityIntegerLevelField( FourCC( "Idet" ) );
export const ABILITY_ILF_MANA_LOSS_PER_UNIT_IDIM = ConvertAbilityIntegerLevelField( FourCC( "Idim" ) );
export const ABILITY_ILF_DAMAGE_TO_SUMMONED_UNITS_IDID = ConvertAbilityIntegerLevelField( FourCC( "Idid" ) );
export const ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_IREC = ConvertAbilityIntegerLevelField( FourCC( "Irec" ) );
export const ABILITY_ILF_DELAY_AFTER_DEATH_SECONDS = ConvertAbilityIntegerLevelField( FourCC( "Ircd" ) );
export const ABILITY_ILF_RESTORED_LIFE = ConvertAbilityIntegerLevelField( FourCC( "irc2" ) );
export const ABILITY_ILF_RESTORED_MANA__1_FOR_CURRENT = ConvertAbilityIntegerLevelField( FourCC( "irc3" ) );
export const ABILITY_ILF_HIT_POINTS_RESTORED = ConvertAbilityIntegerLevelField( FourCC( "Ihps" ) );
export const ABILITY_ILF_MANA_POINTS_RESTORED = ConvertAbilityIntegerLevelField( FourCC( "Imps" ) );
export const ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_ITPM = ConvertAbilityIntegerLevelField( FourCC( "Itpm" ) );
export const ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_CAD1 = ConvertAbilityIntegerLevelField( FourCC( "Cad1" ) );
export const ABILITY_ILF_TERRAIN_DEFORMATION_DURATION_MS = ConvertAbilityIntegerLevelField( FourCC( "Wrs3" ) );
export const ABILITY_ILF_MAXIMUM_UNITS = ConvertAbilityIntegerLevelField( FourCC( "Uds1" ) );
export const ABILITY_ILF_DETECTION_TYPE_DET1 = ConvertAbilityIntegerLevelField( FourCC( "Det1" ) );
export const ABILITY_ILF_GOLD_COST_PER_STRUCTURE = ConvertAbilityIntegerLevelField( FourCC( "Nsp1" ) );
export const ABILITY_ILF_LUMBER_COST_PER_USE = ConvertAbilityIntegerLevelField( FourCC( "Nsp2" ) );
export const ABILITY_ILF_DETECTION_TYPE_NSP3 = ConvertAbilityIntegerLevelField( FourCC( "Nsp3" ) );
export const ABILITY_ILF_NUMBER_OF_SWARM_UNITS = ConvertAbilityIntegerLevelField( FourCC( "Uls1" ) );
export const ABILITY_ILF_MAX_SWARM_UNITS_PER_TARGET = ConvertAbilityIntegerLevelField( FourCC( "Uls3" ) );
export const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_NBA2 = ConvertAbilityIntegerLevelField( FourCC( "Nba2" ) );
export const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_NCH1 = ConvertAbilityIntegerLevelField( FourCC( "Nch1" ) );
export const ABILITY_ILF_ATTACKS_PREVENTED = ConvertAbilityIntegerLevelField( FourCC( "Nsi1" ) );
export const ABILITY_ILF_MAXIMUM_NUMBER_OF_TARGETS_EFK3 = ConvertAbilityIntegerLevelField( FourCC( "Efk3" ) );
export const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_ESV1 = ConvertAbilityIntegerLevelField( FourCC( "Esv1" ) );
export const ABILITY_ILF_MAXIMUM_NUMBER_OF_CORPSES_EXH1 = ConvertAbilityIntegerLevelField( FourCC( "exh1" ) );
export const ABILITY_ILF_ITEM_CAPACITY = ConvertAbilityIntegerLevelField( FourCC( "inv1" ) );
export const ABILITY_ILF_MAXIMUM_NUMBER_OF_TARGETS_SPL2 = ConvertAbilityIntegerLevelField( FourCC( "spl2" ) );
export const ABILITY_ILF_ALLOW_WHEN_FULL_IRL3 = ConvertAbilityIntegerLevelField( FourCC( "irl3" ) );
export const ABILITY_ILF_MAXIMUM_DISPELLED_UNITS = ConvertAbilityIntegerLevelField( FourCC( "idc3" ) );
export const ABILITY_ILF_NUMBER_OF_LURES = ConvertAbilityIntegerLevelField( FourCC( "imo1" ) );
export const ABILITY_ILF_NEW_TIME_OF_DAY_HOUR = ConvertAbilityIntegerLevelField( FourCC( "ict1" ) );
export const ABILITY_ILF_NEW_TIME_OF_DAY_MINUTE = ConvertAbilityIntegerLevelField( FourCC( "ict2" ) );
export const ABILITY_ILF_NUMBER_OF_UNITS_CREATED_MEC1 = ConvertAbilityIntegerLevelField( FourCC( "mec1" ) );
export const ABILITY_ILF_MINIMUM_SPELLS = ConvertAbilityIntegerLevelField( FourCC( "spb3" ) );
export const ABILITY_ILF_MAXIMUM_SPELLS = ConvertAbilityIntegerLevelField( FourCC( "spb4" ) );
export const ABILITY_ILF_DISABLED_ATTACK_INDEX = ConvertAbilityIntegerLevelField( FourCC( "gra3" ) );
export const ABILITY_ILF_ENABLED_ATTACK_INDEX_GRA4 = ConvertAbilityIntegerLevelField( FourCC( "gra4" ) );
export const ABILITY_ILF_MAXIMUM_ATTACKS = ConvertAbilityIntegerLevelField( FourCC( "gra5" ) );
export const ABILITY_ILF_BUILDING_TYPES_ALLOWED_NPR1 = ConvertAbilityIntegerLevelField( FourCC( "Npr1" ) );
export const ABILITY_ILF_BUILDING_TYPES_ALLOWED_NSA1 = ConvertAbilityIntegerLevelField( FourCC( "Nsa1" ) );
export const ABILITY_ILF_ATTACK_MODIFICATION = ConvertAbilityIntegerLevelField( FourCC( "Iaa1" ) );
export const ABILITY_ILF_SUMMONED_UNIT_COUNT_NPA5 = ConvertAbilityIntegerLevelField( FourCC( "Npa5" ) );
export const ABILITY_ILF_UPGRADE_LEVELS = ConvertAbilityIntegerLevelField( FourCC( "Igl1" ) );
export const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_NDO2 = ConvertAbilityIntegerLevelField( FourCC( "Ndo2" ) );
export const ABILITY_ILF_BEASTS_PER_SECOND = ConvertAbilityIntegerLevelField( FourCC( "Nst1" ) );
export const ABILITY_ILF_TARGET_TYPE = ConvertAbilityIntegerLevelField( FourCC( "Ncl2" ) );
export const ABILITY_ILF_OPTIONS = ConvertAbilityIntegerLevelField( FourCC( "Ncl3" ) );
export const ABILITY_ILF_ARMOR_PENALTY_NAB3 = ConvertAbilityIntegerLevelField( FourCC( "Nab3" ) );
export const ABILITY_ILF_WAVE_COUNT_NHS6 = ConvertAbilityIntegerLevelField( FourCC( "Nhs6" ) );
export const ABILITY_ILF_MAX_CREEP_LEVEL_NTM3 = ConvertAbilityIntegerLevelField( FourCC( "Ntm3" ) );
export const ABILITY_ILF_MISSILE_COUNT = ConvertAbilityIntegerLevelField( FourCC( "Ncs3" ) );
export const ABILITY_ILF_SPLIT_ATTACK_COUNT = ConvertAbilityIntegerLevelField( FourCC( "Nlm3" ) );
export const ABILITY_ILF_GENERATION_COUNT = ConvertAbilityIntegerLevelField( FourCC( "Nlm6" ) );
export const ABILITY_ILF_ROCK_RING_COUNT = ConvertAbilityIntegerLevelField( FourCC( "Nvc1" ) );
export const ABILITY_ILF_WAVE_COUNT_NVC2 = ConvertAbilityIntegerLevelField( FourCC( "Nvc2" ) );
export const ABILITY_ILF_PREFER_HOSTILES_TAU1 = ConvertAbilityIntegerLevelField( FourCC( "Tau1" ) );
export const ABILITY_ILF_PREFER_FRIENDLIES_TAU2 = ConvertAbilityIntegerLevelField( FourCC( "Tau2" ) );
export const ABILITY_ILF_MAX_UNITS_TAU3 = ConvertAbilityIntegerLevelField( FourCC( "Tau3" ) );
export const ABILITY_ILF_NUMBER_OF_PULSES = ConvertAbilityIntegerLevelField( FourCC( "Tau4" ) );
export const ABILITY_ILF_SUMMONED_UNIT_TYPE_HWE1 = ConvertAbilityIntegerLevelField( FourCC( "Hwe1" ) );
export const ABILITY_ILF_SUMMONED_UNIT_UIN4 = ConvertAbilityIntegerLevelField( FourCC( "Uin4" ) );
export const ABILITY_ILF_SUMMONED_UNIT_OSF1 = ConvertAbilityIntegerLevelField( FourCC( "Osf1" ) );
export const ABILITY_ILF_SUMMONED_UNIT_TYPE_EFNU = ConvertAbilityIntegerLevelField( FourCC( "Efnu" ) );
export const ABILITY_ILF_SUMMONED_UNIT_TYPE_NBAU = ConvertAbilityIntegerLevelField( FourCC( "Nbau" ) );
export const ABILITY_ILF_SUMMONED_UNIT_TYPE_NTOU = ConvertAbilityIntegerLevelField( FourCC( "Ntou" ) );
export const ABILITY_ILF_SUMMONED_UNIT_TYPE_ESVU = ConvertAbilityIntegerLevelField( FourCC( "Esvu" ) );
export const ABILITY_ILF_SUMMONED_UNIT_TYPES = ConvertAbilityIntegerLevelField( FourCC( "Nef1" ) );
export const ABILITY_ILF_SUMMONED_UNIT_TYPE_NDOU = ConvertAbilityIntegerLevelField( FourCC( "Ndou" ) );
export const ABILITY_ILF_ALTERNATE_FORM_UNIT_EMEU = ConvertAbilityIntegerLevelField( FourCC( "Emeu" ) );
export const ABILITY_ILF_PLAGUE_WARD_UNIT_TYPE = ConvertAbilityIntegerLevelField( FourCC( "Aplu" ) );
export const ABILITY_ILF_ALLOWED_UNIT_TYPE_BTL1 = ConvertAbilityIntegerLevelField( FourCC( "Btl1" ) );
export const ABILITY_ILF_NEW_UNIT_TYPE = ConvertAbilityIntegerLevelField( FourCC( "Cha1" ) );
export const ABILITY_ILF_RESULTING_UNIT_TYPE_ENT1 = ConvertAbilityIntegerLevelField( FourCC( "ent1" ) );
export const ABILITY_ILF_CORPSE_UNIT_TYPE = ConvertAbilityIntegerLevelField( FourCC( "Gydu" ) );
export const ABILITY_ILF_ALLOWED_UNIT_TYPE_LOA1 = ConvertAbilityIntegerLevelField( FourCC( "Loa1" ) );
export const ABILITY_ILF_UNIT_TYPE_FOR_LIMIT_CHECK = ConvertAbilityIntegerLevelField( FourCC( "Raiu" ) );
export const ABILITY_ILF_WARD_UNIT_TYPE_STAU = ConvertAbilityIntegerLevelField( FourCC( "Stau" ) );
export const ABILITY_ILF_EFFECT_ABILITY = ConvertAbilityIntegerLevelField( FourCC( "Iobu" ) );
export const ABILITY_ILF_CONVERSION_UNIT = ConvertAbilityIntegerLevelField( FourCC( "Ndc2" ) );
export const ABILITY_ILF_UNIT_TO_PRESERVE = ConvertAbilityIntegerLevelField( FourCC( "Nsl1" ) );
export const ABILITY_ILF_UNIT_TYPE_ALLOWED = ConvertAbilityIntegerLevelField( FourCC( "Chl1" ) );
export const ABILITY_ILF_SWARM_UNIT_TYPE = ConvertAbilityIntegerLevelField( FourCC( "Ulsu" ) );
export const ABILITY_ILF_RESULTING_UNIT_TYPE_COAU = ConvertAbilityIntegerLevelField( FourCC( "coau" ) );
export const ABILITY_ILF_UNIT_TYPE_EXHU = ConvertAbilityIntegerLevelField( FourCC( "exhu" ) );
export const ABILITY_ILF_WARD_UNIT_TYPE_HWDU = ConvertAbilityIntegerLevelField( FourCC( "hwdu" ) );
export const ABILITY_ILF_LURE_UNIT_TYPE = ConvertAbilityIntegerLevelField( FourCC( "imou" ) );
export const ABILITY_ILF_UNIT_TYPE_IPMU = ConvertAbilityIntegerLevelField( FourCC( "ipmu" ) );
export const ABILITY_ILF_FACTORY_UNIT_ID = ConvertAbilityIntegerLevelField( FourCC( "Nsyu" ) );
export const ABILITY_ILF_SPAWN_UNIT_ID_NFYU = ConvertAbilityIntegerLevelField( FourCC( "Nfyu" ) );
export const ABILITY_ILF_DESTRUCTIBLE_ID = ConvertAbilityIntegerLevelField( FourCC( "Nvcu" ) );
export const ABILITY_ILF_UPGRADE_TYPE = ConvertAbilityIntegerLevelField( FourCC( "Iglu" ) );

export const ABILITY_RLF_CASTING_TIME = ConvertAbilityRealLevelField( FourCC( "acas" ) );
export const ABILITY_RLF_DURATION_NORMAL = ConvertAbilityRealLevelField( FourCC( "adur" ) );
export const ABILITY_RLF_DURATION_HERO = ConvertAbilityRealLevelField( FourCC( "ahdu" ) );
export const ABILITY_RLF_COOLDOWN = ConvertAbilityRealLevelField( FourCC( "acdn" ) );
export const ABILITY_RLF_AREA_OF_EFFECT = ConvertAbilityRealLevelField( FourCC( "aare" ) );
export const ABILITY_RLF_CAST_RANGE = ConvertAbilityRealLevelField( FourCC( "aran" ) );
export const ABILITY_RLF_DAMAGE_HBZ2 = ConvertAbilityRealLevelField( FourCC( "Hbz2" ) );
export const ABILITY_RLF_BUILDING_REDUCTION_HBZ4 = ConvertAbilityRealLevelField( FourCC( "Hbz4" ) );
export const ABILITY_RLF_DAMAGE_PER_SECOND_HBZ5 = ConvertAbilityRealLevelField( FourCC( "Hbz5" ) );
export const ABILITY_RLF_MAXIMUM_DAMAGE_PER_WAVE = ConvertAbilityRealLevelField( FourCC( "Hbz6" ) );
export const ABILITY_RLF_MANA_REGENERATION_INCREASE = ConvertAbilityRealLevelField( FourCC( "Hab1" ) );
export const ABILITY_RLF_CASTING_DELAY = ConvertAbilityRealLevelField( FourCC( "Hmt2" ) );
export const ABILITY_RLF_DAMAGE_PER_SECOND_OWW1 = ConvertAbilityRealLevelField( FourCC( "Oww1" ) );
export const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_OWW2 = ConvertAbilityRealLevelField( FourCC( "Oww2" ) );
export const ABILITY_RLF_CHANCE_TO_CRITICAL_STRIKE = ConvertAbilityRealLevelField( FourCC( "Ocr1" ) );
export const ABILITY_RLF_DAMAGE_MULTIPLIER_OCR2 = ConvertAbilityRealLevelField( FourCC( "Ocr2" ) );
export const ABILITY_RLF_DAMAGE_BONUS_OCR3 = ConvertAbilityRealLevelField( FourCC( "Ocr3" ) );
export const ABILITY_RLF_CHANCE_TO_EVADE_OCR4 = ConvertAbilityRealLevelField( FourCC( "Ocr4" ) );
export const ABILITY_RLF_DAMAGE_DEALT_PERCENT_OMI2 = ConvertAbilityRealLevelField( FourCC( "Omi2" ) );
export const ABILITY_RLF_DAMAGE_TAKEN_PERCENT_OMI3 = ConvertAbilityRealLevelField( FourCC( "Omi3" ) );
export const ABILITY_RLF_ANIMATION_DELAY = ConvertAbilityRealLevelField( FourCC( "Omi4" ) );
export const ABILITY_RLF_TRANSITION_TIME = ConvertAbilityRealLevelField( FourCC( "Owk1" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_OWK2 = ConvertAbilityRealLevelField( FourCC( "Owk2" ) );
export const ABILITY_RLF_BACKSTAB_DAMAGE = ConvertAbilityRealLevelField( FourCC( "Owk3" ) );
export const ABILITY_RLF_AMOUNT_HEALED_DAMAGED_UDC1 = ConvertAbilityRealLevelField( FourCC( "Udc1" ) );
export const ABILITY_RLF_LIFE_CONVERTED_TO_MANA = ConvertAbilityRealLevelField( FourCC( "Udp1" ) );
export const ABILITY_RLF_LIFE_CONVERTED_TO_LIFE = ConvertAbilityRealLevelField( FourCC( "Udp2" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_UAU1 = ConvertAbilityRealLevelField( FourCC( "Uau1" ) );
export const ABILITY_RLF_LIFE_REGENERATION_INCREASE_PERCENT = ConvertAbilityRealLevelField( FourCC( "Uau2" ) );
export const ABILITY_RLF_CHANCE_TO_EVADE_EEV1 = ConvertAbilityRealLevelField( FourCC( "Eev1" ) );
export const ABILITY_RLF_DAMAGE_PER_INTERVAL = ConvertAbilityRealLevelField( FourCC( "Eim1" ) );
export const ABILITY_RLF_MANA_DRAINED_PER_SECOND_EIM2 = ConvertAbilityRealLevelField( FourCC( "Eim2" ) );
export const ABILITY_RLF_BUFFER_MANA_REQUIRED = ConvertAbilityRealLevelField( FourCC( "Eim3" ) );
export const ABILITY_RLF_MAX_MANA_DRAINED = ConvertAbilityRealLevelField( FourCC( "Emb1" ) );
export const ABILITY_RLF_BOLT_DELAY = ConvertAbilityRealLevelField( FourCC( "Emb2" ) );
export const ABILITY_RLF_BOLT_LIFETIME = ConvertAbilityRealLevelField( FourCC( "Emb3" ) );
export const ABILITY_RLF_ALTITUDE_ADJUSTMENT_DURATION = ConvertAbilityRealLevelField( FourCC( "Eme3" ) );
export const ABILITY_RLF_LANDING_DELAY_TIME = ConvertAbilityRealLevelField( FourCC( "Eme4" ) );
export const ABILITY_RLF_ALTERNATE_FORM_HIT_POINT_BONUS = ConvertAbilityRealLevelField( FourCC( "Eme5" ) );
export const ABILITY_RLF_MOVE_SPEED_BONUS_INFO_PANEL_ONLY = ConvertAbilityRealLevelField( FourCC( "Ncr5" ) );
export const ABILITY_RLF_ATTACK_SPEED_BONUS_INFO_PANEL_ONLY = ConvertAbilityRealLevelField( FourCC( "Ncr6" ) );
export const ABILITY_RLF_LIFE_REGENERATION_RATE_PER_SECOND = ConvertAbilityRealLevelField( FourCC( "ave5" ) );
export const ABILITY_RLF_STUN_DURATION_USL1 = ConvertAbilityRealLevelField( FourCC( "Usl1" ) );
export const ABILITY_RLF_ATTACK_DAMAGE_STOLEN_PERCENT = ConvertAbilityRealLevelField( FourCC( "Uav1" ) );
export const ABILITY_RLF_DAMAGE_UCS1 = ConvertAbilityRealLevelField( FourCC( "Ucs1" ) );
export const ABILITY_RLF_MAX_DAMAGE_UCS2 = ConvertAbilityRealLevelField( FourCC( "Ucs2" ) );
export const ABILITY_RLF_DISTANCE_UCS3 = ConvertAbilityRealLevelField( FourCC( "Ucs3" ) );
export const ABILITY_RLF_FINAL_AREA_UCS4 = ConvertAbilityRealLevelField( FourCC( "Ucs4" ) );
export const ABILITY_RLF_DAMAGE_UIN1 = ConvertAbilityRealLevelField( FourCC( "Uin1" ) );
export const ABILITY_RLF_DURATION = ConvertAbilityRealLevelField( FourCC( "Uin2" ) );
export const ABILITY_RLF_IMPACT_DELAY = ConvertAbilityRealLevelField( FourCC( "Uin3" ) );
export const ABILITY_RLF_DAMAGE_PER_TARGET_OCL1 = ConvertAbilityRealLevelField( FourCC( "Ocl1" ) );
export const ABILITY_RLF_DAMAGE_REDUCTION_PER_TARGET = ConvertAbilityRealLevelField( FourCC( "Ocl3" ) );
export const ABILITY_RLF_EFFECT_DELAY_OEQ1 = ConvertAbilityRealLevelField( FourCC( "Oeq1" ) );
export const ABILITY_RLF_DAMAGE_PER_SECOND_TO_BUILDINGS = ConvertAbilityRealLevelField( FourCC( "Oeq2" ) );
export const ABILITY_RLF_UNITS_SLOWED_PERCENT = ConvertAbilityRealLevelField( FourCC( "Oeq3" ) );
export const ABILITY_RLF_FINAL_AREA_OEQ4 = ConvertAbilityRealLevelField( FourCC( "Oeq4" ) );
export const ABILITY_RLF_DAMAGE_PER_SECOND_EER1 = ConvertAbilityRealLevelField( FourCC( "Eer1" ) );
export const ABILITY_RLF_DAMAGE_DEALT_TO_ATTACKERS = ConvertAbilityRealLevelField( FourCC( "Eah1" ) );
export const ABILITY_RLF_LIFE_HEALED = ConvertAbilityRealLevelField( FourCC( "Etq1" ) );
export const ABILITY_RLF_HEAL_INTERVAL = ConvertAbilityRealLevelField( FourCC( "Etq2" ) );
export const ABILITY_RLF_BUILDING_REDUCTION_ETQ3 = ConvertAbilityRealLevelField( FourCC( "Etq3" ) );
export const ABILITY_RLF_INITIAL_IMMUNITY_DURATION = ConvertAbilityRealLevelField( FourCC( "Etq4" ) );
export const ABILITY_RLF_MAX_LIFE_DRAINED_PER_SECOND_PERCENT = ConvertAbilityRealLevelField( FourCC( "Udd1" ) );
export const ABILITY_RLF_BUILDING_REDUCTION_UDD2 = ConvertAbilityRealLevelField( FourCC( "Udd2" ) );
export const ABILITY_RLF_ARMOR_DURATION = ConvertAbilityRealLevelField( FourCC( "Ufa1" ) );
export const ABILITY_RLF_ARMOR_BONUS_UFA2 = ConvertAbilityRealLevelField( FourCC( "Ufa2" ) );
export const ABILITY_RLF_AREA_OF_EFFECT_DAMAGE = ConvertAbilityRealLevelField( FourCC( "Ufn1" ) );
export const ABILITY_RLF_SPECIFIC_TARGET_DAMAGE_UFN2 = ConvertAbilityRealLevelField( FourCC( "Ufn2" ) );
export const ABILITY_RLF_DAMAGE_BONUS_HFA1 = ConvertAbilityRealLevelField( FourCC( "Hfa1" ) );
export const ABILITY_RLF_DAMAGE_DEALT_ESF1 = ConvertAbilityRealLevelField( FourCC( "Esf1" ) );
export const ABILITY_RLF_DAMAGE_INTERVAL_ESF2 = ConvertAbilityRealLevelField( FourCC( "Esf2" ) );
export const ABILITY_RLF_BUILDING_REDUCTION_ESF3 = ConvertAbilityRealLevelField( FourCC( "Esf3" ) );
export const ABILITY_RLF_DAMAGE_BONUS_PERCENT = ConvertAbilityRealLevelField( FourCC( "Ear1" ) );
export const ABILITY_RLF_DEFENSE_BONUS_HAV1 = ConvertAbilityRealLevelField( FourCC( "Hav1" ) );
export const ABILITY_RLF_HIT_POINT_BONUS = ConvertAbilityRealLevelField( FourCC( "Hav2" ) );
export const ABILITY_RLF_DAMAGE_BONUS_HAV3 = ConvertAbilityRealLevelField( FourCC( "Hav3" ) );
export const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_HAV4 = ConvertAbilityRealLevelField( FourCC( "Hav4" ) );
export const ABILITY_RLF_CHANCE_TO_BASH = ConvertAbilityRealLevelField( FourCC( "Hbh1" ) );
export const ABILITY_RLF_DAMAGE_MULTIPLIER_HBH2 = ConvertAbilityRealLevelField( FourCC( "Hbh2" ) );
export const ABILITY_RLF_DAMAGE_BONUS_HBH3 = ConvertAbilityRealLevelField( FourCC( "Hbh3" ) );
export const ABILITY_RLF_CHANCE_TO_MISS_HBH4 = ConvertAbilityRealLevelField( FourCC( "Hbh4" ) );
export const ABILITY_RLF_DAMAGE_HTB1 = ConvertAbilityRealLevelField( FourCC( "Htb1" ) );
export const ABILITY_RLF_AOE_DAMAGE = ConvertAbilityRealLevelField( FourCC( "Htc1" ) );
export const ABILITY_RLF_SPECIFIC_TARGET_DAMAGE_HTC2 = ConvertAbilityRealLevelField( FourCC( "Htc2" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_HTC3 = ConvertAbilityRealLevelField( FourCC( "Htc3" ) );
export const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_HTC4 = ConvertAbilityRealLevelField( FourCC( "Htc4" ) );
export const ABILITY_RLF_ARMOR_BONUS_HAD1 = ConvertAbilityRealLevelField( FourCC( "Had1" ) );
export const ABILITY_RLF_AMOUNT_HEALED_DAMAGED_HHB1 = ConvertAbilityRealLevelField( FourCC( "Hhb1" ) );
export const ABILITY_RLF_EXTRA_DAMAGE_HCA1 = ConvertAbilityRealLevelField( FourCC( "Hca1" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_HCA2 = ConvertAbilityRealLevelField( FourCC( "Hca2" ) );
export const ABILITY_RLF_ATTACK_SPEED_FACTOR_HCA3 = ConvertAbilityRealLevelField( FourCC( "Hca3" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_OAE1 = ConvertAbilityRealLevelField( FourCC( "Oae1" ) );
export const ABILITY_RLF_ATTACK_SPEED_INCREASE_PERCENT_OAE2 = ConvertAbilityRealLevelField( FourCC( "Oae2" ) );
export const ABILITY_RLF_REINCARNATION_DELAY = ConvertAbilityRealLevelField( FourCC( "Ore1" ) );
export const ABILITY_RLF_DAMAGE_OSH1 = ConvertAbilityRealLevelField( FourCC( "Osh1" ) );
export const ABILITY_RLF_MAXIMUM_DAMAGE_OSH2 = ConvertAbilityRealLevelField( FourCC( "Osh2" ) );
export const ABILITY_RLF_DISTANCE_OSH3 = ConvertAbilityRealLevelField( FourCC( "Osh3" ) );
export const ABILITY_RLF_FINAL_AREA_OSH4 = ConvertAbilityRealLevelField( FourCC( "Osh4" ) );
export const ABILITY_RLF_GRAPHIC_DELAY_NFD1 = ConvertAbilityRealLevelField( FourCC( "Nfd1" ) );
export const ABILITY_RLF_GRAPHIC_DURATION_NFD2 = ConvertAbilityRealLevelField( FourCC( "Nfd2" ) );
export const ABILITY_RLF_DAMAGE_NFD3 = ConvertAbilityRealLevelField( FourCC( "Nfd3" ) );
export const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_AMS1 = ConvertAbilityRealLevelField( FourCC( "Ams1" ) );
export const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_AMS2 = ConvertAbilityRealLevelField( FourCC( "Ams2" ) );
export const ABILITY_RLF_AURA_DURATION = ConvertAbilityRealLevelField( FourCC( "Apl1" ) );
export const ABILITY_RLF_DAMAGE_PER_SECOND_APL2 = ConvertAbilityRealLevelField( FourCC( "Apl2" ) );
export const ABILITY_RLF_DURATION_OF_PLAGUE_WARD = ConvertAbilityRealLevelField( FourCC( "Apl3" ) );
export const ABILITY_RLF_AMOUNT_OF_HIT_POINTS_REGENERATED = ConvertAbilityRealLevelField( FourCC( "Oar1" ) );
export const ABILITY_RLF_ATTACK_DAMAGE_INCREASE_AKB1 = ConvertAbilityRealLevelField( FourCC( "Akb1" ) );
export const ABILITY_RLF_MANA_LOSS_ADM1 = ConvertAbilityRealLevelField( FourCC( "Adm1" ) );
export const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_ADM2 = ConvertAbilityRealLevelField( FourCC( "Adm2" ) );
export const ABILITY_RLF_EXPANSION_AMOUNT = ConvertAbilityRealLevelField( FourCC( "Bli1" ) );
export const ABILITY_RLF_INTERVAL_DURATION_BGM2 = ConvertAbilityRealLevelField( FourCC( "Bgm2" ) );
export const ABILITY_RLF_RADIUS_OF_MINING_RING = ConvertAbilityRealLevelField( FourCC( "Bgm4" ) );
export const ABILITY_RLF_ATTACK_SPEED_INCREASE_PERCENT_BLO1 = ConvertAbilityRealLevelField( FourCC( "Blo1" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_BLO2 = ConvertAbilityRealLevelField( FourCC( "Blo2" ) );
export const ABILITY_RLF_SCALING_FACTOR = ConvertAbilityRealLevelField( FourCC( "Blo3" ) );
export const ABILITY_RLF_HIT_POINTS_PER_SECOND_CAN1 = ConvertAbilityRealLevelField( FourCC( "Can1" ) );
export const ABILITY_RLF_MAX_HIT_POINTS = ConvertAbilityRealLevelField( FourCC( "Can2" ) );
export const ABILITY_RLF_DAMAGE_PER_SECOND_DEV2 = ConvertAbilityRealLevelField( FourCC( "Dev2" ) );
export const ABILITY_RLF_MOVEMENT_UPDATE_FREQUENCY_CHD1 = ConvertAbilityRealLevelField( FourCC( "Chd1" ) );
export const ABILITY_RLF_ATTACK_UPDATE_FREQUENCY_CHD2 = ConvertAbilityRealLevelField( FourCC( "Chd2" ) );
export const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_CHD3 = ConvertAbilityRealLevelField( FourCC( "Chd3" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_CRI1 = ConvertAbilityRealLevelField( FourCC( "Cri1" ) );
export const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_CRI2 = ConvertAbilityRealLevelField( FourCC( "Cri2" ) );
export const ABILITY_RLF_DAMAGE_REDUCTION_CRI3 = ConvertAbilityRealLevelField( FourCC( "Cri3" ) );
export const ABILITY_RLF_CHANCE_TO_MISS_CRS = ConvertAbilityRealLevelField( FourCC( "Crs1" ) );
export const ABILITY_RLF_FULL_DAMAGE_RADIUS_DDA1 = ConvertAbilityRealLevelField( FourCC( "Dda1" ) );
export const ABILITY_RLF_FULL_DAMAGE_AMOUNT_DDA2 = ConvertAbilityRealLevelField( FourCC( "Dda2" ) );
export const ABILITY_RLF_PARTIAL_DAMAGE_RADIUS = ConvertAbilityRealLevelField( FourCC( "Dda3" ) );
export const ABILITY_RLF_PARTIAL_DAMAGE_AMOUNT = ConvertAbilityRealLevelField( FourCC( "Dda4" ) );
export const ABILITY_RLF_BUILDING_DAMAGE_FACTOR_SDS1 = ConvertAbilityRealLevelField( FourCC( "Sds1" ) );
export const ABILITY_RLF_MAX_DAMAGE_UCO5 = ConvertAbilityRealLevelField( FourCC( "Uco5" ) );
export const ABILITY_RLF_MOVE_SPEED_BONUS_UCO6 = ConvertAbilityRealLevelField( FourCC( "Uco6" ) );
export const ABILITY_RLF_DAMAGE_TAKEN_PERCENT_DEF1 = ConvertAbilityRealLevelField( FourCC( "Def1" ) );
export const ABILITY_RLF_DAMAGE_DEALT_PERCENT_DEF2 = ConvertAbilityRealLevelField( FourCC( "Def2" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_DEF3 = ConvertAbilityRealLevelField( FourCC( "Def3" ) );
export const ABILITY_RLF_ATTACK_SPEED_FACTOR_DEF4 = ConvertAbilityRealLevelField( FourCC( "Def4" ) );
export const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_DEF5 = ConvertAbilityRealLevelField( FourCC( "Def5" ) );
export const ABILITY_RLF_CHANCE_TO_DEFLECT = ConvertAbilityRealLevelField( FourCC( "Def6" ) );
export const ABILITY_RLF_DEFLECT_DAMAGE_TAKEN_PIERCING = ConvertAbilityRealLevelField( FourCC( "Def7" ) );
export const ABILITY_RLF_DEFLECT_DAMAGE_TAKEN_SPELLS = ConvertAbilityRealLevelField( FourCC( "Def8" ) );
export const ABILITY_RLF_RIP_DELAY = ConvertAbilityRealLevelField( FourCC( "Eat1" ) );
export const ABILITY_RLF_EAT_DELAY = ConvertAbilityRealLevelField( FourCC( "Eat2" ) );
export const ABILITY_RLF_HIT_POINTS_GAINED_EAT3 = ConvertAbilityRealLevelField( FourCC( "Eat3" ) );
export const ABILITY_RLF_AIR_UNIT_LOWER_DURATION = ConvertAbilityRealLevelField( FourCC( "Ens1" ) );
export const ABILITY_RLF_AIR_UNIT_HEIGHT = ConvertAbilityRealLevelField( FourCC( "Ens2" ) );
export const ABILITY_RLF_MELEE_ATTACK_RANGE = ConvertAbilityRealLevelField( FourCC( "Ens3" ) );
export const ABILITY_RLF_INTERVAL_DURATION_EGM2 = ConvertAbilityRealLevelField( FourCC( "Egm2" ) );
export const ABILITY_RLF_EFFECT_DELAY_FLA2 = ConvertAbilityRealLevelField( FourCC( "Fla2" ) );
export const ABILITY_RLF_MINING_DURATION = ConvertAbilityRealLevelField( FourCC( "Gld2" ) );
export const ABILITY_RLF_RADIUS_OF_GRAVESTONES = ConvertAbilityRealLevelField( FourCC( "Gyd2" ) );
export const ABILITY_RLF_RADIUS_OF_CORPSES = ConvertAbilityRealLevelField( FourCC( "Gyd3" ) );
export const ABILITY_RLF_HIT_POINTS_GAINED_HEA1 = ConvertAbilityRealLevelField( FourCC( "Hea1" ) );
export const ABILITY_RLF_DAMAGE_INCREASE_PERCENT_INF1 = ConvertAbilityRealLevelField( FourCC( "Inf1" ) );
export const ABILITY_RLF_AUTOCAST_RANGE = ConvertAbilityRealLevelField( FourCC( "Inf3" ) );
export const ABILITY_RLF_LIFE_REGEN_RATE = ConvertAbilityRealLevelField( FourCC( "Inf4" ) );
export const ABILITY_RLF_GRAPHIC_DELAY_LIT1 = ConvertAbilityRealLevelField( FourCC( "Lit1" ) );
export const ABILITY_RLF_GRAPHIC_DURATION_LIT2 = ConvertAbilityRealLevelField( FourCC( "Lit2" ) );
export const ABILITY_RLF_DAMAGE_PER_SECOND_LSH1 = ConvertAbilityRealLevelField( FourCC( "Lsh1" ) );
export const ABILITY_RLF_MANA_GAINED = ConvertAbilityRealLevelField( FourCC( "Mbt1" ) );
export const ABILITY_RLF_HIT_POINTS_GAINED_MBT2 = ConvertAbilityRealLevelField( FourCC( "Mbt2" ) );
export const ABILITY_RLF_AUTOCAST_REQUIREMENT = ConvertAbilityRealLevelField( FourCC( "Mbt3" ) );
export const ABILITY_RLF_WATER_HEIGHT = ConvertAbilityRealLevelField( FourCC( "Mbt4" ) );
export const ABILITY_RLF_ACTIVATION_DELAY_MIN1 = ConvertAbilityRealLevelField( FourCC( "Min1" ) );
export const ABILITY_RLF_INVISIBILITY_TRANSITION_TIME = ConvertAbilityRealLevelField( FourCC( "Min2" ) );
export const ABILITY_RLF_ACTIVATION_RADIUS = ConvertAbilityRealLevelField( FourCC( "Neu1" ) );
export const ABILITY_RLF_AMOUNT_REGENERATED = ConvertAbilityRealLevelField( FourCC( "Arm1" ) );
export const ABILITY_RLF_DAMAGE_PER_SECOND_POI1 = ConvertAbilityRealLevelField( FourCC( "Poi1" ) );
export const ABILITY_RLF_ATTACK_SPEED_FACTOR_POI2 = ConvertAbilityRealLevelField( FourCC( "Poi2" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_POI3 = ConvertAbilityRealLevelField( FourCC( "Poi3" ) );
export const ABILITY_RLF_EXTRA_DAMAGE_POA1 = ConvertAbilityRealLevelField( FourCC( "Poa1" ) );
export const ABILITY_RLF_DAMAGE_PER_SECOND_POA2 = ConvertAbilityRealLevelField( FourCC( "Poa2" ) );
export const ABILITY_RLF_ATTACK_SPEED_FACTOR_POA3 = ConvertAbilityRealLevelField( FourCC( "Poa3" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_POA4 = ConvertAbilityRealLevelField( FourCC( "Poa4" ) );
export const ABILITY_RLF_DAMAGE_AMPLIFICATION = ConvertAbilityRealLevelField( FourCC( "Pos2" ) );
export const ABILITY_RLF_CHANCE_TO_STOMP_PERCENT = ConvertAbilityRealLevelField( FourCC( "War1" ) );
export const ABILITY_RLF_DAMAGE_DEALT_WAR2 = ConvertAbilityRealLevelField( FourCC( "War2" ) );
export const ABILITY_RLF_FULL_DAMAGE_RADIUS_WAR3 = ConvertAbilityRealLevelField( FourCC( "War3" ) );
export const ABILITY_RLF_HALF_DAMAGE_RADIUS_WAR4 = ConvertAbilityRealLevelField( FourCC( "War4" ) );
export const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_PRG3 = ConvertAbilityRealLevelField( FourCC( "Prg3" ) );
export const ABILITY_RLF_UNIT_PAUSE_DURATION = ConvertAbilityRealLevelField( FourCC( "Prg4" ) );
export const ABILITY_RLF_HERO_PAUSE_DURATION = ConvertAbilityRealLevelField( FourCC( "Prg5" ) );
export const ABILITY_RLF_HIT_POINTS_GAINED_REJ1 = ConvertAbilityRealLevelField( FourCC( "Rej1" ) );
export const ABILITY_RLF_MANA_POINTS_GAINED_REJ2 = ConvertAbilityRealLevelField( FourCC( "Rej2" ) );
export const ABILITY_RLF_MINIMUM_LIFE_REQUIRED = ConvertAbilityRealLevelField( FourCC( "Rpb3" ) );
export const ABILITY_RLF_MINIMUM_MANA_REQUIRED = ConvertAbilityRealLevelField( FourCC( "Rpb4" ) );
export const ABILITY_RLF_REPAIR_COST_RATIO = ConvertAbilityRealLevelField( FourCC( "Rep1" ) );
export const ABILITY_RLF_REPAIR_TIME_RATIO = ConvertAbilityRealLevelField( FourCC( "Rep2" ) );
export const ABILITY_RLF_POWERBUILD_COST = ConvertAbilityRealLevelField( FourCC( "Rep3" ) );
export const ABILITY_RLF_POWERBUILD_RATE = ConvertAbilityRealLevelField( FourCC( "Rep4" ) );
export const ABILITY_RLF_NAVAL_RANGE_BONUS = ConvertAbilityRealLevelField( FourCC( "Rep5" ) );
export const ABILITY_RLF_DAMAGE_INCREASE_PERCENT_ROA1 = ConvertAbilityRealLevelField( FourCC( "Roa1" ) );
export const ABILITY_RLF_LIFE_REGENERATION_RATE = ConvertAbilityRealLevelField( FourCC( "Roa3" ) );
export const ABILITY_RLF_MANA_REGEN = ConvertAbilityRealLevelField( FourCC( "Roa4" ) );
export const ABILITY_RLF_DAMAGE_INCREASE = ConvertAbilityRealLevelField( FourCC( "Nbr1" ) );
export const ABILITY_RLF_SALVAGE_COST_RATIO = ConvertAbilityRealLevelField( FourCC( "Sal1" ) );
export const ABILITY_RLF_IN_FLIGHT_SIGHT_RADIUS = ConvertAbilityRealLevelField( FourCC( "Esn1" ) );
export const ABILITY_RLF_HOVERING_SIGHT_RADIUS = ConvertAbilityRealLevelField( FourCC( "Esn2" ) );
export const ABILITY_RLF_HOVERING_HEIGHT = ConvertAbilityRealLevelField( FourCC( "Esn3" ) );
export const ABILITY_RLF_DURATION_OF_OWLS = ConvertAbilityRealLevelField( FourCC( "Esn5" ) );
export const ABILITY_RLF_FADE_DURATION = ConvertAbilityRealLevelField( FourCC( "Shm1" ) );
export const ABILITY_RLF_DAY_NIGHT_DURATION = ConvertAbilityRealLevelField( FourCC( "Shm2" ) );
export const ABILITY_RLF_ACTION_DURATION = ConvertAbilityRealLevelField( FourCC( "Shm3" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_SLO1 = ConvertAbilityRealLevelField( FourCC( "Slo1" ) );
export const ABILITY_RLF_ATTACK_SPEED_FACTOR_SLO2 = ConvertAbilityRealLevelField( FourCC( "Slo2" ) );
export const ABILITY_RLF_DAMAGE_PER_SECOND_SPO1 = ConvertAbilityRealLevelField( FourCC( "Spo1" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_SPO2 = ConvertAbilityRealLevelField( FourCC( "Spo2" ) );
export const ABILITY_RLF_ATTACK_SPEED_FACTOR_SPO3 = ConvertAbilityRealLevelField( FourCC( "Spo3" ) );
export const ABILITY_RLF_ACTIVATION_DELAY_STA1 = ConvertAbilityRealLevelField( FourCC( "Sta1" ) );
export const ABILITY_RLF_DETECTION_RADIUS_STA2 = ConvertAbilityRealLevelField( FourCC( "Sta2" ) );
export const ABILITY_RLF_DETONATION_RADIUS = ConvertAbilityRealLevelField( FourCC( "Sta3" ) );
export const ABILITY_RLF_STUN_DURATION_STA4 = ConvertAbilityRealLevelField( FourCC( "Sta4" ) );
export const ABILITY_RLF_ATTACK_SPEED_BONUS_PERCENT = ConvertAbilityRealLevelField( FourCC( "Uhf1" ) );
export const ABILITY_RLF_DAMAGE_PER_SECOND_UHF2 = ConvertAbilityRealLevelField( FourCC( "Uhf2" ) );
export const ABILITY_RLF_LUMBER_PER_INTERVAL = ConvertAbilityRealLevelField( FourCC( "Wha1" ) );
export const ABILITY_RLF_ART_ATTACHMENT_HEIGHT = ConvertAbilityRealLevelField( FourCC( "Wha3" ) );
export const ABILITY_RLF_TELEPORT_AREA_WIDTH = ConvertAbilityRealLevelField( FourCC( "Wrp1" ) );
export const ABILITY_RLF_TELEPORT_AREA_HEIGHT = ConvertAbilityRealLevelField( FourCC( "Wrp2" ) );
export const ABILITY_RLF_LIFE_STOLEN_PER_ATTACK = ConvertAbilityRealLevelField( FourCC( "Ivam" ) );
export const ABILITY_RLF_DAMAGE_BONUS_IDAM = ConvertAbilityRealLevelField( FourCC( "Idam" ) );
export const ABILITY_RLF_CHANCE_TO_HIT_UNITS_PERCENT = ConvertAbilityRealLevelField( FourCC( "Iob2" ) );
export const ABILITY_RLF_CHANCE_TO_HIT_HEROS_PERCENT = ConvertAbilityRealLevelField( FourCC( "Iob3" ) );
export const ABILITY_RLF_CHANCE_TO_HIT_SUMMONS_PERCENT = ConvertAbilityRealLevelField( FourCC( "Iob4" ) );
export const ABILITY_RLF_DELAY_FOR_TARGET_EFFECT = ConvertAbilityRealLevelField( FourCC( "Idel" ) );
export const ABILITY_RLF_DAMAGE_DEALT_PERCENT_OF_NORMAL = ConvertAbilityRealLevelField( FourCC( "Iild" ) );
export const ABILITY_RLF_DAMAGE_RECEIVED_MULTIPLIER = ConvertAbilityRealLevelField( FourCC( "Iilw" ) );
export const ABILITY_RLF_MANA_REGENERATION_BONUS_AS_FRACTION_OF_NORMAL = ConvertAbilityRealLevelField( FourCC( "Imrp" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_ISPI = ConvertAbilityRealLevelField( FourCC( "Ispi" ) );
export const ABILITY_RLF_DAMAGE_PER_SECOND_IDPS = ConvertAbilityRealLevelField( FourCC( "Idps" ) );
export const ABILITY_RLF_ATTACK_DAMAGE_INCREASE_CAC1 = ConvertAbilityRealLevelField( FourCC( "Cac1" ) );
export const ABILITY_RLF_DAMAGE_PER_SECOND_COR1 = ConvertAbilityRealLevelField( FourCC( "Cor1" ) );
export const ABILITY_RLF_ATTACK_SPEED_INCREASE_ISX1 = ConvertAbilityRealLevelField( FourCC( "Isx1" ) );
export const ABILITY_RLF_DAMAGE_WRS1 = ConvertAbilityRealLevelField( FourCC( "Wrs1" ) );
export const ABILITY_RLF_TERRAIN_DEFORMATION_AMPLITUDE = ConvertAbilityRealLevelField( FourCC( "Wrs2" ) );
export const ABILITY_RLF_DAMAGE_CTC1 = ConvertAbilityRealLevelField( FourCC( "Ctc1" ) );
export const ABILITY_RLF_EXTRA_DAMAGE_TO_TARGET = ConvertAbilityRealLevelField( FourCC( "Ctc2" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_CTC3 = ConvertAbilityRealLevelField( FourCC( "Ctc3" ) );
export const ABILITY_RLF_ATTACK_SPEED_REDUCTION_CTC4 = ConvertAbilityRealLevelField( FourCC( "Ctc4" ) );
export const ABILITY_RLF_DAMAGE_CTB1 = ConvertAbilityRealLevelField( FourCC( "Ctb1" ) );
export const ABILITY_RLF_CASTING_DELAY_SECONDS = ConvertAbilityRealLevelField( FourCC( "Uds2" ) );
export const ABILITY_RLF_MANA_LOSS_PER_UNIT_DTN1 = ConvertAbilityRealLevelField( FourCC( "Dtn1" ) );
export const ABILITY_RLF_DAMAGE_TO_SUMMONED_UNITS_DTN2 = ConvertAbilityRealLevelField( FourCC( "Dtn2" ) );
export const ABILITY_RLF_TRANSITION_TIME_SECONDS = ConvertAbilityRealLevelField( FourCC( "Ivs1" ) );
export const ABILITY_RLF_MANA_DRAINED_PER_SECOND_NMR1 = ConvertAbilityRealLevelField( FourCC( "Nmr1" ) );
export const ABILITY_RLF_CHANCE_TO_REDUCE_DAMAGE_PERCENT = ConvertAbilityRealLevelField( FourCC( "Ssk1" ) );
export const ABILITY_RLF_MINIMUM_DAMAGE = ConvertAbilityRealLevelField( FourCC( "Ssk2" ) );
export const ABILITY_RLF_IGNORED_DAMAGE = ConvertAbilityRealLevelField( FourCC( "Ssk3" ) );
export const ABILITY_RLF_FULL_DAMAGE_DEALT = ConvertAbilityRealLevelField( FourCC( "Hfs1" ) );
export const ABILITY_RLF_FULL_DAMAGE_INTERVAL = ConvertAbilityRealLevelField( FourCC( "Hfs2" ) );
export const ABILITY_RLF_HALF_DAMAGE_DEALT = ConvertAbilityRealLevelField( FourCC( "Hfs3" ) );
export const ABILITY_RLF_HALF_DAMAGE_INTERVAL = ConvertAbilityRealLevelField( FourCC( "Hfs4" ) );
export const ABILITY_RLF_BUILDING_REDUCTION_HFS5 = ConvertAbilityRealLevelField( FourCC( "Hfs5" ) );
export const ABILITY_RLF_MAXIMUM_DAMAGE_HFS6 = ConvertAbilityRealLevelField( FourCC( "Hfs6" ) );
export const ABILITY_RLF_MANA_PER_HIT_POINT = ConvertAbilityRealLevelField( FourCC( "Nms1" ) );
export const ABILITY_RLF_DAMAGE_ABSORBED_PERCENT = ConvertAbilityRealLevelField( FourCC( "Nms2" ) );
export const ABILITY_RLF_WAVE_DISTANCE = ConvertAbilityRealLevelField( FourCC( "Uim1" ) );
export const ABILITY_RLF_WAVE_TIME_SECONDS = ConvertAbilityRealLevelField( FourCC( "Uim2" ) );
export const ABILITY_RLF_DAMAGE_DEALT_UIM3 = ConvertAbilityRealLevelField( FourCC( "Uim3" ) );
export const ABILITY_RLF_AIR_TIME_SECONDS_UIM4 = ConvertAbilityRealLevelField( FourCC( "Uim4" ) );
export const ABILITY_RLF_UNIT_RELEASE_INTERVAL_SECONDS = ConvertAbilityRealLevelField( FourCC( "Uls2" ) );
export const ABILITY_RLF_DAMAGE_RETURN_FACTOR = ConvertAbilityRealLevelField( FourCC( "Uls4" ) );
export const ABILITY_RLF_DAMAGE_RETURN_THRESHOLD = ConvertAbilityRealLevelField( FourCC( "Uls5" ) );
export const ABILITY_RLF_RETURNED_DAMAGE_FACTOR = ConvertAbilityRealLevelField( FourCC( "Uts1" ) );
export const ABILITY_RLF_RECEIVED_DAMAGE_FACTOR = ConvertAbilityRealLevelField( FourCC( "Uts2" ) );
export const ABILITY_RLF_DEFENSE_BONUS_UTS3 = ConvertAbilityRealLevelField( FourCC( "Uts3" ) );
export const ABILITY_RLF_DAMAGE_BONUS_NBA1 = ConvertAbilityRealLevelField( FourCC( "Nba1" ) );
export const ABILITY_RLF_SUMMONED_UNIT_DURATION_SECONDS_NBA3 = ConvertAbilityRealLevelField( FourCC( "Nba3" ) );
export const ABILITY_RLF_MANA_PER_SUMMONED_HITPOINT = ConvertAbilityRealLevelField( FourCC( "Cmg2" ) );
export const ABILITY_RLF_CHARGE_FOR_CURRENT_LIFE = ConvertAbilityRealLevelField( FourCC( "Cmg3" ) );
export const ABILITY_RLF_HIT_POINTS_DRAINED = ConvertAbilityRealLevelField( FourCC( "Ndr1" ) );
export const ABILITY_RLF_MANA_POINTS_DRAINED = ConvertAbilityRealLevelField( FourCC( "Ndr2" ) );
export const ABILITY_RLF_DRAIN_INTERVAL_SECONDS = ConvertAbilityRealLevelField( FourCC( "Ndr3" ) );
export const ABILITY_RLF_LIFE_TRANSFERRED_PER_SECOND = ConvertAbilityRealLevelField( FourCC( "Ndr4" ) );
export const ABILITY_RLF_MANA_TRANSFERRED_PER_SECOND = ConvertAbilityRealLevelField( FourCC( "Ndr5" ) );
export const ABILITY_RLF_BONUS_LIFE_FACTOR = ConvertAbilityRealLevelField( FourCC( "Ndr6" ) );
export const ABILITY_RLF_BONUS_LIFE_DECAY = ConvertAbilityRealLevelField( FourCC( "Ndr7" ) );
export const ABILITY_RLF_BONUS_MANA_FACTOR = ConvertAbilityRealLevelField( FourCC( "Ndr8" ) );
export const ABILITY_RLF_BONUS_MANA_DECAY = ConvertAbilityRealLevelField( FourCC( "Ndr9" ) );
export const ABILITY_RLF_CHANCE_TO_MISS_PERCENT = ConvertAbilityRealLevelField( FourCC( "Nsi2" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_MODIFIER = ConvertAbilityRealLevelField( FourCC( "Nsi3" ) );
export const ABILITY_RLF_ATTACK_SPEED_MODIFIER = ConvertAbilityRealLevelField( FourCC( "Nsi4" ) );
export const ABILITY_RLF_DAMAGE_PER_SECOND_TDG1 = ConvertAbilityRealLevelField( FourCC( "Tdg1" ) );
export const ABILITY_RLF_MEDIUM_DAMAGE_RADIUS_TDG2 = ConvertAbilityRealLevelField( FourCC( "Tdg2" ) );
export const ABILITY_RLF_MEDIUM_DAMAGE_PER_SECOND = ConvertAbilityRealLevelField( FourCC( "Tdg3" ) );
export const ABILITY_RLF_SMALL_DAMAGE_RADIUS_TDG4 = ConvertAbilityRealLevelField( FourCC( "Tdg4" ) );
export const ABILITY_RLF_SMALL_DAMAGE_PER_SECOND = ConvertAbilityRealLevelField( FourCC( "Tdg5" ) );
export const ABILITY_RLF_AIR_TIME_SECONDS_TSP1 = ConvertAbilityRealLevelField( FourCC( "Tsp1" ) );
export const ABILITY_RLF_MINIMUM_HIT_INTERVAL_SECONDS = ConvertAbilityRealLevelField( FourCC( "Tsp2" ) );
export const ABILITY_RLF_DAMAGE_PER_SECOND_NBF5 = ConvertAbilityRealLevelField( FourCC( "Nbf5" ) );
export const ABILITY_RLF_MAXIMUM_RANGE = ConvertAbilityRealLevelField( FourCC( "Ebl1" ) );
export const ABILITY_RLF_MINIMUM_RANGE = ConvertAbilityRealLevelField( FourCC( "Ebl2" ) );
export const ABILITY_RLF_DAMAGE_PER_TARGET_EFK1 = ConvertAbilityRealLevelField( FourCC( "Efk1" ) );
export const ABILITY_RLF_MAXIMUM_TOTAL_DAMAGE = ConvertAbilityRealLevelField( FourCC( "Efk2" ) );
export const ABILITY_RLF_MAXIMUM_SPEED_ADJUSTMENT = ConvertAbilityRealLevelField( FourCC( "Efk4" ) );
export const ABILITY_RLF_DECAYING_DAMAGE = ConvertAbilityRealLevelField( FourCC( "Esh1" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_ESH2 = ConvertAbilityRealLevelField( FourCC( "Esh2" ) );
export const ABILITY_RLF_ATTACK_SPEED_FACTOR_ESH3 = ConvertAbilityRealLevelField( FourCC( "Esh3" ) );
export const ABILITY_RLF_DECAY_POWER = ConvertAbilityRealLevelField( FourCC( "Esh4" ) );
export const ABILITY_RLF_INITIAL_DAMAGE_ESH5 = ConvertAbilityRealLevelField( FourCC( "Esh5" ) );
export const ABILITY_RLF_MAXIMUM_LIFE_ABSORBED = ConvertAbilityRealLevelField( FourCC( "abs1" ) );
export const ABILITY_RLF_MAXIMUM_MANA_ABSORBED = ConvertAbilityRealLevelField( FourCC( "abs2" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_BSK1 = ConvertAbilityRealLevelField( FourCC( "bsk1" ) );
export const ABILITY_RLF_ATTACK_SPEED_INCREASE_BSK2 = ConvertAbilityRealLevelField( FourCC( "bsk2" ) );
export const ABILITY_RLF_DAMAGE_TAKEN_INCREASE = ConvertAbilityRealLevelField( FourCC( "bsk3" ) );
export const ABILITY_RLF_LIFE_PER_UNIT = ConvertAbilityRealLevelField( FourCC( "dvm1" ) );
export const ABILITY_RLF_MANA_PER_UNIT = ConvertAbilityRealLevelField( FourCC( "dvm2" ) );
export const ABILITY_RLF_LIFE_PER_BUFF = ConvertAbilityRealLevelField( FourCC( "dvm3" ) );
export const ABILITY_RLF_MANA_PER_BUFF = ConvertAbilityRealLevelField( FourCC( "dvm4" ) );
export const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_DVM5 = ConvertAbilityRealLevelField( FourCC( "dvm5" ) );
export const ABILITY_RLF_DAMAGE_BONUS_FAK1 = ConvertAbilityRealLevelField( FourCC( "fak1" ) );
export const ABILITY_RLF_MEDIUM_DAMAGE_FACTOR_FAK2 = ConvertAbilityRealLevelField( FourCC( "fak2" ) );
export const ABILITY_RLF_SMALL_DAMAGE_FACTOR_FAK3 = ConvertAbilityRealLevelField( FourCC( "fak3" ) );
export const ABILITY_RLF_FULL_DAMAGE_RADIUS_FAK4 = ConvertAbilityRealLevelField( FourCC( "fak4" ) );
export const ABILITY_RLF_HALF_DAMAGE_RADIUS_FAK5 = ConvertAbilityRealLevelField( FourCC( "fak5" ) );
export const ABILITY_RLF_EXTRA_DAMAGE_PER_SECOND = ConvertAbilityRealLevelField( FourCC( "liq1" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_LIQ2 = ConvertAbilityRealLevelField( FourCC( "liq2" ) );
export const ABILITY_RLF_ATTACK_SPEED_REDUCTION_LIQ3 = ConvertAbilityRealLevelField( FourCC( "liq3" ) );
export const ABILITY_RLF_MAGIC_DAMAGE_FACTOR = ConvertAbilityRealLevelField( FourCC( "mim1" ) );
export const ABILITY_RLF_UNIT_DAMAGE_PER_MANA_POINT = ConvertAbilityRealLevelField( FourCC( "mfl1" ) );
export const ABILITY_RLF_HERO_DAMAGE_PER_MANA_POINT = ConvertAbilityRealLevelField( FourCC( "mfl2" ) );
export const ABILITY_RLF_UNIT_MAXIMUM_DAMAGE = ConvertAbilityRealLevelField( FourCC( "mfl3" ) );
export const ABILITY_RLF_HERO_MAXIMUM_DAMAGE = ConvertAbilityRealLevelField( FourCC( "mfl4" ) );
export const ABILITY_RLF_DAMAGE_COOLDOWN = ConvertAbilityRealLevelField( FourCC( "mfl5" ) );
export const ABILITY_RLF_DISTRIBUTED_DAMAGE_FACTOR_SPL1 = ConvertAbilityRealLevelField( FourCC( "spl1" ) );
export const ABILITY_RLF_LIFE_REGENERATED = ConvertAbilityRealLevelField( FourCC( "irl1" ) );
export const ABILITY_RLF_MANA_REGENERATED = ConvertAbilityRealLevelField( FourCC( "irl2" ) );
export const ABILITY_RLF_MANA_LOSS_PER_UNIT_IDC1 = ConvertAbilityRealLevelField( FourCC( "idc1" ) );
export const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_IDC2 = ConvertAbilityRealLevelField( FourCC( "idc2" ) );
export const ABILITY_RLF_ACTIVATION_DELAY_IMO2 = ConvertAbilityRealLevelField( FourCC( "imo2" ) );
export const ABILITY_RLF_LURE_INTERVAL_SECONDS = ConvertAbilityRealLevelField( FourCC( "imo3" ) );
export const ABILITY_RLF_DAMAGE_BONUS_ISR1 = ConvertAbilityRealLevelField( FourCC( "isr1" ) );
export const ABILITY_RLF_DAMAGE_REDUCTION_ISR2 = ConvertAbilityRealLevelField( FourCC( "isr2" ) );
export const ABILITY_RLF_DAMAGE_BONUS_IPV1 = ConvertAbilityRealLevelField( FourCC( "ipv1" ) );
export const ABILITY_RLF_LIFE_STEAL_AMOUNT = ConvertAbilityRealLevelField( FourCC( "ipv2" ) );
export const ABILITY_RLF_LIFE_RESTORED_FACTOR = ConvertAbilityRealLevelField( FourCC( "ast1" ) );
export const ABILITY_RLF_MANA_RESTORED_FACTOR = ConvertAbilityRealLevelField( FourCC( "ast2" ) );
export const ABILITY_RLF_ATTACH_DELAY = ConvertAbilityRealLevelField( FourCC( "gra1" ) );
export const ABILITY_RLF_REMOVE_DELAY = ConvertAbilityRealLevelField( FourCC( "gra2" ) );
export const ABILITY_RLF_HERO_REGENERATION_DELAY = ConvertAbilityRealLevelField( FourCC( "Nsa2" ) );
export const ABILITY_RLF_UNIT_REGENERATION_DELAY = ConvertAbilityRealLevelField( FourCC( "Nsa3" ) );
export const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_NSA4 = ConvertAbilityRealLevelField( FourCC( "Nsa4" ) );
export const ABILITY_RLF_HIT_POINTS_PER_SECOND_NSA5 = ConvertAbilityRealLevelField( FourCC( "Nsa5" ) );
export const ABILITY_RLF_DAMAGE_TO_SUMMONED_UNITS_IXS1 = ConvertAbilityRealLevelField( FourCC( "Ixs1" ) );
export const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_IXS2 = ConvertAbilityRealLevelField( FourCC( "Ixs2" ) );
export const ABILITY_RLF_SUMMONED_UNIT_DURATION = ConvertAbilityRealLevelField( FourCC( "Npa6" ) );
export const ABILITY_RLF_SHIELD_COOLDOWN_TIME = ConvertAbilityRealLevelField( FourCC( "Nse1" ) );
export const ABILITY_RLF_DAMAGE_PER_SECOND_NDO1 = ConvertAbilityRealLevelField( FourCC( "Ndo1" ) );
export const ABILITY_RLF_SUMMONED_UNIT_DURATION_SECONDS_NDO3 = ConvertAbilityRealLevelField( FourCC( "Ndo3" ) );
export const ABILITY_RLF_MEDIUM_DAMAGE_RADIUS_FLK1 = ConvertAbilityRealLevelField( FourCC( "flk1" ) );
export const ABILITY_RLF_SMALL_DAMAGE_RADIUS_FLK2 = ConvertAbilityRealLevelField( FourCC( "flk2" ) );
export const ABILITY_RLF_FULL_DAMAGE_AMOUNT_FLK3 = ConvertAbilityRealLevelField( FourCC( "flk3" ) );
export const ABILITY_RLF_MEDIUM_DAMAGE_AMOUNT = ConvertAbilityRealLevelField( FourCC( "flk4" ) );
export const ABILITY_RLF_SMALL_DAMAGE_AMOUNT = ConvertAbilityRealLevelField( FourCC( "flk5" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_HBN1 = ConvertAbilityRealLevelField( FourCC( "Hbn1" ) );
export const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_HBN2 = ConvertAbilityRealLevelField( FourCC( "Hbn2" ) );
export const ABILITY_RLF_MAX_MANA_DRAINED_UNITS = ConvertAbilityRealLevelField( FourCC( "fbk1" ) );
export const ABILITY_RLF_DAMAGE_RATIO_UNITS_PERCENT = ConvertAbilityRealLevelField( FourCC( "fbk2" ) );
export const ABILITY_RLF_MAX_MANA_DRAINED_HEROS = ConvertAbilityRealLevelField( FourCC( "fbk3" ) );
export const ABILITY_RLF_DAMAGE_RATIO_HEROS_PERCENT = ConvertAbilityRealLevelField( FourCC( "fbk4" ) );
export const ABILITY_RLF_SUMMONED_DAMAGE = ConvertAbilityRealLevelField( FourCC( "fbk5" ) );
export const ABILITY_RLF_DISTRIBUTED_DAMAGE_FACTOR_NCA1 = ConvertAbilityRealLevelField( FourCC( "nca1" ) );
export const ABILITY_RLF_INITIAL_DAMAGE_PXF1 = ConvertAbilityRealLevelField( FourCC( "pxf1" ) );
export const ABILITY_RLF_DAMAGE_PER_SECOND_PXF2 = ConvertAbilityRealLevelField( FourCC( "pxf2" ) );
export const ABILITY_RLF_DAMAGE_PER_SECOND_MLS1 = ConvertAbilityRealLevelField( FourCC( "mls1" ) );
export const ABILITY_RLF_BEAST_COLLISION_RADIUS = ConvertAbilityRealLevelField( FourCC( "Nst2" ) );
export const ABILITY_RLF_DAMAGE_AMOUNT_NST3 = ConvertAbilityRealLevelField( FourCC( "Nst3" ) );
export const ABILITY_RLF_DAMAGE_RADIUS = ConvertAbilityRealLevelField( FourCC( "Nst4" ) );
export const ABILITY_RLF_DAMAGE_DELAY = ConvertAbilityRealLevelField( FourCC( "Nst5" ) );
export const ABILITY_RLF_FOLLOW_THROUGH_TIME = ConvertAbilityRealLevelField( FourCC( "Ncl1" ) );
export const ABILITY_RLF_ART_DURATION = ConvertAbilityRealLevelField( FourCC( "Ncl4" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_NAB1 = ConvertAbilityRealLevelField( FourCC( "Nab1" ) );
export const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_NAB2 = ConvertAbilityRealLevelField( FourCC( "Nab2" ) );
export const ABILITY_RLF_PRIMARY_DAMAGE = ConvertAbilityRealLevelField( FourCC( "Nab4" ) );
export const ABILITY_RLF_SECONDARY_DAMAGE = ConvertAbilityRealLevelField( FourCC( "Nab5" ) );
export const ABILITY_RLF_DAMAGE_INTERVAL_NAB6 = ConvertAbilityRealLevelField( FourCC( "Nab6" ) );
export const ABILITY_RLF_GOLD_COST_FACTOR = ConvertAbilityRealLevelField( FourCC( "Ntm1" ) );
export const ABILITY_RLF_LUMBER_COST_FACTOR = ConvertAbilityRealLevelField( FourCC( "Ntm2" ) );
export const ABILITY_RLF_MOVE_SPEED_BONUS_NEG1 = ConvertAbilityRealLevelField( FourCC( "Neg1" ) );
export const ABILITY_RLF_DAMAGE_BONUS_NEG2 = ConvertAbilityRealLevelField( FourCC( "Neg2" ) );
export const ABILITY_RLF_DAMAGE_AMOUNT_NCS1 = ConvertAbilityRealLevelField( FourCC( "Ncs1" ) );
export const ABILITY_RLF_DAMAGE_INTERVAL_NCS2 = ConvertAbilityRealLevelField( FourCC( "Ncs2" ) );
export const ABILITY_RLF_MAX_DAMAGE_NCS4 = ConvertAbilityRealLevelField( FourCC( "Ncs4" ) );
export const ABILITY_RLF_BUILDING_DAMAGE_FACTOR_NCS5 = ConvertAbilityRealLevelField( FourCC( "Ncs5" ) );
export const ABILITY_RLF_EFFECT_DURATION = ConvertAbilityRealLevelField( FourCC( "Ncs6" ) );
export const ABILITY_RLF_SPAWN_INTERVAL_NSY1 = ConvertAbilityRealLevelField( FourCC( "Nsy1" ) );
export const ABILITY_RLF_SPAWN_UNIT_DURATION = ConvertAbilityRealLevelField( FourCC( "Nsy3" ) );
export const ABILITY_RLF_SPAWN_UNIT_OFFSET = ConvertAbilityRealLevelField( FourCC( "Nsy4" ) );
export const ABILITY_RLF_LEASH_RANGE_NSY5 = ConvertAbilityRealLevelField( FourCC( "Nsy5" ) );
export const ABILITY_RLF_SPAWN_INTERVAL_NFY1 = ConvertAbilityRealLevelField( FourCC( "Nfy1" ) );
export const ABILITY_RLF_LEASH_RANGE_NFY2 = ConvertAbilityRealLevelField( FourCC( "Nfy2" ) );
export const ABILITY_RLF_CHANCE_TO_DEMOLISH = ConvertAbilityRealLevelField( FourCC( "Nde1" ) );
export const ABILITY_RLF_DAMAGE_MULTIPLIER_BUILDINGS = ConvertAbilityRealLevelField( FourCC( "Nde2" ) );
export const ABILITY_RLF_DAMAGE_MULTIPLIER_UNITS = ConvertAbilityRealLevelField( FourCC( "Nde3" ) );
export const ABILITY_RLF_DAMAGE_MULTIPLIER_HEROES = ConvertAbilityRealLevelField( FourCC( "Nde4" ) );
export const ABILITY_RLF_BONUS_DAMAGE_MULTIPLIER = ConvertAbilityRealLevelField( FourCC( "Nic1" ) );
export const ABILITY_RLF_DEATH_DAMAGE_FULL_AMOUNT = ConvertAbilityRealLevelField( FourCC( "Nic2" ) );
export const ABILITY_RLF_DEATH_DAMAGE_FULL_AREA = ConvertAbilityRealLevelField( FourCC( "Nic3" ) );
export const ABILITY_RLF_DEATH_DAMAGE_HALF_AMOUNT = ConvertAbilityRealLevelField( FourCC( "Nic4" ) );
export const ABILITY_RLF_DEATH_DAMAGE_HALF_AREA = ConvertAbilityRealLevelField( FourCC( "Nic5" ) );
export const ABILITY_RLF_DEATH_DAMAGE_DELAY = ConvertAbilityRealLevelField( FourCC( "Nic6" ) );
export const ABILITY_RLF_DAMAGE_AMOUNT_NSO1 = ConvertAbilityRealLevelField( FourCC( "Nso1" ) );
export const ABILITY_RLF_DAMAGE_PERIOD = ConvertAbilityRealLevelField( FourCC( "Nso2" ) );
export const ABILITY_RLF_DAMAGE_PENALTY = ConvertAbilityRealLevelField( FourCC( "Nso3" ) );
export const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_NSO4 = ConvertAbilityRealLevelField( FourCC( "Nso4" ) );
export const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_NSO5 = ConvertAbilityRealLevelField( FourCC( "Nso5" ) );
export const ABILITY_RLF_SPLIT_DELAY = ConvertAbilityRealLevelField( FourCC( "Nlm2" ) );
export const ABILITY_RLF_MAX_HITPOINT_FACTOR = ConvertAbilityRealLevelField( FourCC( "Nlm4" ) );
export const ABILITY_RLF_LIFE_DURATION_SPLIT_BONUS = ConvertAbilityRealLevelField( FourCC( "Nlm5" ) );
export const ABILITY_RLF_WAVE_INTERVAL = ConvertAbilityRealLevelField( FourCC( "Nvc3" ) );
export const ABILITY_RLF_BUILDING_DAMAGE_FACTOR_NVC4 = ConvertAbilityRealLevelField( FourCC( "Nvc4" ) );
export const ABILITY_RLF_FULL_DAMAGE_AMOUNT_NVC5 = ConvertAbilityRealLevelField( FourCC( "Nvc5" ) );
export const ABILITY_RLF_HALF_DAMAGE_FACTOR = ConvertAbilityRealLevelField( FourCC( "Nvc6" ) );
export const ABILITY_RLF_INTERVAL_BETWEEN_PULSES = ConvertAbilityRealLevelField( FourCC( "Tau5" ) );

export const ABILITY_BLF_PERCENT_BONUS_HAB2 = ConvertAbilityBooleanLevelField( FourCC( "Hab2" ) );
export const ABILITY_BLF_USE_TELEPORT_CLUSTERING_HMT3 = ConvertAbilityBooleanLevelField( FourCC( "Hmt3" ) );
export const ABILITY_BLF_NEVER_MISS_OCR5 = ConvertAbilityBooleanLevelField( FourCC( "Ocr5" ) );
export const ABILITY_BLF_EXCLUDE_ITEM_DAMAGE = ConvertAbilityBooleanLevelField( FourCC( "Ocr6" ) );
export const ABILITY_BLF_BACKSTAB_DAMAGE = ConvertAbilityBooleanLevelField( FourCC( "Owk4" ) );
export const ABILITY_BLF_INHERIT_UPGRADES_UAN3 = ConvertAbilityBooleanLevelField( FourCC( "Uan3" ) );
export const ABILITY_BLF_MANA_CONVERSION_AS_PERCENT = ConvertAbilityBooleanLevelField( FourCC( "Udp3" ) );
export const ABILITY_BLF_LIFE_CONVERSION_AS_PERCENT = ConvertAbilityBooleanLevelField( FourCC( "Udp4" ) );
export const ABILITY_BLF_LEAVE_TARGET_ALIVE = ConvertAbilityBooleanLevelField( FourCC( "Udp5" ) );
export const ABILITY_BLF_PERCENT_BONUS_UAU3 = ConvertAbilityBooleanLevelField( FourCC( "Uau3" ) );
export const ABILITY_BLF_DAMAGE_IS_PERCENT_RECEIVED = ConvertAbilityBooleanLevelField( FourCC( "Eah2" ) );
export const ABILITY_BLF_MELEE_BONUS = ConvertAbilityBooleanLevelField( FourCC( "Ear2" ) );
export const ABILITY_BLF_RANGED_BONUS = ConvertAbilityBooleanLevelField( FourCC( "Ear3" ) );
export const ABILITY_BLF_FLAT_BONUS = ConvertAbilityBooleanLevelField( FourCC( "Ear4" ) );
export const ABILITY_BLF_NEVER_MISS_HBH5 = ConvertAbilityBooleanLevelField( FourCC( "Hbh5" ) );
export const ABILITY_BLF_PERCENT_BONUS_HAD2 = ConvertAbilityBooleanLevelField( FourCC( "Had2" ) );
export const ABILITY_BLF_CAN_DEACTIVATE = ConvertAbilityBooleanLevelField( FourCC( "Hds1" ) );
export const ABILITY_BLF_RAISED_UNITS_ARE_INVULNERABLE = ConvertAbilityBooleanLevelField( FourCC( "Hre2" ) );
export const ABILITY_BLF_PERCENTAGE_OAR2 = ConvertAbilityBooleanLevelField( FourCC( "Oar2" ) );
export const ABILITY_BLF_SUMMON_BUSY_UNITS = ConvertAbilityBooleanLevelField( FourCC( "Btl2" ) );
export const ABILITY_BLF_CREATES_BLIGHT = ConvertAbilityBooleanLevelField( FourCC( "Bli2" ) );
export const ABILITY_BLF_EXPLODES_ON_DEATH = ConvertAbilityBooleanLevelField( FourCC( "Sds6" ) );
export const ABILITY_BLF_ALWAYS_AUTOCAST_FAE2 = ConvertAbilityBooleanLevelField( FourCC( "Fae2" ) );
export const ABILITY_BLF_REGENERATE_ONLY_AT_NIGHT = ConvertAbilityBooleanLevelField( FourCC( "Mbt5" ) );
export const ABILITY_BLF_SHOW_SELECT_UNIT_BUTTON = ConvertAbilityBooleanLevelField( FourCC( "Neu3" ) );
export const ABILITY_BLF_SHOW_UNIT_INDICATOR = ConvertAbilityBooleanLevelField( FourCC( "Neu4" ) );
export const ABILITY_BLF_CHARGE_OWNING_PLAYER = ConvertAbilityBooleanLevelField( FourCC( "Ans6" ) );
export const ABILITY_BLF_PERCENTAGE_ARM2 = ConvertAbilityBooleanLevelField( FourCC( "Arm2" ) );
export const ABILITY_BLF_TARGET_IS_INVULNERABLE = ConvertAbilityBooleanLevelField( FourCC( "Pos3" ) );
export const ABILITY_BLF_TARGET_IS_MAGIC_IMMUNE = ConvertAbilityBooleanLevelField( FourCC( "Pos4" ) );
export const ABILITY_BLF_KILL_ON_CASTER_DEATH = ConvertAbilityBooleanLevelField( FourCC( "Ucb6" ) );
export const ABILITY_BLF_NO_TARGET_REQUIRED_REJ4 = ConvertAbilityBooleanLevelField( FourCC( "Rej4" ) );
export const ABILITY_BLF_ACCEPTS_GOLD = ConvertAbilityBooleanLevelField( FourCC( "Rtn1" ) );
export const ABILITY_BLF_ACCEPTS_LUMBER = ConvertAbilityBooleanLevelField( FourCC( "Rtn2" ) );
export const ABILITY_BLF_PREFER_HOSTILES_ROA5 = ConvertAbilityBooleanLevelField( FourCC( "Roa5" ) );
export const ABILITY_BLF_PREFER_FRIENDLIES_ROA6 = ConvertAbilityBooleanLevelField( FourCC( "Roa6" ) );
export const ABILITY_BLF_ROOTED_TURNING = ConvertAbilityBooleanLevelField( FourCC( "Roo3" ) );
export const ABILITY_BLF_ALWAYS_AUTOCAST_SLO3 = ConvertAbilityBooleanLevelField( FourCC( "Slo3" ) );
export const ABILITY_BLF_HIDE_BUTTON = ConvertAbilityBooleanLevelField( FourCC( "Ihid" ) );
export const ABILITY_BLF_USE_TELEPORT_CLUSTERING_ITP2 = ConvertAbilityBooleanLevelField( FourCC( "Itp2" ) );
export const ABILITY_BLF_IMMUNE_TO_MORPH_EFFECTS = ConvertAbilityBooleanLevelField( FourCC( "Eth1" ) );
export const ABILITY_BLF_DOES_NOT_BLOCK_BUILDINGS = ConvertAbilityBooleanLevelField( FourCC( "Eth2" ) );
export const ABILITY_BLF_AUTO_ACQUIRE_ATTACK_TARGETS = ConvertAbilityBooleanLevelField( FourCC( "Gho1" ) );
export const ABILITY_BLF_IMMUNE_TO_MORPH_EFFECTS_GHO2 = ConvertAbilityBooleanLevelField( FourCC( "Gho2" ) );
export const ABILITY_BLF_DO_NOT_BLOCK_BUILDINGS = ConvertAbilityBooleanLevelField( FourCC( "Gho3" ) );
export const ABILITY_BLF_INCLUDE_RANGED_DAMAGE = ConvertAbilityBooleanLevelField( FourCC( "Ssk4" ) );
export const ABILITY_BLF_INCLUDE_MELEE_DAMAGE = ConvertAbilityBooleanLevelField( FourCC( "Ssk5" ) );
export const ABILITY_BLF_MOVE_TO_PARTNER = ConvertAbilityBooleanLevelField( FourCC( "coa2" ) );
export const ABILITY_BLF_CAN_BE_DISPELLED = ConvertAbilityBooleanLevelField( FourCC( "cyc1" ) );
export const ABILITY_BLF_IGNORE_FRIENDLY_BUFFS = ConvertAbilityBooleanLevelField( FourCC( "dvm6" ) );
export const ABILITY_BLF_DROP_ITEMS_ON_DEATH = ConvertAbilityBooleanLevelField( FourCC( "inv2" ) );
export const ABILITY_BLF_CAN_USE_ITEMS = ConvertAbilityBooleanLevelField( FourCC( "inv3" ) );
export const ABILITY_BLF_CAN_GET_ITEMS = ConvertAbilityBooleanLevelField( FourCC( "inv4" ) );
export const ABILITY_BLF_CAN_DROP_ITEMS = ConvertAbilityBooleanLevelField( FourCC( "inv5" ) );
export const ABILITY_BLF_REPAIRS_ALLOWED = ConvertAbilityBooleanLevelField( FourCC( "liq4" ) );
export const ABILITY_BLF_CASTER_ONLY_SPLASH = ConvertAbilityBooleanLevelField( FourCC( "mfl6" ) );
export const ABILITY_BLF_NO_TARGET_REQUIRED_IRL4 = ConvertAbilityBooleanLevelField( FourCC( "irl4" ) );
export const ABILITY_BLF_DISPEL_ON_ATTACK = ConvertAbilityBooleanLevelField( FourCC( "irl5" ) );
export const ABILITY_BLF_AMOUNT_IS_RAW_VALUE = ConvertAbilityBooleanLevelField( FourCC( "ipv3" ) );
export const ABILITY_BLF_SHARED_SPELL_COOLDOWN = ConvertAbilityBooleanLevelField( FourCC( "spb2" ) );
export const ABILITY_BLF_SLEEP_ONCE = ConvertAbilityBooleanLevelField( FourCC( "sla1" ) );
export const ABILITY_BLF_ALLOW_ON_ANY_PLAYER_SLOT = ConvertAbilityBooleanLevelField( FourCC( "sla2" ) );
export const ABILITY_BLF_DISABLE_OTHER_ABILITIES = ConvertAbilityBooleanLevelField( FourCC( "Ncl5" ) );
export const ABILITY_BLF_ALLOW_BOUNTY = ConvertAbilityBooleanLevelField( FourCC( "Ntm4" ) );

export const ABILITY_SLF_ICON_NORMAL = ConvertAbilityStringLevelField( FourCC( "aart" ) );
export const ABILITY_SLF_CASTER = ConvertAbilityStringLevelField( FourCC( "acat" ) );
export const ABILITY_SLF_TARGET = ConvertAbilityStringLevelField( FourCC( "atat" ) );
export const ABILITY_SLF_SPECIAL = ConvertAbilityStringLevelField( FourCC( "asat" ) );
export const ABILITY_SLF_EFFECT = ConvertAbilityStringLevelField( FourCC( "aeat" ) );
export const ABILITY_SLF_AREA_EFFECT = ConvertAbilityStringLevelField( FourCC( "aaea" ) );
export const ABILITY_SLF_LIGHTNING_EFFECTS = ConvertAbilityStringLevelField( FourCC( "alig" ) );
export const ABILITY_SLF_MISSILE_ART = ConvertAbilityStringLevelField( FourCC( "amat" ) );
export const ABILITY_SLF_TOOLTIP_LEARN = ConvertAbilityStringLevelField( FourCC( "aret" ) );
export const ABILITY_SLF_TOOLTIP_LEARN_EXTENDED = ConvertAbilityStringLevelField( FourCC( "arut" ) );
export const ABILITY_SLF_TOOLTIP_NORMAL = ConvertAbilityStringLevelField( FourCC( "atp1" ) );
export const ABILITY_SLF_TOOLTIP_TURN_OFF = ConvertAbilityStringLevelField( FourCC( "aut1" ) );
export const ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED = ConvertAbilityStringLevelField( FourCC( "aub1" ) );
export const ABILITY_SLF_TOOLTIP_TURN_OFF_EXTENDED = ConvertAbilityStringLevelField( FourCC( "auu1" ) );
export const ABILITY_SLF_NORMAL_FORM_UNIT_EME1 = ConvertAbilityStringLevelField( FourCC( "Eme1" ) );
export const ABILITY_SLF_SPAWNED_UNITS = ConvertAbilityStringLevelField( FourCC( "Ndp1" ) );
export const ABILITY_SLF_ABILITY_FOR_UNIT_CREATION = ConvertAbilityStringLevelField( FourCC( "Nrc1" ) );
export const ABILITY_SLF_NORMAL_FORM_UNIT_MIL1 = ConvertAbilityStringLevelField( FourCC( "Mil1" ) );
export const ABILITY_SLF_ALTERNATE_FORM_UNIT_MIL2 = ConvertAbilityStringLevelField( FourCC( "Mil2" ) );
export const ABILITY_SLF_BASE_ORDER_ID_ANS5 = ConvertAbilityStringLevelField( FourCC( "Ans5" ) );
export const ABILITY_SLF_MORPH_UNITS_GROUND = ConvertAbilityStringLevelField( FourCC( "Ply2" ) );
export const ABILITY_SLF_MORPH_UNITS_AIR = ConvertAbilityStringLevelField( FourCC( "Ply3" ) );
export const ABILITY_SLF_MORPH_UNITS_AMPHIBIOUS = ConvertAbilityStringLevelField( FourCC( "Ply4" ) );
export const ABILITY_SLF_MORPH_UNITS_WATER = ConvertAbilityStringLevelField( FourCC( "Ply5" ) );
export const ABILITY_SLF_UNIT_TYPE_ONE = ConvertAbilityStringLevelField( FourCC( "Rai3" ) );
export const ABILITY_SLF_UNIT_TYPE_TWO = ConvertAbilityStringLevelField( FourCC( "Rai4" ) );
export const ABILITY_SLF_UNIT_TYPE_SOD2 = ConvertAbilityStringLevelField( FourCC( "Sod2" ) );
export const ABILITY_SLF_SUMMON_1_UNIT_TYPE = ConvertAbilityStringLevelField( FourCC( "Ist1" ) );
export const ABILITY_SLF_SUMMON_2_UNIT_TYPE = ConvertAbilityStringLevelField( FourCC( "Ist2" ) );
export const ABILITY_SLF_RACE_TO_CONVERT = ConvertAbilityStringLevelField( FourCC( "Ndc1" ) );
export const ABILITY_SLF_PARTNER_UNIT_TYPE = ConvertAbilityStringLevelField( FourCC( "coa1" ) );
export const ABILITY_SLF_PARTNER_UNIT_TYPE_ONE = ConvertAbilityStringLevelField( FourCC( "dcp1" ) );
export const ABILITY_SLF_PARTNER_UNIT_TYPE_TWO = ConvertAbilityStringLevelField( FourCC( "dcp2" ) );
export const ABILITY_SLF_REQUIRED_UNIT_TYPE = ConvertAbilityStringLevelField( FourCC( "tpi1" ) );
export const ABILITY_SLF_CONVERTED_UNIT_TYPE = ConvertAbilityStringLevelField( FourCC( "tpi2" ) );
export const ABILITY_SLF_SPELL_LIST = ConvertAbilityStringLevelField( FourCC( "spb1" ) );
export const ABILITY_SLF_BASE_ORDER_ID_SPB5 = ConvertAbilityStringLevelField( FourCC( "spb5" ) );
export const ABILITY_SLF_BASE_ORDER_ID_NCL6 = ConvertAbilityStringLevelField( FourCC( "Ncl6" ) );
export const ABILITY_SLF_ABILITY_UPGRADE_1 = ConvertAbilityStringLevelField( FourCC( "Neg3" ) );
export const ABILITY_SLF_ABILITY_UPGRADE_2 = ConvertAbilityStringLevelField( FourCC( "Neg4" ) );
export const ABILITY_SLF_ABILITY_UPGRADE_3 = ConvertAbilityStringLevelField( FourCC( "Neg5" ) );
export const ABILITY_SLF_ABILITY_UPGRADE_4 = ConvertAbilityStringLevelField( FourCC( "Neg6" ) );
export const ABILITY_SLF_SPAWN_UNIT_ID_NSY2 = ConvertAbilityStringLevelField( FourCC( "Nsy2" ) );

// Item
export const ITEM_IF_LEVEL = ConvertItemIntegerField( FourCC( "ilev" ) );
export const ITEM_IF_NUMBER_OF_CHARGES = ConvertItemIntegerField( FourCC( "iuse" ) );
export const ITEM_IF_COOLDOWN_GROUP = ConvertItemIntegerField( FourCC( "icid" ) );
export const ITEM_IF_MAX_HIT_POINTS = ConvertItemIntegerField( FourCC( "ihtp" ) );
export const ITEM_IF_HIT_POINTS = ConvertItemIntegerField( FourCC( "ihpc" ) );
export const ITEM_IF_PRIORITY = ConvertItemIntegerField( FourCC( "ipri" ) );
export const ITEM_IF_ARMOR_TYPE = ConvertItemIntegerField( FourCC( "iarm" ) );
export const ITEM_IF_TINTING_COLOR_RED = ConvertItemIntegerField( FourCC( "iclr" ) );
export const ITEM_IF_TINTING_COLOR_GREEN = ConvertItemIntegerField( FourCC( "iclg" ) );
export const ITEM_IF_TINTING_COLOR_BLUE = ConvertItemIntegerField( FourCC( "iclb" ) );
export const ITEM_IF_TINTING_COLOR_ALPHA = ConvertItemIntegerField( FourCC( "ical" ) );

export const ITEM_RF_SCALING_VALUE = ConvertItemRealField( FourCC( "isca" ) );

export const ITEM_BF_DROPPED_WHEN_CARRIER_DIES = ConvertItemBooleanField( FourCC( "idrp" ) );
export const ITEM_BF_CAN_BE_DROPPED = ConvertItemBooleanField( FourCC( "idro" ) );
export const ITEM_BF_PERISHABLE = ConvertItemBooleanField( FourCC( "iper" ) );
export const ITEM_BF_INCLUDE_AS_RANDOM_CHOICE = ConvertItemBooleanField( FourCC( "iprn" ) );
export const ITEM_BF_USE_AUTOMATICALLY_WHEN_ACQUIRED = ConvertItemBooleanField( FourCC( "ipow" ) );
export const ITEM_BF_CAN_BE_SOLD_TO_MERCHANTS = ConvertItemBooleanField( FourCC( "ipaw" ) );
export const ITEM_BF_ACTIVELY_USED = ConvertItemBooleanField( FourCC( "iusa" ) );

export const ITEM_SF_MODEL_USED = ConvertItemStringField( FourCC( "ifil" ) );

// Unit
export const UNIT_IF_DEFENSE_TYPE = ConvertUnitIntegerField( FourCC( "udty" ) );
export const UNIT_IF_ARMOR_TYPE = ConvertUnitIntegerField( FourCC( "uarm" ) );
export const UNIT_IF_LOOPING_FADE_IN_RATE = ConvertUnitIntegerField( FourCC( "ulfi" ) );
export const UNIT_IF_LOOPING_FADE_OUT_RATE = ConvertUnitIntegerField( FourCC( "ulfo" ) );
export const UNIT_IF_AGILITY = ConvertUnitIntegerField( FourCC( "uagc" ) );
export const UNIT_IF_INTELLIGENCE = ConvertUnitIntegerField( FourCC( "uinc" ) );
export const UNIT_IF_STRENGTH = ConvertUnitIntegerField( FourCC( "ustc" ) );
export const UNIT_IF_AGILITY_PERMANENT = ConvertUnitIntegerField( FourCC( "uagm" ) );
export const UNIT_IF_INTELLIGENCE_PERMANENT = ConvertUnitIntegerField( FourCC( "uinm" ) );
export const UNIT_IF_STRENGTH_PERMANENT = ConvertUnitIntegerField( FourCC( "ustm" ) );
export const UNIT_IF_AGILITY_WITH_BONUS = ConvertUnitIntegerField( FourCC( "uagb" ) );
export const UNIT_IF_INTELLIGENCE_WITH_BONUS = ConvertUnitIntegerField( FourCC( "uinb" ) );
export const UNIT_IF_STRENGTH_WITH_BONUS = ConvertUnitIntegerField( FourCC( "ustb" ) );
export const UNIT_IF_GOLD_BOUNTY_AWARDED_NUMBER_OF_DICE = ConvertUnitIntegerField( FourCC( "ubdi" ) );
export const UNIT_IF_GOLD_BOUNTY_AWARDED_BASE = ConvertUnitIntegerField( FourCC( "ubba" ) );
export const UNIT_IF_GOLD_BOUNTY_AWARDED_SIDES_PER_DIE = ConvertUnitIntegerField( FourCC( "ubsi" ) );
export const UNIT_IF_LUMBER_BOUNTY_AWARDED_NUMBER_OF_DICE = ConvertUnitIntegerField( FourCC( "ulbd" ) );
export const UNIT_IF_LUMBER_BOUNTY_AWARDED_BASE = ConvertUnitIntegerField( FourCC( "ulba" ) );
export const UNIT_IF_LUMBER_BOUNTY_AWARDED_SIDES_PER_DIE = ConvertUnitIntegerField( FourCC( "ulbs" ) );
export const UNIT_IF_LEVEL = ConvertUnitIntegerField( FourCC( "ulev" ) );
export const UNIT_IF_FORMATION_RANK = ConvertUnitIntegerField( FourCC( "ufor" ) );
export const UNIT_IF_ORIENTATION_INTERPOLATION = ConvertUnitIntegerField( FourCC( "uori" ) );
export const UNIT_IF_ELEVATION_SAMPLE_POINTS = ConvertUnitIntegerField( FourCC( "uept" ) );
export const UNIT_IF_TINTING_COLOR_RED = ConvertUnitIntegerField( FourCC( "uclr" ) );
export const UNIT_IF_TINTING_COLOR_GREEN = ConvertUnitIntegerField( FourCC( "uclg" ) );
export const UNIT_IF_TINTING_COLOR_BLUE = ConvertUnitIntegerField( FourCC( "uclb" ) );
export const UNIT_IF_TINTING_COLOR_ALPHA = ConvertUnitIntegerField( FourCC( "ucal" ) );
export const UNIT_IF_MOVE_TYPE = ConvertUnitIntegerField( FourCC( "umvt" ) );
export const UNIT_IF_TARGETED_AS = ConvertUnitIntegerField( FourCC( "utar" ) );
export const UNIT_IF_UNIT_CLASSIFICATION = ConvertUnitIntegerField( FourCC( "utyp" ) );
export const UNIT_IF_HIT_POINTS_REGENERATION_TYPE = ConvertUnitIntegerField( FourCC( "uhrt" ) );
export const UNIT_IF_PLACEMENT_PREVENTED_BY = ConvertUnitIntegerField( FourCC( "upar" ) );
export const UNIT_IF_PRIMARY_ATTRIBUTE = ConvertUnitIntegerField( FourCC( "upra" ) );

export const UNIT_RF_STRENGTH_PER_LEVEL = ConvertUnitRealField( FourCC( "ustp" ) );
export const UNIT_RF_AGILITY_PER_LEVEL = ConvertUnitRealField( FourCC( "uagp" ) );
export const UNIT_RF_INTELLIGENCE_PER_LEVEL = ConvertUnitRealField( FourCC( "uinp" ) );
export const UNIT_RF_HIT_POINTS_REGENERATION_RATE = ConvertUnitRealField( FourCC( "uhpr" ) );
export const UNIT_RF_MANA_REGENERATION = ConvertUnitRealField( FourCC( "umpr" ) );
export const UNIT_RF_DEATH_TIME = ConvertUnitRealField( FourCC( "udtm" ) );
export const UNIT_RF_FLY_HEIGHT = ConvertUnitRealField( FourCC( "ufyh" ) );
export const UNIT_RF_TURN_RATE = ConvertUnitRealField( FourCC( "umvr" ) );
export const UNIT_RF_ELEVATION_SAMPLE_RADIUS = ConvertUnitRealField( FourCC( "uerd" ) );
export const UNIT_RF_FOG_OF_WAR_SAMPLE_RADIUS = ConvertUnitRealField( FourCC( "ufrd" ) );
export const UNIT_RF_MAXIMUM_PITCH_ANGLE_DEGREES = ConvertUnitRealField( FourCC( "umxp" ) );
export const UNIT_RF_MAXIMUM_ROLL_ANGLE_DEGREES = ConvertUnitRealField( FourCC( "umxr" ) );
export const UNIT_RF_SCALING_VALUE = ConvertUnitRealField( FourCC( "usca" ) );
export const UNIT_RF_ANIMATION_RUN_SPEED = ConvertUnitRealField( FourCC( "urun" ) );
export const UNIT_RF_SELECTION_SCALE = ConvertUnitRealField( FourCC( "ussc" ) );
export const UNIT_RF_SELECTION_CIRCLE_HEIGHT = ConvertUnitRealField( FourCC( "uslz" ) );
export const UNIT_RF_SHADOW_IMAGE_HEIGHT = ConvertUnitRealField( FourCC( "ushh" ) );
export const UNIT_RF_SHADOW_IMAGE_WIDTH = ConvertUnitRealField( FourCC( "ushw" ) );
export const UNIT_RF_SHADOW_IMAGE_CENTER_X = ConvertUnitRealField( FourCC( "ushx" ) );
export const UNIT_RF_SHADOW_IMAGE_CENTER_Y = ConvertUnitRealField( FourCC( "ushy" ) );
export const UNIT_RF_ANIMATION_WALK_SPEED = ConvertUnitRealField( FourCC( "uwal" ) );
export const UNIT_RF_DEFENSE = ConvertUnitRealField( FourCC( "udfc" ) );
export const UNIT_RF_SIGHT_RADIUS = ConvertUnitRealField( FourCC( "usir" ) );
export const UNIT_RF_PRIORITY = ConvertUnitRealField( FourCC( "upri" ) );
export const UNIT_RF_SPEED = ConvertUnitRealField( FourCC( "umvc" ) );
export const UNIT_RF_OCCLUDER_HEIGHT = ConvertUnitRealField( FourCC( "uocc" ) );
export const UNIT_RF_HP = ConvertUnitRealField( FourCC( "uhpc" ) );
export const UNIT_RF_MANA = ConvertUnitRealField( FourCC( "umpc" ) );
export const UNIT_RF_ACQUISITION_RANGE = ConvertUnitRealField( FourCC( "uacq" ) );
export const UNIT_RF_CAST_BACK_SWING = ConvertUnitRealField( FourCC( "ucbs" ) );
export const UNIT_RF_CAST_POINT = ConvertUnitRealField( FourCC( "ucpt" ) );
export const UNIT_RF_MINIMUM_ATTACK_RANGE = ConvertUnitRealField( FourCC( "uamn" ) );

export const UNIT_BF_RAISABLE = ConvertUnitBooleanField( FourCC( "urai" ) );
export const UNIT_BF_DECAYABLE = ConvertUnitBooleanField( FourCC( "udec" ) );
export const UNIT_BF_IS_A_BUILDING = ConvertUnitBooleanField( FourCC( "ubdg" ) );
export const UNIT_BF_USE_EXTENDED_LINE_OF_SIGHT = ConvertUnitBooleanField( FourCC( "ulos" ) );
export const UNIT_BF_NEUTRAL_BUILDING_SHOWS_MINIMAP_ICON = ConvertUnitBooleanField( FourCC( "unbm" ) );
export const UNIT_BF_HERO_HIDE_HERO_INTERFACE_ICON = ConvertUnitBooleanField( FourCC( "uhhb" ) );
export const UNIT_BF_HERO_HIDE_HERO_MINIMAP_DISPLAY = ConvertUnitBooleanField( FourCC( "uhhm" ) );
export const UNIT_BF_HERO_HIDE_HERO_DEATH_MESSAGE = ConvertUnitBooleanField( FourCC( "uhhd" ) );
export const UNIT_BF_HIDE_MINIMAP_DISPLAY = ConvertUnitBooleanField( FourCC( "uhom" ) );
export const UNIT_BF_SCALE_PROJECTILES = ConvertUnitBooleanField( FourCC( "uscb" ) );
export const UNIT_BF_SELECTION_CIRCLE_ON_WATER = ConvertUnitBooleanField( FourCC( "usew" ) );
export const UNIT_BF_HAS_WATER_SHADOW = ConvertUnitBooleanField( FourCC( "ushr" ) );

export const UNIT_SF_NAME = ConvertUnitStringField( FourCC( "unam" ) );
export const UNIT_SF_PROPER_NAMES = ConvertUnitStringField( FourCC( "upro" ) );
export const UNIT_SF_GROUND_TEXTURE = ConvertUnitStringField( FourCC( "uubs" ) );
export const UNIT_SF_SHADOW_IMAGE_UNIT = ConvertUnitStringField( FourCC( "ushu" ) );

// Unit Weapon
export const UNIT_WEAPON_IF_ATTACK_DAMAGE_NUMBER_OF_DICE = ConvertUnitWeaponIntegerField( FourCC( "ua1d" ) );
export const UNIT_WEAPON_IF_ATTACK_DAMAGE_BASE = ConvertUnitWeaponIntegerField( FourCC( "ua1b" ) );
export const UNIT_WEAPON_IF_ATTACK_DAMAGE_SIDES_PER_DIE = ConvertUnitWeaponIntegerField( FourCC( "ua1s" ) );
export const UNIT_WEAPON_IF_ATTACK_MAXIMUM_NUMBER_OF_TARGETS = ConvertUnitWeaponIntegerField( FourCC( "utc1" ) );
export const UNIT_WEAPON_IF_ATTACK_ATTACK_TYPE = ConvertUnitWeaponIntegerField( FourCC( "ua1t" ) );
export const UNIT_WEAPON_IF_ATTACK_WEAPON_SOUND = ConvertUnitWeaponIntegerField( FourCC( "ucs1" ) );
export const UNIT_WEAPON_IF_ATTACK_AREA_OF_EFFECT_TARGETS = ConvertUnitWeaponIntegerField( FourCC( "ua1p" ) );
export const UNIT_WEAPON_IF_ATTACK_TARGETS_ALLOWED = ConvertUnitWeaponIntegerField( FourCC( "ua1g" ) );

export const UNIT_WEAPON_RF_ATTACK_BACKSWING_POINT = ConvertUnitWeaponRealField( FourCC( "ubs1" ) );
export const UNIT_WEAPON_RF_ATTACK_DAMAGE_POINT = ConvertUnitWeaponRealField( FourCC( "udp1" ) );
export const UNIT_WEAPON_RF_ATTACK_BASE_COOLDOWN = ConvertUnitWeaponRealField( FourCC( "ua1c" ) );
export const UNIT_WEAPON_RF_ATTACK_DAMAGE_LOSS_FACTOR = ConvertUnitWeaponRealField( FourCC( "udl1" ) );
export const UNIT_WEAPON_RF_ATTACK_DAMAGE_FACTOR_MEDIUM = ConvertUnitWeaponRealField( FourCC( "uhd1" ) );
export const UNIT_WEAPON_RF_ATTACK_DAMAGE_FACTOR_SMALL = ConvertUnitWeaponRealField( FourCC( "uqd1" ) );
export const UNIT_WEAPON_RF_ATTACK_DAMAGE_SPILL_DISTANCE = ConvertUnitWeaponRealField( FourCC( "usd1" ) );
export const UNIT_WEAPON_RF_ATTACK_DAMAGE_SPILL_RADIUS = ConvertUnitWeaponRealField( FourCC( "usr1" ) );
export const UNIT_WEAPON_RF_ATTACK_PROJECTILE_SPEED = ConvertUnitWeaponRealField( FourCC( "ua1z" ) );
export const UNIT_WEAPON_RF_ATTACK_PROJECTILE_ARC = ConvertUnitWeaponRealField( FourCC( "uma1" ) );
export const UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_FULL_DAMAGE = ConvertUnitWeaponRealField( FourCC( "ua1f" ) );
export const UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_MEDIUM_DAMAGE = ConvertUnitWeaponRealField( FourCC( "ua1h" ) );
export const UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_SMALL_DAMAGE = ConvertUnitWeaponRealField( FourCC( "ua1q" ) );
export const UNIT_WEAPON_RF_ATTACK_RANGE = ConvertUnitWeaponRealField( FourCC( "ua1r" ) );

export const UNIT_WEAPON_BF_ATTACK_SHOW_UI = ConvertUnitWeaponBooleanField( FourCC( "uwu1" ) );
export const UNIT_WEAPON_BF_ATTACKS_ENABLED = ConvertUnitWeaponBooleanField( FourCC( "uaen" ) );
export const UNIT_WEAPON_BF_ATTACK_PROJECTILE_HOMING_ENABLED = ConvertUnitWeaponBooleanField( FourCC( "umh1" ) );

export const UNIT_WEAPON_SF_ATTACK_PROJECTILE_ART = ConvertUnitWeaponStringField( FourCC( "ua1m" ) );

// Move Type
export const MOVE_TYPE_UNKNOWN = ConvertMoveType( 0 );
export const MOVE_TYPE_FOOT = ConvertMoveType( 1 );
export const MOVE_TYPE_FLY = ConvertMoveType( 2 );
export const MOVE_TYPE_HORSE = ConvertMoveType( 4 );
export const MOVE_TYPE_HOVER = ConvertMoveType( 8 );
export const MOVE_TYPE_FLOAT = ConvertMoveType( 16 );
export const MOVE_TYPE_AMPHIBIOUS = ConvertMoveType( 32 );
export const MOVE_TYPE_UNBUILDABLE = ConvertMoveType( 64 );

// Target Flag
export const TARGET_FLAG_NONE = ConvertTargetFlag( 1 );
export const TARGET_FLAG_GROUND = ConvertTargetFlag( 2 );
export const TARGET_FLAG_AIR = ConvertTargetFlag( 4 );
export const TARGET_FLAG_STRUCTURE = ConvertTargetFlag( 8 );
export const TARGET_FLAG_WARD = ConvertTargetFlag( 16 );
export const TARGET_FLAG_ITEM = ConvertTargetFlag( 32 );
export const TARGET_FLAG_TREE = ConvertTargetFlag( 64 );
export const TARGET_FLAG_WALL = ConvertTargetFlag( 128 );
export const TARGET_FLAG_DEBRIS = ConvertTargetFlag( 256 );
export const TARGET_FLAG_DECORATION = ConvertTargetFlag( 512 );
export const TARGET_FLAG_BRIDGE = ConvertTargetFlag( 1024 );

// defense type
export const DEFENSE_TYPE_LIGHT = ConvertDefenseType( 0 );
export const DEFENSE_TYPE_MEDIUM = ConvertDefenseType( 1 );
export const DEFENSE_TYPE_LARGE = ConvertDefenseType( 2 );
export const DEFENSE_TYPE_FORT = ConvertDefenseType( 3 );
export const DEFENSE_TYPE_NORMAL = ConvertDefenseType( 4 );
export const DEFENSE_TYPE_HERO = ConvertDefenseType( 5 );
export const DEFENSE_TYPE_DIVINE = ConvertDefenseType( 6 );
export const DEFENSE_TYPE_NONE = ConvertDefenseType( 7 );

// Hero Attribute
export const HERO_ATTRIBUTE_STR = ConvertHeroAttribute( 1 );
export const HERO_ATTRIBUTE_INT = ConvertHeroAttribute( 2 );
export const HERO_ATTRIBUTE_AGI = ConvertHeroAttribute( 3 );

// Armor Type
export const ARMOR_TYPE_WHOKNOWS = ConvertArmorType( 0 );
export const ARMOR_TYPE_FLESH = ConvertArmorType( 1 );
export const ARMOR_TYPE_METAL = ConvertArmorType( 2 );
export const ARMOR_TYPE_WOOD = ConvertArmorType( 3 );
export const ARMOR_TYPE_ETHREAL = ConvertArmorType( 4 );
export const ARMOR_TYPE_STONE = ConvertArmorType( 5 );

// Regeneration Type
export const REGENERATION_TYPE_NONE = ConvertRegenType( 0 );
export const REGENERATION_TYPE_ALWAYS = ConvertRegenType( 1 );
export const REGENERATION_TYPE_BLIGHT = ConvertRegenType( 2 );
export const REGENERATION_TYPE_DAY = ConvertRegenType( 3 );
export const REGENERATION_TYPE_NIGHT = ConvertRegenType( 4 );

// Unit Category
export const UNIT_CATEGORY_GIANT = ConvertUnitCategory( 1 );
export const UNIT_CATEGORY_UNDEAD = ConvertUnitCategory( 2 );
export const UNIT_CATEGORY_SUMMONED = ConvertUnitCategory( 4 );
export const UNIT_CATEGORY_MECHANICAL = ConvertUnitCategory( 8 );
export const UNIT_CATEGORY_PEON = ConvertUnitCategory( 16 );
export const UNIT_CATEGORY_SAPPER = ConvertUnitCategory( 32 );
export const UNIT_CATEGORY_TOWNHALL = ConvertUnitCategory( 64 );
export const UNIT_CATEGORY_ANCIENT = ConvertUnitCategory( 128 );
export const UNIT_CATEGORY_NEUTRAL = ConvertUnitCategory( 256 );
export const UNIT_CATEGORY_WARD = ConvertUnitCategory( 512 );
export const UNIT_CATEGORY_STANDON = ConvertUnitCategory( 1024 );
export const UNIT_CATEGORY_TAUREN = ConvertUnitCategory( 2048 );

// Pathing Flag
export const PATHING_FLAG_UNWALKABLE = ConvertPathingFlag( 2 );
export const PATHING_FLAG_UNFLYABLE = ConvertPathingFlag( 4 );
export const PATHING_FLAG_UNBUILDABLE = ConvertPathingFlag( 8 );
export const PATHING_FLAG_UNPEONHARVEST = ConvertPathingFlag( 16 );
export const PATHING_FLAG_BLIGHTED = ConvertPathingFlag( 32 );
export const PATHING_FLAG_UNFLOATABLE = ConvertPathingFlag( 64 );
export const PATHING_FLAG_UNAMPHIBIOUS = ConvertPathingFlag( 128 );
export const PATHING_FLAG_UNITEMPLACABLE = ConvertPathingFlag( 256 );

// ============================================================================
// MathAPI
export const Deg2Rad = ( degrees: number ): number => {};

export const Rad2Deg = ( radians: number ): number => {};

export const Sin = ( radians: number ): number => {};

export const Cos = ( radians: number ): number => {};

export const Tan = ( radians: number ): number => {};

// Expect values between -1 and 1...returns 0 for invalid input
export const Asin = ( y: number ): number => {};

export const Acos = ( x: number ): number => {};

export const Atan = ( x: number ): number => {};

// Returns 0 if x and y are both 0
export const Atan2 = ( y: number, x: number ): number => {};

// Returns 0 if x <= 0
export const SquareRoot = ( x: number ): number => {};

// computes x to the y power
// y == 0.0             => 1
// x ==0.0 and y < 0    => 0
//
export const Pow = ( x: number, power: number ): number => {};

// ============================================================================
// String Utility API
export const I2R = ( i: number ): number => {};

export const R2I = ( r: number ): number => {};

export const I2S = ( i: number ): string => {};

export const R2S = ( r: number ): string => {};

export const R2SW = ( r: number, width: number, precision: number ): string => {};

export const S2I = ( s: string ): number => {};

export const S2R = ( s: string ): number => {};

export const GetHandleId = ( h: handle ): number => {};

export const SubString = ( source: string, start: number, end: number ): string => {};

export const StringLength = ( s: string ): number => {};

export const StringCase = ( source: string, upper: boolean ): string => {};

export const StringHash = ( s: string ): number => {};

export const GetLocalizedString = ( source: string ): string => {};

export const GetLocalizedHotkey = ( source: string ): number => {};

// ============================================================================
// Map Setup API
//
//  These are native functions for describing the map configuration
//  these funcs should only be used in the "config" function of
//  a map script. The functions should also be called in this order
//  ( i.e. call SetPlayers before SetPlayerColor...
//

export const SetMapName = ( name: string ): void => {};

export const SetMapDescription = ( description: string ): void => {};

export const SetTeams = ( teamcount: number ): void => {};

export const SetPlayers = ( playercount: number ): void => {};

export const DefineStartLocation = ( whichStartLoc: number, x: number, y: number ): void => {};

export const DefineStartLocationLoc = ( whichStartLoc: number, whichLocation: location ): void => {};

export const SetStartLocPrioCount = ( whichStartLoc: number, prioSlotCount: number ): void => {};

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

// ============================================================================
// Timer API
//
export const CreateTimer = (): timer => {};

export const DestroyTimer = ( whichTimer: timer ): void => {};

export const TimerStart = ( whichTimer: timer, timeout: number, periodic: boolean, handlerFunc: code ): void => {};

export const TimerGetElapsed = ( whichTimer: timer ): number => {};

export const TimerGetRemaining = ( whichTimer: timer ): number => {};

export const TimerGetTimeout = ( whichTimer: timer ): number => {};

export const PauseTimer = ( whichTimer: timer ): void => {};

export const ResumeTimer = ( whichTimer: timer ): void => {};

export const GetExpiredTimer = (): timer => {};

// ============================================================================
// Group API
//
export const CreateGroup = (): group => {};

export const DestroyGroup = ( whichGroup: group ): void => {};

export const GroupAddUnit = ( whichGroup: group, whichUnit: unit ): boolean => {};

export const GroupRemoveUnit = ( whichGroup: group, whichUnit: unit ): boolean => {};

export const BlzGroupAddGroupFast = ( whichGroup: group, addGroup: group ): number => {};

export const BlzGroupRemoveGroupFast = ( whichGroup: group, removeGroup: group ): number => {};

export const GroupClear = ( whichGroup: group ): void => {};

export const BlzGroupGetSize = ( whichGroup: group ): number => {};

export const BlzGroupUnitAt = ( whichGroup: group, index: number ): unit => {};

export const GroupEnumUnitsOfType = ( whichGroup: group, unitname: string, filter: boolexpr ): void => {};

export const GroupEnumUnitsOfPlayer = ( whichGroup: group, whichPlayer: player, filter: boolexpr ): void => {};

export const GroupEnumUnitsOfTypeCounted = ( whichGroup: group, unitname: string, filter: boolexpr, countLimit: number ): void => {};

export const GroupEnumUnitsInRect = ( whichGroup: group, r: rect, filter: boolexpr ): void => {};

export const GroupEnumUnitsInRectCounted = ( whichGroup: group, r: rect, filter: boolexpr, countLimit: number ): void => {};

export const GroupEnumUnitsInRange = ( whichGroup: group, x: number, y: number, radius: number, filter: boolexpr ): void => {};

export const GroupEnumUnitsInRangeOfLoc = ( whichGroup: group, whichLocation: location, radius: number, filter: boolexpr ): void => {};

export const GroupEnumUnitsInRangeCounted = ( whichGroup: group, x: number, y: number, radius: number, filter: boolexpr, countLimit: number ): void => {};

export const GroupEnumUnitsInRangeOfLocCounted = ( whichGroup: group, whichLocation: location, radius: number, filter: boolexpr, countLimit: number ): void => {};

export const GroupEnumUnitsSelected = ( whichGroup: group, whichPlayer: player, filter: boolexpr ): void => {};

export const GroupImmediateOrder = ( whichGroup: group, order: string ): boolean => {};

export const GroupImmediateOrderById = ( whichGroup: group, order: number ): boolean => {};

export const GroupPointOrder = ( whichGroup: group, order: string, x: number, y: number ): boolean => {};

export const GroupPointOrderLoc = ( whichGroup: group, order: string, whichLocation: location ): boolean => {};

export const GroupPointOrderById = ( whichGroup: group, order: number, x: number, y: number ): boolean => {};

export const GroupPointOrderByIdLoc = ( whichGroup: group, order: number, whichLocation: location ): boolean => {};

export const GroupTargetOrder = ( whichGroup: group, order: string, targetWidget: widget ): boolean => {};

export const GroupTargetOrderById = ( whichGroup: group, order: number, targetWidget: widget ): boolean => {};

// This will be difficult to support with potentially disjoint, cell-based regions
// as it would involve enumerating all the cells that are covered by a particularregion
// a better implementation would be a trigger that adds relevant units as they enter
// and removes them if they leave...
export const ForGroup = ( whichGroup: group, callback: code ): void => {};

export const FirstOfGroup = ( whichGroup: group ): unit => {};

// ============================================================================
// Force API
//
export const CreateForce = (): force => {};

export const DestroyForce = ( whichForce: force ): void => {};

export const ForceAddPlayer = ( whichForce: force, whichPlayer: player ): void => {};

export const ForceRemovePlayer = ( whichForce: force, whichPlayer: player ): void => {};

export const BlzForceHasPlayer = ( whichForce: force, whichPlayer: player ): boolean => {};

export const ForceClear = ( whichForce: force ): void => {};

export const ForceEnumPlayers = ( whichForce: force, filter: boolexpr ): void => {};

export const ForceEnumPlayersCounted = ( whichForce: force, filter: boolexpr, countLimit: number ): void => {};

export const ForceEnumAllies = ( whichForce: force, whichPlayer: player, filter: boolexpr ): void => {};

export const ForceEnumEnemies = ( whichForce: force, whichPlayer: player, filter: boolexpr ): void => {};

export const ForForce = ( whichForce: force, callback: code ): void => {};

// ============================================================================
// Region and Location API
//
export const Rect = ( minx: number, miny: number, maxx: number, maxy: number ): rect => {};

export const RectFromLoc = ( min: location, max: location ): rect => {};

export const RemoveRect = ( whichRect: rect ): void => {};

export const SetRect = ( whichRect: rect, minx: number, miny: number, maxx: number, maxy: number ): void => {};

export const SetRectFromLoc = ( whichRect: rect, min: location, max: location ): void => {};

export const MoveRectTo = ( whichRect: rect, newCenterX: number, newCenterY: number ): void => {};

export const MoveRectToLoc = ( whichRect: rect, newCenterLoc: location ): void => {};

export const GetRectCenterX = ( whichRect: rect ): number => {};

export const GetRectCenterY = ( whichRect: rect ): number => {};

export const GetRectMinX = ( whichRect: rect ): number => {};

export const GetRectMinY = ( whichRect: rect ): number => {};

export const GetRectMaxX = ( whichRect: rect ): number => {};

export const GetRectMaxY = ( whichRect: rect ): number => {};

export const CreateRegion = (): region => {};

export const RemoveRegion = ( whichRegion: region ): void => {};

export const RegionAddRect = ( whichRegion: region, r: rect ): void => {};

export const RegionClearRect = ( whichRegion: region, r: rect ): void => {};

export const RegionAddCell = ( whichRegion: region, x: number, y: number ): void => {};

export const RegionAddCellAtLoc = ( whichRegion: region, whichLocation: location ): void => {};

export const RegionClearCell = ( whichRegion: region, x: number, y: number ): void => {};

export const RegionClearCellAtLoc = ( whichRegion: region, whichLocation: location ): void => {};

export const Location = ( x: number, y: number ): location => {};

export const RemoveLocation = ( whichLocation: location ): void => {};

export const MoveLocation = ( whichLocation: location, newX: number, newY: number ): void => {};

export const GetLocationX = ( whichLocation: location ): number => {};

export const GetLocationY = ( whichLocation: location ): number => {};

// This function is asynchronous. The values it returns are not guaranteed synchronous between each player.
//  If you attempt to use it in a synchronous manner, it may cause a desync.
export const GetLocationZ = ( whichLocation: location ): number => {};

export const IsUnitInRegion = ( whichRegion: region, whichUnit: unit ): boolean => {};

export const IsPointInRegion = ( whichRegion: region, x: number, y: number ): boolean => {};

export const IsLocationInRegion = ( whichRegion: region, whichLocation: location ): boolean => {};

// Returns full map bounds, including unplayable borders, in world coordinates
export const GetWorldBounds = (): rect => {};

// ============================================================================
// Native trigger interface
//
export const CreateTrigger = (): trigger => {};

export const DestroyTrigger = ( whichTrigger: trigger ): void => {};

export const ResetTrigger = ( whichTrigger: trigger ): void => {};

export const EnableTrigger = ( whichTrigger: trigger ): void => {};

export const DisableTrigger = ( whichTrigger: trigger ): void => {};

export const IsTriggerEnabled = ( whichTrigger: trigger ): boolean => {};

export const TriggerWaitOnSleeps = ( whichTrigger: trigger, flag: boolean ): void => {};

export const IsTriggerWaitOnSleeps = ( whichTrigger: trigger ): boolean => {};

export const GetFilterUnit = (): unit => {};

export const GetEnumUnit = (): unit => {};

export const GetFilterDestructable = (): destructable => {};

export const GetEnumDestructable = (): destructable => {};

export const GetFilterItem = (): item => {};

export const GetEnumItem = (): item => {};

export const GetFilterPlayer = (): player => {};

export const GetEnumPlayer = (): player => {};

export const GetTriggeringTrigger = (): trigger => {};

export const GetTriggerEventId = (): eventid => {};

export const GetTriggerEvalCount = ( whichTrigger: trigger ): number => {};

export const GetTriggerExecCount = ( whichTrigger: trigger ): number => {};

export const ExecuteFunc = ( funcName: string ): void => {};

// ============================================================================
// Boolean Expr API ( for compositing trigger conditions and unit filter funcs...)
// ============================================================================
export const And = ( operandA: boolexpr, operandB: boolexpr ): boolexpr => {};

export const Or = ( operandA: boolexpr, operandB: boolexpr ): boolexpr => {};

export const Not = ( operand: boolexpr ): boolexpr => {};

export const Condition = ( func: code ): conditionfunc => {};

export const DestroyCondition = ( c: conditionfunc ): void => {};

export const Filter = ( func: code ): filterfunc => {};

export const DestroyFilter = ( f: filterfunc ): void => {};

export const DestroyBoolExpr = ( e: boolexpr ): void => {};

// ============================================================================
// Trigger Game Event API
// ============================================================================

export const TriggerRegisterVariableEvent = ( whichTrigger: trigger, varName: string, opcode: limitop, limitval: number ): event => {};

// EVENT_GAME_VARIABLE_LIMIT
// constant native string GetTriggeringVariableName takes nothing returns string

// Creates it's own timer and triggers when it expires
export const TriggerRegisterTimerEvent = ( whichTrigger: trigger, timeout: number, periodic: boolean ): event => {};

// Triggers when the timer you tell it about expires
export const TriggerRegisterTimerExpireEvent = ( whichTrigger: trigger, t: timer ): event => {};

export const TriggerRegisterGameStateEvent = ( whichTrigger: trigger, whichState: gamestate, opcode: limitop, limitval: number ): event => {};

export const TriggerRegisterDialogEvent = ( whichTrigger: trigger, whichDialog: dialog ): event => {};

export const TriggerRegisterDialogButtonEvent = ( whichTrigger: trigger, whichButton: button ): event => {};

//  EVENT_GAME_STATE_LIMIT
export const GetEventGameState = (): gamestate => {};

export const TriggerRegisterGameEvent = ( whichTrigger: trigger, whichGameEvent: gameevent ): event => {};

// EVENT_GAME_VICTORY
export const GetWinningPlayer = (): player => {};

export const TriggerRegisterEnterRegion = ( whichTrigger: trigger, whichRegion: region, filter: boolexpr ): event => {};

// EVENT_GAME_ENTER_REGION
export const GetTriggeringRegion = (): region => {};

export const GetEnteringUnit = (): unit => {};

// EVENT_GAME_LEAVE_REGION

export const TriggerRegisterLeaveRegion = ( whichTrigger: trigger, whichRegion: region, filter: boolexpr ): event => {};

export const GetLeavingUnit = (): unit => {};

export const TriggerRegisterTrackableHitEvent = ( whichTrigger: trigger, t: trackable ): event => {};

export const TriggerRegisterTrackableTrackEvent = ( whichTrigger: trigger, t: trackable ): event => {};

// EVENT_GAME_TRACKABLE_HIT
// EVENT_GAME_TRACKABLE_TRACK
export const GetTriggeringTrackable = (): trackable => {};

// EVENT_DIALOG_BUTTON_CLICK
export const GetClickedButton = (): button => {};

export const GetClickedDialog = (): dialog => {};

// EVENT_GAME_TOURNAMENT_FINISH_SOON
export const GetTournamentFinishSoonTimeRemaining = (): number => {};

export const GetTournamentFinishNowRule = (): number => {};

export const GetTournamentFinishNowPlayer = (): player => {};

export const GetTournamentScore = ( whichPlayer: player ): number => {};

// EVENT_GAME_SAVE
export const GetSaveBasicFilename = (): string => {};

// ============================================================================
// Trigger Player Based Event API
// ============================================================================

export const TriggerRegisterPlayerEvent = ( whichTrigger: trigger, whichPlayer: player, whichPlayerEvent: playerevent ): event => {};

// EVENT_PLAYER_DEFEAT
// EVENT_PLAYER_VICTORY
export const GetTriggerPlayer = (): player => {};

export const TriggerRegisterPlayerUnitEvent = ( whichTrigger: trigger, whichPlayer: player, whichPlayerUnitEvent: playerunitevent, filter: boolexpr ): event => {};

// EVENT_PLAYER_HERO_LEVEL
// EVENT_UNIT_HERO_LEVEL
export const GetLevelingUnit = (): unit => {};

// EVENT_PLAYER_HERO_SKILL
// EVENT_UNIT_HERO_SKILL
export const GetLearningUnit = (): unit => {};

export const GetLearnedSkill = (): number => {};

export const GetLearnedSkillLevel = (): number => {};

// EVENT_PLAYER_HERO_REVIVABLE
export const GetRevivableUnit = (): unit => {};

// EVENT_PLAYER_HERO_REVIVE_START
// EVENT_PLAYER_HERO_REVIVE_CANCEL
// EVENT_PLAYER_HERO_REVIVE_FINISH
// EVENT_UNIT_HERO_REVIVE_START
// EVENT_UNIT_HERO_REVIVE_CANCEL
// EVENT_UNIT_HERO_REVIVE_FINISH
export const GetRevivingUnit = (): unit => {};

// EVENT_PLAYER_UNIT_ATTACKED
export const GetAttacker = (): unit => {};

// EVENT_PLAYER_UNIT_RESCUED
export const GetRescuer = (): unit => {};

// EVENT_PLAYER_UNIT_DEATH
export const GetDyingUnit = (): unit => {};

export const GetKillingUnit = (): unit => {};

// EVENT_PLAYER_UNIT_DECAY
export const GetDecayingUnit = (): unit => {};

// EVENT_PLAYER_UNIT_SELECTED
// constant native GetSelectedUnit takes nothing returns unit

// EVENT_PLAYER_UNIT_CONSTRUCT_START
export const GetConstructingStructure = (): unit => {};

// EVENT_PLAYER_UNIT_CONSTRUCT_FINISH
// EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL
export const GetCancelledStructure = (): unit => {};

export const GetConstructedStructure = (): unit => {};

// EVENT_PLAYER_UNIT_RESEARCH_START
// EVENT_PLAYER_UNIT_RESEARCH_CANCEL
// EVENT_PLAYER_UNIT_RESEARCH_FINISH
export const GetResearchingUnit = (): unit => {};

export const GetResearched = (): number => {};

// EVENT_PLAYER_UNIT_TRAIN_START
// EVENT_PLAYER_UNIT_TRAIN_CANCEL
export const GetTrainedUnitType = (): number => {};

// EVENT_PLAYER_UNIT_TRAIN_FINISH
export const GetTrainedUnit = (): unit => {};

// EVENT_PLAYER_UNIT_DETECTED
export const GetDetectedUnit = (): unit => {};

// EVENT_PLAYER_UNIT_SUMMONED
export const GetSummoningUnit = (): unit => {};

export const GetSummonedUnit = (): unit => {};

// EVENT_PLAYER_UNIT_LOADED
export const GetTransportUnit = (): unit => {};

export const GetLoadedUnit = (): unit => {};

// EVENT_PLAYER_UNIT_SELL
export const GetSellingUnit = (): unit => {};

export const GetSoldUnit = (): unit => {};

export const GetBuyingUnit = (): unit => {};

// EVENT_PLAYER_UNIT_SELL_ITEM
export const GetSoldItem = (): item => {};

// EVENT_PLAYER_UNIT_CHANGE_OWNER
export const GetChangingUnit = (): unit => {};

export const GetChangingUnitPrevOwner = (): player => {};

// EVENT_PLAYER_UNIT_DROP_ITEM
// EVENT_PLAYER_UNIT_PICKUP_ITEM
// EVENT_PLAYER_UNIT_USE_ITEM
export const GetManipulatingUnit = (): unit => {};

export const GetManipulatedItem = (): item => {};

// EVENT_PLAYER_UNIT_ISSUED_ORDER
export const GetOrderedUnit = (): unit => {};

export const GetIssuedOrderId = (): number => {};

// EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER
export const GetOrderPointX = (): number => {};

export const GetOrderPointY = (): number => {};

export const GetOrderPointLoc = (): location => {};

// EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER
export const GetOrderTarget = (): widget => {};

export const GetOrderTargetDestructable = (): destructable => {};

export const GetOrderTargetItem = (): item => {};

export const GetOrderTargetUnit = (): unit => {};

// EVENT_UNIT_SPELL_CHANNEL
// EVENT_UNIT_SPELL_CAST
// EVENT_UNIT_SPELL_EFFECT
// EVENT_UNIT_SPELL_FINISH
// EVENT_UNIT_SPELL_ENDCAST
// EVENT_PLAYER_UNIT_SPELL_CHANNEL
// EVENT_PLAYER_UNIT_SPELL_CAST
// EVENT_PLAYER_UNIT_SPELL_EFFECT
// EVENT_PLAYER_UNIT_SPELL_FINISH
// EVENT_PLAYER_UNIT_SPELL_ENDCAST
export const GetSpellAbilityUnit = (): unit => {};

export const GetSpellAbilityId = (): number => {};

export const GetSpellAbility = (): ability => {};

export const GetSpellTargetLoc = (): location => {};

export const GetSpellTargetX = (): number => {};

export const GetSpellTargetY = (): number => {};

export const GetSpellTargetDestructable = (): destructable => {};

export const GetSpellTargetItem = (): item => {};

export const GetSpellTargetUnit = (): unit => {};

export const TriggerRegisterPlayerAllianceChange = ( whichTrigger: trigger, whichPlayer: player, whichAlliance: alliancetype ): event => {};

export const TriggerRegisterPlayerStateEvent = ( whichTrigger: trigger, whichPlayer: player, whichState: playerstate, opcode: limitop, limitval: number ): event => {};

// EVENT_PLAYER_STATE_LIMIT
export const GetEventPlayerState = (): playerstate => {};

export const TriggerRegisterPlayerChatEvent = ( whichTrigger: trigger, whichPlayer: player, chatMessageToDetect: string, exactMatchOnly: boolean ): event => {};

// EVENT_PLAYER_CHAT

// returns the actual string they typed in ( same as what you registered for
// if you required exact match )
export const GetEventPlayerChatString = (): string => {};

// returns the string that you registered for
export const GetEventPlayerChatStringMatched = (): string => {};

export const TriggerRegisterDeathEvent = ( whichTrigger: trigger, whichWidget: widget ): event => {};

// ============================================================================
// Trigger Unit Based Event API
// ============================================================================

// returns handle to unit which triggered the most recent event when called from
// within a trigger action function...returns null handle when used incorrectly

export const GetTriggerUnit = (): unit => {};

export const TriggerRegisterUnitStateEvent = ( whichTrigger: trigger, whichUnit: unit, whichState: unitstate, opcode: limitop, limitval: number ): event => {};

// EVENT_UNIT_STATE_LIMIT
export const GetEventUnitState = (): unitstate => {};

export const TriggerRegisterUnitEvent = ( whichTrigger: trigger, whichUnit: unit, whichEvent: unitevent ): event => {};

// EVENT_UNIT_DAMAGED
export const GetEventDamage = (): number => {};

export const GetEventDamageSource = (): unit => {};

// EVENT_UNIT_DEATH
// EVENT_UNIT_DECAY
// Use the GetDyingUnit and GetDecayingUnit funcs above

// EVENT_UNIT_DETECTED
export const GetEventDetectingPlayer = (): player => {};

export const TriggerRegisterFilterUnitEvent = ( whichTrigger: trigger, whichUnit: unit, whichEvent: unitevent, filter: boolexpr ): event => {};

// EVENT_UNIT_ACQUIRED_TARGET
// EVENT_UNIT_TARGET_IN_RANGE
export const GetEventTargetUnit = (): unit => {};

// EVENT_UNIT_ATTACKED
// Use GetAttacker from the Player Unit Event API Below...

// EVENT_UNIT_RESCUEDED
// Use GetRescuer from the Player Unit Event API Below...

// EVENT_UNIT_CONSTRUCT_CANCEL
// EVENT_UNIT_CONSTRUCT_FINISH

// See the Player Unit Construction Event API above for event info funcs

// EVENT_UNIT_TRAIN_START
// EVENT_UNIT_TRAIN_CANCELLED
// EVENT_UNIT_TRAIN_FINISH

// See the Player Unit Training Event API above for event info funcs

// EVENT_UNIT_SELL

// See the Player Unit Sell Event API above for event info funcs

// EVENT_UNIT_DROP_ITEM
// EVENT_UNIT_PICKUP_ITEM
// EVENT_UNIT_USE_ITEM
// See the Player Unit/Item manipulation Event API above for event info funcs

// EVENT_UNIT_ISSUED_ORDER
// EVENT_UNIT_ISSUED_POINT_ORDER
// EVENT_UNIT_ISSUED_TARGET_ORDER

// See the Player Unit Order Event API above for event info funcs

export const TriggerRegisterUnitInRange = ( whichTrigger: trigger, whichUnit: unit, range: number, filter: boolexpr ): event => {};

export const TriggerAddCondition = ( whichTrigger: trigger, condition: boolexpr ): triggercondition => {};

export const TriggerRemoveCondition = ( whichTrigger: trigger, whichCondition: triggercondition ): void => {};

export const TriggerClearConditions = ( whichTrigger: trigger ): void => {};

export const TriggerAddAction = ( whichTrigger: trigger, actionFunc: code ): triggeraction => {};

export const TriggerRemoveAction = ( whichTrigger: trigger, whichAction: triggeraction ): void => {};

export const TriggerClearActions = ( whichTrigger: trigger ): void => {};

export const TriggerSleepAction = ( timeout: number ): void => {};

export const TriggerWaitForSound = ( s: sound, offset: number ): void => {};

export const TriggerEvaluate = ( whichTrigger: trigger ): boolean => {};

export const TriggerExecute = ( whichTrigger: trigger ): void => {};

export const TriggerExecuteWait = ( whichTrigger: trigger ): void => {};

export const TriggerSyncStart = (): void => {};

export const TriggerSyncReady = (): void => {};

// ============================================================================
// Widget API
export const GetWidgetLife = ( whichWidget: widget ): number => {};

export const SetWidgetLife = ( whichWidget: widget, newLife: number ): void => {};

export const GetWidgetX = ( whichWidget: widget ): number => {};

export const GetWidgetY = ( whichWidget: widget ): number => {};

export const GetTriggerWidget = (): widget => {};

// ============================================================================
// Destructable Object API
// Facing arguments are specified in degrees
export const CreateDestructable = ( objectid: number, x: number, y: number, face: number, scale: number, variation: number ): destructable => {};

export const CreateDestructableZ = ( objectid: number, x: number, y: number, z: number, face: number, scale: number, variation: number ): destructable => {};

export const CreateDeadDestructable = ( objectid: number, x: number, y: number, face: number, scale: number, variation: number ): destructable => {};

export const CreateDeadDestructableZ = ( objectid: number, x: number, y: number, z: number, face: number, scale: number, variation: number ): destructable => {};

export const RemoveDestructable = ( d: destructable ): void => {};

export const KillDestructable = ( d: destructable ): void => {};

export const SetDestructableInvulnerable = ( d: destructable, flag: boolean ): void => {};

export const IsDestructableInvulnerable = ( d: destructable ): boolean => {};

export const EnumDestructablesInRect = ( r: rect, filter: boolexpr, actionFunc: code ): void => {};

export const GetDestructableTypeId = ( d: destructable ): number => {};

export const GetDestructableX = ( d: destructable ): number => {};

export const GetDestructableY = ( d: destructable ): number => {};

export const SetDestructableLife = ( d: destructable, life: number ): void => {};

export const GetDestructableLife = ( d: destructable ): number => {};

export const SetDestructableMaxLife = ( d: destructable, max: number ): void => {};

export const GetDestructableMaxLife = ( d: destructable ): number => {};

export const DestructableRestoreLife = ( d: destructable, life: number, birth: boolean ): void => {};

export const QueueDestructableAnimation = ( d: destructable, whichAnimation: string ): void => {};

export const SetDestructableAnimation = ( d: destructable, whichAnimation: string ): void => {};

export const SetDestructableAnimationSpeed = ( d: destructable, speedFactor: number ): void => {};

export const ShowDestructable = ( d: destructable, flag: boolean ): void => {};

export const GetDestructableOccluderHeight = ( d: destructable ): number => {};

export const SetDestructableOccluderHeight = ( d: destructable, height: number ): void => {};

export const GetDestructableName = ( d: destructable ): string => {};

export const GetTriggerDestructable = (): destructable => {};

// ============================================================================
// Item API
export const CreateItem = ( itemid: number, x: number, y: number ): item => {};

export const RemoveItem = ( whichItem: item ): void => {};

export const GetItemPlayer = ( whichItem: item ): player => {};

export const GetItemTypeId = ( i: item ): number => {};

export const GetItemX = ( i: item ): number => {};

export const GetItemY = ( i: item ): number => {};

export const SetItemPosition = ( i: item, x: number, y: number ): void => {};

export const SetItemDropOnDeath = ( whichItem: item, flag: boolean ): void => {};

export const SetItemDroppable = ( i: item, flag: boolean ): void => {};

export const SetItemPawnable = ( i: item, flag: boolean ): void => {};

export const SetItemPlayer = ( whichItem: item, whichPlayer: player, changeColor: boolean ): void => {};

export const SetItemInvulnerable = ( whichItem: item, flag: boolean ): void => {};

export const IsItemInvulnerable = ( whichItem: item ): boolean => {};

export const SetItemVisible = ( whichItem: item, show: boolean ): void => {};

export const IsItemVisible = ( whichItem: item ): boolean => {};

export const IsItemOwned = ( whichItem: item ): boolean => {};

export const IsItemPowerup = ( whichItem: item ): boolean => {};

export const IsItemSellable = ( whichItem: item ): boolean => {};

export const IsItemPawnable = ( whichItem: item ): boolean => {};

export const IsItemIdPowerup = ( itemId: number ): boolean => {};

export const IsItemIdSellable = ( itemId: number ): boolean => {};

export const IsItemIdPawnable = ( itemId: number ): boolean => {};

export const EnumItemsInRect = ( r: rect, filter: boolexpr, actionFunc: code ): void => {};

export const GetItemLevel = ( whichItem: item ): number => {};

export const GetItemType = ( whichItem: item ): itemtype => {};

export const SetItemDropID = ( whichItem: item, unitId: number ): void => {};

export const GetItemName = ( whichItem: item ): string => {};

export const GetItemCharges = ( whichItem: item ): number => {};

export const SetItemCharges = ( whichItem: item, charges: number ): void => {};

export const GetItemUserData = ( whichItem: item ): number => {};

export const SetItemUserData = ( whichItem: item, data: number ): void => {};

// ============================================================================
// Unit API
// Facing arguments are specified in degrees
export const CreateUnit = ( id: player, unitid: number, x: number, y: number, face: number ): unit => {};

export const CreateUnitByName = ( whichPlayer: player, unitname: string, x: number, y: number, face: number ): unit => {};

export const CreateUnitAtLoc = ( id: player, unitid: number, whichLocation: location, face: number ): unit => {};

export const CreateUnitAtLocByName = ( id: player, unitname: string, whichLocation: location, face: number ): unit => {};

export const CreateCorpse = ( whichPlayer: player, unitid: number, x: number, y: number, face: number ): unit => {};

export const KillUnit = ( whichUnit: unit ): void => {};

export const RemoveUnit = ( whichUnit: unit ): void => {};

export const ShowUnit = ( whichUnit: unit, show: boolean ): void => {};

export const SetUnitState = ( whichUnit: unit, whichUnitState: unitstate, newVal: number ): void => {};

export const SetUnitX = ( whichUnit: unit, newX: number ): void => {};

export const SetUnitY = ( whichUnit: unit, newY: number ): void => {};

export const SetUnitPosition = ( whichUnit: unit, newX: number, newY: number ): void => {};

export const SetUnitPositionLoc = ( whichUnit: unit, whichLocation: location ): void => {};

export const SetUnitFacing = ( whichUnit: unit, facingAngle: number ): void => {};

export const SetUnitFacingTimed = ( whichUnit: unit, facingAngle: number, duration: number ): void => {};

export const SetUnitMoveSpeed = ( whichUnit: unit, newSpeed: number ): void => {};

export const SetUnitFlyHeight = ( whichUnit: unit, newHeight: number, rate: number ): void => {};

export const SetUnitTurnSpeed = ( whichUnit: unit, newTurnSpeed: number ): void => {};

export const SetUnitPropWindow = ( whichUnit: unit, newPropWindowAngle: number ): void => {};

export const SetUnitAcquireRange = ( whichUnit: unit, newAcquireRange: number ): void => {};

export const SetUnitCreepGuard = ( whichUnit: unit, creepGuard: boolean ): void => {};

export const GetUnitAcquireRange = ( whichUnit: unit ): number => {};

export const GetUnitTurnSpeed = ( whichUnit: unit ): number => {};

export const GetUnitPropWindow = ( whichUnit: unit ): number => {};

export const GetUnitFlyHeight = ( whichUnit: unit ): number => {};

export const GetUnitDefaultAcquireRange = ( whichUnit: unit ): number => {};

export const GetUnitDefaultTurnSpeed = ( whichUnit: unit ): number => {};

export const GetUnitDefaultPropWindow = ( whichUnit: unit ): number => {};

export const GetUnitDefaultFlyHeight = ( whichUnit: unit ): number => {};

export const SetUnitOwner = ( whichUnit: unit, whichPlayer: player, changeColor: boolean ): void => {};

export const SetUnitColor = ( whichUnit: unit, whichColor: playercolor ): void => {};

export const SetUnitScale = ( whichUnit: unit, scaleX: number, scaleY: number, scaleZ: number ): void => {};

export const SetUnitTimeScale = ( whichUnit: unit, timeScale: number ): void => {};

export const SetUnitBlendTime = ( whichUnit: unit, blendTime: number ): void => {};

export const SetUnitVertexColor = ( whichUnit: unit, red: number, green: number, blue: number, alpha: number ): void => {};

export const QueueUnitAnimation = ( whichUnit: unit, whichAnimation: string ): void => {};

export const SetUnitAnimation = ( whichUnit: unit, whichAnimation: string ): void => {};

export const SetUnitAnimationByIndex = ( whichUnit: unit, whichAnimation: number ): void => {};

export const SetUnitAnimationWithRarity = ( whichUnit: unit, whichAnimation: string, rarity: raritycontrol ): void => {};

export const AddUnitAnimationProperties = ( whichUnit: unit, animProperties: string, add: boolean ): void => {};

export const SetUnitLookAt = ( whichUnit: unit, whichBone: string, lookAtTarget: unit, offsetX: number, offsetY: number, offsetZ: number ): void => {};

export const ResetUnitLookAt = ( whichUnit: unit ): void => {};

export const SetUnitRescuable = ( whichUnit: unit, byWhichPlayer: player, flag: boolean ): void => {};

export const SetUnitRescueRange = ( whichUnit: unit, range: number ): void => {};

export const SetHeroStr = ( whichHero: unit, newStr: number, permanent: boolean ): void => {};

export const SetHeroAgi = ( whichHero: unit, newAgi: number, permanent: boolean ): void => {};

export const SetHeroInt = ( whichHero: unit, newInt: number, permanent: boolean ): void => {};

export const GetHeroStr = ( whichHero: unit, includeBonuses: boolean ): number => {};

export const GetHeroAgi = ( whichHero: unit, includeBonuses: boolean ): number => {};

export const GetHeroInt = ( whichHero: unit, includeBonuses: boolean ): number => {};

export const UnitStripHeroLevel = ( whichHero: unit, howManyLevels: number ): boolean => {};

export const GetHeroXP = ( whichHero: unit ): number => {};

export const SetHeroXP = ( whichHero: unit, newXpVal: number, showEyeCandy: boolean ): void => {};

export const GetHeroSkillPoints = ( whichHero: unit ): number => {};

export const UnitModifySkillPoints = ( whichHero: unit, skillPointDelta: number ): boolean => {};

export const AddHeroXP = ( whichHero: unit, xpToAdd: number, showEyeCandy: boolean ): void => {};

export const SetHeroLevel = ( whichHero: unit, level: number, showEyeCandy: boolean ): void => {};

export const GetHeroLevel = ( whichHero: unit ): number => {};

export const GetUnitLevel = ( whichUnit: unit ): number => {};

export const GetHeroProperName = ( whichHero: unit ): string => {};

export const SuspendHeroXP = ( whichHero: unit, flag: boolean ): void => {};

export const IsSuspendedXP = ( whichHero: unit ): boolean => {};

export const SelectHeroSkill = ( whichHero: unit, abilcode: number ): void => {};

export const GetUnitAbilityLevel = ( whichUnit: unit, abilcode: number ): number => {};

export const DecUnitAbilityLevel = ( whichUnit: unit, abilcode: number ): number => {};

export const IncUnitAbilityLevel = ( whichUnit: unit, abilcode: number ): number => {};

export const SetUnitAbilityLevel = ( whichUnit: unit, abilcode: number, level: number ): number => {};

export const ReviveHero = ( whichHero: unit, x: number, y: number, doEyecandy: boolean ): boolean => {};

export const ReviveHeroLoc = ( whichHero: unit, loc: location, doEyecandy: boolean ): boolean => {};

export const SetUnitExploded = ( whichUnit: unit, exploded: boolean ): void => {};

export const SetUnitInvulnerable = ( whichUnit: unit, flag: boolean ): void => {};

export const PauseUnit = ( whichUnit: unit, flag: boolean ): void => {};

export const IsUnitPaused = ( whichHero: unit ): boolean => {};

export const SetUnitPathing = ( whichUnit: unit, flag: boolean ): void => {};

export const ClearSelection = (): void => {};

export const SelectUnit = ( whichUnit: unit, flag: boolean ): void => {};

export const GetUnitPointValue = ( whichUnit: unit ): number => {};

export const GetUnitPointValueByType = ( unitType: number ): number => {};

// native        SetUnitPointValueByType takes integer unitType, integer newPointValue returns nothing

export const UnitAddItem = ( whichUnit: unit, whichItem: item ): boolean => {};

export const UnitAddItemById = ( whichUnit: unit, itemId: number ): item => {};

export const UnitAddItemToSlotById = ( whichUnit: unit, itemId: number, itemSlot: number ): boolean => {};

export const UnitRemoveItem = ( whichUnit: unit, whichItem: item ): void => {};

export const UnitRemoveItemFromSlot = ( whichUnit: unit, itemSlot: number ): item => {};

export const UnitHasItem = ( whichUnit: unit, whichItem: item ): boolean => {};

export const UnitItemInSlot = ( whichUnit: unit, itemSlot: number ): item => {};

export const UnitInventorySize = ( whichUnit: unit ): number => {};

export const UnitDropItemPoint = ( whichUnit: unit, whichItem: item, x: number, y: number ): boolean => {};

export const UnitDropItemSlot = ( whichUnit: unit, whichItem: item, slot: number ): boolean => {};

export const UnitDropItemTarget = ( whichUnit: unit, whichItem: item, target: widget ): boolean => {};

export const UnitUseItem = ( whichUnit: unit, whichItem: item ): boolean => {};

export const UnitUseItemPoint = ( whichUnit: unit, whichItem: item, x: number, y: number ): boolean => {};

export const UnitUseItemTarget = ( whichUnit: unit, whichItem: item, target: widget ): boolean => {};

export const GetUnitX = ( whichUnit: unit ): number => {};

export const GetUnitY = ( whichUnit: unit ): number => {};

export const GetUnitLoc = ( whichUnit: unit ): location => {};

export const GetUnitFacing = ( whichUnit: unit ): number => {};

export const GetUnitMoveSpeed = ( whichUnit: unit ): number => {};

export const GetUnitDefaultMoveSpeed = ( whichUnit: unit ): number => {};

export const GetUnitState = ( whichUnit: unit, whichUnitState: unitstate ): number => {};

export const GetOwningPlayer = ( whichUnit: unit ): player => {};

export const GetUnitTypeId = ( whichUnit: unit ): number => {};

export const GetUnitRace = ( whichUnit: unit ): race => {};

export const GetUnitName = ( whichUnit: unit ): string => {};

export const GetUnitFoodUsed = ( whichUnit: unit ): number => {};

export const GetUnitFoodMade = ( whichUnit: unit ): number => {};

export const GetFoodMade = ( unitId: number ): number => {};

export const GetFoodUsed = ( unitId: number ): number => {};

export const SetUnitUseFood = ( whichUnit: unit, useFood: boolean ): void => {};

export const GetUnitRallyPoint = ( whichUnit: unit ): location => {};

export const GetUnitRallyUnit = ( whichUnit: unit ): unit => {};

export const GetUnitRallyDestructable = ( whichUnit: unit ): destructable => {};

export const IsUnitInGroup = ( whichUnit: unit, whichGroup: group ): boolean => {};

export const IsUnitInForce = ( whichUnit: unit, whichForce: force ): boolean => {};

export const IsUnitOwnedByPlayer = ( whichUnit: unit, whichPlayer: player ): boolean => {};

export const IsUnitAlly = ( whichUnit: unit, whichPlayer: player ): boolean => {};

export const IsUnitEnemy = ( whichUnit: unit, whichPlayer: player ): boolean => {};

export const IsUnitVisible = ( whichUnit: unit, whichPlayer: player ): boolean => {};

export const IsUnitDetected = ( whichUnit: unit, whichPlayer: player ): boolean => {};

export const IsUnitInvisible = ( whichUnit: unit, whichPlayer: player ): boolean => {};

export const IsUnitFogged = ( whichUnit: unit, whichPlayer: player ): boolean => {};

export const IsUnitMasked = ( whichUnit: unit, whichPlayer: player ): boolean => {};

export const IsUnitSelected = ( whichUnit: unit, whichPlayer: player ): boolean => {};

export const IsUnitRace = ( whichUnit: unit, whichRace: race ): boolean => {};

export const IsUnitType = ( whichUnit: unit, whichUnitType: unittype ): boolean => {};

export const IsUnit = ( whichUnit: unit, whichSpecifiedUnit: unit ): boolean => {};

export const IsUnitInRange = ( whichUnit: unit, otherUnit: unit, distance: number ): boolean => {};

export const IsUnitInRangeXY = ( whichUnit: unit, x: number, y: number, distance: number ): boolean => {};

export const IsUnitInRangeLoc = ( whichUnit: unit, whichLocation: location, distance: number ): boolean => {};

export const IsUnitHidden = ( whichUnit: unit ): boolean => {};

export const IsUnitIllusion = ( whichUnit: unit ): boolean => {};

export const IsUnitInTransport = ( whichUnit: unit, whichTransport: unit ): boolean => {};

export const IsUnitLoaded = ( whichUnit: unit ): boolean => {};

export const IsHeroUnitId = ( unitId: number ): boolean => {};

export const IsUnitIdType = ( unitId: number, whichUnitType: unittype ): boolean => {};

export const UnitShareVision = ( whichUnit: unit, whichPlayer: player, share: boolean ): void => {};

export const UnitSuspendDecay = ( whichUnit: unit, suspend: boolean ): void => {};

export const UnitAddType = ( whichUnit: unit, whichUnitType: unittype ): boolean => {};

export const UnitRemoveType = ( whichUnit: unit, whichUnitType: unittype ): boolean => {};

export const UnitAddAbility = ( whichUnit: unit, abilityId: number ): boolean => {};

export const UnitRemoveAbility = ( whichUnit: unit, abilityId: number ): boolean => {};

export const UnitMakeAbilityPermanent = ( whichUnit: unit, permanent: boolean, abilityId: number ): boolean => {};

export const UnitRemoveBuffs = ( whichUnit: unit, removePositive: boolean, removeNegative: boolean ): void => {};

export const UnitRemoveBuffsEx = ( whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean ): void => {};

export const UnitHasBuffsEx = ( whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean ): boolean => {};

export const UnitCountBuffsEx = ( whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean ): number => {};

export const UnitAddSleep = ( whichUnit: unit, add: boolean ): void => {};

export const UnitCanSleep = ( whichUnit: unit ): boolean => {};

export const UnitAddSleepPerm = ( whichUnit: unit, add: boolean ): void => {};

export const UnitCanSleepPerm = ( whichUnit: unit ): boolean => {};

export const UnitIsSleeping = ( whichUnit: unit ): boolean => {};

export const UnitWakeUp = ( whichUnit: unit ): void => {};

export const UnitApplyTimedLife = ( whichUnit: unit, buffId: number, duration: number ): void => {};

export const UnitIgnoreAlarm = ( whichUnit: unit, flag: boolean ): boolean => {};

export const UnitIgnoreAlarmToggled = ( whichUnit: unit ): boolean => {};

export const UnitResetCooldown = ( whichUnit: unit ): void => {};

export const UnitSetConstructionProgress = ( whichUnit: unit, constructionPercentage: number ): void => {};

export const UnitSetUpgradeProgress = ( whichUnit: unit, upgradePercentage: number ): void => {};

export const UnitPauseTimedLife = ( whichUnit: unit, flag: boolean ): void => {};

export const UnitSetUsesAltIcon = ( whichUnit: unit, flag: boolean ): void => {};

export const UnitDamagePoint = ( whichUnit: unit, delay: number, radius: number, x: number, y: number, amount: number, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype ): boolean => {};

export const UnitDamageTarget = ( whichUnit: unit, target: widget, amount: number, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype ): boolean => {};

export const IssueImmediateOrder = ( whichUnit: unit, order: string ): boolean => {};

export const IssueImmediateOrderById = ( whichUnit: unit, order: number ): boolean => {};

export const IssuePointOrder = ( whichUnit: unit, order: string, x: number, y: number ): boolean => {};

export const IssuePointOrderLoc = ( whichUnit: unit, order: string, whichLocation: location ): boolean => {};

export const IssuePointOrderById = ( whichUnit: unit, order: number, x: number, y: number ): boolean => {};

export const IssuePointOrderByIdLoc = ( whichUnit: unit, order: number, whichLocation: location ): boolean => {};

export const IssueTargetOrder = ( whichUnit: unit, order: string, targetWidget: widget ): boolean => {};

export const IssueTargetOrderById = ( whichUnit: unit, order: number, targetWidget: widget ): boolean => {};

export const IssueInstantPointOrder = ( whichUnit: unit, order: string, x: number, y: number, instantTargetWidget: widget ): boolean => {};

export const IssueInstantPointOrderById = ( whichUnit: unit, order: number, x: number, y: number, instantTargetWidget: widget ): boolean => {};

export const IssueInstantTargetOrder = ( whichUnit: unit, order: string, targetWidget: widget, instantTargetWidget: widget ): boolean => {};

export const IssueInstantTargetOrderById = ( whichUnit: unit, order: number, targetWidget: widget, instantTargetWidget: widget ): boolean => {};

export const IssueBuildOrder = ( whichPeon: unit, unitToBuild: string, x: number, y: number ): boolean => {};

export const IssueBuildOrderById = ( whichPeon: unit, unitId: number, x: number, y: number ): boolean => {};

export const IssueNeutralImmediateOrder = ( forWhichPlayer: player, neutralStructure: unit, unitToBuild: string ): boolean => {};

export const IssueNeutralImmediateOrderById = ( forWhichPlayer: player, neutralStructure: unit, unitId: number ): boolean => {};

export const IssueNeutralPointOrder = ( forWhichPlayer: player, neutralStructure: unit, unitToBuild: string, x: number, y: number ): boolean => {};

export const IssueNeutralPointOrderById = ( forWhichPlayer: player, neutralStructure: unit, unitId: number, x: number, y: number ): boolean => {};

export const IssueNeutralTargetOrder = ( forWhichPlayer: player, neutralStructure: unit, unitToBuild: string, target: widget ): boolean => {};

export const IssueNeutralTargetOrderById = ( forWhichPlayer: player, neutralStructure: unit, unitId: number, target: widget ): boolean => {};

export const GetUnitCurrentOrder = ( whichUnit: unit ): number => {};

export const SetResourceAmount = ( whichUnit: unit, amount: number ): void => {};

export const AddResourceAmount = ( whichUnit: unit, amount: number ): void => {};

export const GetResourceAmount = ( whichUnit: unit ): number => {};

export const WaygateGetDestinationX = ( waygate: unit ): number => {};

export const WaygateGetDestinationY = ( waygate: unit ): number => {};

export const WaygateSetDestination = ( waygate: unit, x: number, y: number ): void => {};

export const WaygateActivate = ( waygate: unit, activate: boolean ): void => {};

export const WaygateIsActive = ( waygate: unit ): boolean => {};

export const AddItemToAllStock = ( itemId: number, currentStock: number, stockMax: number ): void => {};

export const AddItemToStock = ( whichUnit: unit, itemId: number, currentStock: number, stockMax: number ): void => {};

export const AddUnitToAllStock = ( unitId: number, currentStock: number, stockMax: number ): void => {};

export const AddUnitToStock = ( whichUnit: unit, unitId: number, currentStock: number, stockMax: number ): void => {};

export const RemoveItemFromAllStock = ( itemId: number ): void => {};

export const RemoveItemFromStock = ( whichUnit: unit, itemId: number ): void => {};

export const RemoveUnitFromAllStock = ( unitId: number ): void => {};

export const RemoveUnitFromStock = ( whichUnit: unit, unitId: number ): void => {};

export const SetAllItemTypeSlots = ( slots: number ): void => {};

export const SetAllUnitTypeSlots = ( slots: number ): void => {};

export const SetItemTypeSlots = ( whichUnit: unit, slots: number ): void => {};

export const SetUnitTypeSlots = ( whichUnit: unit, slots: number ): void => {};

export const GetUnitUserData = ( whichUnit: unit ): number => {};

export const SetUnitUserData = ( whichUnit: unit, data: number ): void => {};

// ============================================================================
// Player API
export const Player = ( number: number ): player => {};

export const GetLocalPlayer = (): player => {};

export const IsPlayerAlly = ( whichPlayer: player, otherPlayer: player ): boolean => {};

export const IsPlayerEnemy = ( whichPlayer: player, otherPlayer: player ): boolean => {};

export const IsPlayerInForce = ( whichPlayer: player, whichForce: force ): boolean => {};

export const IsPlayerObserver = ( whichPlayer: player ): boolean => {};

export const IsVisibleToPlayer = ( x: number, y: number, whichPlayer: player ): boolean => {};

export const IsLocationVisibleToPlayer = ( whichLocation: location, whichPlayer: player ): boolean => {};

export const IsFoggedToPlayer = ( x: number, y: number, whichPlayer: player ): boolean => {};

export const IsLocationFoggedToPlayer = ( whichLocation: location, whichPlayer: player ): boolean => {};

export const IsMaskedToPlayer = ( x: number, y: number, whichPlayer: player ): boolean => {};

export const IsLocationMaskedToPlayer = ( whichLocation: location, whichPlayer: player ): boolean => {};

export const GetPlayerRace = ( whichPlayer: player ): race => {};

export const GetPlayerId = ( whichPlayer: player ): number => {};

export const GetPlayerUnitCount = ( whichPlayer: player, includeIncomplete: boolean ): number => {};

export const GetPlayerTypedUnitCount = ( whichPlayer: player, unitName: string, includeIncomplete: boolean, includeUpgrades: boolean ): number => {};

export const GetPlayerStructureCount = ( whichPlayer: player, includeIncomplete: boolean ): number => {};

export const GetPlayerState = ( whichPlayer: player, whichPlayerState: playerstate ): number => {};

export const GetPlayerScore = ( whichPlayer: player, whichPlayerScore: playerscore ): number => {};

export const GetPlayerAlliance = ( sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype ): boolean => {};

export const GetPlayerHandicap = ( whichPlayer: player ): number => {};

export const GetPlayerHandicapXP = ( whichPlayer: player ): number => {};

export const SetPlayerHandicap = ( whichPlayer: player, handicap: number ): void => {};

export const SetPlayerHandicapXP = ( whichPlayer: player, handicap: number ): void => {};

export const SetPlayerTechMaxAllowed = ( whichPlayer: player, techid: number, maximum: number ): void => {};

export const GetPlayerTechMaxAllowed = ( whichPlayer: player, techid: number ): number => {};

export const AddPlayerTechResearched = ( whichPlayer: player, techid: number, levels: number ): void => {};

export const SetPlayerTechResearched = ( whichPlayer: player, techid: number, setToLevel: number ): void => {};

export const GetPlayerTechResearched = ( whichPlayer: player, techid: number, specificonly: boolean ): boolean => {};

export const GetPlayerTechCount = ( whichPlayer: player, techid: number, specificonly: boolean ): number => {};

export const SetPlayerUnitsOwner = ( whichPlayer: player, newOwner: number ): void => {};

export const CripplePlayer = ( whichPlayer: player, toWhichPlayers: force, flag: boolean ): void => {};

export const SetPlayerAbilityAvailable = ( whichPlayer: player, abilid: number, avail: boolean ): void => {};

export const SetPlayerState = ( whichPlayer: player, whichPlayerState: playerstate, value: number ): void => {};

export const RemovePlayer = ( whichPlayer: player, gameResult: playergameresult ): void => {};

// Used to store hero level data for the scorescreen
// before units are moved to neutral passive in melee games
//
export const CachePlayerHeroData = ( whichPlayer: player ): void => {};

// ============================================================================
// Fog of War API
export const SetFogStateRect = ( forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean ): void => {};

export const SetFogStateRadius = ( forWhichPlayer: player, whichState: fogstate, centerx: number, centerY: number, radius: number, useSharedVision: boolean ): void => {};

export const SetFogStateRadiusLoc = ( forWhichPlayer: player, whichState: fogstate, center: location, radius: number, useSharedVision: boolean ): void => {};

export const FogMaskEnable = ( enable: boolean ): void => {};

export const IsFogMaskEnabled = (): boolean => {};

export const FogEnable = ( enable: boolean ): void => {};

export const IsFogEnabled = (): boolean => {};

export const CreateFogModifierRect = ( forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean, afterUnits: boolean ): fogmodifier => {};

export const CreateFogModifierRadius = ( forWhichPlayer: player, whichState: fogstate, centerx: number, centerY: number, radius: number, useSharedVision: boolean, afterUnits: boolean ): fogmodifier => {};

export const CreateFogModifierRadiusLoc = ( forWhichPlayer: player, whichState: fogstate, center: location, radius: number, useSharedVision: boolean, afterUnits: boolean ): fogmodifier => {};

export const DestroyFogModifier = ( whichFogModifier: fogmodifier ): void => {};

export const FogModifierStart = ( whichFogModifier: fogmodifier ): void => {};

export const FogModifierStop = ( whichFogModifier: fogmodifier ): void => {};

// ============================================================================
// Game API
export const VersionGet = (): version => {};

export const VersionCompatible = ( whichVersion: version ): boolean => {};

export const VersionSupported = ( whichVersion: version ): boolean => {};

export const EndGame = ( doScoreScreen: boolean ): void => {};

// Async only!
export const ChangeLevel = ( newLevel: string, doScoreScreen: boolean ): void => {};

export const RestartGame = ( doScoreScreen: boolean ): void => {};

export const ReloadGame = (): void => {};

// %%% SetCampaignMenuRace is deprecated.  It must remain to support
// old maps which use it, but all new maps should use SetCampaignMenuRaceEx
export const SetCampaignMenuRace = ( r: race ): void => {};

export const SetCampaignMenuRaceEx = ( campaignIndex: number ): void => {};

export const ForceCampaignSelectScreen = (): void => {};

export const LoadGame = ( saveFileName: string, doScoreScreen: boolean ): void => {};

export const SaveGame = ( saveFileName: string ): void => {};

export const RenameSaveDirectory = ( sourceDirName: string, destDirName: string ): boolean => {};

export const RemoveSaveDirectory = ( sourceDirName: string ): boolean => {};

export const CopySaveGame = ( sourceSaveName: string, destSaveName: string ): boolean => {};

export const SaveGameExists = ( saveName: string ): boolean => {};

export const SyncSelections = (): void => {};

export const SetFloatGameState = ( whichFloatGameState: fgamestate, value: number ): void => {};

export const GetFloatGameState = ( whichFloatGameState: fgamestate ): number => {};

export const SetIntegerGameState = ( whichIntegerGameState: igamestate, value: number ): void => {};

export const GetIntegerGameState = ( whichIntegerGameState: igamestate ): number => {};

// ============================================================================
// Campaign API
export const SetTutorialCleared = ( cleared: boolean ): void => {};

export const SetMissionAvailable = ( campaignNumber: number, missionNumber: number, available: boolean ): void => {};

export const SetCampaignAvailable = ( campaignNumber: number, available: boolean ): void => {};

export const SetOpCinematicAvailable = ( campaignNumber: number, available: boolean ): void => {};

export const SetEdCinematicAvailable = ( campaignNumber: number, available: boolean ): void => {};

export const GetDefaultDifficulty = (): gamedifficulty => {};

export const SetDefaultDifficulty = ( g: gamedifficulty ): void => {};

export const SetCustomCampaignButtonVisible = ( whichButton: number, visible: boolean ): void => {};

export const GetCustomCampaignButtonVisible = ( whichButton: number ): boolean => {};

export const DoNotSaveReplay = (): void => {};

// ============================================================================
// Dialog API
export const DialogCreate = (): dialog => {};

export const DialogDestroy = ( whichDialog: dialog ): void => {};

export const DialogClear = ( whichDialog: dialog ): void => {};

export const DialogSetMessage = ( whichDialog: dialog, messageText: string ): void => {};

export const DialogAddButton = ( whichDialog: dialog, buttonText: string, hotkey: number ): button => {};

export const DialogAddQuitButton = ( whichDialog: dialog, doScoreScreen: boolean, buttonText: string, hotkey: number ): button => {};

export const DialogDisplay = ( whichPlayer: player, whichDialog: dialog, flag: boolean ): void => {};

// Creates a new or reads in an existing game cache file stored
// in the current campaign profile dir
//
export const ReloadGameCachesFromDisk = (): boolean => {};

export const InitGameCache = ( campaignFile: string ): gamecache => {};

export const SaveGameCache = ( whichCache: gamecache ): boolean => {};

export const StoreInteger = ( cache: gamecache, missionKey: string, key: string, value: number ): void => {};

export const StoreReal = ( cache: gamecache, missionKey: string, key: string, value: number ): void => {};

export const StoreBoolean = ( cache: gamecache, missionKey: string, key: string, value: boolean ): void => {};

export const StoreUnit = ( cache: gamecache, missionKey: string, key: string, whichUnit: unit ): boolean => {};

export const StoreString = ( cache: gamecache, missionKey: string, key: string, value: string ): boolean => {};

export const SyncStoredInteger = ( cache: gamecache, missionKey: string, key: string ): void => {};

export const SyncStoredReal = ( cache: gamecache, missionKey: string, key: string ): void => {};

export const SyncStoredBoolean = ( cache: gamecache, missionKey: string, key: string ): void => {};

export const SyncStoredUnit = ( cache: gamecache, missionKey: string, key: string ): void => {};

export const SyncStoredString = ( cache: gamecache, missionKey: string, key: string ): void => {};

export const HaveStoredInteger = ( cache: gamecache, missionKey: string, key: string ): boolean => {};

export const HaveStoredReal = ( cache: gamecache, missionKey: string, key: string ): boolean => {};

export const HaveStoredBoolean = ( cache: gamecache, missionKey: string, key: string ): boolean => {};

export const HaveStoredUnit = ( cache: gamecache, missionKey: string, key: string ): boolean => {};

export const HaveStoredString = ( cache: gamecache, missionKey: string, key: string ): boolean => {};

export const FlushGameCache = ( cache: gamecache ): void => {};

export const FlushStoredMission = ( cache: gamecache, missionKey: string ): void => {};

export const FlushStoredInteger = ( cache: gamecache, missionKey: string, key: string ): void => {};

export const FlushStoredReal = ( cache: gamecache, missionKey: string, key: string ): void => {};

export const FlushStoredBoolean = ( cache: gamecache, missionKey: string, key: string ): void => {};

export const FlushStoredUnit = ( cache: gamecache, missionKey: string, key: string ): void => {};

export const FlushStoredString = ( cache: gamecache, missionKey: string, key: string ): void => {};

// Will return 0 if the specified value's data is not found in the cache
export const GetStoredInteger = ( cache: gamecache, missionKey: string, key: string ): number => {};

export const GetStoredReal = ( cache: gamecache, missionKey: string, key: string ): number => {};

export const GetStoredBoolean = ( cache: gamecache, missionKey: string, key: string ): boolean => {};

export const GetStoredString = ( cache: gamecache, missionKey: string, key: string ): string => {};

export const RestoreUnit = ( cache: gamecache, missionKey: string, key: string, forWhichPlayer: player, x: number, y: number, facing: number ): unit => {};

export const InitHashtable = (): hashtable => {};

export const SaveInteger = ( table: hashtable, parentKey: number, childKey: number, value: number ): void => {};

export const SaveReal = ( table: hashtable, parentKey: number, childKey: number, value: number ): void => {};

export const SaveBoolean = ( table: hashtable, parentKey: number, childKey: number, value: boolean ): void => {};

export const SaveStr = ( table: hashtable, parentKey: number, childKey: number, value: string ): boolean => {};

export const SavePlayerHandle = ( table: hashtable, parentKey: number, childKey: number, whichPlayer: player ): boolean => {};

export const SaveWidgetHandle = ( table: hashtable, parentKey: number, childKey: number, whichWidget: widget ): boolean => {};

export const SaveDestructableHandle = ( table: hashtable, parentKey: number, childKey: number, whichDestructable: destructable ): boolean => {};

export const SaveItemHandle = ( table: hashtable, parentKey: number, childKey: number, whichItem: item ): boolean => {};

export const SaveUnitHandle = ( table: hashtable, parentKey: number, childKey: number, whichUnit: unit ): boolean => {};

export const SaveAbilityHandle = ( table: hashtable, parentKey: number, childKey: number, whichAbility: ability ): boolean => {};

export const SaveTimerHandle = ( table: hashtable, parentKey: number, childKey: number, whichTimer: timer ): boolean => {};

export const SaveTriggerHandle = ( table: hashtable, parentKey: number, childKey: number, whichTrigger: trigger ): boolean => {};

export const SaveTriggerConditionHandle = ( table: hashtable, parentKey: number, childKey: number, whichTriggercondition: triggercondition ): boolean => {};

export const SaveTriggerActionHandle = ( table: hashtable, parentKey: number, childKey: number, whichTriggeraction: triggeraction ): boolean => {};

export const SaveTriggerEventHandle = ( table: hashtable, parentKey: number, childKey: number, whichEvent: event ): boolean => {};

export const SaveForceHandle = ( table: hashtable, parentKey: number, childKey: number, whichForce: force ): boolean => {};

export const SaveGroupHandle = ( table: hashtable, parentKey: number, childKey: number, whichGroup: group ): boolean => {};

export const SaveLocationHandle = ( table: hashtable, parentKey: number, childKey: number, whichLocation: location ): boolean => {};

export const SaveRectHandle = ( table: hashtable, parentKey: number, childKey: number, whichRect: rect ): boolean => {};

export const SaveBooleanExprHandle = ( table: hashtable, parentKey: number, childKey: number, whichBoolexpr: boolexpr ): boolean => {};

export const SaveSoundHandle = ( table: hashtable, parentKey: number, childKey: number, whichSound: sound ): boolean => {};

export const SaveEffectHandle = ( table: hashtable, parentKey: number, childKey: number, whichEffect: effect ): boolean => {};

export const SaveUnitPoolHandle = ( table: hashtable, parentKey: number, childKey: number, whichUnitpool: unitpool ): boolean => {};

export const SaveItemPoolHandle = ( table: hashtable, parentKey: number, childKey: number, whichItempool: itempool ): boolean => {};

export const SaveQuestHandle = ( table: hashtable, parentKey: number, childKey: number, whichQuest: quest ): boolean => {};

export const SaveQuestItemHandle = ( table: hashtable, parentKey: number, childKey: number, whichQuestitem: questitem ): boolean => {};

export const SaveDefeatConditionHandle = ( table: hashtable, parentKey: number, childKey: number, whichDefeatcondition: defeatcondition ): boolean => {};

export const SaveTimerDialogHandle = ( table: hashtable, parentKey: number, childKey: number, whichTimerdialog: timerdialog ): boolean => {};

export const SaveLeaderboardHandle = ( table: hashtable, parentKey: number, childKey: number, whichLeaderboard: leaderboard ): boolean => {};

export const SaveMultiboardHandle = ( table: hashtable, parentKey: number, childKey: number, whichMultiboard: multiboard ): boolean => {};

export const SaveMultiboardItemHandle = ( table: hashtable, parentKey: number, childKey: number, whichMultiboarditem: multiboarditem ): boolean => {};

export const SaveTrackableHandle = ( table: hashtable, parentKey: number, childKey: number, whichTrackable: trackable ): boolean => {};

export const SaveDialogHandle = ( table: hashtable, parentKey: number, childKey: number, whichDialog: dialog ): boolean => {};

export const SaveButtonHandle = ( table: hashtable, parentKey: number, childKey: number, whichButton: button ): boolean => {};

export const SaveTextTagHandle = ( table: hashtable, parentKey: number, childKey: number, whichTexttag: texttag ): boolean => {};

export const SaveLightningHandle = ( table: hashtable, parentKey: number, childKey: number, whichLightning: lightning ): boolean => {};

export const SaveImageHandle = ( table: hashtable, parentKey: number, childKey: number, whichImage: image ): boolean => {};

export const SaveUbersplatHandle = ( table: hashtable, parentKey: number, childKey: number, whichUbersplat: ubersplat ): boolean => {};

export const SaveRegionHandle = ( table: hashtable, parentKey: number, childKey: number, whichRegion: region ): boolean => {};

export const SaveFogStateHandle = ( table: hashtable, parentKey: number, childKey: number, whichFogState: fogstate ): boolean => {};

export const SaveFogModifierHandle = ( table: hashtable, parentKey: number, childKey: number, whichFogModifier: fogmodifier ): boolean => {};

export const SaveAgentHandle = ( table: hashtable, parentKey: number, childKey: number, whichAgent: agent ): boolean => {};

export const SaveHashtableHandle = ( table: hashtable, parentKey: number, childKey: number, whichHashtable: hashtable ): boolean => {};

export const SaveFrameHandle = ( table: hashtable, parentKey: number, childKey: number, whichFrameHandle: framehandle ): boolean => {};

export const LoadInteger = ( table: hashtable, parentKey: number, childKey: number ): number => {};

export const LoadReal = ( table: hashtable, parentKey: number, childKey: number ): number => {};

export const LoadBoolean = ( table: hashtable, parentKey: number, childKey: number ): boolean => {};

export const LoadStr = ( table: hashtable, parentKey: number, childKey: number ): string => {};

export const LoadPlayerHandle = ( table: hashtable, parentKey: number, childKey: number ): player => {};

export const LoadWidgetHandle = ( table: hashtable, parentKey: number, childKey: number ): widget => {};

export const LoadDestructableHandle = ( table: hashtable, parentKey: number, childKey: number ): destructable => {};

export const LoadItemHandle = ( table: hashtable, parentKey: number, childKey: number ): item => {};

export const LoadUnitHandle = ( table: hashtable, parentKey: number, childKey: number ): unit => {};

export const LoadAbilityHandle = ( table: hashtable, parentKey: number, childKey: number ): ability => {};

export const LoadTimerHandle = ( table: hashtable, parentKey: number, childKey: number ): timer => {};

export const LoadTriggerHandle = ( table: hashtable, parentKey: number, childKey: number ): trigger => {};

export const LoadTriggerConditionHandle = ( table: hashtable, parentKey: number, childKey: number ): triggercondition => {};

export const LoadTriggerActionHandle = ( table: hashtable, parentKey: number, childKey: number ): triggeraction => {};

export const LoadTriggerEventHandle = ( table: hashtable, parentKey: number, childKey: number ): event => {};

export const LoadForceHandle = ( table: hashtable, parentKey: number, childKey: number ): force => {};

export const LoadGroupHandle = ( table: hashtable, parentKey: number, childKey: number ): group => {};

export const LoadLocationHandle = ( table: hashtable, parentKey: number, childKey: number ): location => {};

export const LoadRectHandle = ( table: hashtable, parentKey: number, childKey: number ): rect => {};

export const LoadBooleanExprHandle = ( table: hashtable, parentKey: number, childKey: number ): boolexpr => {};

export const LoadSoundHandle = ( table: hashtable, parentKey: number, childKey: number ): sound => {};

export const LoadEffectHandle = ( table: hashtable, parentKey: number, childKey: number ): effect => {};

export const LoadUnitPoolHandle = ( table: hashtable, parentKey: number, childKey: number ): unitpool => {};

export const LoadItemPoolHandle = ( table: hashtable, parentKey: number, childKey: number ): itempool => {};

export const LoadQuestHandle = ( table: hashtable, parentKey: number, childKey: number ): quest => {};

export const LoadQuestItemHandle = ( table: hashtable, parentKey: number, childKey: number ): questitem => {};

export const LoadDefeatConditionHandle = ( table: hashtable, parentKey: number, childKey: number ): defeatcondition => {};

export const LoadTimerDialogHandle = ( table: hashtable, parentKey: number, childKey: number ): timerdialog => {};

export const LoadLeaderboardHandle = ( table: hashtable, parentKey: number, childKey: number ): leaderboard => {};

export const LoadMultiboardHandle = ( table: hashtable, parentKey: number, childKey: number ): multiboard => {};

export const LoadMultiboardItemHandle = ( table: hashtable, parentKey: number, childKey: number ): multiboarditem => {};

export const LoadTrackableHandle = ( table: hashtable, parentKey: number, childKey: number ): trackable => {};

export const LoadDialogHandle = ( table: hashtable, parentKey: number, childKey: number ): dialog => {};

export const LoadButtonHandle = ( table: hashtable, parentKey: number, childKey: number ): button => {};

export const LoadTextTagHandle = ( table: hashtable, parentKey: number, childKey: number ): texttag => {};

export const LoadLightningHandle = ( table: hashtable, parentKey: number, childKey: number ): lightning => {};

export const LoadImageHandle = ( table: hashtable, parentKey: number, childKey: number ): image => {};

export const LoadUbersplatHandle = ( table: hashtable, parentKey: number, childKey: number ): ubersplat => {};

export const LoadRegionHandle = ( table: hashtable, parentKey: number, childKey: number ): region => {};

export const LoadFogStateHandle = ( table: hashtable, parentKey: number, childKey: number ): fogstate => {};

export const LoadFogModifierHandle = ( table: hashtable, parentKey: number, childKey: number ): fogmodifier => {};

export const LoadHashtableHandle = ( table: hashtable, parentKey: number, childKey: number ): hashtable => {};

export const LoadFrameHandle = ( table: hashtable, parentKey: number, childKey: number ): framehandle => {};

export const HaveSavedInteger = ( table: hashtable, parentKey: number, childKey: number ): boolean => {};

export const HaveSavedReal = ( table: hashtable, parentKey: number, childKey: number ): boolean => {};

export const HaveSavedBoolean = ( table: hashtable, parentKey: number, childKey: number ): boolean => {};

export const HaveSavedString = ( table: hashtable, parentKey: number, childKey: number ): boolean => {};

export const HaveSavedHandle = ( table: hashtable, parentKey: number, childKey: number ): boolean => {};

export const RemoveSavedInteger = ( table: hashtable, parentKey: number, childKey: number ): void => {};

export const RemoveSavedReal = ( table: hashtable, parentKey: number, childKey: number ): void => {};

export const RemoveSavedBoolean = ( table: hashtable, parentKey: number, childKey: number ): void => {};

export const RemoveSavedString = ( table: hashtable, parentKey: number, childKey: number ): void => {};

export const RemoveSavedHandle = ( table: hashtable, parentKey: number, childKey: number ): void => {};

export const FlushParentHashtable = ( table: hashtable ): void => {};

export const FlushChildHashtable = ( table: hashtable, parentKey: number ): void => {};

// ============================================================================
// Randomization API
export const GetRandomInt = ( lowBound: number, highBound: number ): number => {};

export const GetRandomReal = ( lowBound: number, highBound: number ): number => {};

export const CreateUnitPool = (): unitpool => {};

export const DestroyUnitPool = ( whichPool: unitpool ): void => {};

export const UnitPoolAddUnitType = ( whichPool: unitpool, unitId: number, weight: number ): void => {};

export const UnitPoolRemoveUnitType = ( whichPool: unitpool, unitId: number ): void => {};

export const PlaceRandomUnit = ( whichPool: unitpool, forWhichPlayer: player, x: number, y: number, facing: number ): unit => {};

export const CreateItemPool = (): itempool => {};

export const DestroyItemPool = ( whichItemPool: itempool ): void => {};

export const ItemPoolAddItemType = ( whichItemPool: itempool, itemId: number, weight: number ): void => {};

export const ItemPoolRemoveItemType = ( whichItemPool: itempool, itemId: number ): void => {};

export const PlaceRandomItem = ( whichItemPool: itempool, x: number, y: number ): item => {};

// Choose any random unit/item. (NP means Neutral Passive)
export const ChooseRandomCreep = ( level: number ): number => {};

export const ChooseRandomNPBuilding = (): number => {};

export const ChooseRandomItem = ( level: number ): number => {};

export const ChooseRandomItemEx = ( whichType: itemtype, level: number ): number => {};

export const SetRandomSeed = ( seed: number ): void => {};

// ============================================================================
// Visual API
export const SetTerrainFog = ( a: number, b: number, c: number, d: number, e: number ): void => {};

export const ResetTerrainFog = (): void => {};

export const SetUnitFog = ( a: number, b: number, c: number, d: number, e: number ): void => {};

export const SetTerrainFogEx = ( style: number, zstart: number, zend: number, density: number, red: number, green: number, blue: number ): void => {};

export const DisplayTextToPlayer = ( toPlayer: player, x: number, y: number, message: string ): void => {};

export const DisplayTimedTextToPlayer = ( toPlayer: player, x: number, y: number, duration: number, message: string ): void => {};

export const DisplayTimedTextFromPlayer = ( toPlayer: player, x: number, y: number, duration: number, message: string ): void => {};

export const ClearTextMessages = (): void => {};

export const SetDayNightModels = ( terrainDNCFile: string, unitDNCFile: string ): void => {};

export const SetSkyModel = ( skyModelFile: string ): void => {};

export const EnableUserControl = ( b: boolean ): void => {};

export const EnableUserUI = ( b: boolean ): void => {};

export const SuspendTimeOfDay = ( b: boolean ): void => {};

export const SetTimeOfDayScale = ( r: number ): void => {};

export const GetTimeOfDayScale = (): number => {};

export const ShowInterface = ( flag: boolean, fadeDuration: number ): void => {};

export const PauseGame = ( flag: boolean ): void => {};

export const UnitAddIndicator = ( whichUnit: unit, red: number, green: number, blue: number, alpha: number ): void => {};

export const AddIndicator = ( whichWidget: widget, red: number, green: number, blue: number, alpha: number ): void => {};

export const PingMinimap = ( x: number, y: number, duration: number ): void => {};

export const PingMinimapEx = ( x: number, y: number, duration: number, red: number, green: number, blue: number, extraEffects: boolean ): void => {};

export const EnableOcclusion = ( flag: boolean ): void => {};

export const SetIntroShotText = ( introText: string ): void => {};

export const SetIntroShotModel = ( introModelPath: string ): void => {};

export const EnableWorldFogBoundary = ( b: boolean ): void => {};

export const PlayModelCinematic = ( modelName: string ): void => {};

export const PlayCinematic = ( movieName: string ): void => {};

export const ForceUIKey = ( key: string ): void => {};

export const ForceUICancel = (): void => {};

export const DisplayLoadDialog = (): void => {};

export const SetAltMinimapIcon = ( iconPath: string ): void => {};

export const DisableRestartMission = ( flag: boolean ): void => {};

export const CreateTextTag = (): texttag => {};

export const DestroyTextTag = ( t: texttag ): void => {};

export const SetTextTagText = ( t: texttag, s: string, height: number ): void => {};

export const SetTextTagPos = ( t: texttag, x: number, y: number, heightOffset: number ): void => {};

export const SetTextTagPosUnit = ( t: texttag, whichUnit: unit, heightOffset: number ): void => {};

export const SetTextTagColor = ( t: texttag, red: number, green: number, blue: number, alpha: number ): void => {};

export const SetTextTagVelocity = ( t: texttag, xvel: number, yvel: number ): void => {};

export const SetTextTagVisibility = ( t: texttag, flag: boolean ): void => {};

export const SetTextTagSuspended = ( t: texttag, flag: boolean ): void => {};

export const SetTextTagPermanent = ( t: texttag, flag: boolean ): void => {};

export const SetTextTagAge = ( t: texttag, age: number ): void => {};

export const SetTextTagLifespan = ( t: texttag, lifespan: number ): void => {};

export const SetTextTagFadepoint = ( t: texttag, fadepoint: number ): void => {};

export const SetReservedLocalHeroButtons = ( reserved: number ): void => {};

export const GetAllyColorFilterState = (): number => {};

export const SetAllyColorFilterState = ( state: number ): void => {};

export const GetCreepCampFilterState = (): boolean => {};

export const SetCreepCampFilterState = ( state: boolean ): void => {};

export const EnableMinimapFilterButtons = ( enableAlly: boolean, enableCreep: boolean ): void => {};

export const EnableDragSelect = ( state: boolean, ui: boolean ): void => {};

export const EnablePreSelect = ( state: boolean, ui: boolean ): void => {};

export const EnableSelect = ( state: boolean, ui: boolean ): void => {};

// ============================================================================
// Trackable API
export const CreateTrackable = ( trackableModelPath: string, x: number, y: number, facing: number ): trackable => {};

// ============================================================================
// Quest API
export const CreateQuest = (): quest => {};

export const DestroyQuest = ( whichQuest: quest ): void => {};

export const QuestSetTitle = ( whichQuest: quest, title: string ): void => {};

export const QuestSetDescription = ( whichQuest: quest, description: string ): void => {};

export const QuestSetIconPath = ( whichQuest: quest, iconPath: string ): void => {};

export const QuestSetRequired = ( whichQuest: quest, required: boolean ): void => {};

export const QuestSetCompleted = ( whichQuest: quest, completed: boolean ): void => {};

export const QuestSetDiscovered = ( whichQuest: quest, discovered: boolean ): void => {};

export const QuestSetFailed = ( whichQuest: quest, failed: boolean ): void => {};

export const QuestSetEnabled = ( whichQuest: quest, enabled: boolean ): void => {};

export const IsQuestRequired = ( whichQuest: quest ): boolean => {};

export const IsQuestCompleted = ( whichQuest: quest ): boolean => {};

export const IsQuestDiscovered = ( whichQuest: quest ): boolean => {};

export const IsQuestFailed = ( whichQuest: quest ): boolean => {};

export const IsQuestEnabled = ( whichQuest: quest ): boolean => {};

export const QuestCreateItem = ( whichQuest: quest ): questitem => {};

export const QuestItemSetDescription = ( whichQuestItem: questitem, description: string ): void => {};

export const QuestItemSetCompleted = ( whichQuestItem: questitem, completed: boolean ): void => {};

export const IsQuestItemCompleted = ( whichQuestItem: questitem ): boolean => {};

export const CreateDefeatCondition = (): defeatcondition => {};

export const DestroyDefeatCondition = ( whichCondition: defeatcondition ): void => {};

export const DefeatConditionSetDescription = ( whichCondition: defeatcondition, description: string ): void => {};

export const FlashQuestDialogButton = (): void => {};

export const ForceQuestDialogUpdate = (): void => {};

// ============================================================================
// Timer Dialog API
export const CreateTimerDialog = ( t: timer ): timerdialog => {};

export const DestroyTimerDialog = ( whichDialog: timerdialog ): void => {};

export const TimerDialogSetTitle = ( whichDialog: timerdialog, title: string ): void => {};

export const TimerDialogSetTitleColor = ( whichDialog: timerdialog, red: number, green: number, blue: number, alpha: number ): void => {};

export const TimerDialogSetTimeColor = ( whichDialog: timerdialog, red: number, green: number, blue: number, alpha: number ): void => {};

export const TimerDialogSetSpeed = ( whichDialog: timerdialog, speedMultFactor: number ): void => {};

export const TimerDialogDisplay = ( whichDialog: timerdialog, display: boolean ): void => {};

export const IsTimerDialogDisplayed = ( whichDialog: timerdialog ): boolean => {};

export const TimerDialogSetRealTimeRemaining = ( whichDialog: timerdialog, timeRemaining: number ): void => {};

// ============================================================================
// Leaderboard API

// Create a leaderboard object
export const CreateLeaderboard = (): leaderboard => {};

export const DestroyLeaderboard = ( lb: leaderboard ): void => {};

export const LeaderboardDisplay = ( lb: leaderboard, show: boolean ): void => {};

export const IsLeaderboardDisplayed = ( lb: leaderboard ): boolean => {};

export const LeaderboardGetItemCount = ( lb: leaderboard ): number => {};

export const LeaderboardSetSizeByItemCount = ( lb: leaderboard, count: number ): void => {};

export const LeaderboardAddItem = ( lb: leaderboard, label: string, value: number, p: player ): void => {};

export const LeaderboardRemoveItem = ( lb: leaderboard, index: number ): void => {};

export const LeaderboardRemovePlayerItem = ( lb: leaderboard, p: player ): void => {};

export const LeaderboardClear = ( lb: leaderboard ): void => {};

export const LeaderboardSortItemsByValue = ( lb: leaderboard, ascending: boolean ): void => {};

export const LeaderboardSortItemsByPlayer = ( lb: leaderboard, ascending: boolean ): void => {};

export const LeaderboardSortItemsByLabel = ( lb: leaderboard, ascending: boolean ): void => {};

export const LeaderboardHasPlayerItem = ( lb: leaderboard, p: player ): boolean => {};

export const LeaderboardGetPlayerIndex = ( lb: leaderboard, p: player ): number => {};

export const LeaderboardSetLabel = ( lb: leaderboard, label: string ): void => {};

export const LeaderboardGetLabelText = ( lb: leaderboard ): string => {};

export const PlayerSetLeaderboard = ( toPlayer: player, lb: leaderboard ): void => {};

export const PlayerGetLeaderboard = ( toPlayer: player ): leaderboard => {};

export const LeaderboardSetLabelColor = ( lb: leaderboard, red: number, green: number, blue: number, alpha: number ): void => {};

export const LeaderboardSetValueColor = ( lb: leaderboard, red: number, green: number, blue: number, alpha: number ): void => {};

export const LeaderboardSetStyle = ( lb: leaderboard, showLabel: boolean, showNames: boolean, showValues: boolean, showIcons: boolean ): void => {};

export const LeaderboardSetItemValue = ( lb: leaderboard, whichItem: number, val: number ): void => {};

export const LeaderboardSetItemLabel = ( lb: leaderboard, whichItem: number, val: string ): void => {};

export const LeaderboardSetItemStyle = ( lb: leaderboard, whichItem: number, showLabel: boolean, showValue: boolean, showIcon: boolean ): void => {};

export const LeaderboardSetItemLabelColor = ( lb: leaderboard, whichItem: number, red: number, green: number, blue: number, alpha: number ): void => {};

export const LeaderboardSetItemValueColor = ( lb: leaderboard, whichItem: number, red: number, green: number, blue: number, alpha: number ): void => {};

// ============================================================================
// Multiboard API
// ============================================================================

// Create a multiboard object
export const CreateMultiboard = (): multiboard => {};

export const DestroyMultiboard = ( lb: multiboard ): void => {};

export const MultiboardDisplay = ( lb: multiboard, show: boolean ): void => {};

export const IsMultiboardDisplayed = ( lb: multiboard ): boolean => {};

export const MultiboardMinimize = ( lb: multiboard, minimize: boolean ): void => {};

export const IsMultiboardMinimized = ( lb: multiboard ): boolean => {};

export const MultiboardClear = ( lb: multiboard ): void => {};

export const MultiboardSetTitleText = ( lb: multiboard, label: string ): void => {};

export const MultiboardGetTitleText = ( lb: multiboard ): string => {};

export const MultiboardSetTitleTextColor = ( lb: multiboard, red: number, green: number, blue: number, alpha: number ): void => {};

export const MultiboardGetRowCount = ( lb: multiboard ): number => {};

export const MultiboardGetColumnCount = ( lb: multiboard ): number => {};

export const MultiboardSetColumnCount = ( lb: multiboard, count: number ): void => {};

export const MultiboardSetRowCount = ( lb: multiboard, count: number ): void => {};

// broadcast settings to all items
export const MultiboardSetItemsStyle = ( lb: multiboard, showValues: boolean, showIcons: boolean ): void => {};

export const MultiboardSetItemsValue = ( lb: multiboard, value: string ): void => {};

export const MultiboardSetItemsValueColor = ( lb: multiboard, red: number, green: number, blue: number, alpha: number ): void => {};

export const MultiboardSetItemsWidth = ( lb: multiboard, width: number ): void => {};

export const MultiboardSetItemsIcon = ( lb: multiboard, iconPath: string ): void => {};

// funcs for modifying individual items
export const MultiboardGetItem = ( lb: multiboard, row: number, column: number ): multiboarditem => {};

export const MultiboardReleaseItem = ( mbi: multiboarditem ): void => {};

export const MultiboardSetItemStyle = ( mbi: multiboarditem, showValue: boolean, showIcon: boolean ): void => {};

export const MultiboardSetItemValue = ( mbi: multiboarditem, val: string ): void => {};

export const MultiboardSetItemValueColor = ( mbi: multiboarditem, red: number, green: number, blue: number, alpha: number ): void => {};

export const MultiboardSetItemWidth = ( mbi: multiboarditem, width: number ): void => {};

export const MultiboardSetItemIcon = ( mbi: multiboarditem, iconFileName: string ): void => {};

// meant to unequivocally suspend display of existing and
// subsequently displayed multiboards
//
export const MultiboardSuppressDisplay = ( flag: boolean ): void => {};

// ============================================================================
// Camera API
export const SetCameraPosition = ( x: number, y: number ): void => {};

export const SetCameraQuickPosition = ( x: number, y: number ): void => {};

export const SetCameraBounds = ( x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number ): void => {};

export const StopCamera = (): void => {};

export const ResetToGameCamera = ( duration: number ): void => {};

export const PanCameraTo = ( x: number, y: number ): void => {};

export const PanCameraToTimed = ( x: number, y: number, duration: number ): void => {};

export const PanCameraToWithZ = ( x: number, y: number, zOffsetDest: number ): void => {};

export const PanCameraToTimedWithZ = ( x: number, y: number, zOffsetDest: number, duration: number ): void => {};

export const SetCinematicCamera = ( cameraModelFile: string ): void => {};

export const SetCameraRotateMode = ( x: number, y: number, radiansToSweep: number, duration: number ): void => {};

export const SetCameraField = ( whichField: camerafield, value: number, duration: number ): void => {};

export const AdjustCameraField = ( whichField: camerafield, offset: number, duration: number ): void => {};

export const SetCameraTargetController = ( whichUnit: unit, xoffset: number, yoffset: number, inheritOrientation: boolean ): void => {};

export const SetCameraOrientController = ( whichUnit: unit, xoffset: number, yoffset: number ): void => {};

export const CreateCameraSetup = (): camerasetup => {};

export const CameraSetupSetField = ( whichSetup: camerasetup, whichField: camerafield, value: number, duration: number ): void => {};

export const CameraSetupGetField = ( whichSetup: camerasetup, whichField: camerafield ): number => {};

export const CameraSetupSetDestPosition = ( whichSetup: camerasetup, x: number, y: number, duration: number ): void => {};

export const CameraSetupGetDestPositionLoc = ( whichSetup: camerasetup ): location => {};

export const CameraSetupGetDestPositionX = ( whichSetup: camerasetup ): number => {};

export const CameraSetupGetDestPositionY = ( whichSetup: camerasetup ): number => {};

export const CameraSetupApply = ( whichSetup: camerasetup, doPan: boolean, panTimed: boolean ): void => {};

export const CameraSetupApplyWithZ = ( whichSetup: camerasetup, zDestOffset: number ): void => {};

export const CameraSetupApplyForceDuration = ( whichSetup: camerasetup, doPan: boolean, forceDuration: number ): void => {};

export const CameraSetupApplyForceDurationWithZ = ( whichSetup: camerasetup, zDestOffset: number, forceDuration: number ): void => {};

export const CameraSetTargetNoise = ( mag: number, velocity: number ): void => {};

export const CameraSetSourceNoise = ( mag: number, velocity: number ): void => {};

export const CameraSetTargetNoiseEx = ( mag: number, velocity: number, vertOnly: boolean ): void => {};

export const CameraSetSourceNoiseEx = ( mag: number, velocity: number, vertOnly: boolean ): void => {};

export const CameraSetSmoothingFactor = ( factor: number ): void => {};

export const SetCineFilterTexture = ( filename: string ): void => {};

export const SetCineFilterBlendMode = ( whichMode: blendmode ): void => {};

export const SetCineFilterTexMapFlags = ( whichFlags: texmapflags ): void => {};

export const SetCineFilterStartUV = ( minu: number, minv: number, maxu: number, maxv: number ): void => {};

export const SetCineFilterEndUV = ( minu: number, minv: number, maxu: number, maxv: number ): void => {};

export const SetCineFilterStartColor = ( red: number, green: number, blue: number, alpha: number ): void => {};

export const SetCineFilterEndColor = ( red: number, green: number, blue: number, alpha: number ): void => {};

export const SetCineFilterDuration = ( duration: number ): void => {};

export const DisplayCineFilter = ( flag: boolean ): void => {};

export const IsCineFilterDisplayed = (): boolean => {};

export const SetCinematicScene = ( portraitUnitId: number, color: playercolor, speakerTitle: string, text: string, sceneDuration: number, voiceoverDuration: number ): void => {};

export const EndCinematicScene = (): void => {};

export const ForceCinematicSubtitles = ( flag: boolean ): void => {};

export const GetCameraMargin = ( whichMargin: number ): number => {};

// These return values for the local players camera only...
export const GetCameraBoundMinX = (): number => {};

export const GetCameraBoundMinY = (): number => {};

export const GetCameraBoundMaxX = (): number => {};

export const GetCameraBoundMaxY = (): number => {};

export const GetCameraField = ( whichField: camerafield ): number => {};

export const GetCameraTargetPositionX = (): number => {};

export const GetCameraTargetPositionY = (): number => {};

export const GetCameraTargetPositionZ = (): number => {};

export const GetCameraTargetPositionLoc = (): location => {};

export const GetCameraEyePositionX = (): number => {};

export const GetCameraEyePositionY = (): number => {};

export const GetCameraEyePositionZ = (): number => {};

export const GetCameraEyePositionLoc = (): location => {};

// ============================================================================
// Sound API
//
export const NewSoundEnvironment = ( environmentName: string ): void => {};

export const CreateSound = ( fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: number, fadeOutRate: number, eaxSetting: string ): sound => {};

export const CreateSoundFilenameWithLabel = ( fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: number, fadeOutRate: number, SLKEntryName: string ): sound => {};

export const CreateSoundFromLabel = ( soundLabel: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: number, fadeOutRate: number ): sound => {};

export const CreateMIDISound = ( soundLabel: string, fadeInRate: number, fadeOutRate: number ): sound => {};

export const SetSoundParamsFromLabel = ( soundHandle: sound, soundLabel: string ): void => {};

export const SetSoundDistanceCutoff = ( soundHandle: sound, cutoff: number ): void => {};

export const SetSoundChannel = ( soundHandle: sound, channel: number ): void => {};

export const SetSoundVolume = ( soundHandle: sound, volume: number ): void => {};

export const SetSoundPitch = ( soundHandle: sound, pitch: number ): void => {};

// the following method must be called immediately after calling "StartSound"
export const SetSoundPlayPosition = ( soundHandle: sound, millisecs: number ): void => {};

// these calls are only valid if the sound was created with 3d enabled
export const SetSoundDistances = ( soundHandle: sound, minDist: number, maxDist: number ): void => {};

export const SetSoundConeAngles = ( soundHandle: sound, inside: number, outside: number, outsideVolume: number ): void => {};

export const SetSoundConeOrientation = ( soundHandle: sound, x: number, y: number, z: number ): void => {};

export const SetSoundPosition = ( soundHandle: sound, x: number, y: number, z: number ): void => {};

export const SetSoundVelocity = ( soundHandle: sound, x: number, y: number, z: number ): void => {};

export const AttachSoundToUnit = ( soundHandle: sound, whichUnit: unit ): void => {};

export const StartSound = ( soundHandle: sound ): void => {};

export const StopSound = ( soundHandle: sound, killWhenDone: boolean, fadeOut: boolean ): void => {};

export const KillSoundWhenDone = ( soundHandle: sound ): void => {};

// Music Interface. Note that if music is disabled, these calls do nothing
export const SetMapMusic = ( musicName: string, random: boolean, index: number ): void => {};

export const ClearMapMusic = (): void => {};

export const PlayMusic = ( musicName: string ): void => {};

export const PlayMusicEx = ( musicName: string, frommsecs: number, fadeinmsecs: number ): void => {};

export const StopMusic = ( fadeOut: boolean ): void => {};

export const ResumeMusic = (): void => {};

export const PlayThematicMusic = ( musicFileName: string ): void => {};

export const PlayThematicMusicEx = ( musicFileName: string, frommsecs: number ): void => {};

export const EndThematicMusic = (): void => {};

export const SetMusicVolume = ( volume: number ): void => {};

export const SetMusicPlayPosition = ( millisecs: number ): void => {};

export const SetThematicMusicPlayPosition = ( millisecs: number ): void => {};

// other music and sound calls
export const SetSoundDuration = ( soundHandle: sound, duration: number ): void => {};

export const GetSoundDuration = ( soundHandle: sound ): number => {};

export const GetSoundFileDuration = ( musicFileName: string ): number => {};

export const VolumeGroupSetVolume = ( vgroup: volumegroup, scale: number ): void => {};

export const VolumeGroupReset = (): void => {};

export const GetSoundIsPlaying = ( soundHandle: sound ): boolean => {};

export const GetSoundIsLoading = ( soundHandle: sound ): boolean => {};

export const RegisterStackedSound = ( soundHandle: sound, byPosition: boolean, rectwidth: number, rectheight: number ): void => {};

export const UnregisterStackedSound = ( soundHandle: sound, byPosition: boolean, rectwidth: number, rectheight: number ): void => {};

// ============================================================================
// Effects API
//
export const AddWeatherEffect = ( where: rect, effectID: number ): weathereffect => {};

export const RemoveWeatherEffect = ( whichEffect: weathereffect ): void => {};

export const EnableWeatherEffect = ( whichEffect: weathereffect, enable: boolean ): void => {};

export const TerrainDeformCrater = ( x: number, y: number, radius: number, depth: number, duration: number, permanent: boolean ): terraindeformation => {};

export const TerrainDeformRipple = ( x: number, y: number, radius: number, depth: number, duration: number, count: number, spaceWaves: number, timeWaves: number, radiusStartPct: number, limitNeg: boolean ): terraindeformation => {};

export const TerrainDeformWave = ( x: number, y: number, dirX: number, dirY: number, distance: number, speed: number, radius: number, depth: number, trailTime: number, count: number ): terraindeformation => {};

export const TerrainDeformRandom = ( x: number, y: number, radius: number, minDelta: number, maxDelta: number, duration: number, updateInterval: number ): terraindeformation => {};

export const TerrainDeformStop = ( deformation: terraindeformation, duration: number ): void => {};

export const TerrainDeformStopAll = (): void => {};

export const AddSpecialEffect = ( modelName: string, x: number, y: number ): effect => {};

export const AddSpecialEffectLoc = ( modelName: string, where: location ): effect => {};

export const AddSpecialEffectTarget = ( modelName: string, targetWidget: widget, attachPointName: string ): effect => {};

export const DestroyEffect = ( whichEffect: effect ): void => {};

export const AddSpellEffect = ( abilityString: string, t: effecttype, x: number, y: number ): effect => {};

export const AddSpellEffectLoc = ( abilityString: string, t: effecttype, where: location ): effect => {};

export const AddSpellEffectById = ( abilityId: number, t: effecttype, x: number, y: number ): effect => {};

export const AddSpellEffectByIdLoc = ( abilityId: number, t: effecttype, where: location ): effect => {};

export const AddSpellEffectTarget = ( modelName: string, t: effecttype, targetWidget: widget, attachPoint: string ): effect => {};

export const AddSpellEffectTargetById = ( abilityId: number, t: effecttype, targetWidget: widget, attachPoint: string ): effect => {};

export const AddLightning = ( codeName: string, checkVisibility: boolean, x1: number, y1: number, x2: number, y2: number ): lightning => {};

export const AddLightningEx = ( codeName: string, checkVisibility: boolean, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number ): lightning => {};

export const DestroyLightning = ( whichBolt: lightning ): boolean => {};

export const MoveLightning = ( whichBolt: lightning, checkVisibility: boolean, x1: number, y1: number, x2: number, y2: number ): boolean => {};

export const MoveLightningEx = ( whichBolt: lightning, checkVisibility: boolean, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number ): boolean => {};

export const GetLightningColorA = ( whichBolt: lightning ): number => {};

export const GetLightningColorR = ( whichBolt: lightning ): number => {};

export const GetLightningColorG = ( whichBolt: lightning ): number => {};

export const GetLightningColorB = ( whichBolt: lightning ): number => {};

export const SetLightningColor = ( whichBolt: lightning, r: number, g: number, b: number, a: number ): boolean => {};

export const GetAbilityEffect = ( abilityString: string, t: effecttype, index: number ): string => {};

export const GetAbilityEffectById = ( abilityId: number, t: effecttype, index: number ): string => {};

export const GetAbilitySound = ( abilityString: string, t: soundtype ): string => {};

export const GetAbilitySoundById = ( abilityId: number, t: soundtype ): string => {};

// ============================================================================
// Terrain API
//
export const GetTerrainCliffLevel = ( x: number, y: number ): number => {};

export const SetWaterBaseColor = ( red: number, green: number, blue: number, alpha: number ): void => {};

export const SetWaterDeforms = ( val: boolean ): void => {};

export const GetTerrainType = ( x: number, y: number ): number => {};

export const GetTerrainVariance = ( x: number, y: number ): number => {};

export const SetTerrainType = ( x: number, y: number, terrainType: number, variation: number, area: number, shape: number ): void => {};

export const IsTerrainPathable = ( x: number, y: number, t: pathingtype ): boolean => {};

export const SetTerrainPathable = ( x: number, y: number, t: pathingtype, flag: boolean ): void => {};

// ============================================================================
// Image API
//
export const CreateImage = ( file: string, sizeX: number, sizeY: number, sizeZ: number, posX: number, posY: number, posZ: number, originX: number, originY: number, originZ: number, imageType: number ): image => {};

export const DestroyImage = ( whichImage: image ): void => {};

export const ShowImage = ( whichImage: image, flag: boolean ): void => {};

export const SetImageConstantHeight = ( whichImage: image, flag: boolean, height: number ): void => {};

export const SetImagePosition = ( whichImage: image, x: number, y: number, z: number ): void => {};

export const SetImageColor = ( whichImage: image, red: number, green: number, blue: number, alpha: number ): void => {};

export const SetImageRender = ( whichImage: image, flag: boolean ): void => {};

export const SetImageRenderAlways = ( whichImage: image, flag: boolean ): void => {};

export const SetImageAboveWater = ( whichImage: image, flag: boolean, useWaterAlpha: boolean ): void => {};

export const SetImageType = ( whichImage: image, imageType: number ): void => {};

// ============================================================================
// Ubersplat API
//
export const CreateUbersplat = ( x: number, y: number, name: string, red: number, green: number, blue: number, alpha: number, forcePaused: boolean, noBirthTime: boolean ): ubersplat => {};

export const DestroyUbersplat = ( whichSplat: ubersplat ): void => {};

export const ResetUbersplat = ( whichSplat: ubersplat ): void => {};

export const FinishUbersplat = ( whichSplat: ubersplat ): void => {};

export const ShowUbersplat = ( whichSplat: ubersplat, flag: boolean ): void => {};

export const SetUbersplatRender = ( whichSplat: ubersplat, flag: boolean ): void => {};

export const SetUbersplatRenderAlways = ( whichSplat: ubersplat, flag: boolean ): void => {};

// ============================================================================
// Blight API
//
export const SetBlight = ( whichPlayer: player, x: number, y: number, radius: number, addBlight: boolean ): void => {};

export const SetBlightRect = ( whichPlayer: player, r: rect, addBlight: boolean ): void => {};

export const SetBlightPoint = ( whichPlayer: player, x: number, y: number, addBlight: boolean ): void => {};

export const SetBlightLoc = ( whichPlayer: player, whichLocation: location, radius: number, addBlight: boolean ): void => {};

export const CreateBlightedGoldmine = ( id: player, x: number, y: number, face: number ): unit => {};

export const IsPointBlighted = ( x: number, y: number ): boolean => {};

// ============================================================================
// Doodad API
//
export const SetDoodadAnimation = ( x: number, y: number, radius: number, doodadID: number, nearestOnly: boolean, animName: string, animRandom: boolean ): void => {};

export const SetDoodadAnimationRect = ( r: rect, doodadID: number, animName: string, animRandom: boolean ): void => {};

// ============================================================================
// Computer AI interface
//
export const StartMeleeAI = ( num: player, script: string ): void => {};

export const StartCampaignAI = ( num: player, script: string ): void => {};

export const CommandAI = ( num: player, command: number, data: number ): void => {};

export const PauseCompAI = ( p: player, pause: boolean ): void => {};

export const GetAIDifficulty = ( num: player ): aidifficulty => {};

export const RemoveGuardPosition = ( hUnit: unit ): void => {};

export const RecycleGuardPosition = ( hUnit: unit ): void => {};

export const RemoveAllGuardPositions = ( num: player ): void => {};

// ============================================================================
export const Cheat = ( cheatStr: string ): void => {};

export const IsNoVictoryCheat = (): boolean => {};

export const IsNoDefeatCheat = (): boolean => {};

export const Preload = ( filename: string ): void => {};

export const PreloadEnd = ( timeout: number ): void => {};

export const PreloadStart = (): void => {};

export const PreloadRefresh = (): void => {};

export const PreloadEndEx = (): void => {};

export const PreloadGenClear = (): void => {};

export const PreloadGenStart = (): void => {};

export const PreloadGenEnd = ( filename: string ): void => {};

export const Preloader = ( filename: string ): void => {};

// Automation Test
export const AutomationSetTestType = ( testType: string ): void => {};

export const AutomationTestStart = ( testName: string ): void => {};

export const AutomationTestEnd = (): void => {};

export const AutomationTestingFinished = (): void => {};

// JAPI Functions
export const BlzGetTriggerPlayerMouseX = (): number => {};

export const BlzGetTriggerPlayerMouseY = (): number => {};

export const BlzGetTriggerPlayerMousePosition = (): location => {};

export const BlzGetTriggerPlayerMouseButton = (): mousebuttontype => {};

export const BlzSetAbilityTooltip = ( abilCode: number, tooltip: string, level: number ): void => {};

export const BlzSetAbilityActivatedTooltip = ( abilCode: number, tooltip: string, level: number ): void => {};

export const BlzSetAbilityExtendedTooltip = ( abilCode: number, extendedTooltip: string, level: number ): void => {};

export const BlzSetAbilityActivatedExtendedTooltip = ( abilCode: number, extendedTooltip: string, level: number ): void => {};

export const BlzSetAbilityResearchTooltip = ( abilCode: number, researchTooltip: string, level: number ): void => {};

export const BlzSetAbilityResearchExtendedTooltip = ( abilCode: number, researchExtendedTooltip: string, level: number ): void => {};

export const BlzGetAbilityTooltip = ( abilCode: number, level: number ): string => {};

export const BlzGetAbilityActivatedTooltip = ( abilCode: number, level: number ): string => {};

export const BlzGetAbilityExtendedTooltip = ( abilCode: number, level: number ): string => {};

export const BlzGetAbilityActivatedExtendedTooltip = ( abilCode: number, level: number ): string => {};

export const BlzGetAbilityResearchTooltip = ( abilCode: number, level: number ): string => {};

export const BlzGetAbilityResearchExtendedTooltip = ( abilCode: number, level: number ): string => {};

export const BlzSetAbilityIcon = ( abilCode: number, iconPath: string ): void => {};

export const BlzGetAbilityIcon = ( abilCode: number ): string => {};

export const BlzSetAbilityActivatedIcon = ( abilCode: number, iconPath: string ): void => {};

export const BlzGetAbilityActivatedIcon = ( abilCode: number ): string => {};

export const BlzGetAbilityPosX = ( abilCode: number ): number => {};

export const BlzGetAbilityPosY = ( abilCode: number ): number => {};

export const BlzSetAbilityPosX = ( abilCode: number, x: number ): void => {};

export const BlzSetAbilityPosY = ( abilCode: number, y: number ): void => {};

export const BlzGetAbilityActivatedPosX = ( abilCode: number ): number => {};

export const BlzGetAbilityActivatedPosY = ( abilCode: number ): number => {};

export const BlzSetAbilityActivatedPosX = ( abilCode: number, x: number ): void => {};

export const BlzSetAbilityActivatedPosY = ( abilCode: number, y: number ): void => {};

export const BlzGetUnitMaxHP = ( whichUnit: unit ): number => {};

export const BlzSetUnitMaxHP = ( whichUnit: unit, hp: number ): void => {};

export const BlzGetUnitMaxMana = ( whichUnit: unit ): number => {};

export const BlzSetUnitMaxMana = ( whichUnit: unit, mana: number ): void => {};

export const BlzSetItemName = ( whichItem: item, name: string ): void => {};

export const BlzSetItemDescription = ( whichItem: item, description: string ): void => {};

export const BlzGetItemDescription = ( whichItem: item ): string => {};

export const BlzSetItemTooltip = ( whichItem: item, tooltip: string ): void => {};

export const BlzGetItemTooltip = ( whichItem: item ): string => {};

export const BlzSetItemExtendedTooltip = ( whichItem: item, extendedTooltip: string ): void => {};

export const BlzGetItemExtendedTooltip = ( whichItem: item ): string => {};

export const BlzSetItemIconPath = ( whichItem: item, iconPath: string ): void => {};

export const BlzGetItemIconPath = ( whichItem: item ): string => {};

export const BlzSetUnitName = ( whichUnit: unit, name: string ): void => {};

export const BlzSetHeroProperName = ( whichUnit: unit, heroProperName: string ): void => {};

export const BlzGetUnitBaseDamage = ( whichUnit: unit, weaponIndex: number ): number => {};

export const BlzSetUnitBaseDamage = ( whichUnit: unit, baseDamage: number, weaponIndex: number ): void => {};

export const BlzGetUnitDiceNumber = ( whichUnit: unit, weaponIndex: number ): number => {};

export const BlzSetUnitDiceNumber = ( whichUnit: unit, diceNumber: number, weaponIndex: number ): void => {};

export const BlzGetUnitDiceSides = ( whichUnit: unit, weaponIndex: number ): number => {};

export const BlzSetUnitDiceSides = ( whichUnit: unit, diceSides: number, weaponIndex: number ): void => {};

export const BlzGetUnitAttackCooldown = ( whichUnit: unit, weaponIndex: number ): number => {};

export const BlzSetUnitAttackCooldown = ( whichUnit: unit, cooldown: number, weaponIndex: number ): void => {};

export const BlzSetSpecialEffectColorByPlayer = ( whichEffect: effect, whichPlayer: player ): void => {};

export const BlzSetSpecialEffectColor = ( whichEffect: effect, r: number, g: number, b: number ): void => {};

export const BlzSetSpecialEffectAlpha = ( whichEffect: effect, alpha: number ): void => {};

export const BlzSetSpecialEffectScale = ( whichEffect: effect, scale: number ): void => {};

export const BlzSetSpecialEffectPosition = ( whichEffect: effect, x: number, y: number, z: number ): void => {};

export const BlzSetSpecialEffectHeight = ( whichEffect: effect, height: number ): void => {};

export const BlzSetSpecialEffectTimeScale = ( whichEffect: effect, timeScale: number ): void => {};

export const BlzSetSpecialEffectTime = ( whichEffect: effect, time: number ): void => {};

export const BlzSetSpecialEffectOrientation = ( whichEffect: effect, yaw: number, pitch: number, roll: number ): void => {};

export const BlzSetSpecialEffectYaw = ( whichEffect: effect, yaw: number ): void => {};

export const BlzSetSpecialEffectPitch = ( whichEffect: effect, pitch: number ): void => {};

export const BlzSetSpecialEffectRoll = ( whichEffect: effect, roll: number ): void => {};

export const BlzSetSpecialEffectX = ( whichEffect: effect, x: number ): void => {};

export const BlzSetSpecialEffectY = ( whichEffect: effect, y: number ): void => {};

export const BlzSetSpecialEffectZ = ( whichEffect: effect, z: number ): void => {};

export const BlzSetSpecialEffectPositionLoc = ( whichEffect: effect, loc: location ): void => {};

export const BlzGetLocalSpecialEffectX = ( whichEffect: effect ): number => {};

export const BlzGetLocalSpecialEffectY = ( whichEffect: effect ): number => {};

export const BlzGetLocalSpecialEffectZ = ( whichEffect: effect ): number => {};

export const BlzSpecialEffectClearSubAnimations = ( whichEffect: effect ): void => {};

export const BlzSpecialEffectRemoveSubAnimation = ( whichEffect: effect, whichSubAnim: subanimtype ): void => {};

export const BlzSpecialEffectAddSubAnimation = ( whichEffect: effect, whichSubAnim: subanimtype ): void => {};

export const BlzPlaySpecialEffect = ( whichEffect: effect, whichAnim: animtype ): void => {};

export const BlzPlaySpecialEffectWithTimeScale = ( whichEffect: effect, whichAnim: animtype, timeScale: number ): void => {};

export const BlzGetAnimName = ( whichAnim: animtype ): string => {};

export const BlzGetUnitArmor = ( whichUnit: unit ): number => {};

export const BlzSetUnitArmor = ( whichUnit: unit, armorAmount: number ): void => {};

export const BlzUnitHideAbility = ( whichUnit: unit, abilId: number, flag: boolean ): void => {};

export const BlzUnitDisableAbility = ( whichUnit: unit, abilId: number, flag: boolean, hideUI: boolean ): void => {};

export const BlzUnitCancelTimedLife = ( whichUnit: unit ): void => {};

export const BlzIsUnitSelectable = ( whichUnit: unit ): boolean => {};

export const BlzIsUnitInvulnerable = ( whichUnit: unit ): boolean => {};

export const BlzUnitInterruptAttack = ( whichUnit: unit ): void => {};

export const BlzGetUnitCollisionSize = ( whichUnit: unit ): number => {};

export const BlzGetAbilityManaCost = ( abilId: number, level: number ): number => {};

export const BlzGetAbilityCooldown = ( abilId: number, level: number ): number => {};

export const BlzSetUnitAbilityCooldown = ( whichUnit: unit, abilId: number, level: number, cooldown: number ): void => {};

export const BlzGetUnitAbilityCooldown = ( whichUnit: unit, abilId: number, level: number ): number => {};

export const BlzGetUnitAbilityCooldownRemaining = ( whichUnit: unit, abilId: number ): number => {};

export const BlzEndUnitAbilityCooldown = ( whichUnit: unit, abilCode: number ): void => {};

export const BlzGetUnitAbilityManaCost = ( whichUnit: unit, abilId: number, level: number ): number => {};

export const BlzSetUnitAbilityManaCost = ( whichUnit: unit, abilId: number, level: number, manaCost: number ): void => {};

export const BlzGetLocalUnitZ = ( whichUnit: unit ): number => {};

export const BlzDecPlayerTechResearched = ( whichPlayer: player, techid: number, levels: number ): void => {};

export const BlzSetEventDamage = ( damage: number ): void => {};

export const BlzGetEventDamageTarget = (): unit => {};

export const BlzGetEventAttackType = (): attacktype => {};

export const BlzGetEventDamageType = (): damagetype => {};

export const BlzGetEventWeaponType = (): weapontype => {};

export const BlzSetEventAttackType = ( attackType: attacktype ): boolean => {};

export const BlzSetEventDamageType = ( damageType: damagetype ): boolean => {};

export const BlzSetEventWeaponType = ( weaponType: weapontype ): boolean => {};

export const RequestExtraIntegerData = ( dataType: number, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: number, param5: number, param6: number ): number => {};

export const RequestExtraBooleanData = ( dataType: number, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: number, param5: number, param6: number ): boolean => {};

export const RequestExtraStringData = ( dataType: number, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: number, param5: number, param6: number ): string => {};

export const RequestExtraRealData = ( dataType: number, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: number, param5: number, param6: number ): number => {};

// Add this function to follow the style of GetUnitX and GetUnitY, it has the same result as BlzGetLocalUnitZ
export const BlzGetUnitZ = ( whichUnit: unit ): number => {};

export const BlzEnableSelections = ( enableSelection: boolean, enableSelectionCircle: boolean ): void => {};

export const BlzIsSelectionEnabled = (): boolean => {};

export const BlzIsSelectionCircleEnabled = (): boolean => {};

export const BlzCameraSetupApplyForceDurationSmooth = ( whichSetup: camerasetup, doPan: boolean, forcedDuration: number, easeInDuration: number, easeOutDuration: number, smoothFactor: number ): void => {};

export const BlzEnableTargetIndicator = ( enable: boolean ): void => {};

export const BlzIsTargetIndicatorEnabled = (): boolean => {};

export const BlzGetOriginFrame = ( frameType: originframetype, index: number ): framehandle => {};

export const BlzEnableUIAutoPosition = ( enable: boolean ): void => {};

export const BlzHideOriginFrames = ( enable: boolean ): void => {};

export const BlzConvertColor = ( a: number, r: number, g: number, b: number ): number => {};

export const BlzLoadTOCFile = ( TOCFile: string ): boolean => {};

export const BlzCreateFrame = ( name: string, owner: framehandle, priority: number, createContext: number ): framehandle => {};

export const BlzCreateSimpleFrame = ( name: string, owner: framehandle, createContext: number ): framehandle => {};

export const BlzCreateFrameByType = ( typeName: string, name: string, owner: framehandle, inherits: string, createContext: number ): framehandle => {};

export const BlzDestroyFrame = ( frame: framehandle ): void => {};

export const BlzFrameSetPoint = ( frame: framehandle, point: framepointtype, relative: framehandle, relativePoint: framepointtype, x: number, y: number ): void => {};

export const BlzFrameSetAbsPoint = ( frame: framehandle, point: framepointtype, x: number, y: number ): void => {};

export const BlzFrameClearAllPoints = ( frame: framehandle ): void => {};

export const BlzFrameSetAllPoints = ( frame: framehandle, relative: framehandle ): void => {};

export const BlzFrameSetVisible = ( frame: framehandle, visible: boolean ): void => {};

export const BlzFrameIsVisible = ( frame: framehandle ): boolean => {};

export const BlzGetFrameByName = ( name: string, createContext: number ): framehandle => {};

export const BlzFrameGetName = ( frame: framehandle ): string => {};

export const BlzFrameClick = ( frame: framehandle ): void => {};

export const BlzFrameSetText = ( frame: framehandle, text: string ): void => {};

export const BlzFrameGetText = ( frame: framehandle ): string => {};

export const BlzFrameAddText = ( frame: framehandle, text: string ): void => {};

export const BlzFrameSetTextSizeLimit = ( frame: framehandle, size: number ): void => {};

export const BlzFrameGetTextSizeLimit = ( frame: framehandle ): number => {};

export const BlzFrameSetTextColor = ( frame: framehandle, color: number ): void => {};

export const BlzFrameSetFocus = ( frame: framehandle, flag: boolean ): void => {};

export const BlzFrameSetModel = ( frame: framehandle, modelFile: string, cameraIndex: number ): void => {};

export const BlzFrameSetEnable = ( frame: framehandle, enabled: boolean ): void => {};

export const BlzFrameGetEnable = ( frame: framehandle ): boolean => {};

export const BlzFrameSetAlpha = ( frame: framehandle, alpha: number ): void => {};

export const BlzFrameGetAlpha = ( frame: framehandle ): number => {};

export const BlzFrameSetSpriteAnimate = ( frame: framehandle, primaryProp: number, flags: number ): void => {};

export const BlzFrameSetTexture = ( frame: framehandle, texFile: string, flag: number, blend: boolean ): void => {};

export const BlzFrameSetScale = ( frame: framehandle, scale: number ): void => {};

export const BlzFrameSetTooltip = ( frame: framehandle, tooltip: framehandle ): void => {};

export const BlzFrameCageMouse = ( frame: framehandle, enable: boolean ): void => {};

export const BlzFrameSetValue = ( frame: framehandle, value: number ): void => {};

export const BlzFrameGetValue = ( frame: framehandle ): number => {};

export const BlzFrameSetMinMaxValue = ( frame: framehandle, minValue: number, maxValue: number ): void => {};

export const BlzFrameSetStepSize = ( frame: framehandle, stepSize: number ): void => {};

export const BlzFrameSetSize = ( frame: framehandle, width: number, height: number ): void => {};

export const BlzFrameSetVertexColor = ( frame: framehandle, color: number ): void => {};

export const BlzFrameSetLevel = ( frame: framehandle, level: number ): void => {};

export const BlzFrameSetParent = ( frame: framehandle, parent: framehandle ): void => {};

export const BlzFrameGetParent = ( frame: framehandle ): framehandle => {};

export const BlzFrameGetHeight = ( frame: framehandle ): number => {};

export const BlzFrameGetWidth = ( frame: framehandle ): number => {};

export const BlzFrameSetFont = ( frame: framehandle, fileName: string, height: number, flags: number ): void => {};

export const BlzFrameSetTextAlignment = ( frame: framehandle, vert: textaligntype, horz: textaligntype ): void => {};

export const BlzTriggerRegisterFrameEvent = ( whichTrigger: trigger, frame: framehandle, eventId: frameeventtype ): event => {};

export const BlzGetTriggerFrame = (): framehandle => {};

export const BlzGetTriggerFrameEvent = (): frameeventtype => {};

export const BlzGetTriggerFrameValue = (): number => {};

export const BlzGetTriggerFrameText = (): string => {};

export const BlzTriggerRegisterPlayerSyncEvent = ( whichTrigger: trigger, whichPlayer: player, prefix: string, fromServer: boolean ): event => {};

export const BlzSendSyncData = ( prefix: string, data: string ): boolean => {};

export const BlzGetTriggerSyncPrefix = (): string => {};

export const BlzGetTriggerSyncData = (): string => {};

export const BlzTriggerRegisterPlayerKeyEvent = ( whichTrigger: trigger, whichPlayer: player, key: oskeytype, metaKey: number, keyDown: boolean ): event => {};

export const BlzGetTriggerPlayerKey = (): oskeytype => {};

export const BlzGetTriggerPlayerMetaKey = (): number => {};

export const BlzGetTriggerPlayerIsKeyDown = (): boolean => {};

export const BlzEnableCursor = ( enable: boolean ): void => {};

export const BlzSetMousePos = ( x: number, y: number ): void => {};

export const BlzGetLocalClientWidth = (): number => {};

export const BlzGetLocalClientHeight = (): number => {};

export const BlzIsLocalClientActive = (): boolean => {};

export const BlzGetMouseFocusUnit = (): unit => {};

export const BlzChangeMinimapTerrainTex = ( texFile: string ): boolean => {};

export const BlzGetLocale = (): string => {};

export const BlzGetSpecialEffectScale = ( whichEffect: effect ): number => {};

export const BlzSetSpecialEffectMatrixScale = ( whichEffect: effect, x: number, y: number, z: number ): void => {};

export const BlzResetSpecialEffectMatrix = ( whichEffect: effect ): void => {};

export const BlzGetUnitAbility = ( whichUnit: unit, abilId: number ): ability => {};

export const BlzGetUnitAbilityByIndex = ( whichUnit: unit, index: number ): ability => {};

export const BlzDisplayChatMessage = ( whichPlayer: player, recipient: number, message: string ): void => {};

export const BlzPauseUnitEx = ( whichUnit: unit, flag: boolean ): void => {};

// native BlzFourCC2S                                 takes integer value returns string
// native BlzS2FourCC                                 takes string value returns integer

// Bit Operations
export const BlzBitOr = ( x: number, y: number ): number => {};

export const BlzBitAnd = ( x: number, y: number ): number => {};

export const BlzBitXor = ( x: number, y: number ): number => {};

// Intanced Object Operations
// Ability
export const BlzGetAbilityBooleanField = ( whichAbility: ability, whichField: abilitybooleanfield ): boolean => {};

export const BlzGetAbilityIntegerField = ( whichAbility: ability, whichField: abilitynumberfield ): number => {};

export const BlzGetAbilityRealField = ( whichAbility: ability, whichField: abilitynumberfield ): number => {};

export const BlzGetAbilityStringField = ( whichAbility: ability, whichField: abilitystringfield ): string => {};

export const BlzGetAbilityBooleanLevelField = ( whichAbility: ability, whichField: abilitybooleanlevelfield, level: number ): boolean => {};

export const BlzGetAbilityIntegerLevelField = ( whichAbility: ability, whichField: abilitynumberlevelfield, level: number ): number => {};

export const BlzGetAbilityRealLevelField = ( whichAbility: ability, whichField: abilitynumberlevelfield, level: number ): number => {};

export const BlzGetAbilityStringLevelField = ( whichAbility: ability, whichField: abilitystringlevelfield, level: number ): string => {};

export const BlzGetAbilityBooleanLevelArrayField = ( whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: number, index: number ): boolean => {};

export const BlzGetAbilityIntegerLevelArrayField = ( whichAbility: ability, whichField: abilitynumberlevelarrayfield, level: number, index: number ): number => {};

export const BlzGetAbilityRealLevelArrayField = ( whichAbility: ability, whichField: abilitynumberlevelarrayfield, level: number, index: number ): number => {};

export const BlzGetAbilityStringLevelArrayField = ( whichAbility: ability, whichField: abilitystringlevelarrayfield, level: number, index: number ): string => {};

export const BlzSetAbilityBooleanField = ( whichAbility: ability, whichField: abilitybooleanfield, value: boolean ): boolean => {};

export const BlzSetAbilityIntegerField = ( whichAbility: ability, whichField: abilitynumberfield, value: number ): boolean => {};

export const BlzSetAbilityRealField = ( whichAbility: ability, whichField: abilitynumberfield, value: number ): boolean => {};

export const BlzSetAbilityStringField = ( whichAbility: ability, whichField: abilitystringfield, value: string ): boolean => {};

export const BlzSetAbilityBooleanLevelField = ( whichAbility: ability, whichField: abilitybooleanlevelfield, level: number, value: boolean ): boolean => {};

export const BlzSetAbilityIntegerLevelField = ( whichAbility: ability, whichField: abilitynumberlevelfield, level: number, value: number ): boolean => {};

export const BlzSetAbilityRealLevelField = ( whichAbility: ability, whichField: abilitynumberlevelfield, level: number, value: number ): boolean => {};

export const BlzSetAbilityStringLevelField = ( whichAbility: ability, whichField: abilitystringlevelfield, level: number, value: string ): boolean => {};

export const BlzSetAbilityBooleanLevelArrayField = ( whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: number, index: number, value: boolean ): boolean => {};

export const BlzSetAbilityIntegerLevelArrayField = ( whichAbility: ability, whichField: abilitynumberlevelarrayfield, level: number, index: number, value: number ): boolean => {};

export const BlzSetAbilityRealLevelArrayField = ( whichAbility: ability, whichField: abilitynumberlevelarrayfield, level: number, index: number, value: number ): boolean => {};

export const BlzSetAbilityStringLevelArrayField = ( whichAbility: ability, whichField: abilitystringlevelarrayfield, level: number, index: number, value: string ): boolean => {};

export const BlzAddAbilityBooleanLevelArrayField = ( whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: number, value: boolean ): boolean => {};

export const BlzAddAbilityIntegerLevelArrayField = ( whichAbility: ability, whichField: abilitynumberlevelarrayfield, level: number, value: number ): boolean => {};

export const BlzAddAbilityRealLevelArrayField = ( whichAbility: ability, whichField: abilitynumberlevelarrayfield, level: number, value: number ): boolean => {};

export const BlzAddAbilityStringLevelArrayField = ( whichAbility: ability, whichField: abilitystringlevelarrayfield, level: number, value: string ): boolean => {};

export const BlzRemoveAbilityBooleanLevelArrayField = ( whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: number, value: boolean ): boolean => {};

export const BlzRemoveAbilityIntegerLevelArrayField = ( whichAbility: ability, whichField: abilitynumberlevelarrayfield, level: number, value: number ): boolean => {};

export const BlzRemoveAbilityRealLevelArrayField = ( whichAbility: ability, whichField: abilitynumberlevelarrayfield, level: number, value: number ): boolean => {};

export const BlzRemoveAbilityStringLevelArrayField = ( whichAbility: ability, whichField: abilitystringlevelarrayfield, level: number, value: string ): boolean => {};

// Item
export const BlzGetItemAbilityByIndex = ( whichItem: item, index: number ): ability => {};

export const BlzGetItemAbility = ( whichItem: item, abilCode: number ): ability => {};

export const BlzItemAddAbility = ( whichItem: item, abilCode: number ): boolean => {};

export const BlzGetItemBooleanField = ( whichItem: item, whichField: itembooleanfield ): boolean => {};

export const BlzGetItemIntegerField = ( whichItem: item, whichField: itemnumberfield ): number => {};

export const BlzGetItemRealField = ( whichItem: item, whichField: itemnumberfield ): number => {};

export const BlzGetItemStringField = ( whichItem: item, whichField: itemstringfield ): string => {};

export const BlzSetItemBooleanField = ( whichItem: item, whichField: itembooleanfield, value: boolean ): boolean => {};

export const BlzSetItemIntegerField = ( whichItem: item, whichField: itemnumberfield, value: number ): boolean => {};

export const BlzSetItemRealField = ( whichItem: item, whichField: itemnumberfield, value: number ): boolean => {};

export const BlzSetItemStringField = ( whichItem: item, whichField: itemstringfield, value: string ): boolean => {};

export const BlzItemRemoveAbility = ( whichItem: item, abilCode: number ): boolean => {};

// Unit
export const BlzGetUnitBooleanField = ( whichUnit: unit, whichField: unitbooleanfield ): boolean => {};

export const BlzGetUnitIntegerField = ( whichUnit: unit, whichField: unitnumberfield ): number => {};

export const BlzGetUnitRealField = ( whichUnit: unit, whichField: unitnumberfield ): number => {};

export const BlzGetUnitStringField = ( whichUnit: unit, whichField: unitstringfield ): string => {};

export const BlzSetUnitBooleanField = ( whichUnit: unit, whichField: unitbooleanfield, value: boolean ): boolean => {};

export const BlzSetUnitIntegerField = ( whichUnit: unit, whichField: unitnumberfield, value: number ): boolean => {};

export const BlzSetUnitRealField = ( whichUnit: unit, whichField: unitnumberfield, value: number ): boolean => {};

export const BlzSetUnitStringField = ( whichUnit: unit, whichField: unitstringfield, value: string ): boolean => {};

// Unit Weapon
export const BlzGetUnitWeaponBooleanField = ( whichUnit: unit, whichField: unitweaponbooleanfield, index: number ): boolean => {};

export const BlzGetUnitWeaponIntegerField = ( whichUnit: unit, whichField: unitweaponnumberfield, index: number ): number => {};

export const BlzGetUnitWeaponRealField = ( whichUnit: unit, whichField: unitweaponnumberfield, index: number ): number => {};

export const BlzGetUnitWeaponStringField = ( whichUnit: unit, whichField: unitweaponstringfield, index: number ): string => {};

export const BlzSetUnitWeaponBooleanField = ( whichUnit: unit, whichField: unitweaponbooleanfield, index: number, value: boolean ): boolean => {};

export const BlzSetUnitWeaponIntegerField = ( whichUnit: unit, whichField: unitweaponnumberfield, index: number, value: number ): boolean => {};

export const BlzSetUnitWeaponRealField = ( whichUnit: unit, whichField: unitweaponnumberfield, index: number, value: number ): boolean => {};

export const BlzSetUnitWeaponStringField = ( whichUnit: unit, whichField: unitweaponstringfield, index: number, value: string ): boolean => {};

