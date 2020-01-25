
import { contextIndexer, getAgent, contextConverter, getHandle } from "../../handles";
import { notImplemented } from "../../errors";
import { PlayerClass } from "../../PlayerClass";

const getGamestate = contextIndexer( ( id ): gamestate => ( { ...getAgent(), gamestateId: id } ) );
const getEvent = contextIndexer( ( id ): eventid => ( { ...getHandle(), eventidId: id } ) );

export const ConvertRace = contextConverter( ( id ): race => ( { ...getHandle(), raceId: id } ) );
export const ConvertAllianceType = contextConverter( ( id ): alliancetype => ( { ...getHandle(), alliancetypeId: id } ) );
export const ConvertRacePref = contextConverter( ( id ): racepreference => ( { ...getHandle(), racepreferenceId: id } ) );
export const ConvertIGameState = contextConverter( ( id ): igamestate => ( { ...getGamestate(), igamestateId: id } ) );
export const ConvertFGameState = contextConverter( ( id ): fgamestate => ( { ...getGamestate(), fgamestateId: id } ) );
export const ConvertPlayerState = contextConverter( ( id ): playerstate => ( { ...getHandle(), playerstateId: id } ) );
export const ConvertPlayerScore = contextConverter( ( id ): playerscore => ( { ...getHandle(), playerscoreId: id } ) );
export const ConvertPlayerGameResult = contextConverter( ( id ): playergameresult => ( { ...getHandle(), playergameresultId: id } ) );
export const ConvertUnitState = contextConverter( ( id ): unitstate => ( { ...getHandle(), unitstateId: id } ) );
export const ConvertAIDifficulty = contextConverter( ( id ): aidifficulty => ( { ...getHandle(), aidifficultyId: id } ) );
export const ConvertGameEvent = contextConverter( ( id ): gameevent => ( { ...getEvent(), gameeventId: id } ) );
export const ConvertPlayerEvent = contextConverter( ( id ): playerevent => ( { ...getEvent(), playereventId: id } ) );
export const ConvertPlayerUnitEvent = contextConverter( ( id ): playerunitevent => ( { ...getEvent(), playeruniteventId: id } ) );
export const ConvertWidgetEvent = contextConverter( ( id ): widgetevent => ( { ...getEvent(), widgeteventId: id } ) );
export const ConvertDialogEvent = contextConverter( ( id ): dialogevent => ( { ...getEvent(), dialogeventId: id } ) );
export const ConvertUnitEvent = contextConverter( ( id ): unitevent => ( { ...getEvent(), uniteventId: id } ) );
export const ConvertLimitOp = contextConverter( ( id ): limitop => ( { ...getEvent(), limitopId: id } ) );
export const ConvertUnitType = contextConverter( ( id ): unittype => ( { ...getHandle(), unittypeId: id } ) );
export const ConvertGameSpeed = contextConverter( ( id ): gamespeed => ( { ...getHandle(), gamespeedId: id } ) );
export const ConvertPlacement = contextConverter( ( id ): placement => ( { ...getHandle(), placementId: id } ) );
export const ConvertStartLocPrio = contextConverter( ( id ): startlocprio => ( { ...getHandle(), startlocprioId: id } ) );
export const ConvertGameDifficulty = contextConverter( ( id ): gamedifficulty => ( { ...getHandle(), gamedifficultyId: id } ) );
export const ConvertGameType = contextConverter( ( id ): gametype => ( { ...getHandle(), gametypeId: id } ) );
export const ConvertMapFlag = contextConverter( ( id ): mapflag => ( { ...getHandle(), mapflagId: id } ) );
export const ConvertMapVisibility = contextConverter( ( id ): mapvisibility => ( { ...getHandle(), mapvisibilityId: id } ) );
export const ConvertMapSetting = contextConverter( ( id ): mapsetting => ( { ...getHandle(), mapsettingId: id } ) );
export const ConvertMapDensity = contextConverter( ( id ): mapdensity => ( { ...getHandle(), mapdensityId: id } ) );
export const ConvertMapControl = contextConverter( ( id ): mapcontrol => ( { ...getHandle(), mapcontrolId: id } ) );
export const ConvertPlayerColor = contextConverter( ( id ): playercolor => ( { ...getHandle(), playercolorId: id } ) );
export const ConvertPlayerSlotState = contextConverter( ( id ): playerslotstate => ( { ...getHandle(), playerslotstateId: id } ) );
export const ConvertVolumeGroup = contextConverter( ( id ): volumegroup => ( { ...getHandle(), volumegroupId: id } ) );
export const ConvertCameraField = contextConverter( ( id ): camerafield => ( { ...getHandle(), camerafieldId: id } ) );
export const ConvertBlendMode = contextConverter( ( id ): blendmode => ( { ...getHandle(), blendmodeId: id } ) );
export const ConvertRarityControl = contextConverter( ( id ): raritycontrol => ( { ...getHandle(), raritycontrolId: id } ) );
export const ConvertTexMapFlags = contextConverter( ( id ): texmapflags => ( { ...getHandle(), texmapflagsId: id } ) );
export const ConvertFogState = contextConverter( ( id ): fogstate => ( { ...getHandle(), fogstateId: id } ) );
export const ConvertEffectType = contextConverter( ( id ): effecttype => ( { ...getHandle(), effecttypeId: id } ) );
export const ConvertVersion = contextConverter( ( id ): version => ( { ...getHandle(), versionId: id } ) );
export const ConvertItemType = contextConverter( ( id ): itemtype => ( { ...getHandle(), itemtypeId: id } ) );
export const ConvertAttackType = contextConverter( ( id ): attacktype => ( { ...getHandle(), attacktypeId: id } ) );
export const ConvertDamageType = contextConverter( ( id ): damagetype => ( { ...getHandle(), damagetypeId: id } ) );
export const ConvertWeaponType = contextConverter( ( id ): weapontype => ( { ...getHandle(), weapontypeId: id } ) );
export const ConvertSoundType = contextConverter( ( id ): soundtype => ( { ...getHandle(), soundtypeId: id } ) );
export const ConvertPathingType = contextConverter( ( id ): pathingtype => ( { ...getHandle(), pathingtypeId: id } ) );
export const ConvertMouseButtonType = contextConverter( ( id ): mousebuttontype => ( { ...getHandle(), mousebuttontypeId: id } ) );
export const ConvertAnimType = contextConverter( ( id ): animtype => ( { ...getHandle(), animtypeId: id } ) );
export const ConvertSubAnimType = contextConverter( ( id ): subanimtype => ( { ...getHandle(), subanimtypeId: id } ) );
export const ConvertOriginFrameType = contextConverter( ( id ): originframetype => ( { ...getHandle(), originframetypeId: id } ) );
export const ConvertFramePointType = contextConverter( ( id ): framepointtype => ( { ...getHandle(), framepointtypeId: id } ) );
export const ConvertTextAlignType = contextConverter( ( id ): textaligntype => ( { ...getHandle(), textaligntypeId: id } ) );
export const ConvertFrameEventType = contextConverter( ( id ): frameeventtype => ( { ...getHandle(), frameeventtypeId: id } ) );
export const ConvertOsKeyType = contextConverter( ( id ): oskeytype => ( { ...getHandle(), oskeytypeId: id } ) );
export const ConvertAbilityIntegerField = contextConverter( ( id ): abilityintegerfield => ( { ...getHandle(), abilityintegerfieldId: id } ) );
export const ConvertAbilityRealField = contextConverter( ( id ): abilityintegerfield => ( { ...getHandle(), abilityintegerfieldId: id } ) );
export const ConvertAbilityBooleanField = contextConverter( ( id ): abilitybooleanfield => ( { ...getHandle(), abilitybooleanfieldId: id } ) );
export const ConvertAbilityStringField = contextConverter( ( id ): abilitystringfield => ( { ...getHandle(), abilitystringfieldId: id } ) );
export const ConvertAbilityIntegerLevelField = contextConverter( ( id ): abilityintegerlevelfield => ( { ...getHandle(), abilityintegerlevelfieldId: id } ) );
export const ConvertAbilityRealLevelField = contextConverter( ( id ): abilityreallevelfield => ( { ...getHandle(), abilityreallevelfieldId: id } ) );
export const ConvertAbilityBooleanLevelField = contextConverter( ( id ): abilitybooleanlevelfield => ( { ...getHandle(), abilitybooleanlevelfieldId: id } ) );
export const ConvertAbilityStringLevelField = contextConverter( ( id ): abilitystringlevelfield => ( { ...getHandle(), abilitystringlevelfieldId: id } ) );
export const ConvertAbilityIntegerLevelArrayField = contextConverter( ( id ): abilityintegerlevelarrayfield => ( { ...getHandle(), abilityintegerlevelarrayfieldId: id } ) );
export const ConvertAbilityRealLevelArrayField = contextConverter( ( id ): abilityreallevelarrayfield => ( { ...getHandle(), abilityreallevelarrayfieldId: id } ) );
export const ConvertAbilityBooleanLevelArrayField = contextConverter( ( id ): abilitybooleanlevelarrayfield => ( { ...getHandle(), abilitybooleanlevelarrayfieldId: id } ) );
export const ConvertAbilityStringLevelArrayField = contextConverter( ( id ): abilitystringlevelarrayfield => ( { ...getHandle(), abilitystringlevelarrayfieldId: id } ) );
export const ConvertUnitIntegerField = contextConverter( ( id ): unitintegerfield => ( { ...getHandle(), unitintegerfieldId: id } ) );
export const ConvertUnitRealField = contextConverter( ( id ): unitrealfield => ( { ...getHandle(), unitrealfieldId: id } ) );
export const ConvertUnitBooleanField = contextConverter( ( id ): unitbooleanfield => ( { ...getHandle(), unitbooleanfieldId: id } ) );
export const ConvertUnitStringField = contextConverter( ( id ): unitstringfield => ( { ...getHandle(), unitstringfieldId: id } ) );
export const ConvertUnitWeaponIntegerField = contextConverter( ( id ): unitweaponintegerfield => ( { ...getHandle(), unitweaponintegerfieldId: id } ) );
export const ConvertUnitWeaponRealField = contextConverter( ( id ): unitweaponrealfield => ( { ...getHandle(), unitweaponrealfieldId: id } ) );
export const ConvertUnitWeaponBooleanField = contextConverter( ( id ): unitweaponbooleanfield => ( { ...getHandle(), unitweaponbooleanfieldId: id } ) );
export const ConvertUnitWeaponStringField = contextConverter( ( id ): unitweaponstringfield => ( { ...getHandle(), unitweaponstringfieldId: id } ) );
export const ConvertItemIntegerField = contextConverter( ( id ): itemintegerfield => ( { ...getHandle(), itemintegerfieldId: id } ) );
export const ConvertItemRealField = contextConverter( ( id ): itemrealfield => ( { ...getHandle(), itemrealfieldId: id } ) );
export const ConvertItemBooleanField = contextConverter( ( id ): itembooleanfield => ( { ...getHandle(), itembooleanfieldId: id } ) );
export const ConvertItemStringField = contextConverter( ( id ): itemstringfield => ( { ...getHandle(), itemstringfieldId: id } ) );
export const ConvertMoveType = contextConverter( ( id ): movetype => ( { ...getHandle(), movetypeId: id } ) );
export const ConvertTargetFlag = contextConverter( ( id ): targetflag => ( { ...getHandle(), targetflagId: id } ) );
export const ConvertArmorType = contextConverter( ( id ): armortype => ( { ...getHandle(), armortypeId: id } ) );
export const ConvertHeroAttribute = contextConverter( ( id ): heroattribute => ( { ...getHandle(), heroattributeId: id } ) );
export const ConvertDefenseType = contextConverter( ( id ): defensetype => ( { ...getHandle(), defensetypeId: id } ) );
export const ConvertRegenType = contextConverter( ( id ): regentype => ( { ...getHandle(), regentypeId: id } ) );
export const ConvertUnitCategory = contextConverter( ( id ): unitcategory => ( { ...getHandle(), unitcategoryId: id } ) );
export const ConvertPathingFlag = contextConverter( ( id ): pathingflag => ( { ...getHandle(), pathingflagId: id } ) );

export const initStartLocation = (): StartLocation => ( { x: 0, y: 0, priorities: [] } );
export const getPlayer = contextConverter( ( id ): player => new PlayerClass( id ) );

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const OrderId = ( orderIdString: string ): number => {

	notImplemented( "OrderId" );
	return 0;

};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const OrderId2String = ( orderId: number ): string => {

	notImplemented( "OrderId2String" );
	return "";

};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const UnitId = ( unitIdString: string ): number => {

	notImplemented( "UnitId" );
	return 0;

};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const UnitId2String = ( unitId: number ): string => {

	notImplemented( "UnitId2String" );
	return "";

};

// Not currently working correctly...
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const AbilityId = ( abilityIdString: string ): number => {

	notImplemented( "abilityIdString" );
	return 0;

};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const AbilityId2String = ( abilityId: number ): string => {

	notImplemented( "AbilityId2String" );
	return "";

};

// Looks up the "name" field for any object (unit, item, ability)
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const GetObjectName = ( objectId: number ): string => {

	notImplemented( "GetObjectName" );
	return "";

};
