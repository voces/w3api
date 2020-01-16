
import { mapContext } from "./contexts/map";

// type ObjectGenerator<T> = ( id: number ) => T

const indexer = (): ( ( index?: number ) => number ) => {

	let _index = 0;
	return ( index?: number ): number => {

		if ( index !== undefined && index >= _index ) _index = index + 1;
		else index = _index ++;

		return index;

	};

};

const contextIndexer = mapContext.simpleFunctionWrapper( indexer );

const getHandle = contextIndexer( ( id ): handle => ( { handleId: id } ) );
const getAgent = contextIndexer( ( id ): agent => ( { ...getHandle(), agentId: id } ) );
export const getPlayer = contextIndexer( ( id ): player => ( { ...getAgent(), playerId: id, startLocation: { x: 0, y: 0, priority: 0 } } ) );
const getGamestate = contextIndexer( ( id ): gamestate => ( { ...getAgent(), gamestateId: id } ) );
const getEvent = contextIndexer( ( id ): eventid => ( { ...getHandle(), eventidId: id } ) );

export const ConvertRace = contextIndexer( ( id ): race => ( { ...getHandle(), raceId: id } ) );
export const ConvertAllianceType = contextIndexer( ( id ): alliancetype => ( { ...getHandle(), alliancetypeId: id } ) );
export const ConvertRacePref = contextIndexer( ( id ): racepreference => ( { ...getHandle(), racepreferenceId: id } ) );
export const ConvertIGameState = contextIndexer( ( id ): igamestate => ( { ...getGamestate(), igamestateId: id } ) );
export const ConvertFGameState = contextIndexer( ( id ): fgamestate => ( { ...getGamestate(), fgamestateId: id } ) );
export const ConvertPlayerState = contextIndexer( ( id ): playerstate => ( { ...getHandle(), playerstateId: id } ) );
export const ConvertPlayerScore = contextIndexer( ( id ): playerscore => ( { ...getHandle(), playerscoreId: id } ) );
export const ConvertPlayerGameResult = contextIndexer( ( id ): playergameresult => ( { ...getHandle(), playergameresultId: id } ) );
export const ConvertUnitState = contextIndexer( ( id ): unitstate => ( { ...getHandle(), unitstateId: id } ) );
export const ConvertAIDifficulty = contextIndexer( ( id ): aidifficulty => ( { ...getHandle(), aidifficultyId: id } ) );
export const ConvertGameEvent = contextIndexer( ( id ): gameevent => ( { ...getEvent(), gameeventId: id } ) );
export const ConvertPlayerEvent = contextIndexer( ( id ): playerevent => ( { ...getEvent(), playereventId: id } ) );
export const ConvertPlayerUnitEvent = contextIndexer( ( id ): playerunitevent => ( { ...getEvent(), playeruniteventId: id } ) );
export const ConvertWidgetEvent = contextIndexer( ( id ): widgetevent => ( { ...getEvent(), widgeteventId: id } ) );
export const ConvertDialogEvent = contextIndexer( ( id ): dialogevent => ( { ...getEvent(), dialogeventId: id } ) );
export const ConvertUnitEvent = contextIndexer( ( id ): unitevent => ( { ...getEvent(), uniteventId: id } ) );
export const ConvertLimitOp = contextIndexer( ( id ): limitop => ( { ...getEvent(), limitopId: id } ) );
export const ConvertUnitType = contextIndexer( ( id ): unittype => ( { ...getHandle(), unittypeId: id } ) );
export const ConvertGameSpeed = contextIndexer( ( id ): gamespeed => ( { ...getHandle(), gamespeedId: id } ) );
export const ConvertPlacement = contextIndexer( ( id ): placement => ( { ...getHandle(), placementId: id } ) );
export const ConvertStartLocPrio = contextIndexer( ( id ): startlocprio => ( { ...getHandle(), startlocprioId: id } ) );
export const ConvertGameDifficulty = contextIndexer( ( id ): gamedifficulty => ( { ...getHandle(), gamedifficultyId: id } ) );
export const ConvertGameType = contextIndexer( ( id ): gametype => ( { ...getHandle(), gametypeId: id } ) );
export const ConvertMapFlag = contextIndexer( ( id ): mapflag => ( { ...getHandle(), mapflagId: id } ) );
export const ConvertMapVisibility = contextIndexer( ( id ): mapvisibility => ( { ...getHandle(), mapvisibilityId: id } ) );
export const ConvertMapSetting = contextIndexer( ( id ): mapsetting => ( { ...getHandle(), mapsettingId: id } ) );
export const ConvertMapDensity = contextIndexer( ( id ): mapdensity => ( { ...getHandle(), mapdensityId: id } ) );
export const ConvertMapControl = contextIndexer( ( id ): mapcontrol => ( { ...getHandle(), mapcontrolId: id } ) );
export const ConvertPlayerColor = contextIndexer( ( id ): playercolor => ( { ...getHandle(), playercolorId: id } ) );
export const ConvertPlayerSlotState = contextIndexer( ( id ): playerslotstate => ( { ...getHandle(), playerslotstateId: id } ) );
export const ConvertVolumeGroup = contextIndexer( ( id ): volumegroup => ( { ...getHandle(), volumegroupId: id } ) );
export const ConvertCameraField = contextIndexer( ( id ): camerafield => ( { ...getHandle(), camerafieldId: id } ) );
export const ConvertBlendMode = contextIndexer( ( id ): blendmode => ( { ...getHandle(), blendmodeId: id } ) );
export const ConvertRarityControl = contextIndexer( ( id ): raritycontrol => ( { ...getHandle(), raritycontrolId: id } ) );
export const ConvertTexMapFlags = contextIndexer( ( id ): texmapflags => ( { ...getHandle(), texmapflagsId: id } ) );
export const ConvertFogState = contextIndexer( ( id ): fogstate => ( { ...getHandle(), fogstateId: id } ) );
export const ConvertEffectType = contextIndexer( ( id ): effecttype => ( { ...getHandle(), effecttypeId: id } ) );
export const ConvertVersion = contextIndexer( ( id ): version => ( { ...getHandle(), versionId: id } ) );
export const ConvertItemType = contextIndexer( ( id ): itemtype => ( { ...getHandle(), itemtypeId: id } ) );
export const ConvertAttackType = contextIndexer( ( id ): attacktype => ( { ...getHandle(), attacktypeId: id } ) );
export const ConvertDamageType = contextIndexer( ( id ): damagetype => ( { ...getHandle(), damagetypeId: id } ) );
export const ConvertWeaponType = contextIndexer( ( id ): weapontype => ( { ...getHandle(), weapontypeId: id } ) );
export const ConvertSoundType = contextIndexer( ( id ): soundtype => ( { ...getHandle(), soundtypeId: id } ) );
export const ConvertPathingType = contextIndexer( ( id ): pathingtype => ( { ...getHandle(), pathingtypeId: id } ) );
export const ConvertMouseButtonType = contextIndexer( ( id ): mousebuttontype => ( { ...getHandle(), mousebuttontypeId: id } ) );
export const ConvertAnimType = contextIndexer( ( id ): animtype => ( { ...getHandle(), animtypeId: id } ) );
export const ConvertSubAnimType = contextIndexer( ( id ): subanimtype => ( { ...getHandle(), subanimtypeId: id } ) );
export const ConvertOriginFrameType = contextIndexer( ( id ): originframetype => ( { ...getHandle(), originframetypeId: id } ) );
export const ConvertFramePointType = contextIndexer( ( id ): framepointtype => ( { ...getHandle(), framepointtypeId: id } ) );
export const ConvertTextAlignType = contextIndexer( ( id ): textaligntype => ( { ...getHandle(), textaligntypeId: id } ) );
export const ConvertFrameEventType = contextIndexer( ( id ): frameeventtype => ( { ...getHandle(), frameeventtypeId: id } ) );
export const ConvertOsKeyType = contextIndexer( ( id ): oskeytype => ( { ...getHandle(), oskeytypeId: id } ) );
export const ConvertAbilityIntegerField = contextIndexer( ( id ): abilityintegerfield => ( { ...getHandle(), abilityintegerfieldId: id } ) );
export const ConvertAbilityRealField = contextIndexer( ( id ): abilityintegerfield => ( { ...getHandle(), abilityintegerfieldId: id } ) );
export const ConvertAbilityBooleanField = contextIndexer( ( id ): abilitybooleanfield => ( { ...getHandle(), abilitybooleanfieldId: id } ) );
export const ConvertAbilityStringField = contextIndexer( ( id ): abilitystringfield => ( { ...getHandle(), abilitystringfieldId: id } ) );
export const ConvertAbilityIntegerLevelField = contextIndexer( ( id ): abilityintegerlevelfield => ( { ...getHandle(), abilityintegerlevelfieldId: id } ) );
export const ConvertAbilityRealLevelField = contextIndexer( ( id ): abilityreallevelfield => ( { ...getHandle(), abilityreallevelfieldId: id } ) );
export const ConvertAbilityBooleanLevelField = contextIndexer( ( id ): abilitybooleanlevelfield => ( { ...getHandle(), abilitybooleanlevelfieldId: id } ) );
export const ConvertAbilityStringLevelField = contextIndexer( ( id ): abilitystringlevelfield => ( { ...getHandle(), abilitystringlevelfieldId: id } ) );
export const ConvertAbilityIntegerLevelArrayField = contextIndexer( ( id ): abilityintegerlevelarrayfield => ( { ...getHandle(), abilityintegerlevelarrayfieldId: id } ) );
export const ConvertAbilityRealLevelArrayField = contextIndexer( ( id ): abilityreallevelarrayfield => ( { ...getHandle(), abilityreallevelarrayfieldId: id } ) );
export const ConvertAbilityBooleanLevelArrayField = contextIndexer( ( id ): abilitybooleanlevelarrayfield => ( { ...getHandle(), abilitybooleanlevelarrayfieldId: id } ) );
export const ConvertAbilityStringLevelArrayField = contextIndexer( ( id ): abilitystringlevelarrayfield => ( { ...getHandle(), abilitystringlevelarrayfieldId: id } ) );
export const ConvertUnitIntegerField = contextIndexer( ( id ): unitintegerfield => ( { ...getHandle(), unitintegerfieldId: id } ) );
export const ConvertUnitRealField = contextIndexer( ( id ): unitrealfield => ( { ...getHandle(), unitrealfieldId: id } ) );
export const ConvertUnitBooleanField = contextIndexer( ( id ): unitbooleanfield => ( { ...getHandle(), unitbooleanfieldId: id } ) );
export const ConvertUnitStringField = contextIndexer( ( id ): unitstringfield => ( { ...getHandle(), unitstringfieldId: id } ) );
export const ConvertUnitWeaponIntegerField = contextIndexer( ( id ): unitweaponintegerfield => ( { ...getHandle(), unitweaponintegerfieldId: id } ) );
export const ConvertUnitWeaponRealField = contextIndexer( ( id ): unitweaponrealfield => ( { ...getHandle(), unitweaponrealfieldId: id } ) );
export const ConvertUnitWeaponBooleanField = contextIndexer( ( id ): unitweaponbooleanfield => ( { ...getHandle(), unitweaponbooleanfieldId: id } ) );
export const ConvertUnitWeaponStringField = contextIndexer( ( id ): unitweaponstringfield => ( { ...getHandle(), unitweaponstringfieldId: id } ) );
export const ConvertItemIntegerField = contextIndexer( ( id ): itemintegerfield => ( { ...getHandle(), itemintegerfieldId: id } ) );
export const ConvertItemRealField = contextIndexer( ( id ): itemrealfield => ( { ...getHandle(), itemrealfieldId: id } ) );
export const ConvertItemBooleanField = contextIndexer( ( id ): itembooleanfield => ( { ...getHandle(), itembooleanfieldId: id } ) );
export const ConvertItemStringField = contextIndexer( ( id ): itemstringfield => ( { ...getHandle(), itemstringfieldId: id } ) );
export const ConvertMoveType = contextIndexer( ( id ): movetype => ( { ...getHandle(), movetypeId: id } ) );
export const ConvertTargetFlag = contextIndexer( ( id ): targetflag => ( { ...getHandle(), targetflagId: id } ) );
export const ConvertArmorType = contextIndexer( ( id ): armortype => ( { ...getHandle(), armortypeId: id } ) );
export const ConvertHeroAttribute = contextIndexer( ( id ): heroattribute => ( { ...getHandle(), heroattributeId: id } ) );
export const ConvertDefenseType = contextIndexer( ( id ): defensetype => ( { ...getHandle(), defensetypeId: id } ) );
export const ConvertRegenType = contextIndexer( ( id ): regentype => ( { ...getHandle(), regentypeId: id } ) );
export const ConvertUnitCategory = contextIndexer( ( id ): unitcategory => ( { ...getHandle(), unitcategoryId: id } ) );
export const ConvertPathingFlag = contextIndexer( ( id ): pathingflag => ( { ...getHandle(), pathingflagId: id } ) );

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const OrderId = ( orderIdString: string ): number => {

	console.warn( "OrderID not implemented" );
	return 0;

};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const OrderId2String = ( orderId: number ): string => {

	console.warn( "OrderId2String not implemented" );
	return "";

};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const UnitId = ( unitIdString: string ): number => {

	console.warn( "UnitId not implemented" );
	return 0;

};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const UnitId2String = ( unitId: number ): string => {

	console.warn( "UnitId2String not implemented" );
	return "";

};

// Not currently working correctly...
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const AbilityId = ( abilityIdString: string ): number => {

	console.warn( "abilityIdString not implemented" );
	return 0;

};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const AbilityId2String = ( abilityId: number ): string => {

	console.warn( "AbilityId2String not implemented" );
	return "";

};

// Looks up the "name" field for any object (unit, item, ability)
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const GetObjectName = ( objectId: number ): string => {

	console.warn( "GetObjectName not implemented" );
	return "";

};
