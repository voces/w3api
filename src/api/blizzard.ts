
import { Location, GetBJMaxPlayers, GetBJPlayerNeutralVictim, GetBJPlayerNeutralExtra, GetBJMaxPlayerSlots, MAP_SPEED_NORMAL, FourCC, CreateTimer, CreateGroup, DisplayTimedTextToPlayer, Sin, Cos, Tan, Asin, Acos, Atan, Atan2, GetLocationY, GetLocationX, SquareRoot, GetRandomReal, GetRectMinX, GetRectMaxX, GetRectMinY, GetRectMaxY, I2R, R2I, Rect, GetUnitX, GetUnitY, IsItemOwned, GetItemX, GetItemY, TriggerEvaluate, TriggerExecute, I2S, TimerStart, PauseTimer, TimerGetRemaining, TriggerSleepAction, DestroyTimer, GetLocalizedString, GetFloatGameState, GAME_STATE_TIME_OF_DAY, SetFloatGameState, SetTimeOfDayScale, GetTimeOfDayScale, CreateSound, StartSound, KillSoundWhenDone, CreateCameraSetup, CameraSetupSetField, CAMERA_FIELD_TARGET_DISTANCE, GetCameraField, CAMERA_FIELD_FARZ, CAMERA_FIELD_ZOFFSET, CAMERA_FIELD_ANGLE_OF_ATTACK, CAMERA_FIELD_FIELD_OF_VIEW, CAMERA_FIELD_ROLL, CAMERA_FIELD_ROTATION, CAMERA_FIELD_LOCAL_PITCH, CAMERA_FIELD_LOCAL_YAW, CAMERA_FIELD_LOCAL_ROLL, CameraSetupSetDestPosition, GetCameraTargetPositionX, GetCameraTargetPositionY, CameraSetupApplyForceDuration, CameraSetupGetField, SetCameraField, SetCameraTargetController, SetCameraPosition, SetCameraRotateMode, PanCameraTo, PanCameraToTimed, PanCameraToTimedWithZ, GetCameraTargetPositionLoc, RemoveLocation, SetCinematicCamera, ResetToGameCamera, CameraSetSourceNoise, CameraSetTargetNoise, CameraSetTargetNoiseEx, Pow, CameraSetSourceNoiseEx, GetCameraBoundMinX, GetCameraBoundMinY, GetCameraBoundMaxX, GetCameraBoundMaxY, GetWorldBounds, SetCameraBounds, SetCameraQuickPosition, StopCamera, SetCameraOrientController, CameraSetSmoothingFactor, DisplayTextToPlayer, ClearTextMessages, SubString, GetHandleId, StringHash, TriggerRegisterPlayerUnitEvent, EVENT_PLAYER_UNIT_SELECTED, EVENT_PLAYER_UNIT_DESELECTED, TriggerRegisterPlayerEvent, EVENT_PLAYER_ARROW_LEFT_DOWN, EVENT_PLAYER_ARROW_RIGHT_DOWN, EVENT_PLAYER_ARROW_DOWN_DOWN, EVENT_PLAYER_ARROW_UP_DOWN, EVENT_PLAYER_ARROW_LEFT_UP, EVENT_PLAYER_ARROW_RIGHT_UP, EVENT_PLAYER_ARROW_DOWN_UP, EVENT_PLAYER_ARROW_UP_UP, EVENT_PLAYER_MOUSE_DOWN, EVENT_PLAYER_MOUSE_UP, EVENT_PLAYER_MOUSE_MOVE, EVENT_PLAYER_VICTORY, EVENT_PLAYER_DEFEAT, EVENT_PLAYER_LEAVE, EVENT_PLAYER_ALLIANCE_CHANGED, EVENT_PLAYER_END_CINEMATIC, CreateRegion, RegionAddRect, TriggerRegisterUnitInRange, TriggerRegisterUnitStateEvent, UNIT_STATE_LIFE, UNIT_STATE_MANA, EVENT_GAME_SHOW_SKILL, EVENT_GAME_BUILD_SUBMENU, EVENT_GAME_LOADED, EVENT_GAME_SAVE, TriggerRegisterDeathEvent, GetEnumDestructable, EnumDestructablesInRect, AddWeatherEffect, RemoveWeatherEffect, TerrainDeformCrater, TerrainDeformRipple, TerrainDeformWave, TerrainDeformRandom, TerrainDeformStop, AddLightningEx, GetLocationZ, DestroyLightning, MoveLightningEx, GetLightningColorA, GetLightningColorR, GetLightningColorG, GetLightningColorB, SetLightningColor, GetAbilityEffectById, GetAbilitySoundById, GetTerrainCliffLevel, GetTerrainType, GetTerrainVariance, SetTerrainType, IsTerrainPathable, SetTerrainPathable, SetWaterBaseColor, CreateFogModifierRect, CreateFogModifierRadiusLoc, FogModifierStart, FogEnable, FogMaskEnable, SuspendTimeOfDay, SetTerrainFogEx, ResetTerrainFog, SetDoodadAnimation, SetDoodadAnimationRect, AddUnitAnimationProperties, CreateImage, ShowImage, SetImagePosition, SetImageColor, CreateUbersplat, ShowUbersplat, StopSound, SetSoundVolume, SetSoundPlayPosition, SetSoundDistanceCutoff, SetSoundPitch, SetSoundPosition, AttachSoundToUnit, SetSoundConeAngles, PlayMusic, PlayMusicEx, SetMusicPlayPosition, PlayThematicMusic, PlayThematicMusicEx, SetThematicMusicPlayPosition, EndThematicMusic, StopMusic, ResumeMusic, SetMusicVolume, GetSoundDuration, GetSoundFileDuration, VolumeGroupSetVolume, SOUND_VOLUMEGROUP_UNITMOVEMENT, SOUND_VOLUMEGROUP_UNITSOUNDS, SOUND_VOLUMEGROUP_COMBAT, SOUND_VOLUMEGROUP_SPELLS, SOUND_VOLUMEGROUP_UI, SOUND_VOLUMEGROUP_MUSIC, SOUND_VOLUMEGROUP_AMBIENTSOUNDS, SOUND_VOLUMEGROUP_FIRE, VolumeGroupReset, GetSoundIsLoading, GetSoundIsPlaying, TriggerWaitForSound, SetMapMusic, ClearMapMusic, GetRectCenterX, GetRectCenterY, RegisterStackedSound, UnregisterStackedSound, CreateMIDISound, AddSpecialEffectLoc, AddSpecialEffectTarget, DestroyEffect, GetWidgetLife, SetWidgetLife, AddHeroXP, GetHeroLevel, SetHeroLevel, UnitStripHeroLevel, DecUnitAbilityLevel, IncUnitAbilityLevel, SetUnitAbilityLevel, GetUnitAbilityLevel, UnitRemoveAbility, UnitAddItem, CreateItem, UnitRemoveItem, UnitRemoveItemFromSlot, SetItemPosition, GetLearnedSkill, SuspendHeroXP, GetHeroStr, GetHeroAgi, GetHeroInt, SetHeroStr, SetHeroAgi, SetHeroInt, UnitModifySkillPoints, GetHeroSkillPoints, UnitDropItemPoint, UnitDropItemSlot, UnitDropItemTarget, UnitUseItemTarget, UnitUseItemPoint, UnitItemInSlot, GetItemTypeId, UnitInventorySize, SetItemInvulnerable, SetItemDropOnDeath, SetItemDroppable, SetItemPlayer, SetItemVisible, IsItemVisible, ChooseRandomItem, ChooseRandomItemEx, ChooseRandomNPBuilding, ChooseRandomCreep, EnumItemsInRect, GetRandomInt, GetEnumItem, DestroyBoolExpr, IsItemInvulnerable, IsItemPowerup, IsItemSellable, IsItemPawnable, IsItemIdPowerup, IsItemIdSellable, IsItemIdPawnable, UnitId, UnitId2String, OrderId, OrderId2String, GetIssuedOrderId, GetKillingUnit, CreateBlightedGoldmine, CreateUnitAtLoc, GroupClear, GroupAddUnit, GetEnumUnit, ForGroup, CreateCorpse, UnitSuspendDecay, GetUnitState, SetUnitTimeScale, SetUnitAnimation, DestroyGroup, CreateTrigger, TriggerAddAction, SetUnitBlendTime, UNIT_STATE_MAX_LIFE, UNIT_STATE_MAX_MANA, ClearSelection, SelectUnit, SetUnitState, IsUnitHidden, ShowUnit, IsUnitType, UNIT_TYPE_HERO, GetUnitTypeId, GetFilterUnit, GroupEnumUnitsInRangeOfLoc, FirstOfGroup, IssueTargetOrderById, IssueBuildOrderById, IssueImmediateOrderById, GroupImmediateOrderById, GetTriggerUnit, SetUnitFlyHeight, SetUnitTurnSpeed, SetUnitPropWindow, GetUnitPropWindow, GetUnitDefaultPropWindow, SetUnitAcquireRange, UnitAddSleep, UnitCanSleep, UnitWakeUp, UnitIsSleeping, GroupEnumUnitsOfPlayer, PLAYER_NEUTRAL_AGGRESSIVE, PLAYER_STATE_NO_CREEP_SLEEP, UnitIgnoreAlarm, UnitIgnoreAlarmToggled, PauseUnit, GetPlayerController, MAP_CONTROL_COMPUTER, PauseCompAI, IsUnitPaused, UnitPauseTimedLife, UnitApplyTimedLife, UnitShareVision, UnitRemoveBuffs, UnitRemoveBuffsEx, UnitCountBuffsEx, UnitAddAbility, UnitRemoveType, UnitAddType, UnitMakeAbilityPermanent, SetUnitExploded, KillUnit, GetTransportUnit, GetLoadedUnit, IsUnitInTransport, IsUnitLoaded, IsUnitIllusion, GetOwningPlayer, GetUnitFacing, CreateUnit, SetResourceAmount, GetResourceAmount, SetHeroXP, GetHeroXP, RemoveUnit, SetUnitPositionLoc, SetUnitFacing, AddItemToStock, AddUnitToStock, RemoveItemFromStock, RemoveUnitFromStock, SetUnitUseFood, UnitDamagePoint, WEAPON_TYPE_WHOKNOWS, UnitDamageTarget, CreateDestructable, CreateDeadDestructable, ShowDestructable, SetDestructableInvulnerable, IsDestructableInvulnerable, GetDestructableX, GetDestructableY, GetFilterDestructable, GetDestructableLife, RemoveRect, SetDestructableLife, GetDestructableMaxLife, SetDestructableMaxLife, DestructableRestoreLife, SetDestructableAnimation, KillDestructable, GetDestructableOccluderHeight, SetDestructableOccluderHeight, QueueDestructableAnimation, SetUnitPosition, GroupEnumUnitsInRect, GetDestructableTypeId, WaygateActivate, WaygateIsActive, WaygateSetDestination, WaygateGetDestinationX, WaygateGetDestinationY, UnitSetUsesAltIcon, ForceUIKey, ForceUICancel, GroupRemoveUnit, ForceAddPlayer, ForceRemovePlayer, GetEnumPlayer, ForForce, SyncSelections, GroupEnumUnitsSelected, CreateForce, ForceEnumAllies, ForceEnumEnemies, ForceEnumPlayers, SetUnitScale, SetUnitVertexColor, AddIndicator, GetUnitLoc, SetUnitFacingTimed, QueueUnitAnimation, SetDestructableAnimationSpeed, DialogDisplay, DialogSetMessage, DialogAddButton, DialogClear, SetPlayerAlliance, ALLIANCE_PASSIVE, ALLIANCE_HELP_REQUEST, ALLIANCE_HELP_RESPONSE, ALLIANCE_SHARED_XP, ALLIANCE_SHARED_SPELLS, ALLIANCE_SHARED_VISION, ALLIANCE_SHARED_CONTROL, ALLIANCE_SHARED_ADVANCED_CONTROL, PLAYER_STATE_GIVES_BOUNTY, SetUnitOwner, PLAYER_GAME_RESULT_VICTORY, IsNoVictoryCheat, PLAYER_GAME_RESULT_DEFEAT, IsNoDefeatCheat, PLAYER_GAME_RESULT_NEUTRAL, EndGame, DialogCreate, DisplayTimedTextFromPlayer, GetLocalizedHotkey, DialogAddQuitButton, IsMapFlagSet, MAP_OBSERVERS_ON_DEATH, GetIntegerGameState, GAME_STATE_DISCONNECTED, PauseGame, SetGameDifficulty, GetDefaultDifficulty, ChangeLevel, EnableUserControl, EnableUserUI, MAP_CONTROL_USER, RestartGame, GetGameDifficulty, MAP_DIFFICULTY_EASY, MAP_DIFFICULTY_NORMAL, MAP_DIFFICULTY_HARD, DisplayLoadDialog, SetPlayerOnScoreScreen, CreateQuest, QuestSetTitle, QuestSetDescription, QuestSetIconPath, QuestSetRequired, QuestSetDiscovered, QuestSetCompleted, DestroyQuest, QuestSetEnabled, QuestSetFailed, QuestCreateItem, QuestItemSetDescription, QuestItemSetCompleted, CreateDefeatCondition, DefeatConditionSetDescription, DestroyDefeatCondition, FlashQuestDialogButton, ResumeTimer, CreateTimerDialog, TimerDialogSetTitle, TimerDialogDisplay, DestroyTimerDialog, TimerDialogSetTitleColor, TimerDialogSetTimeColor, TimerDialogSetSpeed, LeaderboardGetItemCount, LeaderboardGetLabelText, LeaderboardSetSizeByItemCount, LeaderboardSetItemValue, LeaderboardGetPlayerIndex, LeaderboardSetItemLabel, LeaderboardSetItemStyle, LeaderboardSetItemLabelColor, LeaderboardSetItemValueColor, LeaderboardSetLabelColor, LeaderboardSetValueColor, LeaderboardSetLabel, LeaderboardSetStyle, LeaderboardHasPlayerItem, PlayerSetLeaderboard, CreateLeaderboard, LeaderboardDisplay, DestroyLeaderboard, LeaderboardRemovePlayerItem, LeaderboardAddItem, LeaderboardSortItemsByValue, LeaderboardSortItemsByPlayer, LeaderboardSortItemsByLabel, PLAYER_NEUTRAL_PASSIVE, PlayerGetLeaderboard, CreateMultiboard, MultiboardSetRowCount, MultiboardSetColumnCount, MultiboardSetTitleText, MultiboardDisplay, DestroyMultiboard, MultiboardMinimize, MultiboardSetTitleTextColor, MultiboardSuppressDisplay, MultiboardGetRowCount, MultiboardGetColumnCount, MultiboardGetItem, MultiboardSetItemStyle, MultiboardReleaseItem, MultiboardSetItemValue, MultiboardSetItemValueColor, MultiboardSetItemWidth, MultiboardSetItemIcon, SetTextTagColor, SetTextTagVelocity, SetTextTagText, SetTextTagPos, SetTextTagPosUnit, SetTextTagSuspended, SetTextTagPermanent, SetTextTagAge, SetTextTagLifespan, SetTextTagFadepoint, CreateTextTag, DestroyTextTag, SetTextTagVisibility, ShowInterface, PingMinimap, PingMinimapEx, EnableWorldFogBoundary, EnableOcclusion, EndCinematicScene, SetCinematicScene, PLAYER_COLOR_RED, GetPlayerColor, UnitAddIndicator, ForceCinematicSubtitles, GetGameSpeed, IsFogEnabled, IsFogMaskEnabled, SetGameSpeed, SetMapFlag, MAP_LOCK_SPEED, SetRandomSeed, DisplayCineFilter, SetCineFilterTexture, SetCineFilterBlendMode, BLEND_MODE_BLEND, SetCineFilterTexMapFlags, TEXMAP_FLAG_NONE, SetCineFilterStartUV, SetCineFilterEndUV, SetCineFilterStartColor, SetCineFilterEndColor, SetCineFilterDuration, UNIT_TYPE_STRUCTURE, GetRescuer, EVENT_PLAYER_UNIT_RESCUED, SetUnitRescuable, MAP_CONTROL_RESCUABLE, SetCampaignMenuRace, RACE_OTHER, RACE_HUMAN, RACE_UNDEAD, RACE_ORC, RACE_NIGHTELF, SetCampaignMenuRaceEx, SetMissionAvailable, SetTutorialCleared, SetCampaignAvailable, ForceCampaignSelectScreen, SetOpCinematicAvailable, PlayCinematic, SetEdCinematicAvailable, InitGameCache, SaveGameCache, InitHashtable, StoreReal, StoreInteger, StoreBoolean, StoreString, StoreUnit, SaveReal, SaveInteger, SaveBoolean, SaveStr, SavePlayerHandle, SaveWidgetHandle, SaveDestructableHandle, SaveItemHandle, SaveUnitHandle, SaveAbilityHandle, SaveTimerHandle, SaveTriggerHandle, SaveTriggerConditionHandle, SaveTriggerActionHandle, SaveTriggerEventHandle, SaveForceHandle, SaveGroupHandle, SaveLocationHandle, SaveRectHandle, SaveBooleanExprHandle, SaveSoundHandle, SaveEffectHandle, SaveUnitPoolHandle, SaveItemPoolHandle, SaveQuestHandle, SaveQuestItemHandle, SaveDefeatConditionHandle, SaveTimerDialogHandle, SaveLeaderboardHandle, SaveMultiboardHandle, SaveMultiboardItemHandle, SaveTrackableHandle, SaveDialogHandle, SaveButtonHandle, SaveTextTagHandle, SaveLightningHandle, SaveImageHandle, SaveUbersplatHandle, SaveRegionHandle, SaveFogStateHandle, SaveFogModifierHandle, SaveAgentHandle, SaveHashtableHandle, GetStoredReal, GetStoredInteger, GetStoredBoolean, GetStoredString, LoadReal, LoadInteger, LoadBoolean, LoadStr, LoadPlayerHandle, LoadWidgetHandle, LoadDestructableHandle, LoadItemHandle, LoadUnitHandle, LoadAbilityHandle, LoadTimerHandle, LoadTriggerHandle, LoadTriggerConditionHandle, LoadTriggerActionHandle, LoadTriggerEventHandle, LoadForceHandle, LoadGroupHandle, LoadLocationHandle, LoadRectHandle, LoadBooleanExprHandle, LoadSoundHandle, LoadEffectHandle, LoadUnitPoolHandle, LoadItemPoolHandle, LoadQuestHandle, LoadQuestItemHandle, LoadDefeatConditionHandle, LoadTimerDialogHandle, LoadLeaderboardHandle, LoadMultiboardHandle, LoadMultiboardItemHandle, LoadTrackableHandle, LoadDialogHandle, LoadButtonHandle, LoadTextTagHandle, LoadLightningHandle, LoadImageHandle, LoadUbersplatHandle, LoadRegionHandle, LoadFogStateHandle, LoadFogModifierHandle, LoadHashtableHandle, RestoreUnit, FlushGameCache, FlushStoredMission, FlushParentHashtable, FlushChildHashtable, HaveStoredBoolean, HaveStoredInteger, HaveStoredReal, HaveStoredUnit, HaveStoredString, HaveSavedBoolean, HaveSavedInteger, HaveSavedReal, HaveSavedString, HaveSavedHandle, SetCustomCampaignButtonVisible, GetCustomCampaignButtonVisible, LoadGame, SaveGame, RenameSaveDirectory, RemoveSaveDirectory, CopySaveGame, GetStartLocationX, GetPlayerStartLocation, GetStartLocationY, GetStartLocationLoc, GetPlayerSlotState, PLAYER_STATE_RESOURCE_GOLD, PLAYER_STATE_GOLD_GATHERED, PLAYER_STATE_RESOURCE_LUMBER, PLAYER_STATE_LUMBER_GATHERED, SetPlayerTaxRate, GetPlayerTaxRate, AddResourceAmount, IsPointBlighted, SetUnitColor, SetPlayerColor, IssueTargetOrder, IssuePointOrderLoc, IssueImmediateOrder, GroupTargetOrder, GroupPointOrderLoc, GroupImmediateOrder, GetTriggerDestructable, GetTriggerWidget, SetBlightRect, SetBlightLoc, GetObjectName, VersionGet, VERSION_REIGN_OF_CHAOS, PLAYER_SLOT_STATE_PLAYING, UnitAddItemById, GetTrainedUnit, GetSoldUnit, EVENT_PLAYER_UNIT_TRAIN_FINISH, EVENT_PLAYER_UNIT_SELL, GroupEnumUnitsInRange, MAP_RANDOM_HERO, Preloader, PLAYER_STATE_RESOURCE_HERO_TOKENS, GetAIDifficulty, AI_DIFFICULTY_NEWBIE, StartMeleeAI, RecycleGuardPosition, SetUnitCreepGuard, PLAYER_STATE_ALLIED_VICTORY, PLAYER_GAME_RESULT_TIE, GetPlayerName, DestroyForce, ForceClear, GetExpiredTimer, GetCancelledStructure, GetDyingUnit, GetConstructingStructure, GetTriggerPlayer, TimerDialogSetRealTimeRemaining, PLAYER_SLOT_STATE_LEFT, EVENT_GAME_TOURNAMENT_FINISH_SOON, EVENT_GAME_TOURNAMENT_FINISH_NOW, EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL, EVENT_PLAYER_UNIT_DEATH, EVENT_PLAYER_UNIT_CONSTRUCT_START, TriggerRegisterPlayerAllianceChange, TriggerRegisterPlayerStateEvent, EQUAL, SetTeams, SetPlayerTeam, SetPlayers, GetGameTypeSelected, GAME_TYPE_MELEE, GAME_TYPE_FFA, GAME_TYPE_USE_MAP_SETTINGS, GAME_TYPE_ONE_ON_ONE, GAME_TYPE_TWO_TEAM_PLAY, GAME_TYPE_THREE_TEAM_PLAY, GAME_TYPE_FOUR_TEAM_PLAY, CreateSoundFromLabel, GREATER_THAN_OR_EQUAL, LESS_THAN, Filter, GetCameraMargin, CAMERA_MARGIN_LEFT, CAMERA_MARGIN_BOTTOM, CAMERA_MARGIN_RIGHT, CAMERA_MARGIN_TOP, GetItemType, GetItemLevel, ITEM_TYPE_PERMANENT, ITEM_TYPE_CHARGED, ITEM_TYPE_ARTIFACT, GroupEnumUnitsOfType, GetSellingUnit, GetSoldItem, SetAllItemTypeSlots, SetAllUnitTypeSlots, EVENT_PLAYER_UNIT_SELL_ITEM, SetItemDropID, GetWidgetX, GetWidgetY, BlzSetAbilityBooleanField, BlzSetAbilityIntegerField, BlzSetAbilityRealField, BlzSetAbilityStringField, BlzSetAbilityBooleanLevelField, BlzSetAbilityIntegerLevelField, BlzSetAbilityRealLevelField, BlzSetAbilityStringLevelField, BlzSetAbilityBooleanLevelArrayField, BlzSetAbilityIntegerLevelArrayField, BlzSetAbilityRealLevelArrayField, BlzSetAbilityStringLevelArrayField, BlzAddAbilityBooleanLevelArrayField, BlzAddAbilityIntegerLevelArrayField, BlzAddAbilityRealLevelArrayField, BlzAddAbilityStringLevelArrayField, BlzRemoveAbilityBooleanLevelArrayField, BlzRemoveAbilityIntegerLevelArrayField, BlzRemoveAbilityRealLevelArrayField, BlzRemoveAbilityStringLevelArrayField, BlzItemAddAbility, BlzItemRemoveAbility, BlzSetItemBooleanField, BlzSetItemIntegerField, BlzSetItemRealField, BlzSetItemStringField, BlzSetUnitBooleanField, BlzSetUnitIntegerField, BlzSetUnitRealField, BlzSetUnitStringField, BlzSetUnitWeaponBooleanField, BlzSetUnitWeaponIntegerField, BlzSetUnitWeaponRealField, BlzSetUnitWeaponStringField } from "./common";
import { Player, GetLocalPlayer, IsPlayerInForce, SetPlayerHandicapXP, GetPlayerHandicapXP, SetPlayerHandicap, GetPlayerHandicap, SetPlayerState, GetPlayerAlliance, CachePlayerHeroData, RemovePlayer, SetPlayerTechResearched, SetPlayerTechMaxAllowed, GetPlayerTechCount, GetPlayerTechMaxAllowed, SetPlayerAbilityAvailable, GetPlayerState, GetPlayerId, GetPlayerRace, GetPlayerStructureCount, GetPlayerTypedUnitCount, IsPlayerObserver, CripplePlayer, GetPlayerTechResearched } from "./common/players";
import { TriggerRegisterTimerEvent, TriggerRegisterTimerExpireEvent, TriggerRegisterGameStateEvent, TriggerRegisterEnterRegion, TriggerRegisterLeaveRegion, TriggerRegisterDialogEvent, TriggerRegisterGameEvent, GetClickedButton, GetClickedDialog, TriggerRegisterDialogButtonEvent, GetTournamentFinishSoonTimeRemaining, GetTournamentScore, GetTournamentFinishNowRule } from "./common/triggers/gameEventApi";

// ===========================================================================
// Blizzard.j ( define Jass2 functions that need to be in every map script )
// ===========================================================================

// -----------------------------------------------------------------------
// Constants
//

// Misc constants
export const bj_PI = 3.14159;
export const bj_E = 2.71828;
export const bj_CELLWIDTH = 128;
export const bj_CLIFFHEIGHT = 128;
export const bj_UNIT_FACING = 270;
export const bj_RADTODEG = 180 / bj_PI;
export const bj_DEGTORAD = bj_PI / 180;
export const bj_TEXT_DELAY_QUEST = 20;
export const bj_TEXT_DELAY_QUESTUPDATE = 20;
export const bj_TEXT_DELAY_QUESTDONE = 20;
export const bj_TEXT_DELAY_QUESTFAILED = 20;
export const bj_TEXT_DELAY_QUESTREQUIREMENT = 20;
export const bj_TEXT_DELAY_MISSIONFAILED = 20;
export const bj_TEXT_DELAY_ALWAYSHINT = 12;
export const bj_TEXT_DELAY_HINT = 12;
export const bj_TEXT_DELAY_SECRET = 10;
export const bj_TEXT_DELAY_UNITACQUIRED = 15;
export const bj_TEXT_DELAY_UNITAVAILABLE = 10;
export const bj_TEXT_DELAY_ITEMACQUIRED = 10;
export const bj_TEXT_DELAY_WARNING = 12;
export const bj_QUEUE_DELAY_QUEST = 5;
export const bj_QUEUE_DELAY_HINT = 5;
export const bj_QUEUE_DELAY_SECRET = 3;
export const bj_HANDICAP_EASY = 60;
export const bj_GAME_STARTED_THRESHOLD = 0.01;
export const bj_WAIT_FOR_COND_MIN_INTERVAL = 0.1;
export const bj_POLLED_WAIT_INTERVAL = 0.1;
export const bj_POLLED_WAIT_SKIP_THRESHOLD = 2;

// Game constants
export const bj_MAX_INVENTORY = 6;
export const bj_MAX_PLAYERS = GetBJMaxPlayers();
export const bj_PLAYER_NEUTRAL_VICTIM = GetBJPlayerNeutralVictim();
export const bj_PLAYER_NEUTRAL_EXTRA = GetBJPlayerNeutralExtra();
export const bj_MAX_PLAYER_SLOTS = GetBJMaxPlayerSlots();
export const bj_MAX_SKELETONS = 25;
export const bj_MAX_STOCK_ITEM_SLOTS = 11;
export const bj_MAX_STOCK_UNIT_SLOTS = 11;
export const bj_MAX_ITEM_LEVEL = 10;

// Ideally these would be looked up from Units/MiscData.txt,
// but there is currently no script functionality exposed to do that
export const bj_TOD_DAWN = 6;
export const bj_TOD_DUSK = 18;

// Melee game settings:
//   - Starting Time of Day (TOD)
//   - Starting Gold
//   - Starting Lumber
//   - Starting Hero Tokens (free heroes)
//   - Max heroes allowed per player
//   - Max heroes allowed per hero type
//   - Distance from start loc to search for nearby mines
//
export const bj_MELEE_STARTING_TOD = 8;
export const bj_MELEE_STARTING_GOLD_V0 = 750;
export const bj_MELEE_STARTING_GOLD_V1 = 500;
export const bj_MELEE_STARTING_LUMBER_V0 = 200;
export const bj_MELEE_STARTING_LUMBER_V1 = 150;
export const bj_MELEE_STARTING_HERO_TOKENS = 1;
export const bj_MELEE_HERO_LIMIT = 3;
export const bj_MELEE_HERO_TYPE_LIMIT = 1;
export const bj_MELEE_MINE_SEARCH_RADIUS = 2000;
export const bj_MELEE_CLEAR_UNITS_RADIUS = 1500;
export const bj_MELEE_CRIPPLE_TIMEOUT = 120;
export const bj_MELEE_CRIPPLE_MSG_DURATION = 20;
export const bj_MELEE_MAX_TWINKED_HEROES_V0 = 3;
export const bj_MELEE_MAX_TWINKED_HEROES_V1 = 1;

// Delay between a creep's death and the time it may drop an item.
export const bj_CREEP_ITEM_DELAY = 0.5;

// Timing settings for Marketplace inventories.
export const bj_STOCK_RESTOCK_INITIAL_DELAY = 120;
export const bj_STOCK_RESTOCK_INTERVAL = 30;
export const bj_STOCK_MAX_ITERATIONS = 20;

// Max events registered by a single "dest dies in region" event.
export const bj_MAX_DEST_IN_REGION_EVENTS = 64;

// Camera settings
export const bj_CAMERA_MIN_FARZ = 100;
export const bj_CAMERA_DEFAULT_DISTANCE = 1650;
export const bj_CAMERA_DEFAULT_FARZ = 5000;
export const bj_CAMERA_DEFAULT_AOA = 304;
export const bj_CAMERA_DEFAULT_FOV = 70;
export const bj_CAMERA_DEFAULT_ROLL = 0;
export const bj_CAMERA_DEFAULT_ROTATION = 90;

// Rescue
export const bj_RESCUE_PING_TIME = 2;

// Transmission behavior settings
export const bj_NOTHING_SOUND_DURATION = 5;
export const bj_TRANSMISSION_PING_TIME = 1;
export const bj_TRANSMISSION_IND_RED = 255;
export const bj_TRANSMISSION_IND_BLUE = 255;
export const bj_TRANSMISSION_IND_GREEN = 255;
export const bj_TRANSMISSION_IND_ALPHA = 255;
export const bj_TRANSMISSION_PORT_HANGTIME = 1.5;

// Cinematic mode settings
export const bj_CINEMODE_INTERFACEFADE = 0.5;
export const bj_CINEMODE_GAMESPEED = MAP_SPEED_NORMAL;

// Cinematic mode volume levels
export const bj_CINEMODE_VOLUME_UNITMOVEMENT = 0.4;
export const bj_CINEMODE_VOLUME_UNITSOUNDS = 0;
export const bj_CINEMODE_VOLUME_COMBAT = 0.4;
export const bj_CINEMODE_VOLUME_SPELLS = 0.4;
export const bj_CINEMODE_VOLUME_UI = 0;
export const bj_CINEMODE_VOLUME_MUSIC = 0.55;
export const bj_CINEMODE_VOLUME_AMBIENTSOUNDS = 1;
export const bj_CINEMODE_VOLUME_FIRE = 0.6;

// Speech mode volume levels
export const bj_SPEECH_VOLUME_UNITMOVEMENT = 0.25;
export const bj_SPEECH_VOLUME_UNITSOUNDS = 0;
export const bj_SPEECH_VOLUME_COMBAT = 0.25;
export const bj_SPEECH_VOLUME_SPELLS = 0.25;
export const bj_SPEECH_VOLUME_UI = 0;
export const bj_SPEECH_VOLUME_MUSIC = 0.55;
export const bj_SPEECH_VOLUME_AMBIENTSOUNDS = 1;
export const bj_SPEECH_VOLUME_FIRE = 0.6;

// Smart pan settings
export const bj_SMARTPAN_TRESHOLD_PAN = 500;
export const bj_SMARTPAN_TRESHOLD_SNAP = 3500;

// QueuedTriggerExecute settings
export const bj_MAX_QUEUED_TRIGGERS = 100;
export const bj_QUEUED_TRIGGER_TIMEOUT = 180;

// Campaign indexing constants
export const bj_CAMPAIGN_INDEX_T = 0;
export const bj_CAMPAIGN_INDEX_H = 1;
export const bj_CAMPAIGN_INDEX_U = 2;
export const bj_CAMPAIGN_INDEX_O = 3;
export const bj_CAMPAIGN_INDEX_N = 4;
export const bj_CAMPAIGN_INDEX_XN = 5;
export const bj_CAMPAIGN_INDEX_XH = 6;
export const bj_CAMPAIGN_INDEX_XU = 7;
export const bj_CAMPAIGN_INDEX_XO = 8;

// Campaign offset constants (for mission indexing)
export const bj_CAMPAIGN_OFFSET_T = 0;
export const bj_CAMPAIGN_OFFSET_H = 1;
export const bj_CAMPAIGN_OFFSET_U = 2;
export const bj_CAMPAIGN_OFFSET_O = 3;
export const bj_CAMPAIGN_OFFSET_N = 4;
export const bj_CAMPAIGN_OFFSET_XN = 0;
export const bj_CAMPAIGN_OFFSET_XH = 1;
export const bj_CAMPAIGN_OFFSET_XU = 2;
export const bj_CAMPAIGN_OFFSET_XO = 3;

// Mission indexing constants
// Tutorial
export const bj_MISSION_INDEX_T00 = bj_CAMPAIGN_OFFSET_T * 1000 + 0;
export const bj_MISSION_INDEX_T01 = bj_CAMPAIGN_OFFSET_T * 1000 + 1;
// Human
export const bj_MISSION_INDEX_H00 = bj_CAMPAIGN_OFFSET_H * 1000 + 0;
export const bj_MISSION_INDEX_H01 = bj_CAMPAIGN_OFFSET_H * 1000 + 1;
export const bj_MISSION_INDEX_H02 = bj_CAMPAIGN_OFFSET_H * 1000 + 2;
export const bj_MISSION_INDEX_H03 = bj_CAMPAIGN_OFFSET_H * 1000 + 3;
export const bj_MISSION_INDEX_H04 = bj_CAMPAIGN_OFFSET_H * 1000 + 4;
export const bj_MISSION_INDEX_H05 = bj_CAMPAIGN_OFFSET_H * 1000 + 5;
export const bj_MISSION_INDEX_H06 = bj_CAMPAIGN_OFFSET_H * 1000 + 6;
export const bj_MISSION_INDEX_H07 = bj_CAMPAIGN_OFFSET_H * 1000 + 7;
export const bj_MISSION_INDEX_H08 = bj_CAMPAIGN_OFFSET_H * 1000 + 8;
export const bj_MISSION_INDEX_H09 = bj_CAMPAIGN_OFFSET_H * 1000 + 9;
export const bj_MISSION_INDEX_H10 = bj_CAMPAIGN_OFFSET_H * 1000 + 10;
export const bj_MISSION_INDEX_H11 = bj_CAMPAIGN_OFFSET_H * 1000 + 11;
// Undead
export const bj_MISSION_INDEX_U00 = bj_CAMPAIGN_OFFSET_U * 1000 + 0;
export const bj_MISSION_INDEX_U01 = bj_CAMPAIGN_OFFSET_U * 1000 + 1;
export const bj_MISSION_INDEX_U02 = bj_CAMPAIGN_OFFSET_U * 1000 + 2;
export const bj_MISSION_INDEX_U03 = bj_CAMPAIGN_OFFSET_U * 1000 + 3;
export const bj_MISSION_INDEX_U05 = bj_CAMPAIGN_OFFSET_U * 1000 + 4;
export const bj_MISSION_INDEX_U07 = bj_CAMPAIGN_OFFSET_U * 1000 + 5;
export const bj_MISSION_INDEX_U08 = bj_CAMPAIGN_OFFSET_U * 1000 + 6;
export const bj_MISSION_INDEX_U09 = bj_CAMPAIGN_OFFSET_U * 1000 + 7;
export const bj_MISSION_INDEX_U10 = bj_CAMPAIGN_OFFSET_U * 1000 + 8;
export const bj_MISSION_INDEX_U11 = bj_CAMPAIGN_OFFSET_U * 1000 + 9;
// Orc
export const bj_MISSION_INDEX_O00 = bj_CAMPAIGN_OFFSET_O * 1000 + 0;
export const bj_MISSION_INDEX_O01 = bj_CAMPAIGN_OFFSET_O * 1000 + 1;
export const bj_MISSION_INDEX_O02 = bj_CAMPAIGN_OFFSET_O * 1000 + 2;
export const bj_MISSION_INDEX_O03 = bj_CAMPAIGN_OFFSET_O * 1000 + 3;
export const bj_MISSION_INDEX_O04 = bj_CAMPAIGN_OFFSET_O * 1000 + 4;
export const bj_MISSION_INDEX_O05 = bj_CAMPAIGN_OFFSET_O * 1000 + 5;
export const bj_MISSION_INDEX_O06 = bj_CAMPAIGN_OFFSET_O * 1000 + 6;
export const bj_MISSION_INDEX_O07 = bj_CAMPAIGN_OFFSET_O * 1000 + 7;
export const bj_MISSION_INDEX_O08 = bj_CAMPAIGN_OFFSET_O * 1000 + 8;
export const bj_MISSION_INDEX_O09 = bj_CAMPAIGN_OFFSET_O * 1000 + 9;
export const bj_MISSION_INDEX_O10 = bj_CAMPAIGN_OFFSET_O * 1000 + 10;
// Night Elf
export const bj_MISSION_INDEX_N00 = bj_CAMPAIGN_OFFSET_N * 1000 + 0;
export const bj_MISSION_INDEX_N01 = bj_CAMPAIGN_OFFSET_N * 1000 + 1;
export const bj_MISSION_INDEX_N02 = bj_CAMPAIGN_OFFSET_N * 1000 + 2;
export const bj_MISSION_INDEX_N03 = bj_CAMPAIGN_OFFSET_N * 1000 + 3;
export const bj_MISSION_INDEX_N04 = bj_CAMPAIGN_OFFSET_N * 1000 + 4;
export const bj_MISSION_INDEX_N05 = bj_CAMPAIGN_OFFSET_N * 1000 + 5;
export const bj_MISSION_INDEX_N06 = bj_CAMPAIGN_OFFSET_N * 1000 + 6;
export const bj_MISSION_INDEX_N07 = bj_CAMPAIGN_OFFSET_N * 1000 + 7;
export const bj_MISSION_INDEX_N08 = bj_CAMPAIGN_OFFSET_N * 1000 + 8;
export const bj_MISSION_INDEX_N09 = bj_CAMPAIGN_OFFSET_N * 1000 + 9;
// Expansion Night Elf
export const bj_MISSION_INDEX_XN00 = bj_CAMPAIGN_OFFSET_XN * 1000 + 0;
export const bj_MISSION_INDEX_XN01 = bj_CAMPAIGN_OFFSET_XN * 1000 + 1;
export const bj_MISSION_INDEX_XN02 = bj_CAMPAIGN_OFFSET_XN * 1000 + 2;
export const bj_MISSION_INDEX_XN03 = bj_CAMPAIGN_OFFSET_XN * 1000 + 3;
export const bj_MISSION_INDEX_XN04 = bj_CAMPAIGN_OFFSET_XN * 1000 + 4;
export const bj_MISSION_INDEX_XN05 = bj_CAMPAIGN_OFFSET_XN * 1000 + 5;
export const bj_MISSION_INDEX_XN06 = bj_CAMPAIGN_OFFSET_XN * 1000 + 6;
export const bj_MISSION_INDEX_XN07 = bj_CAMPAIGN_OFFSET_XN * 1000 + 7;
export const bj_MISSION_INDEX_XN08 = bj_CAMPAIGN_OFFSET_XN * 1000 + 8;
export const bj_MISSION_INDEX_XN09 = bj_CAMPAIGN_OFFSET_XN * 1000 + 9;
export const bj_MISSION_INDEX_XN10 = bj_CAMPAIGN_OFFSET_XN * 1000 + 10;
// Expansion Human
export const bj_MISSION_INDEX_XH00 = bj_CAMPAIGN_OFFSET_XH * 1000 + 0;
export const bj_MISSION_INDEX_XH01 = bj_CAMPAIGN_OFFSET_XH * 1000 + 1;
export const bj_MISSION_INDEX_XH02 = bj_CAMPAIGN_OFFSET_XH * 1000 + 2;
export const bj_MISSION_INDEX_XH03 = bj_CAMPAIGN_OFFSET_XH * 1000 + 3;
export const bj_MISSION_INDEX_XH04 = bj_CAMPAIGN_OFFSET_XH * 1000 + 4;
export const bj_MISSION_INDEX_XH05 = bj_CAMPAIGN_OFFSET_XH * 1000 + 5;
export const bj_MISSION_INDEX_XH06 = bj_CAMPAIGN_OFFSET_XH * 1000 + 6;
export const bj_MISSION_INDEX_XH07 = bj_CAMPAIGN_OFFSET_XH * 1000 + 7;
export const bj_MISSION_INDEX_XH08 = bj_CAMPAIGN_OFFSET_XH * 1000 + 8;
export const bj_MISSION_INDEX_XH09 = bj_CAMPAIGN_OFFSET_XH * 1000 + 9;
// Expansion Undead
export const bj_MISSION_INDEX_XU00 = bj_CAMPAIGN_OFFSET_XU * 1000 + 0;
export const bj_MISSION_INDEX_XU01 = bj_CAMPAIGN_OFFSET_XU * 1000 + 1;
export const bj_MISSION_INDEX_XU02 = bj_CAMPAIGN_OFFSET_XU * 1000 + 2;
export const bj_MISSION_INDEX_XU03 = bj_CAMPAIGN_OFFSET_XU * 1000 + 3;
export const bj_MISSION_INDEX_XU04 = bj_CAMPAIGN_OFFSET_XU * 1000 + 4;
export const bj_MISSION_INDEX_XU05 = bj_CAMPAIGN_OFFSET_XU * 1000 + 5;
export const bj_MISSION_INDEX_XU06 = bj_CAMPAIGN_OFFSET_XU * 1000 + 6;
export const bj_MISSION_INDEX_XU07 = bj_CAMPAIGN_OFFSET_XU * 1000 + 7;
export const bj_MISSION_INDEX_XU08 = bj_CAMPAIGN_OFFSET_XU * 1000 + 8;
export const bj_MISSION_INDEX_XU09 = bj_CAMPAIGN_OFFSET_XU * 1000 + 9;
export const bj_MISSION_INDEX_XU10 = bj_CAMPAIGN_OFFSET_XU * 1000 + 10;
export const bj_MISSION_INDEX_XU11 = bj_CAMPAIGN_OFFSET_XU * 1000 + 11;
export const bj_MISSION_INDEX_XU12 = bj_CAMPAIGN_OFFSET_XU * 1000 + 12;
export const bj_MISSION_INDEX_XU13 = bj_CAMPAIGN_OFFSET_XU * 1000 + 13;

// Expansion Orc
export const bj_MISSION_INDEX_XO00 = bj_CAMPAIGN_OFFSET_XO * 1000 + 0;
export const bj_MISSION_INDEX_XO01 = bj_CAMPAIGN_OFFSET_XO * 1000 + 1;
export const bj_MISSION_INDEX_XO02 = bj_CAMPAIGN_OFFSET_XO * 1000 + 2;
export const bj_MISSION_INDEX_XO03 = bj_CAMPAIGN_OFFSET_XO * 1000 + 3;

// Cinematic indexing constants
export const bj_CINEMATICINDEX_TOP = 0;
export const bj_CINEMATICINDEX_HOP = 1;
export const bj_CINEMATICINDEX_HED = 2;
export const bj_CINEMATICINDEX_OOP = 3;
export const bj_CINEMATICINDEX_OED = 4;
export const bj_CINEMATICINDEX_UOP = 5;
export const bj_CINEMATICINDEX_UED = 6;
export const bj_CINEMATICINDEX_NOP = 7;
export const bj_CINEMATICINDEX_NED = 8;
export const bj_CINEMATICINDEX_XOP = 9;
export const bj_CINEMATICINDEX_XED = 10;

// Alliance settings
export const bj_ALLIANCE_UNALLIED = 0;
export const bj_ALLIANCE_UNALLIED_VISION = 1;
export const bj_ALLIANCE_ALLIED = 2;
export const bj_ALLIANCE_ALLIED_VISION = 3;
export const bj_ALLIANCE_ALLIED_UNITS = 4;
export const bj_ALLIANCE_ALLIED_ADVUNITS = 5;
export const bj_ALLIANCE_NEUTRAL = 6;
export const bj_ALLIANCE_NEUTRAL_VISION = 7;

// Keyboard Event Types
export const bj_KEYEVENTTYPE_DEPRESS = 0;
export const bj_KEYEVENTTYPE_RELEASE = 1;

// Keyboard Event Keys
export const bj_KEYEVENTKEY_LEFT = 0;
export const bj_KEYEVENTKEY_RIGHT = 1;
export const bj_KEYEVENTKEY_DOWN = 2;
export const bj_KEYEVENTKEY_UP = 3;

// Mouse Event Types
export const bj_MOUSEEVENTTYPE_DOWN = 0;
export const bj_MOUSEEVENTTYPE_UP = 1;
export const bj_MOUSEEVENTTYPE_MOVE = 2;

// Transmission timing methods
export const bj_TIMETYPE_ADD = 0;
export const bj_TIMETYPE_SET = 1;
export const bj_TIMETYPE_SUB = 2;

// Camera bounds adjustment methods
export const bj_CAMERABOUNDS_ADJUST_ADD = 0;
export const bj_CAMERABOUNDS_ADJUST_SUB = 1;

// Quest creation states
export const bj_QUESTTYPE_REQ_DISCOVERED = 0;
export const bj_QUESTTYPE_REQ_UNDISCOVERED = 1;
export const bj_QUESTTYPE_OPT_DISCOVERED = 2;
export const bj_QUESTTYPE_OPT_UNDISCOVERED = 3;

// Quest message types
export const bj_QUESTMESSAGE_DISCOVERED = 0;
export const bj_QUESTMESSAGE_UPDATED = 1;
export const bj_QUESTMESSAGE_COMPLETED = 2;
export const bj_QUESTMESSAGE_FAILED = 3;
export const bj_QUESTMESSAGE_REQUIREMENT = 4;
export const bj_QUESTMESSAGE_MISSIONFAILED = 5;
export const bj_QUESTMESSAGE_ALWAYSHINT = 6;
export const bj_QUESTMESSAGE_HINT = 7;
export const bj_QUESTMESSAGE_SECRET = 8;
export const bj_QUESTMESSAGE_UNITACQUIRED = 9;
export const bj_QUESTMESSAGE_UNITAVAILABLE = 10;
export const bj_QUESTMESSAGE_ITEMACQUIRED = 11;
export const bj_QUESTMESSAGE_WARNING = 12;

// Leaderboard sorting methods
export const bj_SORTTYPE_SORTBYVALUE = 0;
export const bj_SORTTYPE_SORTBYPLAYER = 1;
export const bj_SORTTYPE_SORTBYLABEL = 2;

// Cinematic fade filter methods
export const bj_CINEFADETYPE_FADEIN = 0;
export const bj_CINEFADETYPE_FADEOUT = 1;
export const bj_CINEFADETYPE_FADEOUTIN = 2;

// Buff removal methods
export const bj_REMOVEBUFFS_POSITIVE = 0;
export const bj_REMOVEBUFFS_NEGATIVE = 1;
export const bj_REMOVEBUFFS_ALL = 2;
export const bj_REMOVEBUFFS_NONTLIFE = 3;

// Buff properties - polarity
export const bj_BUFF_POLARITY_POSITIVE = 0;
export const bj_BUFF_POLARITY_NEGATIVE = 1;
export const bj_BUFF_POLARITY_EITHER = 2;

// Buff properties - resist type
export const bj_BUFF_RESIST_MAGIC = 0;
export const bj_BUFF_RESIST_PHYSICAL = 1;
export const bj_BUFF_RESIST_EITHER = 2;
export const bj_BUFF_RESIST_BOTH = 3;

// Hero stats
export const bj_HEROSTAT_STR = 0;
export const bj_HEROSTAT_AGI = 1;
export const bj_HEROSTAT_INT = 2;

// Hero skill point modification methods
export const bj_MODIFYMETHOD_ADD = 0;
export const bj_MODIFYMETHOD_SUB = 1;
export const bj_MODIFYMETHOD_SET = 2;

// Unit state adjustment methods (for replaced units)
export const bj_UNIT_STATE_METHOD_ABSOLUTE = 0;
export const bj_UNIT_STATE_METHOD_RELATIVE = 1;
export const bj_UNIT_STATE_METHOD_DEFAULTS = 2;
export const bj_UNIT_STATE_METHOD_MAXIMUM = 3;

// Gate operations
export const bj_GATEOPERATION_CLOSE = 0;
export const bj_GATEOPERATION_OPEN = 1;
export const bj_GATEOPERATION_DESTROY = 2;

// Game cache value types
export const bj_GAMECACHE_BOOLEAN = 0;
export const bj_GAMECACHE_INTEGER = 1;
export const bj_GAMECACHE_REAL = 2;
export const bj_GAMECACHE_UNIT = 3;
export const bj_GAMECACHE_STRING = 4;

// Hashtable value types
export const bj_HASHTABLE_BOOLEAN = 0;
export const bj_HASHTABLE_INTEGER = 1;
export const bj_HASHTABLE_REAL = 2;
export const bj_HASHTABLE_STRING = 3;
export const bj_HASHTABLE_HANDLE = 4;

// Item status types
export const bj_ITEM_STATUS_HIDDEN = 0;
export const bj_ITEM_STATUS_OWNED = 1;
export const bj_ITEM_STATUS_INVULNERABLE = 2;
export const bj_ITEM_STATUS_POWERUP = 3;
export const bj_ITEM_STATUS_SELLABLE = 4;
export const bj_ITEM_STATUS_PAWNABLE = 5;

// Itemcode status types
export const bj_ITEMCODE_STATUS_POWERUP = 0;
export const bj_ITEMCODE_STATUS_SELLABLE = 1;
export const bj_ITEMCODE_STATUS_PAWNABLE = 2;

// Minimap ping styles
export const bj_MINIMAPPINGSTYLE_SIMPLE = 0;
export const bj_MINIMAPPINGSTYLE_FLASHY = 1;
export const bj_MINIMAPPINGSTYLE_ATTACK = 2;

// Corpse creation settings
export const bj_CORPSE_MAX_DEATH_TIME = 8;

// Corpse creation styles
export const bj_CORPSETYPE_FLESH = 0;
export const bj_CORPSETYPE_BONE = 1;

// Elevator pathing-blocker destructable code
export const bj_ELEVATOR_BLOCKER_CODE = FourCC( "DTep" );
export const bj_ELEVATOR_CODE01 = FourCC( "DTrf" );
export const bj_ELEVATOR_CODE02 = FourCC( "DTrx" );

// Elevator wall codes
export const bj_ELEVATOR_WALL_TYPE_ALL = 0;
export const bj_ELEVATOR_WALL_TYPE_EAST = 1;
export const bj_ELEVATOR_WALL_TYPE_NORTH = 2;
export const bj_ELEVATOR_WALL_TYPE_SOUTH = 3;
export const bj_ELEVATOR_WALL_TYPE_WEST = 4;

// -----------------------------------------------------------------------
// Variables
//

// Force predefs
export let bj_FORCE_ALL_PLAYERS: force;
export const bj_FORCE_PLAYER: Array<force> = [];

export let bj_MELEE_MAX_TWINKED_HEROES = 0;

// Map area rects
export let bj_mapInitialPlayableArea: rect;
export let bj_mapInitialCameraBounds: rect;

// Utility function vars
export let bj_forLoopAIndex = 0;
export let bj_forLoopBIndex = 0;
export const bj_forLoopAIndexEnd = 0;
export const bj_forLoopBIndexEnd = 0;

export let bj_slotControlReady = false;
export const bj_slotControlUsed: Array<boolean> = [];
export const bj_slotControl: Array<mapcontrol> = [];

// Game started detection vars
export let bj_gameStartedTimer: timer;
export let bj_gameStarted = false;
export const bj_volumeGroupsTimer = CreateTimer();

// Singleplayer check
export let bj_isSinglePlayer = false;

// Day/Night Cycle vars
export let bj_dncSoundsDay: trigger;
export let bj_dncSoundsNight: trigger;
export let bj_dayAmbientSound: sound;
export let bj_nightAmbientSound: sound;
export let bj_dncSoundsDawn: trigger;
export let bj_dncSoundsDusk: trigger;
export let bj_dawnSound: sound;
export let bj_duskSound: sound;
export let bj_useDawnDuskSounds = true;
export let bj_dncIsDaytime = false;

// Triggered sounds
// sound              bj_pingMinimapSound         = null
export let bj_rescueSound: sound;
export let bj_questDiscoveredSound: sound;
export let bj_questUpdatedSound: sound;
export let bj_questCompletedSound: sound;
export let bj_questFailedSound: sound;
export let bj_questHintSound: sound;
export let bj_questSecretSound: sound;
export let bj_questItemAcquiredSound: sound;
export let bj_questWarningSound: sound;
export let bj_victoryDialogSound: sound;
export let bj_defeatDialogSound: sound;

// Marketplace vars
export let bj_stockItemPurchased: trigger;
export let bj_stockUpdateTimer: timer;
export const bj_stockAllowedPermanent: Array<boolean> = [];
export const bj_stockAllowedCharged: Array<boolean> = [];
export const bj_stockAllowedArtifact: Array<boolean> = [];
export let bj_stockPickedItemLevel = 0;
export let bj_stockPickedItemType: itemtype;

// Melee vars
export let bj_meleeVisibilityTrained: trigger;
export const bj_meleeVisibilityIsDay = true;
export let bj_meleeGrantHeroItems = false;
export let bj_meleeNearestMineToLoc: location;
export let bj_meleeNearestMine: unit | null;
export let bj_meleeNearestMineDist = 0;
export let bj_meleeGameOver = false;
export const bj_meleeDefeated: Array<boolean> = [];
export const bj_meleeVictoried: Array<boolean> = [];
export const bj_ghoul: Array<unit> = [];
export const bj_crippledTimer: Array<timer> = [];
export const bj_crippledTimerWindows: Array<timerdialog> = [];
export const bj_playerIsCrippled: Array<boolean> = [];
export const bj_playerIsExposed: Array<boolean> = [];
export let bj_finishSoonAllExposed = false;
export let bj_finishSoonTimerDialog: timerdialog;
export const bj_meleeTwinkedHeroes: Array<number> = [];

// Rescue behavior vars
export let bj_rescueUnitBehavior: trigger;
export let bj_rescueChangeColorUnit = true;
export let bj_rescueChangeColorBldg = true;

// Transmission vars
export let bj_cineSceneEndingTimer: timer;
export let bj_cineSceneLastSound: sound;
export let bj_cineSceneBeingSkipped: trigger;

// Cinematic mode vars
export let bj_cineModePriorSpeed = MAP_SPEED_NORMAL;
export let bj_cineModePriorFogSetting = false;
export let bj_cineModePriorMaskSetting = false;
export let bj_cineModeAlreadyIn = false;
export let bj_cineModePriorDawnDusk = false;
export let bj_cineModeSavedSeed = 0;

// Cinematic fade vars
export let bj_cineFadeFinishTimer: timer | null;
export let bj_cineFadeContinueTimer: timer | null;
export let bj_cineFadeContinueRed = 0;
export let bj_cineFadeContinueGreen = 0;
export let bj_cineFadeContinueBlue = 0;
export let bj_cineFadeContinueTrans = 0;
export let bj_cineFadeContinueDuration = 0;
export let bj_cineFadeContinueTex = "";

// QueuedTriggerExecute vars
export let bj_queuedExecTotal = 0;
export const bj_queuedExecTriggers: Array<trigger | null> = [];
export const bj_queuedExecUseConds: Array<boolean> = [];
export const bj_queuedExecTimeoutTimer = CreateTimer();
export let bj_queuedExecTimeout: trigger;

// Helper vars (for Filter and Enum funcs)
export let bj_destInRegionDiesCount = 0;
export let bj_destInRegionDiesTrig: trigger;
export let bj_groupCountUnits = 0;
export let bj_forceCountPlayers = 0;
export let bj_groupEnumTypeId = 0;
export let bj_groupEnumOwningPlayer: player;
export let bj_groupAddGroupDest: group;
export let bj_groupRemoveGroupDest: group;
export let bj_groupRandomConsidered = 0;
export let bj_groupRandomCurrentPick: unit | null;
export let bj_groupLastCreatedDest: group;
export let bj_randomSubGroupGroup: group;
export let bj_randomSubGroupWant = 0;
export let bj_randomSubGroupTotal = 0;
export let bj_randomSubGroupChance = 0;
export let bj_destRandomConsidered = 0;
export let bj_destRandomCurrentPick: destructable | null;
export let bj_elevatorWallBlocker: destructable | null;
export let bj_elevatorNeighbor: destructable | null;
export let bj_itemRandomConsidered = 0;
export let bj_itemRandomCurrentPick: item | null;
export let bj_forceRandomConsidered = 0;
export let bj_forceRandomCurrentPick: player | null;
export let bj_makeUnitRescuableUnit: unit;
export let bj_makeUnitRescuableFlag = true;
export let bj_pauseAllUnitsFlag = true;
export let bj_enumDestructableCenter: location;
export let bj_enumDestructableRadius = 0;
export let bj_setPlayerTargetColor: playercolor;
export let bj_isUnitGroupDeadResult = true;
export let bj_isUnitGroupEmptyResult = true;
export let bj_isUnitGroupInRectResult = true;
export let bj_isUnitGroupInRectRect: rect;
export let bj_changeLevelShowScores = false;
export let bj_changeLevelMapName: string | null;
export let bj_suspendDecayFleshGroup = CreateGroup();
export let bj_suspendDecayBoneGroup = CreateGroup();
export const bj_delayedSuspendDecayTimer = CreateTimer();
export let bj_delayedSuspendDecayTrig: trigger;
export let bj_livingPlayerUnitsTypeId = 0;
export let bj_lastDyingWidget: widget;

// Random distribution vars
export let bj_randDistCount = 0;
export const bj_randDistID: Array<number> = [];
export const bj_randDistChance: Array<number> = [];

// Last X'd vars
export let bj_lastCreatedUnit: unit;
export let bj_lastCreatedItem: item;
export let bj_lastRemovedItem: item;
export let bj_lastHauntedGoldMine: unit | null;
export let bj_lastCreatedDestructable: destructable;
export const bj_lastCreatedGroup = CreateGroup();
export let bj_lastCreatedFogModifier: fogmodifier;
export let bj_lastCreatedEffect: effect;
export let bj_lastCreatedWeatherEffect: weathereffect;
export let bj_lastCreatedTerrainDeformation: terraindeformation;
export let bj_lastCreatedQuest: quest;
export let bj_lastCreatedQuestItem: questitem;
export let bj_lastCreatedDefeatCondition: defeatcondition;
export let bj_lastStartedTimer = CreateTimer();
export let bj_lastCreatedTimerDialog: timerdialog;
export let bj_lastCreatedLeaderboard: leaderboard;
export let bj_lastCreatedMultiboard: multiboard;
export let bj_lastPlayedSound: sound;
export let bj_lastPlayedMusic = "";
export let bj_lastTransmissionDuration = 0;
export let bj_lastCreatedGameCache: gamecache;
export let bj_lastCreatedHashtable: hashtable;
export let bj_lastLoadedUnit: unit;
export let bj_lastCreatedButton: button;
export let bj_lastReplacedUnit: unit;
export let bj_lastCreatedTextTag: texttag;
export let bj_lastCreatedLightning: lightning;
export let bj_lastCreatedImage: image;
export let bj_lastCreatedUbersplat: ubersplat;

// Filter function vars
export let filterIssueHauntOrderAtLocBJ: boolexpr;
export let filterEnumDestructablesInCircleBJ: boolexpr;
export let filterGetUnitsInRectOfPlayer: boolexpr;
export let filterGetUnitsOfTypeIdAll: boolexpr;
export let filterGetUnitsOfPlayerAndTypeId: boolexpr;
export let filterMeleeTrainedUnitIsHeroBJ: boolexpr;
export let filterLivingPlayerUnitsOfTypeId: boolexpr;

// Memory cleanup vars
export let bj_wantDestroyGroup = false;

// Instanced Operation Results
export let bj_lastInstObjFuncSuccessful = true;

// ***************************************************************************
// *
// *  Debugging Functions
// *
// ***************************************************************************

// ===========================================================================
export const BJDebugMsg = ( msg: string ): void => {

	let i = 0;

	while ( true ) {

		DisplayTimedTextToPlayer( Player( i ), 0, 0, 60, msg );
		i = i + 1;
		if ( i === bj_MAX_PLAYERS ) break;

	}

};

// ***************************************************************************
// *
// *  Math Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const RMinBJ = ( a: number, b: number ): number => {

	if ( a < b )

		return a;

	else

		return b;

};

// ===========================================================================
export const RMaxBJ = ( a: number, b: number ): number => {

	if ( a < b )

		return b;

	else

		return a;

};

// ===========================================================================
export const RAbsBJ = ( a: number ): number => {

	if ( a >= 0 )

		return a;

	else

		return - a;

};

// ===========================================================================
export const RSignBJ = ( a: number ): number => {

	if ( a >= 0 )

		return 1;

	else

		return - 1;

};

// ===========================================================================
export const IMinBJ = ( a: number, b: number ): number => {

	if ( a < b )

		return a;

	else

		return b;

};

// ===========================================================================
export const IMaxBJ = ( a: number, b: number ): number => {

	if ( a < b )

		return b;

	else

		return a;

};

// ===========================================================================
export const IAbsBJ = ( a: number ): number => {

	if ( a >= 0 )

		return a;

	else

		return - a;

};

// ===========================================================================
export const ISignBJ = ( a: number ): number => {

	if ( a >= 0 )

		return 1;

	else

		return - 1;

};

// ===========================================================================
export const SinBJ = ( degrees: number ): number => Sin( degrees * bj_DEGTORAD );

// ===========================================================================
export const CosBJ = ( degrees: number ): number => Cos( degrees * bj_DEGTORAD );

// ===========================================================================
export const TanBJ = ( degrees: number ): number => Tan( degrees * bj_DEGTORAD );

// ===========================================================================
export const AsinBJ = ( degrees: number ): number => Asin( degrees ) * bj_RADTODEG;

// ===========================================================================
export const AcosBJ = ( degrees: number ): number => Acos( degrees ) * bj_RADTODEG;

// ===========================================================================
export const AtanBJ = ( degrees: number ): number => Atan( degrees ) * bj_RADTODEG;

// ===========================================================================
export const Atan2BJ = ( y: number, x: number ): number => Atan2( y, x ) * bj_RADTODEG;

// ===========================================================================
export const AngleBetweenPoints = ( locA: location, locB: location ): number => bj_RADTODEG * Atan2( GetLocationY( locB ) - GetLocationY( locA ), GetLocationX( locB ) - GetLocationX( locA ) );

// ===========================================================================
export const DistanceBetweenPoints = ( locA: location, locB: location ): number => {

	const dx = GetLocationX( locB ) - GetLocationX( locA );
	const dy = GetLocationY( locB ) - GetLocationY( locA );
	return SquareRoot( dx * dx + dy * dy );

};

// ===========================================================================
export const PolarProjectionBJ = ( source: location, dist: number, angle: number ): location => {

	const x = GetLocationX( source ) + dist * Cos( angle * bj_DEGTORAD );
	const y = GetLocationY( source ) + dist * Sin( angle * bj_DEGTORAD );
	return Location( x, y );

};

// ===========================================================================
export const GetRandomDirectionDeg = (): number => GetRandomReal( 0, 360 );

// ===========================================================================
export const GetRandomPercentageBJ = (): number => GetRandomReal( 0, 100 );

// ===========================================================================
export const GetRandomLocInRect = ( whichRect: rect ): location => Location( GetRandomReal( GetRectMinX( whichRect ), GetRectMaxX( whichRect ) ), GetRandomReal( GetRectMinY( whichRect ), GetRectMaxY( whichRect ) ) );

// ===========================================================================
// Calculate the modulus/remainder of (dividend) divided by (divisor).
// Examples:  18 mod 5 = 3.  15 mod 5 = 0.  -8 mod 5 = 2.
//
export const ModuloInteger = ( dividend: number, divisor: number ): number => {

	let modulus = dividend - dividend / divisor * divisor;

	// If the dividend was negative, the above modulus calculation will
	// be negative, but within (-divisor..0).  We can add (divisor) to
	// shift this result into the desired range of (0..divisor).

	if ( modulus < 0 )

		modulus = modulus + divisor;

	return modulus;

};

// ===========================================================================
// Calculate the modulus/remainder of (dividend) divided by (divisor).
// Examples:  13.000 mod 2.500 = 0.500.  -6.000 mod 2.500 = 1.500.
//
export const ModuloReal = ( dividend: number, divisor: number ): number => {

	let modulus = dividend - I2R( R2I( dividend / divisor ) ) * divisor;

	// If the dividend was negative, the above modulus calculation will
	// be negative, but within (-divisor..0).  We can add (divisor) to
	// shift this result into the desired range of (0..divisor).

	if ( modulus < 0 )

		modulus = modulus + divisor;

	return modulus;

};

// ===========================================================================
export const OffsetLocation = ( loc: location, dx: number, dy: number ): location => Location( GetLocationX( loc ) + dx, GetLocationY( loc ) + dy );

// ===========================================================================
export const OffsetRectBJ = ( r: rect, dx: number, dy: number ): rect => Rect( GetRectMinX( r ) + dx, GetRectMinY( r ) + dy, GetRectMaxX( r ) + dx, GetRectMaxY( r ) + dy );

// ===========================================================================
export const RectFromCenterSizeBJ = ( center: location, width: number, height: number ): rect => {

	const x = GetLocationX( center );
	const y = GetLocationY( center );
	return Rect( x - width * 0.5, y - height * 0.5, x + width * 0.5, y + height * 0.5 );

};

// ===========================================================================
export const RectContainsCoords = ( r: rect, x: number, y: number ): boolean => GetRectMinX( r ) <= x && x <= GetRectMaxX( r ) && GetRectMinY( r ) <= y && y <= GetRectMaxY( r );

// ===========================================================================
export const RectContainsLoc = ( r: rect, loc: location ): boolean => RectContainsCoords( r, GetLocationX( loc ), GetLocationY( loc ) );

// ===========================================================================
export const RectContainsUnit = ( r: rect, whichUnit: unit ): boolean => RectContainsCoords( r, GetUnitX( whichUnit ), GetUnitY( whichUnit ) );

// ===========================================================================
export const RectContainsItem = ( whichItem: item, r: rect ): boolean => {

	if ( whichItem === null )

		return false;

	if ( IsItemOwned( whichItem ) )

		return false;

	return RectContainsCoords( r, GetItemX( whichItem ), GetItemY( whichItem ) );

};

// ***************************************************************************
// *
// *  Utility Constructs
// *
// ***************************************************************************

// ===========================================================================
// Runs the trigger's actions if the trigger's conditions evaluate to true.
//
export const ConditionalTriggerExecute = ( trig: trigger ): void => {

	if ( TriggerEvaluate( trig ) )

		TriggerExecute( trig );

};

// ===========================================================================
// Runs the trigger's actions if the trigger's conditions evaluate to true.
//
export const TriggerExecuteBJ = ( trig: trigger | null, checkConditions: boolean ): boolean => {

	if ( checkConditions )

		if ( ! TriggerEvaluate( trig ) ) {

			return false;

		}

	TriggerExecute( trig );
	return true;

};

// ===========================================================================
// Arranges for a trigger to fire almost immediately, except that the calling
// trigger is not interrupted as is the case with a TriggerExecute call.
// Since the trigger executes normally, its conditions are still evaluated.
//
export const PostTriggerExecuteBJ = ( trig: trigger, checkConditions: boolean ): boolean => {

	if ( checkConditions )

		if ( ! TriggerEvaluate( trig ) ) {

			return false;

		}

	TriggerRegisterTimerEvent( trig, 0, false );
	return true;

};

// ===========================================================================
// Debug - Display the contents of the trigger queue (as either null or "x"
// for each entry).
export const QueuedTriggerCheck = (): void => {

	let s = "TrigQueue Check ";
	let i: number;

	i = 0;

	while ( true ) {

		if ( i >= bj_queuedExecTotal ) break;
		s = s + "q[" + I2S( i ) + "]=";

		if ( bj_queuedExecTriggers[ i ] === null )

			s = s + "null ";

		else

			s = s + "x ";

		i = i + 1;

	}

	s = s + "(" + I2S( bj_queuedExecTotal ) + " total)";
	DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, 600, s );

};

// ===========================================================================
// Searches the queue for a given trigger, returning the index of the
// trigger within the queue if it is found, or -1 if it is not found.
//
export const QueuedTriggerGetIndex = ( trig: trigger ): number => {

	// Determine which, if any, of the queued triggers is being removed.
	let index = 0;

	while ( true ) {

		if ( index >= bj_queuedExecTotal ) break;

		if ( bj_queuedExecTriggers[ index ] === trig )

			return index;

		index = index + 1;

	}

	return - 1;

};

// ===========================================================================
// Removes a trigger from the trigger queue, shifting other triggers down
// to fill the unused space.  If the currently running trigger is removed
// in this manner, this function does NOT attempt to run the next trigger.
//
export const QueuedTriggerRemoveByIndex = ( trigIndex: number ): boolean => {

	let index: number;

	// If the to-be-removed index is out of range, fail.

	if ( trigIndex >= bj_queuedExecTotal )

		return false;

	// Shift all queue entries down to fill in the gap.
	bj_queuedExecTotal = bj_queuedExecTotal - 1;
	index = trigIndex;

	while ( true ) {

		if ( index >= bj_queuedExecTotal ) break;
		bj_queuedExecTriggers[ index ] = bj_queuedExecTriggers[ index + 1 ];
		bj_queuedExecUseConds[ index ] = bj_queuedExecUseConds[ index + 1 ];
		index = index + 1;

	}

	return true;

};

// ===========================================================================
// Attempt to execute the first trigger in the queue.  If it fails, remove
// it and execute the next one.  Continue this cycle until a trigger runs,
// or until the queue is empty.
//
export const QueuedTriggerAttemptExec = (): boolean => {

	while ( true ) {

		if ( bj_queuedExecTotal === 0 ) break;

		if ( TriggerExecuteBJ( bj_queuedExecTriggers[ 0 ], bj_queuedExecUseConds[ 0 ] ) ) {

			// Timeout the queue if it sits at the front of the queue for too long.
			TimerStart( bj_queuedExecTimeoutTimer, bj_QUEUED_TRIGGER_TIMEOUT, false, null );
			return true;

		}

		QueuedTriggerRemoveByIndex( 0 );

	}

	return false;

};

// ===========================================================================
// Queues a trigger to be executed, assuring that such triggers are not
// executed at the same time.
//
export const QueuedTriggerAddBJ = ( trig: trigger, checkConditions: boolean ): boolean => {

	// Make sure our queue isn't full.  If it is, return failure.

	if ( bj_queuedExecTotal >= bj_MAX_QUEUED_TRIGGERS )
		return false;

	// Add the trigger to an array of to-be-executed triggers.
	bj_queuedExecTriggers[ bj_queuedExecTotal ] = trig;
	bj_queuedExecUseConds[ bj_queuedExecTotal ] = checkConditions;
	bj_queuedExecTotal = bj_queuedExecTotal + 1;

	// If this is the only trigger in the queue, run it.

	if ( bj_queuedExecTotal === 1 )
		QueuedTriggerAttemptExec();

	return true;

};

// ===========================================================================
// Denotes the end of a queued trigger. Be sure to call this only once per
// queued trigger, or risk stepping on the toes of other queued triggers.
//
export const QueuedTriggerRemoveBJ = ( trig: trigger ): void => {

	// Find the trigger's index.
	const trigIndex = QueuedTriggerGetIndex( trig );

	if ( trigIndex === - 1 )
		return;

	// Shuffle the other trigger entries down to fill in the gap.
	QueuedTriggerRemoveByIndex( trigIndex );

	// If we just axed the currently running trigger, run the next one.

	if ( trigIndex === 0 ) {

		PauseTimer( bj_queuedExecTimeoutTimer );
		QueuedTriggerAttemptExec();

	}

};

// ===========================================================================
// Denotes the end of a queued trigger. Be sure to call this only once per
// queued trigger, lest you step on the toes of other queued triggers.
//
export const QueuedTriggerDoneBJ = (): void => {

	// Make sure there's something on the queue to remove.
	if ( bj_queuedExecTotal <= 0 ) return;

	// Remove the currently running trigger from the array.
	QueuedTriggerRemoveByIndex( 0 );

	// If other triggers are waiting to run, run one of them.
	PauseTimer( bj_queuedExecTimeoutTimer );
	QueuedTriggerAttemptExec();

};

// ===========================================================================
// Empty the trigger queue.
//
export const QueuedTriggerClearBJ = (): void => {

	PauseTimer( bj_queuedExecTimeoutTimer );
	bj_queuedExecTotal = 0;

};

// ===========================================================================
// Remove all but the currently executing trigger from the trigger queue.
//
export const QueuedTriggerClearInactiveBJ = (): void => {

	bj_queuedExecTotal = IMinBJ( bj_queuedExecTotal, 1 );

};

// ===========================================================================
export const QueuedTriggerCountBJ = (): number => bj_queuedExecTotal;

// ===========================================================================
export const IsTriggerQueueEmptyBJ = (): boolean => bj_queuedExecTotal <= 0;

// ===========================================================================
export const IsTriggerQueuedBJ = ( trig: trigger ): boolean => QueuedTriggerGetIndex( trig ) !== - 1;

// ===========================================================================
export const GetForLoopIndexA = (): number => bj_forLoopAIndex;

// ===========================================================================
export const SetForLoopIndexA = ( newIndex: number ): void => {

	bj_forLoopAIndex = newIndex;

};

// ===========================================================================
export const GetForLoopIndexB = (): number => bj_forLoopBIndex;

// ===========================================================================
export const SetForLoopIndexB = ( newIndex: number ): void => {

	bj_forLoopBIndex = newIndex;

};

// ===========================================================================
// We can't do game-time waits, so this simulates one by starting a timer
// and polling until the timer expires.
export const PolledWait = ( duration: number ): void => {

	let t: timer;
	let timeRemaining: number;

	if ( duration > 0 ) {

		t = CreateTimer();
		TimerStart( t, duration, false, null );

		while ( true ) {

			timeRemaining = TimerGetRemaining( t );
			if ( timeRemaining <= 0 ) break;

			// If we have a bit of time left, skip past 10% of the remaining
			// duration instead of checking every interval, to minimize the
			// polling on long waits.

			if ( timeRemaining > bj_POLLED_WAIT_SKIP_THRESHOLD )

				TriggerSleepAction( 0.1 * timeRemaining );

			else

				TriggerSleepAction( bj_POLLED_WAIT_INTERVAL );

		}

		DestroyTimer( t );

	}

};

// ===========================================================================
export const IntegerTertiaryOp = ( flag: boolean, valueA: number, valueB: number ): number => {

	if ( flag )

		return valueA;

	else

		return valueB;

};

// ***************************************************************************
// *
// *  General Utility Functions
// *  These functions exist purely to make the trigger dialogs cleaner and
// *  more comprehensible.
// *
// ***************************************************************************

// ===========================================================================
export const DoNothing = (): void => {

	null;

};

// ===========================================================================
// This function does nothing.  WorldEdit should should eventually ignore
// CommentString triggers during script generation, but until such a time,
// this function will serve as a stub.
//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CommentString = ( commentString: string ): void => {

	null;

};

// ===========================================================================
// This function returns the input string, converting it from the localized text, if necessary
//
export const StringIdentity = ( theString: string ): string => GetLocalizedString( theString );

// ===========================================================================
export const GetBooleanAnd = ( valueA: boolean, valueB: boolean ): boolean => valueA && valueB;

// ===========================================================================
export const GetBooleanOr = ( valueA: boolean, valueB: boolean ): boolean => valueA || valueB;

// ===========================================================================
// Converts a percentage (real, 0..100) into a scaled integer (0..max),
// clipping the result to 0..max in case the input is invalid.
//
export const PercentToInt = ( percentage: number, max: number ): number => {

	let result = R2I( percentage * I2R( max ) * 0.01 );

	if ( result < 0 )

		result = 0;

	else if ( result > max )

		result = max;

	return result;

};

// ===========================================================================
export const PercentTo255 = ( percentage: number ): number => PercentToInt( percentage, 255 );

// ===========================================================================
export const GetTimeOfDay = (): number => GetFloatGameState( GAME_STATE_TIME_OF_DAY );

// ===========================================================================
export const SetTimeOfDay = ( whatTime: number ): void => {

	SetFloatGameState( GAME_STATE_TIME_OF_DAY, whatTime );

};

// ===========================================================================
export const SetTimeOfDayScalePercentBJ = ( scalePercent: number ): void => {

	SetTimeOfDayScale( scalePercent * 0.01 );

};

// ===========================================================================
export const GetTimeOfDayScalePercentBJ = (): number => GetTimeOfDayScale() * 100;

// ===========================================================================
export const PlaySound = ( soundName: string ): void => {

	const soundHandle = CreateSound( soundName, false, false, true, 12700, 12700, "" );
	StartSound( soundHandle );
	KillSoundWhenDone( soundHandle );

};

// ===========================================================================
export const CompareLocationsBJ = ( A: location, B: location ): boolean => GetLocationX( A ) === GetLocationX( B ) && GetLocationY( A ) === GetLocationY( B );

// ===========================================================================
export const CompareRectsBJ = ( A: rect, B: rect ): boolean => GetRectMinX( A ) === GetRectMinX( B ) && GetRectMinY( A ) === GetRectMinY( B ) && GetRectMaxX( A ) === GetRectMaxX( B ) && GetRectMaxY( A ) === GetRectMaxY( B );

// ===========================================================================
// Returns a square rect that exactly encompasses the specified circle.
//
export const GetRectFromCircleBJ = ( center: location, radius: number ): rect => {

	const centerX = GetLocationX( center );
	const centerY = GetLocationY( center );
	return Rect( centerX - radius, centerY - radius, centerX + radius, centerY + radius );

};

// ***************************************************************************
// *
// *  Camera Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const GetCurrentCameraSetup = (): camerasetup => {

	const theCam = CreateCameraSetup();
	const duration = 0;
	CameraSetupSetField( theCam, CAMERA_FIELD_TARGET_DISTANCE, GetCameraField( CAMERA_FIELD_TARGET_DISTANCE ), duration );
	CameraSetupSetField( theCam, CAMERA_FIELD_FARZ, GetCameraField( CAMERA_FIELD_FARZ ), duration );
	CameraSetupSetField( theCam, CAMERA_FIELD_ZOFFSET, GetCameraField( CAMERA_FIELD_ZOFFSET ), duration );
	CameraSetupSetField( theCam, CAMERA_FIELD_ANGLE_OF_ATTACK, bj_RADTODEG * GetCameraField( CAMERA_FIELD_ANGLE_OF_ATTACK ), duration );
	CameraSetupSetField( theCam, CAMERA_FIELD_FIELD_OF_VIEW, bj_RADTODEG * GetCameraField( CAMERA_FIELD_FIELD_OF_VIEW ), duration );
	CameraSetupSetField( theCam, CAMERA_FIELD_ROLL, bj_RADTODEG * GetCameraField( CAMERA_FIELD_ROLL ), duration );
	CameraSetupSetField( theCam, CAMERA_FIELD_ROTATION, bj_RADTODEG * GetCameraField( CAMERA_FIELD_ROTATION ), duration );
	CameraSetupSetField( theCam, CAMERA_FIELD_LOCAL_PITCH, bj_RADTODEG * GetCameraField( CAMERA_FIELD_LOCAL_PITCH ), duration );
	CameraSetupSetField( theCam, CAMERA_FIELD_LOCAL_YAW, bj_RADTODEG * GetCameraField( CAMERA_FIELD_LOCAL_YAW ), duration );
	CameraSetupSetField( theCam, CAMERA_FIELD_LOCAL_ROLL, bj_RADTODEG * GetCameraField( CAMERA_FIELD_LOCAL_ROLL ), duration );
	CameraSetupSetDestPosition( theCam, GetCameraTargetPositionX(), GetCameraTargetPositionY(), duration );
	return theCam;

};

// ===========================================================================
export const CameraSetupApplyForPlayer = ( doPan: boolean, whichSetup: camerasetup, whichPlayer: player, duration: number ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		CameraSetupApplyForceDuration( whichSetup, doPan, duration );

};

// ===========================================================================
export const CameraSetupGetFieldSwap = ( whichField: camerafield, whichSetup: camerasetup ): number => CameraSetupGetField( whichSetup, whichField );

// ===========================================================================
export const SetCameraFieldForPlayer = ( whichPlayer: player, whichField: camerafield, value: number, duration: number ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		SetCameraField( whichField, value, duration );

};

// ===========================================================================
export const SetCameraTargetControllerNoZForPlayer = ( whichPlayer: player, whichUnit: unit, xoffset: number, yoffset: number, inheritOrientation: boolean ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		SetCameraTargetController( whichUnit, xoffset, yoffset, inheritOrientation );

};

// ===========================================================================
export const SetCameraPositionForPlayer = ( whichPlayer: player, x: number, y: number ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		SetCameraPosition( x, y );

};

// ===========================================================================
export const SetCameraPositionLocForPlayer = ( whichPlayer: player, loc: location ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		SetCameraPosition( GetLocationX( loc ), GetLocationY( loc ) );

};

// ===========================================================================
export const RotateCameraAroundLocBJ = ( degrees: number, loc: location, whichPlayer: player, duration: number ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		SetCameraRotateMode( GetLocationX( loc ), GetLocationY( loc ), bj_DEGTORAD * degrees, duration );

};

// ===========================================================================
export const PanCameraToForPlayer = ( whichPlayer: player, x: number, y: number ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		PanCameraTo( x, y );

};

// ===========================================================================
export const PanCameraToLocForPlayer = ( whichPlayer: player, loc: location ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		PanCameraTo( GetLocationX( loc ), GetLocationY( loc ) );

};

// ===========================================================================
export const PanCameraToTimedForPlayer = ( whichPlayer: player, x: number, y: number, duration: number ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		PanCameraToTimed( x, y, duration );

};

// ===========================================================================
export const PanCameraToTimedLocForPlayer = ( whichPlayer: player, loc: location, duration: number ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		PanCameraToTimed( GetLocationX( loc ), GetLocationY( loc ), duration );

};

// ===========================================================================
export const PanCameraToTimedLocWithZForPlayer = ( whichPlayer: player, loc: location, zOffset: number, duration: number ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		PanCameraToTimedWithZ( GetLocationX( loc ), GetLocationY( loc ), zOffset, duration );

};

// ===========================================================================
export const SmartCameraPanBJ = ( whichPlayer: player, loc: location, duration: number ): void => {

	let dist: number;
	const cameraLoc = GetCameraTargetPositionLoc();

	if ( GetLocalPlayer() === whichPlayer ) {

		// Use only local code (no net traffic) within this block to avoid desyncs.

		dist = DistanceBetweenPoints( loc, cameraLoc );

		if ( dist >= bj_SMARTPAN_TRESHOLD_SNAP )

			// If the user is too far away, snap the camera.
			PanCameraToTimed( GetLocationX( loc ), GetLocationY( loc ), 0 );

		else if ( dist >= bj_SMARTPAN_TRESHOLD_PAN )

			// If the user is moderately close, pan the camera.
			PanCameraToTimed( GetLocationX( loc ), GetLocationY( loc ), duration );

		else {

			// User is close enough, so don't touch the camera.

		}

	}

	RemoveLocation( cameraLoc );

};

// ===========================================================================
export const SetCinematicCameraForPlayer = ( whichPlayer: player, cameraModelFile: string ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		SetCinematicCamera( cameraModelFile );

};

// ===========================================================================
export const ResetToGameCameraForPlayer = ( whichPlayer: player, duration: number ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		ResetToGameCamera( duration );

};

// ===========================================================================
export const CameraSetSourceNoiseForPlayer = ( whichPlayer: player, magnitude: number, velocity: number ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		CameraSetSourceNoise( magnitude, velocity );

};

// ===========================================================================
export const CameraSetTargetNoiseForPlayer = ( whichPlayer: player, magnitude: number, velocity: number ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		CameraSetTargetNoise( magnitude, velocity );

};

// ===========================================================================
export const CameraSetEQNoiseForPlayer = ( whichPlayer: player, magnitude: number ): void => {

	let richter = magnitude;

	if ( richter > 5 )

		richter = 5;

	if ( richter < 2 )

		richter = 2;

	if ( GetLocalPlayer() === whichPlayer ) {

		// Use only local code (no net traffic) within this block to avoid desyncs.
		CameraSetTargetNoiseEx( magnitude * 2, magnitude * Pow( 10, richter ), true );
		CameraSetSourceNoiseEx( magnitude * 2, magnitude * Pow( 10, richter ), true );

	}

};

// ===========================================================================
export const CameraClearNoiseForPlayer = ( whichPlayer: player ): void => {

	if ( GetLocalPlayer() === whichPlayer ) {

		// Use only local code (no net traffic) within this block to avoid desyncs.
		CameraSetSourceNoise( 0, 0 );
		CameraSetTargetNoise( 0, 0 );

	}

};

// ===========================================================================
// Query the current camera bounds.
//
export const GetCurrentCameraBoundsMapRectBJ = (): rect => Rect( GetCameraBoundMinX(), GetCameraBoundMinY(), GetCameraBoundMaxX(), GetCameraBoundMaxY() );

// ===========================================================================
// Query the initial camera bounds, as defined at map init.
//
export const GetCameraBoundsMapRect = (): rect => bj_mapInitialCameraBounds;

// ===========================================================================
// Query the playable map area, as defined at map init.
//
export const GetPlayableMapRect = (): rect => bj_mapInitialPlayableArea;

// ===========================================================================
// Query the entire map area, as defined at map init.
//
export const GetEntireMapRect = (): rect => GetWorldBounds();

// ===========================================================================
export const SetCameraBoundsToRect = ( r: rect ): void => {

	const minX = GetRectMinX( r );
	const minY = GetRectMinY( r );
	const maxX = GetRectMaxX( r );
	const maxY = GetRectMaxY( r );
	SetCameraBounds( minX, minY, minX, maxY, maxX, maxY, maxX, minY );

};

// ===========================================================================
export const SetCameraBoundsToRectForPlayerBJ = ( whichPlayer: player, r: rect ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		SetCameraBoundsToRect( r );

};

// ===========================================================================
export const AdjustCameraBoundsBJ = ( adjustMethod: number, dxWest: number, dxEast: number, dyNorth: number, dySouth: number ): void => {

	let minX = 0;
	let minY = 0;
	let maxX = 0;
	let maxY = 0;
	let scale = 0;

	if ( adjustMethod === bj_CAMERABOUNDS_ADJUST_ADD )

		scale = 1;

	else if ( adjustMethod === bj_CAMERABOUNDS_ADJUST_SUB )

		scale = - 1;

	else

		// Unrecognized adjustment method - ignore the request.
		return;

	// Adjust the actual camera values
	minX = GetCameraBoundMinX() - scale * dxWest;
	maxX = GetCameraBoundMaxX() + scale * dxEast;
	minY = GetCameraBoundMinY() - scale * dySouth;
	maxY = GetCameraBoundMaxY() + scale * dyNorth;

	// Make sure the camera bounds are still valid.

	if ( maxX < minX ) {

		minX = ( minX + maxX ) * 0.5;
		maxX = minX;

	}

	if ( maxY < minY ) {

		minY = ( minY + maxY ) * 0.5;
		maxY = minY;

	}

	// Apply the new camera values.
	SetCameraBounds( minX, minY, minX, maxY, maxX, maxY, maxX, minY );

};

// ===========================================================================
export const AdjustCameraBoundsForPlayerBJ = ( adjustMethod: number, whichPlayer: player, dxWest: number, dxEast: number, dyNorth: number, dySouth: number ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		AdjustCameraBoundsBJ( adjustMethod, dxWest, dxEast, dyNorth, dySouth );

};

// ===========================================================================
export const SetCameraQuickPositionForPlayer = ( whichPlayer: player, x: number, y: number ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		SetCameraQuickPosition( x, y );

};

// ===========================================================================
export const SetCameraQuickPositionLocForPlayer = ( whichPlayer: player, loc: location ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		SetCameraQuickPosition( GetLocationX( loc ), GetLocationY( loc ) );

};

// ===========================================================================
export const SetCameraQuickPositionLoc = ( loc: location ): void => {

	SetCameraQuickPosition( GetLocationX( loc ), GetLocationY( loc ) );

};

// ===========================================================================
export const StopCameraForPlayerBJ = ( whichPlayer: player ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		StopCamera();

};

// ===========================================================================
export const SetCameraOrientControllerForPlayerBJ = ( whichPlayer: player, whichUnit: unit, xoffset: number, yoffset: number ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		SetCameraOrientController( whichUnit, xoffset, yoffset );

};

// ===========================================================================
export const CameraSetSmoothingFactorBJ = ( factor: number ): void => {

	CameraSetSmoothingFactor( factor );

};

// ===========================================================================
export const CameraResetSmoothingFactorBJ = (): void => {

	CameraSetSmoothingFactor( 0 );

};

// ***************************************************************************
// *
// *  Text Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const DisplayTextToForce = ( toForce: force, message: string ): void => {

	if ( IsPlayerInForce( GetLocalPlayer(), toForce ) )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		DisplayTextToPlayer( GetLocalPlayer(), 0, 0, message );

};

// ===========================================================================
export const DisplayTimedTextToForce = ( toForce: force, duration: number, message: string ): void => {

	if ( IsPlayerInForce( GetLocalPlayer(), toForce ) )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, duration, message );

};

// ===========================================================================
export const ClearTextMessagesBJ = ( toForce: force ): void => {

	if ( IsPlayerInForce( GetLocalPlayer(), toForce ) )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		ClearTextMessages();

};

// ===========================================================================
// The parameters for the API Substring function are unintuitive, so this
// merely performs a translation for the starting index.
//
export const SubStringBJ = ( source: string, start: number, end: number ): string => SubString( source, start - 1, end );

export const GetHandleIdBJ = ( h: handle ): number => GetHandleId( h );

export const StringHashBJ = ( s: string ): number => StringHash( s );

// ***************************************************************************
// *
// *  Event Registration Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const TriggerRegisterTimerEventPeriodic = ( trig: trigger, timeout: number ): event => TriggerRegisterTimerEvent( trig, timeout, true );

// ===========================================================================
export const TriggerRegisterTimerEventSingle = ( trig: trigger, timeout: number ): event => TriggerRegisterTimerEvent( trig, timeout, false );

// ===========================================================================
export const TriggerRegisterTimerExpireEventBJ = ( trig: trigger, t: timer ): event => TriggerRegisterTimerExpireEvent( trig, t );

// ===========================================================================
export const TriggerRegisterPlayerUnitEventSimple = ( trig: trigger, whichPlayer: player, whichEvent: playerunitevent ): event => TriggerRegisterPlayerUnitEvent( trig, whichPlayer, whichEvent, null );

// ===========================================================================
export const TriggerRegisterAnyUnitEventBJ = ( trig: trigger, whichEvent: playerunitevent ): void => {

	let index: number;

	index = 0;

	while ( true ) {

		TriggerRegisterPlayerUnitEvent( trig, Player( index ), whichEvent, null );

		index = index + 1;
		if ( index === bj_MAX_PLAYER_SLOTS ) break;

	}

};

// ===========================================================================
export const TriggerRegisterPlayerSelectionEventBJ = ( trig: trigger, whichPlayer: player, selected: boolean ): event => {

	if ( selected )

		return TriggerRegisterPlayerUnitEvent( trig, whichPlayer, EVENT_PLAYER_UNIT_SELECTED, null );

	else

		return TriggerRegisterPlayerUnitEvent( trig, whichPlayer, EVENT_PLAYER_UNIT_DESELECTED, null );

};

// ===========================================================================
export const TriggerRegisterPlayerKeyEventBJ = ( trig: trigger, whichPlayer: player, keType: number, keKey: number ): event | null => {

	if ( keType === bj_KEYEVENTTYPE_DEPRESS )

	// Depress event - find out what key

		if ( keKey === bj_KEYEVENTKEY_LEFT ) {

			return TriggerRegisterPlayerEvent( trig, whichPlayer, EVENT_PLAYER_ARROW_LEFT_DOWN );

		} else if ( keKey === bj_KEYEVENTKEY_RIGHT ) {

			return TriggerRegisterPlayerEvent( trig, whichPlayer, EVENT_PLAYER_ARROW_RIGHT_DOWN );

		} else if ( keKey === bj_KEYEVENTKEY_DOWN ) {

			return TriggerRegisterPlayerEvent( trig, whichPlayer, EVENT_PLAYER_ARROW_DOWN_DOWN );

		} else if ( keKey === bj_KEYEVENTKEY_UP ) {

			return TriggerRegisterPlayerEvent( trig, whichPlayer, EVENT_PLAYER_ARROW_UP_DOWN );

		} else {

			// Unrecognized key - ignore the request and return failure.
			return null;

		}

	else if ( keType === bj_KEYEVENTTYPE_RELEASE )

	// Release event - find out what key

		if ( keKey === bj_KEYEVENTKEY_LEFT ) {

			return TriggerRegisterPlayerEvent( trig, whichPlayer, EVENT_PLAYER_ARROW_LEFT_UP );

		} else if ( keKey === bj_KEYEVENTKEY_RIGHT ) {

			return TriggerRegisterPlayerEvent( trig, whichPlayer, EVENT_PLAYER_ARROW_RIGHT_UP );

		} else if ( keKey === bj_KEYEVENTKEY_DOWN ) {

			return TriggerRegisterPlayerEvent( trig, whichPlayer, EVENT_PLAYER_ARROW_DOWN_UP );

		} else if ( keKey === bj_KEYEVENTKEY_UP ) {

			return TriggerRegisterPlayerEvent( trig, whichPlayer, EVENT_PLAYER_ARROW_UP_UP );

		} else {

			// Unrecognized key - ignore the request and return failure.
			return null;

		}

	else

		// Unrecognized type - ignore the request and return failure.
		return null;

};

// ===========================================================================
export const TriggerRegisterPlayerMouseEventBJ = ( trig: trigger, whichPlayer: player, meType: number ): event | null => {

	if ( meType === bj_MOUSEEVENTTYPE_DOWN )

		// Mouse down event
		return TriggerRegisterPlayerEvent( trig, whichPlayer, EVENT_PLAYER_MOUSE_DOWN );

	else if ( meType === bj_MOUSEEVENTTYPE_UP )

		// Mouse up event
		return TriggerRegisterPlayerEvent( trig, whichPlayer, EVENT_PLAYER_MOUSE_UP );

	else if ( meType === bj_MOUSEEVENTTYPE_MOVE )

		// Mouse move event
		return TriggerRegisterPlayerEvent( trig, whichPlayer, EVENT_PLAYER_MOUSE_MOVE );

	else

		// Unrecognized type - ignore the request and return failure.
		return null;

};

// ===========================================================================
export const TriggerRegisterPlayerEventVictory = ( trig: trigger, whichPlayer: player ): event => TriggerRegisterPlayerEvent( trig, whichPlayer, EVENT_PLAYER_VICTORY );

// ===========================================================================
export const TriggerRegisterPlayerEventDefeat = ( trig: trigger, whichPlayer: player ): event => TriggerRegisterPlayerEvent( trig, whichPlayer, EVENT_PLAYER_DEFEAT );

// ===========================================================================
export const TriggerRegisterPlayerEventLeave = ( trig: trigger, whichPlayer: player ): event => TriggerRegisterPlayerEvent( trig, whichPlayer, EVENT_PLAYER_LEAVE );

// ===========================================================================
export const TriggerRegisterPlayerEventAllianceChanged = ( trig: trigger, whichPlayer: player ): event => TriggerRegisterPlayerEvent( trig, whichPlayer, EVENT_PLAYER_ALLIANCE_CHANGED );

// ===========================================================================
export const TriggerRegisterPlayerEventEndCinematic = ( trig: trigger, whichPlayer: player ): event => TriggerRegisterPlayerEvent( trig, whichPlayer, EVENT_PLAYER_END_CINEMATIC );

// ===========================================================================
export const TriggerRegisterGameStateEventTimeOfDay = ( trig: trigger, opcode: limitop, limitval: number ): event => TriggerRegisterGameStateEvent( trig, GAME_STATE_TIME_OF_DAY, opcode, limitval );

// ===========================================================================
export const TriggerRegisterEnterRegionSimple = ( trig: trigger, whichRegion: region ): event => TriggerRegisterEnterRegion( trig, whichRegion, null );

// ===========================================================================
export const TriggerRegisterLeaveRegionSimple = ( trig: trigger, whichRegion: region ): event => TriggerRegisterLeaveRegion( trig, whichRegion, null );

// ===========================================================================
export const TriggerRegisterEnterRectSimple = ( trig: trigger, r: rect ): event => {

	const rectRegion = CreateRegion();
	RegionAddRect( rectRegion, r );
	return TriggerRegisterEnterRegion( trig, rectRegion, null );

};

// ===========================================================================
export const TriggerRegisterLeaveRectSimple = ( trig: trigger, r: rect ): event => {

	const rectRegion = CreateRegion();
	RegionAddRect( rectRegion, r );
	return TriggerRegisterLeaveRegion( trig, rectRegion, null );

};

// ===========================================================================
export const TriggerRegisterDistanceBetweenUnits = ( trig: trigger, whichUnit: unit, condition: boolexpr, range: number ): event => TriggerRegisterUnitInRange( trig, whichUnit, range, condition );

// ===========================================================================
export const TriggerRegisterUnitInRangeSimple = ( trig: trigger, range: number, whichUnit: unit ): event => TriggerRegisterUnitInRange( trig, whichUnit, range, null );

// ===========================================================================
export const TriggerRegisterUnitLifeEvent = ( trig: trigger, whichUnit: unit, opcode: limitop, limitval: number ): event => TriggerRegisterUnitStateEvent( trig, whichUnit, UNIT_STATE_LIFE, opcode, limitval );

// ===========================================================================
export const TriggerRegisterUnitManaEvent = ( trig: trigger, whichUnit: unit, opcode: limitop, limitval: number ): event => TriggerRegisterUnitStateEvent( trig, whichUnit, UNIT_STATE_MANA, opcode, limitval );

// ===========================================================================
export const TriggerRegisterDialogEventBJ = ( trig: trigger, whichDialog: dialog ): event => TriggerRegisterDialogEvent( trig, whichDialog );

// ===========================================================================
export const TriggerRegisterShowSkillEventBJ = ( trig: trigger ): event => TriggerRegisterGameEvent( trig, EVENT_GAME_SHOW_SKILL );

// ===========================================================================
export const TriggerRegisterBuildSubmenuEventBJ = ( trig: trigger ): event => TriggerRegisterGameEvent( trig, EVENT_GAME_BUILD_SUBMENU );

// ===========================================================================
export const TriggerRegisterGameLoadedEventBJ = ( trig: trigger ): event => TriggerRegisterGameEvent( trig, EVENT_GAME_LOADED );

// ===========================================================================
export const TriggerRegisterGameSavedEventBJ = ( trig: trigger ): event => TriggerRegisterGameEvent( trig, EVENT_GAME_SAVE );

// ===========================================================================
export const RegisterDestDeathInRegionEnum = (): void => {

	bj_destInRegionDiesCount = bj_destInRegionDiesCount + 1;

	if ( bj_destInRegionDiesCount <= bj_MAX_DEST_IN_REGION_EVENTS ) {

		const dest = GetEnumDestructable();
		if ( dest ) TriggerRegisterDeathEvent( bj_destInRegionDiesTrig, dest );

	}

};

// ===========================================================================
export const TriggerRegisterDestDeathInRegionEvent = ( trig: trigger, r: rect ): void => {

	bj_destInRegionDiesTrig = trig;
	bj_destInRegionDiesCount = 0;
	EnumDestructablesInRect( r, null, RegisterDestDeathInRegionEnum );

};

// ***************************************************************************
// *
// *  Environment Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const AddWeatherEffectSaveLast = ( where: rect, effectID: number ): weathereffect => {

	bj_lastCreatedWeatherEffect = AddWeatherEffect( where, effectID );
	return bj_lastCreatedWeatherEffect;

};

// ===========================================================================
export const GetLastCreatedWeatherEffect = (): weathereffect => bj_lastCreatedWeatherEffect;

// ===========================================================================
export const RemoveWeatherEffectBJ = ( whichWeatherEffect: weathereffect ): void => {

	RemoveWeatherEffect( whichWeatherEffect );

};

// ===========================================================================
export const TerrainDeformationCraterBJ = ( duration: number, permanent: boolean, where: location, radius: number, depth: number ): terraindeformation => {

	bj_lastCreatedTerrainDeformation = TerrainDeformCrater( GetLocationX( where ), GetLocationY( where ), radius, depth, R2I( duration * 1000 ), permanent );
	return bj_lastCreatedTerrainDeformation;

};

// ===========================================================================
export const TerrainDeformationRippleBJ = ( duration: number, limitNeg: boolean, where: location, startRadius: number, endRadius: number, depth: number, wavePeriod: number, waveWidth: number ): terraindeformation | null => {

	if ( endRadius <= 0 || waveWidth <= 0 || wavePeriod <= 0 )
		return null;

	const timeWave = 2 * duration / wavePeriod;
	const spaceWave = 2 * endRadius / waveWidth;
	const radiusRatio = startRadius / endRadius;

	bj_lastCreatedTerrainDeformation = TerrainDeformRipple( GetLocationX( where ), GetLocationY( where ), endRadius, depth, R2I( duration * 1000 ), 1, spaceWave, timeWave, radiusRatio, limitNeg );
	return bj_lastCreatedTerrainDeformation;

};

// ===========================================================================
export const TerrainDeformationWaveBJ = ( duration: number, source: location, target: location, radius: number, depth: number, trailDelay: number ): terraindeformation | null => {

	const distance = DistanceBetweenPoints( source, target );

	if ( distance === 0 || duration <= 0 )
		return null;

	const dirX = ( GetLocationX( target ) - GetLocationX( source ) ) / distance;
	const dirY = ( GetLocationY( target ) - GetLocationY( source ) ) / distance;
	const speed = distance / duration;

	bj_lastCreatedTerrainDeformation = TerrainDeformWave( GetLocationX( source ), GetLocationY( source ), dirX, dirY, distance, speed, radius, depth, R2I( trailDelay * 1000 ), 1 );
	return bj_lastCreatedTerrainDeformation;

};

// ===========================================================================
export const TerrainDeformationRandomBJ = ( duration: number, where: location, radius: number, minDelta: number, maxDelta: number, updateInterval: number ): terraindeformation => {

	bj_lastCreatedTerrainDeformation = TerrainDeformRandom( GetLocationX( where ), GetLocationY( where ), radius, minDelta, maxDelta, R2I( duration * 1000 ), R2I( updateInterval * 1000 ) );
	return bj_lastCreatedTerrainDeformation;

};

// ===========================================================================
export const TerrainDeformationStopBJ = ( deformation: terraindeformation, duration: number ): void => {

	TerrainDeformStop( deformation, R2I( duration * 1000 ) );

};

// ===========================================================================
export const GetLastCreatedTerrainDeformation = (): terraindeformation => bj_lastCreatedTerrainDeformation;

// ===========================================================================
export const AddLightningLoc = ( codeName: string, where1: location, where2: location ): lightning => {

	bj_lastCreatedLightning = AddLightningEx( codeName, true, GetLocationX( where1 ), GetLocationY( where1 ), GetLocationZ( where1 ), GetLocationX( where2 ), GetLocationY( where2 ), GetLocationZ( where2 ) );
	return bj_lastCreatedLightning;

};

// ===========================================================================
export const DestroyLightningBJ = ( whichBolt: lightning ): boolean => DestroyLightning( whichBolt );

// ===========================================================================
export const MoveLightningLoc = ( whichBolt: lightning, where1: location, where2: location ): boolean => MoveLightningEx( whichBolt, true, GetLocationX( where1 ), GetLocationY( where1 ), GetLocationZ( where1 ), GetLocationX( where2 ), GetLocationY( where2 ), GetLocationZ( where2 ) );

// ===========================================================================
export const GetLightningColorABJ = ( whichBolt: lightning ): number => GetLightningColorA( whichBolt );

// ===========================================================================
export const GetLightningColorRBJ = ( whichBolt: lightning ): number => GetLightningColorR( whichBolt );

// ===========================================================================
export const GetLightningColorGBJ = ( whichBolt: lightning ): number => GetLightningColorG( whichBolt );

// ===========================================================================
export const GetLightningColorBBJ = ( whichBolt: lightning ): number => GetLightningColorB( whichBolt );

// ===========================================================================
export const SetLightningColorBJ = ( whichBolt: lightning, r: number, g: number, b: number, a: number ): boolean => SetLightningColor( whichBolt, r, g, b, a );

// ===========================================================================
export const GetLastCreatedLightningBJ = (): lightning => bj_lastCreatedLightning;

// ===========================================================================
export const GetAbilityEffectBJ = ( abilcode: number, t: effecttype, index: number ): string => GetAbilityEffectById( abilcode, t, index );

// ===========================================================================
export const GetAbilitySoundBJ = ( abilcode: number, t: soundtype ): string => GetAbilitySoundById( abilcode, t );

// ===========================================================================
export const GetTerrainCliffLevelBJ = ( where: location ): number => GetTerrainCliffLevel( GetLocationX( where ), GetLocationY( where ) );

// ===========================================================================
export const GetTerrainTypeBJ = ( where: location ): number => GetTerrainType( GetLocationX( where ), GetLocationY( where ) );

// ===========================================================================
export const GetTerrainVarianceBJ = ( where: location ): number => GetTerrainVariance( GetLocationX( where ), GetLocationY( where ) );

// ===========================================================================
export const SetTerrainTypeBJ = ( where: location, terrainType: number, variation: number, area: number, shape: number ): void => {

	SetTerrainType( GetLocationX( where ), GetLocationY( where ), terrainType, variation, area, shape );

};

// ===========================================================================
export const IsTerrainPathableBJ = ( where: location, t: pathingtype ): boolean => IsTerrainPathable( GetLocationX( where ), GetLocationY( where ), t );

// ===========================================================================
export const SetTerrainPathableBJ = ( where: location, t: pathingtype, flag: boolean ): void => {

	SetTerrainPathable( GetLocationX( where ), GetLocationY( where ), t, flag );

};

// ===========================================================================
export const SetWaterBaseColorBJ = ( red: number, green: number, blue: number, transparency: number ): void => {

	SetWaterBaseColor( PercentTo255( red ), PercentTo255( green ), PercentTo255( blue ), PercentTo255( 100 - transparency ) );

};

// ===========================================================================
export const CreateFogModifierRectSimple = ( whichPlayer: player, whichFogState: fogstate, r: rect, afterUnits: boolean ): fogmodifier => {

	bj_lastCreatedFogModifier = CreateFogModifierRect( whichPlayer, whichFogState, r, true, afterUnits );
	return bj_lastCreatedFogModifier;

};

// ===========================================================================
export const CreateFogModifierRadiusLocSimple = ( whichPlayer: player, whichFogState: fogstate, center: location, radius: number, afterUnits: boolean ): fogmodifier => {

	bj_lastCreatedFogModifier = CreateFogModifierRadiusLoc( whichPlayer, whichFogState, center, radius, true, afterUnits );
	return bj_lastCreatedFogModifier;

};

// ===========================================================================
// Version of CreateFogModifierRect that assumes use of sharedVision and
// gives the option of immediately enabling the modifier, so that triggers
// can default to modifiers that are immediately enabled.
//
export const CreateFogModifierRectBJ = ( enabled: boolean, whichPlayer: player, whichFogState: fogstate, r: rect ): fogmodifier => {

	bj_lastCreatedFogModifier = CreateFogModifierRect( whichPlayer, whichFogState, r, true, false );

	if ( enabled )

		FogModifierStart( bj_lastCreatedFogModifier );

	return bj_lastCreatedFogModifier;

};

// ===========================================================================
// Version of CreateFogModifierRadius that assumes use of sharedVision and
// gives the option of immediately enabling the modifier, so that triggers
// can default to modifiers that are immediately enabled.
//
export const CreateFogModifierRadiusLocBJ = ( enabled: boolean, whichPlayer: player, whichFogState: fogstate, center: location, radius: number ): fogmodifier => {

	bj_lastCreatedFogModifier = CreateFogModifierRadiusLoc( whichPlayer, whichFogState, center, radius, true, false );

	if ( enabled )

		FogModifierStart( bj_lastCreatedFogModifier );

	return bj_lastCreatedFogModifier;

};

// ===========================================================================
export const GetLastCreatedFogModifier = (): fogmodifier => bj_lastCreatedFogModifier;

// ===========================================================================
export const FogEnableOn = (): void => {

	FogEnable( true );

};

// ===========================================================================
export const FogEnableOff = (): void => {

	FogEnable( false );

};

// ===========================================================================
export const FogMaskEnableOn = (): void => {

	FogMaskEnable( true );

};

// ===========================================================================
export const FogMaskEnableOff = (): void => {

	FogMaskEnable( false );

};

// ===========================================================================
export const UseTimeOfDayBJ = ( flag: boolean ): void => {

	SuspendTimeOfDay( ! flag );

};

// ===========================================================================
export const SetTerrainFogExBJ = ( style: number, zstart: number, zend: number, density: number, red: number, green: number, blue: number ): void => {

	SetTerrainFogEx( style, zstart, zend, density, red * 0.01, green * 0.01, blue * 0.01 );

};

// ===========================================================================
export const ResetTerrainFogBJ = (): void => {

	ResetTerrainFog();

};

// ===========================================================================
export const SetDoodadAnimationBJ = ( animName: string, doodadID: number, radius: number, center: location ): void => {

	SetDoodadAnimation( GetLocationX( center ), GetLocationY( center ), radius, doodadID, false, animName, false );

};

// ===========================================================================
export const SetDoodadAnimationRectBJ = ( animName: string, doodadID: number, r: rect ): void => {

	SetDoodadAnimationRect( r, doodadID, animName, false );

};

// ===========================================================================
export const AddUnitAnimationPropertiesBJ = ( add: boolean, animProperties: string, whichUnit: unit ): void => {

	AddUnitAnimationProperties( whichUnit, animProperties, add );

};

// ============================================================================
export const CreateImageBJ = ( file: string, size: number, where: location, zOffset: number, imageType: number ): image => {

	bj_lastCreatedImage = CreateImage( file, size, size, size, GetLocationX( where ), GetLocationY( where ), zOffset, 0, 0, 0, imageType );
	return bj_lastCreatedImage;

};

// ============================================================================
export const ShowImageBJ = ( flag: boolean, whichImage: image ): void => {

	ShowImage( whichImage, flag );

};

// ============================================================================
export const SetImagePositionBJ = ( whichImage: image, where: location, zOffset: number ): void => {

	SetImagePosition( whichImage, GetLocationX( where ), GetLocationY( where ), zOffset );

};

// ============================================================================
export const SetImageColorBJ = ( whichImage: image, red: number, green: number, blue: number, alpha: number ): void => {

	SetImageColor( whichImage, PercentTo255( red ), PercentTo255( green ), PercentTo255( blue ), PercentTo255( 100 - alpha ) );

};

// ============================================================================
export const GetLastCreatedImage = (): image => bj_lastCreatedImage;

// ============================================================================
export const CreateUbersplatBJ = ( where: location, name: string, red: number, green: number, blue: number, alpha: number, forcePaused: boolean, noBirthTime: boolean ): ubersplat => {

	bj_lastCreatedUbersplat = CreateUbersplat( GetLocationX( where ), GetLocationY( where ), name, PercentTo255( red ), PercentTo255( green ), PercentTo255( blue ), PercentTo255( 100 - alpha ), forcePaused, noBirthTime );
	return bj_lastCreatedUbersplat;

};

// ============================================================================
export const ShowUbersplatBJ = ( flag: boolean, whichSplat: ubersplat ): void => {

	ShowUbersplat( whichSplat, flag );

};

// ============================================================================
export const GetLastCreatedUbersplat = (): ubersplat => bj_lastCreatedUbersplat;

// ***************************************************************************
// *
// *  Sound Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const PlaySoundBJ = ( soundHandle: sound ): void => {

	bj_lastPlayedSound = soundHandle;

	if ( soundHandle !== null )

		StartSound( soundHandle );

};

// ===========================================================================
export const StopSoundBJ = ( soundHandle: sound, fadeOut: boolean ): void => {

	StopSound( soundHandle, false, fadeOut );

};

// ===========================================================================
export const SetSoundVolumeBJ = ( soundHandle: sound, volumePercent: number ): void => {

	SetSoundVolume( soundHandle, PercentToInt( volumePercent, 127 ) );

};

// ===========================================================================
export const SetSoundOffsetBJ = ( newOffset: number, soundHandle: sound ): void => {

	SetSoundPlayPosition( soundHandle, R2I( newOffset * 1000 ) );

};

// ===========================================================================
export const SetSoundDistanceCutoffBJ = ( soundHandle: sound, cutoff: number ): void => {

	SetSoundDistanceCutoff( soundHandle, cutoff );

};

// ===========================================================================
export const SetSoundPitchBJ = ( soundHandle: sound, pitch: number ): void => {

	SetSoundPitch( soundHandle, pitch );

};

// ===========================================================================
export const SetSoundPositionLocBJ = ( soundHandle: sound, loc: location, z: number ): void => {

	SetSoundPosition( soundHandle, GetLocationX( loc ), GetLocationY( loc ), z );

};

// ===========================================================================
export const AttachSoundToUnitBJ = ( soundHandle: sound, whichUnit: unit ): void => {

	AttachSoundToUnit( soundHandle, whichUnit );

};

// ===========================================================================
export const SetSoundConeAnglesBJ = ( soundHandle: sound, inside: number, outside: number, outsideVolumePercent: number ): void => {

	SetSoundConeAngles( soundHandle, inside, outside, PercentToInt( outsideVolumePercent, 127 ) );

};

// ===========================================================================
export const KillSoundWhenDoneBJ = ( soundHandle: sound ): void => {

	KillSoundWhenDone( soundHandle );

};

// ===========================================================================
export const PlaySoundAtPointBJ = ( soundHandle: sound, volumePercent: number, loc: location, z: number ): void => {

	SetSoundPositionLocBJ( soundHandle, loc, z );
	SetSoundVolumeBJ( soundHandle, volumePercent );
	PlaySoundBJ( soundHandle );

};

// ===========================================================================
export const PlaySoundOnUnitBJ = ( soundHandle: sound, volumePercent: number, whichUnit: unit ): void => {

	AttachSoundToUnitBJ( soundHandle, whichUnit );
	SetSoundVolumeBJ( soundHandle, volumePercent );
	PlaySoundBJ( soundHandle );

};

// ===========================================================================
export const PlaySoundFromOffsetBJ = ( soundHandle: sound, volumePercent: number, startingOffset: number ): void => {

	SetSoundVolumeBJ( soundHandle, volumePercent );
	PlaySoundBJ( soundHandle );
	SetSoundOffsetBJ( startingOffset, soundHandle );

};

// ===========================================================================
export const PlayMusicBJ = ( musicFileName: string ): void => {

	bj_lastPlayedMusic = musicFileName;
	PlayMusic( musicFileName );

};

// ===========================================================================
export const PlayMusicExBJ = ( musicFileName: string, startingOffset: number, fadeInTime: number ): void => {

	bj_lastPlayedMusic = musicFileName;
	PlayMusicEx( musicFileName, R2I( startingOffset * 1000 ), R2I( fadeInTime * 1000 ) );

};

// ===========================================================================
export const SetMusicOffsetBJ = ( newOffset: number ): void => {

	SetMusicPlayPosition( R2I( newOffset * 1000 ) );

};

// ===========================================================================
export const PlayThematicMusicBJ = ( musicName: string ): void => {

	PlayThematicMusic( musicName );

};

// ===========================================================================
export const PlayThematicMusicExBJ = ( musicName: string, startingOffset: number ): void => {

	PlayThematicMusicEx( musicName, R2I( startingOffset * 1000 ) );

};

// ===========================================================================
export const SetThematicMusicOffsetBJ = ( newOffset: number ): void => {

	SetThematicMusicPlayPosition( R2I( newOffset * 1000 ) );

};

// ===========================================================================
export const EndThematicMusicBJ = (): void => {

	EndThematicMusic();

};

// ===========================================================================
export const StopMusicBJ = ( fadeOut: boolean ): void => {

	StopMusic( fadeOut );

};

// ===========================================================================
export const ResumeMusicBJ = (): void => {

	ResumeMusic();

};

// ===========================================================================
export const SetMusicVolumeBJ = ( volumePercent: number ): void => {

	SetMusicVolume( PercentToInt( volumePercent, 127 ) );

};

// ===========================================================================
export const GetSoundDurationBJ = ( soundHandle: sound ): number => {

	if ( soundHandle === null )

		return bj_NOTHING_SOUND_DURATION;

	else

		return I2R( GetSoundDuration( soundHandle ) ) * 0.001;

};

// ===========================================================================
export const GetSoundFileDurationBJ = ( musicFileName: string ): number => I2R( GetSoundFileDuration( musicFileName ) ) * 0.001;

// ===========================================================================
export const GetLastPlayedSound = (): sound => bj_lastPlayedSound;

// ===========================================================================
export const GetLastPlayedMusic = (): string => bj_lastPlayedMusic;

// ===========================================================================
export const VolumeGroupSetVolumeBJ = ( vgroup: volumegroup, percent: number ): void => {

	VolumeGroupSetVolume( vgroup, percent * 0.01 );

};

// ===========================================================================
export const SetCineModeVolumeGroupsImmediateBJ = (): void => {

	VolumeGroupSetVolume( SOUND_VOLUMEGROUP_UNITMOVEMENT, bj_CINEMODE_VOLUME_UNITMOVEMENT );
	VolumeGroupSetVolume( SOUND_VOLUMEGROUP_UNITSOUNDS, bj_CINEMODE_VOLUME_UNITSOUNDS );
	VolumeGroupSetVolume( SOUND_VOLUMEGROUP_COMBAT, bj_CINEMODE_VOLUME_COMBAT );
	VolumeGroupSetVolume( SOUND_VOLUMEGROUP_SPELLS, bj_CINEMODE_VOLUME_SPELLS );
	VolumeGroupSetVolume( SOUND_VOLUMEGROUP_UI, bj_CINEMODE_VOLUME_UI );
	VolumeGroupSetVolume( SOUND_VOLUMEGROUP_MUSIC, bj_CINEMODE_VOLUME_MUSIC );
	VolumeGroupSetVolume( SOUND_VOLUMEGROUP_AMBIENTSOUNDS, bj_CINEMODE_VOLUME_AMBIENTSOUNDS );
	VolumeGroupSetVolume( SOUND_VOLUMEGROUP_FIRE, bj_CINEMODE_VOLUME_FIRE );

};

// ===========================================================================
export const SetCineModeVolumeGroupsBJ = (): void => {

	// Delay the request if it occurs at map init.

	if ( bj_gameStarted )

		SetCineModeVolumeGroupsImmediateBJ();

	else

		TimerStart( bj_volumeGroupsTimer, bj_GAME_STARTED_THRESHOLD, false, SetCineModeVolumeGroupsImmediateBJ );

};

// ===========================================================================
export const SetSpeechVolumeGroupsImmediateBJ = (): void => {

	VolumeGroupSetVolume( SOUND_VOLUMEGROUP_UNITMOVEMENT, bj_SPEECH_VOLUME_UNITMOVEMENT );
	VolumeGroupSetVolume( SOUND_VOLUMEGROUP_UNITSOUNDS, bj_SPEECH_VOLUME_UNITSOUNDS );
	VolumeGroupSetVolume( SOUND_VOLUMEGROUP_COMBAT, bj_SPEECH_VOLUME_COMBAT );
	VolumeGroupSetVolume( SOUND_VOLUMEGROUP_SPELLS, bj_SPEECH_VOLUME_SPELLS );
	VolumeGroupSetVolume( SOUND_VOLUMEGROUP_UI, bj_SPEECH_VOLUME_UI );
	VolumeGroupSetVolume( SOUND_VOLUMEGROUP_MUSIC, bj_SPEECH_VOLUME_MUSIC );
	VolumeGroupSetVolume( SOUND_VOLUMEGROUP_AMBIENTSOUNDS, bj_SPEECH_VOLUME_AMBIENTSOUNDS );
	VolumeGroupSetVolume( SOUND_VOLUMEGROUP_FIRE, bj_SPEECH_VOLUME_FIRE );

};

// ===========================================================================
export const SetSpeechVolumeGroupsBJ = (): void => {

	// Delay the request if it occurs at map init.

	if ( bj_gameStarted )

		SetSpeechVolumeGroupsImmediateBJ();

	else

		TimerStart( bj_volumeGroupsTimer, bj_GAME_STARTED_THRESHOLD, false, SetSpeechVolumeGroupsImmediateBJ );

};

// ===========================================================================
export const VolumeGroupResetImmediateBJ = (): void => {

	VolumeGroupReset();

};

// ===========================================================================
export const VolumeGroupResetBJ = (): void => {

	// Delay the request if it occurs at map init.

	if ( bj_gameStarted )

		VolumeGroupResetImmediateBJ();

	else

		TimerStart( bj_volumeGroupsTimer, bj_GAME_STARTED_THRESHOLD, false, VolumeGroupResetImmediateBJ );

};

// ===========================================================================
export const GetSoundIsPlayingBJ = ( soundHandle: sound ): boolean => GetSoundIsLoading( soundHandle ) || GetSoundIsPlaying( soundHandle );

// ===========================================================================
export const WaitForSoundBJ = ( soundHandle: sound, offset: number ): void => {

	TriggerWaitForSound( soundHandle, offset );

};

// ===========================================================================
export const SetMapMusicIndexedBJ = ( musicName: string, index: number ): void => {

	SetMapMusic( musicName, false, index );

};

// ===========================================================================
export const SetMapMusicRandomBJ = ( musicName: string ): void => {

	SetMapMusic( musicName, true, 0 );

};

// ===========================================================================
export const ClearMapMusicBJ = (): void => {

	ClearMapMusic();

};

// ===========================================================================
export const SetStackedSoundBJ = ( add: boolean, soundHandle: sound, r: rect ): void => {

	const width = GetRectMaxX( r ) - GetRectMinX( r );
	const height = GetRectMaxY( r ) - GetRectMinY( r );

	SetSoundPosition( soundHandle, GetRectCenterX( r ), GetRectCenterY( r ), 0 );

	if ( add )

		RegisterStackedSound( soundHandle, true, width, height );

	else

		UnregisterStackedSound( soundHandle, true, width, height );

};

// ===========================================================================
export const StartSoundForPlayerBJ = ( whichPlayer: player, soundHandle: sound ): void => {

	if ( whichPlayer === GetLocalPlayer() )

		StartSound( soundHandle );

};

// ===========================================================================
export const VolumeGroupSetVolumeForPlayerBJ = ( whichPlayer: player, vgroup: volumegroup, scale: number ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		VolumeGroupSetVolume( vgroup, scale );

};

// ===========================================================================
export const EnableDawnDusk = ( flag: boolean ): void => {

	bj_useDawnDuskSounds = flag;

};

// ===========================================================================
export const IsDawnDuskEnabled = (): boolean => bj_useDawnDuskSounds;

// ***************************************************************************
// *
// *  Day/Night ambient sounds
// *
// ***************************************************************************

// ===========================================================================
export const SetAmbientDaySound = ( inLabel: string ): void => {

	// Stop old sound, if necessary
	if ( bj_dayAmbientSound !== null )
		StopSound( bj_dayAmbientSound, true, true );

	// Create new sound
	bj_dayAmbientSound = CreateMIDISound( inLabel, 20, 20 );

	// Start the sound if necessary, based on current time
	const ToD = GetTimeOfDay();

	if ( ToD >= bj_TOD_DAWN && ToD < bj_TOD_DUSK )
		StartSound( bj_dayAmbientSound );

};

// ===========================================================================
export const SetAmbientNightSound = ( inLabel: string ): void => {

	// Stop old sound, if necessary

	if ( bj_nightAmbientSound !== null )
		StopSound( bj_nightAmbientSound, true, true );

	// Create new sound
	bj_nightAmbientSound = CreateMIDISound( inLabel, 20, 20 );

	// Start the sound if necessary, based on current time
	const ToD = GetTimeOfDay();

	if ( ToD < bj_TOD_DAWN || ToD >= bj_TOD_DUSK )
		StartSound( bj_nightAmbientSound );

};

// ***************************************************************************
// *
// *  Special Effect Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const AddSpecialEffectLocBJ = ( where: location, modelName: string ): effect => {

	bj_lastCreatedEffect = AddSpecialEffectLoc( modelName, where );
	return bj_lastCreatedEffect;

};

// ===========================================================================
export const AddSpecialEffectTargetUnitBJ = ( attachPointName: string, targetWidget: widget, modelName: string ): effect => {

	bj_lastCreatedEffect = AddSpecialEffectTarget( modelName, targetWidget, attachPointName );
	return bj_lastCreatedEffect;

};

// ===========================================================================
// Two distinct trigger actions can't share the same function name, so this
// dummy function simply mimics the behavior of an existing call.
//
// Commented out - Destructibles have no attachment points.
//
// function AddSpecialEffectTargetDestructableBJ takes string attachPointName, widget targetWidget, string modelName returns effect
//    return AddSpecialEffectTargetUnitBJ(attachPointName, targetWidget, modelName)
// endfunction

// ===========================================================================
// Two distinct trigger actions can't share the same function name, so this
// dummy function simply mimics the behavior of an existing call.
//
// Commented out - Items have no attachment points.
//
// function AddSpecialEffectTargetItemBJ takes string attachPointName, widget targetWidget, string modelName returns effect
//    return AddSpecialEffectTargetUnitBJ(attachPointName, targetWidget, modelName)
// endfunction

// ===========================================================================
export const DestroyEffectBJ = ( whichEffect: effect ): void => {

	DestroyEffect( whichEffect );

};

// ===========================================================================
export const GetLastCreatedEffectBJ = (): effect => bj_lastCreatedEffect;

// ***************************************************************************
// *
// *  Hero and Item Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const GetItemLoc = ( whichItem: item ): location => Location( GetItemX( whichItem ), GetItemY( whichItem ) );

// ===========================================================================
export const GetItemLifeBJ = ( whichWidget: widget ): number => GetWidgetLife( whichWidget );

// ===========================================================================
export const SetItemLifeBJ = ( whichWidget: widget, life: number ): void => {

	SetWidgetLife( whichWidget, life );

};

// ===========================================================================
export const AddHeroXPSwapped = ( xpToAdd: number, whichHero: unit, showEyeCandy: boolean ): void => {

	AddHeroXP( whichHero, xpToAdd, showEyeCandy );

};

// ===========================================================================
export const SetHeroLevelBJ = ( whichHero: unit, newLevel: number, showEyeCandy: boolean ): void => {

	const oldLevel = GetHeroLevel( whichHero );

	if ( newLevel > oldLevel )

		SetHeroLevel( whichHero, newLevel, showEyeCandy );

	else if ( newLevel < oldLevel )

		UnitStripHeroLevel( whichHero, oldLevel - newLevel );

	else {

		// No change in level - ignore the request.

	}

};

// ===========================================================================
export const DecUnitAbilityLevelSwapped = ( abilcode: number, whichUnit: unit ): number => DecUnitAbilityLevel( whichUnit, abilcode );

// ===========================================================================
export const IncUnitAbilityLevelSwapped = ( abilcode: number, whichUnit: unit ): number => IncUnitAbilityLevel( whichUnit, abilcode );

// ===========================================================================
export const SetUnitAbilityLevelSwapped = ( abilcode: number, whichUnit: unit, level: number ): number => SetUnitAbilityLevel( whichUnit, abilcode, level );

// ===========================================================================
export const GetUnitAbilityLevelSwapped = ( abilcode: number, whichUnit: unit ): number => GetUnitAbilityLevel( whichUnit, abilcode );

// ===========================================================================
export const UnitHasBuffBJ = ( whichUnit: unit, buffcode: number ): boolean => GetUnitAbilityLevel( whichUnit, buffcode ) > 0;

// ===========================================================================
export const UnitRemoveBuffBJ = ( buffcode: number, whichUnit: unit ): boolean => UnitRemoveAbility( whichUnit, buffcode );

// ===========================================================================
export const UnitAddItemSwapped = ( whichItem: item, whichHero: unit ): boolean => UnitAddItem( whichHero, whichItem );

// ===========================================================================
export const UnitAddItemByIdSwapped = ( itemId: number, whichHero: unit ): item => {

	// Create the item at the hero's feet first, and then give it to him.
	// This is to ensure that the item will be left at the hero's feet if
	// his inventory is full.
	bj_lastCreatedItem = CreateItem( itemId, GetUnitX( whichHero ), GetUnitY( whichHero ) );
	UnitAddItem( whichHero, bj_lastCreatedItem );
	return bj_lastCreatedItem;

};

// ===========================================================================
export const UnitRemoveItemSwapped = ( whichItem: item, whichHero: unit ): void => {

	bj_lastRemovedItem = whichItem;
	UnitRemoveItem( whichHero, whichItem );

};

// ===========================================================================
// Translates 0-based slot indices to 1-based slot indices.
//
export const UnitRemoveItemFromSlotSwapped = ( itemSlot: number, whichHero: unit ): item => {

	bj_lastRemovedItem = UnitRemoveItemFromSlot( whichHero, itemSlot - 1 );
	return bj_lastRemovedItem;

};

// ===========================================================================
export const CreateItemLoc = ( itemId: number, loc: location ): item => {

	bj_lastCreatedItem = CreateItem( itemId, GetLocationX( loc ), GetLocationY( loc ) );
	return bj_lastCreatedItem;

};

// ===========================================================================
export const GetLastCreatedItem = (): item => bj_lastCreatedItem;

// ===========================================================================
export const GetLastRemovedItem = (): item => bj_lastRemovedItem;

// ===========================================================================
export const SetItemPositionLoc = ( whichItem: item, loc: location ): void => {

	SetItemPosition( whichItem, GetLocationX( loc ), GetLocationY( loc ) );

};

// ===========================================================================
export const GetLearnedSkillBJ = (): number => GetLearnedSkill();

// ===========================================================================
export const SuspendHeroXPBJ = ( flag: boolean, whichHero: unit ): void => {

	SuspendHeroXP( whichHero, ! flag );

};

// ===========================================================================
export const SetPlayerHandicapXPBJ = ( whichPlayer: player, handicapPercent: number ): void => {

	SetPlayerHandicapXP( whichPlayer, handicapPercent * 0.01 );

};

// ===========================================================================
export const GetPlayerHandicapXPBJ = ( whichPlayer: player ): number => GetPlayerHandicapXP( whichPlayer ) * 100;

// ===========================================================================
export const SetPlayerHandicapBJ = ( whichPlayer: player, handicapPercent: number ): void => {

	SetPlayerHandicap( whichPlayer, handicapPercent * 0.01 );

};

// ===========================================================================
export const GetPlayerHandicapBJ = ( whichPlayer: player ): number => GetPlayerHandicap( whichPlayer ) * 100;

// ===========================================================================
export const GetHeroStatBJ = ( whichStat: number, whichHero: unit, includeBonuses: boolean ): number => {

	if ( whichStat === bj_HEROSTAT_STR )
		return GetHeroStr( whichHero, includeBonuses );

	if ( whichStat === bj_HEROSTAT_AGI )
		return GetHeroAgi( whichHero, includeBonuses );

	if ( whichStat === bj_HEROSTAT_INT )
		return GetHeroInt( whichHero, includeBonuses );

	// Unrecognized hero stat - return 0
	return 0;

};

// ===========================================================================
export const SetHeroStat = ( whichHero: unit, whichStat: number, value: number ): void => {

	// Ignore requests for negative hero stats.

	if ( value <= 0 )

		return;

	if ( whichStat === bj_HEROSTAT_STR )

		SetHeroStr( whichHero, value, true );

	else if ( whichStat === bj_HEROSTAT_AGI )

		SetHeroAgi( whichHero, value, true );

	else if ( whichStat === bj_HEROSTAT_INT )

		SetHeroInt( whichHero, value, true );

	else {

		// Unrecognized hero stat - ignore the request.

	}

};

// ===========================================================================
export const ModifyHeroStat = ( whichStat: number, whichHero: unit, modifyMethod: number, value: number ): void => {

	if ( modifyMethod === bj_MODIFYMETHOD_ADD )

		SetHeroStat( whichHero, whichStat, GetHeroStatBJ( whichStat, whichHero, false ) + value );

	else if ( modifyMethod === bj_MODIFYMETHOD_SUB )

		SetHeroStat( whichHero, whichStat, GetHeroStatBJ( whichStat, whichHero, false ) - value );

	else if ( modifyMethod === bj_MODIFYMETHOD_SET )

		SetHeroStat( whichHero, whichStat, value );

	else {

		// Unrecognized modification method - ignore the request.

	}

};

// ===========================================================================
export const ModifyHeroSkillPoints = ( whichHero: unit, modifyMethod: number, value: number ): boolean => {

	if ( modifyMethod === bj_MODIFYMETHOD_ADD )

		return UnitModifySkillPoints( whichHero, value );

	else if ( modifyMethod === bj_MODIFYMETHOD_SUB )

		return UnitModifySkillPoints( whichHero, - value );

	else if ( modifyMethod === bj_MODIFYMETHOD_SET )

		return UnitModifySkillPoints( whichHero, value - GetHeroSkillPoints( whichHero ) );

	else

		// Unrecognized modification method - ignore the request and return failure.
		return false;

};

// ===========================================================================
export const UnitDropItemPointBJ = ( whichUnit: unit, whichItem: item, x: number, y: number ): boolean => UnitDropItemPoint( whichUnit, whichItem, x, y );

// ===========================================================================
export const UnitDropItemPointLoc = ( whichUnit: unit, whichItem: item, loc: location ): boolean => UnitDropItemPoint( whichUnit, whichItem, GetLocationX( loc ), GetLocationY( loc ) );

// ===========================================================================
export const UnitDropItemSlotBJ = ( whichUnit: unit, whichItem: item, slot: number ): boolean => UnitDropItemSlot( whichUnit, whichItem, slot - 1 );

// ===========================================================================
export const UnitDropItemTargetBJ = ( whichUnit: unit, whichItem: item, target: widget ): boolean => UnitDropItemTarget( whichUnit, whichItem, target );

// ===========================================================================
// Two distinct trigger actions can't share the same function name, so this
// dummy function simply mimics the behavior of an existing call.
//
export const UnitUseItemDestructable = ( whichUnit: unit, whichItem: item, target: widget ): boolean => UnitUseItemTarget( whichUnit, whichItem, target );

// ===========================================================================
export const UnitUseItemPointLoc = ( whichUnit: unit, whichItem: item, loc: location ): boolean => UnitUseItemPoint( whichUnit, whichItem, GetLocationX( loc ), GetLocationY( loc ) );

// ===========================================================================
// Translates 0-based slot indices to 1-based slot indices.
//
export const UnitItemInSlotBJ = ( whichUnit: unit, itemSlot: number ): item => UnitItemInSlot( whichUnit, itemSlot - 1 );

// ===========================================================================
// Translates 0-based slot indices to 1-based slot indices.
//
export const GetInventoryIndexOfItemTypeBJ = ( whichUnit: unit, itemId: number ): number => {

	let index: number;
	let indexItem: item;

	index = 0;

	while ( true ) {

		indexItem = UnitItemInSlot( whichUnit, index );

		if ( indexItem !== null && GetItemTypeId( indexItem ) === itemId )

			return index + 1;

		index = index + 1;
		if ( index >= bj_MAX_INVENTORY ) break;

	}

	return 0;

};

// ===========================================================================
export const GetItemOfTypeFromUnitBJ = ( whichUnit: unit, itemId: number ): item | null => {

	const index = GetInventoryIndexOfItemTypeBJ( whichUnit, itemId );

	if ( index === 0 ) return null;

	return UnitItemInSlot( whichUnit, index - 1 );

};

// ===========================================================================
export const UnitHasItemOfTypeBJ = ( whichUnit: unit, itemId: number ): boolean => GetInventoryIndexOfItemTypeBJ( whichUnit, itemId ) > 0;

// ===========================================================================
export const UnitInventoryCount = ( whichUnit: unit ): number => {

	let index = 0;
	let count = 0;

	while ( true ) {

		if ( UnitItemInSlot( whichUnit, index ) !== null )

			count = count + 1;

		index = index + 1;
		if ( index >= bj_MAX_INVENTORY ) break;

	}

	return count;

};

// ===========================================================================
export const UnitInventorySizeBJ = ( whichUnit: unit ): number => UnitInventorySize( whichUnit );

// ===========================================================================
export const SetItemInvulnerableBJ = ( whichItem: item, flag: boolean ): void => {

	SetItemInvulnerable( whichItem, flag );

};

// ===========================================================================
export const SetItemDropOnDeathBJ = ( whichItem: item, flag: boolean ): void => {

	SetItemDropOnDeath( whichItem, flag );

};

// ===========================================================================
export const SetItemDroppableBJ = ( whichItem: item, flag: boolean ): void => {

	SetItemDroppable( whichItem, flag );

};

// ===========================================================================
export const SetItemPlayerBJ = ( whichItem: item, whichPlayer: player, changeColor: boolean ): void => {

	SetItemPlayer( whichItem, whichPlayer, changeColor );

};

// ===========================================================================
export const SetItemVisibleBJ = ( show: boolean, whichItem: item ): void => {

	SetItemVisible( whichItem, show );

};

// ===========================================================================
export const IsItemHiddenBJ = ( whichItem: item ): boolean => ! IsItemVisible( whichItem );

// ===========================================================================
export const ChooseRandomItemBJ = ( level: number ): number => ChooseRandomItem( level );

// ===========================================================================
export const ChooseRandomItemExBJ = ( level: number, whichType: itemtype ): number => ChooseRandomItemEx( whichType, level );

// ===========================================================================
export const ChooseRandomNPBuildingBJ = (): number => ChooseRandomNPBuilding();

// ===========================================================================
export const ChooseRandomCreepBJ = ( level: number ): number => ChooseRandomCreep( level );

// ===========================================================================
export const EnumItemsInRectBJ = ( r: rect, actionFunc: () => void ): void => {

	EnumItemsInRect( r, null, actionFunc );

};

// ===========================================================================
// See GroupPickRandomUnitEnum for the details of this algorithm.
//
export const RandomItemInRectBJEnum = (): void => {

	bj_itemRandomConsidered = bj_itemRandomConsidered + 1;

	if ( GetRandomInt( 1, bj_itemRandomConsidered ) === 1 )

		bj_itemRandomCurrentPick = GetEnumItem();

};

// ===========================================================================
// Picks a random item from within a rect, matching a condition
//
export const RandomItemInRectBJ = ( r: rect, filter: boolexpr | null ): item | null => {

	bj_itemRandomConsidered = 0;
	bj_itemRandomCurrentPick = null;
	EnumItemsInRect( r, filter, RandomItemInRectBJEnum );
	if ( filter ) DestroyBoolExpr( filter );
	return bj_itemRandomCurrentPick;

};

// ===========================================================================
// Picks a random item from within a rect
//
export const RandomItemInRectSimpleBJ = ( r: rect ): item | null => RandomItemInRectBJ( r, null );

// ===========================================================================
export const CheckItemStatus = ( whichItem: item, status: number ): boolean => {

	if ( status === bj_ITEM_STATUS_HIDDEN )
		return ! IsItemVisible( whichItem );

	if ( status === bj_ITEM_STATUS_OWNED )
		return IsItemOwned( whichItem );

	if ( status === bj_ITEM_STATUS_INVULNERABLE )
		return IsItemInvulnerable( whichItem );

	if ( status === bj_ITEM_STATUS_POWERUP )
		return IsItemPowerup( whichItem );

	if ( status === bj_ITEM_STATUS_SELLABLE )
		return IsItemSellable( whichItem );

	if ( status === bj_ITEM_STATUS_PAWNABLE )
		return IsItemPawnable( whichItem );

	// Unrecognized status - return false
	return false;

};

// ===========================================================================
export const CheckItemcodeStatus = ( itemId: number, status: number ): boolean => {

	if ( status === bj_ITEMCODE_STATUS_POWERUP )
		return IsItemIdPowerup( itemId );

	if ( status === bj_ITEMCODE_STATUS_SELLABLE )
		return IsItemIdSellable( itemId );

	if ( status === bj_ITEMCODE_STATUS_PAWNABLE )
		return IsItemIdPawnable( itemId );

	// Unrecognized status - return false
	return false;

};

// ***************************************************************************
// *
// *  Unit Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const UnitId2OrderIdBJ = ( unitId: number ): number => unitId;

// ===========================================================================
export const String2UnitIdBJ = ( unitIdString: string ): number => UnitId( unitIdString );

// ===========================================================================
export const UnitId2StringBJ = ( unitId: number ): string => {

	const unitString = UnitId2String( unitId );

	if ( unitString !== null )

		return unitString;

	// The unitId was not recognized - return an empty string.
	return "";

};

// ===========================================================================
export const String2OrderIdBJ = ( orderIdString: string ): number => {

	let orderId: number;

	// Check to see if it's a generic order.
	orderId = OrderId( orderIdString );

	if ( orderId !== 0 )

		return orderId;

	// Check to see if it's a (train) unit order.
	orderId = UnitId( orderIdString );

	if ( orderId !== 0 )

		return orderId;

	// Unrecognized - return 0
	return 0;

};

// ===========================================================================
export const OrderId2StringBJ = ( orderId: number ): string => {

	let orderString: string;

	// Check to see if it's a generic order.
	orderString = OrderId2String( orderId );

	if ( orderString !== null )

		return orderString;

	// Check to see if it's a (train) unit order.
	orderString = UnitId2String( orderId );

	if ( orderString !== null )

		return orderString;

	// Unrecognized - return an empty string.
	return "";

};

// ===========================================================================
export const GetIssuedOrderIdBJ = (): number => GetIssuedOrderId();

// ===========================================================================
export const GetKillingUnitBJ = (): unit => GetKillingUnit();

// ===========================================================================
export const CreateUnitAtLocSaveLast = ( id: player, unitid: number, loc: location, face: number ): unit => {

	if ( unitid === FourCC( "ugol" ) )

		bj_lastCreatedUnit = CreateBlightedGoldmine( id, GetLocationX( loc ), GetLocationY( loc ), face );

	else

		bj_lastCreatedUnit = CreateUnitAtLoc( id, unitid, loc, face );

	return bj_lastCreatedUnit;

};

// ===========================================================================
export const GetLastCreatedUnit = (): unit => bj_lastCreatedUnit;

// ===========================================================================
export const CreateNUnitsAtLoc = ( count: number, unitId: number, whichPlayer: player, loc: location, face: number ): group => {

	GroupClear( bj_lastCreatedGroup );

	while ( true ) {

		count = count - 1;
		if ( count < 0 ) break;
		CreateUnitAtLocSaveLast( whichPlayer, unitId, loc, face );
		GroupAddUnit( bj_lastCreatedGroup, bj_lastCreatedUnit );

	}

	return bj_lastCreatedGroup;

};

// ===========================================================================
export const CreateNUnitsAtLocFacingLocBJ = ( count: number, unitId: number, whichPlayer: player, loc: location, lookAt: location ): group => CreateNUnitsAtLoc( count, unitId, whichPlayer, loc, AngleBetweenPoints( loc, lookAt ) );

// ===========================================================================
export const GetLastCreatedGroupEnum = (): void => {

	GroupAddUnit( bj_groupLastCreatedDest, GetEnumUnit() );

};

// ===========================================================================
export const GetLastCreatedGroup = (): group => {

	bj_groupLastCreatedDest = CreateGroup();
	ForGroup( bj_lastCreatedGroup, GetLastCreatedGroupEnum );
	return bj_groupLastCreatedDest;

};

// ===========================================================================
export const CreateCorpseLocBJ = ( unitid: number, whichPlayer: player, loc: location ): unit => {

	bj_lastCreatedUnit = CreateCorpse( whichPlayer, unitid, GetLocationX( loc ), GetLocationY( loc ), GetRandomReal( 0, 360 ) );
	return bj_lastCreatedUnit;

};

// ===========================================================================
export const UnitSuspendDecayBJ = ( suspend: boolean, whichUnit: unit ): void => {

	UnitSuspendDecay( whichUnit, suspend );

};

// ===========================================================================
export const DelayedSuspendDecayStopAnimEnum = (): void => {

	const enumUnit = GetEnumUnit();

	if ( GetUnitState( enumUnit, UNIT_STATE_LIFE ) <= 0 )

		SetUnitTimeScale( enumUnit, 0.0001 );

};

// ===========================================================================
export const DelayedSuspendDecayBoneEnum = (): void => {

	const enumUnit = GetEnumUnit();

	if ( GetUnitState( enumUnit, UNIT_STATE_LIFE ) <= 0 ) {

		UnitSuspendDecay( enumUnit, true );
		SetUnitTimeScale( enumUnit, 0.0001 );

	}

};

// ===========================================================================
// Game code explicitly sets the animation back to "decay bone" after the
// initial corpse fades away, so we reset it now.  It's best not to show
// off corpses thus created until after this grace period has passed.
//
export const DelayedSuspendDecayFleshEnum = (): void => {

	const enumUnit = GetEnumUnit();

	if ( GetUnitState( enumUnit, UNIT_STATE_LIFE ) <= 0 ) {

		UnitSuspendDecay( enumUnit, true );
		SetUnitTimeScale( enumUnit, 10 );
		SetUnitAnimation( enumUnit, "decay flesh" );

	}

};

// ===========================================================================
// Waits a short period of time to ensure that the corpse is decaying, and
// then suspend the animation and corpse decay.
//
export const DelayedSuspendDecay = (): void => {

	// Switch the global unit groups over to local variables and recreate
	// the global versions, so that this function can handle overlapping
	// calls.
	const boneGroup = bj_suspendDecayBoneGroup;
	const fleshGroup = bj_suspendDecayFleshGroup;
	bj_suspendDecayBoneGroup = CreateGroup();
	bj_suspendDecayFleshGroup = CreateGroup();

	ForGroup( fleshGroup, DelayedSuspendDecayStopAnimEnum );
	ForGroup( boneGroup, DelayedSuspendDecayStopAnimEnum );

	TriggerSleepAction( bj_CORPSE_MAX_DEATH_TIME );
	ForGroup( fleshGroup, DelayedSuspendDecayFleshEnum );
	ForGroup( boneGroup, DelayedSuspendDecayBoneEnum );

	TriggerSleepAction( 0.05 );
	ForGroup( fleshGroup, DelayedSuspendDecayStopAnimEnum );

	DestroyGroup( boneGroup );
	DestroyGroup( fleshGroup );

};

// ===========================================================================
export const DelayedSuspendDecayCreate = (): void => {

	bj_delayedSuspendDecayTrig = CreateTrigger();
	TriggerRegisterTimerExpireEvent( bj_delayedSuspendDecayTrig, bj_delayedSuspendDecayTimer );
	TriggerAddAction( bj_delayedSuspendDecayTrig, DelayedSuspendDecay );

};

// ===========================================================================
export const CreatePermanentCorpseLocBJ = ( style: number, unitid: number, whichPlayer: player, loc: location, facing: number ): unit => {

	bj_lastCreatedUnit = CreateCorpse( whichPlayer, unitid, GetLocationX( loc ), GetLocationY( loc ), facing );
	SetUnitBlendTime( bj_lastCreatedUnit, 0 );

	if ( style === bj_CORPSETYPE_FLESH ) {

		SetUnitAnimation( bj_lastCreatedUnit, "decay flesh" );
		GroupAddUnit( bj_suspendDecayFleshGroup, bj_lastCreatedUnit );

	} else if ( style === bj_CORPSETYPE_BONE ) {

		SetUnitAnimation( bj_lastCreatedUnit, "decay bone" );
		GroupAddUnit( bj_suspendDecayBoneGroup, bj_lastCreatedUnit );

	} else {

		// Unknown decay style - treat as skeletal.
		SetUnitAnimation( bj_lastCreatedUnit, "decay bone" );
		GroupAddUnit( bj_suspendDecayBoneGroup, bj_lastCreatedUnit );

	}

	TimerStart( bj_delayedSuspendDecayTimer, 0.05, false, null );
	return bj_lastCreatedUnit;

};

// ===========================================================================
export const GetUnitStateSwap = ( whichState: unitstate, whichUnit: unit ): number => GetUnitState( whichUnit, whichState );

// ===========================================================================
export const GetUnitStatePercent = ( whichUnit: unit, whichState: unitstate, whichMaxState: unitstate ): number => {

	const value = GetUnitState( whichUnit, whichState );
	const maxValue = GetUnitState( whichUnit, whichMaxState );

	// Return 0 for null units.

	if ( whichUnit === null || maxValue === 0 )

		return 0;

	return value / maxValue * 100;

};

// ===========================================================================
export const GetUnitLifePercent = ( whichUnit: unit ): number => GetUnitStatePercent( whichUnit, UNIT_STATE_LIFE, UNIT_STATE_MAX_LIFE );

// ===========================================================================
export const GetUnitManaPercent = ( whichUnit: unit ): number => GetUnitStatePercent( whichUnit, UNIT_STATE_MANA, UNIT_STATE_MAX_MANA );

// ===========================================================================
export const SelectUnitSingle = ( whichUnit: unit ): void => {

	ClearSelection();
	SelectUnit( whichUnit, true );

};

// ===========================================================================
export const SelectGroupBJEnum = (): void => {

	SelectUnit( GetEnumUnit(), true );

};

// ===========================================================================
export const SelectGroupBJ = ( g: group ): void => {

	ClearSelection();
	ForGroup( g, SelectGroupBJEnum );

};

// ===========================================================================
export const SelectUnitAdd = ( whichUnit: unit ): void => {

	SelectUnit( whichUnit, true );

};

// ===========================================================================
export const SelectUnitRemove = ( whichUnit: unit ): void => {

	SelectUnit( whichUnit, false );

};

// ===========================================================================
export const ClearSelectionForPlayer = ( whichPlayer: player ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		ClearSelection();

};

// ===========================================================================
export const SelectUnitForPlayerSingle = ( whichUnit: unit, whichPlayer: player ): void => {

	if ( GetLocalPlayer() === whichPlayer ) {

		// Use only local code (no net traffic) within this block to avoid desyncs.
		ClearSelection();
		SelectUnit( whichUnit, true );

	}

};

// ===========================================================================
export const SelectGroupForPlayerBJ = ( g: group, whichPlayer: player ): void => {

	if ( GetLocalPlayer() === whichPlayer ) {

		// Use only local code (no net traffic) within this block to avoid desyncs.
		ClearSelection();
		ForGroup( g, SelectGroupBJEnum );

	}

};

// ===========================================================================
export const SelectUnitAddForPlayer = ( whichUnit: unit, whichPlayer: player ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		SelectUnit( whichUnit, true );

};

// ===========================================================================
export const SelectUnitRemoveForPlayer = ( whichUnit: unit, whichPlayer: player ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		SelectUnit( whichUnit, false );

};

// ===========================================================================
export const SetUnitLifeBJ = ( whichUnit: unit, newValue: number ): void => {

	SetUnitState( whichUnit, UNIT_STATE_LIFE, RMaxBJ( 0, newValue ) );

};

// ===========================================================================
export const SetUnitManaBJ = ( whichUnit: unit, newValue: number ): void => {

	SetUnitState( whichUnit, UNIT_STATE_MANA, RMaxBJ( 0, newValue ) );

};

// ===========================================================================
export const SetUnitLifePercentBJ = ( whichUnit: unit, percent: number ): void => {

	SetUnitState( whichUnit, UNIT_STATE_LIFE, GetUnitState( whichUnit, UNIT_STATE_MAX_LIFE ) * RMaxBJ( 0, percent ) * 0.01 );

};

// ===========================================================================
export const SetUnitManaPercentBJ = ( whichUnit: unit, percent: number ): void => {

	SetUnitState( whichUnit, UNIT_STATE_MANA, GetUnitState( whichUnit, UNIT_STATE_MAX_MANA ) * RMaxBJ( 0, percent ) * 0.01 );

};

// ===========================================================================
export const IsUnitDeadBJ = ( whichUnit: unit ): boolean => GetUnitState( whichUnit, UNIT_STATE_LIFE ) <= 0;

// ===========================================================================
export const IsUnitAliveBJ = ( whichUnit: unit ): boolean => ! IsUnitDeadBJ( whichUnit );

// ===========================================================================
export const IsUnitGroupDeadBJEnum = (): void => {

	if ( ! IsUnitDeadBJ( GetEnumUnit() ) )

		bj_isUnitGroupDeadResult = false;

};

// ===========================================================================
// Returns true if every unit of the group is dead.
//
export const IsUnitGroupDeadBJ = ( g: group ): boolean => {

	// If the user wants the group destroyed, remember that fact and clear
	// the flag, in case it is used again in the callback.
	const wantDestroy = bj_wantDestroyGroup;
	bj_wantDestroyGroup = false;

	bj_isUnitGroupDeadResult = true;
	ForGroup( g, IsUnitGroupDeadBJEnum );

	// If the user wants the group destroyed, do so now.

	if ( wantDestroy )

		DestroyGroup( g );

	return bj_isUnitGroupDeadResult;

};

// ===========================================================================
export const IsUnitGroupEmptyBJEnum = (): void => {

	bj_isUnitGroupEmptyResult = false;

};

// ===========================================================================
// Returns true if the group contains no units.
//
export const IsUnitGroupEmptyBJ = ( g: group ): boolean => {

	// If the user wants the group destroyed, remember that fact and clear
	// the flag, in case it is used again in the callback.
	const wantDestroy = bj_wantDestroyGroup;
	bj_wantDestroyGroup = false;

	bj_isUnitGroupEmptyResult = true;
	ForGroup( g, IsUnitGroupEmptyBJEnum );

	// If the user wants the group destroyed, do so now.

	if ( wantDestroy )

		DestroyGroup( g );

	return bj_isUnitGroupEmptyResult;

};

// ===========================================================================
export const IsUnitGroupInRectBJEnum = (): void => {

	if ( ! RectContainsUnit( bj_isUnitGroupInRectRect, GetEnumUnit() ) )

		bj_isUnitGroupInRectResult = false;

};

// ===========================================================================
// Returns true if every unit of the group is within the given rect.
//
export const IsUnitGroupInRectBJ = ( g: group, r: rect ): boolean => {

	bj_isUnitGroupInRectResult = true;
	bj_isUnitGroupInRectRect = r;
	ForGroup( g, IsUnitGroupInRectBJEnum );
	return bj_isUnitGroupInRectResult;

};

// ===========================================================================
export const IsUnitHiddenBJ = ( whichUnit: unit ): boolean => IsUnitHidden( whichUnit );

// ===========================================================================
export const ShowUnitHide = ( whichUnit: unit ): void => {

	ShowUnit( whichUnit, false );

};

// ===========================================================================
export const ShowUnitShow = ( whichUnit: unit ): void => {

	// Prevent dead heroes from being unhidden.

	if ( IsUnitType( whichUnit, UNIT_TYPE_HERO ) && IsUnitDeadBJ( whichUnit ) )

		return;

	ShowUnit( whichUnit, true );

};

// ===========================================================================
export const IssueHauntOrderAtLocBJFilter = (): boolean => GetUnitTypeId( GetFilterUnit() ) === FourCC( "ngol" );

// ===========================================================================
export const IssueHauntOrderAtLocBJ = ( whichPeon: unit, loc: location ): boolean => {

	// Search for a gold mine within a 1-cell radius of the specified location.
	const g = CreateGroup();
	GroupEnumUnitsInRangeOfLoc( g, loc, 2 * bj_CELLWIDTH, filterIssueHauntOrderAtLocBJ );
	const goldMine = FirstOfGroup( g );
	DestroyGroup( g );

	// If no mine was found, abort the request.

	if ( goldMine === null )

		return false;

	// Issue the Haunt Gold Mine order.
	return IssueTargetOrderById( whichPeon, FourCC( "ugol" ), goldMine );

};

// ===========================================================================
export const IssueBuildOrderByIdLocBJ = ( whichPeon: unit, unitId: number, loc: location ): boolean => {

	if ( unitId === FourCC( "ugol" ) )

		return IssueHauntOrderAtLocBJ( whichPeon, loc );

	else

		return IssueBuildOrderById( whichPeon, unitId, GetLocationX( loc ), GetLocationY( loc ) );

};

// ===========================================================================
export const IssueTrainOrderByIdBJ = ( whichUnit: unit, unitId: number ): boolean => IssueImmediateOrderById( whichUnit, unitId );

// ===========================================================================
export const GroupTrainOrderByIdBJ = ( g: group, unitId: number ): boolean => GroupImmediateOrderById( g, unitId );

// ===========================================================================
export const IssueUpgradeOrderByIdBJ = ( whichUnit: unit, techId: number ): boolean => IssueImmediateOrderById( whichUnit, techId );

// ===========================================================================
export const GetAttackedUnitBJ = (): unit => GetTriggerUnit();

// ===========================================================================
export const SetUnitFlyHeightBJ = ( whichUnit: unit, newHeight: number, rate: number ): void => {

	SetUnitFlyHeight( whichUnit, newHeight, rate );

};

// ===========================================================================
export const SetUnitTurnSpeedBJ = ( whichUnit: unit, turnSpeed: number ): void => {

	SetUnitTurnSpeed( whichUnit, turnSpeed );

};

// ===========================================================================
export const SetUnitPropWindowBJ = ( whichUnit: unit, propWindow: number ): void => {

	let angle = propWindow;

	if ( angle <= 0 )

		angle = 1;

	else if ( angle >= 360 )

		angle = 359;

	angle = angle * bj_DEGTORAD;

	SetUnitPropWindow( whichUnit, angle );

};

// ===========================================================================
export const GetUnitPropWindowBJ = ( whichUnit: unit ): number => GetUnitPropWindow( whichUnit ) * bj_RADTODEG;

// ===========================================================================
export const GetUnitDefaultPropWindowBJ = ( whichUnit: unit ): number => GetUnitDefaultPropWindow( whichUnit );

// ===========================================================================
export const SetUnitBlendTimeBJ = ( whichUnit: unit, blendTime: number ): void => {

	SetUnitBlendTime( whichUnit, blendTime );

};

// ===========================================================================
export const SetUnitAcquireRangeBJ = ( whichUnit: unit, acquireRange: number ): void => {

	SetUnitAcquireRange( whichUnit, acquireRange );

};

// ===========================================================================
export const UnitSetCanSleepBJ = ( whichUnit: unit, canSleep: boolean ): void => {

	UnitAddSleep( whichUnit, canSleep );

};

// ===========================================================================
export const UnitCanSleepBJ = ( whichUnit: unit ): boolean => UnitCanSleep( whichUnit );

// ===========================================================================
export const UnitWakeUpBJ = ( whichUnit: unit ): void => {

	UnitWakeUp( whichUnit );

};

// ===========================================================================
export const UnitIsSleepingBJ = ( whichUnit: unit ): boolean => UnitIsSleeping( whichUnit );

// ===========================================================================
export const WakePlayerUnitsEnum = (): void => {

	UnitWakeUp( GetEnumUnit() );

};

// ===========================================================================
export const WakePlayerUnits = ( whichPlayer: player ): void => {

	const g = CreateGroup();
	GroupEnumUnitsOfPlayer( g, whichPlayer, null );
	ForGroup( g, WakePlayerUnitsEnum );
	DestroyGroup( g );

};

// ===========================================================================
export const EnableCreepSleepBJ = ( enable: boolean ): void => {

	SetPlayerState( Player( PLAYER_NEUTRAL_AGGRESSIVE ), PLAYER_STATE_NO_CREEP_SLEEP, IntegerTertiaryOp( enable, 0, 1 ) );

	// If we're disabling, attempt to wake any already-sleeping creeps.

	if ( ! enable )

		WakePlayerUnits( Player( PLAYER_NEUTRAL_AGGRESSIVE ) );

};

// ===========================================================================
export const UnitGenerateAlarms = ( whichUnit: unit, generate: boolean ): boolean => UnitIgnoreAlarm( whichUnit, ! generate );

// ===========================================================================
export const DoesUnitGenerateAlarms = ( whichUnit: unit ): boolean => ! UnitIgnoreAlarmToggled( whichUnit );

// ===========================================================================
export const PauseAllUnitsBJEnum = (): void => {

	PauseUnit( GetEnumUnit(), bj_pauseAllUnitsFlag );

};

// ===========================================================================
// Pause all units
export const PauseAllUnitsBJ = ( pause: boolean ): void => {

	let index: number;
	let indexPlayer: player;

	bj_pauseAllUnitsFlag = pause;
	const g = CreateGroup();
	index = 0;

	while ( true ) {

		indexPlayer = Player( index );

		// If this is a computer slot, pause/resume the AI.

		if ( GetPlayerController( indexPlayer ) === MAP_CONTROL_COMPUTER )

			PauseCompAI( indexPlayer, pause );

		// Enumerate and unpause every unit owned by the player.
		GroupEnumUnitsOfPlayer( g, indexPlayer, null );
		ForGroup( g, PauseAllUnitsBJEnum );
		GroupClear( g );

		index = index + 1;
		if ( index === bj_MAX_PLAYER_SLOTS ) break;

	}

	DestroyGroup( g );

};

// ===========================================================================
export const PauseUnitBJ = ( pause: boolean, whichUnit: unit ): void => {

	PauseUnit( whichUnit, pause );

};

// ===========================================================================
export const IsUnitPausedBJ = ( whichUnit: unit ): boolean => IsUnitPaused( whichUnit );

// ===========================================================================
export const UnitPauseTimedLifeBJ = ( flag: boolean, whichUnit: unit ): void => {

	UnitPauseTimedLife( whichUnit, flag );

};

// ===========================================================================
export const UnitApplyTimedLifeBJ = ( duration: number, buffId: number, whichUnit: unit ): void => {

	UnitApplyTimedLife( whichUnit, buffId, duration );

};

// ===========================================================================
export const UnitShareVisionBJ = ( share: boolean, whichUnit: unit, whichPlayer: player ): void => {

	UnitShareVision( whichUnit, whichPlayer, share );

};

// ===========================================================================
export const UnitRemoveBuffsBJ = ( buffType: number, whichUnit: unit ): void => {

	if ( buffType === bj_REMOVEBUFFS_POSITIVE )
		UnitRemoveBuffs( whichUnit, true, false );

	else if ( buffType === bj_REMOVEBUFFS_NEGATIVE )
		UnitRemoveBuffs( whichUnit, false, true );

	else if ( buffType === bj_REMOVEBUFFS_ALL )
		UnitRemoveBuffs( whichUnit, true, true );

	else if ( buffType === bj_REMOVEBUFFS_NONTLIFE )
		UnitRemoveBuffsEx( whichUnit, true, true, false, false, false, true, false );

	// Unrecognized dispel type - ignore the request.

};

// ===========================================================================
export const UnitRemoveBuffsExBJ = ( polarity: number, resist: number, whichUnit: unit, bTLife: boolean, bAura: boolean ): void => {

	const bPos = polarity === bj_BUFF_POLARITY_EITHER || polarity === bj_BUFF_POLARITY_POSITIVE;
	const bNeg = polarity === bj_BUFF_POLARITY_EITHER || polarity === bj_BUFF_POLARITY_NEGATIVE;
	const bMagic = resist === bj_BUFF_RESIST_BOTH || resist === bj_BUFF_RESIST_MAGIC;
	const bPhys = resist === bj_BUFF_RESIST_BOTH || resist === bj_BUFF_RESIST_PHYSICAL;

	UnitRemoveBuffsEx( whichUnit, bPos, bNeg, bMagic, bPhys, bTLife, bAura, false );

};

// ===========================================================================
export const UnitCountBuffsExBJ = ( polarity: number, resist: number, whichUnit: unit, bTLife: boolean, bAura: boolean ): number => {

	const bPos = polarity === bj_BUFF_POLARITY_EITHER || polarity === bj_BUFF_POLARITY_POSITIVE;
	const bNeg = polarity === bj_BUFF_POLARITY_EITHER || polarity === bj_BUFF_POLARITY_NEGATIVE;
	const bMagic = resist === bj_BUFF_RESIST_BOTH || resist === bj_BUFF_RESIST_MAGIC;
	const bPhys = resist === bj_BUFF_RESIST_BOTH || resist === bj_BUFF_RESIST_PHYSICAL;

	return UnitCountBuffsEx( whichUnit, bPos, bNeg, bMagic, bPhys, bTLife, bAura, false );

};

// ===========================================================================
export const UnitRemoveAbilityBJ = ( abilityId: number, whichUnit: unit ): boolean => UnitRemoveAbility( whichUnit, abilityId );

// ===========================================================================
export const UnitAddAbilityBJ = ( abilityId: number, whichUnit: unit ): boolean => UnitAddAbility( whichUnit, abilityId );

// ===========================================================================
export const UnitRemoveTypeBJ = ( whichType: unittype, whichUnit: unit ): boolean => UnitRemoveType( whichUnit, whichType );

// ===========================================================================
export const UnitAddTypeBJ = ( whichType: unittype, whichUnit: unit ): boolean => UnitAddType( whichUnit, whichType );

// ===========================================================================
export const UnitMakeAbilityPermanentBJ = ( permanent: boolean, abilityId: number, whichUnit: unit ): boolean => UnitMakeAbilityPermanent( whichUnit, permanent, abilityId );

// ===========================================================================
export const SetUnitExplodedBJ = ( whichUnit: unit, exploded: boolean ): void => {

	SetUnitExploded( whichUnit, exploded );

};

// ===========================================================================
export const ExplodeUnitBJ = ( whichUnit: unit ): void => {

	SetUnitExploded( whichUnit, true );
	KillUnit( whichUnit );

};

// ===========================================================================
export const GetTransportUnitBJ = (): unit => GetTransportUnit();

// ===========================================================================
export const GetLoadedUnitBJ = (): unit => GetLoadedUnit();

// ===========================================================================
export const IsUnitInTransportBJ = ( whichUnit: unit, whichTransport: unit ): boolean => IsUnitInTransport( whichUnit, whichTransport );

// ===========================================================================
export const IsUnitLoadedBJ = ( whichUnit: unit ): boolean => IsUnitLoaded( whichUnit );

// ===========================================================================
export const IsUnitIllusionBJ = ( whichUnit: unit ): boolean => IsUnitIllusion( whichUnit );

// ===========================================================================
// This attempts to replace a unit with a new unit type by creating a new
// unit of the desired type using the old unit's location, facing, etc.
//
export const ReplaceUnitBJ = ( whichUnit: unit, newUnitId: number, unitStateMethod: number ): unit => {

	const oldUnit = whichUnit;
	let newUnit: unit;
	let index: number;
	let indexItem: item;
	let oldRatio: number;

	// If we have bogus data, don't attempt the replace.

	if ( oldUnit === null ) {

		bj_lastReplacedUnit = oldUnit;
		return oldUnit;

	}

	// Hide the original unit.
	const wasHidden = IsUnitHidden( oldUnit );
	ShowUnit( oldUnit, false );

	// Create the replacement unit.

	if ( newUnitId === FourCC( "ugol" ) )

		newUnit = CreateBlightedGoldmine( GetOwningPlayer( oldUnit ), GetUnitX( oldUnit ), GetUnitY( oldUnit ), GetUnitFacing( oldUnit ) );

	else

		newUnit = CreateUnit( GetOwningPlayer( oldUnit ), newUnitId, GetUnitX( oldUnit ), GetUnitY( oldUnit ), GetUnitFacing( oldUnit ) );

	// Set the unit's life and mana according to the requested method.

	if ( unitStateMethod === bj_UNIT_STATE_METHOD_RELATIVE ) {

		// Set the replacement's current/max life ratio to that of the old unit.
		// If both units have mana, do the same for mana.

		if ( GetUnitState( oldUnit, UNIT_STATE_MAX_LIFE ) > 0 ) {

			oldRatio = GetUnitState( oldUnit, UNIT_STATE_LIFE ) / GetUnitState( oldUnit, UNIT_STATE_MAX_LIFE );
			SetUnitState( newUnit, UNIT_STATE_LIFE, oldRatio * GetUnitState( newUnit, UNIT_STATE_MAX_LIFE ) );

		}

		if ( GetUnitState( oldUnit, UNIT_STATE_MAX_MANA ) > 0 && GetUnitState( newUnit, UNIT_STATE_MAX_MANA ) > 0 ) {

			oldRatio = GetUnitState( oldUnit, UNIT_STATE_MANA ) / GetUnitState( oldUnit, UNIT_STATE_MAX_MANA );
			SetUnitState( newUnit, UNIT_STATE_MANA, oldRatio * GetUnitState( newUnit, UNIT_STATE_MAX_MANA ) );

		}

	} else if ( unitStateMethod === bj_UNIT_STATE_METHOD_ABSOLUTE ) {

		// Set the replacement's current life to that of the old unit.
		// If the new unit has mana, do the same for mana.
		SetUnitState( newUnit, UNIT_STATE_LIFE, GetUnitState( oldUnit, UNIT_STATE_LIFE ) );

		if ( GetUnitState( newUnit, UNIT_STATE_MAX_MANA ) > 0 )

			SetUnitState( newUnit, UNIT_STATE_MANA, GetUnitState( oldUnit, UNIT_STATE_MANA ) );

	} else if ( unitStateMethod === bj_UNIT_STATE_METHOD_DEFAULTS ) {

		// The newly created unit should already have default life and mana.

	} else if ( unitStateMethod === bj_UNIT_STATE_METHOD_MAXIMUM ) {

		// Use max life and mana.
		SetUnitState( newUnit, UNIT_STATE_LIFE, GetUnitState( newUnit, UNIT_STATE_MAX_LIFE ) );
		SetUnitState( newUnit, UNIT_STATE_MANA, GetUnitState( newUnit, UNIT_STATE_MAX_MANA ) );

	} else {

		// Unrecognized unit state method - ignore the request.

	}

	// Mirror properties of the old unit onto the new unit.
	// call PauseUnit(newUnit, IsUnitPaused(oldUnit))
	SetResourceAmount( newUnit, GetResourceAmount( oldUnit ) );

	// If both the old and new units are heroes, handle their hero info.

	if ( IsUnitType( oldUnit, UNIT_TYPE_HERO ) && IsUnitType( newUnit, UNIT_TYPE_HERO ) ) {

		SetHeroXP( newUnit, GetHeroXP( oldUnit ), false );

		index = 0;

		while ( true ) {

			indexItem = UnitItemInSlot( oldUnit, index );

			if ( indexItem !== null ) {

				UnitRemoveItem( oldUnit, indexItem );
				UnitAddItem( newUnit, indexItem );

			}

			index = index + 1;
			if ( index >= bj_MAX_INVENTORY ) break;

		}

	}

	// Remove or kill the original unit.  It is sometimes unsafe to remove
	// hidden units, so kill the original unit if it was previously hidden.

	if ( wasHidden ) {

		KillUnit( oldUnit );
		RemoveUnit( oldUnit );

	} else

		RemoveUnit( oldUnit );

	bj_lastReplacedUnit = newUnit;
	return newUnit;

};

// ===========================================================================
export const GetLastReplacedUnitBJ = (): unit => bj_lastReplacedUnit;

// ===========================================================================
export const SetUnitPositionLocFacingBJ = ( whichUnit: unit, loc: location, facing: number ): void => {

	SetUnitPositionLoc( whichUnit, loc );
	SetUnitFacing( whichUnit, facing );

};

// ===========================================================================
export const SetUnitPositionLocFacingLocBJ = ( whichUnit: unit, loc: location, lookAt: location ): void => {

	SetUnitPositionLoc( whichUnit, loc );
	SetUnitFacing( whichUnit, AngleBetweenPoints( loc, lookAt ) );

};

// ===========================================================================
export const AddItemToStockBJ = ( itemId: number, whichUnit: unit, currentStock: number, stockMax: number ): void => {

	AddItemToStock( whichUnit, itemId, currentStock, stockMax );

};

// ===========================================================================
export const AddUnitToStockBJ = ( unitId: number, whichUnit: unit, currentStock: number, stockMax: number ): void => {

	AddUnitToStock( whichUnit, unitId, currentStock, stockMax );

};

// ===========================================================================
export const RemoveItemFromStockBJ = ( itemId: number, whichUnit: unit ): void => {

	RemoveItemFromStock( whichUnit, itemId );

};

// ===========================================================================
export const RemoveUnitFromStockBJ = ( unitId: number, whichUnit: unit ): void => {

	RemoveUnitFromStock( whichUnit, unitId );

};

// ===========================================================================
export const SetUnitUseFoodBJ = ( enable: boolean, whichUnit: unit ): void => {

	SetUnitUseFood( whichUnit, enable );

};

// ===========================================================================
export const UnitDamagePointLoc = ( whichUnit: unit, delay: number, radius: number, loc: location, amount: number, whichAttack: attacktype, whichDamage: damagetype ): boolean => UnitDamagePoint( whichUnit, delay, radius, GetLocationX( loc ), GetLocationY( loc ), amount, true, false, whichAttack, whichDamage, WEAPON_TYPE_WHOKNOWS );

// ===========================================================================
export const UnitDamageTargetBJ = ( whichUnit: unit, target: unit, amount: number, whichAttack: attacktype, whichDamage: damagetype ): boolean => UnitDamageTarget( whichUnit, target, amount, true, false, whichAttack, whichDamage, WEAPON_TYPE_WHOKNOWS );

// ***************************************************************************
// *
// *  Destructable Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const CreateDestructableLoc = ( objectid: number, loc: location, facing: number, scale: number, variation: number ): destructable => {

	bj_lastCreatedDestructable = CreateDestructable( objectid, GetLocationX( loc ), GetLocationY( loc ), facing, scale, variation );
	return bj_lastCreatedDestructable;

};

// ===========================================================================
export const CreateDeadDestructableLocBJ = ( objectid: number, loc: location, facing: number, scale: number, variation: number ): destructable => {

	bj_lastCreatedDestructable = CreateDeadDestructable( objectid, GetLocationX( loc ), GetLocationY( loc ), facing, scale, variation );
	return bj_lastCreatedDestructable;

};

// ===========================================================================
export const GetLastCreatedDestructable = (): destructable => bj_lastCreatedDestructable;

// ===========================================================================
export const ShowDestructableBJ = ( flag: boolean, d: destructable ): void => {

	ShowDestructable( d, flag );

};

// ===========================================================================
export const SetDestructableInvulnerableBJ = ( d: destructable, flag: boolean ): void => {

	SetDestructableInvulnerable( d, flag );

};

// ===========================================================================
export const IsDestructableInvulnerableBJ = ( d: destructable ): boolean => IsDestructableInvulnerable( d );

// ===========================================================================
export const GetDestructableLoc = ( whichDestructable: destructable ): location => Location( GetDestructableX( whichDestructable ), GetDestructableY( whichDestructable ) );

// ===========================================================================
export const EnumDestructablesInRectAll = ( r: rect, actionFunc: () => void ): void => {

	EnumDestructablesInRect( r, null, actionFunc );

};

// ===========================================================================
export const EnumDestructablesInCircleBJFilter = (): boolean => {

	const destLoc = GetDestructableLoc( GetFilterDestructable() );

	const result = DistanceBetweenPoints( destLoc, bj_enumDestructableCenter ) <= bj_enumDestructableRadius;
	RemoveLocation( destLoc );
	return result;

};

// ===========================================================================
export const IsDestructableDeadBJ = ( d: destructable ): boolean => GetDestructableLife( d ) <= 0;

// ===========================================================================
export const IsDestructableAliveBJ = ( d: destructable ): boolean => ! IsDestructableDeadBJ( d );

// ===========================================================================
// See GroupPickRandomUnitEnum for the details of this algorithm.
//
export const RandomDestructableInRectBJEnum = (): void => {

	bj_destRandomConsidered = bj_destRandomConsidered + 1;

	if ( GetRandomInt( 1, bj_destRandomConsidered ) === 1 )

		bj_destRandomCurrentPick = GetEnumDestructable();

};

// ===========================================================================
// Picks a random destructable from within a rect, matching a condition
//
export const RandomDestructableInRectBJ = ( r: rect, filter: boolexpr | null ): destructable | null => {

	bj_destRandomConsidered = 0;
	bj_destRandomCurrentPick = null;
	EnumDestructablesInRect( r, filter, RandomDestructableInRectBJEnum );
	if ( filter ) DestroyBoolExpr( filter );
	return bj_destRandomCurrentPick;

};

// ===========================================================================
// Picks a random destructable from within a rect
//
export const RandomDestructableInRectSimpleBJ = ( r: rect ): destructable | null => RandomDestructableInRectBJ( r, null );

// ===========================================================================
// Enumerates within a rect, with a filter to narrow the enumeration down
// objects within a circular area.
//
export const EnumDestructablesInCircleBJ = ( radius: number, loc: location, actionFunc: () => void ): void => {

	let r: rect;

	if ( radius >= 0 ) {

		bj_enumDestructableCenter = loc;
		bj_enumDestructableRadius = radius;
		r = GetRectFromCircleBJ( loc, radius );
		EnumDestructablesInRect( r, filterEnumDestructablesInCircleBJ, actionFunc );
		RemoveRect( r );

	}

};

// ===========================================================================
export const SetDestructableLifePercentBJ = ( d: destructable, percent: number ): void => {

	SetDestructableLife( d, GetDestructableMaxLife( d ) * percent * 0.01 );

};

// ===========================================================================
export const SetDestructableMaxLifeBJ = ( d: destructable, max: number ): void => {

	SetDestructableMaxLife( d, max );

};

// ===========================================================================
export const ModifyGateBJ = ( gateOperation: number, d: destructable ): void => {

	if ( gateOperation === bj_GATEOPERATION_CLOSE ) {

		if ( GetDestructableLife( d ) <= 0 )

			DestructableRestoreLife( d, GetDestructableMaxLife( d ), true );

		SetDestructableAnimation( d, "stand" );

	} else if ( gateOperation === bj_GATEOPERATION_OPEN ) {

		if ( GetDestructableLife( d ) > 0 )

			KillDestructable( d );

		SetDestructableAnimation( d, "death alternate" );

	} else if ( gateOperation === bj_GATEOPERATION_DESTROY ) {

		if ( GetDestructableLife( d ) > 0 )

			KillDestructable( d );

		SetDestructableAnimation( d, "death" );

	} else {

		// Unrecognized gate state - ignore the request.

	}

};

// ===========================================================================
// Determine the elevator's height from its occlusion height.
//
export const GetElevatorHeight = ( d: destructable ): number => {

	let height: number;

	height = 1 + R2I( GetDestructableOccluderHeight( d ) / bj_CLIFFHEIGHT );

	if ( height < 1 || height > 3 )

		height = 1;

	return height;

};

// ===========================================================================
// To properly animate an elevator, we must know not only what height we
// want to change to, but also what height we are currently at.  This code
// determines the elevator's current height from its occlusion height.
// Arbitrarily changing an elevator's occlusion height is thus inadvisable.
//
export const ChangeElevatorHeight = ( d: destructable, newHeight: number ): void => {

	// Cap the new height within the supported range.
	newHeight = IMaxBJ( 1, newHeight );
	newHeight = IMinBJ( 3, newHeight );

	// Find out what height the elevator is already at.
	const oldHeight = GetElevatorHeight( d );

	// Set the elevator's occlusion height.
	SetDestructableOccluderHeight( d, bj_CLIFFHEIGHT * ( newHeight - 1 ) );

	if ( newHeight === 1 )

		if ( oldHeight === 2 ) {

			SetDestructableAnimation( d, "birth" );
			QueueDestructableAnimation( d, "stand" );

		} else if ( oldHeight === 3 ) {

			SetDestructableAnimation( d, "birth third" );
			QueueDestructableAnimation( d, "stand" );

		} else {

			// Unrecognized old height - snap to new height.
			SetDestructableAnimation( d, "stand" );

		}

	else if ( newHeight === 2 )

		if ( oldHeight === 1 ) {

			SetDestructableAnimation( d, "death" );
			QueueDestructableAnimation( d, "stand second" );

		} else if ( oldHeight === 3 ) {

			SetDestructableAnimation( d, "birth second" );
			QueueDestructableAnimation( d, "stand second" );

		} else {

			// Unrecognized old height - snap to new height.
			SetDestructableAnimation( d, "stand second" );

		}

	else if ( newHeight === 3 )

		if ( oldHeight === 1 ) {

			SetDestructableAnimation( d, "death third" );
			QueueDestructableAnimation( d, "stand third" );

		} else if ( oldHeight === 2 ) {

			SetDestructableAnimation( d, "death second" );
			QueueDestructableAnimation( d, "stand third" );

		} else {

			// Unrecognized old height - snap to new height.
			SetDestructableAnimation( d, "stand third" );

		}

	else {

		// Unrecognized new height - ignore the request.

	}

};

// ===========================================================================
// Grab the unit and throw his own coords in his face, forcing him to push
// and shove until he finds a spot where noone will bother him.
//
export const NudgeUnitsInRectEnum = (): void => {

	const nudgee = GetEnumUnit();

	SetUnitPosition( nudgee, GetUnitX( nudgee ), GetUnitY( nudgee ) );

};

// ===========================================================================
export const NudgeItemsInRectEnum = (): void => {

	const nudgee = GetEnumItem();

	SetItemPosition( nudgee, GetItemX( nudgee ), GetItemY( nudgee ) );

};

// ===========================================================================
// Nudge the items and units within a given rect ever so gently, so as to
// encourage them to find locations where they can peacefully coexist with
// pathing restrictions and live happy, fruitful lives.
//
export const NudgeObjectsInRect = ( nudgeArea: rect ): void => {

	const g = CreateGroup();
	GroupEnumUnitsInRect( g, nudgeArea, null );
	ForGroup( g, NudgeUnitsInRectEnum );
	DestroyGroup( g );

	EnumItemsInRect( nudgeArea, null, NudgeItemsInRectEnum );

};

// ===========================================================================
export const NearbyElevatorExistsEnum = (): void => {

	const d = GetEnumDestructable();
	const dType = GetDestructableTypeId( d );

	if ( dType === bj_ELEVATOR_CODE01 || dType === bj_ELEVATOR_CODE02 )

		bj_elevatorNeighbor = d;

};

// ===========================================================================
export const NearbyElevatorExists = ( x: number, y: number ): boolean => {

	const findThreshold = 32;

	// If another elevator is overlapping this one, ignore the wall.
	const r = Rect( x - findThreshold, y - findThreshold, x + findThreshold, y + findThreshold );
	bj_elevatorNeighbor = null;
	EnumDestructablesInRect( r, null, NearbyElevatorExistsEnum );
	RemoveRect( r );

	return bj_elevatorNeighbor !== null;

};

// ===========================================================================
export const FindElevatorWallBlockerEnum = (): void => {

	bj_elevatorWallBlocker = GetEnumDestructable();

};

// ===========================================================================
// This toggles pathing on or off for one wall of an elevator by killing
// or reviving a pathing blocker at the appropriate location (and creating
// the pathing blocker in the first place, if it does not yet exist).
//
export const ChangeElevatorWallBlocker = ( x: number, y: number, facing: number, open: boolean ): void => {

	let blocker: destructable | null;
	const findThreshold = 32;
	const nudgeLength = 4.25 * bj_CELLWIDTH;
	const nudgeWidth = 1.25 * bj_CELLWIDTH;
	let r: rect;

	// Search for the pathing blocker within the general area.
	r = Rect( x - findThreshold, y - findThreshold, x + findThreshold, y + findThreshold );
	bj_elevatorWallBlocker = null;
	EnumDestructablesInRect( r, null, FindElevatorWallBlockerEnum );
	RemoveRect( r );
	blocker = bj_elevatorWallBlocker;

	// Ensure that the blocker exists.

	if ( blocker === null )

		blocker = CreateDeadDestructable( bj_ELEVATOR_BLOCKER_CODE, x, y, facing, 1, 0 );

	else if ( GetDestructableTypeId( blocker ) !== bj_ELEVATOR_BLOCKER_CODE )

		// If a different destructible exists in the blocker's spot, ignore
		// the request.  (Two destructibles cannot occupy the same location
		// on the map, so we cannot create an elevator blocker here.)
		return;

	if ( open ) {

		// Ensure that the blocker is dead.

		if ( GetDestructableLife( blocker ) > 0 )

			KillDestructable( blocker );

	} else {

		// Ensure that the blocker is alive.

		if ( GetDestructableLife( blocker ) <= 0 )

			DestructableRestoreLife( blocker, GetDestructableMaxLife( blocker ), false );

		// Nudge any objects standing in the blocker's way.

		if ( facing === 0 ) {

			r = Rect( x - nudgeWidth / 2, y - nudgeLength / 2, x + nudgeWidth / 2, y + nudgeLength / 2 );
			NudgeObjectsInRect( r );
			RemoveRect( r );

		} else if ( facing === 90 ) {

			r = Rect( x - nudgeLength / 2, y - nudgeWidth / 2, x + nudgeLength / 2, y + nudgeWidth / 2 );
			NudgeObjectsInRect( r );
			RemoveRect( r );

		} else {

			// Unrecognized blocker angle - don't nudge anything.

		}

	}

};

// ===========================================================================
export const ChangeElevatorWalls = ( open: boolean, walls: number, d: destructable ): void => {

	const x = GetDestructableX( d );
	const y = GetDestructableY( d );
	const distToBlocker = 192;
	const distToNeighbor = 256;

	if ( walls === bj_ELEVATOR_WALL_TYPE_ALL || walls === bj_ELEVATOR_WALL_TYPE_EAST )

		if ( ! NearbyElevatorExists( x + distToNeighbor, y ) ) {

			ChangeElevatorWallBlocker( x + distToBlocker, y, 0, open );

		}

	if ( walls === bj_ELEVATOR_WALL_TYPE_ALL || walls === bj_ELEVATOR_WALL_TYPE_NORTH )

		if ( ! NearbyElevatorExists( x, y + distToNeighbor ) ) {

			ChangeElevatorWallBlocker( x, y + distToBlocker, 90, open );

		}

	if ( walls === bj_ELEVATOR_WALL_TYPE_ALL || walls === bj_ELEVATOR_WALL_TYPE_SOUTH )

		if ( ! NearbyElevatorExists( x, y - distToNeighbor ) ) {

			ChangeElevatorWallBlocker( x, y - distToBlocker, 90, open );

		}

	if ( walls === bj_ELEVATOR_WALL_TYPE_ALL || walls === bj_ELEVATOR_WALL_TYPE_WEST )

		if ( ! NearbyElevatorExists( x - distToNeighbor, y ) ) {

			ChangeElevatorWallBlocker( x - distToBlocker, y, 0, open );

		}

};

// ***************************************************************************
// *
// *  Neutral Building Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const WaygateActivateBJ = ( activate: boolean, waygate: unit ): void => {

	WaygateActivate( waygate, activate );

};

// ===========================================================================
export const WaygateIsActiveBJ = ( waygate: unit ): boolean => WaygateIsActive( waygate );

// ===========================================================================
export const WaygateSetDestinationLocBJ = ( waygate: unit, loc: location ): void => {

	WaygateSetDestination( waygate, GetLocationX( loc ), GetLocationY( loc ) );

};

// ===========================================================================
export const WaygateGetDestinationLocBJ = ( waygate: unit ): location => Location( WaygateGetDestinationX( waygate ), WaygateGetDestinationY( waygate ) );

// ===========================================================================
export const UnitSetUsesAltIconBJ = ( flag: boolean, whichUnit: unit ): void => {

	UnitSetUsesAltIcon( whichUnit, flag );

};

// ***************************************************************************
// *
// *  UI Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const ForceUIKeyBJ = ( whichPlayer: player, key: string ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		ForceUIKey( key );

};

// ===========================================================================
export const ForceUICancelBJ = ( whichPlayer: player ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		ForceUICancel();

};

// ***************************************************************************
// *
// *  Group and Force Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const ForGroupBJ = ( whichGroup: group, callback: () => void ): void => {

	// If the user wants the group destroyed, remember that fact and clear
	// the flag, in case it is used again in the callback.
	const wantDestroy = bj_wantDestroyGroup;
	bj_wantDestroyGroup = false;

	ForGroup( whichGroup, callback );

	// If the user wants the group destroyed, do so now.
	if ( wantDestroy ) DestroyGroup( whichGroup );

};

// ===========================================================================
export const GroupAddUnitSimple = ( whichUnit: unit, whichGroup: group ): void => {

	GroupAddUnit( whichGroup, whichUnit );

};

// ===========================================================================
export const GroupRemoveUnitSimple = ( whichUnit: unit, whichGroup: group ): void => {

	GroupRemoveUnit( whichGroup, whichUnit );

};

// ===========================================================================
export const GroupAddGroupEnum = (): void => {

	GroupAddUnit( bj_groupAddGroupDest, GetEnumUnit() );

};

// ===========================================================================
export const GroupAddGroup = ( sourceGroup: group, destGroup: group ): void => {

	// If the user wants the group destroyed, remember that fact and clear
	// the flag, in case it is used again in the callback.
	const wantDestroy = bj_wantDestroyGroup;
	bj_wantDestroyGroup = false;

	bj_groupAddGroupDest = destGroup;
	ForGroup( sourceGroup, GroupAddGroupEnum );

	// If the user wants the group destroyed, do so now.
	if ( wantDestroy ) DestroyGroup( sourceGroup );

};

// ===========================================================================
export const GroupRemoveGroupEnum = (): void => {

	GroupRemoveUnit( bj_groupRemoveGroupDest, GetEnumUnit() );

};

// ===========================================================================
export const GroupRemoveGroup = ( sourceGroup: group, destGroup: group ): void => {

	// If the user wants the group destroyed, remember that fact and clear
	// the flag, in case it is used again in the callback.
	const wantDestroy = bj_wantDestroyGroup;
	bj_wantDestroyGroup = false;

	bj_groupRemoveGroupDest = destGroup;
	ForGroup( sourceGroup, GroupRemoveGroupEnum );

	// If the user wants the group destroyed, do so now.

	if ( wantDestroy )

		DestroyGroup( sourceGroup );

};

// ===========================================================================
export const ForceAddPlayerSimple = ( whichPlayer: player, whichForce: force ): void => {

	ForceAddPlayer( whichForce, whichPlayer );

};

// ===========================================================================
export const ForceRemovePlayerSimple = ( whichPlayer: player, whichForce: force ): void => {

	ForceRemovePlayer( whichForce, whichPlayer );

};

// ===========================================================================
// Consider each unit, one at a time, keeping a "current pick".   Once all units
// are considered, this "current pick" will be the resulting random unit.
//
// The chance of picking a given unit over the "current pick" is 1/N, where N is
// the number of units considered thusfar (including the current consideration).
//
export const GroupPickRandomUnitEnum = (): void => {

	bj_groupRandomConsidered = bj_groupRandomConsidered + 1;

	if ( GetRandomInt( 1, bj_groupRandomConsidered ) === 1 )
		bj_groupRandomCurrentPick = GetEnumUnit();

};

// ===========================================================================
// Picks a random unit from a group.
//
export const GroupPickRandomUnit = ( whichGroup: group ): unit | null => {

	// If the user wants the group destroyed, remember that fact and clear
	// the flag, in case it is used again in the callback.
	const wantDestroy = bj_wantDestroyGroup;
	bj_wantDestroyGroup = false;

	bj_groupRandomConsidered = 0;
	bj_groupRandomCurrentPick = null;
	ForGroup( whichGroup, GroupPickRandomUnitEnum );

	// If the user wants the group destroyed, do so now.
	if ( wantDestroy ) DestroyGroup( whichGroup );

	return bj_groupRandomCurrentPick;

};

// ===========================================================================
// See GroupPickRandomUnitEnum for the details of this algorithm.
//
export const ForcePickRandomPlayerEnum = (): void => {

	bj_forceRandomConsidered = bj_forceRandomConsidered + 1;

	if ( GetRandomInt( 1, bj_forceRandomConsidered ) === 1 )
		bj_forceRandomCurrentPick = GetEnumPlayer();

};

// ===========================================================================
// Picks a random player from a force.
//
export const ForcePickRandomPlayer = ( whichForce: force ): player | null => {

	bj_forceRandomConsidered = 0;
	bj_forceRandomCurrentPick = null;
	ForForce( whichForce, ForcePickRandomPlayerEnum );
	return bj_forceRandomCurrentPick;

};

// ===========================================================================
export const EnumUnitsSelected = ( whichPlayer: player, enumFilter: boolexpr, enumAction: () => void ): void => {

	const g = CreateGroup();
	SyncSelections();
	GroupEnumUnitsSelected( g, whichPlayer, enumFilter );
	DestroyBoolExpr( enumFilter );
	ForGroup( g, enumAction );
	DestroyGroup( g );

};

// ===========================================================================
export const GetUnitsInRectMatching = ( r: rect, filter: boolexpr | null ): group => {

	const g = CreateGroup();
	GroupEnumUnitsInRect( g, r, filter );
	if ( filter ) DestroyBoolExpr( filter );
	return g;

};

// ===========================================================================
export const GetUnitsInRectAll = ( r: rect ): group => GetUnitsInRectMatching( r, null );

// ===========================================================================
export const GetUnitsInRectOfPlayerFilter = (): boolean => GetOwningPlayer( GetFilterUnit() ) === bj_groupEnumOwningPlayer;

// ===========================================================================
export const GetUnitsInRectOfPlayer = ( r: rect, whichPlayer: player ): group => {

	const g = CreateGroup();
	bj_groupEnumOwningPlayer = whichPlayer;
	GroupEnumUnitsInRect( g, r, filterGetUnitsInRectOfPlayer );
	return g;

};

// ===========================================================================
export const GetUnitsInRangeOfLocMatching = ( radius: number, whichLocation: location, filter: boolexpr | null ): group => {

	const g = CreateGroup();
	GroupEnumUnitsInRangeOfLoc( g, whichLocation, radius, filter );
	if ( filter ) DestroyBoolExpr( filter );
	return g;

};

// ===========================================================================
export const GetUnitsInRangeOfLocAll = ( radius: number, whichLocation: location ): group => GetUnitsInRangeOfLocMatching( radius, whichLocation, null );

// ===========================================================================
export const GetUnitsOfTypeIdAllFilter = (): boolean => GetUnitTypeId( GetFilterUnit() ) === bj_groupEnumTypeId;

// ===========================================================================
export const GetUnitsOfTypeIdAll = ( unitid: number ): group => {

	const result = CreateGroup();
	const g = CreateGroup();
	let index: number;

	index = 0;

	while ( true ) {

		bj_groupEnumTypeId = unitid;
		GroupClear( g );
		GroupEnumUnitsOfPlayer( g, Player( index ), filterGetUnitsOfTypeIdAll );
		GroupAddGroup( g, result );

		index = index + 1;
		if ( index === bj_MAX_PLAYER_SLOTS ) break;

	}

	DestroyGroup( g );

	return result;

};

// ===========================================================================
export const GetUnitsOfPlayerMatching = ( whichPlayer: player, filter: boolexpr | null ): group => {

	const g = CreateGroup();
	GroupEnumUnitsOfPlayer( g, whichPlayer, filter );
	if ( filter ) DestroyBoolExpr( filter );
	return g;

};

// ===========================================================================
export const GetUnitsOfPlayerAll = ( whichPlayer: player ): group => GetUnitsOfPlayerMatching( whichPlayer, null );

// ===========================================================================
export const GetUnitsOfPlayerAndTypeIdFilter = (): boolean => GetUnitTypeId( GetFilterUnit() ) === bj_groupEnumTypeId;

// ===========================================================================
export const GetUnitsOfPlayerAndTypeId = ( whichPlayer: player, unitid: number ): group => {

	const g = CreateGroup();
	bj_groupEnumTypeId = unitid;
	GroupEnumUnitsOfPlayer( g, whichPlayer, filterGetUnitsOfPlayerAndTypeId );
	return g;

};

// ===========================================================================
export const GetUnitsSelectedAll = ( whichPlayer: player ): group => {

	const g = CreateGroup();
	SyncSelections();
	GroupEnumUnitsSelected( g, whichPlayer, null );
	return g;

};

// ===========================================================================
export const GetForceOfPlayer = ( whichPlayer: player ): force => {

	const f = CreateForce();
	ForceAddPlayer( f, whichPlayer );
	return f;

};

// ===========================================================================
export const GetPlayersAll = (): force => bj_FORCE_ALL_PLAYERS;

// ===========================================================================
export const GetPlayersByMapControl = ( whichControl: mapcontrol ): force => {

	const f = CreateForce();
	let playerIndex: number;
	let indexPlayer: player;

	playerIndex = 0;

	while ( true ) {

		indexPlayer = Player( playerIndex );

		if ( GetPlayerController( indexPlayer ) === whichControl )

			ForceAddPlayer( f, indexPlayer );

		playerIndex = playerIndex + 1;
		if ( playerIndex === bj_MAX_PLAYER_SLOTS ) break;

	}

	return f;

};

// ===========================================================================
export const GetPlayersAllies = ( whichPlayer: player ): force => {

	const f = CreateForce();
	ForceEnumAllies( f, whichPlayer, null );
	return f;

};

// ===========================================================================
export const GetPlayersEnemies = ( whichPlayer: player ): force => {

	const f = CreateForce();
	ForceEnumEnemies( f, whichPlayer, null );
	return f;

};

// ===========================================================================
export const GetPlayersMatching = ( filter: boolexpr ): force => {

	const f = CreateForce();
	ForceEnumPlayers( f, filter );
	DestroyBoolExpr( filter );
	return f;

};

// ===========================================================================
export const CountUnitsInGroupEnum = (): void => {

	bj_groupCountUnits = bj_groupCountUnits + 1;

};

// ===========================================================================
export const CountUnitsInGroup = ( g: group ): number => {

	// If the user wants the group destroyed, remember that fact and clear
	// the flag, in case it is used again in the callback.
	const wantDestroy = bj_wantDestroyGroup;
	bj_wantDestroyGroup = false;

	bj_groupCountUnits = 0;
	ForGroup( g, CountUnitsInGroupEnum );

	// If the user wants the group destroyed, do so now.

	if ( wantDestroy )

		DestroyGroup( g );

	return bj_groupCountUnits;

};

// ===========================================================================
export const CountPlayersInForceEnum = (): void => {

	bj_forceCountPlayers = bj_forceCountPlayers + 1;

};

// ===========================================================================
export const CountPlayersInForceBJ = ( f: force ): number => {

	bj_forceCountPlayers = 0;
	ForForce( f, CountPlayersInForceEnum );
	return bj_forceCountPlayers;

};

// ===========================================================================
export const GetRandomSubGroupEnum = (): void => {

	if ( bj_randomSubGroupWant > 0 )

		if ( bj_randomSubGroupWant >= bj_randomSubGroupTotal || GetRandomReal( 0, 1 ) < bj_randomSubGroupChance ) {

			// We either need every remaining unit, or the unit passed its chance check.
			GroupAddUnit( bj_randomSubGroupGroup, GetEnumUnit() );
			bj_randomSubGroupWant = bj_randomSubGroupWant - 1;

		}

	bj_randomSubGroupTotal = bj_randomSubGroupTotal - 1;

};

// ===========================================================================
export const GetRandomSubGroup = ( count: number, sourceGroup: group ): group => {

	const g = CreateGroup();

	bj_randomSubGroupGroup = g;
	bj_randomSubGroupWant = count;
	bj_randomSubGroupTotal = CountUnitsInGroup( sourceGroup );

	if ( bj_randomSubGroupWant <= 0 || bj_randomSubGroupTotal <= 0 )

		return g;

	bj_randomSubGroupChance = I2R( bj_randomSubGroupWant ) / I2R( bj_randomSubGroupTotal );
	ForGroup( sourceGroup, GetRandomSubGroupEnum );
	return g;

};

// ===========================================================================
export const LivingPlayerUnitsOfTypeIdFilter = (): boolean => {

	const filterUnit = GetFilterUnit();
	return IsUnitAliveBJ( filterUnit ) && GetUnitTypeId( filterUnit ) === bj_livingPlayerUnitsTypeId;

};

// ===========================================================================
export const CountLivingPlayerUnitsOfTypeId = ( unitId: number, whichPlayer: player ): number => {

	const g = CreateGroup();
	bj_livingPlayerUnitsTypeId = unitId;
	GroupEnumUnitsOfPlayer( g, whichPlayer, filterLivingPlayerUnitsOfTypeId );
	const matchedCount = CountUnitsInGroup( g );
	DestroyGroup( g );

	return matchedCount;

};

// ***************************************************************************
// *
// *  Animation Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const ResetUnitAnimation = ( whichUnit: unit ): void => {

	SetUnitAnimation( whichUnit, "stand" );

};

// ===========================================================================
export const SetUnitTimeScalePercent = ( whichUnit: unit, percentScale: number ): void => {

	SetUnitTimeScale( whichUnit, percentScale * 0.01 );

};

// ===========================================================================
export const SetUnitScalePercent = ( whichUnit: unit, percentScaleX: number, percentScaleY: number, percentScaleZ: number ): void => {

	SetUnitScale( whichUnit, percentScaleX * 0.01, percentScaleY * 0.01, percentScaleZ * 0.01 );

};

// ===========================================================================
// This version differs from the common.j interface in that the alpha value
// is reversed so as to be displayed as transparency, and all four parameters
// are treated as percentages rather than bytes.
//
export const SetUnitVertexColorBJ = ( whichUnit: unit, red: number, green: number, blue: number, transparency: number ): void => {

	SetUnitVertexColor( whichUnit, PercentTo255( red ), PercentTo255( green ), PercentTo255( blue ), PercentTo255( 100 - transparency ) );

};

// ===========================================================================
export const UnitAddIndicatorBJ = ( whichUnit: unit, red: number, green: number, blue: number, transparency: number ): void => {

	AddIndicator( whichUnit, PercentTo255( red ), PercentTo255( green ), PercentTo255( blue ), PercentTo255( 100 - transparency ) );

};

// ===========================================================================
export const DestructableAddIndicatorBJ = ( whichDestructable: destructable, red: number, green: number, blue: number, transparency: number ): void => {

	AddIndicator( whichDestructable, PercentTo255( red ), PercentTo255( green ), PercentTo255( blue ), PercentTo255( 100 - transparency ) );

};

// ===========================================================================
export const ItemAddIndicatorBJ = ( whichItem: item, red: number, green: number, blue: number, transparency: number ): void => {

	AddIndicator( whichItem, PercentTo255( red ), PercentTo255( green ), PercentTo255( blue ), PercentTo255( 100 - transparency ) );

};

// ===========================================================================
// Sets a unit's facing to point directly at a location.
//
export const SetUnitFacingToFaceLocTimed = ( whichUnit: unit, target: location, duration: number ): void => {

	const unitLoc = GetUnitLoc( whichUnit );

	SetUnitFacingTimed( whichUnit, AngleBetweenPoints( unitLoc, target ), duration );
	RemoveLocation( unitLoc );

};

// ===========================================================================
// Sets a unit's facing to point directly at another unit.
//
export const SetUnitFacingToFaceUnitTimed = ( whichUnit: unit, target: unit, duration: number ): void => {

	const unitLoc = GetUnitLoc( target );

	SetUnitFacingToFaceLocTimed( whichUnit, unitLoc, duration );
	RemoveLocation( unitLoc );

};

// ===========================================================================
export const QueueUnitAnimationBJ = ( whichUnit: unit, whichAnimation: string ): void => {

	QueueUnitAnimation( whichUnit, whichAnimation );

};

// ===========================================================================
export const SetDestructableAnimationBJ = ( d: destructable, whichAnimation: string ): void => {

	SetDestructableAnimation( d, whichAnimation );

};

// ===========================================================================
export const QueueDestructableAnimationBJ = ( d: destructable, whichAnimation: string ): void => {

	QueueDestructableAnimation( d, whichAnimation );

};

// ===========================================================================
export const SetDestAnimationSpeedPercent = ( d: destructable, percentScale: number ): void => {

	SetDestructableAnimationSpeed( d, percentScale * 0.01 );

};

// ***************************************************************************
// *
// *  Dialog Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const DialogDisplayBJ = ( flag: boolean, whichDialog: dialog, whichPlayer: player ): void => {

	DialogDisplay( whichPlayer, whichDialog, flag );

};

// ===========================================================================
export const DialogSetMessageBJ = ( whichDialog: dialog, message: string ): void => {

	DialogSetMessage( whichDialog, message );

};

// ===========================================================================
export const DialogAddButtonBJ = ( whichDialog: dialog, buttonText: string ): button => {

	bj_lastCreatedButton = DialogAddButton( whichDialog, buttonText, 0 );
	return bj_lastCreatedButton;

};

// ===========================================================================
export const DialogAddButtonWithHotkeyBJ = ( whichDialog: dialog, buttonText: string, hotkey: number ): button => {

	bj_lastCreatedButton = DialogAddButton( whichDialog, buttonText, hotkey );
	return bj_lastCreatedButton;

};

// ===========================================================================
export const DialogClearBJ = ( whichDialog: dialog ): void => {

	DialogClear( whichDialog );

};

// ===========================================================================
export const GetLastCreatedButtonBJ = (): button => bj_lastCreatedButton;

// ===========================================================================
export const GetClickedButtonBJ = (): button => GetClickedButton();

// ===========================================================================
export const GetClickedDialogBJ = (): dialog => GetClickedDialog();

// ***************************************************************************
// *
// *  Alliance Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const SetPlayerAllianceBJ = ( sourcePlayer: player, whichAllianceSetting: alliancetype, value: boolean, otherPlayer: player ): void => {

	// Prevent players from attempting to ally with themselves.

	if ( sourcePlayer === otherPlayer )

		return;

	SetPlayerAlliance( sourcePlayer, otherPlayer, whichAllianceSetting, value );

};

// ===========================================================================
// Set all flags used by the in-game "Ally" checkbox.
//
export const SetPlayerAllianceStateAllyBJ = ( sourcePlayer: player, otherPlayer: player, flag: boolean ): void => {

	SetPlayerAlliance( sourcePlayer, otherPlayer, ALLIANCE_PASSIVE, flag );
	SetPlayerAlliance( sourcePlayer, otherPlayer, ALLIANCE_HELP_REQUEST, flag );
	SetPlayerAlliance( sourcePlayer, otherPlayer, ALLIANCE_HELP_RESPONSE, flag );
	SetPlayerAlliance( sourcePlayer, otherPlayer, ALLIANCE_SHARED_XP, flag );
	SetPlayerAlliance( sourcePlayer, otherPlayer, ALLIANCE_SHARED_SPELLS, flag );

};

// ===========================================================================
// Set all flags used by the in-game "Shared Vision" checkbox.
//
export const SetPlayerAllianceStateVisionBJ = ( sourcePlayer: player, otherPlayer: player, flag: boolean ): void => {

	SetPlayerAlliance( sourcePlayer, otherPlayer, ALLIANCE_SHARED_VISION, flag );

};

// ===========================================================================
// Set all flags used by the in-game "Shared Units" checkbox.
//
export const SetPlayerAllianceStateControlBJ = ( sourcePlayer: player, otherPlayer: player, flag: boolean ): void => {

	SetPlayerAlliance( sourcePlayer, otherPlayer, ALLIANCE_SHARED_CONTROL, flag );

};

// ===========================================================================
// Set all flags used by the in-game "Shared Units" checkbox with the Full
// Shared Unit Control feature enabled.
//
export const SetPlayerAllianceStateFullControlBJ = ( sourcePlayer: player, otherPlayer: player, flag: boolean ): void => {

	SetPlayerAlliance( sourcePlayer, otherPlayer, ALLIANCE_SHARED_ADVANCED_CONTROL, flag );

};

// ===========================================================================
export const SetPlayerAllianceStateBJ = ( sourcePlayer: player, otherPlayer: player, allianceState: number ): void => {

	// Prevent players from attempting to ally with themselves.

	if ( sourcePlayer === otherPlayer )

		return;

	if ( allianceState === bj_ALLIANCE_UNALLIED ) {

		SetPlayerAllianceStateAllyBJ( sourcePlayer, otherPlayer, false );
		SetPlayerAllianceStateVisionBJ( sourcePlayer, otherPlayer, false );
		SetPlayerAllianceStateControlBJ( sourcePlayer, otherPlayer, false );
		SetPlayerAllianceStateFullControlBJ( sourcePlayer, otherPlayer, false );

	} else if ( allianceState === bj_ALLIANCE_UNALLIED_VISION ) {

		SetPlayerAllianceStateAllyBJ( sourcePlayer, otherPlayer, false );
		SetPlayerAllianceStateVisionBJ( sourcePlayer, otherPlayer, true );
		SetPlayerAllianceStateControlBJ( sourcePlayer, otherPlayer, false );
		SetPlayerAllianceStateFullControlBJ( sourcePlayer, otherPlayer, false );

	} else if ( allianceState === bj_ALLIANCE_ALLIED ) {

		SetPlayerAllianceStateAllyBJ( sourcePlayer, otherPlayer, true );
		SetPlayerAllianceStateVisionBJ( sourcePlayer, otherPlayer, false );
		SetPlayerAllianceStateControlBJ( sourcePlayer, otherPlayer, false );
		SetPlayerAllianceStateFullControlBJ( sourcePlayer, otherPlayer, false );

	} else if ( allianceState === bj_ALLIANCE_ALLIED_VISION ) {

		SetPlayerAllianceStateAllyBJ( sourcePlayer, otherPlayer, true );
		SetPlayerAllianceStateVisionBJ( sourcePlayer, otherPlayer, true );
		SetPlayerAllianceStateControlBJ( sourcePlayer, otherPlayer, false );
		SetPlayerAllianceStateFullControlBJ( sourcePlayer, otherPlayer, false );

	} else if ( allianceState === bj_ALLIANCE_ALLIED_UNITS ) {

		SetPlayerAllianceStateAllyBJ( sourcePlayer, otherPlayer, true );
		SetPlayerAllianceStateVisionBJ( sourcePlayer, otherPlayer, true );
		SetPlayerAllianceStateControlBJ( sourcePlayer, otherPlayer, true );
		SetPlayerAllianceStateFullControlBJ( sourcePlayer, otherPlayer, false );

	} else if ( allianceState === bj_ALLIANCE_ALLIED_ADVUNITS ) {

		SetPlayerAllianceStateAllyBJ( sourcePlayer, otherPlayer, true );
		SetPlayerAllianceStateVisionBJ( sourcePlayer, otherPlayer, true );
		SetPlayerAllianceStateControlBJ( sourcePlayer, otherPlayer, true );
		SetPlayerAllianceStateFullControlBJ( sourcePlayer, otherPlayer, true );

	} else if ( allianceState === bj_ALLIANCE_NEUTRAL ) {

		SetPlayerAllianceStateAllyBJ( sourcePlayer, otherPlayer, false );
		SetPlayerAllianceStateVisionBJ( sourcePlayer, otherPlayer, false );
		SetPlayerAllianceStateControlBJ( sourcePlayer, otherPlayer, false );
		SetPlayerAllianceStateFullControlBJ( sourcePlayer, otherPlayer, false );
		SetPlayerAlliance( sourcePlayer, otherPlayer, ALLIANCE_PASSIVE, true );

	} else if ( allianceState === bj_ALLIANCE_NEUTRAL_VISION ) {

		SetPlayerAllianceStateAllyBJ( sourcePlayer, otherPlayer, false );
		SetPlayerAllianceStateVisionBJ( sourcePlayer, otherPlayer, true );
		SetPlayerAllianceStateControlBJ( sourcePlayer, otherPlayer, false );
		SetPlayerAllianceStateFullControlBJ( sourcePlayer, otherPlayer, false );
		SetPlayerAlliance( sourcePlayer, otherPlayer, ALLIANCE_PASSIVE, true );

	} else {

		// Unrecognized alliance state - ignore the request.

	}

};

// ===========================================================================
// Set the alliance states for an entire force towards another force.
//
export const SetForceAllianceStateBJ = ( sourceForce: force, targetForce: force, allianceState: number ): void => {

	let sourceIndex: number;
	let targetIndex: number;

	sourceIndex = 0;

	while ( true ) {

		if ( sourceForce === bj_FORCE_ALL_PLAYERS || IsPlayerInForce( Player( sourceIndex ), sourceForce ) ) {

			targetIndex = 0;

			while ( true ) {

				if ( targetForce === bj_FORCE_ALL_PLAYERS || IsPlayerInForce( Player( targetIndex ), targetForce ) )

					SetPlayerAllianceStateBJ( Player( sourceIndex ), Player( targetIndex ), allianceState );

				targetIndex = targetIndex + 1;
				if ( targetIndex === bj_MAX_PLAYER_SLOTS ) break;

			}

		}

		sourceIndex = sourceIndex + 1;
		if ( sourceIndex === bj_MAX_PLAYER_SLOTS ) break;

	}

};

// ===========================================================================
// Test to see if two players are co-allied (allied with each other).
//
export const PlayersAreCoAllied = ( playerA: player, playerB: player ): boolean => {

	// Players are considered to be allied with themselves.

	if ( playerA === playerB )

		return true;

	// Co-allies are both allied with each other.

	if ( GetPlayerAlliance( playerA, playerB, ALLIANCE_PASSIVE ) )

		if ( GetPlayerAlliance( playerB, playerA, ALLIANCE_PASSIVE ) ) {

			return true;

		}

	return false;

};

// ===========================================================================
// Force (whichPlayer) AI player to share vision and advanced unit control
// with all AI players of its allies.
//
export const ShareEverythingWithTeamAI = ( whichPlayer: player ): void => {

	let playerIndex: number;
	let indexPlayer: player;

	playerIndex = 0;

	while ( true ) {

		indexPlayer = Player( playerIndex );

		if ( PlayersAreCoAllied( whichPlayer, indexPlayer ) && whichPlayer !== indexPlayer )

			if ( GetPlayerController( indexPlayer ) === MAP_CONTROL_COMPUTER ) {

				SetPlayerAlliance( whichPlayer, indexPlayer, ALLIANCE_SHARED_VISION, true );
				SetPlayerAlliance( whichPlayer, indexPlayer, ALLIANCE_SHARED_CONTROL, true );
				SetPlayerAlliance( whichPlayer, indexPlayer, ALLIANCE_SHARED_ADVANCED_CONTROL, true );

			}

		playerIndex = playerIndex + 1;
		if ( playerIndex === bj_MAX_PLAYERS ) break;

	}

};

// ===========================================================================
// Force (whichPlayer) to share vision and advanced unit control with all of his/her allies.
//
export const ShareEverythingWithTeam = ( whichPlayer: player ): void => {

	let playerIndex: number;
	let indexPlayer: player;

	playerIndex = 0;

	while ( true ) {

		indexPlayer = Player( playerIndex );

		if ( PlayersAreCoAllied( whichPlayer, indexPlayer ) && whichPlayer !== indexPlayer ) {

			SetPlayerAlliance( whichPlayer, indexPlayer, ALLIANCE_SHARED_VISION, true );
			SetPlayerAlliance( whichPlayer, indexPlayer, ALLIANCE_SHARED_CONTROL, true );
			SetPlayerAlliance( indexPlayer, whichPlayer, ALLIANCE_SHARED_CONTROL, true );
			SetPlayerAlliance( whichPlayer, indexPlayer, ALLIANCE_SHARED_ADVANCED_CONTROL, true );

		}

		playerIndex = playerIndex + 1;
		if ( playerIndex === bj_MAX_PLAYERS ) break;

	}

};

// ===========================================================================
// Creates a 'Neutral Victim' player slot.  This slot is passive towards all
// other players, but all other players are aggressive towards him/her.
//
export const ConfigureNeutralVictim = (): void => {

	let index: number;
	let indexPlayer: player;
	const neutralVictim = Player( bj_PLAYER_NEUTRAL_VICTIM );

	index = 0;

	while ( true ) {

		indexPlayer = Player( index );

		SetPlayerAlliance( neutralVictim, indexPlayer, ALLIANCE_PASSIVE, true );
		SetPlayerAlliance( indexPlayer, neutralVictim, ALLIANCE_PASSIVE, false );

		index = index + 1;
		if ( index === bj_MAX_PLAYERS ) break;

	}

	// Neutral Victim and Neutral Aggressive should not fight each other.
	indexPlayer = Player( PLAYER_NEUTRAL_AGGRESSIVE );
	SetPlayerAlliance( neutralVictim, indexPlayer, ALLIANCE_PASSIVE, true );
	SetPlayerAlliance( indexPlayer, neutralVictim, ALLIANCE_PASSIVE, true );

	// Neutral Victim does not give bounties.
	SetPlayerState( neutralVictim, PLAYER_STATE_GIVES_BOUNTY, 0 );

};

// ===========================================================================
export const MakeUnitsPassiveForPlayerEnum = (): void => {

	SetUnitOwner( GetEnumUnit(), Player( bj_PLAYER_NEUTRAL_VICTIM ), false );

};

// ===========================================================================
// Change ownership for every unit of (whichPlayer)'s team to neutral passive.
//
export const MakeUnitsPassiveForPlayer = ( whichPlayer: player ): void => {

	const playerUnits = CreateGroup();
	CachePlayerHeroData( whichPlayer );
	GroupEnumUnitsOfPlayer( playerUnits, whichPlayer, null );
	ForGroup( playerUnits, MakeUnitsPassiveForPlayerEnum );
	DestroyGroup( playerUnits );

};

// ===========================================================================
// Change ownership for every unit of (whichPlayer)'s team to neutral passive.
//
export const MakeUnitsPassiveForTeam = ( whichPlayer: player ): void => {

	let playerIndex: number;
	let indexPlayer: player;

	playerIndex = 0;

	while ( true ) {

		indexPlayer = Player( playerIndex );

		if ( PlayersAreCoAllied( whichPlayer, indexPlayer ) )

			MakeUnitsPassiveForPlayer( indexPlayer );

		playerIndex = playerIndex + 1;
		if ( playerIndex === bj_MAX_PLAYERS ) break;

	}

};

// ===========================================================================
// Determine whether or not victory/defeat is disabled via cheat codes.
//
export const AllowVictoryDefeat = ( gameResult: playergameresult ): boolean => {

	if ( gameResult === PLAYER_GAME_RESULT_VICTORY )

		return ! IsNoVictoryCheat();

	if ( gameResult === PLAYER_GAME_RESULT_DEFEAT )

		return ! IsNoDefeatCheat();

	if ( gameResult === PLAYER_GAME_RESULT_NEUTRAL )

		return ! IsNoVictoryCheat() && ! IsNoDefeatCheat();

	return true;

};

// ===========================================================================
export const EndGameBJ = (): void => {

	EndGame( true );

};

// ===========================================================================
export const MeleeVictoryDialogBJ = ( whichPlayer: player, leftGame: boolean ): void => {

	let t = CreateTrigger();
	const d = DialogCreate();
	let formatString: string;

	// Display "player was victorious" or "player has left the game" message

	if ( leftGame )

		formatString = GetLocalizedString( "PLAYER_LEFT_GAME" );

	else

		formatString = GetLocalizedString( "PLAYER_VICTORIOUS" );

	DisplayTimedTextFromPlayer( whichPlayer, 0, 0, 60, formatString );

	DialogSetMessage( d, GetLocalizedString( "GAMEOVER_VICTORY_MSG" ) );
	DialogAddButton( d, GetLocalizedString( "GAMEOVER_CONTINUE_GAME" ), GetLocalizedHotkey( "GAMEOVER_CONTINUE_GAME" ) );

	t = CreateTrigger();
	TriggerRegisterDialogButtonEvent( t, DialogAddQuitButton( d, true, GetLocalizedString( "GAMEOVER_QUIT_GAME" ), GetLocalizedHotkey( "GAMEOVER_QUIT_GAME" ) ) );

	DialogDisplay( whichPlayer, d, true );
	StartSoundForPlayerBJ( whichPlayer, bj_victoryDialogSound );

};

// ===========================================================================
export const MeleeDefeatDialogBJ = ( whichPlayer: player, leftGame: boolean ): void => {

	let t = CreateTrigger();
	const d = DialogCreate();
	let formatString: string;

	// Display "player was defeated" or "player has left the game" message

	if ( leftGame )

		formatString = GetLocalizedString( "PLAYER_LEFT_GAME" );

	else

		formatString = GetLocalizedString( "PLAYER_DEFEATED" );

	DisplayTimedTextFromPlayer( whichPlayer, 0, 0, 60, formatString );

	DialogSetMessage( d, GetLocalizedString( "GAMEOVER_DEFEAT_MSG" ) );

	// Only show the continue button if the game is not over and observers on death are allowed

	if ( ! bj_meleeGameOver && IsMapFlagSet( MAP_OBSERVERS_ON_DEATH ) )

		DialogAddButton( d, GetLocalizedString( "GAMEOVER_CONTINUE_OBSERVING" ), GetLocalizedHotkey( "GAMEOVER_CONTINUE_OBSERVING" ) );

	t = CreateTrigger();
	TriggerRegisterDialogButtonEvent( t, DialogAddQuitButton( d, true, GetLocalizedString( "GAMEOVER_QUIT_GAME" ), GetLocalizedHotkey( "GAMEOVER_QUIT_GAME" ) ) );

	DialogDisplay( whichPlayer, d, true );
	StartSoundForPlayerBJ( whichPlayer, bj_defeatDialogSound );

};

// ===========================================================================
// leftGame is unused, but we don't want to break the API
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GameOverDialogBJ = ( whichPlayer: player, leftGame: boolean ): void => {

	let t = CreateTrigger();
	const d = DialogCreate();
	let s: string;

	// Display "player left the game" message
	DisplayTimedTextFromPlayer( whichPlayer, 0, 0, 60, GetLocalizedString( "PLAYER_LEFT_GAME" ) );

	if ( GetIntegerGameState( GAME_STATE_DISCONNECTED ) !== 0 )

		s = GetLocalizedString( "GAMEOVER_DISCONNECTED" );

	else

		s = GetLocalizedString( "GAMEOVER_GAME_OVER" );

	DialogSetMessage( d, s );

	t = CreateTrigger();
	TriggerRegisterDialogButtonEvent( t, DialogAddQuitButton( d, true, GetLocalizedString( "GAMEOVER_OK" ), GetLocalizedHotkey( "GAMEOVER_OK" ) ) );

	DialogDisplay( whichPlayer, d, true );
	StartSoundForPlayerBJ( whichPlayer, bj_defeatDialogSound );

};

// ===========================================================================
export const RemovePlayerPreserveUnitsBJ = ( whichPlayer: player, gameResult: playergameresult, leftGame: boolean ): void => {

	if ( AllowVictoryDefeat( gameResult ) ) {

		RemovePlayer( whichPlayer, gameResult );

		if ( gameResult === PLAYER_GAME_RESULT_VICTORY ) {

			MeleeVictoryDialogBJ( whichPlayer, leftGame );
			return;

		} else if ( gameResult === PLAYER_GAME_RESULT_DEFEAT )

			MeleeDefeatDialogBJ( whichPlayer, leftGame );

		else

			GameOverDialogBJ( whichPlayer, leftGame );

	}

};

// ===========================================================================
export const CustomVictoryOkBJ = (): void => {

	if ( bj_isSinglePlayer ) {

		PauseGame( false );
		// Bump the difficulty back up to the default.
		SetGameDifficulty( GetDefaultDifficulty() );

	}

	if ( bj_changeLevelMapName === null ) EndGame( bj_changeLevelShowScores );
	else ChangeLevel( bj_changeLevelMapName, bj_changeLevelShowScores );

};

// ===========================================================================
export const CustomVictoryQuitBJ = (): void => {

	if ( bj_isSinglePlayer ) {

		PauseGame( false );
		// Bump the difficulty back up to the default.
		SetGameDifficulty( GetDefaultDifficulty() );

	}

	EndGame( bj_changeLevelShowScores );

};

// ===========================================================================
export const CustomVictoryDialogBJ = ( whichPlayer: player ): void => {

	let t = CreateTrigger();
	const d = DialogCreate();

	DialogSetMessage( d, GetLocalizedString( "GAMEOVER_VICTORY_MSG" ) );

	t = CreateTrigger();
	TriggerRegisterDialogButtonEvent( t, DialogAddButton( d, GetLocalizedString( "GAMEOVER_CONTINUE" ), GetLocalizedHotkey( "GAMEOVER_CONTINUE" ) ) );
	TriggerAddAction( t, CustomVictoryOkBJ );

	t = CreateTrigger();
	TriggerRegisterDialogButtonEvent( t, DialogAddButton( d, GetLocalizedString( "GAMEOVER_QUIT_MISSION" ), GetLocalizedHotkey( "GAMEOVER_QUIT_MISSION" ) ) );
	TriggerAddAction( t, CustomVictoryQuitBJ );

	if ( GetLocalPlayer() === whichPlayer ) {

		EnableUserControl( true );

		if ( bj_isSinglePlayer )

			PauseGame( true );

		EnableUserUI( false );

	}

	DialogDisplay( whichPlayer, d, true );
	VolumeGroupSetVolumeForPlayerBJ( whichPlayer, SOUND_VOLUMEGROUP_UI, 1 );
	StartSoundForPlayerBJ( whichPlayer, bj_victoryDialogSound );

};

// ===========================================================================
export const CustomVictorySkipBJ = ( whichPlayer: player ): void => {

	if ( GetLocalPlayer() === whichPlayer ) {

		if ( bj_isSinglePlayer )

			// Bump the difficulty back up to the default.
			SetGameDifficulty( GetDefaultDifficulty() );

		if ( bj_changeLevelMapName === null )

			EndGame( bj_changeLevelShowScores );

		else

			ChangeLevel( bj_changeLevelMapName, bj_changeLevelShowScores );

	}

};

// ===========================================================================
export const CustomVictoryBJ = ( whichPlayer: player, showDialog: boolean, showScores: boolean ): void => {

	if ( AllowVictoryDefeat( PLAYER_GAME_RESULT_VICTORY ) ) {

		RemovePlayer( whichPlayer, PLAYER_GAME_RESULT_VICTORY );

		if ( ! bj_isSinglePlayer )

			DisplayTimedTextFromPlayer( whichPlayer, 0, 0, 60, GetLocalizedString( "PLAYER_VICTORIOUS" ) );

		// UI only needs to be displayed to users.

		if ( GetPlayerController( whichPlayer ) === MAP_CONTROL_USER ) {

			bj_changeLevelShowScores = showScores;

			if ( showDialog )

				CustomVictoryDialogBJ( whichPlayer );

			else

				CustomVictorySkipBJ( whichPlayer );

		}

	}

};

// ===========================================================================
export const CustomDefeatRestartBJ = (): void => {

	PauseGame( false );
	RestartGame( true );

};

// ===========================================================================
export const CustomDefeatReduceDifficultyBJ = (): void => {

	const diff = GetGameDifficulty();

	PauseGame( false );

	// Knock the difficulty down, if possible.

	if ( diff === MAP_DIFFICULTY_EASY ) {

		// Sorry, but it doesn't get any easier than this.

	} else if ( diff === MAP_DIFFICULTY_NORMAL )

		SetGameDifficulty( MAP_DIFFICULTY_EASY );

	else if ( diff === MAP_DIFFICULTY_HARD )

		SetGameDifficulty( MAP_DIFFICULTY_NORMAL );

	else {

		// Unrecognized difficulty

	}

	RestartGame( true );

};

// ===========================================================================
export const CustomDefeatLoadBJ = (): void => {

	PauseGame( false );
	DisplayLoadDialog();

};

// ===========================================================================
export const CustomDefeatQuitBJ = (): void => {

	if ( bj_isSinglePlayer )

		PauseGame( false );

	// Bump the difficulty back up to the default.
	SetGameDifficulty( GetDefaultDifficulty() );
	EndGame( true );

};

// ===========================================================================
export const CustomDefeatDialogBJ = ( whichPlayer: player, message: string ): void => {

	let t = CreateTrigger();
	const d = DialogCreate();

	DialogSetMessage( d, message );

	if ( bj_isSinglePlayer ) {

		t = CreateTrigger();
		TriggerRegisterDialogButtonEvent( t, DialogAddButton( d, GetLocalizedString( "GAMEOVER_RESTART" ), GetLocalizedHotkey( "GAMEOVER_RESTART" ) ) );
		TriggerAddAction( t, CustomDefeatRestartBJ );

		if ( GetGameDifficulty() !== MAP_DIFFICULTY_EASY ) {

			t = CreateTrigger();
			TriggerRegisterDialogButtonEvent( t, DialogAddButton( d, GetLocalizedString( "GAMEOVER_REDUCE_DIFFICULTY" ), GetLocalizedHotkey( "GAMEOVER_REDUCE_DIFFICULTY" ) ) );
			TriggerAddAction( t, CustomDefeatReduceDifficultyBJ );

		}

		t = CreateTrigger();
		TriggerRegisterDialogButtonEvent( t, DialogAddButton( d, GetLocalizedString( "GAMEOVER_LOAD" ), GetLocalizedHotkey( "GAMEOVER_LOAD" ) ) );
		TriggerAddAction( t, CustomDefeatLoadBJ );

	}

	t = CreateTrigger();
	TriggerRegisterDialogButtonEvent( t, DialogAddButton( d, GetLocalizedString( "GAMEOVER_QUIT_MISSION" ), GetLocalizedHotkey( "GAMEOVER_QUIT_MISSION" ) ) );
	TriggerAddAction( t, CustomDefeatQuitBJ );

	if ( GetLocalPlayer() === whichPlayer ) {

		EnableUserControl( true );

		if ( bj_isSinglePlayer )

			PauseGame( true );

		EnableUserUI( false );

	}

	DialogDisplay( whichPlayer, d, true );
	VolumeGroupSetVolumeForPlayerBJ( whichPlayer, SOUND_VOLUMEGROUP_UI, 1 );
	StartSoundForPlayerBJ( whichPlayer, bj_defeatDialogSound );

};

// ===========================================================================
export const CustomDefeatBJ = ( whichPlayer: player, message: string ): void => {

	if ( AllowVictoryDefeat( PLAYER_GAME_RESULT_DEFEAT ) ) {

		RemovePlayer( whichPlayer, PLAYER_GAME_RESULT_DEFEAT );

		if ( ! bj_isSinglePlayer )

			DisplayTimedTextFromPlayer( whichPlayer, 0, 0, 60, GetLocalizedString( "PLAYER_DEFEATED" ) );

		// UI only needs to be displayed to users.

		if ( GetPlayerController( whichPlayer ) === MAP_CONTROL_USER )

			CustomDefeatDialogBJ( whichPlayer, message );

	}

};

// ===========================================================================
export const SetNextLevelBJ = ( nextLevel: string ): void => {

	if ( nextLevel === "" ) bj_changeLevelMapName = null;
	else bj_changeLevelMapName = nextLevel;

};

// ===========================================================================
export const SetPlayerOnScoreScreenBJ = ( flag: boolean, whichPlayer: player ): void => {

	SetPlayerOnScoreScreen( whichPlayer, flag );

};

// ***************************************************************************
// *
// *  Quest Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const CreateQuestBJ = ( questType: number, title: string, description: string, iconPath: string ): quest => {

	const required = questType === bj_QUESTTYPE_REQ_DISCOVERED || questType === bj_QUESTTYPE_REQ_UNDISCOVERED;
	const discovered = questType === bj_QUESTTYPE_REQ_DISCOVERED || questType === bj_QUESTTYPE_OPT_DISCOVERED;

	bj_lastCreatedQuest = CreateQuest();
	QuestSetTitle( bj_lastCreatedQuest, title );
	QuestSetDescription( bj_lastCreatedQuest, description );
	QuestSetIconPath( bj_lastCreatedQuest, iconPath );
	QuestSetRequired( bj_lastCreatedQuest, required );
	QuestSetDiscovered( bj_lastCreatedQuest, discovered );
	QuestSetCompleted( bj_lastCreatedQuest, false );
	return bj_lastCreatedQuest;

};

// ===========================================================================
export const DestroyQuestBJ = ( whichQuest: quest ): void => {

	DestroyQuest( whichQuest );

};

// ===========================================================================
export const QuestSetEnabledBJ = ( enabled: boolean, whichQuest: quest ): void => {

	QuestSetEnabled( whichQuest, enabled );

};

// ===========================================================================
export const QuestSetTitleBJ = ( whichQuest: quest, title: string ): void => {

	QuestSetTitle( whichQuest, title );

};

// ===========================================================================
export const QuestSetDescriptionBJ = ( whichQuest: quest, description: string ): void => {

	QuestSetDescription( whichQuest, description );

};

// ===========================================================================
export const QuestSetCompletedBJ = ( whichQuest: quest, completed: boolean ): void => {

	QuestSetCompleted( whichQuest, completed );

};

// ===========================================================================
export const QuestSetFailedBJ = ( whichQuest: quest, failed: boolean ): void => {

	QuestSetFailed( whichQuest, failed );

};

// ===========================================================================
export const QuestSetDiscoveredBJ = ( whichQuest: quest, discovered: boolean ): void => {

	QuestSetDiscovered( whichQuest, discovered );

};

// ===========================================================================
export const GetLastCreatedQuestBJ = (): quest => bj_lastCreatedQuest;

// ===========================================================================
export const CreateQuestItemBJ = ( whichQuest: quest, description: string ): questitem => {

	bj_lastCreatedQuestItem = QuestCreateItem( whichQuest );
	QuestItemSetDescription( bj_lastCreatedQuestItem, description );
	QuestItemSetCompleted( bj_lastCreatedQuestItem, false );
	return bj_lastCreatedQuestItem;

};

// ===========================================================================
export const QuestItemSetDescriptionBJ = ( whichQuestItem: questitem, description: string ): void => {

	QuestItemSetDescription( whichQuestItem, description );

};

// ===========================================================================
export const QuestItemSetCompletedBJ = ( whichQuestItem: questitem, completed: boolean ): void => {

	QuestItemSetCompleted( whichQuestItem, completed );

};

// ===========================================================================
export const GetLastCreatedQuestItemBJ = (): questitem => bj_lastCreatedQuestItem;

// ===========================================================================
export const CreateDefeatConditionBJ = ( description: string ): defeatcondition => {

	bj_lastCreatedDefeatCondition = CreateDefeatCondition();
	DefeatConditionSetDescription( bj_lastCreatedDefeatCondition, description );
	return bj_lastCreatedDefeatCondition;

};

// ===========================================================================
export const DestroyDefeatConditionBJ = ( whichCondition: defeatcondition ): void => {

	DestroyDefeatCondition( whichCondition );

};

// ===========================================================================
export const DefeatConditionSetDescriptionBJ = ( whichCondition: defeatcondition, description: string ): void => {

	DefeatConditionSetDescription( whichCondition, description );

};

// ===========================================================================
export const GetLastCreatedDefeatConditionBJ = (): defeatcondition => bj_lastCreatedDefeatCondition;

// ===========================================================================
export const FlashQuestDialogButtonBJ = (): void => {

	FlashQuestDialogButton();

};

// ===========================================================================
export const QuestMessageBJ = ( f: force, messageType: number, message: string ): void => {

	if ( IsPlayerInForce( GetLocalPlayer(), f ) )

	// Use only local code (no net traffic) within this block to avoid desyncs.

		if ( messageType === bj_QUESTMESSAGE_DISCOVERED ) {

			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_QUEST, " " );
			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_QUEST, message );
			StartSound( bj_questDiscoveredSound );
			FlashQuestDialogButton();

		} else if ( messageType === bj_QUESTMESSAGE_UPDATED ) {

			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_QUESTUPDATE, " " );
			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_QUESTUPDATE, message );
			StartSound( bj_questUpdatedSound );
			FlashQuestDialogButton();

		} else if ( messageType === bj_QUESTMESSAGE_COMPLETED ) {

			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_QUESTDONE, " " );
			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_QUESTDONE, message );
			StartSound( bj_questCompletedSound );
			FlashQuestDialogButton();

		} else if ( messageType === bj_QUESTMESSAGE_FAILED ) {

			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_QUESTFAILED, " " );
			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_QUESTFAILED, message );
			StartSound( bj_questFailedSound );
			FlashQuestDialogButton();

		} else if ( messageType === bj_QUESTMESSAGE_REQUIREMENT ) {

			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_QUESTREQUIREMENT, message );

		} else if ( messageType === bj_QUESTMESSAGE_MISSIONFAILED ) {

			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_MISSIONFAILED, " " );
			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_MISSIONFAILED, message );
			StartSound( bj_questFailedSound );

		} else if ( messageType === bj_QUESTMESSAGE_HINT ) {

			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_HINT, " " );
			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_HINT, message );
			StartSound( bj_questHintSound );

		} else if ( messageType === bj_QUESTMESSAGE_ALWAYSHINT ) {

			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_ALWAYSHINT, " " );
			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_ALWAYSHINT, message );
			StartSound( bj_questHintSound );

		} else if ( messageType === bj_QUESTMESSAGE_SECRET ) {

			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_SECRET, " " );
			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_SECRET, message );
			StartSound( bj_questSecretSound );

		} else if ( messageType === bj_QUESTMESSAGE_UNITACQUIRED ) {

			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_UNITACQUIRED, " " );
			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_UNITACQUIRED, message );
			StartSound( bj_questHintSound );

		} else if ( messageType === bj_QUESTMESSAGE_UNITAVAILABLE ) {

			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_UNITAVAILABLE, " " );
			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_UNITAVAILABLE, message );
			StartSound( bj_questHintSound );

		} else if ( messageType === bj_QUESTMESSAGE_ITEMACQUIRED ) {

			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_ITEMACQUIRED, " " );
			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_ITEMACQUIRED, message );
			StartSound( bj_questItemAcquiredSound );

		} else if ( messageType === bj_QUESTMESSAGE_WARNING ) {

			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_WARNING, " " );
			DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_WARNING, message );
			StartSound( bj_questWarningSound );

		} else {

			// Unrecognized message type - ignore the request.

		}

};

// ***************************************************************************
// *
// *  Timer Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const StartTimerBJ = ( t: timer, periodic: boolean, timeout: number ): timer => {

	bj_lastStartedTimer = t;
	TimerStart( t, timeout, periodic, null );
	return bj_lastStartedTimer;

};

// ===========================================================================
export const CreateTimerBJ = ( periodic: boolean, timeout: number ): timer => {

	bj_lastStartedTimer = CreateTimer();
	TimerStart( bj_lastStartedTimer, timeout, periodic, null );
	return bj_lastStartedTimer;

};

// ===========================================================================
export const DestroyTimerBJ = ( whichTimer: timer ): void => {

	DestroyTimer( whichTimer );

};

// ===========================================================================
export const PauseTimerBJ = ( pause: boolean, whichTimer: timer ): void => {

	if ( pause )

		PauseTimer( whichTimer );

	else

		ResumeTimer( whichTimer );

};

// ===========================================================================
export const GetLastCreatedTimerBJ = (): timer => bj_lastStartedTimer;

// ===========================================================================
export const CreateTimerDialogBJ = ( t: timer, title: string ): timerdialog => {

	bj_lastCreatedTimerDialog = CreateTimerDialog( t );
	TimerDialogSetTitle( bj_lastCreatedTimerDialog, title );
	TimerDialogDisplay( bj_lastCreatedTimerDialog, true );
	return bj_lastCreatedTimerDialog;

};

// ===========================================================================
export const DestroyTimerDialogBJ = ( td: timerdialog ): void => {

	DestroyTimerDialog( td );

};

// ===========================================================================
export const TimerDialogSetTitleBJ = ( td: timerdialog, title: string ): void => {

	TimerDialogSetTitle( td, title );

};

// ===========================================================================
export const TimerDialogSetTitleColorBJ = ( td: timerdialog, red: number, green: number, blue: number, transparency: number ): void => {

	TimerDialogSetTitleColor( td, PercentTo255( red ), PercentTo255( green ), PercentTo255( blue ), PercentTo255( 100 - transparency ) );

};

// ===========================================================================
export const TimerDialogSetTimeColorBJ = ( td: timerdialog, red: number, green: number, blue: number, transparency: number ): void => {

	TimerDialogSetTimeColor( td, PercentTo255( red ), PercentTo255( green ), PercentTo255( blue ), PercentTo255( 100 - transparency ) );

};

// ===========================================================================
export const TimerDialogSetSpeedBJ = ( td: timerdialog, speedMultFactor: number ): void => {

	TimerDialogSetSpeed( td, speedMultFactor );

};

// ===========================================================================
export const TimerDialogDisplayForPlayerBJ = ( show: boolean, td: timerdialog, whichPlayer: player ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		TimerDialogDisplay( td, show );

};

// ===========================================================================
export const TimerDialogDisplayBJ = ( show: boolean, td: timerdialog ): void => {

	TimerDialogDisplay( td, show );

};

// ===========================================================================
export const GetLastCreatedTimerDialogBJ = (): timerdialog => bj_lastCreatedTimerDialog;

// ***************************************************************************
// *
// *  Leaderboard Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const LeaderboardResizeBJ = ( lb: leaderboard ): void => {

	let size = LeaderboardGetItemCount( lb );

	if ( LeaderboardGetLabelText( lb ) === "" )

		size = size - 1;

	LeaderboardSetSizeByItemCount( lb, size );

};

// ===========================================================================
export const LeaderboardSetPlayerItemValueBJ = ( whichPlayer: player, lb: leaderboard, val: number ): void => {

	LeaderboardSetItemValue( lb, LeaderboardGetPlayerIndex( lb, whichPlayer ), val );

};

// ===========================================================================
export const LeaderboardSetPlayerItemLabelBJ = ( whichPlayer: player, lb: leaderboard, val: string ): void => {

	LeaderboardSetItemLabel( lb, LeaderboardGetPlayerIndex( lb, whichPlayer ), val );

};

// ===========================================================================
export const LeaderboardSetPlayerItemStyleBJ = ( whichPlayer: player, lb: leaderboard, showLabel: boolean, showValue: boolean, showIcon: boolean ): void => {

	LeaderboardSetItemStyle( lb, LeaderboardGetPlayerIndex( lb, whichPlayer ), showLabel, showValue, showIcon );

};

// ===========================================================================
export const LeaderboardSetPlayerItemLabelColorBJ = ( whichPlayer: player, lb: leaderboard, red: number, green: number, blue: number, transparency: number ): void => {

	LeaderboardSetItemLabelColor( lb, LeaderboardGetPlayerIndex( lb, whichPlayer ), PercentTo255( red ), PercentTo255( green ), PercentTo255( blue ), PercentTo255( 100 - transparency ) );

};

// ===========================================================================
export const LeaderboardSetPlayerItemValueColorBJ = ( whichPlayer: player, lb: leaderboard, red: number, green: number, blue: number, transparency: number ): void => {

	LeaderboardSetItemValueColor( lb, LeaderboardGetPlayerIndex( lb, whichPlayer ), PercentTo255( red ), PercentTo255( green ), PercentTo255( blue ), PercentTo255( 100 - transparency ) );

};

// ===========================================================================
export const LeaderboardSetLabelColorBJ = ( lb: leaderboard, red: number, green: number, blue: number, transparency: number ): void => {

	LeaderboardSetLabelColor( lb, PercentTo255( red ), PercentTo255( green ), PercentTo255( blue ), PercentTo255( 100 - transparency ) );

};

// ===========================================================================
export const LeaderboardSetValueColorBJ = ( lb: leaderboard, red: number, green: number, blue: number, transparency: number ): void => {

	LeaderboardSetValueColor( lb, PercentTo255( red ), PercentTo255( green ), PercentTo255( blue ), PercentTo255( 100 - transparency ) );

};

// ===========================================================================
export const LeaderboardSetLabelBJ = ( lb: leaderboard, label: string ): void => {

	LeaderboardSetLabel( lb, label );
	LeaderboardResizeBJ( lb );

};

// ===========================================================================
export const LeaderboardSetStyleBJ = ( lb: leaderboard, showLabel: boolean, showNames: boolean, showValues: boolean, showIcons: boolean ): void => {

	LeaderboardSetStyle( lb, showLabel, showNames, showValues, showIcons );

};

// ===========================================================================
export const LeaderboardGetItemCountBJ = ( lb: leaderboard ): number => LeaderboardGetItemCount( lb );

// ===========================================================================
export const LeaderboardHasPlayerItemBJ = ( lb: leaderboard, whichPlayer: player ): boolean => LeaderboardHasPlayerItem( lb, whichPlayer );

// ===========================================================================
export const ForceSetLeaderboardBJ = ( lb: leaderboard, toForce: force ): void => {

	let index: number;
	let indexPlayer: player;

	index = 0;

	while ( true ) {

		indexPlayer = Player( index );

		if ( IsPlayerInForce( indexPlayer, toForce ) )

			PlayerSetLeaderboard( indexPlayer, lb );

		index = index + 1;
		if ( index === bj_MAX_PLAYERS ) break;

	}

};

// ===========================================================================
export const CreateLeaderboardBJ = ( toForce: force, label: string ): leaderboard => {

	bj_lastCreatedLeaderboard = CreateLeaderboard();
	LeaderboardSetLabel( bj_lastCreatedLeaderboard, label );
	ForceSetLeaderboardBJ( bj_lastCreatedLeaderboard, toForce );
	LeaderboardDisplay( bj_lastCreatedLeaderboard, true );
	return bj_lastCreatedLeaderboard;

};

// ===========================================================================
export const DestroyLeaderboardBJ = ( lb: leaderboard ): void => {

	DestroyLeaderboard( lb );

};

// ===========================================================================
export const LeaderboardDisplayBJ = ( show: boolean, lb: leaderboard ): void => {

	LeaderboardDisplay( lb, show );

};

// ===========================================================================
export const LeaderboardAddItemBJ = ( whichPlayer: player, lb: leaderboard, label: string, value: number ): void => {

	if ( LeaderboardHasPlayerItem( lb, whichPlayer ) )

		LeaderboardRemovePlayerItem( lb, whichPlayer );

	LeaderboardAddItem( lb, label, value, whichPlayer );
	LeaderboardResizeBJ( lb );
	// call LeaderboardSetSizeByItemCount(lb, LeaderboardGetItemCount(lb))

};

// ===========================================================================
export const LeaderboardRemovePlayerItemBJ = ( whichPlayer: player, lb: leaderboard ): void => {

	LeaderboardRemovePlayerItem( lb, whichPlayer );
	LeaderboardResizeBJ( lb );

};

// ===========================================================================
export const LeaderboardSortItemsBJ = ( lb: leaderboard, sortType: number, ascending: boolean ): void => {

	if ( sortType === bj_SORTTYPE_SORTBYVALUE )

		LeaderboardSortItemsByValue( lb, ascending );

	else if ( sortType === bj_SORTTYPE_SORTBYPLAYER )

		LeaderboardSortItemsByPlayer( lb, ascending );

	else if ( sortType === bj_SORTTYPE_SORTBYLABEL )

		LeaderboardSortItemsByLabel( lb, ascending );

	else {

		// Unrecognized sort type - ignore the request.

	}

};

// ===========================================================================
export const LeaderboardSortItemsByPlayerBJ = ( lb: leaderboard, ascending: boolean ): void => {

	LeaderboardSortItemsByPlayer( lb, ascending );

};

// ===========================================================================
export const LeaderboardSortItemsByLabelBJ = ( lb: leaderboard, ascending: boolean ): void => {

	LeaderboardSortItemsByLabel( lb, ascending );

};

// ===========================================================================
export const LeaderboardGetPlayerIndexBJ = ( whichPlayer: player, lb: leaderboard ): number => LeaderboardGetPlayerIndex( lb, whichPlayer ) + 1;

// ===========================================================================
// Returns the player who is occupying a specified position in a leaderboard.
// The position parameter is expected in the range of 1..16.
//
export const LeaderboardGetIndexedPlayerBJ = ( position: number, lb: leaderboard ): player => {

	let index: number;
	let indexPlayer: player;

	index = 0;

	while ( true ) {

		indexPlayer = Player( index );

		if ( LeaderboardGetPlayerIndex( lb, indexPlayer ) === position - 1 )

			return indexPlayer;

		index = index + 1;
		if ( index === bj_MAX_PLAYERS ) break;

	}

	return Player( PLAYER_NEUTRAL_PASSIVE );

};

// ===========================================================================
export const PlayerGetLeaderboardBJ = ( whichPlayer: player ): leaderboard => PlayerGetLeaderboard( whichPlayer );

// ===========================================================================
export const GetLastCreatedLeaderboard = (): leaderboard => bj_lastCreatedLeaderboard;

// ***************************************************************************
// *
// *  Multiboard Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const CreateMultiboardBJ = ( cols: number, rows: number, title: string ): multiboard => {

	bj_lastCreatedMultiboard = CreateMultiboard();
	MultiboardSetRowCount( bj_lastCreatedMultiboard, rows );
	MultiboardSetColumnCount( bj_lastCreatedMultiboard, cols );
	MultiboardSetTitleText( bj_lastCreatedMultiboard, title );
	MultiboardDisplay( bj_lastCreatedMultiboard, true );
	return bj_lastCreatedMultiboard;

};

// ===========================================================================
export const DestroyMultiboardBJ = ( mb: multiboard ): void => {

	DestroyMultiboard( mb );

};

// ===========================================================================
export const GetLastCreatedMultiboard = (): multiboard => bj_lastCreatedMultiboard;

// ===========================================================================
export const MultiboardDisplayBJ = ( show: boolean, mb: multiboard ): void => {

	MultiboardDisplay( mb, show );

};

// ===========================================================================
export const MultiboardMinimizeBJ = ( minimize: boolean, mb: multiboard ): void => {

	MultiboardMinimize( mb, minimize );

};

// ===========================================================================
export const MultiboardSetTitleTextColorBJ = ( mb: multiboard, red: number, green: number, blue: number, transparency: number ): void => {

	MultiboardSetTitleTextColor( mb, PercentTo255( red ), PercentTo255( green ), PercentTo255( blue ), PercentTo255( 100 - transparency ) );

};

// ===========================================================================
export const MultiboardAllowDisplayBJ = ( flag: boolean ): void => {

	MultiboardSuppressDisplay( ! flag );

};

// ===========================================================================
export const MultiboardSetItemStyleBJ = ( mb: multiboard, col: number, row: number, showValue: boolean, showIcon: boolean ): void => {

	let curRow = 0;
	let curCol = 0;
	const numRows = MultiboardGetRowCount( mb );
	const numCols = MultiboardGetColumnCount( mb );
	let mbitem: multiboarditem;

	// Loop over rows, using 1-based index

	while ( true ) {

		curRow = curRow + 1;
		if ( curRow > numRows ) break;

		// Apply setting to the requested row, or all rows (if row is 0)

		if ( row === 0 || row === curRow ) {

			// Loop over columns, using 1-based index
			curCol = 0;

			while ( true ) {

				curCol = curCol + 1;
				if ( curCol > numCols ) break;

				// Apply setting to the requested column, or all columns (if col is 0)

				if ( col === 0 || col === curCol ) {

					mbitem = MultiboardGetItem( mb, curRow - 1, curCol - 1 );
					MultiboardSetItemStyle( mbitem, showValue, showIcon );
					MultiboardReleaseItem( mbitem );

				}

			}

		}

	}

};

// ===========================================================================
export const MultiboardSetItemValueBJ = ( mb: multiboard, col: number, row: number, val: string ): void => {

	let curRow = 0;
	let curCol = 0;
	const numRows = MultiboardGetRowCount( mb );
	const numCols = MultiboardGetColumnCount( mb );
	let mbitem: multiboarditem;

	// Loop over rows, using 1-based index

	while ( true ) {

		curRow = curRow + 1;
		if ( curRow > numRows ) break;

		// Apply setting to the requested row, or all rows (if row is 0)

		if ( row === 0 || row === curRow ) {

			// Loop over columns, using 1-based index
			curCol = 0;

			while ( true ) {

				curCol = curCol + 1;
				if ( curCol > numCols ) break;

				// Apply setting to the requested column, or all columns (if col is 0)

				if ( col === 0 || col === curCol ) {

					mbitem = MultiboardGetItem( mb, curRow - 1, curCol - 1 );
					MultiboardSetItemValue( mbitem, val );
					MultiboardReleaseItem( mbitem );

				}

			}

		}

	}

};

// ===========================================================================
export const MultiboardSetItemColorBJ = ( mb: multiboard, col: number, row: number, red: number, green: number, blue: number, transparency: number ): void => {

	let curRow = 0;
	let curCol = 0;
	const numRows = MultiboardGetRowCount( mb );
	const numCols = MultiboardGetColumnCount( mb );
	let mbitem: multiboarditem;

	// Loop over rows, using 1-based index

	while ( true ) {

		curRow = curRow + 1;
		if ( curRow > numRows ) break;

		// Apply setting to the requested row, or all rows (if row is 0)

		if ( row === 0 || row === curRow ) {

			// Loop over columns, using 1-based index
			curCol = 0;

			while ( true ) {

				curCol = curCol + 1;
				if ( curCol > numCols ) break;

				// Apply setting to the requested column, or all columns (if col is 0)

				if ( col === 0 || col === curCol ) {

					mbitem = MultiboardGetItem( mb, curRow - 1, curCol - 1 );
					MultiboardSetItemValueColor( mbitem, PercentTo255( red ), PercentTo255( green ), PercentTo255( blue ), PercentTo255( 100 - transparency ) );
					MultiboardReleaseItem( mbitem );

				}

			}

		}

	}

};

// ===========================================================================
export const MultiboardSetItemWidthBJ = ( mb: multiboard, col: number, row: number, width: number ): void => {

	let curRow = 0;
	let curCol = 0;
	const numRows = MultiboardGetRowCount( mb );
	const numCols = MultiboardGetColumnCount( mb );
	let mbitem: multiboarditem;

	// Loop over rows, using 1-based index

	while ( true ) {

		curRow = curRow + 1;
		if ( curRow > numRows ) break;

		// Apply setting to the requested row, or all rows (if row is 0)

		if ( row === 0 || row === curRow ) {

			// Loop over columns, using 1-based index
			curCol = 0;

			while ( true ) {

				curCol = curCol + 1;
				if ( curCol > numCols ) break;

				// Apply setting to the requested column, or all columns (if col is 0)

				if ( col === 0 || col === curCol ) {

					mbitem = MultiboardGetItem( mb, curRow - 1, curCol - 1 );
					MultiboardSetItemWidth( mbitem, width / 100 );
					MultiboardReleaseItem( mbitem );

				}

			}

		}

	}

};

// ===========================================================================
export const MultiboardSetItemIconBJ = ( mb: multiboard, col: number, row: number, iconFileName: string ): void => {

	let curRow = 0;
	let curCol = 0;
	const numRows = MultiboardGetRowCount( mb );
	const numCols = MultiboardGetColumnCount( mb );
	let mbitem: multiboarditem;

	// Loop over rows, using 1-based index

	while ( true ) {

		curRow = curRow + 1;
		if ( curRow > numRows ) break;

		// Apply setting to the requested row, or all rows (if row is 0)

		if ( row === 0 || row === curRow ) {

			// Loop over columns, using 1-based index
			curCol = 0;

			while ( true ) {

				curCol = curCol + 1;
				if ( curCol > numCols ) break;

				// Apply setting to the requested column, or all columns (if col is 0)

				if ( col === 0 || col === curCol ) {

					mbitem = MultiboardGetItem( mb, curRow - 1, curCol - 1 );
					MultiboardSetItemIcon( mbitem, iconFileName );
					MultiboardReleaseItem( mbitem );

				}

			}

		}

	}

};

// ***************************************************************************
// *
// *  Text Tag Utility Functions
// *
// ***************************************************************************

// ===========================================================================
// Scale the font size linearly such that size 10 equates to height 0.023.
// Screen-relative font heights are harder to grasp and than font sizes.
//
export const TextTagSize2Height = ( size: number ): number => size * 0.023 / 10;

// ===========================================================================
// Scale the speed linearly such that speed 128 equates to 0.071.
// Screen-relative speeds are hard to grasp.
//
export const TextTagSpeed2Velocity = ( speed: number ): number => speed * 0.071 / 128;

// ===========================================================================
export const SetTextTagColorBJ = ( tt: texttag, red: number, green: number, blue: number, transparency: number ): void => {

	SetTextTagColor( tt, PercentTo255( red ), PercentTo255( green ), PercentTo255( blue ), PercentTo255( 100 - transparency ) );

};

// ===========================================================================
export const SetTextTagVelocityBJ = ( tt: texttag, speed: number, angle: number ): void => {

	const vel = TextTagSpeed2Velocity( speed );
	const xvel = vel * Cos( angle * bj_DEGTORAD );
	const yvel = vel * Sin( angle * bj_DEGTORAD );

	SetTextTagVelocity( tt, xvel, yvel );

};

// ===========================================================================
export const SetTextTagTextBJ = ( tt: texttag, s: string, size: number ): void => {

	const textHeight = TextTagSize2Height( size );

	SetTextTagText( tt, s, textHeight );

};

// ===========================================================================
export const SetTextTagPosBJ = ( tt: texttag, loc: location, zOffset: number ): void => {

	SetTextTagPos( tt, GetLocationX( loc ), GetLocationY( loc ), zOffset );

};

// ===========================================================================
export const SetTextTagPosUnitBJ = ( tt: texttag, whichUnit: unit, zOffset: number ): void => {

	SetTextTagPosUnit( tt, whichUnit, zOffset );

};

// ===========================================================================
export const SetTextTagSuspendedBJ = ( tt: texttag, flag: boolean ): void => {

	SetTextTagSuspended( tt, flag );

};

// ===========================================================================
export const SetTextTagPermanentBJ = ( tt: texttag, flag: boolean ): void => {

	SetTextTagPermanent( tt, flag );

};

// ===========================================================================
export const SetTextTagAgeBJ = ( tt: texttag, age: number ): void => {

	SetTextTagAge( tt, age );

};

// ===========================================================================
export const SetTextTagLifespanBJ = ( tt: texttag, lifespan: number ): void => {

	SetTextTagLifespan( tt, lifespan );

};

// ===========================================================================
export const SetTextTagFadepointBJ = ( tt: texttag, fadepoint: number ): void => {

	SetTextTagFadepoint( tt, fadepoint );

};

// ===========================================================================
export const CreateTextTagLocBJ = ( s: string, loc: location, zOffset: number, size: number, red: number, green: number, blue: number, transparency: number ): texttag => {

	bj_lastCreatedTextTag = CreateTextTag();
	SetTextTagTextBJ( bj_lastCreatedTextTag, s, size );
	SetTextTagPosBJ( bj_lastCreatedTextTag, loc, zOffset );
	SetTextTagColorBJ( bj_lastCreatedTextTag, red, green, blue, transparency );

	return bj_lastCreatedTextTag;

};

// ===========================================================================
export const CreateTextTagUnitBJ = ( s: string, whichUnit: unit, zOffset: number, size: number, red: number, green: number, blue: number, transparency: number ): texttag => {

	bj_lastCreatedTextTag = CreateTextTag();
	SetTextTagTextBJ( bj_lastCreatedTextTag, s, size );
	SetTextTagPosUnitBJ( bj_lastCreatedTextTag, whichUnit, zOffset );
	SetTextTagColorBJ( bj_lastCreatedTextTag, red, green, blue, transparency );

	return bj_lastCreatedTextTag;

};

// ===========================================================================
export const DestroyTextTagBJ = ( tt: texttag ): void => {

	DestroyTextTag( tt );

};

// ===========================================================================
export const ShowTextTagForceBJ = ( show: boolean, tt: texttag, whichForce: force ): void => {

	if ( IsPlayerInForce( GetLocalPlayer(), whichForce ) )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		SetTextTagVisibility( tt, show );

};

// ===========================================================================
export const GetLastCreatedTextTag = (): texttag => bj_lastCreatedTextTag;

// ***************************************************************************
// *
// *  Cinematic Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const PauseGameOn = (): void => {

	PauseGame( true );

};

// ===========================================================================
export const PauseGameOff = (): void => {

	PauseGame( false );

};

// ===========================================================================
export const SetUserControlForceOn = ( whichForce: force ): void => {

	if ( IsPlayerInForce( GetLocalPlayer(), whichForce ) )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		EnableUserControl( true );

};

// ===========================================================================
export const SetUserControlForceOff = ( whichForce: force ): void => {

	if ( IsPlayerInForce( GetLocalPlayer(), whichForce ) )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		EnableUserControl( false );

};

// ===========================================================================
export const ShowInterfaceForceOn = ( whichForce: force, fadeDuration: number ): void => {

	if ( IsPlayerInForce( GetLocalPlayer(), whichForce ) )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		ShowInterface( true, fadeDuration );

};

// ===========================================================================
export const ShowInterfaceForceOff = ( whichForce: force, fadeDuration: number ): void => {

	if ( IsPlayerInForce( GetLocalPlayer(), whichForce ) )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		ShowInterface( false, fadeDuration );

};

// ===========================================================================
export const PingMinimapForForce = ( whichForce: force, x: number, y: number, duration: number ): void => {

	if ( IsPlayerInForce( GetLocalPlayer(), whichForce ) )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		PingMinimap( x, y, duration );
		// call StartSound(bj_pingMinimapSound)

};

// ===========================================================================
export const PingMinimapLocForForce = ( whichForce: force, loc: location, duration: number ): void => {

	PingMinimapForForce( whichForce, GetLocationX( loc ), GetLocationY( loc ), duration );

};

// ===========================================================================
export const PingMinimapForPlayer = ( whichPlayer: player, x: number, y: number, duration: number ): void => {

	if ( GetLocalPlayer() === whichPlayer )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		PingMinimap( x, y, duration );
		// call StartSound(bj_pingMinimapSound)

};

// ===========================================================================
export const PingMinimapLocForPlayer = ( whichPlayer: player, loc: location, duration: number ): void => {

	PingMinimapForPlayer( whichPlayer, GetLocationX( loc ), GetLocationY( loc ), duration );

};

// ===========================================================================
export const PingMinimapForForceEx = ( whichForce: force, x: number, y: number, duration: number, style: number, red: number, green: number, blue: number ): void => {

	let red255 = PercentTo255( red );
	const green255 = PercentTo255( green );
	const blue255 = PercentTo255( blue );

	if ( IsPlayerInForce( GetLocalPlayer(), whichForce ) ) {

		// Use only local code (no net traffic) within this block to avoid desyncs.

		// Prevent 100% red simple and flashy pings, as they become "attack" pings.

		if ( red255 === 255 && green255 === 0 && blue255 === 0 )

			red255 = 254;

		if ( style === bj_MINIMAPPINGSTYLE_SIMPLE )

			PingMinimapEx( x, y, duration, red255, green255, blue255, false );

		else if ( style === bj_MINIMAPPINGSTYLE_FLASHY )

			PingMinimapEx( x, y, duration, red255, green255, blue255, true );

		else if ( style === bj_MINIMAPPINGSTYLE_ATTACK )

			PingMinimapEx( x, y, duration, 255, 0, 0, false );

		else {

			// Unrecognized ping style - ignore the request.

		}

		// call StartSound(bj_pingMinimapSound)

	}

};

// ===========================================================================
export const PingMinimapLocForForceEx = ( whichForce: force, loc: location, duration: number, style: number, red: number, green: number, blue: number ): void => {

	PingMinimapForForceEx( whichForce, GetLocationX( loc ), GetLocationY( loc ), duration, style, red, green, blue );

};

// ===========================================================================
export const EnableWorldFogBoundaryBJ = ( enable: boolean, f: force ): void => {

	if ( IsPlayerInForce( GetLocalPlayer(), f ) )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		EnableWorldFogBoundary( enable );

};

// ===========================================================================
export const EnableOcclusionBJ = ( enable: boolean, f: force ): void => {

	if ( IsPlayerInForce( GetLocalPlayer(), f ) )

		// Use only local code (no net traffic) within this block to avoid desyncs.
		EnableOcclusion( enable );

};

// ***************************************************************************
// *
// *  Cinematic Transmission Utility Functions
// *
// ***************************************************************************

// ===========================================================================
// If cancelled, stop the sound and end the cinematic scene.
//
export const CancelCineSceneBJ = (): void => {

	StopSoundBJ( bj_cineSceneLastSound, true );
	EndCinematicScene();

};

// ===========================================================================
// Init a trigger to listen for END_CINEMATIC events and respond to them if
// a cinematic scene is in progress.  For performance reasons, this should
// only be called once a cinematic scene has been started, so that maps
// lacking such scenes do not bother to register for these events.
//
export const TryInitCinematicBehaviorBJ = (): void => {

	let index: number;

	if ( bj_cineSceneBeingSkipped === null ) {

		bj_cineSceneBeingSkipped = CreateTrigger();
		index = 0;

		while ( true ) {

			TriggerRegisterPlayerEvent( bj_cineSceneBeingSkipped, Player( index ), EVENT_PLAYER_END_CINEMATIC );
			index = index + 1;
			if ( index === bj_MAX_PLAYERS ) break;

		}

		TriggerAddAction( bj_cineSceneBeingSkipped, CancelCineSceneBJ );

	}

};

// ===========================================================================
export const SetCinematicSceneBJ = ( soundHandle: sound, portraitUnitId: number, color: playercolor, speakerTitle: string, text: string, sceneDuration: number, voiceoverDuration: number ): void => {

	bj_cineSceneLastSound = soundHandle;
	PlaySoundBJ( soundHandle );
	SetCinematicScene( portraitUnitId, color, speakerTitle, text, sceneDuration, voiceoverDuration );

};

// ===========================================================================
export const GetTransmissionDuration = ( soundHandle: sound, timeType: number, timeVal: number ): number => {

	let duration: number;

	if ( timeType === bj_TIMETYPE_ADD )

		duration = GetSoundDurationBJ( soundHandle ) + timeVal;

	else if ( timeType === bj_TIMETYPE_SET )

		duration = timeVal;

	else if ( timeType === bj_TIMETYPE_SUB )

		duration = GetSoundDurationBJ( soundHandle ) - timeVal;

	else

		// Unrecognized timeType - ignore timeVal.
		duration = GetSoundDurationBJ( soundHandle );

	// Make sure we have a non-negative duration.

	if ( duration < 0 )

		duration = 0;

	return duration;

};

// ===========================================================================
export const WaitTransmissionDuration = ( soundHandle: sound, timeType: number, timeVal: number ): void => {

	if ( timeType === bj_TIMETYPE_SET )

		// If we have a static duration wait, just perform the wait.
		TriggerSleepAction( timeVal );

	else if ( soundHandle === null )

		// If the sound does not exist, perform a default length wait.
		TriggerSleepAction( bj_NOTHING_SOUND_DURATION );

	else if ( timeType === bj_TIMETYPE_SUB )

		// If the transmission is cutting off the sound, wait for the sound
		// to be mostly finished.
		WaitForSoundBJ( soundHandle, timeVal );

	else if ( timeType === bj_TIMETYPE_ADD ) {

		// If the transmission is extending beyond the sound's length, wait
		// for it to finish, and then wait the additional time.
		WaitForSoundBJ( soundHandle, 0 );
		TriggerSleepAction( timeVal );

	} else {

		// Unrecognized timeType - ignore.

	}

};

// ===========================================================================
export const DoTransmissionBasicsXYBJ = ( unitId: number, color: playercolor, x: number, y: number, soundHandle: sound, unitName: string, message: string, duration: number ): void => {

	SetCinematicSceneBJ( soundHandle, unitId, color, unitName, message, duration + bj_TRANSMISSION_PORT_HANGTIME, duration );

	if ( unitId !== 0 )

		PingMinimap( x, y, bj_TRANSMISSION_PING_TIME );
		// call SetCameraQuickPosition(x, y)

};

// ===========================================================================
// Display a text message to a Player Group with an accompanying sound,
// portrait, speech indicator, and all that good stuff.
//   - Query duration of sound
//   - Play sound
//   - Display text message for duration
//   - Display animating portrait for duration
//   - Display a speech indicator for the unit
//   - Ping the minimap
//
export const TransmissionFromUnitWithNameBJ = ( toForce: force, whichUnit: unit, unitName: string, soundHandle: sound, message: string, timeType: number, timeVal: number, wait: boolean ): void => {

	TryInitCinematicBehaviorBJ();

	// Ensure that the time value is non-negative.
	timeVal = RMaxBJ( timeVal, 0 );

	bj_lastTransmissionDuration = GetTransmissionDuration( soundHandle, timeType, timeVal );
	bj_lastPlayedSound = soundHandle;

	if ( IsPlayerInForce( GetLocalPlayer(), toForce ) )

	// Use only local code (no net traffic) within this block to avoid desyncs.

		if ( whichUnit === null ) {

			// If the unit reference is invalid, send the transmission from the center of the map with no portrait.
			DoTransmissionBasicsXYBJ( 0, PLAYER_COLOR_RED, 0, 0, soundHandle, unitName, message, bj_lastTransmissionDuration );

		} else {

			DoTransmissionBasicsXYBJ( GetUnitTypeId( whichUnit ), GetPlayerColor( GetOwningPlayer( whichUnit ) ), GetUnitX( whichUnit ), GetUnitY( whichUnit ), soundHandle, unitName, message, bj_lastTransmissionDuration );

			if ( ! IsUnitHidden( whichUnit ) )

				UnitAddIndicator( whichUnit, bj_TRANSMISSION_IND_RED, bj_TRANSMISSION_IND_BLUE, bj_TRANSMISSION_IND_GREEN, bj_TRANSMISSION_IND_ALPHA );

		}

	if ( wait && bj_lastTransmissionDuration > 0 )

		// call TriggerSleepAction(bj_lastTransmissionDuration)
		WaitTransmissionDuration( soundHandle, timeType, timeVal );

};

// ===========================================================================
// This operates like TransmissionFromUnitWithNameBJ, but for a unit type
// rather than a unit instance.  As such, no speech indicator is employed.
//
export const TransmissionFromUnitTypeWithNameBJ = ( toForce: force, fromPlayer: player, unitId: number, unitName: string, loc: location, soundHandle: sound, message: string, timeType: number, timeVal: number, wait: boolean ): void => {

	TryInitCinematicBehaviorBJ();

	// Ensure that the time value is non-negative.
	timeVal = RMaxBJ( timeVal, 0 );

	bj_lastTransmissionDuration = GetTransmissionDuration( soundHandle, timeType, timeVal );
	bj_lastPlayedSound = soundHandle;

	if ( IsPlayerInForce( GetLocalPlayer(), toForce ) )

	// Use only local code (no net traffic) within this block to avoid desyncs.

		DoTransmissionBasicsXYBJ( unitId, GetPlayerColor( fromPlayer ), GetLocationX( loc ), GetLocationY( loc ), soundHandle, unitName, message, bj_lastTransmissionDuration );

	if ( wait && bj_lastTransmissionDuration > 0 )

		// call TriggerSleepAction(bj_lastTransmissionDuration)
		WaitTransmissionDuration( soundHandle, timeType, timeVal );

};

// ===========================================================================
export const GetLastTransmissionDurationBJ = (): number => bj_lastTransmissionDuration;

// ===========================================================================
export const ForceCinematicSubtitlesBJ = ( flag: boolean ): void => {

	ForceCinematicSubtitles( flag );

};

// ***************************************************************************
// *
// *  Cinematic Mode Utility Functions
// *
// ***************************************************************************

// ===========================================================================
// Makes many common UI settings changes at once, for use when beginning and
// ending cinematic sequences.  Note that some affects apply to all players,
// such as game speed.  This is unavoidable.
//   - Clear the screen of text messages
//   - Hide interface UI (letterbox mode)
//   - Hide game messages (ally under attack, etc.)
//   - Disable user control
//   - Disable occlusion
//   - Set game speed (for all players)
//   - Lock game speed (for all players)
//   - Disable black mask (for all players)
//   - Disable fog of war (for all players)
//   - Disable world boundary fog (for all players)
//   - Dim non-speech sound channels
//   - End any outstanding music themes
//   - Fix the random seed to a set value
//   - Reset the camera smoothing factor
//
export const CinematicModeExBJ = ( cineMode: boolean, forForce: force, interfaceFadeTime: number ): void => {

	// If the game hasn't started yet, perform interface fades immediately

	if ( ! bj_gameStarted )

		interfaceFadeTime = 0;

	if ( cineMode ) {

		// Save the UI state so that we can restore it later.

		if ( ! bj_cineModeAlreadyIn ) {

			bj_cineModeAlreadyIn = true;
			bj_cineModePriorSpeed = GetGameSpeed();
			bj_cineModePriorFogSetting = IsFogEnabled();
			bj_cineModePriorMaskSetting = IsFogMaskEnabled();
			bj_cineModePriorDawnDusk = IsDawnDuskEnabled();
			bj_cineModeSavedSeed = GetRandomInt( 0, 1000000 );

		}

		// Perform local changes

		if ( IsPlayerInForce( GetLocalPlayer(), forForce ) ) {

			// Use only local code (no net traffic) within this block to avoid desyncs.
			ClearTextMessages();
			ShowInterface( false, interfaceFadeTime );
			EnableUserControl( false );
			EnableOcclusion( false );
			SetCineModeVolumeGroupsBJ();

		}

		// Perform global changes
		SetGameSpeed( bj_CINEMODE_GAMESPEED );
		SetMapFlag( MAP_LOCK_SPEED, true );
		FogMaskEnable( false );
		FogEnable( false );
		EnableWorldFogBoundary( false );
		EnableDawnDusk( false );

		// Use a fixed random seed, so that cinematics play consistently.
		SetRandomSeed( 0 );

	} else {

		bj_cineModeAlreadyIn = false;

		// Perform local changes

		if ( IsPlayerInForce( GetLocalPlayer(), forForce ) ) {

			// Use only local code (no net traffic) within this block to avoid desyncs.
			ShowInterface( true, interfaceFadeTime );
			EnableUserControl( true );
			EnableOcclusion( true );
			VolumeGroupReset();
			EndThematicMusic();
			CameraResetSmoothingFactorBJ();

		}

		// Perform global changes
		SetMapFlag( MAP_LOCK_SPEED, false );
		SetGameSpeed( bj_cineModePriorSpeed );
		FogMaskEnable( bj_cineModePriorMaskSetting );
		FogEnable( bj_cineModePriorFogSetting );
		EnableWorldFogBoundary( true );
		EnableDawnDusk( bj_cineModePriorDawnDusk );
		SetRandomSeed( bj_cineModeSavedSeed );

	}

};

// ===========================================================================
export const CinematicModeBJ = ( cineMode: boolean, forForce: force ): void => {

	CinematicModeExBJ( cineMode, forForce, bj_CINEMODE_INTERFACEFADE );

};

// ***************************************************************************
// *
// *  Cinematic Filter Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const DisplayCineFilterBJ = ( flag: boolean ): void => {

	DisplayCineFilter( flag );

};

// ===========================================================================
export const CinematicFadeCommonBJ = ( red: number, green: number, blue: number, duration: number, tex: string, startTrans: number, endTrans: number ): void => {

	if ( duration === 0 )

		// If the fade is instant, use the same starting and ending values,
		// so that we effectively do a set rather than a fade.
		startTrans = endTrans;

	EnableUserUI( false );
	SetCineFilterTexture( tex );
	SetCineFilterBlendMode( BLEND_MODE_BLEND );
	SetCineFilterTexMapFlags( TEXMAP_FLAG_NONE );
	SetCineFilterStartUV( 0, 0, 1, 1 );
	SetCineFilterEndUV( 0, 0, 1, 1 );
	SetCineFilterStartColor( PercentTo255( red ), PercentTo255( green ), PercentTo255( blue ), PercentTo255( 100 - startTrans ) );
	SetCineFilterEndColor( PercentTo255( red ), PercentTo255( green ), PercentTo255( blue ), PercentTo255( 100 - endTrans ) );
	SetCineFilterDuration( duration );
	DisplayCineFilter( true );

};

// ===========================================================================
export const FinishCinematicFadeBJ = (): void => {

	if ( bj_cineFadeFinishTimer ) DestroyTimer( bj_cineFadeFinishTimer );
	bj_cineFadeFinishTimer = null;
	DisplayCineFilter( false );
	EnableUserUI( true );

};

// ===========================================================================
export const FinishCinematicFadeAfterBJ = ( duration: number ): void => {

	// Create a timer to end the cinematic fade.
	bj_cineFadeFinishTimer = CreateTimer();
	TimerStart( bj_cineFadeFinishTimer, duration, false, FinishCinematicFadeBJ );

};

// ===========================================================================
export const ContinueCinematicFadeBJ = (): void => {

	DestroyTimer( bj_cineFadeContinueTimer );
	bj_cineFadeContinueTimer = null;
	CinematicFadeCommonBJ( bj_cineFadeContinueRed, bj_cineFadeContinueGreen, bj_cineFadeContinueBlue, bj_cineFadeContinueDuration, bj_cineFadeContinueTex, bj_cineFadeContinueTrans, 100 );

};

// ===========================================================================
export const ContinueCinematicFadeAfterBJ = ( duration: number, red: number, green: number, blue: number, trans: number, tex: string ): void => {

	bj_cineFadeContinueRed = red;
	bj_cineFadeContinueGreen = green;
	bj_cineFadeContinueBlue = blue;
	bj_cineFadeContinueTrans = trans;
	bj_cineFadeContinueDuration = duration;
	bj_cineFadeContinueTex = tex;

	// Create a timer to continue the cinematic fade.
	bj_cineFadeContinueTimer = CreateTimer();
	TimerStart( bj_cineFadeContinueTimer, duration, false, ContinueCinematicFadeBJ );

};

// ===========================================================================
export const AbortCinematicFadeBJ = (): void => {

	if ( bj_cineFadeContinueTimer !== null )

		DestroyTimer( bj_cineFadeContinueTimer );

	if ( bj_cineFadeFinishTimer !== null )

		DestroyTimer( bj_cineFadeFinishTimer );

};

// ===========================================================================
export const CinematicFadeBJ = ( fadetype: number, duration: number, tex: string, red: number, green: number, blue: number, trans: number ): void => {

	if ( fadetype === bj_CINEFADETYPE_FADEOUT ) {

		// Fade out to the requested color.
		AbortCinematicFadeBJ();
		CinematicFadeCommonBJ( red, green, blue, duration, tex, 100, trans );

	} else if ( fadetype === bj_CINEFADETYPE_FADEIN ) {

		// Fade in from the requested color.
		AbortCinematicFadeBJ();
		CinematicFadeCommonBJ( red, green, blue, duration, tex, trans, 100 );
		FinishCinematicFadeAfterBJ( duration );

	} else if ( fadetype === bj_CINEFADETYPE_FADEOUTIN ) {

		// Fade out to the requested color, and then fade back in from it.

		if ( duration > 0 ) {

			AbortCinematicFadeBJ();
			CinematicFadeCommonBJ( red, green, blue, duration * 0.5, tex, 100, trans );
			ContinueCinematicFadeAfterBJ( duration * 0.5, red, green, blue, trans, tex );
			FinishCinematicFadeAfterBJ( duration );

		}

	} else {

		// Unrecognized fadetype - ignore the request.

	}

};

// ===========================================================================
export const CinematicFilterGenericBJ = ( duration: number, bmode: blendmode, tex: string, red0: number, green0: number, blue0: number, trans0: number, red1: number, green1: number, blue1: number, trans1: number ): void => {

	AbortCinematicFadeBJ();
	SetCineFilterTexture( tex );
	SetCineFilterBlendMode( bmode );
	SetCineFilterTexMapFlags( TEXMAP_FLAG_NONE );
	SetCineFilterStartUV( 0, 0, 1, 1 );
	SetCineFilterEndUV( 0, 0, 1, 1 );
	SetCineFilterStartColor( PercentTo255( red0 ), PercentTo255( green0 ), PercentTo255( blue0 ), PercentTo255( 100 - trans0 ) );
	SetCineFilterEndColor( PercentTo255( red1 ), PercentTo255( green1 ), PercentTo255( blue1 ), PercentTo255( 100 - trans1 ) );
	SetCineFilterDuration( duration );
	DisplayCineFilter( true );

};

// ***************************************************************************
// *
// *  Rescuable Unit Utility Functions
// *
// ***************************************************************************

// ===========================================================================
// Rescues a unit for a player.  This performs the default rescue behavior,
// including a rescue sound, flashing selection circle, ownership change,
// and optionally a unit color change.
//
export const RescueUnitBJ = ( whichUnit: unit, rescuer: player, changeColor: boolean ): void => {

	if ( IsUnitDeadBJ( whichUnit ) || GetOwningPlayer( whichUnit ) === rescuer )

		return;

	StartSound( bj_rescueSound );
	SetUnitOwner( whichUnit, rescuer, changeColor );
	UnitAddIndicator( whichUnit, 0, 255, 0, 255 );
	PingMinimapForPlayer( rescuer, GetUnitX( whichUnit ), GetUnitY( whichUnit ), bj_RESCUE_PING_TIME );

};

// ===========================================================================
export const TriggerActionUnitRescuedBJ = (): void => {

	const theUnit = GetTriggerUnit();

	if ( IsUnitType( theUnit, UNIT_TYPE_STRUCTURE ) )

		RescueUnitBJ( theUnit, GetOwningPlayer( GetRescuer() ), bj_rescueChangeColorBldg );

	else

		RescueUnitBJ( theUnit, GetOwningPlayer( GetRescuer() ), bj_rescueChangeColorUnit );

};

// ===========================================================================
// Attempt to init triggers for default rescue behavior.  For performance
// reasons, this should only be attempted if a player is set to Rescuable,
// or if a specific unit is thus flagged.
//
export const TryInitRescuableTriggersBJ = (): void => {

	let index: number;

	if ( bj_rescueUnitBehavior === null ) {

		bj_rescueUnitBehavior = CreateTrigger();
		index = 0;

		while ( true ) {

			TriggerRegisterPlayerUnitEvent( bj_rescueUnitBehavior, Player( index ), EVENT_PLAYER_UNIT_RESCUED, null );
			index = index + 1;
			if ( index === bj_MAX_PLAYER_SLOTS ) break;

		}

		TriggerAddAction( bj_rescueUnitBehavior, TriggerActionUnitRescuedBJ );

	}

};

// ===========================================================================
// Determines whether or not rescued units automatically change color upon
// being rescued.
//
export const SetRescueUnitColorChangeBJ = ( changeColor: boolean ): void => {

	bj_rescueChangeColorUnit = changeColor;

};

// ===========================================================================
// Determines whether or not rescued buildings automatically change color
// upon being rescued.
//
export const SetRescueBuildingColorChangeBJ = ( changeColor: boolean ): void => {

	bj_rescueChangeColorBldg = changeColor;

};

// ===========================================================================
export const MakeUnitRescuableToForceBJEnum = (): void => {

	TryInitRescuableTriggersBJ();
	SetUnitRescuable( bj_makeUnitRescuableUnit, GetEnumPlayer(), bj_makeUnitRescuableFlag );

};

// ===========================================================================
export const MakeUnitRescuableToForceBJ = ( whichUnit: unit, isRescuable: boolean, whichForce: force ): void => {

	// Flag the unit as rescuable/unrescuable for the appropriate players.
	bj_makeUnitRescuableUnit = whichUnit;
	bj_makeUnitRescuableFlag = isRescuable;
	ForForce( whichForce, MakeUnitRescuableToForceBJEnum );

};

// ===========================================================================
export const InitRescuableBehaviorBJ = (): void => {

	let index: number;

	index = 0;

	while ( true ) {

		// If at least one player slot is "Rescuable"-controlled, init the
		// rescue behavior triggers.

		if ( GetPlayerController( Player( index ) ) === MAP_CONTROL_RESCUABLE ) {

			TryInitRescuableTriggersBJ();
			return;

		}

		index = index + 1;
		if ( index === bj_MAX_PLAYERS ) break;

	}

};

// ***************************************************************************
// *
// *  Research and Upgrade Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const SetPlayerTechResearchedSwap = ( techid: number, levels: number, whichPlayer: player ): void => {

	SetPlayerTechResearched( whichPlayer, techid, levels );

};

// ===========================================================================
export const SetPlayerTechMaxAllowedSwap = ( techid: number, maximum: number, whichPlayer: player ): void => {

	SetPlayerTechMaxAllowed( whichPlayer, techid, maximum );

};

// ===========================================================================
export const SetPlayerMaxHeroesAllowed = ( maximum: number, whichPlayer: player ): void => {

	SetPlayerTechMaxAllowed( whichPlayer, FourCC( "HERO" ), maximum );

};

// ===========================================================================
export const GetPlayerTechCountSimple = ( techid: number, whichPlayer: player ): number => GetPlayerTechCount( whichPlayer, techid, true );

// ===========================================================================
export const GetPlayerTechMaxAllowedSwap = ( techid: number, whichPlayer: player ): number => GetPlayerTechMaxAllowed( whichPlayer, techid );

// ===========================================================================
export const SetPlayerAbilityAvailableBJ = ( avail: boolean, abilid: number, whichPlayer: player ): void => {

	SetPlayerAbilityAvailable( whichPlayer, abilid, avail );

};

// ***************************************************************************
// *
// *  Campaign Utility Functions
// *
// ***************************************************************************

export const SetCampaignMenuRaceBJ = ( campaignNumber: number ): void => {

	if ( campaignNumber === bj_CAMPAIGN_INDEX_T )

		SetCampaignMenuRace( RACE_OTHER );

	else if ( campaignNumber === bj_CAMPAIGN_INDEX_H )

		SetCampaignMenuRace( RACE_HUMAN );

	else if ( campaignNumber === bj_CAMPAIGN_INDEX_U )

		SetCampaignMenuRace( RACE_UNDEAD );

	else if ( campaignNumber === bj_CAMPAIGN_INDEX_O )

		SetCampaignMenuRace( RACE_ORC );

	else if ( campaignNumber === bj_CAMPAIGN_INDEX_N )

		SetCampaignMenuRace( RACE_NIGHTELF );

	else if ( campaignNumber === bj_CAMPAIGN_INDEX_XN )

		SetCampaignMenuRaceEx( bj_CAMPAIGN_OFFSET_XN );

	else if ( campaignNumber === bj_CAMPAIGN_INDEX_XH )

		SetCampaignMenuRaceEx( bj_CAMPAIGN_OFFSET_XH );

	else if ( campaignNumber === bj_CAMPAIGN_INDEX_XU )

		SetCampaignMenuRaceEx( bj_CAMPAIGN_OFFSET_XU );

	else if ( campaignNumber === bj_CAMPAIGN_INDEX_XO )

		SetCampaignMenuRaceEx( bj_CAMPAIGN_OFFSET_XO );

	else {

		// Unrecognized campaign - ignore the request

	}

};

// ===========================================================================
// Converts a single campaign mission designation into campaign and mission
// numbers.  The 1000's digit is considered the campaign index, and the 1's
// digit is considered the mission index within that campaign.  This is done
// so that the trigger for this can use a single drop-down to list all of
// the campaign missions.
//
export const SetMissionAvailableBJ = ( available: boolean, missionIndex: number ): void => {

	const campaignNumber = missionIndex / 1000;
	const missionNumber = missionIndex - campaignNumber * 1000;

	SetMissionAvailable( campaignNumber, missionNumber, available );

};

// ===========================================================================
export const SetCampaignAvailableBJ = ( available: boolean, campaignNumber: number ): void => {

	let campaignOffset: number;

	if ( campaignNumber === bj_CAMPAIGN_INDEX_H )

		SetTutorialCleared( true );

	if ( campaignNumber === bj_CAMPAIGN_INDEX_XN )

		campaignOffset = bj_CAMPAIGN_OFFSET_XN;

	else if ( campaignNumber === bj_CAMPAIGN_INDEX_XH )

		campaignOffset = bj_CAMPAIGN_OFFSET_XH;

	else if ( campaignNumber === bj_CAMPAIGN_INDEX_XU )

		campaignOffset = bj_CAMPAIGN_OFFSET_XU;

	else if ( campaignNumber === bj_CAMPAIGN_INDEX_XO )

		campaignOffset = bj_CAMPAIGN_OFFSET_XO;

	else

		campaignOffset = campaignNumber;

	SetCampaignAvailable( campaignOffset, available );
	SetCampaignMenuRaceBJ( campaignNumber );
	ForceCampaignSelectScreen();

};

// ===========================================================================
export const SetCinematicAvailableBJ = ( available: boolean, cinematicIndex: number ): void => {

	if ( cinematicIndex === bj_CINEMATICINDEX_TOP ) {

		SetOpCinematicAvailable( bj_CAMPAIGN_INDEX_T, available );
		PlayCinematic( "TutorialOp" );

	} else if ( cinematicIndex === bj_CINEMATICINDEX_HOP ) {

		SetOpCinematicAvailable( bj_CAMPAIGN_INDEX_H, available );
		PlayCinematic( "HumanOp" );

	} else if ( cinematicIndex === bj_CINEMATICINDEX_HED ) {

		SetEdCinematicAvailable( bj_CAMPAIGN_INDEX_H, available );
		PlayCinematic( "HumanEd" );

	} else if ( cinematicIndex === bj_CINEMATICINDEX_OOP ) {

		SetOpCinematicAvailable( bj_CAMPAIGN_INDEX_O, available );
		PlayCinematic( "OrcOp" );

	} else if ( cinematicIndex === bj_CINEMATICINDEX_OED ) {

		SetEdCinematicAvailable( bj_CAMPAIGN_INDEX_O, available );
		PlayCinematic( "OrcEd" );

	} else if ( cinematicIndex === bj_CINEMATICINDEX_UOP ) {

		SetEdCinematicAvailable( bj_CAMPAIGN_INDEX_U, available );
		PlayCinematic( "UndeadOp" );

	} else if ( cinematicIndex === bj_CINEMATICINDEX_UED ) {

		SetEdCinematicAvailable( bj_CAMPAIGN_INDEX_U, available );
		PlayCinematic( "UndeadEd" );

	} else if ( cinematicIndex === bj_CINEMATICINDEX_NOP ) {

		SetEdCinematicAvailable( bj_CAMPAIGN_INDEX_N, available );
		PlayCinematic( "NightElfOp" );

	} else if ( cinematicIndex === bj_CINEMATICINDEX_NED ) {

		SetEdCinematicAvailable( bj_CAMPAIGN_INDEX_N, available );
		PlayCinematic( "NightElfEd" );

	} else if ( cinematicIndex === bj_CINEMATICINDEX_XOP ) {

		SetOpCinematicAvailable( bj_CAMPAIGN_OFFSET_XN, available );
		PlayCinematic( "IntroX" );

	} else if ( cinematicIndex === bj_CINEMATICINDEX_XED ) {

		SetEdCinematicAvailable( bj_CAMPAIGN_OFFSET_XU, available );
		PlayCinematic( "OutroX" );

	} else {

		// Unrecognized cinematic - ignore the request.

	}

};

// ===========================================================================
export const InitGameCacheBJ = ( campaignFile: string ): gamecache => {

	bj_lastCreatedGameCache = InitGameCache( campaignFile );
	return bj_lastCreatedGameCache;

};

// ===========================================================================
export const SaveGameCacheBJ = ( cache: gamecache ): boolean => SaveGameCache( cache );

// ===========================================================================
export const GetLastCreatedGameCacheBJ = (): gamecache => bj_lastCreatedGameCache;

// ===========================================================================
export const InitHashtableBJ = (): hashtable => {

	bj_lastCreatedHashtable = InitHashtable();
	return bj_lastCreatedHashtable;

};

// ===========================================================================
export const GetLastCreatedHashtableBJ = (): hashtable => bj_lastCreatedHashtable;

// ===========================================================================
export const StoreRealBJ = ( value: number, key: string, missionKey: string, cache: gamecache ): void => {

	StoreReal( cache, missionKey, key, value );

};

// ===========================================================================
export const StoreIntegerBJ = ( value: number, key: string, missionKey: string, cache: gamecache ): void => {

	StoreInteger( cache, missionKey, key, value );

};

// ===========================================================================
export const StoreBooleanBJ = ( value: boolean, key: string, missionKey: string, cache: gamecache ): void => {

	StoreBoolean( cache, missionKey, key, value );

};

// ===========================================================================
export const StoreStringBJ = ( value: string, key: string, missionKey: string, cache: gamecache ): boolean => StoreString( cache, missionKey, key, value );

// ===========================================================================
export const StoreUnitBJ = ( whichUnit: unit, key: string, missionKey: string, cache: gamecache ): boolean => StoreUnit( cache, missionKey, key, whichUnit );

// ===========================================================================
export const SaveRealBJ = ( value: number, key: number, missionKey: number, table: hashtable ): void => {

	SaveReal( table, missionKey, key, value );

};

// ===========================================================================
export const SaveIntegerBJ = ( value: number, key: number, missionKey: number, table: hashtable ): void => {

	SaveInteger( table, missionKey, key, value );

};

// ===========================================================================
export const SaveBooleanBJ = ( value: boolean, key: number, missionKey: number, table: hashtable ): void => {

	SaveBoolean( table, missionKey, key, value );

};

// ===========================================================================
export const SaveStringBJ = ( value: string, key: number, missionKey: number, table: hashtable ): boolean => SaveStr( table, missionKey, key, value );

// ===========================================================================
export const SavePlayerHandleBJ = ( whichPlayer: player, key: number, missionKey: number, table: hashtable ): boolean => SavePlayerHandle( table, missionKey, key, whichPlayer );

// ===========================================================================
export const SaveWidgetHandleBJ = ( whichWidget: widget, key: number, missionKey: number, table: hashtable ): boolean => SaveWidgetHandle( table, missionKey, key, whichWidget );

// ===========================================================================
export const SaveDestructableHandleBJ = ( whichDestructable: destructable, key: number, missionKey: number, table: hashtable ): boolean => SaveDestructableHandle( table, missionKey, key, whichDestructable );

// ===========================================================================
export const SaveItemHandleBJ = ( whichItem: item, key: number, missionKey: number, table: hashtable ): boolean => SaveItemHandle( table, missionKey, key, whichItem );

// ===========================================================================
export const SaveUnitHandleBJ = ( whichUnit: unit, key: number, missionKey: number, table: hashtable ): boolean => SaveUnitHandle( table, missionKey, key, whichUnit );

// ===========================================================================
export const SaveAbilityHandleBJ = ( whichAbility: ability, key: number, missionKey: number, table: hashtable ): boolean => SaveAbilityHandle( table, missionKey, key, whichAbility );

// ===========================================================================
export const SaveTimerHandleBJ = ( whichTimer: timer, key: number, missionKey: number, table: hashtable ): boolean => SaveTimerHandle( table, missionKey, key, whichTimer );

// ===========================================================================
export const SaveTriggerHandleBJ = ( whichTrigger: trigger, key: number, missionKey: number, table: hashtable ): boolean => SaveTriggerHandle( table, missionKey, key, whichTrigger );

// ===========================================================================
export const SaveTriggerConditionHandleBJ = ( whichTriggercondition: triggercondition, key: number, missionKey: number, table: hashtable ): boolean => SaveTriggerConditionHandle( table, missionKey, key, whichTriggercondition );

// ===========================================================================
export const SaveTriggerActionHandleBJ = ( whichTriggeraction: triggeraction, key: number, missionKey: number, table: hashtable ): boolean => SaveTriggerActionHandle( table, missionKey, key, whichTriggeraction );

// ===========================================================================
export const SaveTriggerEventHandleBJ = ( whichEvent: event, key: number, missionKey: number, table: hashtable ): boolean => SaveTriggerEventHandle( table, missionKey, key, whichEvent );

// ===========================================================================
export const SaveForceHandleBJ = ( whichForce: force, key: number, missionKey: number, table: hashtable ): boolean => SaveForceHandle( table, missionKey, key, whichForce );

// ===========================================================================
export const SaveGroupHandleBJ = ( whichGroup: group, key: number, missionKey: number, table: hashtable ): boolean => SaveGroupHandle( table, missionKey, key, whichGroup );

// ===========================================================================
export const SaveLocationHandleBJ = ( whichLocation: location, key: number, missionKey: number, table: hashtable ): boolean => SaveLocationHandle( table, missionKey, key, whichLocation );

// ===========================================================================
export const SaveRectHandleBJ = ( whichRect: rect, key: number, missionKey: number, table: hashtable ): boolean => SaveRectHandle( table, missionKey, key, whichRect );

// ===========================================================================
export const SaveBooleanExprHandleBJ = ( whichBoolexpr: boolexpr, key: number, missionKey: number, table: hashtable ): boolean => SaveBooleanExprHandle( table, missionKey, key, whichBoolexpr );

// ===========================================================================
export const SaveSoundHandleBJ = ( whichSound: sound, key: number, missionKey: number, table: hashtable ): boolean => SaveSoundHandle( table, missionKey, key, whichSound );

// ===========================================================================
export const SaveEffectHandleBJ = ( whichEffect: effect, key: number, missionKey: number, table: hashtable ): boolean => SaveEffectHandle( table, missionKey, key, whichEffect );

// ===========================================================================
export const SaveUnitPoolHandleBJ = ( whichUnitpool: unitpool, key: number, missionKey: number, table: hashtable ): boolean => SaveUnitPoolHandle( table, missionKey, key, whichUnitpool );

// ===========================================================================
export const SaveItemPoolHandleBJ = ( whichItempool: itempool, key: number, missionKey: number, table: hashtable ): boolean => SaveItemPoolHandle( table, missionKey, key, whichItempool );

// ===========================================================================
export const SaveQuestHandleBJ = ( whichQuest: quest, key: number, missionKey: number, table: hashtable ): boolean => SaveQuestHandle( table, missionKey, key, whichQuest );

// ===========================================================================
export const SaveQuestItemHandleBJ = ( whichQuestitem: questitem, key: number, missionKey: number, table: hashtable ): boolean => SaveQuestItemHandle( table, missionKey, key, whichQuestitem );

// ===========================================================================
export const SaveDefeatConditionHandleBJ = ( whichDefeatcondition: defeatcondition, key: number, missionKey: number, table: hashtable ): boolean => SaveDefeatConditionHandle( table, missionKey, key, whichDefeatcondition );

// ===========================================================================
export const SaveTimerDialogHandleBJ = ( whichTimerdialog: timerdialog, key: number, missionKey: number, table: hashtable ): boolean => SaveTimerDialogHandle( table, missionKey, key, whichTimerdialog );

// ===========================================================================
export const SaveLeaderboardHandleBJ = ( whichLeaderboard: leaderboard, key: number, missionKey: number, table: hashtable ): boolean => SaveLeaderboardHandle( table, missionKey, key, whichLeaderboard );

// ===========================================================================
export const SaveMultiboardHandleBJ = ( whichMultiboard: multiboard, key: number, missionKey: number, table: hashtable ): boolean => SaveMultiboardHandle( table, missionKey, key, whichMultiboard );

// ===========================================================================
export const SaveMultiboardItemHandleBJ = ( whichMultiboarditem: multiboarditem, key: number, missionKey: number, table: hashtable ): boolean => SaveMultiboardItemHandle( table, missionKey, key, whichMultiboarditem );

// ===========================================================================
export const SaveTrackableHandleBJ = ( whichTrackable: trackable, key: number, missionKey: number, table: hashtable ): boolean => SaveTrackableHandle( table, missionKey, key, whichTrackable );

// ===========================================================================
export const SaveDialogHandleBJ = ( whichDialog: dialog, key: number, missionKey: number, table: hashtable ): boolean => SaveDialogHandle( table, missionKey, key, whichDialog );

// ===========================================================================
export const SaveButtonHandleBJ = ( whichButton: button, key: number, missionKey: number, table: hashtable ): boolean => SaveButtonHandle( table, missionKey, key, whichButton );

// ===========================================================================
export const SaveTextTagHandleBJ = ( whichTexttag: texttag, key: number, missionKey: number, table: hashtable ): boolean => SaveTextTagHandle( table, missionKey, key, whichTexttag );

// ===========================================================================
export const SaveLightningHandleBJ = ( whichLightning: lightning, key: number, missionKey: number, table: hashtable ): boolean => SaveLightningHandle( table, missionKey, key, whichLightning );

// ===========================================================================
export const SaveImageHandleBJ = ( whichImage: image, key: number, missionKey: number, table: hashtable ): boolean => SaveImageHandle( table, missionKey, key, whichImage );

// ===========================================================================
export const SaveUbersplatHandleBJ = ( whichUbersplat: ubersplat, key: number, missionKey: number, table: hashtable ): boolean => SaveUbersplatHandle( table, missionKey, key, whichUbersplat );

// ===========================================================================
export const SaveRegionHandleBJ = ( whichRegion: region, key: number, missionKey: number, table: hashtable ): boolean => SaveRegionHandle( table, missionKey, key, whichRegion );

// ===========================================================================
export const SaveFogStateHandleBJ = ( whichFogState: fogstate, key: number, missionKey: number, table: hashtable ): boolean => SaveFogStateHandle( table, missionKey, key, whichFogState );

// ===========================================================================
export const SaveFogModifierHandleBJ = ( whichFogModifier: fogmodifier, key: number, missionKey: number, table: hashtable ): boolean => SaveFogModifierHandle( table, missionKey, key, whichFogModifier );

// ===========================================================================
export const SaveAgentHandleBJ = ( whichAgent: agent, key: number, missionKey: number, table: hashtable ): boolean => SaveAgentHandle( table, missionKey, key, whichAgent );

// ===========================================================================
export const SaveHashtableHandleBJ = ( whichHashtable: hashtable, key: number, missionKey: number, table: hashtable ): boolean => SaveHashtableHandle( table, missionKey, key, whichHashtable );

// ===========================================================================
export const GetStoredRealBJ = ( key: string, missionKey: string, cache: gamecache ): number =>

	// call SyncStoredReal(cache, missionKey, key)
	GetStoredReal( cache, missionKey, key )

;

// ===========================================================================
export const GetStoredIntegerBJ = ( key: string, missionKey: string, cache: gamecache ): number =>

	// call SyncStoredInteger(cache, missionKey, key)
	GetStoredInteger( cache, missionKey, key )

;

// ===========================================================================
export const GetStoredBooleanBJ = ( key: string, missionKey: string, cache: gamecache ): boolean =>

	// call SyncStoredBoolean(cache, missionKey, key)
	GetStoredBoolean( cache, missionKey, key )

;

// ===========================================================================
export const GetStoredStringBJ = ( key: string, missionKey: string, cache: gamecache ): string => {

	// call SyncStoredString(cache, missionKey, key)
	const s = GetStoredString( cache, missionKey, key );

	if ( s === null ) return "";
	return s;

};

// ===========================================================================
export const LoadRealBJ = ( key: number, missionKey: number, table: hashtable ): number =>

	// call SyncStoredReal(table, missionKey, key)
	LoadReal( table, missionKey, key )

;

// ===========================================================================
export const LoadIntegerBJ = ( key: number, missionKey: number, table: hashtable ): number =>

	// call SyncStoredInteger(table, missionKey, key)
	LoadInteger( table, missionKey, key )

;

// ===========================================================================
export const LoadBooleanBJ = ( key: number, missionKey: number, table: hashtable ): boolean =>

	// call SyncStoredBoolean(table, missionKey, key)
	LoadBoolean( table, missionKey, key )

;

// ===========================================================================
export const LoadStringBJ = ( key: number, missionKey: number, table: hashtable ): string => {

	// call SyncStoredString(table, missionKey, key)
	const s = LoadStr( table, missionKey, key );

	if ( s === null ) return "";
	return s;

};

// ===========================================================================
export const LoadPlayerHandleBJ = ( key: number, missionKey: number, table: hashtable ): player => LoadPlayerHandle( table, missionKey, key );

// ===========================================================================
export const LoadWidgetHandleBJ = ( key: number, missionKey: number, table: hashtable ): widget => LoadWidgetHandle( table, missionKey, key );

// ===========================================================================
export const LoadDestructableHandleBJ = ( key: number, missionKey: number, table: hashtable ): destructable => LoadDestructableHandle( table, missionKey, key );

// ===========================================================================
export const LoadItemHandleBJ = ( key: number, missionKey: number, table: hashtable ): item => LoadItemHandle( table, missionKey, key );

// ===========================================================================
export const LoadUnitHandleBJ = ( key: number, missionKey: number, table: hashtable ): unit => LoadUnitHandle( table, missionKey, key );

// ===========================================================================
export const LoadAbilityHandleBJ = ( key: number, missionKey: number, table: hashtable ): ability => LoadAbilityHandle( table, missionKey, key );

// ===========================================================================
export const LoadTimerHandleBJ = ( key: number, missionKey: number, table: hashtable ): timer => LoadTimerHandle( table, missionKey, key );

// ===========================================================================
export const LoadTriggerHandleBJ = ( key: number, missionKey: number, table: hashtable ): trigger => LoadTriggerHandle( table, missionKey, key );

// ===========================================================================
export const LoadTriggerConditionHandleBJ = ( key: number, missionKey: number, table: hashtable ): triggercondition => LoadTriggerConditionHandle( table, missionKey, key );

// ===========================================================================
export const LoadTriggerActionHandleBJ = ( key: number, missionKey: number, table: hashtable ): triggeraction => LoadTriggerActionHandle( table, missionKey, key );

// ===========================================================================
export const LoadTriggerEventHandleBJ = ( key: number, missionKey: number, table: hashtable ): event => LoadTriggerEventHandle( table, missionKey, key );

// ===========================================================================
export const LoadForceHandleBJ = ( key: number, missionKey: number, table: hashtable ): force => LoadForceHandle( table, missionKey, key );

// ===========================================================================
export const LoadGroupHandleBJ = ( key: number, missionKey: number, table: hashtable ): group => LoadGroupHandle( table, missionKey, key );

// ===========================================================================
export const LoadLocationHandleBJ = ( key: number, missionKey: number, table: hashtable ): location => LoadLocationHandle( table, missionKey, key );

// ===========================================================================
export const LoadRectHandleBJ = ( key: number, missionKey: number, table: hashtable ): rect => LoadRectHandle( table, missionKey, key );

// ===========================================================================
export const LoadBooleanExprHandleBJ = ( key: number, missionKey: number, table: hashtable ): boolexpr => LoadBooleanExprHandle( table, missionKey, key );

// ===========================================================================
export const LoadSoundHandleBJ = ( key: number, missionKey: number, table: hashtable ): sound => LoadSoundHandle( table, missionKey, key );

// ===========================================================================
export const LoadEffectHandleBJ = ( key: number, missionKey: number, table: hashtable ): effect => LoadEffectHandle( table, missionKey, key );

// ===========================================================================
export const LoadUnitPoolHandleBJ = ( key: number, missionKey: number, table: hashtable ): unitpool => LoadUnitPoolHandle( table, missionKey, key );

// ===========================================================================
export const LoadItemPoolHandleBJ = ( key: number, missionKey: number, table: hashtable ): itempool => LoadItemPoolHandle( table, missionKey, key );

// ===========================================================================
export const LoadQuestHandleBJ = ( key: number, missionKey: number, table: hashtable ): quest => LoadQuestHandle( table, missionKey, key );

// ===========================================================================
export const LoadQuestItemHandleBJ = ( key: number, missionKey: number, table: hashtable ): questitem => LoadQuestItemHandle( table, missionKey, key );

// ===========================================================================
export const LoadDefeatConditionHandleBJ = ( key: number, missionKey: number, table: hashtable ): defeatcondition => LoadDefeatConditionHandle( table, missionKey, key );

// ===========================================================================
export const LoadTimerDialogHandleBJ = ( key: number, missionKey: number, table: hashtable ): timerdialog => LoadTimerDialogHandle( table, missionKey, key );

// ===========================================================================
export const LoadLeaderboardHandleBJ = ( key: number, missionKey: number, table: hashtable ): leaderboard => LoadLeaderboardHandle( table, missionKey, key );

// ===========================================================================
export const LoadMultiboardHandleBJ = ( key: number, missionKey: number, table: hashtable ): multiboard => LoadMultiboardHandle( table, missionKey, key );

// ===========================================================================
export const LoadMultiboardItemHandleBJ = ( key: number, missionKey: number, table: hashtable ): multiboarditem => LoadMultiboardItemHandle( table, missionKey, key );

// ===========================================================================
export const LoadTrackableHandleBJ = ( key: number, missionKey: number, table: hashtable ): trackable => LoadTrackableHandle( table, missionKey, key );

// ===========================================================================
export const LoadDialogHandleBJ = ( key: number, missionKey: number, table: hashtable ): dialog => LoadDialogHandle( table, missionKey, key );

// ===========================================================================
export const LoadButtonHandleBJ = ( key: number, missionKey: number, table: hashtable ): button => LoadButtonHandle( table, missionKey, key );

// ===========================================================================
export const LoadTextTagHandleBJ = ( key: number, missionKey: number, table: hashtable ): texttag => LoadTextTagHandle( table, missionKey, key );

// ===========================================================================
export const LoadLightningHandleBJ = ( key: number, missionKey: number, table: hashtable ): lightning => LoadLightningHandle( table, missionKey, key );

// ===========================================================================
export const LoadImageHandleBJ = ( key: number, missionKey: number, table: hashtable ): image => LoadImageHandle( table, missionKey, key );

// ===========================================================================
export const LoadUbersplatHandleBJ = ( key: number, missionKey: number, table: hashtable ): ubersplat => LoadUbersplatHandle( table, missionKey, key );

// ===========================================================================
export const LoadRegionHandleBJ = ( key: number, missionKey: number, table: hashtable ): region => LoadRegionHandle( table, missionKey, key );

// ===========================================================================
export const LoadFogStateHandleBJ = ( key: number, missionKey: number, table: hashtable ): fogstate => LoadFogStateHandle( table, missionKey, key );

// ===========================================================================
export const LoadFogModifierHandleBJ = ( key: number, missionKey: number, table: hashtable ): fogmodifier => LoadFogModifierHandle( table, missionKey, key );

// ===========================================================================
export const LoadHashtableHandleBJ = ( key: number, missionKey: number, table: hashtable ): hashtable => LoadHashtableHandle( table, missionKey, key );

// ===========================================================================
export const RestoreUnitLocFacingAngleBJ = ( key: string, missionKey: string, cache: gamecache, forWhichPlayer: player, loc: location, facing: number ): unit => {

	// call SyncStoredUnit(cache, missionKey, key)
	bj_lastLoadedUnit = RestoreUnit( cache, missionKey, key, forWhichPlayer, GetLocationX( loc ), GetLocationY( loc ), facing );
	return bj_lastLoadedUnit;

};

// ===========================================================================
export const RestoreUnitLocFacingPointBJ = ( key: string, missionKey: string, cache: gamecache, forWhichPlayer: player, loc: location, lookAt: location ): unit =>

	// call SyncStoredUnit(cache, missionKey, key)
	RestoreUnitLocFacingAngleBJ( key, missionKey, cache, forWhichPlayer, loc, AngleBetweenPoints( loc, lookAt ) )

;

// ===========================================================================
export const GetLastRestoredUnitBJ = (): unit => bj_lastLoadedUnit;

// ===========================================================================
export const FlushGameCacheBJ = ( cache: gamecache ): void => {

	FlushGameCache( cache );

};

// ===========================================================================
export const FlushStoredMissionBJ = ( missionKey: string, cache: gamecache ): void => {

	FlushStoredMission( cache, missionKey );

};

// ===========================================================================
export const FlushParentHashtableBJ = ( table: hashtable ): void => {

	FlushParentHashtable( table );

};

// ===========================================================================
export const FlushChildHashtableBJ = ( missionKey: number, table: hashtable ): void => {

	FlushChildHashtable( table, missionKey );

};

// ===========================================================================
export const HaveStoredValue = ( key: string, valueType: number, missionKey: string, cache: gamecache ): boolean => {

	if ( valueType === bj_GAMECACHE_BOOLEAN )

		return HaveStoredBoolean( cache, missionKey, key );

	else if ( valueType === bj_GAMECACHE_INTEGER )

		return HaveStoredInteger( cache, missionKey, key );

	else if ( valueType === bj_GAMECACHE_REAL )

		return HaveStoredReal( cache, missionKey, key );

	else if ( valueType === bj_GAMECACHE_UNIT )

		return HaveStoredUnit( cache, missionKey, key );

	else if ( valueType === bj_GAMECACHE_STRING )

		return HaveStoredString( cache, missionKey, key );

	else

		// Unrecognized value type - ignore the request.
		return false;

};

// ===========================================================================
export const HaveSavedValue = ( key: number, valueType: number, missionKey: number, table: hashtable ): boolean => {

	if ( valueType === bj_HASHTABLE_BOOLEAN )

		return HaveSavedBoolean( table, missionKey, key );

	else if ( valueType === bj_HASHTABLE_INTEGER )

		return HaveSavedInteger( table, missionKey, key );

	else if ( valueType === bj_HASHTABLE_REAL )

		return HaveSavedReal( table, missionKey, key );

	else if ( valueType === bj_HASHTABLE_STRING )

		return HaveSavedString( table, missionKey, key );

	else if ( valueType === bj_HASHTABLE_HANDLE )

		return HaveSavedHandle( table, missionKey, key );

	else

		// Unrecognized value type - ignore the request.
		return false;

};

// ===========================================================================
export const ShowCustomCampaignButton = ( show: boolean, whichButton: number ): void => {

	SetCustomCampaignButtonVisible( whichButton - 1, show );

};

// ===========================================================================
export const IsCustomCampaignButtonVisibile = ( whichButton: number ): boolean => GetCustomCampaignButtonVisible( whichButton - 1 );

// ===========================================================================
export const LoadGameBJ = ( loadFileName: string, doScoreScreen: boolean ): void => {

	LoadGame( loadFileName, doScoreScreen );

};

// ===========================================================================
export const SaveAndChangeLevelBJ = ( saveFileName: string, newLevel: string, doScoreScreen: boolean ): void => {

	SaveGame( saveFileName );
	ChangeLevel( newLevel, doScoreScreen );

};

// ===========================================================================
export const SaveAndLoadGameBJ = ( saveFileName: string, loadFileName: string, doScoreScreen: boolean ): void => {

	SaveGame( saveFileName );
	LoadGame( loadFileName, doScoreScreen );

};

// ===========================================================================
export const RenameSaveDirectoryBJ = ( sourceDirName: string, destDirName: string ): boolean => RenameSaveDirectory( sourceDirName, destDirName );

// ===========================================================================
export const RemoveSaveDirectoryBJ = ( sourceDirName: string ): boolean => RemoveSaveDirectory( sourceDirName );

// ===========================================================================
export const CopySaveGameBJ = ( sourceSaveName: string, destSaveName: string ): boolean => CopySaveGame( sourceSaveName, destSaveName );

// ***************************************************************************
// *
// *  Miscellaneous Utility Functions
// *
// ***************************************************************************

// ===========================================================================
export const GetPlayerStartLocationX = ( whichPlayer: player ): number => GetStartLocationX( GetPlayerStartLocation( whichPlayer ) );

// ===========================================================================
export const GetPlayerStartLocationY = ( whichPlayer: player ): number => GetStartLocationY( GetPlayerStartLocation( whichPlayer ) );

// ===========================================================================
export const GetPlayerStartLocationLoc = ( whichPlayer: player ): location => GetStartLocationLoc( GetPlayerStartLocation( whichPlayer ) );

// ===========================================================================
export const GetRectCenter = ( whichRect: rect ): location => Location( GetRectCenterX( whichRect ), GetRectCenterY( whichRect ) );

// ===========================================================================
export const IsPlayerSlotState = ( whichPlayer: player, whichState: playerslotstate ): boolean => GetPlayerSlotState( whichPlayer ) === whichState;

// ===========================================================================
export const GetFadeFromSeconds = ( seconds: number ): number => {

	if ( seconds !== 0 )

		return 128 / R2I( seconds );

	return 10000;

};

// ===========================================================================
export const GetFadeFromSecondsAsReal = ( seconds: number ): number => {

	if ( seconds !== 0 )

		return 128 / seconds;

	return 10000;

};

// ===========================================================================
export const AdjustPlayerStateSimpleBJ = ( whichPlayer: player, whichPlayerState: playerstate, delta: number ): void => {

	SetPlayerState( whichPlayer, whichPlayerState, GetPlayerState( whichPlayer, whichPlayerState ) + delta );

};

// ===========================================================================
export const AdjustPlayerStateBJ = ( delta: number, whichPlayer: player, whichPlayerState: playerstate ): void => {

	// If the change was positive, apply the difference to the player's
	// gathered resources property as well.

	if ( delta > 0 )

		if ( whichPlayerState === PLAYER_STATE_RESOURCE_GOLD ) {

			AdjustPlayerStateSimpleBJ( whichPlayer, PLAYER_STATE_GOLD_GATHERED, delta );

		} else if ( whichPlayerState === PLAYER_STATE_RESOURCE_LUMBER ) {

			AdjustPlayerStateSimpleBJ( whichPlayer, PLAYER_STATE_LUMBER_GATHERED, delta );

		}

	AdjustPlayerStateSimpleBJ( whichPlayer, whichPlayerState, delta );

};

// ===========================================================================
export const SetPlayerStateBJ = ( whichPlayer: player, whichPlayerState: playerstate, value: number ): void => {

	const oldValue = GetPlayerState( whichPlayer, whichPlayerState );
	AdjustPlayerStateBJ( value - oldValue, whichPlayer, whichPlayerState );

};

// ===========================================================================
export const SetPlayerFlagBJ = ( whichPlayerFlag: playerstate, flag: boolean, whichPlayer: player ): void => {

	SetPlayerState( whichPlayer, whichPlayerFlag, IntegerTertiaryOp( flag, 1, 0 ) );

};

// ===========================================================================
export const SetPlayerTaxRateBJ = ( rate: number, whichResource: playerstate, sourcePlayer: player, otherPlayer: player ): void => {

	SetPlayerTaxRate( sourcePlayer, otherPlayer, whichResource, rate );

};

// ===========================================================================
export const GetPlayerTaxRateBJ = ( whichResource: playerstate, sourcePlayer: player, otherPlayer: player ): number => GetPlayerTaxRate( sourcePlayer, otherPlayer, whichResource );

// ===========================================================================
export const IsPlayerFlagSetBJ = ( whichPlayerFlag: playerstate, whichPlayer: player ): boolean => GetPlayerState( whichPlayer, whichPlayerFlag ) === 1;

// ===========================================================================
export const AddResourceAmountBJ = ( delta: number, whichUnit: unit ): void => {

	AddResourceAmount( whichUnit, delta );

};

// ===========================================================================
export const GetConvertedPlayerId = ( whichPlayer: player ): number => GetPlayerId( whichPlayer ) + 1;

// ===========================================================================
export const ConvertedPlayer = ( convertedPlayerId: number ): player => Player( convertedPlayerId - 1 );

// ===========================================================================
export const GetRectWidthBJ = ( r: rect ): number => GetRectMaxX( r ) - GetRectMinX( r );

// ===========================================================================
export const GetRectHeightBJ = ( r: rect ): number => GetRectMaxY( r ) - GetRectMinY( r );

// ===========================================================================
// Replaces a gold mine with a blighted gold mine for the given player.
//
export const BlightGoldMineForPlayerBJ = ( goldMine: unit, whichPlayer: player ): unit | null => {

	// Make sure we're replacing a Gold Mine and not some other type of unit.
	if ( GetUnitTypeId( goldMine ) !== FourCC( "ngol" ) )
		return null;

	// Save the Gold Mine's properties and remove it.
	const mineX = GetUnitX( goldMine );
	const mineY = GetUnitY( goldMine );
	const mineGold = GetResourceAmount( goldMine );
	RemoveUnit( goldMine );

	// Create a Haunted Gold Mine to replace the Gold Mine.
	const newMine = CreateBlightedGoldmine( whichPlayer, mineX, mineY, bj_UNIT_FACING );
	SetResourceAmount( newMine, mineGold );
	return newMine;

};

// ===========================================================================
export const BlightGoldMineForPlayer = ( goldMine: unit, whichPlayer: player ): unit | null => {

	bj_lastHauntedGoldMine = BlightGoldMineForPlayerBJ( goldMine, whichPlayer );
	return bj_lastHauntedGoldMine;

};

// ===========================================================================
export const GetLastHauntedGoldMine = (): unit | null => bj_lastHauntedGoldMine;

// ===========================================================================
export const IsPointBlightedBJ = ( where: location ): boolean => IsPointBlighted( GetLocationX( where ), GetLocationY( where ) );

// ===========================================================================
export const SetPlayerColorBJEnum = (): void => {

	SetUnitColor( GetEnumUnit(), bj_setPlayerTargetColor );

};

// ===========================================================================
export const SetPlayerColorBJ = ( whichPlayer: player, color: playercolor, changeExisting: boolean ): void => {

	let g: group;

	SetPlayerColor( whichPlayer, color );

	if ( changeExisting ) {

		bj_setPlayerTargetColor = color;
		g = CreateGroup();
		GroupEnumUnitsOfPlayer( g, whichPlayer, null );
		ForGroup( g, SetPlayerColorBJEnum );
		DestroyGroup( g );

	}

};

// ===========================================================================
export const SetPlayerUnitAvailableBJ = ( unitId: number, allowed: boolean, whichPlayer: player ): void => {

	if ( allowed )

		SetPlayerTechMaxAllowed( whichPlayer, unitId, - 1 );

	else

		SetPlayerTechMaxAllowed( whichPlayer, unitId, 0 );

};

// ===========================================================================
export const LockGameSpeedBJ = (): void => {

	SetMapFlag( MAP_LOCK_SPEED, true );

};

// ===========================================================================
export const UnlockGameSpeedBJ = (): void => {

	SetMapFlag( MAP_LOCK_SPEED, false );

};

// ===========================================================================
export const IssueTargetOrderBJ = ( whichUnit: unit, order: string, targetWidget: widget ): boolean => IssueTargetOrder( whichUnit, order, targetWidget );

// ===========================================================================
export const IssuePointOrderLocBJ = ( whichUnit: unit, order: string, whichLocation: location ): boolean => IssuePointOrderLoc( whichUnit, order, whichLocation );

// ===========================================================================
// Two distinct trigger actions can't share the same function name, so this
// dummy function simply mimics the behavior of an existing call.
//
export const IssueTargetDestructableOrder = ( whichUnit: unit, order: string, targetWidget: widget ): boolean => IssueTargetOrder( whichUnit, order, targetWidget );

export const IssueTargetItemOrder = ( whichUnit: unit, order: string, targetWidget: widget ): boolean => IssueTargetOrder( whichUnit, order, targetWidget );

// ===========================================================================
export const IssueImmediateOrderBJ = ( whichUnit: unit, order: string ): boolean => IssueImmediateOrder( whichUnit, order );

// ===========================================================================
export const GroupTargetOrderBJ = ( whichGroup: group, order: string, targetWidget: widget ): boolean => GroupTargetOrder( whichGroup, order, targetWidget );

// ===========================================================================
export const GroupPointOrderLocBJ = ( whichGroup: group, order: string, whichLocation: location ): boolean => GroupPointOrderLoc( whichGroup, order, whichLocation );

// ===========================================================================
export const GroupImmediateOrderBJ = ( whichGroup: group, order: string ): boolean => GroupImmediateOrder( whichGroup, order );

// ===========================================================================
// Two distinct trigger actions can't share the same function name, so this
// dummy function simply mimics the behavior of an existing call.
//
export const GroupTargetDestructableOrder = ( whichGroup: group, order: string, targetWidget: widget ): boolean => GroupTargetOrder( whichGroup, order, targetWidget );

export const GroupTargetItemOrder = ( whichGroup: group, order: string, targetWidget: widget ): boolean => GroupTargetOrder( whichGroup, order, targetWidget );

// ===========================================================================
export const GetDyingDestructable = (): destructable => GetTriggerDestructable();

// ===========================================================================
// Rally point setting
//
export const SetUnitRallyPoint = ( whichUnit: unit, targPos: location ): void => {

	IssuePointOrderLocBJ( whichUnit, "setrally", targPos );

};

// ===========================================================================
export const SetUnitRallyUnit = ( whichUnit: unit, targUnit: unit ): void => {

	IssueTargetOrder( whichUnit, "setrally", targUnit );

};

// ===========================================================================
export const SetUnitRallyDestructable = ( whichUnit: unit, targDest: destructable ): void => {

	IssueTargetOrder( whichUnit, "setrally", targDest );

};

// ===========================================================================
// Utility function for use by editor-generated item drop table triggers.
// This function is added as an action to all destructable drop triggers,
// so that a widget drop may be differentiated from a unit drop.
//
export const SaveDyingWidget = (): void => {

	bj_lastDyingWidget = GetTriggerWidget();

};

// ===========================================================================
export const SetBlightRectBJ = ( addBlight: boolean, whichPlayer: player, r: rect ): void => {

	SetBlightRect( whichPlayer, r, addBlight );

};

// ===========================================================================
export const SetBlightRadiusLocBJ = ( addBlight: boolean, whichPlayer: player, loc: location, radius: number ): void => {

	SetBlightLoc( whichPlayer, loc, radius, addBlight );

};

// ===========================================================================
export const GetAbilityName = ( abilcode: number ): string => GetObjectName( abilcode );

// ***************************************************************************
// *
// *  Melee Template Visibility Settings
// *
// ***************************************************************************

// ===========================================================================
export const MeleeStartingVisibility = (): void => {

	// Start by setting the ToD.
	SetFloatGameState( GAME_STATE_TIME_OF_DAY, bj_MELEE_STARTING_TOD );

	// call FogMaskEnable(true)
	// call FogEnable(true)

};

// ***************************************************************************
// *
// *  Melee Template Starting Resources
// *
// ***************************************************************************

// ===========================================================================
export const MeleeStartingResources = (): void => {

	let index: number;
	let indexPlayer: player;
	let startingGold: number;
	let startingLumber: number;

	const v = VersionGet();

	if ( v === VERSION_REIGN_OF_CHAOS ) {

		startingGold = bj_MELEE_STARTING_GOLD_V0;
		startingLumber = bj_MELEE_STARTING_LUMBER_V0;

	} else {

		startingGold = bj_MELEE_STARTING_GOLD_V1;
		startingLumber = bj_MELEE_STARTING_LUMBER_V1;

	}

	// Set each player's starting resources.
	index = 0;

	while ( true ) {

		indexPlayer = Player( index );

		if ( GetPlayerSlotState( indexPlayer ) === PLAYER_SLOT_STATE_PLAYING ) {

			SetPlayerState( indexPlayer, PLAYER_STATE_RESOURCE_GOLD, startingGold );
			SetPlayerState( indexPlayer, PLAYER_STATE_RESOURCE_LUMBER, startingLumber );

		}

		index = index + 1;
		if ( index === bj_MAX_PLAYERS ) break;

	}

};

// ***************************************************************************
// *
// *  Melee Template Hero Limit
// *
// ***************************************************************************

// ===========================================================================
export const ReducePlayerTechMaxAllowed = ( whichPlayer: player, techId: number, limit: number ): void => {

	const oldMax = GetPlayerTechMaxAllowed( whichPlayer, techId );

	// A value of -1 is used to indicate no limit, so check for that as well.

	if ( oldMax < 0 || oldMax > limit )

		SetPlayerTechMaxAllowed( whichPlayer, techId, limit );

};

// ===========================================================================
export const MeleeStartingHeroLimit = (): void => {

	let index: number;

	index = 0;

	while ( true ) {

		// max heroes per player
		SetPlayerMaxHeroesAllowed( bj_MELEE_HERO_LIMIT, Player( index ) );

		// each player is restricted to a limit per hero type as well
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Hamg" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Hmkg" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Hpal" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Hblm" ), bj_MELEE_HERO_TYPE_LIMIT );

		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Obla" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Ofar" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Otch" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Oshd" ), bj_MELEE_HERO_TYPE_LIMIT );

		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Edem" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Ekee" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Emoo" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Ewar" ), bj_MELEE_HERO_TYPE_LIMIT );

		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Udea" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Udre" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Ulic" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Ucrl" ), bj_MELEE_HERO_TYPE_LIMIT );

		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Npbm" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Nbrn" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Nngs" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Nplh" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Nbst" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Nalc" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Ntin" ), bj_MELEE_HERO_TYPE_LIMIT );
		ReducePlayerTechMaxAllowed( Player( index ), FourCC( "Nfir" ), bj_MELEE_HERO_TYPE_LIMIT );

		index = index + 1;
		if ( index === bj_MAX_PLAYERS ) break;

	}

};

// ***************************************************************************
// *
// *  Melee Template Granted Hero Items
// *
// ***************************************************************************

// ===========================================================================
export const MeleeTrainedUnitIsHeroBJFilter = (): boolean => IsUnitType( GetFilterUnit(), UNIT_TYPE_HERO );

// ===========================================================================
// The first N heroes trained or hired for each player start off with a
// standard set of items.  This is currently:
//   - 1x Scroll of Town Portal
//
export const MeleeGrantItemsToHero = ( whichUnit: unit ): void => {

	const owner = GetPlayerId( GetOwningPlayer( whichUnit ) );

	// If we haven't twinked N heroes for this player yet, twink away.

	if ( bj_meleeTwinkedHeroes[ owner ] < bj_MELEE_MAX_TWINKED_HEROES ) {

		UnitAddItemById( whichUnit, FourCC( "stwp" ) );
		bj_meleeTwinkedHeroes[ owner ] = bj_meleeTwinkedHeroes[ owner ] + 1;

	}

};

// ===========================================================================
export const MeleeGrantItemsToTrainedHero = (): void => {

	MeleeGrantItemsToHero( GetTrainedUnit() );

};

// ===========================================================================
export const MeleeGrantItemsToHiredHero = (): void => {

	MeleeGrantItemsToHero( GetSoldUnit() );

};

// ===========================================================================
export const MeleeGrantHeroItems = (): void => {

	let index: number;
	let trig: trigger;

	// Initialize the twinked hero counts.
	index = 0;

	while ( true ) {

		bj_meleeTwinkedHeroes[ index ] = 0;

		index = index + 1;
		if ( index === bj_MAX_PLAYER_SLOTS ) break;

	}

	// Register for an event whenever a hero is trained, so that we can give
	// him/her their starting items.
	index = 0;

	while ( true ) {

		trig = CreateTrigger();
		TriggerRegisterPlayerUnitEvent( trig, Player( index ), EVENT_PLAYER_UNIT_TRAIN_FINISH, filterMeleeTrainedUnitIsHeroBJ );
		TriggerAddAction( trig, MeleeGrantItemsToTrainedHero );

		index = index + 1;
		if ( index === bj_MAX_PLAYERS ) break;

	}

	// Register for an event whenever a neutral hero is hired, so that we
	// can give him/her their starting items.
	trig = CreateTrigger();
	TriggerRegisterPlayerUnitEvent( trig, Player( PLAYER_NEUTRAL_PASSIVE ), EVENT_PLAYER_UNIT_SELL, filterMeleeTrainedUnitIsHeroBJ );
	TriggerAddAction( trig, MeleeGrantItemsToHiredHero );

	// Flag that we are giving starting items to heroes, so that the melee
	// starting units code can create them as necessary.
	bj_meleeGrantHeroItems = true;

};

// ***************************************************************************
// *
// *  Melee Template Clear Start Locations
// *
// ***************************************************************************

// ===========================================================================
export const MeleeClearExcessUnit = (): void => {

	const theUnit = GetEnumUnit();
	const owner = GetPlayerId( GetOwningPlayer( theUnit ) );

	if ( owner === PLAYER_NEUTRAL_AGGRESSIVE )

		// Remove any Neutral Hostile units from the area.
		RemoveUnit( GetEnumUnit() );

	else if ( owner === PLAYER_NEUTRAL_PASSIVE )

	// Remove non-structure Neutral Passive units from the area.

		if ( ! IsUnitType( theUnit, UNIT_TYPE_STRUCTURE ) ) {

			RemoveUnit( GetEnumUnit() );

		}

};

// ===========================================================================
export const MeleeClearNearbyUnits = ( x: number, y: number, range: number ): void => {

	const nearbyUnits = CreateGroup();
	GroupEnumUnitsInRange( nearbyUnits, x, y, range, null );
	ForGroup( nearbyUnits, MeleeClearExcessUnit );
	DestroyGroup( nearbyUnits );

};

// ===========================================================================
export const MeleeClearExcessUnits = (): void => {

	let index: number;
	let locX: number;
	let locY: number;
	let indexPlayer: player;

	index = 0;

	while ( true ) {

		indexPlayer = Player( index );

		// If the player slot is being used, clear any nearby creeps.

		if ( GetPlayerSlotState( indexPlayer ) === PLAYER_SLOT_STATE_PLAYING ) {

			locX = GetStartLocationX( GetPlayerStartLocation( indexPlayer ) );
			locY = GetStartLocationY( GetPlayerStartLocation( indexPlayer ) );

			MeleeClearNearbyUnits( locX, locY, bj_MELEE_CLEAR_UNITS_RADIUS );

		}

		index = index + 1;
		if ( index === bj_MAX_PLAYERS ) break;

	}

};

// ***************************************************************************
// *
// *  Melee Template Starting Units
// *
// ***************************************************************************

// ===========================================================================
export const MeleeEnumFindNearestMine = (): void => {

	const enumUnit = GetEnumUnit();
	let dist: number;
	let unitLoc: location;

	if ( GetUnitTypeId( enumUnit ) === FourCC( "ngol" ) ) {

		unitLoc = GetUnitLoc( enumUnit );
		dist = DistanceBetweenPoints( unitLoc, bj_meleeNearestMineToLoc );
		RemoveLocation( unitLoc );

		// If this is our first mine, or the closest thusfar, use it instead.

		if ( bj_meleeNearestMineDist < 0 || dist < bj_meleeNearestMineDist ) {

			bj_meleeNearestMine = enumUnit;
			bj_meleeNearestMineDist = dist;

		}

	}

};

// ===========================================================================
export const MeleeFindNearestMine = ( src: location, range: number ): unit | null => {

	bj_meleeNearestMine = null;
	bj_meleeNearestMineDist = - 1;
	bj_meleeNearestMineToLoc = src;

	const nearbyMines = CreateGroup();
	GroupEnumUnitsInRangeOfLoc( nearbyMines, src, range, null );
	ForGroup( nearbyMines, MeleeEnumFindNearestMine );
	DestroyGroup( nearbyMines );

	return bj_meleeNearestMine;

};

// ===========================================================================
export const MeleeRandomHeroLoc = ( p: player, id1: number, id2: number, id3: number, id4: number, loc: location ): unit => {

	let roll: number;
	let pick: number;

	// The selection of heroes is dependant on the game version.
	const v = VersionGet();

	if ( v === VERSION_REIGN_OF_CHAOS ) roll = GetRandomInt( 1, 3 );
	else roll = GetRandomInt( 1, 4 );

	// Translate the roll into a unitid.
	if ( roll === 1 ) pick = id1;
	else if ( roll === 2 ) pick = id2;
	else if ( roll === 3 ) pick = id3;
	else if ( roll === 4 ) pick = id4;
	// Unrecognized id index - pick the first hero in the list.
	else pick = id1;

	// Create the hero.
	const hero = CreateUnitAtLoc( p, pick, loc, bj_UNIT_FACING );

	if ( bj_meleeGrantHeroItems )
		MeleeGrantItemsToHero( hero );

	return hero;

};

// ===========================================================================
// Returns a location which is (distance) away from (src) in the direction of (targ).
//
export const MeleeGetProjectedLoc = ( src: location, targ: location, distance: number, deltaAngle: number ): location => {

	const srcX = GetLocationX( src );
	const srcY = GetLocationY( src );
	const direction = Atan2( GetLocationY( targ ) - srcY, GetLocationX( targ ) - srcX ) + deltaAngle;
	return Location( srcX + distance * Cos( direction ), srcY + distance * Sin( direction ) );

};

// ===========================================================================
export const MeleeGetNearestValueWithin = ( val: number, minVal: number, maxVal: number ): number => {

	if ( val < minVal )

		return minVal;

	else if ( val > maxVal )

		return maxVal;

	else

		return val;

};

// ===========================================================================
export const MeleeGetLocWithinRect = ( src: location, r: rect ): location => {

	const withinX = MeleeGetNearestValueWithin( GetLocationX( src ), GetRectMinX( r ), GetRectMaxX( r ) );
	const withinY = MeleeGetNearestValueWithin( GetLocationY( src ), GetRectMinY( r ), GetRectMaxY( r ) );
	return Location( withinX, withinY );

};

// ===========================================================================
// Starting Units for Human Players
//   - 1 Town Hall, placed at start location
//   - 5 Peasants, placed between start location and nearest gold mine
//
export const MeleeStartingUnitsHuman = ( whichPlayer: player, startLoc: location, doHeroes: boolean, doCamera: boolean, doPreload: boolean ): void => {

	const useRandomHero = IsMapFlagSet( MAP_RANDOM_HERO );
	const unitSpacing = 64;
	let nearMineLoc: location;
	let heroLoc: location;
	let peonX: number;
	let peonY: number;
	let townHall: unit;

	if ( doPreload )

		Preloader( "scripts\\HumanMelee.pld" );

	const nearestMine = MeleeFindNearestMine( startLoc, bj_MELEE_MINE_SEARCH_RADIUS );

	if ( nearestMine !== null ) {

		// Spawn Town Hall at the start location.
		townHall = CreateUnitAtLoc( whichPlayer, FourCC( "htow" ), startLoc, bj_UNIT_FACING );

		// Spawn Peasants near the mine.
		nearMineLoc = MeleeGetProjectedLoc( GetUnitLoc( nearestMine ), startLoc, 320, 0 );
		peonX = GetLocationX( nearMineLoc );
		peonY = GetLocationY( nearMineLoc );
		CreateUnit( whichPlayer, FourCC( "hpea" ), peonX + 0 * unitSpacing, peonY + 1 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "hpea" ), peonX + 1 * unitSpacing, peonY + 0.15 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "hpea" ), peonX - 1 * unitSpacing, peonY + 0.15 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "hpea" ), peonX + 0.6 * unitSpacing, peonY - 1 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "hpea" ), peonX - 0.6 * unitSpacing, peonY - 1 * unitSpacing, bj_UNIT_FACING );

		// Set random hero spawn point to be off to the side of the start location.
		heroLoc = MeleeGetProjectedLoc( GetUnitLoc( nearestMine ), startLoc, 384, 45 );

	} else {

		// Spawn Town Hall at the start location.
		townHall = CreateUnitAtLoc( whichPlayer, FourCC( "htow" ), startLoc, bj_UNIT_FACING );

		// Spawn Peasants directly south of the town hall.
		peonX = GetLocationX( startLoc );
		peonY = GetLocationY( startLoc ) - 224;
		CreateUnit( whichPlayer, FourCC( "hpea" ), peonX + 2 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "hpea" ), peonX + 1 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "hpea" ), peonX + 0 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "hpea" ), peonX - 1 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "hpea" ), peonX - 2 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );

		// Set random hero spawn point to be just south of the start location.
		heroLoc = Location( peonX, peonY - 2 * unitSpacing );

	}

	if ( townHall !== null ) {

		UnitAddAbilityBJ( FourCC( "Amic" ), townHall );
		UnitMakeAbilityPermanentBJ( true, FourCC( "Amic" ), townHall );

	}

	if ( doHeroes )

	// If the "Random Hero" option is set, start the player with a random hero.
	// Otherwise, give them a "free hero" token.

		if ( useRandomHero ) {

			MeleeRandomHeroLoc( whichPlayer, FourCC( "Hamg" ), FourCC( "Hmkg" ), FourCC( "Hpal" ), FourCC( "Hblm" ), heroLoc );

		} else {

			SetPlayerState( whichPlayer, PLAYER_STATE_RESOURCE_HERO_TOKENS, bj_MELEE_STARTING_HERO_TOKENS );

		}

	if ( doCamera ) {

		// Center the camera on the initial Peasants.
		SetCameraPositionForPlayer( whichPlayer, peonX, peonY );
		SetCameraQuickPositionForPlayer( whichPlayer, peonX, peonY );

	}

};

// ===========================================================================
// Starting Units for Orc Players
//   - 1 Great Hall, placed at start location
//   - 5 Peons, placed between start location and nearest gold mine
//
export const MeleeStartingUnitsOrc = ( whichPlayer: player, startLoc: location, doHeroes: boolean, doCamera: boolean, doPreload: boolean ): void => {

	const useRandomHero = IsMapFlagSet( MAP_RANDOM_HERO );
	const unitSpacing = 64;
	let nearMineLoc: location;
	let heroLoc: location;
	let peonX: number;
	let peonY: number;

	if ( doPreload )

		Preloader( "scripts\\OrcMelee.pld" );

	const nearestMine = MeleeFindNearestMine( startLoc, bj_MELEE_MINE_SEARCH_RADIUS );

	if ( nearestMine !== null ) {

		// Spawn Great Hall at the start location.
		CreateUnitAtLoc( whichPlayer, FourCC( "ogre" ), startLoc, bj_UNIT_FACING );

		// Spawn Peons near the mine.
		nearMineLoc = MeleeGetProjectedLoc( GetUnitLoc( nearestMine ), startLoc, 320, 0 );
		peonX = GetLocationX( nearMineLoc );
		peonY = GetLocationY( nearMineLoc );
		CreateUnit( whichPlayer, FourCC( "opeo" ), peonX + 0 * unitSpacing, peonY + 1 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "opeo" ), peonX + 1 * unitSpacing, peonY + 0.15 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "opeo" ), peonX - 1 * unitSpacing, peonY + 0.15 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "opeo" ), peonX + 0.6 * unitSpacing, peonY - 1 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "opeo" ), peonX - 0.6 * unitSpacing, peonY - 1 * unitSpacing, bj_UNIT_FACING );

		// Set random hero spawn point to be off to the side of the start location.
		heroLoc = MeleeGetProjectedLoc( GetUnitLoc( nearestMine ), startLoc, 384, 45 );

	} else {

		// Spawn Great Hall at the start location.
		CreateUnitAtLoc( whichPlayer, FourCC( "ogre" ), startLoc, bj_UNIT_FACING );

		// Spawn Peons directly south of the town hall.
		peonX = GetLocationX( startLoc );
		peonY = GetLocationY( startLoc ) - 224;
		CreateUnit( whichPlayer, FourCC( "opeo" ), peonX + 2 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "opeo" ), peonX + 1 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "opeo" ), peonX + 0 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "opeo" ), peonX - 1 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "opeo" ), peonX - 2 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );

		// Set random hero spawn point to be just south of the start location.
		heroLoc = Location( peonX, peonY - 2 * unitSpacing );

	}

	if ( doHeroes )

	// If the "Random Hero" option is set, start the player with a random hero.
	// Otherwise, give them a "free hero" token.

		if ( useRandomHero ) {

			MeleeRandomHeroLoc( whichPlayer, FourCC( "Obla" ), FourCC( "Ofar" ), FourCC( "Otch" ), FourCC( "Oshd" ), heroLoc );

		} else {

			SetPlayerState( whichPlayer, PLAYER_STATE_RESOURCE_HERO_TOKENS, bj_MELEE_STARTING_HERO_TOKENS );

		}

	if ( doCamera ) {

		// Center the camera on the initial Peons.
		SetCameraPositionForPlayer( whichPlayer, peonX, peonY );
		SetCameraQuickPositionForPlayer( whichPlayer, peonX, peonY );

	}

};

// ===========================================================================
// Starting Units for Undead Players
//   - 1 Necropolis, placed at start location
//   - 1 Haunted Gold Mine, placed on nearest gold mine
//   - 3 Acolytes, placed between start location and nearest gold mine
//   - 1 Ghoul, placed between start location and nearest gold mine
//   - Blight, centered on nearest gold mine, spread across a "large area"
//
export const MeleeStartingUnitsUndead = ( whichPlayer: player, startLoc: location, doHeroes: boolean, doCamera: boolean, doPreload: boolean ): void => {

	const useRandomHero = IsMapFlagSet( MAP_RANDOM_HERO );
	const unitSpacing = 64;
	let nearMineLoc: location;
	let nearTownLoc: location;
	let heroLoc: location;
	let peonX: number;
	let peonY: number;
	let ghoulX: number;
	let ghoulY: number;

	if ( doPreload )

		Preloader( "scripts\\UndeadMelee.pld" );

	let nearestMine = MeleeFindNearestMine( startLoc, bj_MELEE_MINE_SEARCH_RADIUS );

	if ( nearestMine !== null ) {

		// Spawn Necropolis at the start location.
		CreateUnitAtLoc( whichPlayer, FourCC( "unpl" ), startLoc, bj_UNIT_FACING );

		// Replace the nearest gold mine with a blighted version.
		nearestMine = BlightGoldMineForPlayerBJ( nearestMine, whichPlayer );
		if ( nearestMine === null ) throw "replaced mine should exist";

		// Spawn Ghoul near the Necropolis.
		nearTownLoc = MeleeGetProjectedLoc( startLoc, GetUnitLoc( nearestMine ), 288, 0 );
		ghoulX = GetLocationX( nearTownLoc );
		ghoulY = GetLocationY( nearTownLoc );
		bj_ghoul[ GetPlayerId( whichPlayer ) ] = CreateUnit( whichPlayer, FourCC( "ugho" ), ghoulX + 0 * unitSpacing, ghoulY + 0 * unitSpacing, bj_UNIT_FACING );

		// Spawn Acolytes near the mine.
		nearMineLoc = MeleeGetProjectedLoc( GetUnitLoc( nearestMine ), startLoc, 320, 0 );
		peonX = GetLocationX( nearMineLoc );
		peonY = GetLocationY( nearMineLoc );
		CreateUnit( whichPlayer, FourCC( "uaco" ), peonX + 0 * unitSpacing, peonY + 0.5 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "uaco" ), peonX + 0.65 * unitSpacing, peonY - 0.5 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "uaco" ), peonX - 0.65 * unitSpacing, peonY - 0.5 * unitSpacing, bj_UNIT_FACING );

		// Create a patch of blight around the gold mine.
		SetBlightLoc( whichPlayer, nearMineLoc, 768, true );

		// Set random hero spawn point to be off to the side of the start location.
		heroLoc = MeleeGetProjectedLoc( GetUnitLoc( nearestMine ), startLoc, 384, 45 );

	} else {

		// Spawn Necropolis at the start location.
		CreateUnitAtLoc( whichPlayer, FourCC( "unpl" ), startLoc, bj_UNIT_FACING );

		// Spawn Acolytes and Ghoul directly south of the Necropolis.
		peonX = GetLocationX( startLoc );
		peonY = GetLocationY( startLoc ) - 224;
		CreateUnit( whichPlayer, FourCC( "uaco" ), peonX - 1.5 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "uaco" ), peonX - 0.5 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "uaco" ), peonX + 0.5 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "ugho" ), peonX + 1.5 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );

		// Create a patch of blight around the start location.
		SetBlightLoc( whichPlayer, startLoc, 768, true );

		// Set random hero spawn point to be just south of the start location.
		heroLoc = Location( peonX, peonY - 2 * unitSpacing );

	}

	if ( doHeroes )

	// If the "Random Hero" option is set, start the player with a random hero.
	// Otherwise, give them a "free hero" token.

		if ( useRandomHero ) {

			MeleeRandomHeroLoc( whichPlayer, FourCC( "Udea" ), FourCC( "Udre" ), FourCC( "Ulic" ), FourCC( "Ucrl" ), heroLoc );

		} else {

			SetPlayerState( whichPlayer, PLAYER_STATE_RESOURCE_HERO_TOKENS, bj_MELEE_STARTING_HERO_TOKENS );

		}

	if ( doCamera ) {

		// Center the camera on the initial Acolytes.
		SetCameraPositionForPlayer( whichPlayer, peonX, peonY );
		SetCameraQuickPositionForPlayer( whichPlayer, peonX, peonY );

	}

};

// ===========================================================================
// Starting Units for Night Elf Players
//   - 1 Tree of Life, placed by nearest gold mine, already entangled
//   - 5 Wisps, placed between Tree of Life and nearest gold mine
//
export const MeleeStartingUnitsNightElf = ( whichPlayer: player, startLoc: location, doHeroes: boolean, doCamera: boolean, doPreload: boolean ): void => {

	const useRandomHero = IsMapFlagSet( MAP_RANDOM_HERO );
	const unitSpacing = 64;
	const minTreeDist = 3.5 * bj_CELLWIDTH;
	const minWispDist = 1.75 * bj_CELLWIDTH;
	let nearMineLoc: location;
	let wispLoc: location;
	let heroLoc: location;
	let peonX: number;
	let peonY: number;
	let tree: unit;

	if ( doPreload )

		Preloader( "scripts\\NightElfMelee.pld" );

	const nearestMine = MeleeFindNearestMine( startLoc, bj_MELEE_MINE_SEARCH_RADIUS );

	if ( nearestMine !== null ) {

		// Spawn Tree of Life near the mine and have it entangle the mine.
		// Project the Tree's coordinates from the gold mine, and then snap
		// the X and Y values to within minTreeDist of the Gold Mine.
		nearMineLoc = MeleeGetProjectedLoc( GetUnitLoc( nearestMine ), startLoc, 650, 0 );
		nearMineLoc = MeleeGetLocWithinRect( nearMineLoc, GetRectFromCircleBJ( GetUnitLoc( nearestMine ), minTreeDist ) );
		tree = CreateUnitAtLoc( whichPlayer, FourCC( "etol" ), nearMineLoc, bj_UNIT_FACING );
		IssueTargetOrder( tree, "entangleinstant", nearestMine );

		// Spawn Wisps at the start location.
		wispLoc = MeleeGetProjectedLoc( GetUnitLoc( nearestMine ), startLoc, 320, 0 );
		wispLoc = MeleeGetLocWithinRect( wispLoc, GetRectFromCircleBJ( GetUnitLoc( nearestMine ), minWispDist ) );
		peonX = GetLocationX( wispLoc );
		peonY = GetLocationY( wispLoc );
		CreateUnit( whichPlayer, FourCC( "ewsp" ), peonX + 0 * unitSpacing, peonY + 1 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "ewsp" ), peonX + 1 * unitSpacing, peonY + 0.15 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "ewsp" ), peonX - 1 * unitSpacing, peonY + 0.15 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "ewsp" ), peonX + 0.58 * unitSpacing, peonY - 1 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "ewsp" ), peonX - 0.58 * unitSpacing, peonY - 1 * unitSpacing, bj_UNIT_FACING );

		// Set random hero spawn point to be off to the side of the start location.
		heroLoc = MeleeGetProjectedLoc( GetUnitLoc( nearestMine ), startLoc, 384, 45 );

	} else {

		// Spawn Tree of Life at the start location.
		CreateUnitAtLoc( whichPlayer, FourCC( "etol" ), startLoc, bj_UNIT_FACING );

		// Spawn Wisps directly south of the town hall.
		peonX = GetLocationX( startLoc );
		peonY = GetLocationY( startLoc ) - 224;
		CreateUnit( whichPlayer, FourCC( "ewsp" ), peonX - 2 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "ewsp" ), peonX - 1 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "ewsp" ), peonX + 0 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "ewsp" ), peonX + 1 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );
		CreateUnit( whichPlayer, FourCC( "ewsp" ), peonX + 2 * unitSpacing, peonY + 0 * unitSpacing, bj_UNIT_FACING );

		// Set random hero spawn point to be just south of the start location.
		heroLoc = Location( peonX, peonY - 2 * unitSpacing );

	}

	if ( doHeroes )

	// If the "Random Hero" option is set, start the player with a random hero.
	// Otherwise, give them a "free hero" token.

		if ( useRandomHero ) {

			MeleeRandomHeroLoc( whichPlayer, FourCC( "Edem" ), FourCC( "Ekee" ), FourCC( "Emoo" ), FourCC( "Ewar" ), heroLoc );

		} else {

			SetPlayerState( whichPlayer, PLAYER_STATE_RESOURCE_HERO_TOKENS, bj_MELEE_STARTING_HERO_TOKENS );

		}

	if ( doCamera ) {

		// Center the camera on the initial Wisps.
		SetCameraPositionForPlayer( whichPlayer, peonX, peonY );
		SetCameraQuickPositionForPlayer( whichPlayer, peonX, peonY );

	}

};

// ===========================================================================
// Starting Units for Players Whose Race is Unknown
//   - 12 Sheep, placed randomly around the start location
//
export const MeleeStartingUnitsUnknownRace = ( whichPlayer: player, startLoc: location, doHeroes: boolean, doCamera: boolean, doPreload: boolean ): void => {

	let index: number;

	if ( doPreload )

		null;

	index = 0;

	while ( true ) {

		CreateUnit( whichPlayer, FourCC( "nshe" ), GetLocationX( startLoc ) + GetRandomReal( - 256, 256 ), GetLocationY( startLoc ) + GetRandomReal( - 256, 256 ), GetRandomReal( 0, 360 ) );
		index = index + 1;
		if ( index === 12 ) break;

	}

	if ( doHeroes )

		// Give them a "free hero" token, out of pity.
		SetPlayerState( whichPlayer, PLAYER_STATE_RESOURCE_HERO_TOKENS, bj_MELEE_STARTING_HERO_TOKENS );

	if ( doCamera ) {

		// Center the camera on the initial sheep.
		SetCameraPositionLocForPlayer( whichPlayer, startLoc );
		SetCameraQuickPositionLocForPlayer( whichPlayer, startLoc );

	}

};

// ===========================================================================
export const MeleeStartingUnits = (): void => {

	let index: number;
	let indexPlayer: player;
	let indexStartLoc: location;
	let indexRace: race;

	Preloader( "scripts\\SharedMelee.pld" );

	index = 0;

	while ( true ) {

		indexPlayer = Player( index );

		if ( GetPlayerSlotState( indexPlayer ) === PLAYER_SLOT_STATE_PLAYING ) {

			indexStartLoc = GetStartLocationLoc( GetPlayerStartLocation( indexPlayer ) );
			indexRace = GetPlayerRace( indexPlayer );

			// Create initial race-specific starting units

			if ( indexRace === RACE_HUMAN )

				MeleeStartingUnitsHuman( indexPlayer, indexStartLoc, true, true, true );

			else if ( indexRace === RACE_ORC )

				MeleeStartingUnitsOrc( indexPlayer, indexStartLoc, true, true, true );

			else if ( indexRace === RACE_UNDEAD )

				MeleeStartingUnitsUndead( indexPlayer, indexStartLoc, true, true, true );

			else if ( indexRace === RACE_NIGHTELF )

				MeleeStartingUnitsNightElf( indexPlayer, indexStartLoc, true, true, true );

			else

				MeleeStartingUnitsUnknownRace( indexPlayer, indexStartLoc, true, true, true );

		}

		index = index + 1;
		if ( index === bj_MAX_PLAYERS ) break;

	}

};

// ===========================================================================
export const MeleeStartingUnitsForPlayer = ( whichRace: race, whichPlayer: player, loc: location, doHeroes: boolean ): void => {

	// Create initial race-specific starting units

	if ( whichRace === RACE_HUMAN )

		MeleeStartingUnitsHuman( whichPlayer, loc, doHeroes, false, false );

	else if ( whichRace === RACE_ORC )

		MeleeStartingUnitsOrc( whichPlayer, loc, doHeroes, false, false );

	else if ( whichRace === RACE_UNDEAD )

		MeleeStartingUnitsUndead( whichPlayer, loc, doHeroes, false, false );

	else if ( whichRace === RACE_NIGHTELF )

		MeleeStartingUnitsNightElf( whichPlayer, loc, doHeroes, false, false );

	else {

		// Unrecognized race - ignore the request.

	}

};

// ***************************************************************************
// *
// *  Melee Template Starting AI Scripts
// *
// ***************************************************************************

// ===========================================================================
export const PickMeleeAI = ( num: player, s1: string, s2: string | null, s3: string | null ): void => {

	let pick: number;

	// easy difficulty never uses any custom AI scripts
	// that are designed to be a bit more challenging
	//

	if ( GetAIDifficulty( num ) === AI_DIFFICULTY_NEWBIE ) {

		StartMeleeAI( num, s1 );
		return;

	}

	if ( s2 === null ) pick = 1;
	else if ( s3 === null ) pick = GetRandomInt( 1, 2 );
	else pick = GetRandomInt( 1, 3 );

	if ( pick === 1 ) StartMeleeAI( num, s1 );
	else if ( pick === 2 ) StartMeleeAI( num, s2 );
	else StartMeleeAI( num, s3 );

};

// ===========================================================================
export const MeleeStartingAI = (): void => {

	let index: number;
	let indexPlayer: player;
	let indexRace: race;

	index = 0;

	while ( true ) {

		indexPlayer = Player( index );

		if ( GetPlayerSlotState( indexPlayer ) === PLAYER_SLOT_STATE_PLAYING ) {

			indexRace = GetPlayerRace( indexPlayer );

			if ( GetPlayerController( indexPlayer ) === MAP_CONTROL_COMPUTER ) {

				// Run a race-specific melee AI script.

				if ( indexRace === RACE_HUMAN )

					PickMeleeAI( indexPlayer, "human.ai", null, null );

				else if ( indexRace === RACE_ORC )

					PickMeleeAI( indexPlayer, "orc.ai", null, null );

				else if ( indexRace === RACE_UNDEAD ) {

					PickMeleeAI( indexPlayer, "undead.ai", null, null );
					RecycleGuardPosition( bj_ghoul[ index ] );

				} else if ( indexRace === RACE_NIGHTELF )

					PickMeleeAI( indexPlayer, "elf.ai", null, null );

				else {

					// Unrecognized race.

				}

				ShareEverythingWithTeamAI( indexPlayer );

			}

		}

		index = index + 1;
		if ( index === bj_MAX_PLAYERS ) break;

	}

};

export const LockGuardPosition = ( targ: unit ): void => {

	SetUnitCreepGuard( targ, true );

};

// ***************************************************************************
// *
// *  Melee Template Victory / Defeat Conditions
// *
// ***************************************************************************

// ===========================================================================
export const MeleePlayerIsOpponent = ( playerIndex: number, opponentIndex: number ): boolean => {

	const thePlayer = Player( playerIndex );
	const theOpponent = Player( opponentIndex );

	// The player himself is not an opponent.

	if ( playerIndex === opponentIndex )

		return false;

	// Unused player slots are not opponents.

	if ( GetPlayerSlotState( theOpponent ) !== PLAYER_SLOT_STATE_PLAYING )

		return false;

	// Players who are already defeated are not opponents.

	if ( bj_meleeDefeated[ opponentIndex ] )

		return false;

	// Allied players with allied victory set are not opponents.

	if ( GetPlayerAlliance( thePlayer, theOpponent, ALLIANCE_PASSIVE ) )

		if ( GetPlayerAlliance( theOpponent, thePlayer, ALLIANCE_PASSIVE ) ) {

			if ( GetPlayerState( thePlayer, PLAYER_STATE_ALLIED_VICTORY ) === 1 )

				if ( GetPlayerState( theOpponent, PLAYER_STATE_ALLIED_VICTORY ) === 1 ) {

					return false;

				}

		}

	return true;

};

// ===========================================================================
// Count buildings currently owned by all allies, including the player themself.
//
export const MeleeGetAllyStructureCount = ( whichPlayer: player ): number => {

	let playerIndex: number;
	let buildingCount: number;
	let indexPlayer: player;

	// Count the number of buildings controlled by all not-yet-defeated co-allies.
	buildingCount = 0;
	playerIndex = 0;

	while ( true ) {

		indexPlayer = Player( playerIndex );

		// uncomment to cause defeat even if you have control of ally structures, but yours have been nixed
		// if (PlayersAreCoAllied(whichPlayer, indexPlayer) and not bj_meleeDefeated[playerIndex]) then

		if ( PlayersAreCoAllied( whichPlayer, indexPlayer ) )

			buildingCount = buildingCount + GetPlayerStructureCount( indexPlayer, true );

		playerIndex = playerIndex + 1;
		if ( playerIndex === bj_MAX_PLAYERS ) break;

	}

	return buildingCount;

};

// ===========================================================================
// Count allies, excluding dead players and the player themself.
//
export const MeleeGetAllyCount = ( whichPlayer: player ): number => {

	let playerIndex: number;
	let playerCount: number;
	let indexPlayer: player;

	// Count the number of not-yet-defeated co-allies.
	playerCount = 0;
	playerIndex = 0;

	while ( true ) {

		indexPlayer = Player( playerIndex );

		if ( PlayersAreCoAllied( whichPlayer, indexPlayer ) && ! bj_meleeDefeated[ playerIndex ] && whichPlayer !== indexPlayer )

			playerCount = playerCount + 1;

		playerIndex = playerIndex + 1;
		if ( playerIndex === bj_MAX_PLAYERS ) break;

	}

	return playerCount;

};

// ===========================================================================
// Counts key structures owned by a player and his or her allies, including
// structures currently upgrading or under construction.
//
// Key structures: Town Hall, Great Hall, Tree of Life, Necropolis
//
export const MeleeGetAllyKeyStructureCount = ( whichPlayer: player ): number => {

	let playerIndex: number;
	let indexPlayer: player;
	let keyStructs: number;

	// Count the number of buildings controlled by all not-yet-defeated co-allies.
	keyStructs = 0;
	playerIndex = 0;

	while ( true ) {

		indexPlayer = Player( playerIndex );

		if ( PlayersAreCoAllied( whichPlayer, indexPlayer ) ) {

			keyStructs = keyStructs + GetPlayerTypedUnitCount( indexPlayer, "townhall", true, true );
			keyStructs = keyStructs + GetPlayerTypedUnitCount( indexPlayer, "greathall", true, true );
			keyStructs = keyStructs + GetPlayerTypedUnitCount( indexPlayer, "treeoflife", true, true );
			keyStructs = keyStructs + GetPlayerTypedUnitCount( indexPlayer, "necropolis", true, true );

		}

		playerIndex = playerIndex + 1;
		if ( playerIndex === bj_MAX_PLAYERS ) break;

	}

	return keyStructs;

};

// ===========================================================================
// Enum: Draw out a specific player.
//
export const MeleeDoDrawEnum = (): void => {

	const thePlayer = GetEnumPlayer();

	CachePlayerHeroData( thePlayer );
	RemovePlayerPreserveUnitsBJ( thePlayer, PLAYER_GAME_RESULT_TIE, false );

};

// ===========================================================================
// Enum: Victory out a specific player.
//
export const MeleeDoVictoryEnum = (): void => {

	const thePlayer = GetEnumPlayer();
	const playerIndex = GetPlayerId( thePlayer );

	if ( ! bj_meleeVictoried[ playerIndex ] ) {

		bj_meleeVictoried[ playerIndex ] = true;
		CachePlayerHeroData( thePlayer );
		RemovePlayerPreserveUnitsBJ( thePlayer, PLAYER_GAME_RESULT_VICTORY, false );

	}

};

// ===========================================================================
// Defeat out a specific player.
//
export const MeleeDoDefeat = ( whichPlayer: player ): void => {

	bj_meleeDefeated[ GetPlayerId( whichPlayer ) ] = true;
	RemovePlayerPreserveUnitsBJ( whichPlayer, PLAYER_GAME_RESULT_DEFEAT, false );

};

// ===========================================================================
// Enum: Defeat out a specific player.
//
export const MeleeDoDefeatEnum = (): void => {

	const thePlayer = GetEnumPlayer();

	// needs to happen before ownership change
	CachePlayerHeroData( thePlayer );
	MakeUnitsPassiveForTeam( thePlayer );
	MeleeDoDefeat( thePlayer );

};

// ===========================================================================
// A specific player left the game.
//
export const MeleeDoLeave = ( whichPlayer: player ): void => {

	if ( GetIntegerGameState( GAME_STATE_DISCONNECTED ) !== 0 )

		GameOverDialogBJ( whichPlayer, true );

	else {

		bj_meleeDefeated[ GetPlayerId( whichPlayer ) ] = true;
		RemovePlayerPreserveUnitsBJ( whichPlayer, PLAYER_GAME_RESULT_DEFEAT, true );

	}

};

// ===========================================================================
// Remove all observers
//
export const MeleeRemoveObservers = (): void => {

	let playerIndex: number;
	let indexPlayer: player;

	// Give all observers the game over dialog
	playerIndex = 0;

	while ( true ) {

		indexPlayer = Player( playerIndex );

		if ( IsPlayerObserver( indexPlayer ) )

			RemovePlayerPreserveUnitsBJ( indexPlayer, PLAYER_GAME_RESULT_NEUTRAL, false );

		playerIndex = playerIndex + 1;
		if ( playerIndex === bj_MAX_PLAYERS ) break;

	}

};

// ===========================================================================
// Test all players to determine if a team has won.  For a team to win, all
// remaining (read: undefeated) players need to be co-allied with all other
// remaining players.  If even one player is not allied towards another,
// everyone must be denied victory.
//
export const MeleeCheckForVictors = (): force => {

	let playerIndex: number;
	let opponentIndex: number;
	const opponentlessPlayers = CreateForce();
	let gameOver = false;

	// Check to see if any players have opponents remaining.
	playerIndex = 0;

	while ( true ) {

		if ( ! bj_meleeDefeated[ playerIndex ] ) {

			// Determine whether or not this player has any remaining opponents.
			opponentIndex = 0;

			while ( true ) {

				// If anyone has an opponent, noone can be victorious yet.

				if ( MeleePlayerIsOpponent( playerIndex, opponentIndex ) )

					return CreateForce();

				opponentIndex = opponentIndex + 1;
				if ( opponentIndex === bj_MAX_PLAYERS ) break;

			}

			// Keep track of each opponentless player so that we can give
			// them a victory later.
			ForceAddPlayer( opponentlessPlayers, Player( playerIndex ) );
			gameOver = true;

		}

		playerIndex = playerIndex + 1;
		if ( playerIndex === bj_MAX_PLAYERS ) break;

	}

	// Set the game over global flag
	bj_meleeGameOver = gameOver;

	return opponentlessPlayers;

};

// ===========================================================================
// Test each player to determine if anyone has been defeated.
//
export const MeleeCheckForLosersAndVictors = (): void => {

	let playerIndex: number;
	let indexPlayer: player;
	const defeatedPlayers = CreateForce();

	// If the game is already over, do nothing

	if ( bj_meleeGameOver )

		return;

	// If the game was disconnected then it is over, in this case we
	// don't want to report results for anyone as they will most likely
	// conflict with the actual game results

	if ( GetIntegerGameState( GAME_STATE_DISCONNECTED ) !== 0 ) {

		bj_meleeGameOver = true;
		return;

	}

	// Check each player to see if he or she has been defeated yet.
	playerIndex = 0;

	while ( true ) {

		indexPlayer = Player( playerIndex );

		if ( ! bj_meleeDefeated[ playerIndex ] && ! bj_meleeVictoried[ playerIndex ] )

		// call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 60, "Player"+I2S(playerIndex)+" has "+I2S(MeleeGetAllyStructureCount(indexPlayer))+" ally buildings.")

			if ( MeleeGetAllyStructureCount( indexPlayer ) <= 0 ) {

				// Keep track of each defeated player so that we can give
				// them a defeat later.
				ForceAddPlayer( defeatedPlayers, Player( playerIndex ) );

				// Set their defeated flag now so MeleeCheckForVictors
				// can detect victors.
				bj_meleeDefeated[ playerIndex ] = true;

			}

		playerIndex = playerIndex + 1;
		if ( playerIndex === bj_MAX_PLAYERS ) break;

	}

	// Now that the defeated flags are set, check if there are any victors
	const victoriousPlayers = MeleeCheckForVictors();

	// Defeat all defeated players
	ForForce( defeatedPlayers, MeleeDoDefeatEnum );

	// Give victory to all victorious players
	ForForce( victoriousPlayers, MeleeDoVictoryEnum );

	// If the game is over we should remove all observers

	if ( bj_meleeGameOver ) MeleeRemoveObservers();

};

// ===========================================================================
// Returns a race-specific "build X or be revealed" message.
//
export const MeleeGetCrippledWarningMessage = ( whichPlayer: player ): string => {

	const r = GetPlayerRace( whichPlayer );

	if ( r === RACE_HUMAN )

		return GetLocalizedString( "CRIPPLE_WARNING_HUMAN" );

	else if ( r === RACE_ORC )

		return GetLocalizedString( "CRIPPLE_WARNING_ORC" );

	else if ( r === RACE_NIGHTELF )

		return GetLocalizedString( "CRIPPLE_WARNING_NIGHTELF" );

	else if ( r === RACE_UNDEAD )

		return GetLocalizedString( "CRIPPLE_WARNING_UNDEAD" );

	else

		// Unrecognized Race
		return "";

};

// ===========================================================================
// Returns a race-specific "build X" label for cripple timers.
//
export const MeleeGetCrippledTimerMessage = ( whichPlayer: player ): string => {

	const r = GetPlayerRace( whichPlayer );

	if ( r === RACE_HUMAN )

		return GetLocalizedString( "CRIPPLE_TIMER_HUMAN" );

	else if ( r === RACE_ORC )

		return GetLocalizedString( "CRIPPLE_TIMER_ORC" );

	else if ( r === RACE_NIGHTELF )

		return GetLocalizedString( "CRIPPLE_TIMER_NIGHTELF" );

	else if ( r === RACE_UNDEAD )

		return GetLocalizedString( "CRIPPLE_TIMER_UNDEAD" );

	else

		// Unrecognized Race
		return "";

};

// ===========================================================================
// Returns a race-specific "build X" label for cripple timers.
//
export const MeleeGetCrippledRevealedMessage = ( whichPlayer: player ): string => GetLocalizedString( "CRIPPLE_REVEALING_PREFIX" ) + GetPlayerName( whichPlayer ) + GetLocalizedString( "CRIPPLE_REVEALING_POSTFIX" );

// ===========================================================================
export const MeleeExposePlayer = ( whichPlayer: player, expose: boolean ): void => {

	let playerIndex: number;
	let indexPlayer: player;
	const toExposeTo = CreateForce();

	CripplePlayer( whichPlayer, toExposeTo, false );

	bj_playerIsExposed[ GetPlayerId( whichPlayer ) ] = expose;
	playerIndex = 0;

	while ( true ) {

		indexPlayer = Player( playerIndex );

		if ( ! PlayersAreCoAllied( whichPlayer, indexPlayer ) )

			ForceAddPlayer( toExposeTo, indexPlayer );

		playerIndex = playerIndex + 1;
		if ( playerIndex === bj_MAX_PLAYERS ) break;

	}

	CripplePlayer( whichPlayer, toExposeTo, expose );
	DestroyForce( toExposeTo );

};

// ===========================================================================
export const MeleeExposeAllPlayers = (): void => {

	let playerIndex: number;
	let indexPlayer: player;
	let playerIndex2: number;
	let indexPlayer2: player;
	const toExposeTo = CreateForce();

	playerIndex = 0;

	while ( true ) {

		indexPlayer = Player( playerIndex );

		ForceClear( toExposeTo );
		CripplePlayer( indexPlayer, toExposeTo, false );

		playerIndex2 = 0;

		while ( true ) {

			indexPlayer2 = Player( playerIndex2 );

			if ( playerIndex !== playerIndex2 )

				if ( ! PlayersAreCoAllied( indexPlayer, indexPlayer2 ) ) {

					ForceAddPlayer( toExposeTo, indexPlayer2 );

				}

			playerIndex2 = playerIndex2 + 1;
			if ( playerIndex2 === bj_MAX_PLAYERS ) break;

		}

		CripplePlayer( indexPlayer, toExposeTo, true );

		playerIndex = playerIndex + 1;
		if ( playerIndex === bj_MAX_PLAYERS ) break;

	}

	DestroyForce( toExposeTo );

};

// ===========================================================================
export const MeleeCrippledPlayerTimeout = (): void => {

	const expiredTimer = GetExpiredTimer();
	let playerIndex: number;

	// Determine which player's timer expired.
	playerIndex = 0;

	while ( true ) {

		if ( bj_crippledTimer[ playerIndex ] === expiredTimer )

			if ( true ) break;

		playerIndex = playerIndex + 1;
		if ( playerIndex === bj_MAX_PLAYERS ) break;

	}

	if ( playerIndex === bj_MAX_PLAYERS )

		return;

	const exposedPlayer = Player( playerIndex );

	if ( GetLocalPlayer() === exposedPlayer )

	// Use only local code (no net traffic) within this block to avoid desyncs.

		// Hide the timer window for this player.
		TimerDialogDisplay( bj_crippledTimerWindows[ playerIndex ], false );

	// Display a text message to all players, explaining the exposure.
	DisplayTimedTextToPlayer( GetLocalPlayer(), 0, 0, bj_MELEE_CRIPPLE_MSG_DURATION, MeleeGetCrippledRevealedMessage( exposedPlayer ) );

	// Expose the player.
	MeleeExposePlayer( exposedPlayer, true );

};

// ===========================================================================
export const MeleePlayerIsCrippled = ( whichPlayer: player ): boolean => {

	const allyStructures = MeleeGetAllyStructureCount( whichPlayer );
	const allyKeyStructures = MeleeGetAllyKeyStructureCount( whichPlayer );

	// Dead teams are not considered to be crippled.
	return allyStructures > 0 && allyKeyStructures <= 0;

};

// ===========================================================================
// Test each player to determine if anyone has become crippled.
//
export const MeleeCheckForCrippledPlayers = (): void => {

	let playerIndex: number;
	let indexPlayer: player;
	let isNowCrippled: boolean;

	// The "finish soon" exposure of all players overrides any "crippled" exposure

	if ( bj_finishSoonAllExposed )

		return;

	// Check each player to see if he or she has been crippled or uncrippled.
	playerIndex = 0;

	while ( true ) {

		indexPlayer = Player( playerIndex );
		isNowCrippled = MeleePlayerIsCrippled( indexPlayer );

		if ( ! bj_playerIsCrippled[ playerIndex ] && isNowCrippled ) {

			// Player became crippled; start their cripple timer.
			bj_playerIsCrippled[ playerIndex ] = true;
			TimerStart( bj_crippledTimer[ playerIndex ], bj_MELEE_CRIPPLE_TIMEOUT, false, MeleeCrippledPlayerTimeout );

			if ( GetLocalPlayer() === indexPlayer ) {

				// Use only local code (no net traffic) within this block to avoid desyncs.

				// Show the timer window.
				TimerDialogDisplay( bj_crippledTimerWindows[ playerIndex ], true );

				// Display a warning message.
				DisplayTimedTextToPlayer( indexPlayer, 0, 0, bj_MELEE_CRIPPLE_MSG_DURATION, MeleeGetCrippledWarningMessage( indexPlayer ) );

			}

		} else if ( bj_playerIsCrippled[ playerIndex ] && ! isNowCrippled ) {

			// Player became uncrippled; stop their cripple timer.
			bj_playerIsCrippled[ playerIndex ] = false;
			PauseTimer( bj_crippledTimer[ playerIndex ] );

			if ( GetLocalPlayer() === indexPlayer ) {

				// Use only local code (no net traffic) within this block to avoid desyncs.

				// Hide the timer window for this player.
				TimerDialogDisplay( bj_crippledTimerWindows[ playerIndex ], false );

				// Display a confirmation message if the player's team is still alive.

				if ( MeleeGetAllyStructureCount( indexPlayer ) > 0 )

					if ( bj_playerIsExposed[ playerIndex ] ) {

						DisplayTimedTextToPlayer( indexPlayer, 0, 0, bj_MELEE_CRIPPLE_MSG_DURATION, GetLocalizedString( "CRIPPLE_UNREVEALED" ) );

					} else {

						DisplayTimedTextToPlayer( indexPlayer, 0, 0, bj_MELEE_CRIPPLE_MSG_DURATION, GetLocalizedString( "CRIPPLE_UNCRIPPLED" ) );

					}

			}

			// If the player granted shared vision, deny that vision now.
			MeleeExposePlayer( indexPlayer, false );

		}

		playerIndex = playerIndex + 1;
		if ( playerIndex === bj_MAX_PLAYERS ) break;

	}

};

// ===========================================================================
// Determine if the lost unit should result in any defeats or victories.
//
export const MeleeCheckLostUnit = ( lostUnit: unit ): void => {

	const lostUnitOwner = GetOwningPlayer( lostUnit );

	// We only need to check for mortality if this was the last building.

	if ( GetPlayerStructureCount( lostUnitOwner, true ) <= 0 )

		MeleeCheckForLosersAndVictors();

	// Check if the lost unit has crippled or uncrippled the player.
	// (A team with 0 units is dead, and thus considered uncrippled.)
	MeleeCheckForCrippledPlayers();

};

// ===========================================================================
// Determine if the gained unit should result in any defeats, victories,
// or cripple-status changes.
//
export const MeleeCheckAddedUnit = ( addedUnit: unit ): void => {

	const addedUnitOwner = GetOwningPlayer( addedUnit );

	// If the player was crippled, this unit may have uncrippled him/her.

	if ( bj_playerIsCrippled[ GetPlayerId( addedUnitOwner ) ] )

		MeleeCheckForCrippledPlayers();

};

// ===========================================================================
export const MeleeTriggerActionConstructCancel = (): void => {

	MeleeCheckLostUnit( GetCancelledStructure() );

};

// ===========================================================================
export const MeleeTriggerActionUnitDeath = (): void => {

	if ( IsUnitType( GetDyingUnit(), UNIT_TYPE_STRUCTURE ) )

		MeleeCheckLostUnit( GetDyingUnit() );

};

// ===========================================================================
export const MeleeTriggerActionUnitConstructionStart = (): void => {

	MeleeCheckAddedUnit( GetConstructingStructure() );

};

// ===========================================================================
export const MeleeTriggerActionPlayerDefeated = (): void => {

	const thePlayer = GetTriggerPlayer();
	CachePlayerHeroData( thePlayer );

	if ( MeleeGetAllyCount( thePlayer ) > 0 ) {

		// If at least one ally is still alive and kicking, share units with
		// them and proceed with death.
		ShareEverythingWithTeam( thePlayer );

		if ( ! bj_meleeDefeated[ GetPlayerId( thePlayer ) ] )

			MeleeDoDefeat( thePlayer );

	} else {

		// If no living allies remain, swap all units and buildings over to
		// neutral_passive and proceed with death.
		MakeUnitsPassiveForTeam( thePlayer );

		if ( ! bj_meleeDefeated[ GetPlayerId( thePlayer ) ] )

			MeleeDoDefeat( thePlayer );

	}

	MeleeCheckForLosersAndVictors();

};

// ===========================================================================
export const MeleeTriggerActionPlayerLeft = (): void => {

	const thePlayer = GetTriggerPlayer();

	// Just show game over for observers when they leave

	if ( IsPlayerObserver( thePlayer ) ) {

		RemovePlayerPreserveUnitsBJ( thePlayer, PLAYER_GAME_RESULT_NEUTRAL, false );
		return;

	}

	CachePlayerHeroData( thePlayer );

	// This is the same as defeat except the player generates the message
	// "player left the game" as opposed to "player was defeated".

	if ( MeleeGetAllyCount( thePlayer ) > 0 ) {

		// If at least one ally is still alive and kicking, share units with
		// them and proceed with death.
		ShareEverythingWithTeam( thePlayer );
		MeleeDoLeave( thePlayer );

	} else {

		// If no living allies remain, swap all units and buildings over to
		// neutral_passive and proceed with death.
		MakeUnitsPassiveForTeam( thePlayer );
		MeleeDoLeave( thePlayer );

	}

	MeleeCheckForLosersAndVictors();

};

// ===========================================================================
export const MeleeTriggerActionAllianceChange = (): void => {

	MeleeCheckForLosersAndVictors();
	MeleeCheckForCrippledPlayers();

};

// ===========================================================================
export const MeleeTriggerTournamentFinishSoon = (): void => {

	// Note: We may get this trigger multiple times
	let playerIndex: number;
	let indexPlayer: player;
	const timeRemaining = GetTournamentFinishSoonTimeRemaining();

	if ( ! bj_finishSoonAllExposed ) {

		bj_finishSoonAllExposed = true;

		// Reset all crippled players and their timers, and hide the local crippled timer dialog
		playerIndex = 0;

		while ( true ) {

			indexPlayer = Player( playerIndex );

			if ( bj_playerIsCrippled[ playerIndex ] ) {

				// Uncripple the player
				bj_playerIsCrippled[ playerIndex ] = false;
				PauseTimer( bj_crippledTimer[ playerIndex ] );

				if ( GetLocalPlayer() === indexPlayer )

				// Use only local code (no net traffic) within this block to avoid desyncs.

					// Hide the timer window.
					TimerDialogDisplay( bj_crippledTimerWindows[ playerIndex ], false );

			}

			playerIndex = playerIndex + 1;
			if ( playerIndex === bj_MAX_PLAYERS ) break;

		}

		// Expose all players
		MeleeExposeAllPlayers();

	}

	// Show the "finish soon" timer dialog and set the real time remaining
	TimerDialogDisplay( bj_finishSoonTimerDialog, true );
	TimerDialogSetRealTimeRemaining( bj_finishSoonTimerDialog, timeRemaining );

};

// ===========================================================================
export const MeleeWasUserPlayer = ( whichPlayer: player ): boolean => {

	if ( GetPlayerController( whichPlayer ) !== MAP_CONTROL_USER )
		return false;

	const slotState = GetPlayerSlotState( whichPlayer );

	return slotState === PLAYER_SLOT_STATE_PLAYING || slotState === PLAYER_SLOT_STATE_LEFT;

};

// ===========================================================================
export const MeleeTournamentFinishNowRuleA = ( multiplier: number ): void => {

	const playerScore: Array<number> = [];
	const teamScore: Array<number> = [];
	const teamForce: Array<force> = [];
	let teamCount: number;
	let index: number;
	let indexPlayer: player;
	let index2: number;
	let indexPlayer2: player;
	let bestTeam: number;
	let bestScore: number;
	let draw: boolean;

	// Compute individual player scores
	index = 0;

	while ( true ) {

		indexPlayer = Player( index );

		if ( MeleeWasUserPlayer( indexPlayer ) ) {

			playerScore[ index ] = GetTournamentScore( indexPlayer );

			if ( playerScore[ index ] <= 0 )

				playerScore[ index ] = 1;

		} else

			playerScore[ index ] = 0;

		index = index + 1;
		if ( index === bj_MAX_PLAYERS ) break;

	}

	// Compute team scores and team forces
	teamCount = 0;
	index = 0;

	while ( true ) {

		if ( playerScore[ index ] !== 0 ) {

			indexPlayer = Player( index );

			teamScore[ teamCount ] = 0;
			teamForce[ teamCount ] = CreateForce();

			index2 = index;

			while ( true ) {

				if ( playerScore[ index2 ] !== 0 ) {

					indexPlayer2 = Player( index2 );

					if ( PlayersAreCoAllied( indexPlayer, indexPlayer2 ) ) {

						teamScore[ teamCount ] = teamScore[ teamCount ] + playerScore[ index2 ];
						ForceAddPlayer( teamForce[ teamCount ], indexPlayer2 );
						playerScore[ index2 ] = 0;

					}

				}

				index2 = index2 + 1;
				if ( index2 === bj_MAX_PLAYERS ) break;

			}

			teamCount = teamCount + 1;

		}

		index = index + 1;
		if ( index === bj_MAX_PLAYERS ) break;

	}

	// The game is now over
	bj_meleeGameOver = true;

	// There should always be at least one team, but continue to work if not

	if ( teamCount !== 0 ) {

		// Find best team score
		bestTeam = - 1;
		bestScore = - 1;
		index = 0;

		while ( true ) {

			if ( teamScore[ index ] > bestScore ) {

				bestTeam = index;
				bestScore = teamScore[ index ];

			}

			index = index + 1;
			if ( index === teamCount ) break;

		}

		// Check whether the best team's score is 'multiplier' times better than
		// every other team. In the case of multiplier == 1 and exactly equal team
		// scores, the first team (which was randomly chosen by the server) will win.
		draw = false;
		index = 0;

		while ( true ) {

			if ( index !== bestTeam )

				if ( bestScore < multiplier * teamScore[ index ] ) {

					draw = true;

				}

			index = index + 1;
			if ( index === teamCount ) break;

		}

		if ( draw ) {

			// Give draw to all players on all teams
			index = 0;

			while ( true ) {

				ForForce( teamForce[ index ], MeleeDoDrawEnum );

				index = index + 1;
				if ( index === teamCount ) break;

			}

		} else {

			// Give defeat to all players on teams other than the best team
			index = 0;

			while ( true ) {

				if ( index !== bestTeam )

					ForForce( teamForce[ index ], MeleeDoDefeatEnum );

				index = index + 1;
				if ( index === teamCount ) break;

			}

			// Give victory to all players on the best team
			ForForce( teamForce[ bestTeam ], MeleeDoVictoryEnum );

		}

	}

};

// ===========================================================================
export const MeleeTriggerTournamentFinishNow = (): void => {

	const rule = GetTournamentFinishNowRule();

	// If the game is already over, do nothing

	if ( bj_meleeGameOver )

		return;

	if ( rule === 1 )

		// Finals games
		MeleeTournamentFinishNowRuleA( 1 );

	else

		// Preliminary games
		MeleeTournamentFinishNowRuleA( 3 );

	// Since the game is over we should remove all observers
	MeleeRemoveObservers();

};

// ===========================================================================
export const MeleeInitVictoryDefeat = (): void => {

	let trig: trigger;
	let index: number;
	let indexPlayer: player;

	// Create a timer window for the "finish soon" timeout period, it has no timer
	// because it is driven by real time (outside of the game state to avoid desyncs)
	bj_finishSoonTimerDialog = CreateTimerDialog( null );

	// Set a trigger to fire when we receive a "finish soon" game event
	trig = CreateTrigger();
	TriggerRegisterGameEvent( trig, EVENT_GAME_TOURNAMENT_FINISH_SOON );
	TriggerAddAction( trig, MeleeTriggerTournamentFinishSoon );

	// Set a trigger to fire when we receive a "finish now" game event
	trig = CreateTrigger();
	TriggerRegisterGameEvent( trig, EVENT_GAME_TOURNAMENT_FINISH_NOW );
	TriggerAddAction( trig, MeleeTriggerTournamentFinishNow );

	// Set up each player's mortality code.
	index = 0;

	while ( true ) {

		indexPlayer = Player( index );

		// Make sure this player slot is playing.

		if ( GetPlayerSlotState( indexPlayer ) === PLAYER_SLOT_STATE_PLAYING ) {

			bj_meleeDefeated[ index ] = false;
			bj_meleeVictoried[ index ] = false;

			// Create a timer and timer window in case the player is crippled.
			bj_playerIsCrippled[ index ] = false;
			bj_playerIsExposed[ index ] = false;
			bj_crippledTimer[ index ] = CreateTimer();
			bj_crippledTimerWindows[ index ] = CreateTimerDialog( bj_crippledTimer[ index ] );
			TimerDialogSetTitle( bj_crippledTimerWindows[ index ], MeleeGetCrippledTimerMessage( indexPlayer ) );

			// Set a trigger to fire whenever a building is cancelled for this player.
			trig = CreateTrigger();
			TriggerRegisterPlayerUnitEvent( trig, indexPlayer, EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL, null );
			TriggerAddAction( trig, MeleeTriggerActionConstructCancel );

			// Set a trigger to fire whenever a unit dies for this player.
			trig = CreateTrigger();
			TriggerRegisterPlayerUnitEvent( trig, indexPlayer, EVENT_PLAYER_UNIT_DEATH, null );
			TriggerAddAction( trig, MeleeTriggerActionUnitDeath );

			// Set a trigger to fire whenever a unit begins construction for this player
			trig = CreateTrigger();
			TriggerRegisterPlayerUnitEvent( trig, indexPlayer, EVENT_PLAYER_UNIT_CONSTRUCT_START, null );
			TriggerAddAction( trig, MeleeTriggerActionUnitConstructionStart );

			// Set a trigger to fire whenever this player defeats-out
			trig = CreateTrigger();
			TriggerRegisterPlayerEvent( trig, indexPlayer, EVENT_PLAYER_DEFEAT );
			TriggerAddAction( trig, MeleeTriggerActionPlayerDefeated );

			// Set a trigger to fire whenever this player leaves
			trig = CreateTrigger();
			TriggerRegisterPlayerEvent( trig, indexPlayer, EVENT_PLAYER_LEAVE );
			TriggerAddAction( trig, MeleeTriggerActionPlayerLeft );

			// Set a trigger to fire whenever this player changes his/her alliances.
			trig = CreateTrigger();
			TriggerRegisterPlayerAllianceChange( trig, indexPlayer, ALLIANCE_PASSIVE );
			TriggerRegisterPlayerStateEvent( trig, indexPlayer, PLAYER_STATE_ALLIED_VICTORY, EQUAL, 1 );
			TriggerAddAction( trig, MeleeTriggerActionAllianceChange );

		} else {

			bj_meleeDefeated[ index ] = true;
			bj_meleeVictoried[ index ] = false;

			// Handle leave events for observers

			if ( IsPlayerObserver( indexPlayer ) ) {

				// Set a trigger to fire whenever this player leaves
				trig = CreateTrigger();
				TriggerRegisterPlayerEvent( trig, indexPlayer, EVENT_PLAYER_LEAVE );
				TriggerAddAction( trig, MeleeTriggerActionPlayerLeft );

			}

		}

		index = index + 1;
		if ( index === bj_MAX_PLAYERS ) break;

	}

	// Test for victory / defeat at startup, in case the user has already won / lost.
	// Allow for a short time to pass first, so that the map can finish loading.
	TimerStart( CreateTimer(), 2, false, MeleeTriggerActionAllianceChange );

};

// ***************************************************************************
// *
// *  Player Slot Availability
// *
// ***************************************************************************

// ===========================================================================
export const CheckInitPlayerSlotAvailability = (): void => {

	let index: number;

	if ( ! bj_slotControlReady ) {

		index = 0;

		while ( true ) {

			bj_slotControlUsed[ index ] = false;
			bj_slotControl[ index ] = MAP_CONTROL_USER;
			index = index + 1;
			if ( index === bj_MAX_PLAYERS ) break;

		}

		bj_slotControlReady = true;

	}

};

// ===========================================================================
export const SetPlayerSlotAvailable = ( whichPlayer: player, control: mapcontrol ): void => {

	const playerIndex = GetPlayerId( whichPlayer );

	CheckInitPlayerSlotAvailability();
	bj_slotControlUsed[ playerIndex ] = true;
	bj_slotControl[ playerIndex ] = control;

};

// ***************************************************************************
// *
// *  Generic Template Player-slot Initialization
// *
// ***************************************************************************

// ===========================================================================
export const TeamInitPlayerSlots = ( teamCount: number ): void => {

	let index: number;
	let indexPlayer: player;
	let team: number;

	SetTeams( teamCount );

	CheckInitPlayerSlotAvailability();
	index = 0;
	team = 0;

	while ( true ) {

		if ( bj_slotControlUsed[ index ] ) {

			indexPlayer = Player( index );
			SetPlayerTeam( indexPlayer, team );
			team = team + 1;

			if ( team >= teamCount )

				team = 0;

		}

		index = index + 1;
		if ( index === bj_MAX_PLAYERS ) break;

	}

};

// ===========================================================================
export const MeleeInitPlayerSlots = (): void => {

	TeamInitPlayerSlots( bj_MAX_PLAYERS );

};

// ===========================================================================
export const FFAInitPlayerSlots = (): void => {

	TeamInitPlayerSlots( bj_MAX_PLAYERS );

};

// ===========================================================================
export const OneOnOneInitPlayerSlots = (): void => {

	// Limit the game to 2 players.
	SetTeams( 2 );
	SetPlayers( 2 );
	TeamInitPlayerSlots( 2 );

};

// ===========================================================================
export const InitGenericPlayerSlots = (): void => {

	const gType = GetGameTypeSelected();

	if ( gType === GAME_TYPE_MELEE )

		MeleeInitPlayerSlots();

	else if ( gType === GAME_TYPE_FFA )

		FFAInitPlayerSlots();

	else if ( gType === GAME_TYPE_USE_MAP_SETTINGS ) {

		// Do nothing; the map-specific script handles this.

	} else if ( gType === GAME_TYPE_ONE_ON_ONE )

		OneOnOneInitPlayerSlots();

	else if ( gType === GAME_TYPE_TWO_TEAM_PLAY )

		TeamInitPlayerSlots( 2 );

	else if ( gType === GAME_TYPE_THREE_TEAM_PLAY )

		TeamInitPlayerSlots( 3 );

	else if ( gType === GAME_TYPE_FOUR_TEAM_PLAY )

		TeamInitPlayerSlots( 4 );

	else {

		// Unrecognized Game Type

	}

};

// ***************************************************************************
// *
// *  Blizzard.j Initialization
// *
// ***************************************************************************

// ===========================================================================
export const SetDNCSoundsDawn = (): void => {

	if ( bj_useDawnDuskSounds )

		StartSound( bj_dawnSound );

};

// ===========================================================================
export const SetDNCSoundsDusk = (): void => {

	if ( bj_useDawnDuskSounds )

		StartSound( bj_duskSound );

};

// ===========================================================================
export const SetDNCSoundsDay = (): void => {

	const ToD = GetTimeOfDay();

	if ( ToD >= bj_TOD_DAWN && ToD < bj_TOD_DUSK && ! bj_dncIsDaytime ) {

		bj_dncIsDaytime = true;

		// change ambient sounds
		StopSound( bj_nightAmbientSound, false, true );
		StartSound( bj_dayAmbientSound );

	}

};

// ===========================================================================
export const SetDNCSoundsNight = (): void => {

	const ToD = GetTimeOfDay();

	if ( ( ToD < bj_TOD_DAWN || ToD >= bj_TOD_DUSK ) && bj_dncIsDaytime ) {

		bj_dncIsDaytime = false;

		// change ambient sounds
		StopSound( bj_dayAmbientSound, false, true );
		StartSound( bj_nightAmbientSound );

	}

};

// ===========================================================================
export const InitDNCSounds = (): void => {

	// Create sounds to be played at dawn and dusk.
	bj_dawnSound = CreateSoundFromLabel( "RoosterSound", false, false, false, 10000, 10000 );
	bj_duskSound = CreateSoundFromLabel( "WolfSound", false, false, false, 10000, 10000 );

	// Set up triggers to respond to dawn and dusk.
	bj_dncSoundsDawn = CreateTrigger();
	TriggerRegisterGameStateEvent( bj_dncSoundsDawn, GAME_STATE_TIME_OF_DAY, EQUAL, bj_TOD_DAWN );
	TriggerAddAction( bj_dncSoundsDawn, SetDNCSoundsDawn );

	bj_dncSoundsDusk = CreateTrigger();
	TriggerRegisterGameStateEvent( bj_dncSoundsDusk, GAME_STATE_TIME_OF_DAY, EQUAL, bj_TOD_DUSK );
	TriggerAddAction( bj_dncSoundsDusk, SetDNCSoundsDusk );

	// Set up triggers to respond to changes from day to night or vice-versa.
	bj_dncSoundsDay = CreateTrigger();
	TriggerRegisterGameStateEvent( bj_dncSoundsDay, GAME_STATE_TIME_OF_DAY, GREATER_THAN_OR_EQUAL, bj_TOD_DAWN );
	TriggerRegisterGameStateEvent( bj_dncSoundsDay, GAME_STATE_TIME_OF_DAY, LESS_THAN, bj_TOD_DUSK );
	TriggerAddAction( bj_dncSoundsDay, SetDNCSoundsDay );

	bj_dncSoundsNight = CreateTrigger();
	TriggerRegisterGameStateEvent( bj_dncSoundsNight, GAME_STATE_TIME_OF_DAY, LESS_THAN, bj_TOD_DAWN );
	TriggerRegisterGameStateEvent( bj_dncSoundsNight, GAME_STATE_TIME_OF_DAY, GREATER_THAN_OR_EQUAL, bj_TOD_DUSK );
	TriggerAddAction( bj_dncSoundsNight, SetDNCSoundsNight );

};

// ===========================================================================
export const InitBlizzardGlobals = (): void => {

	let index: number;
	let userControlledPlayers: number;

	// Init filter function vars
	filterIssueHauntOrderAtLocBJ = Filter( IssueHauntOrderAtLocBJFilter );
	filterEnumDestructablesInCircleBJ = Filter( EnumDestructablesInCircleBJFilter );
	filterGetUnitsInRectOfPlayer = Filter( GetUnitsInRectOfPlayerFilter );
	filterGetUnitsOfTypeIdAll = Filter( GetUnitsOfTypeIdAllFilter );
	filterGetUnitsOfPlayerAndTypeId = Filter( GetUnitsOfPlayerAndTypeIdFilter );
	filterMeleeTrainedUnitIsHeroBJ = Filter( MeleeTrainedUnitIsHeroBJFilter );
	filterLivingPlayerUnitsOfTypeId = Filter( LivingPlayerUnitsOfTypeIdFilter );

	// Init force presets
	index = 0;

	while ( true ) {

		if ( index === bj_MAX_PLAYER_SLOTS ) break;
		bj_FORCE_PLAYER[ index ] = CreateForce();
		ForceAddPlayer( bj_FORCE_PLAYER[ index ], Player( index ) );
		index = index + 1;

	}

	bj_FORCE_ALL_PLAYERS = CreateForce();
	ForceEnumPlayers( bj_FORCE_ALL_PLAYERS, null );

	// Init Cinematic Mode history
	bj_cineModePriorSpeed = GetGameSpeed();
	bj_cineModePriorFogSetting = IsFogEnabled();
	bj_cineModePriorMaskSetting = IsFogMaskEnabled();

	// Init Trigger Queue
	index = 0;

	while ( true ) {

		if ( index >= bj_MAX_QUEUED_TRIGGERS ) break;
		bj_queuedExecTriggers[ index ] = null;
		bj_queuedExecUseConds[ index ] = false;
		index = index + 1;

	}

	// Init singleplayer check
	bj_isSinglePlayer = false;
	userControlledPlayers = 0;
	index = 0;

	while ( true ) {

		if ( index >= bj_MAX_PLAYERS ) break;

		if ( GetPlayerController( Player( index ) ) === MAP_CONTROL_USER && GetPlayerSlotState( Player( index ) ) === PLAYER_SLOT_STATE_PLAYING )

			userControlledPlayers = userControlledPlayers + 1;

		index = index + 1;

	}

	bj_isSinglePlayer = userControlledPlayers === 1;

	// Init sounds
	// set bj_pingMinimapSound = CreateSoundFromLabel("AutoCastButtonClick", false, false, false, 10000, 10000)
	bj_rescueSound = CreateSoundFromLabel( "Rescue", false, false, false, 10000, 10000 );
	bj_questDiscoveredSound = CreateSoundFromLabel( "QuestNew", false, false, false, 10000, 10000 );
	bj_questUpdatedSound = CreateSoundFromLabel( "QuestUpdate", false, false, false, 10000, 10000 );
	bj_questCompletedSound = CreateSoundFromLabel( "QuestCompleted", false, false, false, 10000, 10000 );
	bj_questFailedSound = CreateSoundFromLabel( "QuestFailed", false, false, false, 10000, 10000 );
	bj_questHintSound = CreateSoundFromLabel( "Hint", false, false, false, 10000, 10000 );
	bj_questSecretSound = CreateSoundFromLabel( "SecretFound", false, false, false, 10000, 10000 );
	bj_questItemAcquiredSound = CreateSoundFromLabel( "ItemReward", false, false, false, 10000, 10000 );
	bj_questWarningSound = CreateSoundFromLabel( "Warning", false, false, false, 10000, 10000 );
	bj_victoryDialogSound = CreateSoundFromLabel( "QuestCompleted", false, false, false, 10000, 10000 );
	bj_defeatDialogSound = CreateSoundFromLabel( "QuestFailed", false, false, false, 10000, 10000 );

	// Init corpse creation triggers.
	DelayedSuspendDecayCreate();

	// Init version-specific data
	const v = VersionGet();

	if ( v === VERSION_REIGN_OF_CHAOS )

		bj_MELEE_MAX_TWINKED_HEROES = bj_MELEE_MAX_TWINKED_HEROES_V0;

	else

		bj_MELEE_MAX_TWINKED_HEROES = bj_MELEE_MAX_TWINKED_HEROES_V1;

};

// ===========================================================================
export const InitQueuedTriggers = (): void => {

	bj_queuedExecTimeout = CreateTrigger();
	TriggerRegisterTimerExpireEvent( bj_queuedExecTimeout, bj_queuedExecTimeoutTimer );
	TriggerAddAction( bj_queuedExecTimeout, QueuedTriggerDoneBJ );

};

// ===========================================================================
export const InitMapRects = (): void => {

	bj_mapInitialPlayableArea = Rect( GetCameraBoundMinX() - GetCameraMargin( CAMERA_MARGIN_LEFT ), GetCameraBoundMinY() - GetCameraMargin( CAMERA_MARGIN_BOTTOM ), GetCameraBoundMaxX() + GetCameraMargin( CAMERA_MARGIN_RIGHT ), GetCameraBoundMaxY() + GetCameraMargin( CAMERA_MARGIN_TOP ) );
	bj_mapInitialCameraBounds = GetCurrentCameraBoundsMapRectBJ();

};

// ===========================================================================
export const InitSummonableCaps = (): void => {

	let index: number;

	index = 0;

	while ( true ) {

		// upgraded units
		// Note: Only do this if the corresponding upgrade is not yet researched
		// Barrage - Siege Engines

		if ( ! GetPlayerTechResearched( Player( index ), FourCC( "Rhrt" ), true ) )

			SetPlayerTechMaxAllowed( Player( index ), FourCC( "hrtt" ), 0 );

		// Berserker Upgrade - Troll Berserkers

		if ( ! GetPlayerTechResearched( Player( index ), FourCC( "Robk" ), true ) )

			SetPlayerTechMaxAllowed( Player( index ), FourCC( "otbk" ), 0 );

		// max skeletons per player
		SetPlayerTechMaxAllowed( Player( index ), FourCC( "uske" ), bj_MAX_SKELETONS );

		index = index + 1;
		if ( index === bj_MAX_PLAYERS ) break;

	}

};

// ===========================================================================
// Update the per-class stock limits.
//
export const UpdateStockAvailability = ( whichItem: item ): void => {

	const iType = GetItemType( whichItem );
	const iLevel = GetItemLevel( whichItem );

	// Update allowed type/level combinations.

	if ( iType === ITEM_TYPE_PERMANENT )

		bj_stockAllowedPermanent[ iLevel ] = true;

	else if ( iType === ITEM_TYPE_CHARGED )

		bj_stockAllowedCharged[ iLevel ] = true;

	else if ( iType === ITEM_TYPE_ARTIFACT )

		bj_stockAllowedArtifact[ iLevel ] = true;

	else {

		// Not interested in this item type - ignore the item.

	}

};

// ===========================================================================
// Find a sellable item of the given type and level, and then add it.
//
export const UpdateEachStockBuildingEnum = (): void => {

	let iteration = 0;
	let pickedItemId: number;

	while ( true ) {

		pickedItemId = ChooseRandomItemEx( bj_stockPickedItemType, bj_stockPickedItemLevel );
		if ( IsItemIdSellable( pickedItemId ) ) break;

		// If we get hung up on an entire class/level combo of unsellable
		// items, or a very unlucky series of random numbers, give up.
		iteration = iteration + 1;

		if ( iteration > bj_STOCK_MAX_ITERATIONS )

			return;

	}

	AddItemToStock( GetEnumUnit(), pickedItemId, 1, 1 );

};

// ===========================================================================
export const UpdateEachStockBuilding = ( iType: itemtype, iLevel: number ): void => {

	bj_stockPickedItemType = iType;
	bj_stockPickedItemLevel = iLevel;

	const g = CreateGroup();
	GroupEnumUnitsOfType( g, "marketplace", null );
	ForGroup( g, UpdateEachStockBuildingEnum );
	DestroyGroup( g );

};

// ===========================================================================
// Update stock inventory.
//
export const PerformStockUpdates = (): void => {

	let pickedItemType: itemtype = ITEM_TYPE_PERMANENT;
	let pickedItemLevel = 0;
	let allowedCombinations = 0;
	let iLevel: number;

	// Give each type/level combination a chance of being picked.
	iLevel = 1;

	while ( true ) {

		if ( bj_stockAllowedPermanent[ iLevel ] ) {

			allowedCombinations = allowedCombinations + 1;

			if ( GetRandomInt( 1, allowedCombinations ) === 1 ) {

				pickedItemType = ITEM_TYPE_PERMANENT;
				pickedItemLevel = iLevel;

			}

		}

		if ( bj_stockAllowedCharged[ iLevel ] ) {

			allowedCombinations = allowedCombinations + 1;

			if ( GetRandomInt( 1, allowedCombinations ) === 1 ) {

				pickedItemType = ITEM_TYPE_CHARGED;
				pickedItemLevel = iLevel;

			}

		}

		if ( bj_stockAllowedArtifact[ iLevel ] ) {

			allowedCombinations = allowedCombinations + 1;

			if ( GetRandomInt( 1, allowedCombinations ) === 1 ) {

				pickedItemType = ITEM_TYPE_ARTIFACT;
				pickedItemLevel = iLevel;

			}

		}

		iLevel = iLevel + 1;
		if ( iLevel > bj_MAX_ITEM_LEVEL ) break;

	}

	// Make sure we found a valid item type to add.

	if ( allowedCombinations === 0 )

		return;

	UpdateEachStockBuilding( pickedItemType, pickedItemLevel );

};

// ===========================================================================
// Perform the first update, and then arrange future updates.
//
export const StartStockUpdates = (): void => {

	PerformStockUpdates();
	TimerStart( bj_stockUpdateTimer, bj_STOCK_RESTOCK_INTERVAL, true, PerformStockUpdates );

};

// ===========================================================================
export const RemovePurchasedItem = (): void => {

	RemoveItemFromStock( GetSellingUnit(), GetItemTypeId( GetSoldItem() ) );

};

// ===========================================================================
export const InitNeutralBuildings = (): void => {

	let iLevel: number;

	// Chart of allowed stock items.
	iLevel = 0;

	while ( true ) {

		bj_stockAllowedPermanent[ iLevel ] = false;
		bj_stockAllowedCharged[ iLevel ] = false;
		bj_stockAllowedArtifact[ iLevel ] = false;
		iLevel = iLevel + 1;
		if ( iLevel > bj_MAX_ITEM_LEVEL ) break;

	}

	// Limit stock inventory slots.
	SetAllItemTypeSlots( bj_MAX_STOCK_ITEM_SLOTS );
	SetAllUnitTypeSlots( bj_MAX_STOCK_UNIT_SLOTS );

	// Arrange the first update.
	bj_stockUpdateTimer = CreateTimer();
	TimerStart( bj_stockUpdateTimer, bj_STOCK_RESTOCK_INITIAL_DELAY, false, StartStockUpdates );

	// Set up a trigger to fire whenever an item is sold.
	bj_stockItemPurchased = CreateTrigger();
	TriggerRegisterPlayerUnitEvent( bj_stockItemPurchased, Player( PLAYER_NEUTRAL_PASSIVE ), EVENT_PLAYER_UNIT_SELL_ITEM, null );
	TriggerAddAction( bj_stockItemPurchased, RemovePurchasedItem );

};

// ===========================================================================
export const MarkGameStarted = (): void => {

	bj_gameStarted = true;
	DestroyTimer( bj_gameStartedTimer );

};

// ===========================================================================
export const DetectGameStarted = (): void => {

	bj_gameStartedTimer = CreateTimer();
	TimerStart( bj_gameStartedTimer, bj_GAME_STARTED_THRESHOLD, false, MarkGameStarted );

};

// ===========================================================================
export const InitBlizzard = (): void => {

	// Set up the Neutral Victim player slot, to torture the abandoned units
	// of defeated players.  Since some triggers expect this player slot to
	// exist, this is performed for all maps.
	ConfigureNeutralVictim();

	InitBlizzardGlobals();
	InitQueuedTriggers();
	InitRescuableBehaviorBJ();
	InitDNCSounds();
	InitMapRects();
	InitSummonableCaps();
	InitNeutralBuildings();
	DetectGameStarted();

};

// ***************************************************************************
// *
// *  Random distribution
// *
// *  Used to select a random object from a given distribution of chances
// *
// *  - RandomDistReset clears the distribution list
// *
// *  - RandomDistAddItem adds a new object to the distribution list
// *    with a given identifier and an integer chance to be chosen
// *
// *  - RandomDistChoose will use the current distribution list to choose
// *    one of the objects randomly based on the chance distribution
// *
// *  Note that the chances are effectively normalized by their sum,
// *  so only the relative values of each chance are important
// *
// ***************************************************************************

// ===========================================================================
export const RandomDistReset = (): void => {

	bj_randDistCount = 0;

};

// ===========================================================================
export const RandomDistAddItem = ( inID: number, inChance: number ): void => {

	bj_randDistID[ bj_randDistCount ] = inID;
	bj_randDistChance[ bj_randDistCount ] = inChance;
	bj_randDistCount = bj_randDistCount + 1;

};

// ===========================================================================
export const RandomDistChoose = (): number => {

	let sum = 0;
	let chance = 0;
	let index: number;
	let foundID = - 1;
	let done: boolean;

	// No items?

	if ( bj_randDistCount === 0 )

		return - 1;

	// Find sum of all chances
	index = 0;

	while ( true ) {

		sum = sum + bj_randDistChance[ index ];

		index = index + 1;
		if ( index === bj_randDistCount ) break;

	}

	// Choose random number within the total range
	chance = GetRandomInt( 1, sum );

	// Find ID which corresponds to this chance
	index = 0;
	sum = 0;
	done = false;

	while ( true ) {

		sum = sum + bj_randDistChance[ index ];

		if ( chance <= sum ) {

			foundID = bj_randDistID[ index ];
			done = true;

		}

		index = index + 1;

		if ( index === bj_randDistCount )

			done = true;

		if ( done === true ) break;

	}

	return foundID;

};

// ***************************************************************************
// *
// *  Drop item
// *
// *  Makes the given unit drop the given item
// *
// *  Note: This could potentially cause problems if the unit is standing
// *        right on the edge of an unpathable area and happens to drop the
// *        item into the unpathable area where nobody can get it...
// *
// ***************************************************************************

export const UnitDropItem = ( inUnit: unit, inItemID: number ): item | null => {

	const radius = 32;

	if ( inItemID === - 1 )
		return null;

	const unitX = GetUnitX( inUnit );
	const unitY = GetUnitY( inUnit );

	const x = GetRandomReal( unitX - radius, unitX + radius );
	const y = GetRandomReal( unitY - radius, unitY + radius );

	const droppedItem = CreateItem( inItemID, x, y );

	SetItemDropID( droppedItem, GetUnitTypeId( inUnit ) );
	UpdateStockAvailability( droppedItem );

	return droppedItem;

};

// ===========================================================================
export const WidgetDropItem = ( inWidget: widget, inItemID: number ): item | null => {

	const radius = 32;

	if ( inItemID === - 1 )
		return null;

	const widgetX = GetWidgetX( inWidget );
	const widgetY = GetWidgetY( inWidget );

	const x = GetRandomReal( widgetX - radius, widgetX + radius );
	const y = GetRandomReal( widgetY - radius, widgetY + radius );

	return CreateItem( inItemID, x, y );

};

// ***************************************************************************
// *
// *  Instanced Object Operation Functions
// *
// *  Get/Set specific fields for single unit/item/ability instance
// *
// ***************************************************************************

// ===========================================================================
export const BlzIsLastInstanceObjectFunctionSuccessful = (): boolean => bj_lastInstObjFuncSuccessful;

// Ability
// ===========================================================================
export const BlzSetAbilityBooleanFieldBJ = ( whichAbility: ability, whichField: abilitybooleanfield, value: boolean ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetAbilityBooleanField( whichAbility, whichField, value );

};

// ===========================================================================
export const BlzSetAbilityIntegerFieldBJ = ( whichAbility: ability, whichField: abilityintegerfield, value: number ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetAbilityIntegerField( whichAbility, whichField, value );

};

// ===========================================================================
export const BlzSetAbilityRealFieldBJ = ( whichAbility: ability, whichField: abilityrealfield, value: number ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetAbilityRealField( whichAbility, whichField, value );

};

// ===========================================================================
export const BlzSetAbilityStringFieldBJ = ( whichAbility: ability, whichField: abilitystringfield, value: string ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetAbilityStringField( whichAbility, whichField, value );

};

// ===========================================================================
export const BlzSetAbilityBooleanLevelFieldBJ = ( whichAbility: ability, whichField: abilitybooleanlevelfield, level: number, value: boolean ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetAbilityBooleanLevelField( whichAbility, whichField, level, value );

};

// ===========================================================================
export const BlzSetAbilityIntegerLevelFieldBJ = ( whichAbility: ability, whichField: abilityintegerlevelfield, level: number, value: number ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetAbilityIntegerLevelField( whichAbility, whichField, level, value );

};

// ===========================================================================
export const BlzSetAbilityRealLevelFieldBJ = ( whichAbility: ability, whichField: abilityreallevelfield, level: number, value: number ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetAbilityRealLevelField( whichAbility, whichField, level, value );

};

// ===========================================================================
export const BlzSetAbilityStringLevelFieldBJ = ( whichAbility: ability, whichField: abilitystringlevelfield, level: number, value: string ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetAbilityStringLevelField( whichAbility, whichField, level, value );

};

// ===========================================================================
export const BlzSetAbilityBooleanLevelArrayFieldBJ = ( whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: number, index: number, value: boolean ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetAbilityBooleanLevelArrayField( whichAbility, whichField, level, index, value );

};

// ===========================================================================
export const BlzSetAbilityIntegerLevelArrayFieldBJ = ( whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: number, index: number, value: number ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetAbilityIntegerLevelArrayField( whichAbility, whichField, level, index, value );

};

// ===========================================================================
export const BlzSetAbilityRealLevelArrayFieldBJ = ( whichAbility: ability, whichField: abilityreallevelarrayfield, level: number, index: number, value: number ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetAbilityRealLevelArrayField( whichAbility, whichField, level, index, value );

};

// ===========================================================================
export const BlzSetAbilityStringLevelArrayFieldBJ = ( whichAbility: ability, whichField: abilitystringlevelarrayfield, level: number, index: number, value: string ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetAbilityStringLevelArrayField( whichAbility, whichField, level, index, value );

};

// ===========================================================================
export const BlzAddAbilityBooleanLevelArrayFieldBJ = ( whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: number, value: boolean ): void => {

	bj_lastInstObjFuncSuccessful = BlzAddAbilityBooleanLevelArrayField( whichAbility, whichField, level, value );

};

// ===========================================================================
export const BlzAddAbilityIntegerLevelArrayFieldBJ = ( whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: number, value: number ): void => {

	bj_lastInstObjFuncSuccessful = BlzAddAbilityIntegerLevelArrayField( whichAbility, whichField, level, value );

};

// ===========================================================================
export const BlzAddAbilityRealLevelArrayFieldBJ = ( whichAbility: ability, whichField: abilityreallevelarrayfield, level: number, value: number ): void => {

	bj_lastInstObjFuncSuccessful = BlzAddAbilityRealLevelArrayField( whichAbility, whichField, level, value );

};

// ===========================================================================
export const BlzAddAbilityStringLevelArrayFieldBJ = ( whichAbility: ability, whichField: abilitystringlevelarrayfield, level: number, value: string ): void => {

	bj_lastInstObjFuncSuccessful = BlzAddAbilityStringLevelArrayField( whichAbility, whichField, level, value );

};

// ===========================================================================
export const BlzRemoveAbilityBooleanLevelArrayFieldBJ = ( whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: number, value: boolean ): void => {

	bj_lastInstObjFuncSuccessful = BlzRemoveAbilityBooleanLevelArrayField( whichAbility, whichField, level, value );

};

// ===========================================================================
export const BlzRemoveAbilityIntegerLevelArrayFieldBJ = ( whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: number, value: number ): void => {

	bj_lastInstObjFuncSuccessful = BlzRemoveAbilityIntegerLevelArrayField( whichAbility, whichField, level, value );

};

// ===========================================================================
export const BlzRemoveAbilityRealLevelArrayFieldBJ = ( whichAbility: ability, whichField: abilityreallevelarrayfield, level: number, value: number ): void => {

	bj_lastInstObjFuncSuccessful = BlzRemoveAbilityRealLevelArrayField( whichAbility, whichField, level, value );

};

// ===========================================================================
export const BlzRemoveAbilityStringLevelArrayFieldBJ = ( whichAbility: ability, whichField: abilitystringlevelarrayfield, level: number, value: string ): void => {

	bj_lastInstObjFuncSuccessful = BlzRemoveAbilityStringLevelArrayField( whichAbility, whichField, level, value );

};

// Item
// =============================================================
export const BlzItemAddAbilityBJ = ( whichItem: item, abilCode: number ): void => {

	bj_lastInstObjFuncSuccessful = BlzItemAddAbility( whichItem, abilCode );

};

// ===========================================================================
export const BlzItemRemoveAbilityBJ = ( whichItem: item, abilCode: number ): void => {

	bj_lastInstObjFuncSuccessful = BlzItemRemoveAbility( whichItem, abilCode );

};

// ===========================================================================
export const BlzSetItemBooleanFieldBJ = ( whichItem: item, whichField: itembooleanfield, value: boolean ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetItemBooleanField( whichItem, whichField, value );

};

// ===========================================================================
export const BlzSetItemIntegerFieldBJ = ( whichItem: item, whichField: itemintegerfield, value: number ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetItemIntegerField( whichItem, whichField, value );

};

// ===========================================================================
export const BlzSetItemRealFieldBJ = ( whichItem: item, whichField: itemrealfield, value: number ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetItemRealField( whichItem, whichField, value );

};

// ===========================================================================
export const BlzSetItemStringFieldBJ = ( whichItem: item, whichField: itemstringfield, value: string ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetItemStringField( whichItem, whichField, value );

};

// Unit
// ===========================================================================
export const BlzSetUnitBooleanFieldBJ = ( whichUnit: unit, whichField: unitbooleanfield, value: boolean ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetUnitBooleanField( whichUnit, whichField, value );

};

// ===========================================================================
export const BlzSetUnitIntegerFieldBJ = ( whichUnit: unit, whichField: unitintegerfield, value: number ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetUnitIntegerField( whichUnit, whichField, value );

};

// ===========================================================================
export const BlzSetUnitRealFieldBJ = ( whichUnit: unit, whichField: unitrealfield, value: number ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetUnitRealField( whichUnit, whichField, value );

};

// ===========================================================================
export const BlzSetUnitStringFieldBJ = ( whichUnit: unit, whichField: unitstringfield, value: string ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetUnitStringField( whichUnit, whichField, value );

};

// Unit Weapon
// ===========================================================================
export const BlzSetUnitWeaponBooleanFieldBJ = ( whichUnit: unit, whichField: unitweaponbooleanfield, index: number, value: boolean ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetUnitWeaponBooleanField( whichUnit, whichField, index, value );

};

// ===========================================================================
export const BlzSetUnitWeaponIntegerFieldBJ = ( whichUnit: unit, whichField: unitweaponintegerfield, index: number, value: number ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetUnitWeaponIntegerField( whichUnit, whichField, index, value );

};

// ===========================================================================
export const BlzSetUnitWeaponRealFieldBJ = ( whichUnit: unit, whichField: unitweaponrealfield, index: number, value: number ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetUnitWeaponRealField( whichUnit, whichField, index, value );

};

// ===========================================================================
export const BlzSetUnitWeaponStringFieldBJ = ( whichUnit: unit, whichField: unitweaponstringfield, index: number, value: string ): void => {

	bj_lastInstObjFuncSuccessful = BlzSetUnitWeaponStringField( whichUnit, whichField, index, value );

};

