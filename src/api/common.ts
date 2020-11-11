export * from "./common/booleanExpressions";
export * from "./common/constants";
export * from "./common/converters";
export * from "./common/forces";
export * from "./common/geometry";
export * from "./common/groups";
export * from "./common/mapApi";
export * from "./common/math";
export * from "./common/players";
export * from "./common/random";
export * from "./common/string";
export * from "./common/timers";
export * from "./common/triggers";
export * from "./common/units";
export * from "./common/visualApi";
import "./common/types";

import { notImplemented } from "../errors";
import { AI_DIFFICULTY_NEWBIE } from "./common/constants";

// ============================================================================
// Widget API
export const GetWidgetLife = (whichWidget: widget): number => {};

export const SetWidgetLife = (whichWidget: widget, newLife: number): void => {};

export const GetWidgetX = (whichWidget: widget): number => {};

export const GetWidgetY = (whichWidget: widget): number => {};

export const GetTriggerWidget = (): widget => {};

// ============================================================================
// Destructable Object API
// Facing arguments are specified in degrees
export const CreateDestructable = (
	objectid: number,
	x: number,
	y: number,
	face: number,
	scale: number,
	variation: number,
): destructable => {};

export const CreateDestructableZ = (
	objectid: number,
	x: number,
	y: number,
	z: number,
	face: number,
	scale: number,
	variation: number,
): destructable => {};

export const CreateDeadDestructable = (
	objectid: number,
	x: number,
	y: number,
	face: number,
	scale: number,
	variation: number,
): destructable => {};

export const CreateDeadDestructableZ = (
	objectid: number,
	x: number,
	y: number,
	z: number,
	face: number,
	scale: number,
	variation: number,
): destructable => {};

export const RemoveDestructable = (d: destructable): void => {};

export const KillDestructable = (d: destructable): void => {};

export const SetDestructableInvulnerable = (
	d: destructable,
	flag: boolean,
): void => {};

export const IsDestructableInvulnerable = (d: destructable): boolean => {};

export const EnumDestructablesInRect = (
	r: rect,
	filter: boolexpr | null,
	actionFunc: code,
): void => {};

export const GetDestructableTypeId = (d: destructable): number => {};

export const GetDestructableX = (d: destructable): number => {};

export const GetDestructableY = (d: destructable): number => {};

export const SetDestructableLife = (d: destructable, life: number): void => {};

export const GetDestructableLife = (d: destructable): number => {};

export const SetDestructableMaxLife = (
	d: destructable,
	max: number,
): void => {};

export const GetDestructableMaxLife = (d: destructable): number => {};

export const DestructableRestoreLife = (
	d: destructable,
	life: number,
	birth: boolean,
): void => {};

export const QueueDestructableAnimation = (
	d: destructable,
	whichAnimation: string,
): void => {};

export const SetDestructableAnimation = (
	d: destructable,
	whichAnimation: string,
): void => {};

export const SetDestructableAnimationSpeed = (
	d: destructable,
	speedFactor: number,
): void => {};

export const ShowDestructable = (d: destructable, flag: boolean): void => {};

export const GetDestructableOccluderHeight = (d: destructable): number => {};

export const SetDestructableOccluderHeight = (
	d: destructable,
	height: number,
): void => {};

export const GetDestructableName = (d: destructable): string => {};

export const GetTriggerDestructable = (): destructable => {};

// ============================================================================
// Item API
export const CreateItem = (itemid: number, x: number, y: number): item => {};

export const RemoveItem = (whichItem: item): void => {};

export const GetItemPlayer = (whichItem: item): player => {};

export const GetItemTypeId = (i: item): number => {};

export const GetItemX = (i: item): number => {};

export const GetItemY = (i: item): number => {};

export const SetItemPosition = (i: item, x: number, y: number): void => {};

export const SetItemDropOnDeath = (whichItem: item, flag: boolean): void => {};

export const SetItemDroppable = (i: item, flag: boolean): void => {};

export const SetItemPawnable = (i: item, flag: boolean): void => {};

export const SetItemPlayer = (
	whichItem: item,
	whichPlayer: player,
	changeColor: boolean,
): void => {};

export const SetItemInvulnerable = (whichItem: item, flag: boolean): void => {};

export const IsItemInvulnerable = (whichItem: item): boolean => {};

export const SetItemVisible = (whichItem: item, show: boolean): void => {};

export const IsItemVisible = (whichItem: item): boolean => {};

export const IsItemOwned = (whichItem: item): boolean => {};

export const IsItemPowerup = (whichItem: item): boolean => {};

export const IsItemSellable = (whichItem: item): boolean => {};

export const IsItemPawnable = (whichItem: item): boolean => {};

export const IsItemIdPowerup = (itemId: number): boolean => {};

export const IsItemIdSellable = (itemId: number): boolean => {};

export const IsItemIdPawnable = (itemId: number): boolean => {};

export const EnumItemsInRect = (
	r: rect,
	filter: boolexpr | null,
	actionFunc: code,
): void => {};

export const GetItemLevel = (whichItem: item): number => {};

export const GetItemType = (whichItem: item): itemtype => {};

export const SetItemDropID = (whichItem: item, unitId: number): void => {};

export const GetItemName = (whichItem: item): string => {};

export const GetItemCharges = (whichItem: item): number => {};

export const SetItemCharges = (whichItem: item, charges: number): void => {};

export const GetItemUserData = (whichItem: item): number => {};

export const SetItemUserData = (whichItem: item, data: number): void => {};

// ============================================================================
// Fog of War API
export const SetFogStateRect = (
	forWhichPlayer: player,
	whichState: fogstate,
	where: rect,
	useSharedVision: boolean,
): void => {};

export const SetFogStateRadius = (
	forWhichPlayer: player,
	whichState: fogstate,
	centerx: number,
	centerY: number,
	radius: number,
	useSharedVision: boolean,
): void => {};

export const SetFogStateRadiusLoc = (
	forWhichPlayer: player,
	whichState: fogstate,
	center: location,
	radius: number,
	useSharedVision: boolean,
): void => {};

export const FogMaskEnable = (enable: boolean): void => {};

export const IsFogMaskEnabled = (): boolean => {};

export const FogEnable = (enable: boolean): void => {};

export const IsFogEnabled = (): boolean => {};

export const CreateFogModifierRect = (
	forWhichPlayer: player,
	whichState: fogstate,
	where: rect,
	useSharedVision: boolean,
	afterUnits: boolean,
): fogmodifier => {};

export const CreateFogModifierRadius = (
	forWhichPlayer: player,
	whichState: fogstate,
	centerx: number,
	centerY: number,
	radius: number,
	useSharedVision: boolean,
	afterUnits: boolean,
): fogmodifier => {};

export const CreateFogModifierRadiusLoc = (
	forWhichPlayer: player,
	whichState: fogstate,
	center: location,
	radius: number,
	useSharedVision: boolean,
	afterUnits: boolean,
): fogmodifier => {};

export const DestroyFogModifier = (whichFogModifier: fogmodifier): void => {};

export const FogModifierStart = (whichFogModifier: fogmodifier): void => {};

export const FogModifierStop = (whichFogModifier: fogmodifier): void => {};

// ============================================================================
// Game API
export const VersionGet = (): version => {};

export const VersionCompatible = (whichVersion: version): boolean => {};

export const VersionSupported = (whichVersion: version): boolean => {};

export const EndGame = (doScoreScreen: boolean): void => {};

// Async only!
export const ChangeLevel = (
	newLevel: string,
	doScoreScreen: boolean,
): void => {};

export const RestartGame = (doScoreScreen: boolean): void => {};

export const ReloadGame = (): void => {};

// %%% SetCampaignMenuRace is deprecated.  It must remain to support
// old maps which use it, but all new maps should use SetCampaignMenuRaceEx
export const SetCampaignMenuRace = (r: race): void => {};

export const SetCampaignMenuRaceEx = (campaignIndex: number): void => {};

export const ForceCampaignSelectScreen = (): void => {};

export const LoadGame = (
	saveFileName: string,
	doScoreScreen: boolean,
): void => {};

export const SaveGame = (saveFileName: string): void => {};

export const RenameSaveDirectory = (
	sourceDirName: string,
	destDirName: string,
): boolean => {};

export const RemoveSaveDirectory = (sourceDirName: string): boolean => {};

export const CopySaveGame = (
	sourceSaveName: string,
	destSaveName: string,
): boolean => {};

export const SaveGameExists = (saveName: string): boolean => {};

export const SyncSelections = (): void => {};

export const SetFloatGameState = (
	whichFloatGameState: fgamestate,
	value: number,
): void => {};

export const GetFloatGameState = (
	whichFloatGameState: fgamestate,
): number => {};

export const SetIntegerGameState = (
	whichIntegerGameState: igamestate,
	value: number,
): void => {};

export const GetIntegerGameState = (
	whichIntegerGameState: igamestate,
): number => {};

// ============================================================================
// Campaign API
export const SetTutorialCleared = (cleared: boolean): void => {};

export const SetMissionAvailable = (
	campaignNumber: number,
	missionNumber: number,
	available: boolean,
): void => {};

export const SetCampaignAvailable = (
	campaignNumber: number,
	available: boolean,
): void => {};

export const SetOpCinematicAvailable = (
	campaignNumber: number,
	available: boolean,
): void => {};

export const SetEdCinematicAvailable = (
	campaignNumber: number,
	available: boolean,
): void => {};

export const GetDefaultDifficulty = (): gamedifficulty => {};

export const SetDefaultDifficulty = (g: gamedifficulty): void => {};

export const SetCustomCampaignButtonVisible = (
	whichButton: number,
	visible: boolean,
): void => {};

export const GetCustomCampaignButtonVisible = (
	whichButton: number,
): boolean => {};

export const DoNotSaveReplay = (): void => {};

// ============================================================================
// Dialog API
export const DialogCreate = (): dialog => {};

export const DialogDestroy = (whichDialog: dialog): void => {};

export const DialogClear = (whichDialog: dialog): void => {};

export const DialogSetMessage = (
	whichDialog: dialog,
	messageText: string,
): void => {};

export const DialogAddButton = (
	whichDialog: dialog,
	buttonText: string,
	hotkey: number,
): button => {};

export const DialogAddQuitButton = (
	whichDialog: dialog,
	doScoreScreen: boolean,
	buttonText: string,
	hotkey: number,
): button => {};

export const DialogDisplay = (
	whichPlayer: player,
	whichDialog: dialog,
	flag: boolean,
): void => {};

// Creates a new or reads in an existing game cache file stored
// in the current campaign profile dir
//
export const ReloadGameCachesFromDisk = (): boolean => {};

export const InitGameCache = (campaignFile: string): gamecache => {};

export const SaveGameCache = (whichCache: gamecache): boolean => {};

export const StoreInteger = (
	cache: gamecache,
	missionKey: string,
	key: string,
	value: number,
): void => {};

export const StoreReal = (
	cache: gamecache,
	missionKey: string,
	key: string,
	value: number,
): void => {};

export const StoreBoolean = (
	cache: gamecache,
	missionKey: string,
	key: string,
	value: boolean,
): void => {};

export const StoreUnit = (
	cache: gamecache,
	missionKey: string,
	key: string,
	whichUnit: unit,
): boolean => {};

export const StoreString = (
	cache: gamecache,
	missionKey: string,
	key: string,
	value: string,
): boolean => {};

export const SyncStoredInteger = (
	cache: gamecache,
	missionKey: string,
	key: string,
): void => {};

export const SyncStoredReal = (
	cache: gamecache,
	missionKey: string,
	key: string,
): void => {};

export const SyncStoredBoolean = (
	cache: gamecache,
	missionKey: string,
	key: string,
): void => {};

export const SyncStoredUnit = (
	cache: gamecache,
	missionKey: string,
	key: string,
): void => {};

export const SyncStoredString = (
	cache: gamecache,
	missionKey: string,
	key: string,
): void => {};

export const HaveStoredInteger = (
	cache: gamecache,
	missionKey: string,
	key: string,
): boolean => {
	notImplemented("HaveStoredInteger");
	return false;
};

export const HaveStoredReal = (
	cache: gamecache,
	missionKey: string,
	key: string,
): boolean => {
	notImplemented("HaveStoredReal");
	return false;
};

export const HaveStoredBoolean = (
	cache: gamecache,
	missionKey: string,
	key: string,
): boolean => {
	notImplemented("HaveStoredBoolean");
	return false;
};

export const HaveStoredUnit = (
	cache: gamecache,
	missionKey: string,
	key: string,
): boolean => {
	notImplemented("HaveStoredUnit");
	return false;
};

export const HaveStoredString = (
	cache: gamecache,
	missionKey: string,
	key: string,
): boolean => {
	notImplemented("HaveStoredString");
	return false;
};

export const FlushGameCache = (cache: gamecache): void => {};

export const FlushStoredMission = (
	cache: gamecache,
	missionKey: string,
): void => {};

export const FlushStoredInteger = (
	cache: gamecache,
	missionKey: string,
	key: string,
): void => {};

export const FlushStoredReal = (
	cache: gamecache,
	missionKey: string,
	key: string,
): void => {};

export const FlushStoredBoolean = (
	cache: gamecache,
	missionKey: string,
	key: string,
): void => {};

export const FlushStoredUnit = (
	cache: gamecache,
	missionKey: string,
	key: string,
): void => {};

export const FlushStoredString = (
	cache: gamecache,
	missionKey: string,
	key: string,
): void => {};

// Will return 0 if the specified value's data is not found in the cache
export const GetStoredInteger = (
	cache: gamecache,
	missionKey: string,
	key: string,
): number => {
	notImplemented("GetStoredInteger");
	return 0;
};

export const GetStoredReal = (
	cache: gamecache,
	missionKey: string,
	key: string,
): number => {
	notImplemented("GetStoredReal");
	return 0;
};

export const GetStoredBoolean = (
	cache: gamecache,
	missionKey: string,
	key: string,
): boolean => {
	notImplemented("GetStoredBoolean");
	return false;
};

export const GetStoredString = (
	cache: gamecache,
	missionKey: string,
	key: string,
): string => {
	notImplemented("GetStoredString");
	return "";
};

export const RestoreUnit = (
	cache: gamecache,
	missionKey: string,
	key: string,
	forWhichPlayer: player,
	x: number,
	y: number,
	facing: number,
): unit => {
	notImplemented("RestoreUnit");
	return (null as any) as unit;
};

export const InitHashtable = (): hashtable => {
	notImplemented("InitHashtable");
	return (null as any) as hashtable;
};

export const SaveInteger = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	value: number,
): void => {};

export const SaveReal = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	value: number,
): void => {};

export const SaveBoolean = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	value: boolean,
): void => {};

export const SaveStr = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	value: string,
): boolean => {
	notImplemented("SaveStr");
	return false;
};

export const SavePlayerHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichPlayer: player,
): boolean => {
	notImplemented("SavePlayerHandle");
	return false;
};

export const SaveWidgetHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichWidget: widget,
): boolean => {
	notImplemented("SaveWidgetHandle");
	return false;
};

export const SaveDestructableHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichDestructable: destructable,
): boolean => {
	notImplemented("SaveDestructableHandle");
	return false;
};

export const SaveItemHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichItem: item,
): boolean => {
	notImplemented("SaveItemHandle");
	return false;
};

export const SaveUnitHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichUnit: unit,
): boolean => {
	notImplemented("SaveUnitHandle");
	return false;
};

export const SaveAbilityHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichAbility: ability,
): boolean => {
	notImplemented("SaveAbilityHandle");
	return false;
};

export const SaveTimerHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichTimer: timer,
): boolean => {
	notImplemented("SaveTimerHandle");
	return false;
};

export const SaveTriggerHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichTrigger: trigger,
): boolean => {
	notImplemented("SaveTriggerHandle");
	return false;
};

export const SaveTriggerConditionHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichTriggercondition: triggercondition,
): boolean => {
	notImplemented("SaveTriggerConditionHandle");
	return false;
};

export const SaveTriggerActionHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichTriggeraction: triggeraction,
): boolean => {
	notImplemented("SaveTriggerActionHandle");
	return false;
};

export const SaveTriggerEventHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichEvent: event,
): boolean => {
	notImplemented("SaveTriggerEventHandle");
	return false;
};

export const SaveForceHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichForce: force,
): boolean => {
	notImplemented("SaveForceHandle");
	return false;
};

export const SaveGroupHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichGroup: group,
): boolean => {
	notImplemented("SaveGroupHandle");
	return false;
};

export const SaveLocationHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichLocation: location,
): boolean => {
	notImplemented("SaveLocationHandle");
	return false;
};

export const SaveRectHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichRect: rect,
): boolean => {
	notImplemented("SaveRectHandle");
	return false;
};

export const SaveBooleanExprHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichBoolexpr: boolexpr,
): boolean => {
	notImplemented("SaveBooleanExprHandle");
	return false;
};

export const SaveSoundHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichSound: sound,
): boolean => {
	notImplemented("SaveSoundHandle");
	return false;
};

export const SaveEffectHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichEffect: effect,
): boolean => {
	notImplemented("SaveEffectHandle");
	return false;
};

export const SaveUnitPoolHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichUnitpool: unitpool,
): boolean => {
	notImplemented("SaveUnitPoolHandle");
	return false;
};

export const SaveItemPoolHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichItempool: itempool,
): boolean => {
	notImplemented("SaveItemPoolHandle");
	return false;
};

export const SaveQuestHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichQuest: quest,
): boolean => {
	notImplemented("SaveQuestHandle");
	return false;
};

export const SaveQuestItemHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichQuestitem: questitem,
): boolean => {
	notImplemented("SaveQuestItemHandle");
	return false;
};

export const SaveDefeatConditionHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichDefeatcondition: defeatcondition,
): boolean => {
	notImplemented("SaveDefeatConditionHandle");
	return false;
};

export const SaveTimerDialogHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichTimerdialog: timerdialog,
): boolean => {
	notImplemented("SaveTimerDialogHandle");
	return false;
};

export const SaveLeaderboardHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichLeaderboard: leaderboard,
): boolean => {
	notImplemented("SaveLeaderboardHandle");
	return false;
};

export const SaveMultiboardHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichMultiboard: multiboard,
): boolean => {
	notImplemented("SaveMultiboardHandle");
	return false;
};

export const SaveMultiboardItemHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichMultiboarditem: multiboarditem,
): boolean => {
	notImplemented("SaveMultiboardItemHandle");
	return false;
};

export const SaveTrackableHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichTrackable: trackable,
): boolean => {
	notImplemented("SaveTrackableHandle");
	return false;
};

export const SaveDialogHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichDialog: dialog,
): boolean => {
	notImplemented("SaveDialogHandle");
	return false;
};

export const SaveButtonHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichButton: button,
): boolean => {
	notImplemented("SaveButtonHandle");
	return false;
};

export const SaveTextTagHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichTexttag: texttag,
): boolean => {
	notImplemented("SaveTextTagHandle");
	return false;
};

export const SaveLightningHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichLightning: lightning,
): boolean => {
	notImplemented("SaveLightningHandle");
	return false;
};

export const SaveImageHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichImage: image,
): boolean => {
	notImplemented("SaveImageHandle");
	return false;
};

export const SaveUbersplatHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichUbersplat: ubersplat,
): boolean => {
	notImplemented("SaveUbersplatHandle");
	return false;
};

export const SaveRegionHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichRegion: region,
): boolean => {
	notImplemented("SaveRegionHandle");
	return false;
};

export const SaveFogStateHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichFogState: fogstate,
): boolean => {
	notImplemented("SaveFogStateHandle");
	return false;
};

export const SaveFogModifierHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichFogModifier: fogmodifier,
): boolean => {
	notImplemented("SaveFogModifierHandle");
	return false;
};

export const SaveAgentHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichAgent: agent,
): boolean => {
	notImplemented("SaveAgentHandle");
	return false;
};

export const SaveHashtableHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichHashtable: hashtable,
): boolean => {
	notImplemented("SaveHashtableHandle");
	return false;
};

export const SaveFrameHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
	whichFrameHandle: framehandle,
): boolean => {
	notImplemented("SaveFrameHandle");
	return false;
};

export const LoadInteger = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): number => {
	notImplemented("LoadInteger");
	return (null as any) as number;
};

export const LoadReal = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): number => {
	notImplemented("LoadReal");
	return (null as any) as number;
};

export const LoadBoolean = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): boolean => {
	notImplemented("LoadBoolean");
	return (null as any) as boolean;
};

export const LoadStr = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): string => {
	notImplemented("LoadStr");
	return (null as any) as string;
};

export const LoadPlayerHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): player => {
	notImplemented("LoadPlayerHandle");
	return (null as any) as player;
};

export const LoadWidgetHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): widget => {
	notImplemented("LoadWidgetHandle");
	return (null as any) as widget;
};

export const LoadDestructableHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): destructable => {
	notImplemented("LoadDestructableHandle");
	return (null as any) as destructable;
};

export const LoadItemHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): item => {
	notImplemented("LoadItemHandle");
	return (null as any) as item;
};

export const LoadUnitHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): unit => {
	notImplemented("LoadUnitHandle");
	return (null as any) as unit;
};

export const LoadAbilityHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): ability => {
	notImplemented("LoadAbilityHandle");
	return (null as any) as ability;
};

export const LoadTimerHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): timer => {
	notImplemented("LoadTimerHandle");
	return (null as any) as timer;
};

export const LoadTriggerHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): trigger => {
	notImplemented("LoadTriggerHandle");
	return (null as any) as trigger;
};

export const LoadTriggerConditionHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): triggercondition => {
	notImplemented("LoadTriggerConditionHandle");
	return (null as any) as triggercondition;
};

export const LoadTriggerActionHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): triggeraction => {
	notImplemented("LoadTriggerActionHandle");
	return (null as any) as triggeraction;
};

export const LoadTriggerEventHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): event => {
	notImplemented("LoadTriggerEventHandle");
	return (null as any) as event;
};

export const LoadForceHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): force => {
	notImplemented("LoadForceHandle");
	return (null as any) as force;
};

export const LoadGroupHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): group => {
	notImplemented("LoadGroupHandle");
	return (null as any) as group;
};

export const LoadLocationHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): location => {
	notImplemented("LoadLocationHandle");
	return (null as any) as location;
};

export const LoadRectHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): rect => {
	notImplemented("LoadRectHandle");
	return (null as any) as rect;
};

export const LoadBooleanExprHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): boolexpr => {
	notImplemented("LoadBooleanExprHandle");
	return (null as any) as boolexpr;
};

export const LoadSoundHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): sound => {
	notImplemented("LoadSoundHandle");
	return (null as any) as sound;
};

export const LoadEffectHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): effect => {
	notImplemented("LoadEffectHandle");
	return (null as any) as effect;
};

export const LoadUnitPoolHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): unitpool => {
	notImplemented("LoadUnitPoolHandle");
	return (null as any) as unitpool;
};

export const LoadItemPoolHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): itempool => {
	notImplemented("LoadItemPoolHandle");
	return (null as any) as itempool;
};

export const LoadQuestHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): quest => {
	notImplemented("LoadQuestHandle");
	return (null as any) as quest;
};

export const LoadQuestItemHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): questitem => {
	notImplemented("LoadQuestItemHandle");
	return (null as any) as questitem;
};

export const LoadDefeatConditionHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): defeatcondition => {
	notImplemented("LoadDefeatConditionHandle");
	return (null as any) as defeatcondition;
};

export const LoadTimerDialogHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): timerdialog => {
	notImplemented("LoadTimerDialogHandle");
	return (null as any) as timerdialog;
};

export const LoadLeaderboardHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): leaderboard => {
	notImplemented("LoadLeaderboardHandle");
	return (null as any) as leaderboard;
};

export const LoadMultiboardHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): multiboard => {
	notImplemented("LoadMultiboardHandle");
	return (null as any) as multiboard;
};

export const LoadMultiboardItemHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): multiboarditem => {
	notImplemented("LoadMultiboardItemHandle");
	return (null as any) as multiboarditem;
};

export const LoadTrackableHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): trackable => {
	notImplemented("LoadTrackableHandle");
	return (null as any) as trackable;
};

export const LoadDialogHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): dialog => {
	notImplemented("LoadDialogHandle");
	return (null as any) as dialog;
};

export const LoadButtonHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): button => {
	notImplemented("LoadButtonHandle");
	return (null as any) as button;
};

export const LoadTextTagHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): texttag => {
	notImplemented("LoadTextTagHandle");
	return (null as any) as texttag;
};

export const LoadLightningHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): lightning => {
	notImplemented("LoadLightningHandle");
	return (null as any) as lightning;
};

export const LoadImageHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): image => {
	notImplemented("LoadImageHandle");
	return (null as any) as image;
};

export const LoadUbersplatHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): ubersplat => {
	notImplemented("LoadUbersplatHandle");
	return (null as any) as ubersplat;
};

export const LoadRegionHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): region => {
	notImplemented("LoadRegionHandle");
	return (null as any) as region;
};

export const LoadFogStateHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): fogstate => {
	notImplemented("LoadFogStateHandle");
	return (null as any) as fogstate;
};

export const LoadFogModifierHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): fogmodifier => {
	notImplemented("LoadFogModifierHandle");
	return (null as any) as fogmodifier;
};

export const LoadHashtableHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): hashtable => {
	notImplemented("LoadHashtableHandle");
	return (null as any) as hashtable;
};

export const LoadFrameHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): framehandle => {
	notImplemented("LoadFrameHandle");
	return (null as any) as framehandle;
};

export const HaveSavedInteger = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): boolean => {
	notImplemented("HaveSavedInteger");
	return false;
};

export const HaveSavedReal = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): boolean => {
	notImplemented("HaveSavedReal");
	return false;
};

export const HaveSavedBoolean = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): boolean => {
	notImplemented("HaveSavedBoolean");
	return false;
};

export const HaveSavedString = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): boolean => {
	notImplemented("HaveSavedString");
	return false;
};

export const HaveSavedHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): boolean => {
	notImplemented("HaveSavedHandle");
	return false;
};

export const RemoveSavedInteger = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): void => {};

export const RemoveSavedReal = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): void => {};

export const RemoveSavedBoolean = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): void => {};

export const RemoveSavedString = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): void => {};

export const RemoveSavedHandle = (
	table: hashtable,
	parentKey: number,
	childKey: number,
): void => {};

export const FlushParentHashtable = (table: hashtable): void => {};

export const FlushChildHashtable = (
	table: hashtable,
	parentKey: number,
): void => {};

// ============================================================================
// Trackable API
export const CreateTrackable = (
	trackableModelPath: string,
	x: number,
	y: number,
	facing: number,
): trackable => {
	notImplemented("CreateTrackable");
	return (null as any) as trackable;
};

// ============================================================================
// Quest API
export const CreateQuest = (): quest => {
	notImplemented("CreateQuest");
	return (null as any) as quest;
};

export const DestroyQuest = (whichQuest: quest): void => {};

export const QuestSetTitle = (whichQuest: quest, title: string): void => {};

export const QuestSetDescription = (
	whichQuest: quest,
	description: string,
): void => {};

export const QuestSetIconPath = (
	whichQuest: quest,
	iconPath: string,
): void => {};

export const QuestSetRequired = (
	whichQuest: quest,
	required: boolean,
): void => {};

export const QuestSetCompleted = (
	whichQuest: quest,
	completed: boolean,
): void => {};

export const QuestSetDiscovered = (
	whichQuest: quest,
	discovered: boolean,
): void => {};

export const QuestSetFailed = (whichQuest: quest, failed: boolean): void => {};

export const QuestSetEnabled = (
	whichQuest: quest,
	enabled: boolean,
): void => {};

export const IsQuestRequired = (whichQuest: quest): boolean => {
	notImplemented("IsQuestRequired");
	return false;
};

export const IsQuestCompleted = (whichQuest: quest): boolean => {
	notImplemented("IsQuestCompleted");
	return false;
};

export const IsQuestDiscovered = (whichQuest: quest): boolean => {
	notImplemented("IsQuestDiscovered");
	return false;
};

export const IsQuestFailed = (whichQuest: quest): boolean => {
	notImplemented("IsQuestFailed");
	return false;
};

export const IsQuestEnabled = (whichQuest: quest): boolean => {
	notImplemented("IsQuestEnabled");
	return false;
};

export const QuestCreateItem = (whichQuest: quest): questitem => {
	notImplemented("QuestCreateItem");
	return (null as any) as questitem;
};

export const QuestItemSetDescription = (
	whichQuestItem: questitem,
	description: string,
): void => {};

export const QuestItemSetCompleted = (
	whichQuestItem: questitem,
	completed: boolean,
): void => {};

export const IsQuestItemCompleted = (whichQuestItem: questitem): boolean => {
	notImplemented("IsQuestItemCompleted");
	return false;
};

export const CreateDefeatCondition = (): defeatcondition => {
	notImplemented("CreateDefeatCondition");
	return (null as any) as defeatcondition;
};

export const DestroyDefeatCondition = (
	whichCondition: defeatcondition,
): void => {};

export const DefeatConditionSetDescription = (
	whichCondition: defeatcondition,
	description: string,
): void => {};

export const FlashQuestDialogButton = (): void => {};

export const ForceQuestDialogUpdate = (): void => {};

// ============================================================================
// Timer Dialog API
export const CreateTimerDialog = (t: timer | null): timerdialog => {
	notImplemented("CreateTimerDialog");
	return (null as any) as timerdialog;
};

export const DestroyTimerDialog = (whichDialog: timerdialog): void => {};

export const TimerDialogSetTitle = (
	whichDialog: timerdialog,
	title: string,
): void => {};

export const TimerDialogSetTitleColor = (
	whichDialog: timerdialog,
	red: number,
	green: number,
	blue: number,
	alpha: number,
): void => {};

export const TimerDialogSetTimeColor = (
	whichDialog: timerdialog,
	red: number,
	green: number,
	blue: number,
	alpha: number,
): void => {};

export const TimerDialogSetSpeed = (
	whichDialog: timerdialog,
	speedMultFactor: number,
): void => {};

export const TimerDialogDisplay = (
	whichDialog: timerdialog,
	display: boolean,
): void => {};

export const IsTimerDialogDisplayed = (whichDialog: timerdialog): boolean => {
	notImplemented("IsTimerDialogDisplayed");
	return false;
};

export const TimerDialogSetRealTimeRemaining = (
	whichDialog: timerdialog,
	timeRemaining: number,
): void => {};

// ============================================================================
// Leaderboard API

// Create a leaderboard object
export const CreateLeaderboard = (): leaderboard => {
	notImplemented("CreateLeaderboard");
	return (null as any) as leaderboard;
};

export const DestroyLeaderboard = (lb: leaderboard): void => {};

export const LeaderboardDisplay = (lb: leaderboard, show: boolean): void => {};

export const IsLeaderboardDisplayed = (lb: leaderboard): boolean => {
	notImplemented("IsLeaderboardDisplayed");
	return false;
};

export const LeaderboardGetItemCount = (lb: leaderboard): number => {
	notImplemented("LeaderboardGetItemCount");
	return 0;
};

export const LeaderboardSetSizeByItemCount = (
	lb: leaderboard,
	count: number,
): void => {};

export const LeaderboardAddItem = (
	lb: leaderboard,
	label: string,
	value: number,
	p: player,
): void => {};

export const LeaderboardRemoveItem = (
	lb: leaderboard,
	index: number,
): void => {};

export const LeaderboardRemovePlayerItem = (
	lb: leaderboard,
	p: player,
): void => {};

export const LeaderboardClear = (lb: leaderboard): void => {};

export const LeaderboardSortItemsByValue = (
	lb: leaderboard,
	ascending: boolean,
): void => {};

export const LeaderboardSortItemsByPlayer = (
	lb: leaderboard,
	ascending: boolean,
): void => {};

export const LeaderboardSortItemsByLabel = (
	lb: leaderboard,
	ascending: boolean,
): void => {};

export const LeaderboardHasPlayerItem = (
	lb: leaderboard,
	p: player,
): boolean => {
	notImplemented("LeaderboardHasPlayerItem");
	return false;
};

export const LeaderboardGetPlayerIndex = (
	lb: leaderboard,
	p: player,
): number => {
	notImplemented("LeaderboardGetPlayerIndex");
	return 0;
};

export const LeaderboardSetLabel = (lb: leaderboard, label: string): void => {};

export const LeaderboardGetLabelText = (lb: leaderboard): string => {
	notImplemented("LeaderboardGetLabelText");
	return "";
};

export const PlayerSetLeaderboard = (
	toPlayer: player,
	lb: leaderboard,
): void => {};

export const PlayerGetLeaderboard = (toPlayer: player): leaderboard => {
	notImplemented("PlayerGetLeaderboard");
	return (null as any) as leaderboard;
};

export const LeaderboardSetLabelColor = (
	lb: leaderboard,
	red: number,
	green: number,
	blue: number,
	alpha: number,
): void => {};

export const LeaderboardSetValueColor = (
	lb: leaderboard,
	red: number,
	green: number,
	blue: number,
	alpha: number,
): void => {};

export const LeaderboardSetStyle = (
	lb: leaderboard,
	showLabel: boolean,
	showNames: boolean,
	showValues: boolean,
	showIcons: boolean,
): void => {};

export const LeaderboardSetItemValue = (
	lb: leaderboard,
	whichItem: number,
	val: number,
): void => {};

export const LeaderboardSetItemLabel = (
	lb: leaderboard,
	whichItem: number,
	val: string,
): void => {};

export const LeaderboardSetItemStyle = (
	lb: leaderboard,
	whichItem: number,
	showLabel: boolean,
	showValue: boolean,
	showIcon: boolean,
): void => {};

export const LeaderboardSetItemLabelColor = (
	lb: leaderboard,
	whichItem: number,
	red: number,
	green: number,
	blue: number,
	alpha: number,
): void => {};

export const LeaderboardSetItemValueColor = (
	lb: leaderboard,
	whichItem: number,
	red: number,
	green: number,
	blue: number,
	alpha: number,
): void => {};

// ============================================================================
// Multiboard API
// ============================================================================

// Create a multiboard object
export const CreateMultiboard = (): multiboard => {
	notImplemented("CreateMultiboard");
	return (null as any) as multiboard;
};

export const DestroyMultiboard = (lb: multiboard): void => {};

export const MultiboardDisplay = (lb: multiboard, show: boolean): void => {};

export const IsMultiboardDisplayed = (lb: multiboard): boolean => {
	notImplemented("IsMultiboardDisplayed");
	return false;
};

export const MultiboardMinimize = (
	lb: multiboard,
	minimize: boolean,
): void => {};

export const IsMultiboardMinimized = (lb: multiboard): boolean => {
	notImplemented("IsMultiboardMinimized");
	return false;
};

export const MultiboardClear = (lb: multiboard): void => {};

export const MultiboardSetTitleText = (
	lb: multiboard,
	label: string,
): void => {};

export const MultiboardGetTitleText = (lb: multiboard): string => {
	notImplemented("MultiboardGetTitleText");
	return "";
};

export const MultiboardSetTitleTextColor = (
	lb: multiboard,
	red: number,
	green: number,
	blue: number,
	alpha: number,
): void => {};

export const MultiboardGetRowCount = (lb: multiboard): number => {
	notImplemented("MultiboardGetRowCount");
	return 0;
};

export const MultiboardGetColumnCount = (lb: multiboard): number => {
	notImplemented("MultiboardGetColumnCount");
	return 0;
};

export const MultiboardSetColumnCount = (
	lb: multiboard,
	count: number,
): void => {};

export const MultiboardSetRowCount = (
	lb: multiboard,
	count: number,
): void => {};

// broadcast settings to all items
export const MultiboardSetItemsStyle = (
	lb: multiboard,
	showValues: boolean,
	showIcons: boolean,
): void => {};

export const MultiboardSetItemsValue = (
	lb: multiboard,
	value: string,
): void => {};

export const MultiboardSetItemsValueColor = (
	lb: multiboard,
	red: number,
	green: number,
	blue: number,
	alpha: number,
): void => {};

export const MultiboardSetItemsWidth = (
	lb: multiboard,
	width: number,
): void => {};

export const MultiboardSetItemsIcon = (
	lb: multiboard,
	iconPath: string,
): void => {};

// funcs for modifying individual items
export const MultiboardGetItem = (
	lb: multiboard,
	row: number,
	column: number,
): multiboarditem => {
	notImplemented("MultiboardGetItem");
	return (null as any) as multiboarditem;
};

export const MultiboardReleaseItem = (mbi: multiboarditem): void => {};

export const MultiboardSetItemStyle = (
	mbi: multiboarditem,
	showValue: boolean,
	showIcon: boolean,
): void => {};

export const MultiboardSetItemValue = (
	mbi: multiboarditem,
	val: string,
): void => {};

export const MultiboardSetItemValueColor = (
	mbi: multiboarditem,
	red: number,
	green: number,
	blue: number,
	alpha: number,
): void => {};

export const MultiboardSetItemWidth = (
	mbi: multiboarditem,
	width: number,
): void => {};

export const MultiboardSetItemIcon = (
	mbi: multiboarditem,
	iconFileName: string,
): void => {};

// meant to unequivocally suspend display of existing and
// subsequently displayed multiboards
//
export const MultiboardSuppressDisplay = (flag: boolean): void => {};

// ============================================================================
// Camera API
export const SetCameraPosition = (x: number, y: number): void => {};

export const SetCameraQuickPosition = (x: number, y: number): void => {};

export const SetCameraBounds = (
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	x3: number,
	y3: number,
	x4: number,
	y4: number,
): void => {};

export const StopCamera = (): void => {};

export const ResetToGameCamera = (duration: number): void => {};

export const PanCameraTo = (x: number, y: number): void => {};

export const PanCameraToTimed = (
	x: number,
	y: number,
	duration: number,
): void => {};

export const PanCameraToWithZ = (
	x: number,
	y: number,
	zOffsetDest: number,
): void => {};

export const PanCameraToTimedWithZ = (
	x: number,
	y: number,
	zOffsetDest: number,
	duration: number,
): void => {};

export const SetCinematicCamera = (cameraModelFile: string): void => {};

export const SetCameraRotateMode = (
	x: number,
	y: number,
	radiansToSweep: number,
	duration: number,
): void => {};

export const SetCameraField = (
	whichField: camerafield,
	value: number,
	duration: number,
): void => {};

export const AdjustCameraField = (
	whichField: camerafield,
	offset: number,
	duration: number,
): void => {};

export const SetCameraTargetController = (
	whichUnit: unit,
	xoffset: number,
	yoffset: number,
	inheritOrientation: boolean,
): void => {};

export const SetCameraOrientController = (
	whichUnit: unit,
	xoffset: number,
	yoffset: number,
): void => {};

export const CreateCameraSetup = (): camerasetup => {
	notImplemented("CreateCameraSetup");
	return (null as any) as camerasetup;
};

export const CameraSetupSetField = (
	whichSetup: camerasetup,
	whichField: camerafield,
	value: number,
	duration: number,
): void => {};

export const CameraSetupGetField = (
	whichSetup: camerasetup,
	whichField: camerafield,
): number => {
	notImplemented("CameraSetupGetField");
	return 0;
};

export const CameraSetupSetDestPosition = (
	whichSetup: camerasetup,
	x: number,
	y: number,
	duration: number,
): void => {};

export const CameraSetupGetDestPositionLoc = (
	whichSetup: camerasetup,
): location => {
	notImplemented("CameraSetupGetDestPositionLoc");
	return (null as any) as location;
};

export const CameraSetupGetDestPositionX = (
	whichSetup: camerasetup,
): number => {
	notImplemented("CameraSetupGetDestPositionX");
	return 0;
};

export const CameraSetupGetDestPositionY = (
	whichSetup: camerasetup,
): number => {
	notImplemented("CameraSetupGetDestPositionY");
	return 0;
};

export const CameraSetupApply = (
	whichSetup: camerasetup,
	doPan: boolean,
	panTimed: boolean,
): void => {};

export const CameraSetupApplyWithZ = (
	whichSetup: camerasetup,
	zDestOffset: number,
): void => {};

export const CameraSetupApplyForceDuration = (
	whichSetup: camerasetup,
	doPan: boolean,
	forceDuration: number,
): void => {};

export const CameraSetupApplyForceDurationWithZ = (
	whichSetup: camerasetup,
	zDestOffset: number,
	forceDuration: number,
): void => {};

export const CameraSetTargetNoise = (mag: number, velocity: number): void => {};

export const CameraSetSourceNoise = (mag: number, velocity: number): void => {};

export const CameraSetTargetNoiseEx = (
	mag: number,
	velocity: number,
	vertOnly: boolean,
): void => {};

export const CameraSetSourceNoiseEx = (
	mag: number,
	velocity: number,
	vertOnly: boolean,
): void => {};

export const CameraSetSmoothingFactor = (factor: number): void => {};

export const SetCineFilterTexture = (filename: string): void => {};

export const SetCineFilterBlendMode = (whichMode: blendmode): void => {};

export const SetCineFilterTexMapFlags = (whichFlags: texmapflags): void => {};

export const SetCineFilterStartUV = (
	minu: number,
	minv: number,
	maxu: number,
	maxv: number,
): void => {};

export const SetCineFilterEndUV = (
	minu: number,
	minv: number,
	maxu: number,
	maxv: number,
): void => {};

export const SetCineFilterStartColor = (
	red: number,
	green: number,
	blue: number,
	alpha: number,
): void => {};

export const SetCineFilterEndColor = (
	red: number,
	green: number,
	blue: number,
	alpha: number,
): void => {};

export const SetCineFilterDuration = (duration: number): void => {};

export const DisplayCineFilter = (flag: boolean): void => {};

export const IsCineFilterDisplayed = (): boolean => {
	notImplemented("IsCineFilterDisplayed");
	return false;
};

export const SetCinematicScene = (
	portraitUnitId: number,
	color: playercolor,
	speakerTitle: string,
	text: string,
	sceneDuration: number,
	voiceoverDuration: number,
): void => {};

export const EndCinematicScene = (): void => {};

export const ForceCinematicSubtitles = (flag: boolean): void => {};

export const GetCameraMargin = (whichMargin: number): number => {
	notImplemented("GetCameraMargin");
	return 0;
};

// These return values for the local players camera only...
export const GetCameraBoundMinX = (): number => {
	notImplemented("GetCameraBoundMinX");
	return 0;
};

export const GetCameraBoundMinY = (): number => {
	notImplemented("GetCameraBoundMinY");
	return 0;
};

export const GetCameraBoundMaxX = (): number => {
	notImplemented("GetCameraBoundMaxX");
	return 0;
};

export const GetCameraBoundMaxY = (): number => {
	notImplemented("GetCameraBoundMaxY");
	return 0;
};

export const GetCameraField = (whichField: camerafield): number => {
	notImplemented("GetCameraField");
	return 0;
};

export const GetCameraTargetPositionX = (): number => {
	notImplemented("GetCameraTargetPositionX");
	return 0;
};

export const GetCameraTargetPositionY = (): number => {
	notImplemented("GetCameraTargetPositionY");
	return 0;
};

export const GetCameraTargetPositionZ = (): number => {
	notImplemented("GetCameraTargetPositionZ");
	return 0;
};

export const GetCameraTargetPositionLoc = (): location => {
	notImplemented("GetCameraTargetPositionLoc");
	return (null as any) as location;
};

export const GetCameraEyePositionX = (): number => {
	notImplemented("GetCameraEyePositionX");
	return 0;
};

export const GetCameraEyePositionY = (): number => {
	notImplemented("GetCameraEyePositionY");
	return 0;
};

export const GetCameraEyePositionZ = (): number => {
	notImplemented("GetCameraEyePositionZ");
	return 0;
};

export const GetCameraEyePositionLoc = (): location => {
	notImplemented("GetCameraEyePositionLoc");
	return (null as any) as location;
};

// ============================================================================
// Sound API
//
export const NewSoundEnvironment = (environmentName: string): void => {};

export const CreateSound = (
	fileName: string,
	looping: boolean,
	is3D: boolean,
	stopwhenoutofrange: boolean,
	fadeInRate: number,
	fadeOutRate: number,
	eaxSetting: string,
): sound => {
	notImplemented("CreateSound");
	return (null as any) as sound;
};

export const CreateSoundFilenameWithLabel = (
	fileName: string,
	looping: boolean,
	is3D: boolean,
	stopwhenoutofrange: boolean,
	fadeInRate: number,
	fadeOutRate: number,
	SLKEntryName: string,
): sound => {
	notImplemented("CreateSoundFilenameWithLabel");
	return (null as any) as sound;
};

export const CreateSoundFromLabel = (
	soundLabel: string,
	looping: boolean,
	is3D: boolean,
	stopwhenoutofrange: boolean,
	fadeInRate: number,
	fadeOutRate: number,
): sound => {
	notImplemented("CreateSoundFromLabel");
	return (null as any) as sound;
};

export const CreateMIDISound = (
	soundLabel: string,
	fadeInRate: number,
	fadeOutRate: number,
): sound => {
	notImplemented("CreateMIDISound");
	return (null as any) as sound;
};

export const SetSoundParamsFromLabel = (
	soundHandle: sound,
	soundLabel: string,
): void => {};

export const SetSoundDistanceCutoff = (
	soundHandle: sound,
	cutoff: number,
): void => {};

export const SetSoundChannel = (
	soundHandle: sound,
	channel: number,
): void => {};

export const SetSoundVolume = (soundHandle: sound, volume: number): void => {};

export const SetSoundPitch = (soundHandle: sound, pitch: number): void => {};

// the following method must be called immediately after calling "StartSound"
export const SetSoundPlayPosition = (
	soundHandle: sound,
	millisecs: number,
): void => {};

// these calls are only valid if the sound was created with 3d enabled
export const SetSoundDistances = (
	soundHandle: sound,
	minDist: number,
	maxDist: number,
): void => {};

export const SetSoundConeAngles = (
	soundHandle: sound,
	inside: number,
	outside: number,
	outsideVolume: number,
): void => {};

export const SetSoundConeOrientation = (
	soundHandle: sound,
	x: number,
	y: number,
	z: number,
): void => {};

export const SetSoundPosition = (
	soundHandle: sound,
	x: number,
	y: number,
	z: number,
): void => {};

export const SetSoundVelocity = (
	soundHandle: sound,
	x: number,
	y: number,
	z: number,
): void => {};

export const AttachSoundToUnit = (
	soundHandle: sound,
	whichUnit: unit,
): void => {};

export const StartSound = (soundHandle: sound): void => {};

export const StopSound = (
	soundHandle: sound,
	killWhenDone: boolean,
	fadeOut: boolean,
): void => {};

export const KillSoundWhenDone = (soundHandle: sound): void => {};

// Music Interface. Note that if music is disabled, these calls do nothing
export const SetMapMusic = (
	musicName: string,
	random: boolean,
	index: number,
): void => {};

export const ClearMapMusic = (): void => {};

export const PlayMusic = (musicName: string): void => {};

export const PlayMusicEx = (
	musicName: string,
	frommsecs: number,
	fadeinmsecs: number,
): void => {};

export const StopMusic = (fadeOut: boolean): void => {};

export const ResumeMusic = (): void => {};

export const PlayThematicMusic = (musicFileName: string): void => {};

export const PlayThematicMusicEx = (
	musicFileName: string,
	frommsecs: number,
): void => {};

export const EndThematicMusic = (): void => {};

export const SetMusicVolume = (volume: number): void => {};

export const SetMusicPlayPosition = (millisecs: number): void => {};

export const SetThematicMusicPlayPosition = (millisecs: number): void => {};

// other music and sound calls
export const SetSoundDuration = (
	soundHandle: sound,
	duration: number,
): void => {};

export const GetSoundDuration = (soundHandle: sound): number => {
	notImplemented("GetSoundDuration");
	return 0;
};

export const GetSoundFileDuration = (musicFileName: string): number => {
	notImplemented("GetSoundFileDuration");
	return 0;
};

export const VolumeGroupSetVolume = (
	vgroup: volumegroup,
	scale: number,
): void => {};

export const VolumeGroupReset = (): void => {};

export const GetSoundIsPlaying = (soundHandle: sound): boolean => {
	notImplemented("GetSoundIsPlaying");
	return false;
};

export const GetSoundIsLoading = (soundHandle: sound): boolean => {
	notImplemented("GetSoundIsLoading");
	return false;
};

export const RegisterStackedSound = (
	soundHandle: sound,
	byPosition: boolean,
	rectwidth: number,
	rectheight: number,
): void => {};

export const UnregisterStackedSound = (
	soundHandle: sound,
	byPosition: boolean,
	rectwidth: number,
	rectheight: number,
): void => {};

// ============================================================================
// Effects API
//
export const AddWeatherEffect = (
	where: rect,
	effectID: number,
): weathereffect => {
	notImplemented("AddWeatherEffect");
	return (null as any) as weathereffect;
};

export const RemoveWeatherEffect = (whichEffect: weathereffect): void => {};

export const EnableWeatherEffect = (
	whichEffect: weathereffect,
	enable: boolean,
): void => {};

export const TerrainDeformCrater = (
	x: number,
	y: number,
	radius: number,
	depth: number,
	duration: number,
	permanent: boolean,
): terraindeformation => {
	notImplemented("TerrainDeformCrater");
	return (null as any) as terraindeformation;
};

export const TerrainDeformRipple = (
	x: number,
	y: number,
	radius: number,
	depth: number,
	duration: number,
	count: number,
	spaceWaves: number,
	timeWaves: number,
	radiusStartPct: number,
	limitNeg: boolean,
): terraindeformation => {
	notImplemented("TerrainDeformRipple");
	return (null as any) as terraindeformation;
};

export const TerrainDeformWave = (
	x: number,
	y: number,
	dirX: number,
	dirY: number,
	distance: number,
	speed: number,
	radius: number,
	depth: number,
	trailTime: number,
	count: number,
): terraindeformation => {
	notImplemented("TerrainDeformWave");
	return (null as any) as terraindeformation;
};

export const TerrainDeformRandom = (
	x: number,
	y: number,
	radius: number,
	minDelta: number,
	maxDelta: number,
	duration: number,
	updateInterval: number,
): terraindeformation => {
	notImplemented("TerrainDeformRandom");
	return (null as any) as terraindeformation;
};

export const TerrainDeformStop = (
	deformation: terraindeformation,
	duration: number,
): void => {};

export const TerrainDeformStopAll = (): void => {};

export const AddSpecialEffect = (
	modelName: string,
	x: number,
	y: number,
): effect => {
	notImplemented("AddSpecialEffect");
	return (null as any) as effect;
};

export const AddSpecialEffectLoc = (
	modelName: string,
	where: location,
): effect => {
	notImplemented("AddSpecialEffectLoc");
	return (null as any) as effect;
};

export const AddSpecialEffectTarget = (
	modelName: string,
	targetWidget: widget,
	attachPointName: string,
): effect => {
	notImplemented("AddSpecialEffectTarget");
	return (null as any) as effect;
};

export const DestroyEffect = (whichEffect: effect): void => {};

export const AddSpellEffect = (
	abilityString: string,
	t: effecttype,
	x: number,
	y: number,
): effect => {
	notImplemented("AddSpellEffect");
	return (null as any) as effect;
};

export const AddSpellEffectLoc = (
	abilityString: string,
	t: effecttype,
	where: location,
): effect => {
	notImplemented("AddSpellEffectLoc");
	return (null as any) as effect;
};

export const AddSpellEffectById = (
	abilityId: number,
	t: effecttype,
	x: number,
	y: number,
): effect => {
	notImplemented("AddSpellEffectById");
	return (null as any) as effect;
};

export const AddSpellEffectByIdLoc = (
	abilityId: number,
	t: effecttype,
	where: location,
): effect => {
	notImplemented("AddSpellEffectByIdLoc");
	return (null as any) as effect;
};

export const AddSpellEffectTarget = (
	modelName: string,
	t: effecttype,
	targetWidget: widget,
	attachPoint: string,
): effect => {
	notImplemented("AddSpellEffectTarget");
	return (null as any) as effect;
};

export const AddSpellEffectTargetById = (
	abilityId: number,
	t: effecttype,
	targetWidget: widget,
	attachPoint: string,
): effect => {
	notImplemented("AddSpellEffectTargetById");
	return (null as any) as effect;
};

export const AddLightning = (
	codeName: string,
	checkVisibility: boolean,
	x1: number,
	y1: number,
	x2: number,
	y2: number,
): lightning => {
	notImplemented("AddLightning");
	return (null as any) as lightning;
};

export const AddLightningEx = (
	codeName: string,
	checkVisibility: boolean,
	x1: number,
	y1: number,
	z1: number,
	x2: number,
	y2: number,
	z2: number,
): lightning => {
	notImplemented("AddLightningEx");
	return (null as any) as lightning;
};

export const DestroyLightning = (whichBolt: lightning): boolean => {
	notImplemented("DestroyLightning");
	return false;
};

export const MoveLightning = (
	whichBolt: lightning,
	checkVisibility: boolean,
	x1: number,
	y1: number,
	x2: number,
	y2: number,
): boolean => {
	notImplemented("MoveLightning");
	return false;
};

export const MoveLightningEx = (
	whichBolt: lightning,
	checkVisibility: boolean,
	x1: number,
	y1: number,
	z1: number,
	x2: number,
	y2: number,
	z2: number,
): boolean => {
	notImplemented("MoveLightningEx");
	return false;
};

export const GetLightningColorA = (whichBolt: lightning): number => {
	notImplemented("GetLightningColorA");
	return 0;
};

export const GetLightningColorR = (whichBolt: lightning): number => {
	notImplemented("GetLightningColorR");
	return 0;
};

export const GetLightningColorG = (whichBolt: lightning): number => {
	notImplemented("GetLightningColorG");
	return 0;
};

export const GetLightningColorB = (whichBolt: lightning): number => {
	notImplemented("GetLightningColorB");
	return 0;
};

export const SetLightningColor = (
	whichBolt: lightning,
	r: number,
	g: number,
	b: number,
	a: number,
): boolean => {
	notImplemented("SetLightningColor");
	return false;
};

export const GetAbilityEffect = (
	abilityString: string,
	t: effecttype,
	index: number,
): string => {
	notImplemented("GetAbilityEffect");
	return "";
};

export const GetAbilityEffectById = (
	abilityId: number,
	t: effecttype,
	index: number,
): string => {
	notImplemented("GetAbilitySoundByGetAbilityEffectByIdId");
	return "";
};

export const GetAbilitySound = (
	abilityString: string,
	t: soundtype,
): string => {
	notImplemented("GetAbilitySound");
	return "";
};

export const GetAbilitySoundById = (
	abilityId: number,
	t: soundtype,
): string => {
	notImplemented("GetAbilitySoundById");
	return "";
};

// ============================================================================
// Terrain API
//
export const GetTerrainCliffLevel = (x: number, y: number): number => {
	notImplemented("GetTerrainCliffLevel");
	return 0;
};

export const SetWaterBaseColor = (
	red: number,
	green: number,
	blue: number,
	alpha: number,
): void => {};

export const SetWaterDeforms = (val: boolean): void => {};

export const GetTerrainType = (x: number, y: number): number => {
	notImplemented("GetTerrainType");
	return 0;
};

export const GetTerrainVariance = (x: number, y: number): number => {
	notImplemented("GetTerrainVariance");
	return 0;
};

export const SetTerrainType = (
	x: number,
	y: number,
	terrainType: number,
	variation: number,
	area: number,
	shape: number,
): void => {};

export const IsTerrainPathable = (
	x: number,
	y: number,
	t: pathingtype,
): boolean => {
	notImplemented("IsTerrainPathable");
	return false;
};

export const SetTerrainPathable = (
	x: number,
	y: number,
	t: pathingtype,
	flag: boolean,
): void => {};

// ============================================================================
// Image API
//
export const CreateImage = (
	file: string,
	sizeX: number,
	sizeY: number,
	sizeZ: number,
	posX: number,
	posY: number,
	posZ: number,
	originX: number,
	originY: number,
	originZ: number,
	imageType: number,
): image => {
	notImplemented("CreateImage");
	return (null as any) as image;
};

export const DestroyImage = (whichImage: image): void => {};

export const ShowImage = (whichImage: image, flag: boolean): void => {};

export const SetImageConstantHeight = (
	whichImage: image,
	flag: boolean,
	height: number,
): void => {};

export const SetImagePosition = (
	whichImage: image,
	x: number,
	y: number,
	z: number,
): void => {};

export const SetImageColor = (
	whichImage: image,
	red: number,
	green: number,
	blue: number,
	alpha: number,
): void => {};

export const SetImageRender = (whichImage: image, flag: boolean): void => {};

export const SetImageRenderAlways = (
	whichImage: image,
	flag: boolean,
): void => {};

export const SetImageAboveWater = (
	whichImage: image,
	flag: boolean,
	useWaterAlpha: boolean,
): void => {};

export const SetImageType = (whichImage: image, imageType: number): void => {};

// ============================================================================
// Ubersplat API
//
export const CreateUbersplat = (
	x: number,
	y: number,
	name: string,
	red: number,
	green: number,
	blue: number,
	alpha: number,
	forcePaused: boolean,
	noBirthTime: boolean,
): ubersplat => {
	notImplemented("CreateUbersplat");
	return (null as any) as ubersplat;
};

export const DestroyUbersplat = (whichSplat: ubersplat): void => {};

export const ResetUbersplat = (whichSplat: ubersplat): void => {};

export const FinishUbersplat = (whichSplat: ubersplat): void => {};

export const ShowUbersplat = (whichSplat: ubersplat, flag: boolean): void => {};

export const SetUbersplatRender = (
	whichSplat: ubersplat,
	flag: boolean,
): void => {};

export const SetUbersplatRenderAlways = (
	whichSplat: ubersplat,
	flag: boolean,
): void => {};

// ============================================================================
// Blight API
//
export const SetBlight = (
	whichPlayer: player,
	x: number,
	y: number,
	radius: number,
	addBlight: boolean,
): void => {};

export const SetBlightRect = (
	whichPlayer: player,
	r: rect,
	addBlight: boolean,
): void => {};

export const SetBlightPoint = (
	whichPlayer: player,
	x: number,
	y: number,
	addBlight: boolean,
): void => {};

export const SetBlightLoc = (
	whichPlayer: player,
	whichLocation: location,
	radius: number,
	addBlight: boolean,
): void => {};

export const CreateBlightedGoldmine = (
	id: player,
	x: number,
	y: number,
	face: number,
): unit => {
	notImplemented("CreateBlightedGoldmine");
	return (null as any) as unit;
};

export const IsPointBlighted = (x: number, y: number): boolean => {
	notImplemented("IsPointBlighted");
	return false;
};

// ============================================================================
// Doodad API
//
export const SetDoodadAnimation = (
	x: number,
	y: number,
	radius: number,
	doodadID: number,
	nearestOnly: boolean,
	animName: string,
	animRandom: boolean,
): void => {};

export const SetDoodadAnimationRect = (
	r: rect,
	doodadID: number,
	animName: string,
	animRandom: boolean,
): void => {};

// ============================================================================
// Computer AI interface
//
export const StartMeleeAI = (num: player, script: string | null): void => {};

export const StartCampaignAI = (num: player, script: string): void => {};

export const CommandAI = (
	num: player,
	command: number,
	data: number,
): void => {};

export const PauseCompAI = (p: player, pause: boolean): void => {};

export const GetAIDifficulty = (num: player): aidifficulty => {
	notImplemented("GetAIDifficulty");
	return AI_DIFFICULTY_NEWBIE;
};

export const RemoveGuardPosition = (hUnit: unit): void => {};

export const RecycleGuardPosition = (hUnit: unit): void => {};

export const RemoveAllGuardPositions = (num: player): void => {};

// ============================================================================
export const Cheat = (cheatStr: string): void => {};

export const IsNoVictoryCheat = (): boolean => {
	notImplemented("IsNoVictoryCheat");
	return false;
};

export const IsNoDefeatCheat = (): boolean => {
	notImplemented("IsNoDefeatCheat");
	return false;
};

export const Preload = (filename: string): void => {};

export const PreloadEnd = (timeout: number): void => {};

export const PreloadStart = (): void => {};

export const PreloadRefresh = (): void => {};

export const PreloadEndEx = (): void => {};

export const PreloadGenClear = (): void => {};

export const PreloadGenStart = (): void => {};

export const PreloadGenEnd = (filename: string): void => {};

export const Preloader = (filename: string): void => {};

// Automation Test
export const AutomationSetTestType = (testType: string): void => {};

export const AutomationTestStart = (testName: string): void => {};

export const AutomationTestEnd = (): void => {};

export const AutomationTestingFinished = (): void => {};

// JAPI Functions
export const BlzGetTriggerPlayerMouseX = (): number => {
	notImplemented("BlzGetTriggerPlayerMouseX");
	return 0;
};

export const BlzGetTriggerPlayerMouseY = (): number => {
	notImplemented("BlzGetTriggerPlayerMouseY");
	return 0;
};

export const BlzGetTriggerPlayerMousePosition = (): location => {
	notImplemented("BlzGetTriggerPlayerMousePosition");
	return (null as any) as location;
};

export const BlzGetTriggerPlayerMouseButton = (): mousebuttontype => {
	notImplemented("BlzGetTriggerPlayerMouseButton");
	return (null as any) as mousebuttontype;
};

export const BlzSetAbilityTooltip = (
	abilCode: number,
	tooltip: string,
	level: number,
): void => {};

export const BlzSetAbilityActivatedTooltip = (
	abilCode: number,
	tooltip: string,
	level: number,
): void => {};

export const BlzSetAbilityExtendedTooltip = (
	abilCode: number,
	extendedTooltip: string,
	level: number,
): void => {};

export const BlzSetAbilityActivatedExtendedTooltip = (
	abilCode: number,
	extendedTooltip: string,
	level: number,
): void => {};

export const BlzSetAbilityResearchTooltip = (
	abilCode: number,
	researchTooltip: string,
	level: number,
): void => {};

export const BlzSetAbilityResearchExtendedTooltip = (
	abilCode: number,
	researchExtendedTooltip: string,
	level: number,
): void => {};

export const BlzGetAbilityTooltip = (
	abilCode: number,
	level: number,
): string => {
	notImplemented("BlzGetAbilityTooltip");
	return "";
};

export const BlzGetAbilityActivatedTooltip = (
	abilCode: number,
	level: number,
): string => {
	notImplemented("BlzGetAbilityActivatedTooltip");
	return "";
};

export const BlzGetAbilityExtendedTooltip = (
	abilCode: number,
	level: number,
): string => {
	notImplemented("BlzGetAbilityExtendedTooltip");
	return "";
};

export const BlzGetAbilityActivatedExtendedTooltip = (
	abilCode: number,
	level: number,
): string => {
	notImplemented("BlzGetAbilityActivatedExtendedTooltip");
	return "";
};

export const BlzGetAbilityResearchTooltip = (
	abilCode: number,
	level: number,
): string => {
	notImplemented("BlzGetAbilityResearchTooltip");
	return "";
};

export const BlzGetAbilityResearchExtendedTooltip = (
	abilCode: number,
	level: number,
): string => {
	notImplemented("BlzGetAbilityResearchExtendedTooltip");
	return "";
};

export const BlzSetAbilityIcon = (
	abilCode: number,
	iconPath: string,
): void => {};

export const BlzGetAbilityIcon = (abilCode: number): string => {
	notImplemented("BlzGetAbilityIcon");
	return "";
};

export const BlzSetAbilityActivatedIcon = (
	abilCode: number,
	iconPath: string,
): void => {};

export const BlzGetAbilityActivatedIcon = (abilCode: number): string => {
	notImplemented("BlzGetAbilityActivatedIcon");
	return "";
};

export const BlzGetAbilityPosX = (abilCode: number): number => {
	notImplemented("BlzGetAbilityPosX");
	return 0;
};

export const BlzGetAbilityPosY = (abilCode: number): number => {
	notImplemented("BlzGetAbilityPosY");
	return 0;
};

export const BlzSetAbilityPosX = (abilCode: number, x: number): void => {};

export const BlzSetAbilityPosY = (abilCode: number, y: number): void => {};

export const BlzGetAbilityActivatedPosX = (abilCode: number): number => {
	notImplemented("BlzGetAbilityActivatedPosX");
	return 0;
};

export const BlzGetAbilityActivatedPosY = (abilCode: number): number => {
	notImplemented("BlzGetAbilityActivatedPosY");
	return 0;
};

export const BlzSetAbilityActivatedPosX = (
	abilCode: number,
	x: number,
): void => {};

export const BlzSetAbilityActivatedPosY = (
	abilCode: number,
	y: number,
): void => {};

export const BlzGetUnitMaxHP = (whichUnit: unit): number => {
	notImplemented("BlzGetUnitMaxHP");
	return 0;
};

export const BlzSetUnitMaxHP = (whichUnit: unit, hp: number): void => {};

export const BlzGetUnitMaxMana = (whichUnit: unit): number => {
	notImplemented("BlzGetUnitMaxMana");
	return 0;
};

export const BlzSetUnitMaxMana = (whichUnit: unit, mana: number): void => {};

export const BlzSetItemName = (whichItem: item, name: string): void => {};

export const BlzSetItemDescription = (
	whichItem: item,
	description: string,
): void => {};

export const BlzGetItemDescription = (whichItem: item): string => {
	notImplemented("BlzGetItemDescription");
	return "";
};

export const BlzSetItemTooltip = (whichItem: item, tooltip: string): void => {};

export const BlzGetItemTooltip = (whichItem: item): string => {
	notImplemented("BlzGetItemTooltip");
	return "";
};

export const BlzSetItemExtendedTooltip = (
	whichItem: item,
	extendedTooltip: string,
): void => {};

export const BlzGetItemExtendedTooltip = (whichItem: item): string => {
	notImplemented("BlzGetItemExtendedTooltip");
	return "";
};

export const BlzSetItemIconPath = (
	whichItem: item,
	iconPath: string,
): void => {};

export const BlzGetItemIconPath = (whichItem: item): string => {
	notImplemented("BlzGetItemIconPath");
	return "";
};

export const BlzSetUnitName = (whichUnit: unit, name: string): void => {};

export const BlzSetHeroProperName = (
	whichUnit: unit,
	heroProperName: string,
): void => {};

export const BlzGetUnitBaseDamage = (
	whichUnit: unit,
	weaponIndex: number,
): number => {
	notImplemented("BlzGetUnitBaseDamage");
	return 0;
};

export const BlzSetUnitBaseDamage = (
	whichUnit: unit,
	baseDamage: number,
	weaponIndex: number,
): void => {};

export const BlzGetUnitDiceNumber = (
	whichUnit: unit,
	weaponIndex: number,
): number => {
	notImplemented("BlzGetUnitDiceNumber");
	return 0;
};

export const BlzSetUnitDiceNumber = (
	whichUnit: unit,
	diceNumber: number,
	weaponIndex: number,
): void => {};

export const BlzGetUnitDiceSides = (
	whichUnit: unit,
	weaponIndex: number,
): number => {
	notImplemented("BlzGetUnitDiceSides");
	return 0;
};

export const BlzSetUnitDiceSides = (
	whichUnit: unit,
	diceSides: number,
	weaponIndex: number,
): void => {};

export const BlzGetUnitAttackCooldown = (
	whichUnit: unit,
	weaponIndex: number,
): number => {
	notImplemented("BlzGetUnitAttackCooldown");
	return 0;
};

export const BlzSetUnitAttackCooldown = (
	whichUnit: unit,
	cooldown: number,
	weaponIndex: number,
): void => {};

export const BlzSetSpecialEffectColorByPlayer = (
	whichEffect: effect,
	whichPlayer: player,
): void => {};

export const BlzSetSpecialEffectColor = (
	whichEffect: effect,
	r: number,
	g: number,
	b: number,
): void => {};

export const BlzSetSpecialEffectAlpha = (
	whichEffect: effect,
	alpha: number,
): void => {};

export const BlzSetSpecialEffectScale = (
	whichEffect: effect,
	scale: number,
): void => {};

export const BlzSetSpecialEffectPosition = (
	whichEffect: effect,
	x: number,
	y: number,
	z: number,
): void => {};

export const BlzSetSpecialEffectHeight = (
	whichEffect: effect,
	height: number,
): void => {};

export const BlzSetSpecialEffectTimeScale = (
	whichEffect: effect,
	timeScale: number,
): void => {};

export const BlzSetSpecialEffectTime = (
	whichEffect: effect,
	time: number,
): void => {};

export const BlzSetSpecialEffectOrientation = (
	whichEffect: effect,
	yaw: number,
	pitch: number,
	roll: number,
): void => {};

export const BlzSetSpecialEffectYaw = (
	whichEffect: effect,
	yaw: number,
): void => {};

export const BlzSetSpecialEffectPitch = (
	whichEffect: effect,
	pitch: number,
): void => {};

export const BlzSetSpecialEffectRoll = (
	whichEffect: effect,
	roll: number,
): void => {};

export const BlzSetSpecialEffectX = (
	whichEffect: effect,
	x: number,
): void => {};

export const BlzSetSpecialEffectY = (
	whichEffect: effect,
	y: number,
): void => {};

export const BlzSetSpecialEffectZ = (
	whichEffect: effect,
	z: number,
): void => {};

export const BlzSetSpecialEffectPositionLoc = (
	whichEffect: effect,
	loc: location,
): void => {};

export const BlzGetLocalSpecialEffectX = (whichEffect: effect): number => {
	notImplemented("BlzGetLocalSpecialEffectX");
	return 0;
};

export const BlzGetLocalSpecialEffectY = (whichEffect: effect): number => {
	notImplemented("BlzGetLocalSpecialEffectY");
	return 0;
};

export const BlzGetLocalSpecialEffectZ = (whichEffect: effect): number => {
	notImplemented("BlzGetLocalSpecialEffectZ");
	return 0;
};

export const BlzSpecialEffectClearSubAnimations = (
	whichEffect: effect,
): void => {};

export const BlzSpecialEffectRemoveSubAnimation = (
	whichEffect: effect,
	whichSubAnim: subanimtype,
): void => {};

export const BlzSpecialEffectAddSubAnimation = (
	whichEffect: effect,
	whichSubAnim: subanimtype,
): void => {};

export const BlzPlaySpecialEffect = (
	whichEffect: effect,
	whichAnim: animtype,
): void => {};

export const BlzPlaySpecialEffectWithTimeScale = (
	whichEffect: effect,
	whichAnim: animtype,
	timeScale: number,
): void => {};

export const BlzGetAnimName = (whichAnim: animtype): string => {
	notImplemented("BlzGetAnimName");
	return "";
};

export const BlzGetUnitArmor = (whichUnit: unit): number => {
	notImplemented("BlzGetUnitArmor");
	return 0;
};

export const BlzSetUnitArmor = (
	whichUnit: unit,
	armorAmount: number,
): void => {};

export const BlzUnitHideAbility = (
	whichUnit: unit,
	abilId: number,
	flag: boolean,
): void => {};

export const BlzUnitDisableAbility = (
	whichUnit: unit,
	abilId: number,
	flag: boolean,
	hideUI: boolean,
): void => {};

export const BlzUnitCancelTimedLife = (whichUnit: unit): void => {};

export const BlzIsUnitSelectable = (whichUnit: unit): boolean => {
	notImplemented("BlzIsUnitSelectable");
	return false;
};

export const BlzIsUnitInvulnerable = (whichUnit: unit): boolean => {
	notImplemented("BlzIsUnitInvulnerable");
	return false;
};

export const BlzUnitInterruptAttack = (whichUnit: unit): void => {};

export const BlzGetUnitCollisionSize = (whichUnit: unit): number => {
	notImplemented("BlzGetUnitCollisionSize");
	return 0;
};

export const BlzGetAbilityManaCost = (
	abilId: number,
	level: number,
): number => {
	notImplemented("BlzGetAbilityManaCost");
	return 0;
};

export const BlzGetAbilityCooldown = (
	abilId: number,
	level: number,
): number => {
	notImplemented("BlzGetAbilityCooldown");
	return 0;
};

export const BlzSetUnitAbilityCooldown = (
	whichUnit: unit,
	abilId: number,
	level: number,
	cooldown: number,
): void => {};

export const BlzGetUnitAbilityCooldown = (
	whichUnit: unit,
	abilId: number,
	level: number,
): number => {
	notImplemented("BlzGetUnitAbilityCooldown");
	return 0;
};

export const BlzGetUnitAbilityCooldownRemaining = (
	whichUnit: unit,
	abilId: number,
): number => {
	notImplemented("BlzGetUnitAbilityCooldownRemaining");
	return 0;
};

export const BlzEndUnitAbilityCooldown = (
	whichUnit: unit,
	abilCode: number,
): void => {};

export const BlzGetUnitAbilityManaCost = (
	whichUnit: unit,
	abilId: number,
	level: number,
): number => {
	notImplemented("BlzGetUnitAbilityManaCost");
	return 0;
};

export const BlzSetUnitAbilityManaCost = (
	whichUnit: unit,
	abilId: number,
	level: number,
	manaCost: number,
): void => {};

export const BlzGetLocalUnitZ = (whichUnit: unit): number => {
	notImplemented("BlzGetLocalUnitZ");
	return 0;
};

export const BlzDecPlayerTechResearched = (
	whichPlayer: player,
	techid: number,
	levels: number,
): void => {};

export const BlzSetEventDamage = (damage: number): void => {};

export const BlzGetEventDamageTarget = (): unit => {
	notImplemented("BlzGetEventDamageTarget");
	return (null as any) as unit;
};

export const BlzGetEventAttackType = (): attacktype => {
	notImplemented("BlzGetEventAttackType");
	return (null as any) as attacktype;
};

export const BlzGetEventDamageType = (): damagetype => {
	notImplemented("BlzGetEventDamageType");
	return (null as any) as damagetype;
};

export const BlzGetEventWeaponType = (): weapontype => {
	notImplemented("BlzGetEventWeaponType");
	return (null as any) as weapontype;
};

export const BlzSetEventAttackType = (attackType: attacktype): boolean => {
	notImplemented("BlzSetEventAttackType");
	return false;
};

export const BlzSetEventDamageType = (damageType: damagetype): boolean => {
	notImplemented("BlzSetEventDamageType");
	return false;
};

export const BlzSetEventWeaponType = (weaponType: weapontype): boolean => {
	notImplemented("BlzSetEventWeaponType");
	return false;
};

export const RequestExtraIntegerData = (
	dataType: number,
	whichPlayer: player,
	param1: string,
	param2: string,
	param3: boolean,
	param4: number,
	param5: number,
	param6: number,
): number => {
	notImplemented("RequestExtraIntegerData");
	return 0;
};

export const RequestExtraBooleanData = (
	dataType: number,
	whichPlayer: player,
	param1: string,
	param2: string,
	param3: boolean,
	param4: number,
	param5: number,
	param6: number,
): boolean => {
	notImplemented("RequestExtraBooleanData");
	return false;
};

export const RequestExtraStringData = (
	dataType: number,
	whichPlayer: player,
	param1: string,
	param2: string,
	param3: boolean,
	param4: number,
	param5: number,
	param6: number,
): string => {
	notImplemented("RequestExtraStringData");
	return "";
};

export const RequestExtraRealData = (
	dataType: number,
	whichPlayer: player,
	param1: string,
	param2: string,
	param3: boolean,
	param4: number,
	param5: number,
	param6: number,
): number => {
	notImplemented("RequestExtraRealData");
	return 0;
};

// Add this function to follow the style of GetUnitX and GetUnitY, it has the same result as BlzGetLocalUnitZ
export const BlzGetUnitZ = (whichUnit: unit): number => {
	notImplemented("BlzGetUnitZ");
	return 0;
};

export const BlzEnableSelections = (
	enableSelection: boolean,
	enableSelectionCircle: boolean,
): void => {};

export const BlzIsSelectionEnabled = (): boolean => {
	notImplemented("BlzIsSelectionEnabled");
	return false;
};

export const BlzIsSelectionCircleEnabled = (): boolean => {
	notImplemented("BlzIsSelectionCircleEnabled");
	return false;
};

export const BlzCameraSetupApplyForceDurationSmooth = (
	whichSetup: camerasetup,
	doPan: boolean,
	forcedDuration: number,
	easeInDuration: number,
	easeOutDuration: number,
	smoothFactor: number,
): void => {};

export const BlzEnableTargetIndicator = (enable: boolean): void => {};

export const BlzIsTargetIndicatorEnabled = (): boolean => {
	notImplemented("BlzIsTargetIndicatorEnabled");
	return false;
};

export const BlzGetOriginFrame = (
	frameType: originframetype,
	index: number,
): framehandle => {
	notImplemented("BlzGetOriginFrame");
	return (null as any) as framehandle;
};

export const BlzEnableUIAutoPosition = (enable: boolean): void => {};

export const BlzHideOriginFrames = (enable: boolean): void => {};

export const BlzConvertColor = (
	a: number,
	r: number,
	g: number,
	b: number,
): number => a * 255 ** 3 + r * 255 ** 2 + g * 255 + b;

export const BlzLoadTOCFile = (TOCFile: string): boolean => {
	notImplemented("BlzLoadTOCFile");
	return false;
};

export const BlzCreateFrame = (
	name: string,
	owner: framehandle,
	priority: number,
	createContext: number,
): framehandle => {
	notImplemented("BlzCreateFrame");
	return (null as any) as framehandle;
};

export const BlzCreateSimpleFrame = (
	name: string,
	owner: framehandle,
	createContext: number,
): framehandle => {
	notImplemented("BlzCreateSimpleFrame");
	return (null as any) as framehandle;
};

export const BlzCreateFrameByType = (
	typeName: string,
	name: string,
	owner: framehandle,
	inherits: string,
	createContext: number,
): framehandle => {
	notImplemented("BlzCreateFrameByType");
	return (null as any) as framehandle;
};

export const BlzDestroyFrame = (frame: framehandle): void => {};

export const BlzFrameSetPoint = (
	frame: framehandle,
	point: framepointtype,
	relative: framehandle,
	relativePoint: framepointtype,
	x: number,
	y: number,
): void => {};

export const BlzFrameSetAbsPoint = (
	frame: framehandle,
	point: framepointtype,
	x: number,
	y: number,
): void => {};

export const BlzFrameClearAllPoints = (frame: framehandle): void => {};

export const BlzFrameSetAllPoints = (
	frame: framehandle,
	relative: framehandle,
): void => {};

export const BlzFrameSetVisible = (
	frame: framehandle,
	visible: boolean,
): void => {};

export const BlzFrameIsVisible = (frame: framehandle): boolean => {
	notImplemented("BlzFrameIsVisible");
	return false;
};

export const BlzGetFrameByName = (
	name: string,
	createContext: number,
): framehandle => {
	notImplemented("BlzGetFrameByName");
	return (null as any) as framehandle;
};

export const BlzFrameGetName = (frame: framehandle): string => {
	notImplemented("BlzFrameGetName");
	return "";
};

export const BlzFrameClick = (frame: framehandle): void => {};

export const BlzFrameSetText = (frame: framehandle, text: string): void => {};

export const BlzFrameGetText = (frame: framehandle): string => {
	notImplemented("BlzFrameGetText");
	return "";
};

export const BlzFrameAddText = (frame: framehandle, text: string): void => {};

export const BlzFrameSetTextSizeLimit = (
	frame: framehandle,
	size: number,
): void => {};

export const BlzFrameGetTextSizeLimit = (frame: framehandle): number => {
	notImplemented("BlzFrameGetTextSizeLimit");
	return 0;
};

export const BlzFrameSetTextColor = (
	frame: framehandle,
	color: number,
): void => {};

export const BlzFrameSetFocus = (frame: framehandle, flag: boolean): void => {};

export const BlzFrameSetModel = (
	frame: framehandle,
	modelFile: string,
	cameraIndex: number,
): void => {};

export const BlzFrameSetEnable = (
	frame: framehandle,
	enabled: boolean,
): void => {};

export const BlzFrameGetEnable = (frame: framehandle): boolean => {
	notImplemented("BlzFrameGetEnable");
	return false;
};

export const BlzFrameSetAlpha = (frame: framehandle, alpha: number): void => {};

export const BlzFrameGetAlpha = (frame: framehandle): number => {
	notImplemented("BlzFrameGetAlpha");
	return 0;
};

export const BlzFrameSetSpriteAnimate = (
	frame: framehandle,
	primaryProp: number,
	flags: number,
): void => {};

export const BlzFrameSetTexture = (
	frame: framehandle,
	texFile: string,
	flag: number,
	blend: boolean,
): void => {};

export const BlzFrameSetScale = (frame: framehandle, scale: number): void => {};

export const BlzFrameSetTooltip = (
	frame: framehandle,
	tooltip: framehandle,
): void => {};

export const BlzFrameCageMouse = (
	frame: framehandle,
	enable: boolean,
): void => {};

export const BlzFrameSetValue = (frame: framehandle, value: number): void => {};

export const BlzFrameGetValue = (frame: framehandle): number => {
	notImplemented("BlzFrameGetValue");
	return 0;
};

export const BlzFrameSetMinMaxValue = (
	frame: framehandle,
	minValue: number,
	maxValue: number,
): void => {};

export const BlzFrameSetStepSize = (
	frame: framehandle,
	stepSize: number,
): void => {};

export const BlzFrameSetSize = (
	frame: framehandle,
	width: number,
	height: number,
): void => {};

export const BlzFrameSetVertexColor = (
	frame: framehandle,
	color: number,
): void => {};

export const BlzFrameSetLevel = (frame: framehandle, level: number): void => {};

export const BlzFrameSetParent = (
	frame: framehandle,
	parent: framehandle,
): void => {};

export const BlzFrameGetParent = (frame: framehandle): framehandle => {
	notImplemented("BlzFrameGetParent");
	return (null as any) as framehandle;
};

export const BlzFrameGetHeight = (frame: framehandle): number => {
	notImplemented("BlzFrameGetHeight");
	return 0;
};

export const BlzFrameGetWidth = (frame: framehandle): number => {
	notImplemented("BlzFrameGetWidth");
	return 0;
};

export const BlzFrameSetFont = (
	frame: framehandle,
	fileName: string,
	height: number,
	flags: number,
): void => {};

export const BlzFrameSetTextAlignment = (
	frame: framehandle,
	vert: textaligntype,
	horz: textaligntype,
): void => {};

export const BlzTriggerRegisterFrameEvent = (
	whichTrigger: trigger,
	frame: framehandle,
	eventId: frameeventtype,
): event => {
	notImplemented("BlzTriggerRegisterFrameEvent");
	return (null as any) as event;
};

export const BlzGetTriggerFrame = (): framehandle => {
	notImplemented("BlzGetTriggerFrame");
	return (null as any) as framehandle;
};

export const BlzGetTriggerFrameEvent = (): frameeventtype => {
	notImplemented("BlzGetTriggerFrameEvent");
	return (null as any) as frameeventtype;
};

export const BlzGetTriggerFrameValue = (): number => {
	notImplemented("BlzGetTriggerFrameValue");
	return 0;
};

export const BlzGetTriggerFrameText = (): string => {
	notImplemented("BlzGetTriggerFrameText");
	return "";
};

export const BlzTriggerRegisterPlayerSyncEvent = (
	whichTrigger: trigger,
	whichPlayer: player,
	prefix: string,
	fromServer: boolean,
): event => {
	notImplemented("BlzTriggerRegisterPlayerSyncEvent");
	return (null as any) as event;
};

export const BlzSendSyncData = (prefix: string, data: string): boolean => {
	notImplemented("BlzSendSyncData");
	return false;
};

export const BlzGetTriggerSyncPrefix = (): string => {
	notImplemented("BlzGetTriggerSyncPrefix");
	return "";
};

export const BlzGetTriggerSyncData = (): string => {
	notImplemented("BlzGetTriggerSyncData");
	return "";
};

export const BlzTriggerRegisterPlayerKeyEvent = (
	whichTrigger: trigger,
	whichPlayer: player,
	key: oskeytype,
	metaKey: number,
	keyDown: boolean,
): event => {
	notImplemented("BlzTriggerRegisterPlayerKeyEvent");
	return (null as any) as event;
};

export const BlzGetTriggerPlayerKey = (): oskeytype => {
	notImplemented("BlzGetTriggerPlayerKey");
	return (null as any) as oskeytype;
};

export const BlzGetTriggerPlayerMetaKey = (): number => {
	notImplemented("BlzGetTriggerPlayerMetaKey");
	return 0;
};

export const BlzGetTriggerPlayerIsKeyDown = (): boolean => {
	notImplemented("BlzGetTriggerPlayerIsKeyDown");
	return false;
};

export const BlzEnableCursor = (enable: boolean): void => {};

export const BlzSetMousePos = (x: number, y: number): void => {};

export const BlzGetLocalClientWidth = (): number => {
	notImplemented("BlzGetLocalClientHeight");
	return 0;
};

export const BlzGetLocalClientHeight = (): number => {
	notImplemented("BlzGetLocalClientHeight");
	return 0;
};

export const BlzIsLocalClientActive = (): boolean => {
	notImplemented("BlzIsLocalClientActive");
	return false;
};

export const BlzGetMouseFocusUnit = (): unit => {
	notImplemented("BlzGetMouseFocusUnit");
	return (null as any) as unit;
};

export const BlzChangeMinimapTerrainTex = (texFile: string): boolean => {
	notImplemented("BlzChangeMinimapTerrainTex");
	return false;
};

export const BlzGetLocale = (): string => {
	notImplemented("BlzGetLocale");
	return "";
};

export const BlzGetSpecialEffectScale = (whichEffect: effect): number => {
	notImplemented("BlzGetSpecialEffectScale");
	return 0;
};

export const BlzSetSpecialEffectMatrixScale = (
	whichEffect: effect,
	x: number,
	y: number,
	z: number,
): void => {};

export const BlzResetSpecialEffectMatrix = (whichEffect: effect): void => {};

export const BlzGetUnitAbility = (whichUnit: unit, abilId: number): ability => {
	notImplemented("BlzGetUnitAbility");
	return (null as any) as ability;
};

export const BlzGetUnitAbilityByIndex = (
	whichUnit: unit,
	index: number,
): ability => {
	notImplemented("BlzGetUnitAbilityByIndex");
	return (null as any) as ability;
};

export const BlzDisplayChatMessage = (
	whichPlayer: player,
	recipient: number,
	message: string,
): void => {};

export const BlzPauseUnitEx = (whichUnit: unit, flag: boolean): void => {};

// native BlzFourCC2S                                 takes integer value returns string
// native BlzS2FourCC                                 takes string value returns integer

// Bit Operations
export const BlzBitOr = (x: number, y: number): number => x | y;

export const BlzBitAnd = (x: number, y: number): number => x & y;

export const BlzBitXor = (x: number, y: number): number => x ^ y;

// Intanced Object Operations
// Ability
export const BlzGetAbilityBooleanField = (
	whichAbility: ability,
	whichField: abilitybooleanfield,
): boolean => {
	notImplemented("BlzGetAbilityBooleanField");
	return false;
};

export const BlzGetAbilityIntegerField = (
	whichAbility: ability,
	whichField: abilityintegerfield,
): number => {
	notImplemented("BlzGetAbilityIntegerField");
	return 0;
};

export const BlzGetAbilityRealField = (
	whichAbility: ability,
	whichField: abilityintegerfield,
): number => {
	notImplemented("BlzGetAbilityRealField");
	return 0;
};

export const BlzGetAbilityStringField = (
	whichAbility: ability,
	whichField: abilitystringfield,
): string => {
	notImplemented("BlzGetAbilityStringField");
	return "";
};

export const BlzGetAbilityBooleanLevelField = (
	whichAbility: ability,
	whichField: abilitybooleanlevelfield,
	level: number,
): boolean => {
	notImplemented("BlzGetAbilityBooleanLevelField");
	return false;
};

export const BlzGetAbilityIntegerLevelField = (
	whichAbility: ability,
	whichField: abilityintegerlevelfield,
	level: number,
): number => {
	notImplemented("BlzGetAbilityIntegerLevelField");
	return 0;
};

export const BlzGetAbilityRealLevelField = (
	whichAbility: ability,
	whichField: abilityreallevelfield,
	level: number,
): number => {
	notImplemented("BlzGetAbilityRealLevelField");
	return 0;
};

export const BlzGetAbilityStringLevelField = (
	whichAbility: ability,
	whichField: abilitystringlevelfield,
	level: number,
): string => {
	notImplemented("BlzGetAbilityStringLevelField");
	return "";
};

export const BlzGetAbilityBooleanLevelArrayField = (
	whichAbility: ability,
	whichField: abilitybooleanlevelarrayfield,
	level: number,
	index: number,
): boolean => {
	notImplemented("BlzGetAbilityBooleanLevelArrayField");
	return false;
};

export const BlzGetAbilityIntegerLevelArrayField = (
	whichAbility: ability,
	whichField: abilityintegerlevelarrayfield,
	level: number,
	index: number,
): number => {
	notImplemented("BlzGetAbilityIntegerLevelArrayField");
	return 0;
};

export const BlzGetAbilityRealLevelArrayField = (
	whichAbility: ability,
	whichField: abilityreallevelarrayfield,
	level: number,
	index: number,
): number => {
	notImplemented("BlzGetAbilityRealLevelArrayField");
	return 0;
};

export const BlzGetAbilityStringLevelArrayField = (
	whichAbility: ability,
	whichField: abilitystringlevelarrayfield,
	level: number,
	index: number,
): string => {
	notImplemented("BlzGetAbilityStringLevelArrayField");
	return "";
};

export const BlzSetAbilityBooleanField = (
	whichAbility: ability,
	whichField: abilitybooleanfield,
	value: boolean,
): boolean => {
	notImplemented("BlzSetAbilityBooleanField");
	return false;
};

export const BlzSetAbilityIntegerField = (
	whichAbility: ability,
	whichField: abilityintegerfield,
	value: number,
): boolean => {
	notImplemented("BlzSetAbilityIntegerField");
	return false;
};

export const BlzSetAbilityRealField = (
	whichAbility: ability,
	whichField: abilityrealfield,
	value: number,
): boolean => {
	notImplemented("BlzSetAbilityRealField");
	return false;
};

export const BlzSetAbilityStringField = (
	whichAbility: ability,
	whichField: abilitystringfield,
	value: string,
): boolean => {
	notImplemented("BlzSetAbilityStringField");
	return false;
};

export const BlzSetAbilityBooleanLevelField = (
	whichAbility: ability,
	whichField: abilitybooleanlevelfield,
	level: number,
	value: boolean,
): boolean => {
	notImplemented("BlzSetAbilityBooleanLevelField");
	return false;
};

export const BlzSetAbilityIntegerLevelField = (
	whichAbility: ability,
	whichField: abilityintegerlevelfield,
	level: number,
	value: number,
): boolean => {
	notImplemented("BlzSetAbilityIntegerLevelField");
	return false;
};

export const BlzSetAbilityRealLevelField = (
	whichAbility: ability,
	whichField: abilityreallevelfield,
	level: number,
	value: number,
): boolean => {
	notImplemented("BlzSetAbilityRealLevelField");
	return false;
};

export const BlzSetAbilityStringLevelField = (
	whichAbility: ability,
	whichField: abilitystringlevelfield,
	level: number,
	value: string,
): boolean => {
	notImplemented("BlzSetAbilityStringLevelField");
	return false;
};

export const BlzSetAbilityBooleanLevelArrayField = (
	whichAbility: ability,
	whichField: abilitybooleanlevelarrayfield,
	level: number,
	index: number,
	value: boolean,
): boolean => {
	notImplemented("BlzSetAbilityBooleanLevelArrayField");
	return false;
};

export const BlzSetAbilityIntegerLevelArrayField = (
	whichAbility: ability,
	whichField: abilityintegerlevelarrayfield,
	level: number,
	index: number,
	value: number,
): boolean => {
	notImplemented("BlzSetAbilityIntegerLevelArrayField");
	return false;
};

export const BlzSetAbilityRealLevelArrayField = (
	whichAbility: ability,
	whichField: abilityreallevelarrayfield,
	level: number,
	index: number,
	value: number,
): boolean => {
	notImplemented("BlzSetAbilityRealLevelArrayField");
	return false;
};

export const BlzSetAbilityStringLevelArrayField = (
	whichAbility: ability,
	whichField: abilitystringlevelarrayfield,
	level: number,
	index: number,
	value: string,
): boolean => {
	notImplemented("BlzSetAbilityStringLevelArrayField");
	return false;
};

export const BlzAddAbilityBooleanLevelArrayField = (
	whichAbility: ability,
	whichField: abilitybooleanlevelarrayfield,
	level: number,
	value: boolean,
): boolean => {
	notImplemented("BlzAddAbilityBooleanLevelArrayField");
	return false;
};

export const BlzAddAbilityIntegerLevelArrayField = (
	whichAbility: ability,
	whichField: abilityintegerlevelarrayfield,
	level: number,
	value: number,
): boolean => {
	notImplemented("BlzAddAbilityIntegerLevelArrayField");
	return false;
};

export const BlzAddAbilityRealLevelArrayField = (
	whichAbility: ability,
	whichField: abilityreallevelarrayfield,
	level: number,
	value: number,
): boolean => {
	notImplemented("BlzAddAbilityRealLevelArrayField");
	return false;
};

export const BlzAddAbilityStringLevelArrayField = (
	whichAbility: ability,
	whichField: abilitystringlevelarrayfield,
	level: number,
	value: string,
): boolean => {
	notImplemented("BlzAddAbilityStringLevelArrayField");
	return false;
};

export const BlzRemoveAbilityBooleanLevelArrayField = (
	whichAbility: ability,
	whichField: abilitybooleanlevelarrayfield,
	level: number,
	value: boolean,
): boolean => {
	notImplemented("BlzRemoveAbilityBooleanLevelArrayField");
	return false;
};

export const BlzRemoveAbilityIntegerLevelArrayField = (
	whichAbility: ability,
	whichField: abilityintegerlevelarrayfield,
	level: number,
	value: number,
): boolean => {
	notImplemented("BlzRemoveAbilityIntegerLevelArrayField");
	return false;
};

export const BlzRemoveAbilityRealLevelArrayField = (
	whichAbility: ability,
	whichField: abilityreallevelarrayfield,
	level: number,
	value: number,
): boolean => {
	notImplemented("BlzRemoveAbilityRealLevelArrayField");
	return false;
};

export const BlzRemoveAbilityStringLevelArrayField = (
	whichAbility: ability,
	whichField: abilitystringlevelarrayfield,
	level: number,
	value: string,
): boolean => {
	notImplemented("BlzRemoveAbilityStringLevelArrayField");
	return false;
};

// Item
export const BlzGetItemAbilityByIndex = (
	whichItem: item,
	index: number,
): ability => {
	notImplemented("BlzGetItemAbilityByIndex");
	return (null as any) as ability;
};

export const BlzGetItemAbility = (
	whichItem: item,
	abilCode: number,
): ability => {
	notImplemented("BlzGetItemAbility");
	return (null as any) as ability;
};

export const BlzItemAddAbility = (
	whichItem: item,
	abilCode: number,
): boolean => {
	notImplemented("BlzItemAddAbility");
	return false;
};

export const BlzGetItemBooleanField = (
	whichItem: item,
	whichField: itembooleanfield,
): boolean => {
	notImplemented("BlzGetItemBooleanField");
	return false;
};

export const BlzGetItemIntegerField = (
	whichItem: item,
	whichField: itemintegerfield,
): number => {
	notImplemented("BlzGetItemIntegerField");
	return 0;
};

export const BlzGetItemRealField = (
	whichItem: item,
	whichField: itemrealfield,
): number => {
	notImplemented("BlzGetItemRealField");
	return 0;
};

export const BlzGetItemStringField = (
	whichItem: item,
	whichField: itemstringfield,
): string => {
	notImplemented("BlzGetItemStringField");
	return "";
};

export const BlzSetItemBooleanField = (
	whichItem: item,
	whichField: itembooleanfield,
	value: boolean,
): boolean => {
	notImplemented("BlzSetItemBooleanField");
	return false;
};

export const BlzSetItemIntegerField = (
	whichItem: item,
	whichField: itemintegerfield,
	value: number,
): boolean => {
	notImplemented("BlzSetItemIntegerField");
	return false;
};

export const BlzSetItemRealField = (
	whichItem: item,
	whichField: itemrealfield,
	value: number,
): boolean => {
	notImplemented("BlzSetItemRealField");
	return false;
};

export const BlzSetItemStringField = (
	whichItem: item,
	whichField: itemstringfield,
	value: string,
): boolean => {
	notImplemented("BlzSetItemStringField");
	return false;
};

export const BlzItemRemoveAbility = (
	whichItem: item,
	abilCode: number,
): boolean => {
	notImplemented("BlzItemRemoveAbility");
	return false;
};

// Unit
export const BlzGetUnitBooleanField = (
	whichUnit: unit,
	whichField: unitbooleanfield,
): boolean => {
	notImplemented("BlzGetUnitBooleanField");
	return false;
};

export const BlzGetUnitIntegerField = (
	whichUnit: unit,
	whichField: unitintegerfield,
): number => {
	notImplemented("BlzGetUnitIntegerField");
	return 0;
};

export const BlzGetUnitRealField = (
	whichUnit: unit,
	whichField: unitrealfield,
): number => {
	notImplemented("BlzGetUnitRealField");
	return 0;
};

export const BlzGetUnitStringField = (
	whichUnit: unit,
	whichField: unitstringfield,
): string => {
	notImplemented("BlzGetUnitStringField");
	return "";
};

export const BlzSetUnitBooleanField = (
	whichUnit: unit,
	whichField: unitbooleanfield,
	value: boolean,
): boolean => {
	notImplemented("BlzSetUnitBooleanField");
	return false;
};

export const BlzSetUnitIntegerField = (
	whichUnit: unit,
	whichField: unitintegerfield,
	value: number,
): boolean => {
	notImplemented("BlzSetUnitIntegerField");
	return false;
};

export const BlzSetUnitRealField = (
	whichUnit: unit,
	whichField: unitrealfield,
	value: number,
): boolean => {
	notImplemented("BlzSetUnitRealField");
	return false;
};

export const BlzSetUnitStringField = (
	whichUnit: unit,
	whichField: unitstringfield,
	value: string,
): boolean => {
	notImplemented("BlzSetUnitStringField");
	return false;
};

// Unit Weapon
export const BlzGetUnitWeaponBooleanField = (
	whichUnit: unit,
	whichField: unitweaponbooleanfield,
	index: number,
): boolean => {
	notImplemented("BlzGetUnitWeaponBooleanField");
	return false;
};

export const BlzGetUnitWeaponIntegerField = (
	whichUnit: unit,
	whichField: unitweaponintegerfield,
	index: number,
): number => {
	notImplemented("BlzGetUnitWeaponIntegerField");
	return 0;
};

export const BlzGetUnitWeaponRealField = (
	whichUnit: unit,
	whichField: unitweaponrealfield,
	index: number,
): number => {
	notImplemented("BlzGetUnitWeaponRealField");
	return 0;
};

export const BlzGetUnitWeaponStringField = (
	whichUnit: unit,
	whichField: unitweaponstringfield,
	index: number,
): string => {
	notImplemented("BlzGetUnitWeaponStringField");
	return "";
};

export const BlzSetUnitWeaponBooleanField = (
	whichUnit: unit,
	whichField: unitweaponbooleanfield,
	index: number,
	value: boolean,
): boolean => {
	notImplemented("BlzSetUnitWeaponBooleanField");
	return false;
};

export const BlzSetUnitWeaponIntegerField = (
	whichUnit: unit,
	whichField: unitweaponintegerfield,
	index: number,
	value: number,
): boolean => {
	notImplemented("BlzSetUnitWeaponIntegerField");
	return false;
};

export const BlzSetUnitWeaponRealField = (
	whichUnit: unit,
	whichField: unitweaponrealfield,
	index: number,
	value: number,
): boolean => {
	notImplemented("BlzSetUnitWeaponRealField");
	return false;
};

export const BlzSetUnitWeaponStringField = (
	whichUnit: unit,
	whichField: unitweaponstringfield,
	index: number,
	value: string,
): boolean => {
	notImplemented("BlzSetUnitWeaponStringField");
	return false;
};
