
import { wrapGame } from "../../Game";
import { contextIndexer, getWidget } from "../../handles";
import { FourCCRev } from "../../helpers/string";
import { deepClone } from "w3xdata";

// ============================================================================
// Unit API
// Facing arguments are specified in degrees
export const CreateUnit = contextIndexer( wrapGame( ( game, id, owner: player, unitType: number, x: number, y: number, facing: number ): unit => {

	const prettyType = FourCCRev( unitType );
	let data = game.data.units[ prettyType ];
	if ( ! data ) {

		console.warn( `Uknown unit type ${prettyType} (${unitType})` );
		data = {};

	}

	const unit: unit = {
		...getWidget(),
		data: deepClone( data ),
		facing,
		owner,
		type: unitType,
		unitId: id,
		x,
		y,
	};
	game.addUnit( unit );
	return unit;

} ) );

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

export const IsUnitType = ( whichUnit: unit, whichUnitType: unittype ): boolean => {

	switch ( whichUnitType ) {

		case UNIT_TYPE_STRUCTURE: return whichUnit.data.stats?.isbldg || false;

	}

	return false;

};

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
