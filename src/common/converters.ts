
// import "./types";

const memoizedIndexedObject = <T>( fn: ( id: number ) => T ): ( id?: number ) => T => {

	let index = 0;
	const map: Array<T> = [];
	return ( id = index ++ ): T => map[ id ] || ( map[ id ] = fn( id ) );

};

const initHandle = memoizedIndexedObject( ( id ): handle => ( { handleId: id } ) );
const initAgent = memoizedIndexedObject( ( id ): agent => ( { ...initHandle(), agentId: id } ) );
export const initPlayer = memoizedIndexedObject( ( id ): player => ( { ...initAgent(), playerId: id, startLocation: { x: 0, y: 0 } } ) );
const initGamestate = memoizedIndexedObject( ( id ): gamestate => ( { ...initAgent(), gamestateId: id } ) );
const initEventid = memoizedIndexedObject( ( id ): eventid => ( { ...initHandle(), eventidId: id } ) );

export const ConvertRace = memoizedIndexedObject( ( id ): race => ( { ...initHandle(), raceId: id } ) );
export const ConvertAllianceType = memoizedIndexedObject( ( id ): alliancetype => ( { ...initHandle(), alliancetypeId: id } ) );
export const ConvertRacePref = memoizedIndexedObject( ( id ): racepreference => ( { ...initHandle(), racepreferenceId: id } ) );
export const ConvertIGameState = memoizedIndexedObject( ( id ): igamestate => ( { ...initGamestate(), igamestateId: id } ) );
export const ConvertFGameState = memoizedIndexedObject( ( id ): fgamestate => ( { ...initGamestate(), fgamestateId: id } ) );
export const ConvertPlayerState = memoizedIndexedObject( ( id ): playerstate => ( { ...initHandle(), playerstateId: id } ) );
export const ConvertPlayerScore = memoizedIndexedObject( ( id ): playerscore => ( { ...initHandle(), playerscoreId: id } ) );
export const ConvertPlayerGameResult = memoizedIndexedObject( ( id ): playergameresult => ( { ...initHandle(), playergameresultId: id } ) );
export const ConvertUnitState = memoizedIndexedObject( ( id ): unitstate => ( { ...initHandle(), unitstateId: id } ) );
export const ConvertAIDifficulty = memoizedIndexedObject( ( id ): aidifficulty => ( { ...initHandle(), aidifficultyId: id } ) );
export const ConvertGameEvent = memoizedIndexedObject( ( id ): gameevent => ( { ...initEventid(), gameeventId: id } ) );
export const ConvertPlayerEvent = memoizedIndexedObject( ( id ): playerevent => ( { ...initEventid(), playereventId: id } ) );
export const ConvertPlayerUnitEvent = memoizedIndexedObject( ( id ): playerunitevent => ( { ...initEventid(), playeruniteventId: id } ) );
export const ConvertWidgetEvent = memoizedIndexedObject( ( id ): widgetevent => ( { ...initEventid(), widgeteventId: id } ) );
export const ConvertDialogEvent = memoizedIndexedObject( ( id ): dialogevent => ( { ...initEventid(), dialogeventId: id } ) );
export const ConvertUnitEvent = memoizedIndexedObject( ( id ): unitevent => ( { ...initEventid(), uniteventId: id } ) );
export const ConvertLimitOp = memoizedIndexedObject( ( id ): limitop => ( { ...initEventid(), limitopId: id } ) );
export const ConvertUnitType = memoizedIndexedObject( ( id ): unittype => ( { ...initHandle(), unittypeId: id } ) );
export const ConvertGameSpeed = memoizedIndexedObject( ( id ): gamespeed => ( { ...initHandle(), gamespeedId: id } ) );
export const ConvertPlacement = memoizedIndexedObject( ( id ): placement => ( { ...initHandle(), placementId: id } ) );
export const ConvertStartLocPrio = memoizedIndexedObject( ( id ): startlocprio => ( { ...initHandle(), startlocprioId: id } ) );
export const ConvertGameDifficulty = memoizedIndexedObject( ( id ): gamedifficulty => ( { ...initHandle(), gamedifficultyId: id } ) );
export const ConvertGameType = memoizedIndexedObject( ( id ): gametype => ( { ...initHandle(), gametypeId: id } ) );
export const ConvertMapFlag = memoizedIndexedObject( ( id ): mapflag => ( { ...initHandle(), mapflagId: id } ) );
export const ConvertMapVisibility = memoizedIndexedObject( ( id ): mapvisibility => ( { ...initHandle(), mapvisibilityId: id } ) );
export const ConvertMapSetting = memoizedIndexedObject( ( id ): mapsetting => ( { ...initHandle(), mapsettingId: id } ) );
export const ConvertMapDensity = memoizedIndexedObject( ( id ): mapdensity => ( { ...initHandle(), mapdensityId: id } ) );
export const ConvertMapControl = memoizedIndexedObject( ( id ): mapcontrol => ( { ...initHandle(), mapcontrolId: id } ) );
export const ConvertPlayerColor = memoizedIndexedObject( ( id ): playercolor => ( { ...initHandle(), playercolorId: id } ) );
export const ConvertPlayerSlotState = memoizedIndexedObject( ( id ): playerslotstate => ( { ...initHandle(), playerslotstateId: id } ) );
export const ConvertVolumeGroup = memoizedIndexedObject( ( id ): volumegroup => ( { ...initHandle(), volumegroupId: id } ) );
export const ConvertCameraField = memoizedIndexedObject( ( id ): camerafield => ( { ...initHandle(), camerafieldId: id } ) );
export const ConvertBlendMode = memoizedIndexedObject( ( id ): blendmode => ( { ...initHandle(), blendmodeId: id } ) );
export const ConvertRarityControl = memoizedIndexedObject( ( id ): raritycontrol => ( { ...initHandle(), raritycontrolId: id } ) );
export const ConvertTexMapFlags = memoizedIndexedObject( ( id ): texmapflags => ( { ...initHandle(), texmapflagsId: id } ) );
export const ConvertFogState = memoizedIndexedObject( ( id ): fogstate => ( { ...initHandle(), fogstateId: id } ) );
export const ConvertEffectType = memoizedIndexedObject( ( id ): effecttype => ( { ...initHandle(), effecttypeId: id } ) );
export const ConvertVersion = memoizedIndexedObject( ( id ): version => ( { ...initHandle(), versionId: id } ) );
export const ConvertItemType = memoizedIndexedObject( ( id ): itemtype => ( { ...initHandle(), itemtypeId: id } ) );
export const ConvertAttackType = memoizedIndexedObject( ( id ): attacktype => ( { ...initHandle(), attacktypeId: id } ) );
export const ConvertDamageType = memoizedIndexedObject( ( id ): damagetype => ( { ...initHandle(), damagetypeId: id } ) );
export const ConvertWeaponType = memoizedIndexedObject( ( id ): weapontype => ( { ...initHandle(), weapontypeId: id } ) );
export const ConvertSoundType = memoizedIndexedObject( ( id ): soundtype => ( { ...initHandle(), soundtypeId: id } ) );
export const ConvertPathingType = memoizedIndexedObject( ( id ): pathingtype => ( { ...initHandle(), pathingtypeId: id } ) );
export const ConvertMouseButtonType = memoizedIndexedObject( ( id ): mousebuttontype => ( { ...initHandle(), mousebuttontypeId: id } ) );
export const ConvertAnimType = memoizedIndexedObject( ( id ): animtype => ( { ...initHandle(), animtypeId: id } ) );
export const ConvertSubAnimType = memoizedIndexedObject( ( id ): subanimtype => ( { ...initHandle(), subanimtypeId: id } ) );
export const ConvertOriginFrameType = memoizedIndexedObject( ( id ): originframetype => ( { ...initHandle(), originframetypeId: id } ) );
export const ConvertFramePointType = memoizedIndexedObject( ( id ): framepointtype => ( { ...initHandle(), framepointtypeId: id } ) );
export const ConvertTextAlignType = memoizedIndexedObject( ( id ): textaligntype => ( { ...initHandle(), textaligntypeId: id } ) );
export const ConvertFrameEventType = memoizedIndexedObject( ( id ): frameeventtype => ( { ...initHandle(), frameeventtypeId: id } ) );
export const ConvertOsKeyType = memoizedIndexedObject( ( id ): oskeytype => ( { ...initHandle(), oskeytypeId: id } ) );
export const ConvertAbilityIntegerField = memoizedIndexedObject( ( id ): abilityintegerfield => ( { ...initHandle(), abilityintegerfieldId: id } ) );
export const ConvertAbilityRealField = memoizedIndexedObject( ( id ): abilityintegerfield => ( { ...initHandle(), abilityintegerfieldId: id } ) );
export const ConvertAbilityBooleanField = memoizedIndexedObject( ( id ): abilitybooleanfield => ( { ...initHandle(), abilitybooleanfieldId: id } ) );
export const ConvertAbilityStringField = memoizedIndexedObject( ( id ): abilitystringfield => ( { ...initHandle(), abilitystringfieldId: id } ) );
export const ConvertAbilityIntegerLevelField = memoizedIndexedObject( ( id ): abilityintegerlevelfield => ( { ...initHandle(), abilityintegerlevelfieldId: id } ) );
export const ConvertAbilityRealLevelField = memoizedIndexedObject( ( id ): abilityreallevelfield => ( { ...initHandle(), abilityreallevelfieldId: id } ) );
export const ConvertAbilityBooleanLevelField = memoizedIndexedObject( ( id ): abilitybooleanlevelfield => ( { ...initHandle(), abilitybooleanlevelfieldId: id } ) );
export const ConvertAbilityStringLevelField = memoizedIndexedObject( ( id ): abilitystringlevelfield => ( { ...initHandle(), abilitystringlevelfieldId: id } ) );
export const ConvertAbilityIntegerLevelArrayField = memoizedIndexedObject( ( id ): abilityintegerlevelarrayfield => ( { ...initHandle(), abilityintegerlevelarrayfieldId: id } ) );
export const ConvertAbilityRealLevelArrayField = memoizedIndexedObject( ( id ): abilityreallevelarrayfield => ( { ...initHandle(), abilityreallevelarrayfieldId: id } ) );
export const ConvertAbilityBooleanLevelArrayField = memoizedIndexedObject( ( id ): abilitybooleanlevelarrayfield => ( { ...initHandle(), abilitybooleanlevelarrayfieldId: id } ) );
export const ConvertAbilityStringLevelArrayField = memoizedIndexedObject( ( id ): abilitystringlevelarrayfield => ( { ...initHandle(), abilitystringlevelarrayfieldId: id } ) );
export const ConvertUnitIntegerField = memoizedIndexedObject( ( id ): unitintegerfield => ( { ...initHandle(), unitintegerfieldId: id } ) );
export const ConvertUnitRealField = memoizedIndexedObject( ( id ): unitrealfield => ( { ...initHandle(), unitrealfieldId: id } ) );
export const ConvertUnitBooleanField = memoizedIndexedObject( ( id ): unitbooleanfield => ( { ...initHandle(), unitbooleanfieldId: id } ) );
export const ConvertUnitStringField = memoizedIndexedObject( ( id ): unitstringfield => ( { ...initHandle(), unitstringfieldId: id } ) );
export const ConvertUnitWeaponIntegerField = memoizedIndexedObject( ( id ): unitweaponintegerfield => ( { ...initHandle(), unitweaponintegerfieldId: id } ) );
export const ConvertUnitWeaponRealField = memoizedIndexedObject( ( id ): unitweaponrealfield => ( { ...initHandle(), unitweaponrealfieldId: id } ) );
export const ConvertUnitWeaponBooleanField = memoizedIndexedObject( ( id ): unitweaponbooleanfield => ( { ...initHandle(), unitweaponbooleanfieldId: id } ) );
export const ConvertUnitWeaponStringField = memoizedIndexedObject( ( id ): unitweaponstringfield => ( { ...initHandle(), unitweaponstringfieldId: id } ) );
export const ConvertItemIntegerField = memoizedIndexedObject( ( id ): itemintegerfield => ( { ...initHandle(), itemintegerfieldId: id } ) );
export const ConvertItemRealField = memoizedIndexedObject( ( id ): itemrealfield => ( { ...initHandle(), itemrealfieldId: id } ) );
export const ConvertItemBooleanField = memoizedIndexedObject( ( id ): itembooleanfield => ( { ...initHandle(), itembooleanfieldId: id } ) );
export const ConvertItemStringField = memoizedIndexedObject( ( id ): itemstringfield => ( { ...initHandle(), itemstringfieldId: id } ) );
export const ConvertMoveType = memoizedIndexedObject( ( id ): movetype => ( { ...initHandle(), movetypeId: id } ) );
export const ConvertTargetFlag = memoizedIndexedObject( ( id ): targetflag => ( { ...initHandle(), targetflagId: id } ) );
export const ConvertArmorType = memoizedIndexedObject( ( id ): armortype => ( { ...initHandle(), armortypeId: id } ) );
export const ConvertHeroAttribute = memoizedIndexedObject( ( id ): heroattribute => ( { ...initHandle(), heroattributeId: id } ) );
export const ConvertDefenseType = memoizedIndexedObject( ( id ): defensetype => ( { ...initHandle(), defensetypeId: id } ) );
export const ConvertRegenType = memoizedIndexedObject( ( id ): regentype => ( { ...initHandle(), regentypeId: id } ) );
export const ConvertUnitCategory = memoizedIndexedObject( ( id ): unitcategory => ( { ...initHandle(), unitcategoryId: id } ) );
export const ConvertPathingFlag = memoizedIndexedObject( ( id ): pathingflag => ( { ...initHandle(), pathingflagId: id } ) );

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
