
export * from "./common/booleanExpressions";
export * from "./common/constants";
export * from "./common/converters";
export * from "./common/forces";
export * from "./common/geometry";
export * from "./common/groups";
export * from "./common/mapApi";
export * from "./common/math";
export * from "./common/players";
export * from "./common/string";
export * from "./common/timers";
export * from "./common/triggers";
export * from "./common/visualApi";
import "./common/types";

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

export const TriggerRegisterUnitInRange = ( whichTrigger: trigger, whichUnit: unit, range: number, filter: boolexpr | null ): event => {};

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

export const EnumDestructablesInRect = ( r: rect, filter: boolexpr | null, actionFunc: code ): void => {};

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

export const EnumItemsInRect = ( r: rect, filter: boolexpr | null, actionFunc: code ): void => {};

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
export const CreateTimerDialog = ( t: timer | null ): timerdialog => {};

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
export const StartMeleeAI = ( num: player, script: string | null ): void => {};

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

export const BlzGetAbilityIntegerField = ( whichAbility: ability, whichField: abilityintegerfield ): number => {};

export const BlzGetAbilityRealField = ( whichAbility: ability, whichField: abilityintegerfield ): number => {};

export const BlzGetAbilityStringField = ( whichAbility: ability, whichField: abilitystringfield ): string => {};

export const BlzGetAbilityBooleanLevelField = ( whichAbility: ability, whichField: abilitybooleanlevelfield, level: number ): boolean => {};

export const BlzGetAbilityIntegerLevelField = ( whichAbility: ability, whichField: abilitynumberlevelfield, level: number ): number => {};

export const BlzGetAbilityRealLevelField = ( whichAbility: ability, whichField: abilitynumberlevelfield, level: number ): number => {};

export const BlzGetAbilityStringLevelField = ( whichAbility: ability, whichField: abilitystringlevelfield, level: number ): string => {};

export const BlzGetAbilityBooleanLevelArrayField = ( whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: number, index: number ): boolean => {};

export const BlzGetAbilityIntegerLevelArrayField = ( whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: number, index: number ): number => {};

export const BlzGetAbilityRealLevelArrayField = ( whichAbility: ability, whichField: abilityreallevelarrayfield, level: number, index: number ): number => {};

export const BlzGetAbilityStringLevelArrayField = ( whichAbility: ability, whichField: abilitystringlevelarrayfield, level: number, index: number ): string => {};

export const BlzSetAbilityBooleanField = ( whichAbility: ability, whichField: abilitybooleanfield, value: boolean ): boolean => {};

export const BlzSetAbilityIntegerField = ( whichAbility: ability, whichField: abilityintegerfield, value: number ): boolean => {};

export const BlzSetAbilityRealField = ( whichAbility: ability, whichField: abilityrealfield, value: number ): boolean => {};

export const BlzSetAbilityStringField = ( whichAbility: ability, whichField: abilitystringfield, value: string ): boolean => {};

export const BlzSetAbilityBooleanLevelField = ( whichAbility: ability, whichField: abilitybooleanlevelfield, level: number, value: boolean ): boolean => {};

export const BlzSetAbilityIntegerLevelField = ( whichAbility: ability, whichField: abilitynumberlevelfield, level: number, value: number ): boolean => {};

export const BlzSetAbilityRealLevelField = ( whichAbility: ability, whichField: abilitynumberlevelfield, level: number, value: number ): boolean => {};

export const BlzSetAbilityStringLevelField = ( whichAbility: ability, whichField: abilitystringlevelfield, level: number, value: string ): boolean => {};

export const BlzSetAbilityBooleanLevelArrayField = ( whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: number, index: number, value: boolean ): boolean => {};

export const BlzSetAbilityIntegerLevelArrayField = ( whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: number, index: number, value: number ): boolean => {};

export const BlzSetAbilityRealLevelArrayField = ( whichAbility: ability, whichField: abilityreallevelarrayfield, level: number, index: number, value: number ): boolean => {};

export const BlzSetAbilityStringLevelArrayField = ( whichAbility: ability, whichField: abilitystringlevelarrayfield, level: number, index: number, value: string ): boolean => {};

export const BlzAddAbilityBooleanLevelArrayField = ( whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: number, value: boolean ): boolean => {};

export const BlzAddAbilityIntegerLevelArrayField = ( whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: number, value: number ): boolean => {};

export const BlzAddAbilityRealLevelArrayField = ( whichAbility: ability, whichField: abilityreallevelarrayfield, level: number, value: number ): boolean => {};

export const BlzAddAbilityStringLevelArrayField = ( whichAbility: ability, whichField: abilitystringlevelarrayfield, level: number, value: string ): boolean => {};

export const BlzRemoveAbilityBooleanLevelArrayField = ( whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: number, value: boolean ): boolean => {};

export const BlzRemoveAbilityIntegerLevelArrayField = ( whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: number, value: number ): boolean => {};

export const BlzRemoveAbilityRealLevelArrayField = ( whichAbility: ability, whichField: abilityreallevelarrayfield, level: number, value: number ): boolean => {};

export const BlzRemoveAbilityStringLevelArrayField = ( whichAbility: ability, whichField: abilitystringlevelarrayfield, level: number, value: string ): boolean => {};

// Item
export const BlzGetItemAbilityByIndex = ( whichItem: item, index: number ): ability => {};

export const BlzGetItemAbility = ( whichItem: item, abilCode: number ): ability => {};

export const BlzItemAddAbility = ( whichItem: item, abilCode: number ): boolean => {};

export const BlzGetItemBooleanField = ( whichItem: item, whichField: itembooleanfield ): boolean => {};

export const BlzGetItemIntegerField = ( whichItem: item, whichField: itemintegerfield ): number => {};

export const BlzGetItemRealField = ( whichItem: item, whichField: itemrealfield ): number => {};

export const BlzGetItemStringField = ( whichItem: item, whichField: itemstringfield ): string => {};

export const BlzSetItemBooleanField = ( whichItem: item, whichField: itembooleanfield, value: boolean ): boolean => {};

export const BlzSetItemIntegerField = ( whichItem: item, whichField: itemintegerfield, value: number ): boolean => {};

export const BlzSetItemRealField = ( whichItem: item, whichField: itemrealfield, value: number ): boolean => {};

export const BlzSetItemStringField = ( whichItem: item, whichField: itemstringfield, value: string ): boolean => {};

export const BlzItemRemoveAbility = ( whichItem: item, abilCode: number ): boolean => {};

// Unit
export const BlzGetUnitBooleanField = ( whichUnit: unit, whichField: unitbooleanfield ): boolean => {};

export const BlzGetUnitIntegerField = ( whichUnit: unit, whichField: unitintegerfield ): number => {};

export const BlzGetUnitRealField = ( whichUnit: unit, whichField: unitrealfield ): number => {};

export const BlzGetUnitStringField = ( whichUnit: unit, whichField: unitstringfield ): string => {};

export const BlzSetUnitBooleanField = ( whichUnit: unit, whichField: unitbooleanfield, value: boolean ): boolean => {};

export const BlzSetUnitIntegerField = ( whichUnit: unit, whichField: unitintegerfield, value: number ): boolean => {};

export const BlzSetUnitRealField = ( whichUnit: unit, whichField: unitrealfield, value: number ): boolean => {};

export const BlzSetUnitStringField = ( whichUnit: unit, whichField: unitstringfield, value: string ): boolean => {};

// Unit Weapon
export const BlzGetUnitWeaponBooleanField = ( whichUnit: unit, whichField: unitweaponbooleanfield, index: number ): boolean => {};

export const BlzGetUnitWeaponIntegerField = ( whichUnit: unit, whichField: unitweaponintegerfield, index: number ): number => {};

export const BlzGetUnitWeaponRealField = ( whichUnit: unit, whichField: unitweaponrealfield, index: number ): number => {};

export const BlzGetUnitWeaponStringField = ( whichUnit: unit, whichField: unitweaponstringfield, index: number ): string => {};

export const BlzSetUnitWeaponBooleanField = ( whichUnit: unit, whichField: unitweaponbooleanfield, index: number, value: boolean ): boolean => {};

export const BlzSetUnitWeaponIntegerField = ( whichUnit: unit, whichField: unitweaponintegerfield, index: number, value: number ): boolean => {};

export const BlzSetUnitWeaponRealField = ( whichUnit: unit, whichField: unitweaponrealfield, index: number, value: number ): boolean => {};

export const BlzSetUnitWeaponStringField = ( whichUnit: unit, whichField: unitweaponstringfield, index: number, value: string ): boolean => {};

