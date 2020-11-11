/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { deepClone, UnitSpec } from "w3xdata";

import { notImplemented } from "../../errors";
import { wrapGame } from "../../Game";
import { contextIndexer, getWidget } from "../../handles";
import { revFourCC } from "../../helpers/string";
import { RACE_HUMAN, UNIT_TYPE_STRUCTURE } from "./constants";

// ============================================================================
// Unit API
// Facing arguments are specified in degrees
export const CreateUnit = contextIndexer(
	wrapGame(
		(
			game,
			id,
			owner: player,
			unitType: number,
			x: number,
			y: number,
			facing: number,
		): unit => {
			const prettyType = revFourCC(unitType);
			let data = game.data.units[prettyType];
			if (!data) {
				console.warn(`Uknown unit type ${prettyType} (${unitType})`);
				data = {} as UnitSpec;
			}

			const unit: unit = {
				...getWidget(),
				data: deepClone(data),
				facing,
				owner,
				type: unitType,
				unitId: id,
				x,
				y,
			};
			game.addUnit(unit);
			return unit;
		},
	),
);

export const CreateUnitByName = (
	whichPlayer: player,
	unitname: string,
	x: number,
	y: number,
	face: number,
): unit => {
	notImplemented("CreateUnitByName");
	return (null as any) as unit;
};

export const CreateUnitAtLoc = (
	id: player,
	unitid: number,
	whichLocation: location,
	face: number,
): unit => {
	notImplemented("CreateUnitAtLoc");
	return (null as any) as unit;
};

export const CreateUnitAtLocByName = (
	id: player,
	unitname: string,
	whichLocation: location,
	face: number,
): unit => {
	notImplemented("CreateUnitAtLocByName");
	return (null as any) as unit;
};

export const CreateCorpse = (
	whichPlayer: player,
	unitid: number,
	x: number,
	y: number,
	face: number,
): unit => {
	notImplemented("CreateCorpse");
	return (null as any) as unit;
};

export const KillUnit = (whichUnit: unit): void => {};

export const RemoveUnit = (whichUnit: unit): void => whichUnit.remove();

export const ShowUnit = (whichUnit: unit, show: boolean): void => {};

export const SetUnitState = (
	whichUnit: unit,
	whichUnitState: unitstate,
	newVal: number,
): void => {};

export const SetUnitX = (whichUnit: unit, newX: number): void => {};

export const SetUnitY = (whichUnit: unit, newY: number): void => {};

export const SetUnitPosition = (
	whichUnit: unit,
	newX: number,
	newY: number,
): void => {};

export const SetUnitPositionLoc = (
	whichUnit: unit,
	whichLocation: location,
): void => {};

export const SetUnitFacing = (whichUnit: unit, facingAngle: number): void => {};

export const SetUnitFacingTimed = (
	whichUnit: unit,
	facingAngle: number,
	duration: number,
): void => {};

export const SetUnitMoveSpeed = (whichUnit: unit, newSpeed: number): void => {};

export const SetUnitFlyHeight = (
	whichUnit: unit,
	newHeight: number,
	rate: number,
): void => {};

export const SetUnitTurnSpeed = (
	whichUnit: unit,
	newTurnSpeed: number,
): void => {};

export const SetUnitPropWindow = (
	whichUnit: unit,
	newPropWindowAngle: number,
): void => {};

export const SetUnitAcquireRange = (
	whichUnit: unit,
	newAcquireRange: number,
): void => {};

export const SetUnitCreepGuard = (
	whichUnit: unit,
	creepGuard: boolean,
): void => {};

export const GetUnitAcquireRange = (whichUnit: unit): number => {
	notImplemented("GetUnitAcquireRange");
	return 0;
};

export const GetUnitTurnSpeed = (whichUnit: unit): number => {
	notImplemented("GetUnitTurnSpeed");
	return 0;
};

export const GetUnitPropWindow = (whichUnit: unit): number => {
	notImplemented("GetUnitPropWindow");
	return 0;
};

export const GetUnitFlyHeight = (whichUnit: unit): number => {
	notImplemented("GetUnitFlyHeight");
	return 0;
};

export const GetUnitDefaultAcquireRange = (whichUnit: unit): number => {
	notImplemented("GetUnitDefaultAcquireRange");
	return 0;
};

export const GetUnitDefaultTurnSpeed = (whichUnit: unit): number => {
	notImplemented("GetUnitDefaultTurnSpeed");
	return 0;
};

export const GetUnitDefaultPropWindow = (whichUnit: unit): number => {
	notImplemented("GetUnitDefaultPropWindow");
	return 0;
};

export const GetUnitDefaultFlyHeight = (whichUnit: unit): number => {
	notImplemented("GetUnitDefaultFlyHeight");
	return 0;
};

export const SetUnitOwner = (
	whichUnit: unit,
	whichPlayer: player,
	changeColor: boolean,
): void => {};

export const SetUnitColor = (
	whichUnit: unit,
	whichColor: playercolor,
): void => {};

export const SetUnitScale = (
	whichUnit: unit,
	scaleX: number,
	scaleY: number,
	scaleZ: number,
): void => {};

export const SetUnitTimeScale = (
	whichUnit: unit,
	timeScale: number,
): void => {};

export const SetUnitBlendTime = (
	whichUnit: unit,
	blendTime: number,
): void => {};

export const SetUnitVertexColor = (
	whichUnit: unit,
	red: number,
	green: number,
	blue: number,
	alpha: number,
): void => {};

export const QueueUnitAnimation = (
	whichUnit: unit,
	whichAnimation: string,
): void => {};

export const SetUnitAnimation = (
	whichUnit: unit,
	whichAnimation: string,
): void => {};

export const SetUnitAnimationByIndex = (
	whichUnit: unit,
	whichAnimation: number,
): void => {};

export const SetUnitAnimationWithRarity = (
	whichUnit: unit,
	whichAnimation: string,
	rarity: raritycontrol,
): void => {};

export const AddUnitAnimationProperties = (
	whichUnit: unit,
	animProperties: string,
	add: boolean,
): void => {};

export const SetUnitLookAt = (
	whichUnit: unit,
	whichBone: string,
	lookAtTarget: unit,
	offsetX: number,
	offsetY: number,
	offsetZ: number,
): void => {};

export const ResetUnitLookAt = (whichUnit: unit): void => {};

export const SetUnitRescuable = (
	whichUnit: unit,
	byWhichPlayer: player,
	flag: boolean,
): void => {};

export const SetUnitRescueRange = (whichUnit: unit, range: number): void => {};

export const SetHeroStr = (
	whichHero: unit,
	newStr: number,
	permanent: boolean,
): void => {};

export const SetHeroAgi = (
	whichHero: unit,
	newAgi: number,
	permanent: boolean,
): void => {};

export const SetHeroInt = (
	whichHero: unit,
	newInt: number,
	permanent: boolean,
): void => {};

export const GetHeroStr = (
	whichHero: unit,
	includeBonuses: boolean,
): number => {
	notImplemented("GetHeroStr");
	return 0;
};

export const GetHeroAgi = (
	whichHero: unit,
	includeBonuses: boolean,
): number => {
	notImplemented("GetHeroAgi");
	return 0;
};

export const GetHeroInt = (
	whichHero: unit,
	includeBonuses: boolean,
): number => {
	notImplemented("GetHeroInt");
	return 0;
};

export const UnitStripHeroLevel = (
	whichHero: unit,
	howManyLevels: number,
): boolean => {
	notImplemented("UnitStripHeroLevel");
	return false;
};

export const GetHeroXP = (whichHero: unit): number => {
	notImplemented("GetHeroXP");
	return 0;
};

export const SetHeroXP = (
	whichHero: unit,
	newXpVal: number,
	showEyeCandy: boolean,
): void => {};

export const GetHeroSkillPoints = (whichHero: unit): number => {
	notImplemented("GetHeroSkillPoints");
	return 0;
};

export const UnitModifySkillPoints = (
	whichHero: unit,
	skillPointDelta: number,
): boolean => {
	notImplemented("UnitModifySkillPoints");
	return false;
};

export const AddHeroXP = (
	whichHero: unit,
	xpToAdd: number,
	showEyeCandy: boolean,
): void => {};

export const SetHeroLevel = (
	whichHero: unit,
	level: number,
	showEyeCandy: boolean,
): void => {};

export const GetHeroLevel = (whichHero: unit): number => {
	notImplemented("GetHeroLevel");
	return 0;
};

export const GetUnitLevel = (whichUnit: unit): number => {
	notImplemented("GetUnitLevel");
	return 0;
};

export const GetHeroProperName = (whichHero: unit): string => {
	notImplemented("GetHeroProperName");
	return "";
};

export const SuspendHeroXP = (whichHero: unit, flag: boolean): void => {};

export const IsSuspendedXP = (whichHero: unit): boolean => {
	notImplemented("IsSuspendedXP");
	return false;
};

export const SelectHeroSkill = (whichHero: unit, abilcode: number): void => {};

export const GetUnitAbilityLevel = (
	whichUnit: unit,
	abilcode: number,
): number => {
	notImplemented("GetUnitAbilityLevel");
	return 0;
};

export const DecUnitAbilityLevel = (
	whichUnit: unit,
	abilcode: number,
): number => {
	notImplemented("DecUnitAbilityLevel");
	return 0;
};

export const IncUnitAbilityLevel = (
	whichUnit: unit,
	abilcode: number,
): number => {
	notImplemented("IncUnitAbilityLevel");
	return 0;
};

export const SetUnitAbilityLevel = (
	whichUnit: unit,
	abilcode: number,
	level: number,
): number => {
	notImplemented("SetUnitAbilityLevel");
	return 0;
};

export const ReviveHero = (
	whichHero: unit,
	x: number,
	y: number,
	doEyecandy: boolean,
): boolean => {
	notImplemented("ReviveHero");
	return false;
};

export const ReviveHeroLoc = (
	whichHero: unit,
	loc: location,
	doEyecandy: boolean,
): boolean => {
	notImplemented("ReviveHeroLoc");
	return false;
};

export const SetUnitExploded = (whichUnit: unit, exploded: boolean): void => {};

export const SetUnitInvulnerable = (whichUnit: unit, flag: boolean): void => {};

export const PauseUnit = (whichUnit: unit, flag: boolean): void => {};

export const IsUnitPaused = (whichHero: unit): boolean => {
	notImplemented("IsUnitPaused");
	return false;
};

export const SetUnitPathing = (whichUnit: unit, flag: boolean): void => {};

export const ClearSelection = (): void => {};

export const SelectUnit = (whichUnit: unit, flag: boolean): void => {};

export const GetUnitPointValue = (whichUnit: unit): number => {
	notImplemented("GetUnitPointValue");
	return 0;
};

export const GetUnitPointValueByType = (unitType: number): number => {
	notImplemented("GetUnitPointValueByType");
	return 0;
};

// native        SetUnitPointValueByType takes integer unitType, integer newPointValue returns nothing

export const UnitAddItem = (whichUnit: unit, whichItem: item): boolean => {
	notImplemented("UnitAddItem");
	return false;
};

export const UnitAddItemById = (whichUnit: unit, itemId: number): item => {
	notImplemented("UnitAddItemById");
	return (null as any) as item;
};

export const UnitAddItemToSlotById = (
	whichUnit: unit,
	itemId: number,
	itemSlot: number,
): boolean => {
	notImplemented("UnitAddItemToSlotById");
	return false;
};

export const UnitRemoveItem = (whichUnit: unit, whichItem: item): void => {};

export const UnitRemoveItemFromSlot = (
	whichUnit: unit,
	itemSlot: number,
): item => {
	notImplemented("UnitRemoveItemFromSlot");
	return (null as any) as item;
};

export const UnitHasItem = (whichUnit: unit, whichItem: item): boolean => {
	notImplemented("UnitHasItem");
	return false;
};

export const UnitItemInSlot = (whichUnit: unit, itemSlot: number): item => {
	notImplemented("UnitItemInSlot");
	return (null as any) as item;
};

export const UnitInventorySize = (whichUnit: unit): number => {
	notImplemented("UnitInventorySize");
	return 0;
};

export const UnitDropItemPoint = (
	whichUnit: unit,
	whichItem: item,
	x: number,
	y: number,
): boolean => {
	notImplemented("UnitDropItemPoint");
	return false;
};

export const UnitDropItemSlot = (
	whichUnit: unit,
	whichItem: item,
	slot: number,
): boolean => {
	notImplemented("UnitDropItemSlot");
	return false;
};

export const UnitDropItemTarget = (
	whichUnit: unit,
	whichItem: item,
	target: widget,
): boolean => {
	notImplemented("UnitDropItemTarget");
	return false;
};

export const UnitUseItem = (whichUnit: unit, whichItem: item): boolean => {
	notImplemented("UnitUseItem");
	return false;
};

export const UnitUseItemPoint = (
	whichUnit: unit,
	whichItem: item,
	x: number,
	y: number,
): boolean => {
	notImplemented("UnitUseItemPoint");
	return false;
};

export const UnitUseItemTarget = (
	whichUnit: unit,
	whichItem: item,
	target: widget,
): boolean => {
	notImplemented("UnitUseItemTarget");
	return false;
};

export const GetUnitX = (whichUnit: unit): number => whichUnit.x;
export const GetUnitY = (whichUnit: unit): number => whichUnit.y;

export const GetUnitLoc = (whichUnit: unit): location => {
	notImplemented("GetUnitLoc");
	return (null as any) as location;
};

export const GetUnitFacing = (whichUnit: unit): number => whichUnit.facing;

export const GetUnitMoveSpeed = (whichUnit: unit): number => {
	notImplemented("GetUnitMoveSpeed");
	return 0;
};

export const GetUnitDefaultMoveSpeed = (whichUnit: unit): number => {
	notImplemented("GetUnitDefaultMoveSpeed");
	return 0;
};

export const GetUnitState = (
	whichUnit: unit,
	whichUnitState: unitstate,
): number => {
	notImplemented("GetUnitState");
	return 0;
};

export const GetOwningPlayer = (whichUnit: unit): player => whichUnit.owner;

export const GetUnitTypeId = (whichUnit: unit): number => whichUnit.type;

export const GetUnitRace = (whichUnit: unit): race => {
	notImplemented("GetUnitName");
	return RACE_HUMAN;
};

export const GetUnitName = (whichUnit: unit): string => {
	notImplemented("GetUnitName");
	return "";
};

export const GetUnitFoodUsed = (whichUnit: unit): number => {
	notImplemented("GetUnitFoodUsed");
	return 0;
};

export const GetUnitFoodMade = (whichUnit: unit): number => {
	notImplemented("GetUnitFoodMade");
	return 0;
};

export const GetFoodMade = (unitId: number): number => {
	notImplemented("GetFoodMade");
	return 0;
};

export const GetFoodUsed = (unitId: number): number => {
	notImplemented("GetFoodUsed");
	return 0;
};

export const SetUnitUseFood = (whichUnit: unit, useFood: boolean): void => {};

export const GetUnitRallyPoint = (whichUnit: unit): location => {
	notImplemented("GetUnitRallyPoint");
	return (null as any) as location;
};

export const GetUnitRallyUnit = (whichUnit: unit): unit => {
	notImplemented("GetUnitRallyUnit");
	return (null as any) as unit;
};

export const GetUnitRallyDestructable = (whichUnit: unit): destructable => {
	notImplemented("GetUnitRallyDestructable");
	return (null as any) as destructable;
};

export const IsUnitInGroup = (whichUnit: unit, whichGroup: group): boolean => {
	notImplemented("IsUnitInGroup");
	return false;
};

export const IsUnitInForce = (whichUnit: unit, whichForce: force): boolean => {
	notImplemented("IsUnitInForce");
	return false;
};

export const IsUnitOwnedByPlayer = (
	whichUnit: unit,
	whichPlayer: player,
): boolean => {
	notImplemented("IsUnitOwnedByPlayer");
	return false;
};

export const IsUnitAlly = (whichUnit: unit, whichPlayer: player): boolean => {
	notImplemented("IsUnitAlly");
	return false;
};

export const IsUnitEnemy = (whichUnit: unit, whichPlayer: player): boolean => {
	notImplemented("IsUnitEnemy");
	return false;
};

export const IsUnitVisible = (
	whichUnit: unit,
	whichPlayer: player,
): boolean => {
	notImplemented("IsUnitVisible");
	return false;
};

export const IsUnitDetected = (
	whichUnit: unit,
	whichPlayer: player,
): boolean => {
	notImplemented("IsUnitDetected");
	return false;
};

export const IsUnitInvisible = (
	whichUnit: unit,
	whichPlayer: player,
): boolean => {
	notImplemented("IsUnitInvisible");
	return false;
};

export const IsUnitFogged = (whichUnit: unit, whichPlayer: player): boolean => {
	notImplemented("IsUnitFogged");
	return false;
};

export const IsUnitMasked = (whichUnit: unit, whichPlayer: player): boolean => {
	notImplemented("IsUnitMasked");
	return false;
};

export const IsUnitSelected = (
	whichUnit: unit,
	whichPlayer: player,
): boolean => {
	notImplemented("IsUnitSelected");
	return false;
};

export const IsUnitRace = (whichUnit: unit, whichRace: race): boolean => {
	notImplemented("IsUnitRace");
	return false;
};

export const IsUnitType = (
	whichUnit: unit,
	whichUnitType: unittype,
): boolean => {
	switch (whichUnitType) {
		case UNIT_TYPE_STRUCTURE:
			return whichUnit.data.stats?.isbldg || false;
	}

	return false;
};

export const IsUnit = (whichUnit: unit, whichSpecifiedUnit: unit): boolean => {
	notImplemented("IsUnit");
	return false;
};

export const IsUnitInRange = (
	whichUnit: unit,
	otherUnit: unit,
	distance: number,
): boolean => {
	notImplemented("IsUnitInRange");
	return false;
};

export const IsUnitInRangeXY = (
	whichUnit: unit,
	x: number,
	y: number,
	distance: number,
): boolean => {
	notImplemented("IsUnitInRangeXY");
	return false;
};

export const IsUnitInRangeLoc = (
	whichUnit: unit,
	whichLocation: location,
	distance: number,
): boolean => {
	notImplemented("IsUnitInRangeLoc");
	return false;
};

export const IsUnitHidden = (whichUnit: unit): boolean => {
	notImplemented("IsUnitHidden");
	return false;
};

export const IsUnitIllusion = (whichUnit: unit): boolean => {
	notImplemented("IsUnitIllusion");
	return false;
};

export const IsUnitInTransport = (
	whichUnit: unit,
	whichTransport: unit,
): boolean => {
	notImplemented("IsUnitInTransport");
	return false;
};

export const IsUnitLoaded = (whichUnit: unit): boolean => {
	notImplemented("IsUnitLoaded");
	return false;
};

export const IsHeroUnitId = (unitId: number): boolean => {
	notImplemented("IsHeroUnitId");
	return false;
};

export const IsUnitIdType = (
	unitId: number,
	whichUnitType: unittype,
): boolean => {
	notImplemented("IsUnitIdType");
	return false;
};

export const UnitShareVision = (
	whichUnit: unit,
	whichPlayer: player,
	share: boolean,
): void => {};

export const UnitSuspendDecay = (whichUnit: unit, suspend: boolean): void => {};

export const UnitAddType = (
	whichUnit: unit,
	whichUnitType: unittype,
): boolean => {
	notImplemented("UnitAddType");
	return false;
};

export const UnitRemoveType = (
	whichUnit: unit,
	whichUnitType: unittype,
): boolean => {
	notImplemented("UnitRemoveType");
	return false;
};

export const UnitAddAbility = (whichUnit: unit, abilityId: number): boolean => {
	notImplemented("UnitAddAbility");
	return false;
};

export const UnitRemoveAbility = (
	whichUnit: unit,
	abilityId: number,
): boolean => {
	notImplemented("UnitRemoveAbility");
	return false;
};

export const UnitMakeAbilityPermanent = (
	whichUnit: unit,
	permanent: boolean,
	abilityId: number,
): boolean => {
	notImplemented("UnitMakeAbilityPermanent");
	return false;
};

export const UnitRemoveBuffs = (
	whichUnit: unit,
	removePositive: boolean,
	removeNegative: boolean,
): void => {};

export const UnitRemoveBuffsEx = (
	whichUnit: unit,
	removePositive: boolean,
	removeNegative: boolean,
	magic: boolean,
	physical: boolean,
	timedLife: boolean,
	aura: boolean,
	autoDispel: boolean,
): void => {};

export const UnitHasBuffsEx = (
	whichUnit: unit,
	removePositive: boolean,
	removeNegative: boolean,
	magic: boolean,
	physical: boolean,
	timedLife: boolean,
	aura: boolean,
	autoDispel: boolean,
): boolean => {
	notImplemented("UnitHasBuffsEx");
	return false;
};

export const UnitCountBuffsEx = (
	whichUnit: unit,
	removePositive: boolean,
	removeNegative: boolean,
	magic: boolean,
	physical: boolean,
	timedLife: boolean,
	aura: boolean,
	autoDispel: boolean,
): number => {
	notImplemented("UnitCountBuffsEx");
	return 0;
};

export const UnitAddSleep = (whichUnit: unit, add: boolean): void => {};

export const UnitCanSleep = (whichUnit: unit): boolean => {
	notImplemented("UnitCanSleep");
	return false;
};

export const UnitAddSleepPerm = (whichUnit: unit, add: boolean): void => {};

export const UnitCanSleepPerm = (whichUnit: unit): boolean => {
	notImplemented("UnitCanSleepPerm");
	return false;
};

export const UnitIsSleeping = (whichUnit: unit): boolean => {
	notImplemented("UnitIsSleeping");
	return false;
};

export const UnitWakeUp = (whichUnit: unit): void => {};

export const UnitApplyTimedLife = (
	whichUnit: unit,
	buffId: number,
	duration: number,
): void => {};

export const UnitIgnoreAlarm = (whichUnit: unit, flag: boolean): boolean => {
	notImplemented("UnitIgnoreAlarm");
	return false;
};

export const UnitIgnoreAlarmToggled = (whichUnit: unit): boolean => {
	notImplemented("UnitIgnoreAlarmToggled");
	return false;
};

export const UnitResetCooldown = (whichUnit: unit): void => {};

export const UnitSetConstructionProgress = (
	whichUnit: unit,
	constructionPercentage: number,
): void => {};

export const UnitSetUpgradeProgress = (
	whichUnit: unit,
	upgradePercentage: number,
): void => {};

export const UnitPauseTimedLife = (whichUnit: unit, flag: boolean): void => {};

export const UnitSetUsesAltIcon = (whichUnit: unit, flag: boolean): void => {};

export const UnitDamagePoint = (
	whichUnit: unit,
	delay: number,
	radius: number,
	x: number,
	y: number,
	amount: number,
	attack: boolean,
	ranged: boolean,
	attackType: attacktype,
	damageType: damagetype,
	weaponType: weapontype,
): boolean => {
	notImplemented("UnitDamagePoint");
	return false;
};

export const UnitDamageTarget = (
	whichUnit: unit,
	target: widget,
	amount: number,
	attack: boolean,
	ranged: boolean,
	attackType: attacktype,
	damageType: damagetype,
	weaponType: weapontype,
): boolean => {
	notImplemented("UnitDamageTarget");
	return false;
};

export const IssueImmediateOrder = (
	whichUnit: unit,
	order: string,
): boolean => {
	notImplemented("IssueImmediateOrder");
	return false;
};

export const IssueImmediateOrderById = (
	whichUnit: unit,
	order: number,
): boolean => {
	notImplemented("IssueImmediateOrderById");
	return false;
};

export const IssuePointOrder = (
	whichUnit: unit,
	order: string,
	x: number,
	y: number,
): boolean => {
	notImplemented("IssuePointOrder");
	return false;
};

export const IssuePointOrderLoc = (
	whichUnit: unit,
	order: string,
	whichLocation: location,
): boolean => {
	notImplemented("IssuePointOrderLoc");
	return false;
};

export const IssuePointOrderById = (
	whichUnit: unit,
	order: number,
	x: number,
	y: number,
): boolean => {
	notImplemented("IssuePointOrderById");
	return false;
};

export const IssuePointOrderByIdLoc = (
	whichUnit: unit,
	order: number,
	whichLocation: location,
): boolean => {
	notImplemented("IssuePointOrderByIdLoc");
	return false;
};

export const IssueTargetOrder = (
	whichUnit: unit,
	order: string,
	targetWidget: widget,
): boolean => {
	notImplemented("IssueTargetOrder");
	return false;
};

export const IssueTargetOrderById = (
	whichUnit: unit,
	order: number,
	targetWidget: widget,
): boolean => {
	notImplemented("IssueTargetOrderById");
	return false;
};

export const IssueInstantPointOrder = (
	whichUnit: unit,
	order: string,
	x: number,
	y: number,
	instantTargetWidget: widget,
): boolean => {
	notImplemented("IssueInstantPointOrder");
	return false;
};

export const IssueInstantPointOrderById = (
	whichUnit: unit,
	order: number,
	x: number,
	y: number,
	instantTargetWidget: widget,
): boolean => {
	notImplemented("IssueInstantPointOrderById");
	return false;
};

export const IssueInstantTargetOrder = (
	whichUnit: unit,
	order: string,
	targetWidget: widget,
	instantTargetWidget: widget,
): boolean => {
	notImplemented("IssueInstantTargetOrder");
	return false;
};

export const IssueInstantTargetOrderById = (
	whichUnit: unit,
	order: number,
	targetWidget: widget,
	instantTargetWidget: widget,
): boolean => {
	notImplemented("IssueInstantTargetOrderById");
	return false;
};

export const IssueBuildOrder = (
	whichPeon: unit,
	unitToBuild: string,
	x: number,
	y: number,
): boolean => {
	notImplemented("IssueBuildOrder");
	return false;
};

export const IssueBuildOrderById = (
	whichPeon: unit,
	unitId: number,
	x: number,
	y: number,
): boolean => {
	notImplemented("IssueBuildOrderById");
	return false;
};

export const IssueNeutralImmediateOrder = (
	forWhichPlayer: player,
	neutralStructure: unit,
	unitToBuild: string,
): boolean => {
	notImplemented("IssueNeutralImmediateOrder");
	return false;
};

export const IssueNeutralImmediateOrderById = (
	forWhichPlayer: player,
	neutralStructure: unit,
	unitId: number,
): boolean => {
	notImplemented("IssueNeutralImmediateOrderById");
	return false;
};

export const IssueNeutralPointOrder = (
	forWhichPlayer: player,
	neutralStructure: unit,
	unitToBuild: string,
	x: number,
	y: number,
): boolean => {
	notImplemented("IssueNeutralPointOrder");
	return false;
};

export const IssueNeutralPointOrderById = (
	forWhichPlayer: player,
	neutralStructure: unit,
	unitId: number,
	x: number,
	y: number,
): boolean => {
	notImplemented("IssueNeutralPointOrderById");
	return false;
};

export const IssueNeutralTargetOrder = (
	forWhichPlayer: player,
	neutralStructure: unit,
	unitToBuild: string,
	target: widget,
): boolean => {
	notImplemented("IssueNeutralTargetOrder");
	return false;
};

export const IssueNeutralTargetOrderById = (
	forWhichPlayer: player,
	neutralStructure: unit,
	unitId: number,
	target: widget,
): boolean => {
	notImplemented("IssueNeutralTargetOrderById");
	return false;
};

export const GetUnitCurrentOrder = (whichUnit: unit): number => {
	notImplemented("GetUnitCurrentOrder");
	return 0;
};

export const SetResourceAmount = (whichUnit: unit, amount: number): void => {};

export const AddResourceAmount = (whichUnit: unit, amount: number): void => {};

export const GetResourceAmount = (whichUnit: unit): number => {
	notImplemented("GetResourceAmount");
	return 0;
};

export const WaygateGetDestinationX = (waygate: unit): number => {
	notImplemented("WaygateGetDestinationX");
	return 0;
};

export const WaygateGetDestinationY = (waygate: unit): number => {
	notImplemented("WaygateGetDestinationY");
	return 0;
};

export const WaygateSetDestination = (
	waygate: unit,
	x: number,
	y: number,
): void => {};

export const WaygateActivate = (waygate: unit, activate: boolean): void => {};

export const WaygateIsActive = (waygate: unit): boolean => {
	notImplemented("WaygateIsActive");
	return false;
};

export const AddItemToAllStock = (
	itemId: number,
	currentStock: number,
	stockMax: number,
): void => {};

export const AddItemToStock = (
	whichUnit: unit,
	itemId: number,
	currentStock: number,
	stockMax: number,
): void => {};

export const AddUnitToAllStock = (
	unitId: number,
	currentStock: number,
	stockMax: number,
): void => {};

export const AddUnitToStock = (
	whichUnit: unit,
	unitId: number,
	currentStock: number,
	stockMax: number,
): void => {};

export const RemoveItemFromAllStock = (itemId: number): void => {};

export const RemoveItemFromStock = (
	whichUnit: unit,
	itemId: number,
): void => {};

export const RemoveUnitFromAllStock = (unitId: number): void => {};

export const RemoveUnitFromStock = (
	whichUnit: unit,
	unitId: number,
): void => {};

export const SetAllItemTypeSlots = (slots: number): void => {};

export const SetAllUnitTypeSlots = (slots: number): void => {};

export const SetItemTypeSlots = (whichUnit: unit, slots: number): void => {};

export const SetUnitTypeSlots = (whichUnit: unit, slots: number): void => {};

export const GetUnitUserData = (whichUnit: unit): number => {
	notImplemented("GetUnitUserData");
	return 0;
};

export const SetUnitUserData = (whichUnit: unit, data: number): void => {};
