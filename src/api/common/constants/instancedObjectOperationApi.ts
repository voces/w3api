import {
	ConvertAbilityBooleanField,
	ConvertAbilityBooleanLevelField,
	ConvertAbilityIntegerField,
	ConvertAbilityIntegerLevelField,
	ConvertAbilityRealField,
	ConvertAbilityRealLevelField,
	ConvertAbilityStringField,
	ConvertAbilityStringLevelField,
	ConvertArmorType,
	ConvertDefenseType,
	ConvertHeroAttribute,
	ConvertItemBooleanField,
	ConvertItemIntegerField,
	ConvertItemRealField,
	ConvertItemStringField,
	ConvertMoveType,
	ConvertPathingFlag,
	ConvertRegenType,
	ConvertTargetFlag,
	ConvertUnitBooleanField,
	ConvertUnitCategory,
	ConvertUnitIntegerField,
	ConvertUnitRealField,
	ConvertUnitStringField,
	ConvertUnitWeaponBooleanField,
	ConvertUnitWeaponIntegerField,
	ConvertUnitWeaponRealField,
	ConvertUnitWeaponStringField,
} from "../converters";
import { FourCC } from "../string";

// ===================================================
// Instanced Object Operation API constants
// ===================================================

// Ability
export const ABILITY_IF_BUTTON_POSITION_NORMAL_X = ConvertAbilityIntegerField(
	FourCC("abpx"),
);
export const ABILITY_IF_BUTTON_POSITION_NORMAL_Y = ConvertAbilityIntegerField(
	FourCC("abpy"),
);
export const ABILITY_IF_BUTTON_POSITION_ACTIVATED_X = ConvertAbilityIntegerField(
	FourCC("aubx"),
);
export const ABILITY_IF_BUTTON_POSITION_ACTIVATED_Y = ConvertAbilityIntegerField(
	FourCC("auby"),
);
export const ABILITY_IF_BUTTON_POSITION_RESEARCH_X = ConvertAbilityIntegerField(
	FourCC("arpx"),
);
export const ABILITY_IF_BUTTON_POSITION_RESEARCH_Y = ConvertAbilityIntegerField(
	FourCC("arpy"),
);
export const ABILITY_IF_MISSILE_SPEED = ConvertAbilityIntegerField(
	FourCC("amsp"),
);
export const ABILITY_IF_TARGET_ATTACHMENTS = ConvertAbilityIntegerField(
	FourCC("atac"),
);
export const ABILITY_IF_CASTER_ATTACHMENTS = ConvertAbilityIntegerField(
	FourCC("acac"),
);
export const ABILITY_IF_PRIORITY = ConvertAbilityIntegerField(FourCC("apri"));
export const ABILITY_IF_LEVELS = ConvertAbilityIntegerField(FourCC("alev"));
export const ABILITY_IF_REQUIRED_LEVEL = ConvertAbilityIntegerField(
	FourCC("arlv"),
);
export const ABILITY_IF_LEVEL_SKIP_REQUIREMENT = ConvertAbilityIntegerField(
	FourCC("alsk"),
);

export const ABILITY_BF_HERO_ABILITY = ConvertAbilityBooleanField(
	FourCC("aher"),
);
export const ABILITY_BF_ITEM_ABILITY = ConvertAbilityBooleanField(
	FourCC("aite"),
);
export const ABILITY_BF_CHECK_DEPENDENCIES = ConvertAbilityBooleanField(
	FourCC("achd"),
);

export const ABILITY_RF_ARF_MISSILE_ARC = ConvertAbilityRealField(
	FourCC("amac"),
);

export const ABILITY_SF_NAME = ConvertAbilityStringField(FourCC("anam"));
export const ABILITY_SF_ICON_ACTIVATED = ConvertAbilityStringField(
	FourCC("auar"),
);
export const ABILITY_SF_ICON_RESEARCH = ConvertAbilityStringField(
	FourCC("arar"),
);
export const ABILITY_SF_EFFECT_SOUND = ConvertAbilityStringField(
	FourCC("aefs"),
);
export const ABILITY_SF_EFFECT_SOUND_LOOPING = ConvertAbilityStringField(
	FourCC("aefl"),
);

export const ABILITY_ILF_MANA_COST = ConvertAbilityIntegerLevelField(
	FourCC("amcs"),
);
export const ABILITY_ILF_NUMBER_OF_WAVES = ConvertAbilityIntegerLevelField(
	FourCC("Hbz1"),
);
export const ABILITY_ILF_NUMBER_OF_SHARDS = ConvertAbilityIntegerLevelField(
	FourCC("Hbz3"),
);
export const ABILITY_ILF_NUMBER_OF_UNITS_TELEPORTED = ConvertAbilityIntegerLevelField(
	FourCC("Hmt1"),
);
export const ABILITY_ILF_SUMMONED_UNIT_COUNT_HWE2 = ConvertAbilityIntegerLevelField(
	FourCC("Hwe2"),
);
export const ABILITY_ILF_NUMBER_OF_IMAGES = ConvertAbilityIntegerLevelField(
	FourCC("Omi1"),
);
export const ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_UAN1 = ConvertAbilityIntegerLevelField(
	FourCC("Uan1"),
);
export const ABILITY_ILF_MORPHING_FLAGS = ConvertAbilityIntegerLevelField(
	FourCC("Eme2"),
);
export const ABILITY_ILF_STRENGTH_BONUS_NRG5 = ConvertAbilityIntegerLevelField(
	FourCC("Nrg5"),
);
export const ABILITY_ILF_DEFENSE_BONUS_NRG6 = ConvertAbilityIntegerLevelField(
	FourCC("Nrg6"),
);
export const ABILITY_ILF_NUMBER_OF_TARGETS_HIT = ConvertAbilityIntegerLevelField(
	FourCC("Ocl2"),
);
export const ABILITY_ILF_DETECTION_TYPE_OFS1 = ConvertAbilityIntegerLevelField(
	FourCC("Ofs1"),
);
export const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_OSF2 = ConvertAbilityIntegerLevelField(
	FourCC("Osf2"),
);
export const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_EFN1 = ConvertAbilityIntegerLevelField(
	FourCC("Efn1"),
);
export const ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_HRE1 = ConvertAbilityIntegerLevelField(
	FourCC("Hre1"),
);
export const ABILITY_ILF_STACK_FLAGS = ConvertAbilityIntegerLevelField(
	FourCC("Hca4"),
);
export const ABILITY_ILF_MINIMUM_NUMBER_OF_UNITS = ConvertAbilityIntegerLevelField(
	FourCC("Ndp2"),
);
export const ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_NDP3 = ConvertAbilityIntegerLevelField(
	FourCC("Ndp3"),
);
export const ABILITY_ILF_NUMBER_OF_UNITS_CREATED_NRC2 = ConvertAbilityIntegerLevelField(
	FourCC("Nrc2"),
);
export const ABILITY_ILF_SHIELD_LIFE = ConvertAbilityIntegerLevelField(
	FourCC("Ams3"),
);
export const ABILITY_ILF_MANA_LOSS_AMS4 = ConvertAbilityIntegerLevelField(
	FourCC("Ams4"),
);
export const ABILITY_ILF_GOLD_PER_INTERVAL_BGM1 = ConvertAbilityIntegerLevelField(
	FourCC("Bgm1"),
);
export const ABILITY_ILF_MAX_NUMBER_OF_MINERS = ConvertAbilityIntegerLevelField(
	FourCC("Bgm3"),
);
export const ABILITY_ILF_CARGO_CAPACITY = ConvertAbilityIntegerLevelField(
	FourCC("Car1"),
);
export const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_DEV3 = ConvertAbilityIntegerLevelField(
	FourCC("Dev3"),
);
export const ABILITY_ILF_MAX_CREEP_LEVEL_DEV1 = ConvertAbilityIntegerLevelField(
	FourCC("Dev1"),
);
export const ABILITY_ILF_GOLD_PER_INTERVAL_EGM1 = ConvertAbilityIntegerLevelField(
	FourCC("Egm1"),
);
export const ABILITY_ILF_DEFENSE_REDUCTION = ConvertAbilityIntegerLevelField(
	FourCC("Fae1"),
);
export const ABILITY_ILF_DETECTION_TYPE_FLA1 = ConvertAbilityIntegerLevelField(
	FourCC("Fla1"),
);
export const ABILITY_ILF_FLARE_COUNT = ConvertAbilityIntegerLevelField(
	FourCC("Fla3"),
);
export const ABILITY_ILF_MAX_GOLD = ConvertAbilityIntegerLevelField(
	FourCC("Gld1"),
);
export const ABILITY_ILF_MINING_CAPACITY = ConvertAbilityIntegerLevelField(
	FourCC("Gld3"),
);
export const ABILITY_ILF_MAXIMUM_NUMBER_OF_CORPSES_GYD1 = ConvertAbilityIntegerLevelField(
	FourCC("Gyd1"),
);
export const ABILITY_ILF_DAMAGE_TO_TREE = ConvertAbilityIntegerLevelField(
	FourCC("Har1"),
);
export const ABILITY_ILF_LUMBER_CAPACITY = ConvertAbilityIntegerLevelField(
	FourCC("Har2"),
);
export const ABILITY_ILF_GOLD_CAPACITY = ConvertAbilityIntegerLevelField(
	FourCC("Har3"),
);
export const ABILITY_ILF_DEFENSE_INCREASE_INF2 = ConvertAbilityIntegerLevelField(
	FourCC("Inf2"),
);
export const ABILITY_ILF_INTERACTION_TYPE = ConvertAbilityIntegerLevelField(
	FourCC("Neu2"),
);
export const ABILITY_ILF_GOLD_COST_NDT1 = ConvertAbilityIntegerLevelField(
	FourCC("Ndt1"),
);
export const ABILITY_ILF_LUMBER_COST_NDT2 = ConvertAbilityIntegerLevelField(
	FourCC("Ndt2"),
);
export const ABILITY_ILF_DETECTION_TYPE_NDT3 = ConvertAbilityIntegerLevelField(
	FourCC("Ndt3"),
);
export const ABILITY_ILF_STACKING_TYPE_POI4 = ConvertAbilityIntegerLevelField(
	FourCC("Poi4"),
);
export const ABILITY_ILF_STACKING_TYPE_POA5 = ConvertAbilityIntegerLevelField(
	FourCC("Poa5"),
);
export const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_PLY1 = ConvertAbilityIntegerLevelField(
	FourCC("Ply1"),
);
export const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_POS1 = ConvertAbilityIntegerLevelField(
	FourCC("Pos1"),
);
export const ABILITY_ILF_MOVEMENT_UPDATE_FREQUENCY_PRG1 = ConvertAbilityIntegerLevelField(
	FourCC("Prg1"),
);
export const ABILITY_ILF_ATTACK_UPDATE_FREQUENCY_PRG2 = ConvertAbilityIntegerLevelField(
	FourCC("Prg2"),
);
export const ABILITY_ILF_MANA_LOSS_PRG6 = ConvertAbilityIntegerLevelField(
	FourCC("Prg6"),
);
export const ABILITY_ILF_UNITS_SUMMONED_TYPE_ONE = ConvertAbilityIntegerLevelField(
	FourCC("Rai1"),
);
export const ABILITY_ILF_UNITS_SUMMONED_TYPE_TWO = ConvertAbilityIntegerLevelField(
	FourCC("Rai2"),
);
export const ABILITY_ILF_MAX_UNITS_SUMMONED = ConvertAbilityIntegerLevelField(
	FourCC("Ucb5"),
);
export const ABILITY_ILF_ALLOW_WHEN_FULL_REJ3 = ConvertAbilityIntegerLevelField(
	FourCC("Rej3"),
);
export const ABILITY_ILF_MAXIMUM_UNITS_CHARGED_TO_CASTER = ConvertAbilityIntegerLevelField(
	FourCC("Rpb5"),
);
export const ABILITY_ILF_MAXIMUM_UNITS_AFFECTED = ConvertAbilityIntegerLevelField(
	FourCC("Rpb6"),
);
export const ABILITY_ILF_DEFENSE_INCREASE_ROA2 = ConvertAbilityIntegerLevelField(
	FourCC("Roa2"),
);
export const ABILITY_ILF_MAX_UNITS_ROA7 = ConvertAbilityIntegerLevelField(
	FourCC("Roa7"),
);
export const ABILITY_ILF_ROOTED_WEAPONS = ConvertAbilityIntegerLevelField(
	FourCC("Roo1"),
);
export const ABILITY_ILF_UPROOTED_WEAPONS = ConvertAbilityIntegerLevelField(
	FourCC("Roo2"),
);
export const ABILITY_ILF_UPROOTED_DEFENSE_TYPE = ConvertAbilityIntegerLevelField(
	FourCC("Roo4"),
);
export const ABILITY_ILF_ACCUMULATION_STEP = ConvertAbilityIntegerLevelField(
	FourCC("Sal2"),
);
export const ABILITY_ILF_NUMBER_OF_OWLS = ConvertAbilityIntegerLevelField(
	FourCC("Esn4"),
);
export const ABILITY_ILF_STACKING_TYPE_SPO4 = ConvertAbilityIntegerLevelField(
	FourCC("Spo4"),
);
export const ABILITY_ILF_NUMBER_OF_UNITS = ConvertAbilityIntegerLevelField(
	FourCC("Sod1"),
);
export const ABILITY_ILF_SPIDER_CAPACITY = ConvertAbilityIntegerLevelField(
	FourCC("Spa1"),
);
export const ABILITY_ILF_INTERVALS_BEFORE_CHANGING_TREES = ConvertAbilityIntegerLevelField(
	FourCC("Wha2"),
);
export const ABILITY_ILF_AGILITY_BONUS = ConvertAbilityIntegerLevelField(
	FourCC("Iagi"),
);
export const ABILITY_ILF_INTELLIGENCE_BONUS = ConvertAbilityIntegerLevelField(
	FourCC("Iint"),
);
export const ABILITY_ILF_STRENGTH_BONUS_ISTR = ConvertAbilityIntegerLevelField(
	FourCC("Istr"),
);
export const ABILITY_ILF_ATTACK_BONUS = ConvertAbilityIntegerLevelField(
	FourCC("Iatt"),
);
export const ABILITY_ILF_DEFENSE_BONUS_IDEF = ConvertAbilityIntegerLevelField(
	FourCC("Idef"),
);
export const ABILITY_ILF_SUMMON_1_AMOUNT = ConvertAbilityIntegerLevelField(
	FourCC("Isn1"),
);
export const ABILITY_ILF_SUMMON_2_AMOUNT = ConvertAbilityIntegerLevelField(
	FourCC("Isn2"),
);
export const ABILITY_ILF_EXPERIENCE_GAINED = ConvertAbilityIntegerLevelField(
	FourCC("Ixpg"),
);
export const ABILITY_ILF_HIT_POINTS_GAINED_IHPG = ConvertAbilityIntegerLevelField(
	FourCC("Ihpg"),
);
export const ABILITY_ILF_MANA_POINTS_GAINED_IMPG = ConvertAbilityIntegerLevelField(
	FourCC("Impg"),
);
export const ABILITY_ILF_HIT_POINTS_GAINED_IHP2 = ConvertAbilityIntegerLevelField(
	FourCC("Ihp2"),
);
export const ABILITY_ILF_MANA_POINTS_GAINED_IMP2 = ConvertAbilityIntegerLevelField(
	FourCC("Imp2"),
);
export const ABILITY_ILF_DAMAGE_BONUS_DICE = ConvertAbilityIntegerLevelField(
	FourCC("Idic"),
);
export const ABILITY_ILF_ARMOR_PENALTY_IARP = ConvertAbilityIntegerLevelField(
	FourCC("Iarp"),
);
export const ABILITY_ILF_ENABLED_ATTACK_INDEX_IOB5 = ConvertAbilityIntegerLevelField(
	FourCC("Iob5"),
);
export const ABILITY_ILF_LEVELS_GAINED = ConvertAbilityIntegerLevelField(
	FourCC("Ilev"),
);
export const ABILITY_ILF_MAX_LIFE_GAINED = ConvertAbilityIntegerLevelField(
	FourCC("Ilif"),
);
export const ABILITY_ILF_MAX_MANA_GAINED = ConvertAbilityIntegerLevelField(
	FourCC("Iman"),
);
export const ABILITY_ILF_GOLD_GIVEN = ConvertAbilityIntegerLevelField(
	FourCC("Igol"),
);
export const ABILITY_ILF_LUMBER_GIVEN = ConvertAbilityIntegerLevelField(
	FourCC("Ilum"),
);
export const ABILITY_ILF_DETECTION_TYPE_IFA1 = ConvertAbilityIntegerLevelField(
	FourCC("Ifa1"),
);
export const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_ICRE = ConvertAbilityIntegerLevelField(
	FourCC("Icre"),
);
export const ABILITY_ILF_MOVEMENT_SPEED_BONUS = ConvertAbilityIntegerLevelField(
	FourCC("Imvb"),
);
export const ABILITY_ILF_HIT_POINTS_REGENERATED_PER_SECOND = ConvertAbilityIntegerLevelField(
	FourCC("Ihpr"),
);
export const ABILITY_ILF_SIGHT_RANGE_BONUS = ConvertAbilityIntegerLevelField(
	FourCC("Isib"),
);
export const ABILITY_ILF_DAMAGE_PER_DURATION = ConvertAbilityIntegerLevelField(
	FourCC("Icfd"),
);
export const ABILITY_ILF_MANA_USED_PER_SECOND = ConvertAbilityIntegerLevelField(
	FourCC("Icfm"),
);
export const ABILITY_ILF_EXTRA_MANA_REQUIRED = ConvertAbilityIntegerLevelField(
	FourCC("Icfx"),
);
export const ABILITY_ILF_DETECTION_RADIUS_IDET = ConvertAbilityIntegerLevelField(
	FourCC("Idet"),
);
export const ABILITY_ILF_MANA_LOSS_PER_UNIT_IDIM = ConvertAbilityIntegerLevelField(
	FourCC("Idim"),
);
export const ABILITY_ILF_DAMAGE_TO_SUMMONED_UNITS_IDID = ConvertAbilityIntegerLevelField(
	FourCC("Idid"),
);
export const ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_IREC = ConvertAbilityIntegerLevelField(
	FourCC("Irec"),
);
export const ABILITY_ILF_DELAY_AFTER_DEATH_SECONDS = ConvertAbilityIntegerLevelField(
	FourCC("Ircd"),
);
export const ABILITY_ILF_RESTORED_LIFE = ConvertAbilityIntegerLevelField(
	FourCC("irc2"),
);
export const ABILITY_ILF_RESTORED_MANA__1_FOR_CURRENT = ConvertAbilityIntegerLevelField(
	FourCC("irc3"),
);
export const ABILITY_ILF_HIT_POINTS_RESTORED = ConvertAbilityIntegerLevelField(
	FourCC("Ihps"),
);
export const ABILITY_ILF_MANA_POINTS_RESTORED = ConvertAbilityIntegerLevelField(
	FourCC("Imps"),
);
export const ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_ITPM = ConvertAbilityIntegerLevelField(
	FourCC("Itpm"),
);
export const ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_CAD1 = ConvertAbilityIntegerLevelField(
	FourCC("Cad1"),
);
export const ABILITY_ILF_TERRAIN_DEFORMATION_DURATION_MS = ConvertAbilityIntegerLevelField(
	FourCC("Wrs3"),
);
export const ABILITY_ILF_MAXIMUM_UNITS = ConvertAbilityIntegerLevelField(
	FourCC("Uds1"),
);
export const ABILITY_ILF_DETECTION_TYPE_DET1 = ConvertAbilityIntegerLevelField(
	FourCC("Det1"),
);
export const ABILITY_ILF_GOLD_COST_PER_STRUCTURE = ConvertAbilityIntegerLevelField(
	FourCC("Nsp1"),
);
export const ABILITY_ILF_LUMBER_COST_PER_USE = ConvertAbilityIntegerLevelField(
	FourCC("Nsp2"),
);
export const ABILITY_ILF_DETECTION_TYPE_NSP3 = ConvertAbilityIntegerLevelField(
	FourCC("Nsp3"),
);
export const ABILITY_ILF_NUMBER_OF_SWARM_UNITS = ConvertAbilityIntegerLevelField(
	FourCC("Uls1"),
);
export const ABILITY_ILF_MAX_SWARM_UNITS_PER_TARGET = ConvertAbilityIntegerLevelField(
	FourCC("Uls3"),
);
export const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_NBA2 = ConvertAbilityIntegerLevelField(
	FourCC("Nba2"),
);
export const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_NCH1 = ConvertAbilityIntegerLevelField(
	FourCC("Nch1"),
);
export const ABILITY_ILF_ATTACKS_PREVENTED = ConvertAbilityIntegerLevelField(
	FourCC("Nsi1"),
);
export const ABILITY_ILF_MAXIMUM_NUMBER_OF_TARGETS_EFK3 = ConvertAbilityIntegerLevelField(
	FourCC("Efk3"),
);
export const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_ESV1 = ConvertAbilityIntegerLevelField(
	FourCC("Esv1"),
);
export const ABILITY_ILF_MAXIMUM_NUMBER_OF_CORPSES_EXH1 = ConvertAbilityIntegerLevelField(
	FourCC("exh1"),
);
export const ABILITY_ILF_ITEM_CAPACITY = ConvertAbilityIntegerLevelField(
	FourCC("inv1"),
);
export const ABILITY_ILF_MAXIMUM_NUMBER_OF_TARGETS_SPL2 = ConvertAbilityIntegerLevelField(
	FourCC("spl2"),
);
export const ABILITY_ILF_ALLOW_WHEN_FULL_IRL3 = ConvertAbilityIntegerLevelField(
	FourCC("irl3"),
);
export const ABILITY_ILF_MAXIMUM_DISPELLED_UNITS = ConvertAbilityIntegerLevelField(
	FourCC("idc3"),
);
export const ABILITY_ILF_NUMBER_OF_LURES = ConvertAbilityIntegerLevelField(
	FourCC("imo1"),
);
export const ABILITY_ILF_NEW_TIME_OF_DAY_HOUR = ConvertAbilityIntegerLevelField(
	FourCC("ict1"),
);
export const ABILITY_ILF_NEW_TIME_OF_DAY_MINUTE = ConvertAbilityIntegerLevelField(
	FourCC("ict2"),
);
export const ABILITY_ILF_NUMBER_OF_UNITS_CREATED_MEC1 = ConvertAbilityIntegerLevelField(
	FourCC("mec1"),
);
export const ABILITY_ILF_MINIMUM_SPELLS = ConvertAbilityIntegerLevelField(
	FourCC("spb3"),
);
export const ABILITY_ILF_MAXIMUM_SPELLS = ConvertAbilityIntegerLevelField(
	FourCC("spb4"),
);
export const ABILITY_ILF_DISABLED_ATTACK_INDEX = ConvertAbilityIntegerLevelField(
	FourCC("gra3"),
);
export const ABILITY_ILF_ENABLED_ATTACK_INDEX_GRA4 = ConvertAbilityIntegerLevelField(
	FourCC("gra4"),
);
export const ABILITY_ILF_MAXIMUM_ATTACKS = ConvertAbilityIntegerLevelField(
	FourCC("gra5"),
);
export const ABILITY_ILF_BUILDING_TYPES_ALLOWED_NPR1 = ConvertAbilityIntegerLevelField(
	FourCC("Npr1"),
);
export const ABILITY_ILF_BUILDING_TYPES_ALLOWED_NSA1 = ConvertAbilityIntegerLevelField(
	FourCC("Nsa1"),
);
export const ABILITY_ILF_ATTACK_MODIFICATION = ConvertAbilityIntegerLevelField(
	FourCC("Iaa1"),
);
export const ABILITY_ILF_SUMMONED_UNIT_COUNT_NPA5 = ConvertAbilityIntegerLevelField(
	FourCC("Npa5"),
);
export const ABILITY_ILF_UPGRADE_LEVELS = ConvertAbilityIntegerLevelField(
	FourCC("Igl1"),
);
export const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_NDO2 = ConvertAbilityIntegerLevelField(
	FourCC("Ndo2"),
);
export const ABILITY_ILF_BEASTS_PER_SECOND = ConvertAbilityIntegerLevelField(
	FourCC("Nst1"),
);
export const ABILITY_ILF_TARGET_TYPE = ConvertAbilityIntegerLevelField(
	FourCC("Ncl2"),
);
export const ABILITY_ILF_OPTIONS = ConvertAbilityIntegerLevelField(
	FourCC("Ncl3"),
);
export const ABILITY_ILF_ARMOR_PENALTY_NAB3 = ConvertAbilityIntegerLevelField(
	FourCC("Nab3"),
);
export const ABILITY_ILF_WAVE_COUNT_NHS6 = ConvertAbilityIntegerLevelField(
	FourCC("Nhs6"),
);
export const ABILITY_ILF_MAX_CREEP_LEVEL_NTM3 = ConvertAbilityIntegerLevelField(
	FourCC("Ntm3"),
);
export const ABILITY_ILF_MISSILE_COUNT = ConvertAbilityIntegerLevelField(
	FourCC("Ncs3"),
);
export const ABILITY_ILF_SPLIT_ATTACK_COUNT = ConvertAbilityIntegerLevelField(
	FourCC("Nlm3"),
);
export const ABILITY_ILF_GENERATION_COUNT = ConvertAbilityIntegerLevelField(
	FourCC("Nlm6"),
);
export const ABILITY_ILF_ROCK_RING_COUNT = ConvertAbilityIntegerLevelField(
	FourCC("Nvc1"),
);
export const ABILITY_ILF_WAVE_COUNT_NVC2 = ConvertAbilityIntegerLevelField(
	FourCC("Nvc2"),
);
export const ABILITY_ILF_PREFER_HOSTILES_TAU1 = ConvertAbilityIntegerLevelField(
	FourCC("Tau1"),
);
export const ABILITY_ILF_PREFER_FRIENDLIES_TAU2 = ConvertAbilityIntegerLevelField(
	FourCC("Tau2"),
);
export const ABILITY_ILF_MAX_UNITS_TAU3 = ConvertAbilityIntegerLevelField(
	FourCC("Tau3"),
);
export const ABILITY_ILF_NUMBER_OF_PULSES = ConvertAbilityIntegerLevelField(
	FourCC("Tau4"),
);
export const ABILITY_ILF_SUMMONED_UNIT_TYPE_HWE1 = ConvertAbilityIntegerLevelField(
	FourCC("Hwe1"),
);
export const ABILITY_ILF_SUMMONED_UNIT_UIN4 = ConvertAbilityIntegerLevelField(
	FourCC("Uin4"),
);
export const ABILITY_ILF_SUMMONED_UNIT_OSF1 = ConvertAbilityIntegerLevelField(
	FourCC("Osf1"),
);
export const ABILITY_ILF_SUMMONED_UNIT_TYPE_EFNU = ConvertAbilityIntegerLevelField(
	FourCC("Efnu"),
);
export const ABILITY_ILF_SUMMONED_UNIT_TYPE_NBAU = ConvertAbilityIntegerLevelField(
	FourCC("Nbau"),
);
export const ABILITY_ILF_SUMMONED_UNIT_TYPE_NTOU = ConvertAbilityIntegerLevelField(
	FourCC("Ntou"),
);
export const ABILITY_ILF_SUMMONED_UNIT_TYPE_ESVU = ConvertAbilityIntegerLevelField(
	FourCC("Esvu"),
);
export const ABILITY_ILF_SUMMONED_UNIT_TYPES = ConvertAbilityIntegerLevelField(
	FourCC("Nef1"),
);
export const ABILITY_ILF_SUMMONED_UNIT_TYPE_NDOU = ConvertAbilityIntegerLevelField(
	FourCC("Ndou"),
);
export const ABILITY_ILF_ALTERNATE_FORM_UNIT_EMEU = ConvertAbilityIntegerLevelField(
	FourCC("Emeu"),
);
export const ABILITY_ILF_PLAGUE_WARD_UNIT_TYPE = ConvertAbilityIntegerLevelField(
	FourCC("Aplu"),
);
export const ABILITY_ILF_ALLOWED_UNIT_TYPE_BTL1 = ConvertAbilityIntegerLevelField(
	FourCC("Btl1"),
);
export const ABILITY_ILF_NEW_UNIT_TYPE = ConvertAbilityIntegerLevelField(
	FourCC("Cha1"),
);
export const ABILITY_ILF_RESULTING_UNIT_TYPE_ENT1 = ConvertAbilityIntegerLevelField(
	FourCC("ent1"),
);
export const ABILITY_ILF_CORPSE_UNIT_TYPE = ConvertAbilityIntegerLevelField(
	FourCC("Gydu"),
);
export const ABILITY_ILF_ALLOWED_UNIT_TYPE_LOA1 = ConvertAbilityIntegerLevelField(
	FourCC("Loa1"),
);
export const ABILITY_ILF_UNIT_TYPE_FOR_LIMIT_CHECK = ConvertAbilityIntegerLevelField(
	FourCC("Raiu"),
);
export const ABILITY_ILF_WARD_UNIT_TYPE_STAU = ConvertAbilityIntegerLevelField(
	FourCC("Stau"),
);
export const ABILITY_ILF_EFFECT_ABILITY = ConvertAbilityIntegerLevelField(
	FourCC("Iobu"),
);
export const ABILITY_ILF_CONVERSION_UNIT = ConvertAbilityIntegerLevelField(
	FourCC("Ndc2"),
);
export const ABILITY_ILF_UNIT_TO_PRESERVE = ConvertAbilityIntegerLevelField(
	FourCC("Nsl1"),
);
export const ABILITY_ILF_UNIT_TYPE_ALLOWED = ConvertAbilityIntegerLevelField(
	FourCC("Chl1"),
);
export const ABILITY_ILF_SWARM_UNIT_TYPE = ConvertAbilityIntegerLevelField(
	FourCC("Ulsu"),
);
export const ABILITY_ILF_RESULTING_UNIT_TYPE_COAU = ConvertAbilityIntegerLevelField(
	FourCC("coau"),
);
export const ABILITY_ILF_UNIT_TYPE_EXHU = ConvertAbilityIntegerLevelField(
	FourCC("exhu"),
);
export const ABILITY_ILF_WARD_UNIT_TYPE_HWDU = ConvertAbilityIntegerLevelField(
	FourCC("hwdu"),
);
export const ABILITY_ILF_LURE_UNIT_TYPE = ConvertAbilityIntegerLevelField(
	FourCC("imou"),
);
export const ABILITY_ILF_UNIT_TYPE_IPMU = ConvertAbilityIntegerLevelField(
	FourCC("ipmu"),
);
export const ABILITY_ILF_FACTORY_UNIT_ID = ConvertAbilityIntegerLevelField(
	FourCC("Nsyu"),
);
export const ABILITY_ILF_SPAWN_UNIT_ID_NFYU = ConvertAbilityIntegerLevelField(
	FourCC("Nfyu"),
);
export const ABILITY_ILF_DESTRUCTIBLE_ID = ConvertAbilityIntegerLevelField(
	FourCC("Nvcu"),
);
export const ABILITY_ILF_UPGRADE_TYPE = ConvertAbilityIntegerLevelField(
	FourCC("Iglu"),
);

export const ABILITY_RLF_CASTING_TIME = ConvertAbilityRealLevelField(
	FourCC("acas"),
);
export const ABILITY_RLF_DURATION_NORMAL = ConvertAbilityRealLevelField(
	FourCC("adur"),
);
export const ABILITY_RLF_DURATION_HERO = ConvertAbilityRealLevelField(
	FourCC("ahdu"),
);
export const ABILITY_RLF_COOLDOWN = ConvertAbilityRealLevelField(
	FourCC("acdn"),
);
export const ABILITY_RLF_AREA_OF_EFFECT = ConvertAbilityRealLevelField(
	FourCC("aare"),
);
export const ABILITY_RLF_CAST_RANGE = ConvertAbilityRealLevelField(
	FourCC("aran"),
);
export const ABILITY_RLF_DAMAGE_HBZ2 = ConvertAbilityRealLevelField(
	FourCC("Hbz2"),
);
export const ABILITY_RLF_BUILDING_REDUCTION_HBZ4 = ConvertAbilityRealLevelField(
	FourCC("Hbz4"),
);
export const ABILITY_RLF_DAMAGE_PER_SECOND_HBZ5 = ConvertAbilityRealLevelField(
	FourCC("Hbz5"),
);
export const ABILITY_RLF_MAXIMUM_DAMAGE_PER_WAVE = ConvertAbilityRealLevelField(
	FourCC("Hbz6"),
);
export const ABILITY_RLF_MANA_REGENERATION_INCREASE = ConvertAbilityRealLevelField(
	FourCC("Hab1"),
);
export const ABILITY_RLF_CASTING_DELAY = ConvertAbilityRealLevelField(
	FourCC("Hmt2"),
);
export const ABILITY_RLF_DAMAGE_PER_SECOND_OWW1 = ConvertAbilityRealLevelField(
	FourCC("Oww1"),
);
export const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_OWW2 = ConvertAbilityRealLevelField(
	FourCC("Oww2"),
);
export const ABILITY_RLF_CHANCE_TO_CRITICAL_STRIKE = ConvertAbilityRealLevelField(
	FourCC("Ocr1"),
);
export const ABILITY_RLF_DAMAGE_MULTIPLIER_OCR2 = ConvertAbilityRealLevelField(
	FourCC("Ocr2"),
);
export const ABILITY_RLF_DAMAGE_BONUS_OCR3 = ConvertAbilityRealLevelField(
	FourCC("Ocr3"),
);
export const ABILITY_RLF_CHANCE_TO_EVADE_OCR4 = ConvertAbilityRealLevelField(
	FourCC("Ocr4"),
);
export const ABILITY_RLF_DAMAGE_DEALT_PERCENT_OMI2 = ConvertAbilityRealLevelField(
	FourCC("Omi2"),
);
export const ABILITY_RLF_DAMAGE_TAKEN_PERCENT_OMI3 = ConvertAbilityRealLevelField(
	FourCC("Omi3"),
);
export const ABILITY_RLF_ANIMATION_DELAY = ConvertAbilityRealLevelField(
	FourCC("Omi4"),
);
export const ABILITY_RLF_TRANSITION_TIME = ConvertAbilityRealLevelField(
	FourCC("Owk1"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_OWK2 = ConvertAbilityRealLevelField(
	FourCC("Owk2"),
);
export const ABILITY_RLF_BACKSTAB_DAMAGE = ConvertAbilityRealLevelField(
	FourCC("Owk3"),
);
export const ABILITY_RLF_AMOUNT_HEALED_DAMAGED_UDC1 = ConvertAbilityRealLevelField(
	FourCC("Udc1"),
);
export const ABILITY_RLF_LIFE_CONVERTED_TO_MANA = ConvertAbilityRealLevelField(
	FourCC("Udp1"),
);
export const ABILITY_RLF_LIFE_CONVERTED_TO_LIFE = ConvertAbilityRealLevelField(
	FourCC("Udp2"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_UAU1 = ConvertAbilityRealLevelField(
	FourCC("Uau1"),
);
export const ABILITY_RLF_LIFE_REGENERATION_INCREASE_PERCENT = ConvertAbilityRealLevelField(
	FourCC("Uau2"),
);
export const ABILITY_RLF_CHANCE_TO_EVADE_EEV1 = ConvertAbilityRealLevelField(
	FourCC("Eev1"),
);
export const ABILITY_RLF_DAMAGE_PER_INTERVAL = ConvertAbilityRealLevelField(
	FourCC("Eim1"),
);
export const ABILITY_RLF_MANA_DRAINED_PER_SECOND_EIM2 = ConvertAbilityRealLevelField(
	FourCC("Eim2"),
);
export const ABILITY_RLF_BUFFER_MANA_REQUIRED = ConvertAbilityRealLevelField(
	FourCC("Eim3"),
);
export const ABILITY_RLF_MAX_MANA_DRAINED = ConvertAbilityRealLevelField(
	FourCC("Emb1"),
);
export const ABILITY_RLF_BOLT_DELAY = ConvertAbilityRealLevelField(
	FourCC("Emb2"),
);
export const ABILITY_RLF_BOLT_LIFETIME = ConvertAbilityRealLevelField(
	FourCC("Emb3"),
);
export const ABILITY_RLF_ALTITUDE_ADJUSTMENT_DURATION = ConvertAbilityRealLevelField(
	FourCC("Eme3"),
);
export const ABILITY_RLF_LANDING_DELAY_TIME = ConvertAbilityRealLevelField(
	FourCC("Eme4"),
);
export const ABILITY_RLF_ALTERNATE_FORM_HIT_POINT_BONUS = ConvertAbilityRealLevelField(
	FourCC("Eme5"),
);
export const ABILITY_RLF_MOVE_SPEED_BONUS_INFO_PANEL_ONLY = ConvertAbilityRealLevelField(
	FourCC("Ncr5"),
);
export const ABILITY_RLF_ATTACK_SPEED_BONUS_INFO_PANEL_ONLY = ConvertAbilityRealLevelField(
	FourCC("Ncr6"),
);
export const ABILITY_RLF_LIFE_REGENERATION_RATE_PER_SECOND = ConvertAbilityRealLevelField(
	FourCC("ave5"),
);
export const ABILITY_RLF_STUN_DURATION_USL1 = ConvertAbilityRealLevelField(
	FourCC("Usl1"),
);
export const ABILITY_RLF_ATTACK_DAMAGE_STOLEN_PERCENT = ConvertAbilityRealLevelField(
	FourCC("Uav1"),
);
export const ABILITY_RLF_DAMAGE_UCS1 = ConvertAbilityRealLevelField(
	FourCC("Ucs1"),
);
export const ABILITY_RLF_MAX_DAMAGE_UCS2 = ConvertAbilityRealLevelField(
	FourCC("Ucs2"),
);
export const ABILITY_RLF_DISTANCE_UCS3 = ConvertAbilityRealLevelField(
	FourCC("Ucs3"),
);
export const ABILITY_RLF_FINAL_AREA_UCS4 = ConvertAbilityRealLevelField(
	FourCC("Ucs4"),
);
export const ABILITY_RLF_DAMAGE_UIN1 = ConvertAbilityRealLevelField(
	FourCC("Uin1"),
);
export const ABILITY_RLF_DURATION = ConvertAbilityRealLevelField(
	FourCC("Uin2"),
);
export const ABILITY_RLF_IMPACT_DELAY = ConvertAbilityRealLevelField(
	FourCC("Uin3"),
);
export const ABILITY_RLF_DAMAGE_PER_TARGET_OCL1 = ConvertAbilityRealLevelField(
	FourCC("Ocl1"),
);
export const ABILITY_RLF_DAMAGE_REDUCTION_PER_TARGET = ConvertAbilityRealLevelField(
	FourCC("Ocl3"),
);
export const ABILITY_RLF_EFFECT_DELAY_OEQ1 = ConvertAbilityRealLevelField(
	FourCC("Oeq1"),
);
export const ABILITY_RLF_DAMAGE_PER_SECOND_TO_BUILDINGS = ConvertAbilityRealLevelField(
	FourCC("Oeq2"),
);
export const ABILITY_RLF_UNITS_SLOWED_PERCENT = ConvertAbilityRealLevelField(
	FourCC("Oeq3"),
);
export const ABILITY_RLF_FINAL_AREA_OEQ4 = ConvertAbilityRealLevelField(
	FourCC("Oeq4"),
);
export const ABILITY_RLF_DAMAGE_PER_SECOND_EER1 = ConvertAbilityRealLevelField(
	FourCC("Eer1"),
);
export const ABILITY_RLF_DAMAGE_DEALT_TO_ATTACKERS = ConvertAbilityRealLevelField(
	FourCC("Eah1"),
);
export const ABILITY_RLF_LIFE_HEALED = ConvertAbilityRealLevelField(
	FourCC("Etq1"),
);
export const ABILITY_RLF_HEAL_INTERVAL = ConvertAbilityRealLevelField(
	FourCC("Etq2"),
);
export const ABILITY_RLF_BUILDING_REDUCTION_ETQ3 = ConvertAbilityRealLevelField(
	FourCC("Etq3"),
);
export const ABILITY_RLF_INITIAL_IMMUNITY_DURATION = ConvertAbilityRealLevelField(
	FourCC("Etq4"),
);
export const ABILITY_RLF_MAX_LIFE_DRAINED_PER_SECOND_PERCENT = ConvertAbilityRealLevelField(
	FourCC("Udd1"),
);
export const ABILITY_RLF_BUILDING_REDUCTION_UDD2 = ConvertAbilityRealLevelField(
	FourCC("Udd2"),
);
export const ABILITY_RLF_ARMOR_DURATION = ConvertAbilityRealLevelField(
	FourCC("Ufa1"),
);
export const ABILITY_RLF_ARMOR_BONUS_UFA2 = ConvertAbilityRealLevelField(
	FourCC("Ufa2"),
);
export const ABILITY_RLF_AREA_OF_EFFECT_DAMAGE = ConvertAbilityRealLevelField(
	FourCC("Ufn1"),
);
export const ABILITY_RLF_SPECIFIC_TARGET_DAMAGE_UFN2 = ConvertAbilityRealLevelField(
	FourCC("Ufn2"),
);
export const ABILITY_RLF_DAMAGE_BONUS_HFA1 = ConvertAbilityRealLevelField(
	FourCC("Hfa1"),
);
export const ABILITY_RLF_DAMAGE_DEALT_ESF1 = ConvertAbilityRealLevelField(
	FourCC("Esf1"),
);
export const ABILITY_RLF_DAMAGE_INTERVAL_ESF2 = ConvertAbilityRealLevelField(
	FourCC("Esf2"),
);
export const ABILITY_RLF_BUILDING_REDUCTION_ESF3 = ConvertAbilityRealLevelField(
	FourCC("Esf3"),
);
export const ABILITY_RLF_DAMAGE_BONUS_PERCENT = ConvertAbilityRealLevelField(
	FourCC("Ear1"),
);
export const ABILITY_RLF_DEFENSE_BONUS_HAV1 = ConvertAbilityRealLevelField(
	FourCC("Hav1"),
);
export const ABILITY_RLF_HIT_POINT_BONUS = ConvertAbilityRealLevelField(
	FourCC("Hav2"),
);
export const ABILITY_RLF_DAMAGE_BONUS_HAV3 = ConvertAbilityRealLevelField(
	FourCC("Hav3"),
);
export const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_HAV4 = ConvertAbilityRealLevelField(
	FourCC("Hav4"),
);
export const ABILITY_RLF_CHANCE_TO_BASH = ConvertAbilityRealLevelField(
	FourCC("Hbh1"),
);
export const ABILITY_RLF_DAMAGE_MULTIPLIER_HBH2 = ConvertAbilityRealLevelField(
	FourCC("Hbh2"),
);
export const ABILITY_RLF_DAMAGE_BONUS_HBH3 = ConvertAbilityRealLevelField(
	FourCC("Hbh3"),
);
export const ABILITY_RLF_CHANCE_TO_MISS_HBH4 = ConvertAbilityRealLevelField(
	FourCC("Hbh4"),
);
export const ABILITY_RLF_DAMAGE_HTB1 = ConvertAbilityRealLevelField(
	FourCC("Htb1"),
);
export const ABILITY_RLF_AOE_DAMAGE = ConvertAbilityRealLevelField(
	FourCC("Htc1"),
);
export const ABILITY_RLF_SPECIFIC_TARGET_DAMAGE_HTC2 = ConvertAbilityRealLevelField(
	FourCC("Htc2"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_HTC3 = ConvertAbilityRealLevelField(
	FourCC("Htc3"),
);
export const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_HTC4 = ConvertAbilityRealLevelField(
	FourCC("Htc4"),
);
export const ABILITY_RLF_ARMOR_BONUS_HAD1 = ConvertAbilityRealLevelField(
	FourCC("Had1"),
);
export const ABILITY_RLF_AMOUNT_HEALED_DAMAGED_HHB1 = ConvertAbilityRealLevelField(
	FourCC("Hhb1"),
);
export const ABILITY_RLF_EXTRA_DAMAGE_HCA1 = ConvertAbilityRealLevelField(
	FourCC("Hca1"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_HCA2 = ConvertAbilityRealLevelField(
	FourCC("Hca2"),
);
export const ABILITY_RLF_ATTACK_SPEED_FACTOR_HCA3 = ConvertAbilityRealLevelField(
	FourCC("Hca3"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_OAE1 = ConvertAbilityRealLevelField(
	FourCC("Oae1"),
);
export const ABILITY_RLF_ATTACK_SPEED_INCREASE_PERCENT_OAE2 = ConvertAbilityRealLevelField(
	FourCC("Oae2"),
);
export const ABILITY_RLF_REINCARNATION_DELAY = ConvertAbilityRealLevelField(
	FourCC("Ore1"),
);
export const ABILITY_RLF_DAMAGE_OSH1 = ConvertAbilityRealLevelField(
	FourCC("Osh1"),
);
export const ABILITY_RLF_MAXIMUM_DAMAGE_OSH2 = ConvertAbilityRealLevelField(
	FourCC("Osh2"),
);
export const ABILITY_RLF_DISTANCE_OSH3 = ConvertAbilityRealLevelField(
	FourCC("Osh3"),
);
export const ABILITY_RLF_FINAL_AREA_OSH4 = ConvertAbilityRealLevelField(
	FourCC("Osh4"),
);
export const ABILITY_RLF_GRAPHIC_DELAY_NFD1 = ConvertAbilityRealLevelField(
	FourCC("Nfd1"),
);
export const ABILITY_RLF_GRAPHIC_DURATION_NFD2 = ConvertAbilityRealLevelField(
	FourCC("Nfd2"),
);
export const ABILITY_RLF_DAMAGE_NFD3 = ConvertAbilityRealLevelField(
	FourCC("Nfd3"),
);
export const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_AMS1 = ConvertAbilityRealLevelField(
	FourCC("Ams1"),
);
export const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_AMS2 = ConvertAbilityRealLevelField(
	FourCC("Ams2"),
);
export const ABILITY_RLF_AURA_DURATION = ConvertAbilityRealLevelField(
	FourCC("Apl1"),
);
export const ABILITY_RLF_DAMAGE_PER_SECOND_APL2 = ConvertAbilityRealLevelField(
	FourCC("Apl2"),
);
export const ABILITY_RLF_DURATION_OF_PLAGUE_WARD = ConvertAbilityRealLevelField(
	FourCC("Apl3"),
);
export const ABILITY_RLF_AMOUNT_OF_HIT_POINTS_REGENERATED = ConvertAbilityRealLevelField(
	FourCC("Oar1"),
);
export const ABILITY_RLF_ATTACK_DAMAGE_INCREASE_AKB1 = ConvertAbilityRealLevelField(
	FourCC("Akb1"),
);
export const ABILITY_RLF_MANA_LOSS_ADM1 = ConvertAbilityRealLevelField(
	FourCC("Adm1"),
);
export const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_ADM2 = ConvertAbilityRealLevelField(
	FourCC("Adm2"),
);
export const ABILITY_RLF_EXPANSION_AMOUNT = ConvertAbilityRealLevelField(
	FourCC("Bli1"),
);
export const ABILITY_RLF_INTERVAL_DURATION_BGM2 = ConvertAbilityRealLevelField(
	FourCC("Bgm2"),
);
export const ABILITY_RLF_RADIUS_OF_MINING_RING = ConvertAbilityRealLevelField(
	FourCC("Bgm4"),
);
export const ABILITY_RLF_ATTACK_SPEED_INCREASE_PERCENT_BLO1 = ConvertAbilityRealLevelField(
	FourCC("Blo1"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_BLO2 = ConvertAbilityRealLevelField(
	FourCC("Blo2"),
);
export const ABILITY_RLF_SCALING_FACTOR = ConvertAbilityRealLevelField(
	FourCC("Blo3"),
);
export const ABILITY_RLF_HIT_POINTS_PER_SECOND_CAN1 = ConvertAbilityRealLevelField(
	FourCC("Can1"),
);
export const ABILITY_RLF_MAX_HIT_POINTS = ConvertAbilityRealLevelField(
	FourCC("Can2"),
);
export const ABILITY_RLF_DAMAGE_PER_SECOND_DEV2 = ConvertAbilityRealLevelField(
	FourCC("Dev2"),
);
export const ABILITY_RLF_MOVEMENT_UPDATE_FREQUENCY_CHD1 = ConvertAbilityRealLevelField(
	FourCC("Chd1"),
);
export const ABILITY_RLF_ATTACK_UPDATE_FREQUENCY_CHD2 = ConvertAbilityRealLevelField(
	FourCC("Chd2"),
);
export const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_CHD3 = ConvertAbilityRealLevelField(
	FourCC("Chd3"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_CRI1 = ConvertAbilityRealLevelField(
	FourCC("Cri1"),
);
export const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_CRI2 = ConvertAbilityRealLevelField(
	FourCC("Cri2"),
);
export const ABILITY_RLF_DAMAGE_REDUCTION_CRI3 = ConvertAbilityRealLevelField(
	FourCC("Cri3"),
);
export const ABILITY_RLF_CHANCE_TO_MISS_CRS = ConvertAbilityRealLevelField(
	FourCC("Crs1"),
);
export const ABILITY_RLF_FULL_DAMAGE_RADIUS_DDA1 = ConvertAbilityRealLevelField(
	FourCC("Dda1"),
);
export const ABILITY_RLF_FULL_DAMAGE_AMOUNT_DDA2 = ConvertAbilityRealLevelField(
	FourCC("Dda2"),
);
export const ABILITY_RLF_PARTIAL_DAMAGE_RADIUS = ConvertAbilityRealLevelField(
	FourCC("Dda3"),
);
export const ABILITY_RLF_PARTIAL_DAMAGE_AMOUNT = ConvertAbilityRealLevelField(
	FourCC("Dda4"),
);
export const ABILITY_RLF_BUILDING_DAMAGE_FACTOR_SDS1 = ConvertAbilityRealLevelField(
	FourCC("Sds1"),
);
export const ABILITY_RLF_MAX_DAMAGE_UCO5 = ConvertAbilityRealLevelField(
	FourCC("Uco5"),
);
export const ABILITY_RLF_MOVE_SPEED_BONUS_UCO6 = ConvertAbilityRealLevelField(
	FourCC("Uco6"),
);
export const ABILITY_RLF_DAMAGE_TAKEN_PERCENT_DEF1 = ConvertAbilityRealLevelField(
	FourCC("Def1"),
);
export const ABILITY_RLF_DAMAGE_DEALT_PERCENT_DEF2 = ConvertAbilityRealLevelField(
	FourCC("Def2"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_DEF3 = ConvertAbilityRealLevelField(
	FourCC("Def3"),
);
export const ABILITY_RLF_ATTACK_SPEED_FACTOR_DEF4 = ConvertAbilityRealLevelField(
	FourCC("Def4"),
);
export const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_DEF5 = ConvertAbilityRealLevelField(
	FourCC("Def5"),
);
export const ABILITY_RLF_CHANCE_TO_DEFLECT = ConvertAbilityRealLevelField(
	FourCC("Def6"),
);
export const ABILITY_RLF_DEFLECT_DAMAGE_TAKEN_PIERCING = ConvertAbilityRealLevelField(
	FourCC("Def7"),
);
export const ABILITY_RLF_DEFLECT_DAMAGE_TAKEN_SPELLS = ConvertAbilityRealLevelField(
	FourCC("Def8"),
);
export const ABILITY_RLF_RIP_DELAY = ConvertAbilityRealLevelField(
	FourCC("Eat1"),
);
export const ABILITY_RLF_EAT_DELAY = ConvertAbilityRealLevelField(
	FourCC("Eat2"),
);
export const ABILITY_RLF_HIT_POINTS_GAINED_EAT3 = ConvertAbilityRealLevelField(
	FourCC("Eat3"),
);
export const ABILITY_RLF_AIR_UNIT_LOWER_DURATION = ConvertAbilityRealLevelField(
	FourCC("Ens1"),
);
export const ABILITY_RLF_AIR_UNIT_HEIGHT = ConvertAbilityRealLevelField(
	FourCC("Ens2"),
);
export const ABILITY_RLF_MELEE_ATTACK_RANGE = ConvertAbilityRealLevelField(
	FourCC("Ens3"),
);
export const ABILITY_RLF_INTERVAL_DURATION_EGM2 = ConvertAbilityRealLevelField(
	FourCC("Egm2"),
);
export const ABILITY_RLF_EFFECT_DELAY_FLA2 = ConvertAbilityRealLevelField(
	FourCC("Fla2"),
);
export const ABILITY_RLF_MINING_DURATION = ConvertAbilityRealLevelField(
	FourCC("Gld2"),
);
export const ABILITY_RLF_RADIUS_OF_GRAVESTONES = ConvertAbilityRealLevelField(
	FourCC("Gyd2"),
);
export const ABILITY_RLF_RADIUS_OF_CORPSES = ConvertAbilityRealLevelField(
	FourCC("Gyd3"),
);
export const ABILITY_RLF_HIT_POINTS_GAINED_HEA1 = ConvertAbilityRealLevelField(
	FourCC("Hea1"),
);
export const ABILITY_RLF_DAMAGE_INCREASE_PERCENT_INF1 = ConvertAbilityRealLevelField(
	FourCC("Inf1"),
);
export const ABILITY_RLF_AUTOCAST_RANGE = ConvertAbilityRealLevelField(
	FourCC("Inf3"),
);
export const ABILITY_RLF_LIFE_REGEN_RATE = ConvertAbilityRealLevelField(
	FourCC("Inf4"),
);
export const ABILITY_RLF_GRAPHIC_DELAY_LIT1 = ConvertAbilityRealLevelField(
	FourCC("Lit1"),
);
export const ABILITY_RLF_GRAPHIC_DURATION_LIT2 = ConvertAbilityRealLevelField(
	FourCC("Lit2"),
);
export const ABILITY_RLF_DAMAGE_PER_SECOND_LSH1 = ConvertAbilityRealLevelField(
	FourCC("Lsh1"),
);
export const ABILITY_RLF_MANA_GAINED = ConvertAbilityRealLevelField(
	FourCC("Mbt1"),
);
export const ABILITY_RLF_HIT_POINTS_GAINED_MBT2 = ConvertAbilityRealLevelField(
	FourCC("Mbt2"),
);
export const ABILITY_RLF_AUTOCAST_REQUIREMENT = ConvertAbilityRealLevelField(
	FourCC("Mbt3"),
);
export const ABILITY_RLF_WATER_HEIGHT = ConvertAbilityRealLevelField(
	FourCC("Mbt4"),
);
export const ABILITY_RLF_ACTIVATION_DELAY_MIN1 = ConvertAbilityRealLevelField(
	FourCC("Min1"),
);
export const ABILITY_RLF_INVISIBILITY_TRANSITION_TIME = ConvertAbilityRealLevelField(
	FourCC("Min2"),
);
export const ABILITY_RLF_ACTIVATION_RADIUS = ConvertAbilityRealLevelField(
	FourCC("Neu1"),
);
export const ABILITY_RLF_AMOUNT_REGENERATED = ConvertAbilityRealLevelField(
	FourCC("Arm1"),
);
export const ABILITY_RLF_DAMAGE_PER_SECOND_POI1 = ConvertAbilityRealLevelField(
	FourCC("Poi1"),
);
export const ABILITY_RLF_ATTACK_SPEED_FACTOR_POI2 = ConvertAbilityRealLevelField(
	FourCC("Poi2"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_POI3 = ConvertAbilityRealLevelField(
	FourCC("Poi3"),
);
export const ABILITY_RLF_EXTRA_DAMAGE_POA1 = ConvertAbilityRealLevelField(
	FourCC("Poa1"),
);
export const ABILITY_RLF_DAMAGE_PER_SECOND_POA2 = ConvertAbilityRealLevelField(
	FourCC("Poa2"),
);
export const ABILITY_RLF_ATTACK_SPEED_FACTOR_POA3 = ConvertAbilityRealLevelField(
	FourCC("Poa3"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_POA4 = ConvertAbilityRealLevelField(
	FourCC("Poa4"),
);
export const ABILITY_RLF_DAMAGE_AMPLIFICATION = ConvertAbilityRealLevelField(
	FourCC("Pos2"),
);
export const ABILITY_RLF_CHANCE_TO_STOMP_PERCENT = ConvertAbilityRealLevelField(
	FourCC("War1"),
);
export const ABILITY_RLF_DAMAGE_DEALT_WAR2 = ConvertAbilityRealLevelField(
	FourCC("War2"),
);
export const ABILITY_RLF_FULL_DAMAGE_RADIUS_WAR3 = ConvertAbilityRealLevelField(
	FourCC("War3"),
);
export const ABILITY_RLF_HALF_DAMAGE_RADIUS_WAR4 = ConvertAbilityRealLevelField(
	FourCC("War4"),
);
export const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_PRG3 = ConvertAbilityRealLevelField(
	FourCC("Prg3"),
);
export const ABILITY_RLF_UNIT_PAUSE_DURATION = ConvertAbilityRealLevelField(
	FourCC("Prg4"),
);
export const ABILITY_RLF_HERO_PAUSE_DURATION = ConvertAbilityRealLevelField(
	FourCC("Prg5"),
);
export const ABILITY_RLF_HIT_POINTS_GAINED_REJ1 = ConvertAbilityRealLevelField(
	FourCC("Rej1"),
);
export const ABILITY_RLF_MANA_POINTS_GAINED_REJ2 = ConvertAbilityRealLevelField(
	FourCC("Rej2"),
);
export const ABILITY_RLF_MINIMUM_LIFE_REQUIRED = ConvertAbilityRealLevelField(
	FourCC("Rpb3"),
);
export const ABILITY_RLF_MINIMUM_MANA_REQUIRED = ConvertAbilityRealLevelField(
	FourCC("Rpb4"),
);
export const ABILITY_RLF_REPAIR_COST_RATIO = ConvertAbilityRealLevelField(
	FourCC("Rep1"),
);
export const ABILITY_RLF_REPAIR_TIME_RATIO = ConvertAbilityRealLevelField(
	FourCC("Rep2"),
);
export const ABILITY_RLF_POWERBUILD_COST = ConvertAbilityRealLevelField(
	FourCC("Rep3"),
);
export const ABILITY_RLF_POWERBUILD_RATE = ConvertAbilityRealLevelField(
	FourCC("Rep4"),
);
export const ABILITY_RLF_NAVAL_RANGE_BONUS = ConvertAbilityRealLevelField(
	FourCC("Rep5"),
);
export const ABILITY_RLF_DAMAGE_INCREASE_PERCENT_ROA1 = ConvertAbilityRealLevelField(
	FourCC("Roa1"),
);
export const ABILITY_RLF_LIFE_REGENERATION_RATE = ConvertAbilityRealLevelField(
	FourCC("Roa3"),
);
export const ABILITY_RLF_MANA_REGEN = ConvertAbilityRealLevelField(
	FourCC("Roa4"),
);
export const ABILITY_RLF_DAMAGE_INCREASE = ConvertAbilityRealLevelField(
	FourCC("Nbr1"),
);
export const ABILITY_RLF_SALVAGE_COST_RATIO = ConvertAbilityRealLevelField(
	FourCC("Sal1"),
);
export const ABILITY_RLF_IN_FLIGHT_SIGHT_RADIUS = ConvertAbilityRealLevelField(
	FourCC("Esn1"),
);
export const ABILITY_RLF_HOVERING_SIGHT_RADIUS = ConvertAbilityRealLevelField(
	FourCC("Esn2"),
);
export const ABILITY_RLF_HOVERING_HEIGHT = ConvertAbilityRealLevelField(
	FourCC("Esn3"),
);
export const ABILITY_RLF_DURATION_OF_OWLS = ConvertAbilityRealLevelField(
	FourCC("Esn5"),
);
export const ABILITY_RLF_FADE_DURATION = ConvertAbilityRealLevelField(
	FourCC("Shm1"),
);
export const ABILITY_RLF_DAY_NIGHT_DURATION = ConvertAbilityRealLevelField(
	FourCC("Shm2"),
);
export const ABILITY_RLF_ACTION_DURATION = ConvertAbilityRealLevelField(
	FourCC("Shm3"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_SLO1 = ConvertAbilityRealLevelField(
	FourCC("Slo1"),
);
export const ABILITY_RLF_ATTACK_SPEED_FACTOR_SLO2 = ConvertAbilityRealLevelField(
	FourCC("Slo2"),
);
export const ABILITY_RLF_DAMAGE_PER_SECOND_SPO1 = ConvertAbilityRealLevelField(
	FourCC("Spo1"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_SPO2 = ConvertAbilityRealLevelField(
	FourCC("Spo2"),
);
export const ABILITY_RLF_ATTACK_SPEED_FACTOR_SPO3 = ConvertAbilityRealLevelField(
	FourCC("Spo3"),
);
export const ABILITY_RLF_ACTIVATION_DELAY_STA1 = ConvertAbilityRealLevelField(
	FourCC("Sta1"),
);
export const ABILITY_RLF_DETECTION_RADIUS_STA2 = ConvertAbilityRealLevelField(
	FourCC("Sta2"),
);
export const ABILITY_RLF_DETONATION_RADIUS = ConvertAbilityRealLevelField(
	FourCC("Sta3"),
);
export const ABILITY_RLF_STUN_DURATION_STA4 = ConvertAbilityRealLevelField(
	FourCC("Sta4"),
);
export const ABILITY_RLF_ATTACK_SPEED_BONUS_PERCENT = ConvertAbilityRealLevelField(
	FourCC("Uhf1"),
);
export const ABILITY_RLF_DAMAGE_PER_SECOND_UHF2 = ConvertAbilityRealLevelField(
	FourCC("Uhf2"),
);
export const ABILITY_RLF_LUMBER_PER_INTERVAL = ConvertAbilityRealLevelField(
	FourCC("Wha1"),
);
export const ABILITY_RLF_ART_ATTACHMENT_HEIGHT = ConvertAbilityRealLevelField(
	FourCC("Wha3"),
);
export const ABILITY_RLF_TELEPORT_AREA_WIDTH = ConvertAbilityRealLevelField(
	FourCC("Wrp1"),
);
export const ABILITY_RLF_TELEPORT_AREA_HEIGHT = ConvertAbilityRealLevelField(
	FourCC("Wrp2"),
);
export const ABILITY_RLF_LIFE_STOLEN_PER_ATTACK = ConvertAbilityRealLevelField(
	FourCC("Ivam"),
);
export const ABILITY_RLF_DAMAGE_BONUS_IDAM = ConvertAbilityRealLevelField(
	FourCC("Idam"),
);
export const ABILITY_RLF_CHANCE_TO_HIT_UNITS_PERCENT = ConvertAbilityRealLevelField(
	FourCC("Iob2"),
);
export const ABILITY_RLF_CHANCE_TO_HIT_HEROS_PERCENT = ConvertAbilityRealLevelField(
	FourCC("Iob3"),
);
export const ABILITY_RLF_CHANCE_TO_HIT_SUMMONS_PERCENT = ConvertAbilityRealLevelField(
	FourCC("Iob4"),
);
export const ABILITY_RLF_DELAY_FOR_TARGET_EFFECT = ConvertAbilityRealLevelField(
	FourCC("Idel"),
);
export const ABILITY_RLF_DAMAGE_DEALT_PERCENT_OF_NORMAL = ConvertAbilityRealLevelField(
	FourCC("Iild"),
);
export const ABILITY_RLF_DAMAGE_RECEIVED_MULTIPLIER = ConvertAbilityRealLevelField(
	FourCC("Iilw"),
);
export const ABILITY_RLF_MANA_REGENERATION_BONUS_AS_FRACTION_OF_NORMAL = ConvertAbilityRealLevelField(
	FourCC("Imrp"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_ISPI = ConvertAbilityRealLevelField(
	FourCC("Ispi"),
);
export const ABILITY_RLF_DAMAGE_PER_SECOND_IDPS = ConvertAbilityRealLevelField(
	FourCC("Idps"),
);
export const ABILITY_RLF_ATTACK_DAMAGE_INCREASE_CAC1 = ConvertAbilityRealLevelField(
	FourCC("Cac1"),
);
export const ABILITY_RLF_DAMAGE_PER_SECOND_COR1 = ConvertAbilityRealLevelField(
	FourCC("Cor1"),
);
export const ABILITY_RLF_ATTACK_SPEED_INCREASE_ISX1 = ConvertAbilityRealLevelField(
	FourCC("Isx1"),
);
export const ABILITY_RLF_DAMAGE_WRS1 = ConvertAbilityRealLevelField(
	FourCC("Wrs1"),
);
export const ABILITY_RLF_TERRAIN_DEFORMATION_AMPLITUDE = ConvertAbilityRealLevelField(
	FourCC("Wrs2"),
);
export const ABILITY_RLF_DAMAGE_CTC1 = ConvertAbilityRealLevelField(
	FourCC("Ctc1"),
);
export const ABILITY_RLF_EXTRA_DAMAGE_TO_TARGET = ConvertAbilityRealLevelField(
	FourCC("Ctc2"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_CTC3 = ConvertAbilityRealLevelField(
	FourCC("Ctc3"),
);
export const ABILITY_RLF_ATTACK_SPEED_REDUCTION_CTC4 = ConvertAbilityRealLevelField(
	FourCC("Ctc4"),
);
export const ABILITY_RLF_DAMAGE_CTB1 = ConvertAbilityRealLevelField(
	FourCC("Ctb1"),
);
export const ABILITY_RLF_CASTING_DELAY_SECONDS = ConvertAbilityRealLevelField(
	FourCC("Uds2"),
);
export const ABILITY_RLF_MANA_LOSS_PER_UNIT_DTN1 = ConvertAbilityRealLevelField(
	FourCC("Dtn1"),
);
export const ABILITY_RLF_DAMAGE_TO_SUMMONED_UNITS_DTN2 = ConvertAbilityRealLevelField(
	FourCC("Dtn2"),
);
export const ABILITY_RLF_TRANSITION_TIME_SECONDS = ConvertAbilityRealLevelField(
	FourCC("Ivs1"),
);
export const ABILITY_RLF_MANA_DRAINED_PER_SECOND_NMR1 = ConvertAbilityRealLevelField(
	FourCC("Nmr1"),
);
export const ABILITY_RLF_CHANCE_TO_REDUCE_DAMAGE_PERCENT = ConvertAbilityRealLevelField(
	FourCC("Ssk1"),
);
export const ABILITY_RLF_MINIMUM_DAMAGE = ConvertAbilityRealLevelField(
	FourCC("Ssk2"),
);
export const ABILITY_RLF_IGNORED_DAMAGE = ConvertAbilityRealLevelField(
	FourCC("Ssk3"),
);
export const ABILITY_RLF_FULL_DAMAGE_DEALT = ConvertAbilityRealLevelField(
	FourCC("Hfs1"),
);
export const ABILITY_RLF_FULL_DAMAGE_INTERVAL = ConvertAbilityRealLevelField(
	FourCC("Hfs2"),
);
export const ABILITY_RLF_HALF_DAMAGE_DEALT = ConvertAbilityRealLevelField(
	FourCC("Hfs3"),
);
export const ABILITY_RLF_HALF_DAMAGE_INTERVAL = ConvertAbilityRealLevelField(
	FourCC("Hfs4"),
);
export const ABILITY_RLF_BUILDING_REDUCTION_HFS5 = ConvertAbilityRealLevelField(
	FourCC("Hfs5"),
);
export const ABILITY_RLF_MAXIMUM_DAMAGE_HFS6 = ConvertAbilityRealLevelField(
	FourCC("Hfs6"),
);
export const ABILITY_RLF_MANA_PER_HIT_POINT = ConvertAbilityRealLevelField(
	FourCC("Nms1"),
);
export const ABILITY_RLF_DAMAGE_ABSORBED_PERCENT = ConvertAbilityRealLevelField(
	FourCC("Nms2"),
);
export const ABILITY_RLF_WAVE_DISTANCE = ConvertAbilityRealLevelField(
	FourCC("Uim1"),
);
export const ABILITY_RLF_WAVE_TIME_SECONDS = ConvertAbilityRealLevelField(
	FourCC("Uim2"),
);
export const ABILITY_RLF_DAMAGE_DEALT_UIM3 = ConvertAbilityRealLevelField(
	FourCC("Uim3"),
);
export const ABILITY_RLF_AIR_TIME_SECONDS_UIM4 = ConvertAbilityRealLevelField(
	FourCC("Uim4"),
);
export const ABILITY_RLF_UNIT_RELEASE_INTERVAL_SECONDS = ConvertAbilityRealLevelField(
	FourCC("Uls2"),
);
export const ABILITY_RLF_DAMAGE_RETURN_FACTOR = ConvertAbilityRealLevelField(
	FourCC("Uls4"),
);
export const ABILITY_RLF_DAMAGE_RETURN_THRESHOLD = ConvertAbilityRealLevelField(
	FourCC("Uls5"),
);
export const ABILITY_RLF_RETURNED_DAMAGE_FACTOR = ConvertAbilityRealLevelField(
	FourCC("Uts1"),
);
export const ABILITY_RLF_RECEIVED_DAMAGE_FACTOR = ConvertAbilityRealLevelField(
	FourCC("Uts2"),
);
export const ABILITY_RLF_DEFENSE_BONUS_UTS3 = ConvertAbilityRealLevelField(
	FourCC("Uts3"),
);
export const ABILITY_RLF_DAMAGE_BONUS_NBA1 = ConvertAbilityRealLevelField(
	FourCC("Nba1"),
);
export const ABILITY_RLF_SUMMONED_UNIT_DURATION_SECONDS_NBA3 = ConvertAbilityRealLevelField(
	FourCC("Nba3"),
);
export const ABILITY_RLF_MANA_PER_SUMMONED_HITPOINT = ConvertAbilityRealLevelField(
	FourCC("Cmg2"),
);
export const ABILITY_RLF_CHARGE_FOR_CURRENT_LIFE = ConvertAbilityRealLevelField(
	FourCC("Cmg3"),
);
export const ABILITY_RLF_HIT_POINTS_DRAINED = ConvertAbilityRealLevelField(
	FourCC("Ndr1"),
);
export const ABILITY_RLF_MANA_POINTS_DRAINED = ConvertAbilityRealLevelField(
	FourCC("Ndr2"),
);
export const ABILITY_RLF_DRAIN_INTERVAL_SECONDS = ConvertAbilityRealLevelField(
	FourCC("Ndr3"),
);
export const ABILITY_RLF_LIFE_TRANSFERRED_PER_SECOND = ConvertAbilityRealLevelField(
	FourCC("Ndr4"),
);
export const ABILITY_RLF_MANA_TRANSFERRED_PER_SECOND = ConvertAbilityRealLevelField(
	FourCC("Ndr5"),
);
export const ABILITY_RLF_BONUS_LIFE_FACTOR = ConvertAbilityRealLevelField(
	FourCC("Ndr6"),
);
export const ABILITY_RLF_BONUS_LIFE_DECAY = ConvertAbilityRealLevelField(
	FourCC("Ndr7"),
);
export const ABILITY_RLF_BONUS_MANA_FACTOR = ConvertAbilityRealLevelField(
	FourCC("Ndr8"),
);
export const ABILITY_RLF_BONUS_MANA_DECAY = ConvertAbilityRealLevelField(
	FourCC("Ndr9"),
);
export const ABILITY_RLF_CHANCE_TO_MISS_PERCENT = ConvertAbilityRealLevelField(
	FourCC("Nsi2"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_MODIFIER = ConvertAbilityRealLevelField(
	FourCC("Nsi3"),
);
export const ABILITY_RLF_ATTACK_SPEED_MODIFIER = ConvertAbilityRealLevelField(
	FourCC("Nsi4"),
);
export const ABILITY_RLF_DAMAGE_PER_SECOND_TDG1 = ConvertAbilityRealLevelField(
	FourCC("Tdg1"),
);
export const ABILITY_RLF_MEDIUM_DAMAGE_RADIUS_TDG2 = ConvertAbilityRealLevelField(
	FourCC("Tdg2"),
);
export const ABILITY_RLF_MEDIUM_DAMAGE_PER_SECOND = ConvertAbilityRealLevelField(
	FourCC("Tdg3"),
);
export const ABILITY_RLF_SMALL_DAMAGE_RADIUS_TDG4 = ConvertAbilityRealLevelField(
	FourCC("Tdg4"),
);
export const ABILITY_RLF_SMALL_DAMAGE_PER_SECOND = ConvertAbilityRealLevelField(
	FourCC("Tdg5"),
);
export const ABILITY_RLF_AIR_TIME_SECONDS_TSP1 = ConvertAbilityRealLevelField(
	FourCC("Tsp1"),
);
export const ABILITY_RLF_MINIMUM_HIT_INTERVAL_SECONDS = ConvertAbilityRealLevelField(
	FourCC("Tsp2"),
);
export const ABILITY_RLF_DAMAGE_PER_SECOND_NBF5 = ConvertAbilityRealLevelField(
	FourCC("Nbf5"),
);
export const ABILITY_RLF_MAXIMUM_RANGE = ConvertAbilityRealLevelField(
	FourCC("Ebl1"),
);
export const ABILITY_RLF_MINIMUM_RANGE = ConvertAbilityRealLevelField(
	FourCC("Ebl2"),
);
export const ABILITY_RLF_DAMAGE_PER_TARGET_EFK1 = ConvertAbilityRealLevelField(
	FourCC("Efk1"),
);
export const ABILITY_RLF_MAXIMUM_TOTAL_DAMAGE = ConvertAbilityRealLevelField(
	FourCC("Efk2"),
);
export const ABILITY_RLF_MAXIMUM_SPEED_ADJUSTMENT = ConvertAbilityRealLevelField(
	FourCC("Efk4"),
);
export const ABILITY_RLF_DECAYING_DAMAGE = ConvertAbilityRealLevelField(
	FourCC("Esh1"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_ESH2 = ConvertAbilityRealLevelField(
	FourCC("Esh2"),
);
export const ABILITY_RLF_ATTACK_SPEED_FACTOR_ESH3 = ConvertAbilityRealLevelField(
	FourCC("Esh3"),
);
export const ABILITY_RLF_DECAY_POWER = ConvertAbilityRealLevelField(
	FourCC("Esh4"),
);
export const ABILITY_RLF_INITIAL_DAMAGE_ESH5 = ConvertAbilityRealLevelField(
	FourCC("Esh5"),
);
export const ABILITY_RLF_MAXIMUM_LIFE_ABSORBED = ConvertAbilityRealLevelField(
	FourCC("abs1"),
);
export const ABILITY_RLF_MAXIMUM_MANA_ABSORBED = ConvertAbilityRealLevelField(
	FourCC("abs2"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_BSK1 = ConvertAbilityRealLevelField(
	FourCC("bsk1"),
);
export const ABILITY_RLF_ATTACK_SPEED_INCREASE_BSK2 = ConvertAbilityRealLevelField(
	FourCC("bsk2"),
);
export const ABILITY_RLF_DAMAGE_TAKEN_INCREASE = ConvertAbilityRealLevelField(
	FourCC("bsk3"),
);
export const ABILITY_RLF_LIFE_PER_UNIT = ConvertAbilityRealLevelField(
	FourCC("dvm1"),
);
export const ABILITY_RLF_MANA_PER_UNIT = ConvertAbilityRealLevelField(
	FourCC("dvm2"),
);
export const ABILITY_RLF_LIFE_PER_BUFF = ConvertAbilityRealLevelField(
	FourCC("dvm3"),
);
export const ABILITY_RLF_MANA_PER_BUFF = ConvertAbilityRealLevelField(
	FourCC("dvm4"),
);
export const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_DVM5 = ConvertAbilityRealLevelField(
	FourCC("dvm5"),
);
export const ABILITY_RLF_DAMAGE_BONUS_FAK1 = ConvertAbilityRealLevelField(
	FourCC("fak1"),
);
export const ABILITY_RLF_MEDIUM_DAMAGE_FACTOR_FAK2 = ConvertAbilityRealLevelField(
	FourCC("fak2"),
);
export const ABILITY_RLF_SMALL_DAMAGE_FACTOR_FAK3 = ConvertAbilityRealLevelField(
	FourCC("fak3"),
);
export const ABILITY_RLF_FULL_DAMAGE_RADIUS_FAK4 = ConvertAbilityRealLevelField(
	FourCC("fak4"),
);
export const ABILITY_RLF_HALF_DAMAGE_RADIUS_FAK5 = ConvertAbilityRealLevelField(
	FourCC("fak5"),
);
export const ABILITY_RLF_EXTRA_DAMAGE_PER_SECOND = ConvertAbilityRealLevelField(
	FourCC("liq1"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_LIQ2 = ConvertAbilityRealLevelField(
	FourCC("liq2"),
);
export const ABILITY_RLF_ATTACK_SPEED_REDUCTION_LIQ3 = ConvertAbilityRealLevelField(
	FourCC("liq3"),
);
export const ABILITY_RLF_MAGIC_DAMAGE_FACTOR = ConvertAbilityRealLevelField(
	FourCC("mim1"),
);
export const ABILITY_RLF_UNIT_DAMAGE_PER_MANA_POINT = ConvertAbilityRealLevelField(
	FourCC("mfl1"),
);
export const ABILITY_RLF_HERO_DAMAGE_PER_MANA_POINT = ConvertAbilityRealLevelField(
	FourCC("mfl2"),
);
export const ABILITY_RLF_UNIT_MAXIMUM_DAMAGE = ConvertAbilityRealLevelField(
	FourCC("mfl3"),
);
export const ABILITY_RLF_HERO_MAXIMUM_DAMAGE = ConvertAbilityRealLevelField(
	FourCC("mfl4"),
);
export const ABILITY_RLF_DAMAGE_COOLDOWN = ConvertAbilityRealLevelField(
	FourCC("mfl5"),
);
export const ABILITY_RLF_DISTRIBUTED_DAMAGE_FACTOR_SPL1 = ConvertAbilityRealLevelField(
	FourCC("spl1"),
);
export const ABILITY_RLF_LIFE_REGENERATED = ConvertAbilityRealLevelField(
	FourCC("irl1"),
);
export const ABILITY_RLF_MANA_REGENERATED = ConvertAbilityRealLevelField(
	FourCC("irl2"),
);
export const ABILITY_RLF_MANA_LOSS_PER_UNIT_IDC1 = ConvertAbilityRealLevelField(
	FourCC("idc1"),
);
export const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_IDC2 = ConvertAbilityRealLevelField(
	FourCC("idc2"),
);
export const ABILITY_RLF_ACTIVATION_DELAY_IMO2 = ConvertAbilityRealLevelField(
	FourCC("imo2"),
);
export const ABILITY_RLF_LURE_INTERVAL_SECONDS = ConvertAbilityRealLevelField(
	FourCC("imo3"),
);
export const ABILITY_RLF_DAMAGE_BONUS_ISR1 = ConvertAbilityRealLevelField(
	FourCC("isr1"),
);
export const ABILITY_RLF_DAMAGE_REDUCTION_ISR2 = ConvertAbilityRealLevelField(
	FourCC("isr2"),
);
export const ABILITY_RLF_DAMAGE_BONUS_IPV1 = ConvertAbilityRealLevelField(
	FourCC("ipv1"),
);
export const ABILITY_RLF_LIFE_STEAL_AMOUNT = ConvertAbilityRealLevelField(
	FourCC("ipv2"),
);
export const ABILITY_RLF_LIFE_RESTORED_FACTOR = ConvertAbilityRealLevelField(
	FourCC("ast1"),
);
export const ABILITY_RLF_MANA_RESTORED_FACTOR = ConvertAbilityRealLevelField(
	FourCC("ast2"),
);
export const ABILITY_RLF_ATTACH_DELAY = ConvertAbilityRealLevelField(
	FourCC("gra1"),
);
export const ABILITY_RLF_REMOVE_DELAY = ConvertAbilityRealLevelField(
	FourCC("gra2"),
);
export const ABILITY_RLF_HERO_REGENERATION_DELAY = ConvertAbilityRealLevelField(
	FourCC("Nsa2"),
);
export const ABILITY_RLF_UNIT_REGENERATION_DELAY = ConvertAbilityRealLevelField(
	FourCC("Nsa3"),
);
export const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_NSA4 = ConvertAbilityRealLevelField(
	FourCC("Nsa4"),
);
export const ABILITY_RLF_HIT_POINTS_PER_SECOND_NSA5 = ConvertAbilityRealLevelField(
	FourCC("Nsa5"),
);
export const ABILITY_RLF_DAMAGE_TO_SUMMONED_UNITS_IXS1 = ConvertAbilityRealLevelField(
	FourCC("Ixs1"),
);
export const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_IXS2 = ConvertAbilityRealLevelField(
	FourCC("Ixs2"),
);
export const ABILITY_RLF_SUMMONED_UNIT_DURATION = ConvertAbilityRealLevelField(
	FourCC("Npa6"),
);
export const ABILITY_RLF_SHIELD_COOLDOWN_TIME = ConvertAbilityRealLevelField(
	FourCC("Nse1"),
);
export const ABILITY_RLF_DAMAGE_PER_SECOND_NDO1 = ConvertAbilityRealLevelField(
	FourCC("Ndo1"),
);
export const ABILITY_RLF_SUMMONED_UNIT_DURATION_SECONDS_NDO3 = ConvertAbilityRealLevelField(
	FourCC("Ndo3"),
);
export const ABILITY_RLF_MEDIUM_DAMAGE_RADIUS_FLK1 = ConvertAbilityRealLevelField(
	FourCC("flk1"),
);
export const ABILITY_RLF_SMALL_DAMAGE_RADIUS_FLK2 = ConvertAbilityRealLevelField(
	FourCC("flk2"),
);
export const ABILITY_RLF_FULL_DAMAGE_AMOUNT_FLK3 = ConvertAbilityRealLevelField(
	FourCC("flk3"),
);
export const ABILITY_RLF_MEDIUM_DAMAGE_AMOUNT = ConvertAbilityRealLevelField(
	FourCC("flk4"),
);
export const ABILITY_RLF_SMALL_DAMAGE_AMOUNT = ConvertAbilityRealLevelField(
	FourCC("flk5"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_HBN1 = ConvertAbilityRealLevelField(
	FourCC("Hbn1"),
);
export const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_HBN2 = ConvertAbilityRealLevelField(
	FourCC("Hbn2"),
);
export const ABILITY_RLF_MAX_MANA_DRAINED_UNITS = ConvertAbilityRealLevelField(
	FourCC("fbk1"),
);
export const ABILITY_RLF_DAMAGE_RATIO_UNITS_PERCENT = ConvertAbilityRealLevelField(
	FourCC("fbk2"),
);
export const ABILITY_RLF_MAX_MANA_DRAINED_HEROS = ConvertAbilityRealLevelField(
	FourCC("fbk3"),
);
export const ABILITY_RLF_DAMAGE_RATIO_HEROS_PERCENT = ConvertAbilityRealLevelField(
	FourCC("fbk4"),
);
export const ABILITY_RLF_SUMMONED_DAMAGE = ConvertAbilityRealLevelField(
	FourCC("fbk5"),
);
export const ABILITY_RLF_DISTRIBUTED_DAMAGE_FACTOR_NCA1 = ConvertAbilityRealLevelField(
	FourCC("nca1"),
);
export const ABILITY_RLF_INITIAL_DAMAGE_PXF1 = ConvertAbilityRealLevelField(
	FourCC("pxf1"),
);
export const ABILITY_RLF_DAMAGE_PER_SECOND_PXF2 = ConvertAbilityRealLevelField(
	FourCC("pxf2"),
);
export const ABILITY_RLF_DAMAGE_PER_SECOND_MLS1 = ConvertAbilityRealLevelField(
	FourCC("mls1"),
);
export const ABILITY_RLF_BEAST_COLLISION_RADIUS = ConvertAbilityRealLevelField(
	FourCC("Nst2"),
);
export const ABILITY_RLF_DAMAGE_AMOUNT_NST3 = ConvertAbilityRealLevelField(
	FourCC("Nst3"),
);
export const ABILITY_RLF_DAMAGE_RADIUS = ConvertAbilityRealLevelField(
	FourCC("Nst4"),
);
export const ABILITY_RLF_DAMAGE_DELAY = ConvertAbilityRealLevelField(
	FourCC("Nst5"),
);
export const ABILITY_RLF_FOLLOW_THROUGH_TIME = ConvertAbilityRealLevelField(
	FourCC("Ncl1"),
);
export const ABILITY_RLF_ART_DURATION = ConvertAbilityRealLevelField(
	FourCC("Ncl4"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_NAB1 = ConvertAbilityRealLevelField(
	FourCC("Nab1"),
);
export const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_NAB2 = ConvertAbilityRealLevelField(
	FourCC("Nab2"),
);
export const ABILITY_RLF_PRIMARY_DAMAGE = ConvertAbilityRealLevelField(
	FourCC("Nab4"),
);
export const ABILITY_RLF_SECONDARY_DAMAGE = ConvertAbilityRealLevelField(
	FourCC("Nab5"),
);
export const ABILITY_RLF_DAMAGE_INTERVAL_NAB6 = ConvertAbilityRealLevelField(
	FourCC("Nab6"),
);
export const ABILITY_RLF_GOLD_COST_FACTOR = ConvertAbilityRealLevelField(
	FourCC("Ntm1"),
);
export const ABILITY_RLF_LUMBER_COST_FACTOR = ConvertAbilityRealLevelField(
	FourCC("Ntm2"),
);
export const ABILITY_RLF_MOVE_SPEED_BONUS_NEG1 = ConvertAbilityRealLevelField(
	FourCC("Neg1"),
);
export const ABILITY_RLF_DAMAGE_BONUS_NEG2 = ConvertAbilityRealLevelField(
	FourCC("Neg2"),
);
export const ABILITY_RLF_DAMAGE_AMOUNT_NCS1 = ConvertAbilityRealLevelField(
	FourCC("Ncs1"),
);
export const ABILITY_RLF_DAMAGE_INTERVAL_NCS2 = ConvertAbilityRealLevelField(
	FourCC("Ncs2"),
);
export const ABILITY_RLF_MAX_DAMAGE_NCS4 = ConvertAbilityRealLevelField(
	FourCC("Ncs4"),
);
export const ABILITY_RLF_BUILDING_DAMAGE_FACTOR_NCS5 = ConvertAbilityRealLevelField(
	FourCC("Ncs5"),
);
export const ABILITY_RLF_EFFECT_DURATION = ConvertAbilityRealLevelField(
	FourCC("Ncs6"),
);
export const ABILITY_RLF_SPAWN_INTERVAL_NSY1 = ConvertAbilityRealLevelField(
	FourCC("Nsy1"),
);
export const ABILITY_RLF_SPAWN_UNIT_DURATION = ConvertAbilityRealLevelField(
	FourCC("Nsy3"),
);
export const ABILITY_RLF_SPAWN_UNIT_OFFSET = ConvertAbilityRealLevelField(
	FourCC("Nsy4"),
);
export const ABILITY_RLF_LEASH_RANGE_NSY5 = ConvertAbilityRealLevelField(
	FourCC("Nsy5"),
);
export const ABILITY_RLF_SPAWN_INTERVAL_NFY1 = ConvertAbilityRealLevelField(
	FourCC("Nfy1"),
);
export const ABILITY_RLF_LEASH_RANGE_NFY2 = ConvertAbilityRealLevelField(
	FourCC("Nfy2"),
);
export const ABILITY_RLF_CHANCE_TO_DEMOLISH = ConvertAbilityRealLevelField(
	FourCC("Nde1"),
);
export const ABILITY_RLF_DAMAGE_MULTIPLIER_BUILDINGS = ConvertAbilityRealLevelField(
	FourCC("Nde2"),
);
export const ABILITY_RLF_DAMAGE_MULTIPLIER_UNITS = ConvertAbilityRealLevelField(
	FourCC("Nde3"),
);
export const ABILITY_RLF_DAMAGE_MULTIPLIER_HEROES = ConvertAbilityRealLevelField(
	FourCC("Nde4"),
);
export const ABILITY_RLF_BONUS_DAMAGE_MULTIPLIER = ConvertAbilityRealLevelField(
	FourCC("Nic1"),
);
export const ABILITY_RLF_DEATH_DAMAGE_FULL_AMOUNT = ConvertAbilityRealLevelField(
	FourCC("Nic2"),
);
export const ABILITY_RLF_DEATH_DAMAGE_FULL_AREA = ConvertAbilityRealLevelField(
	FourCC("Nic3"),
);
export const ABILITY_RLF_DEATH_DAMAGE_HALF_AMOUNT = ConvertAbilityRealLevelField(
	FourCC("Nic4"),
);
export const ABILITY_RLF_DEATH_DAMAGE_HALF_AREA = ConvertAbilityRealLevelField(
	FourCC("Nic5"),
);
export const ABILITY_RLF_DEATH_DAMAGE_DELAY = ConvertAbilityRealLevelField(
	FourCC("Nic6"),
);
export const ABILITY_RLF_DAMAGE_AMOUNT_NSO1 = ConvertAbilityRealLevelField(
	FourCC("Nso1"),
);
export const ABILITY_RLF_DAMAGE_PERIOD = ConvertAbilityRealLevelField(
	FourCC("Nso2"),
);
export const ABILITY_RLF_DAMAGE_PENALTY = ConvertAbilityRealLevelField(
	FourCC("Nso3"),
);
export const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_NSO4 = ConvertAbilityRealLevelField(
	FourCC("Nso4"),
);
export const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_NSO5 = ConvertAbilityRealLevelField(
	FourCC("Nso5"),
);
export const ABILITY_RLF_SPLIT_DELAY = ConvertAbilityRealLevelField(
	FourCC("Nlm2"),
);
export const ABILITY_RLF_MAX_HITPOINT_FACTOR = ConvertAbilityRealLevelField(
	FourCC("Nlm4"),
);
export const ABILITY_RLF_LIFE_DURATION_SPLIT_BONUS = ConvertAbilityRealLevelField(
	FourCC("Nlm5"),
);
export const ABILITY_RLF_WAVE_INTERVAL = ConvertAbilityRealLevelField(
	FourCC("Nvc3"),
);
export const ABILITY_RLF_BUILDING_DAMAGE_FACTOR_NVC4 = ConvertAbilityRealLevelField(
	FourCC("Nvc4"),
);
export const ABILITY_RLF_FULL_DAMAGE_AMOUNT_NVC5 = ConvertAbilityRealLevelField(
	FourCC("Nvc5"),
);
export const ABILITY_RLF_HALF_DAMAGE_FACTOR = ConvertAbilityRealLevelField(
	FourCC("Nvc6"),
);
export const ABILITY_RLF_INTERVAL_BETWEEN_PULSES = ConvertAbilityRealLevelField(
	FourCC("Tau5"),
);

export const ABILITY_BLF_PERCENT_BONUS_HAB2 = ConvertAbilityBooleanLevelField(
	FourCC("Hab2"),
);
export const ABILITY_BLF_USE_TELEPORT_CLUSTERING_HMT3 = ConvertAbilityBooleanLevelField(
	FourCC("Hmt3"),
);
export const ABILITY_BLF_NEVER_MISS_OCR5 = ConvertAbilityBooleanLevelField(
	FourCC("Ocr5"),
);
export const ABILITY_BLF_EXCLUDE_ITEM_DAMAGE = ConvertAbilityBooleanLevelField(
	FourCC("Ocr6"),
);
export const ABILITY_BLF_BACKSTAB_DAMAGE = ConvertAbilityBooleanLevelField(
	FourCC("Owk4"),
);
export const ABILITY_BLF_INHERIT_UPGRADES_UAN3 = ConvertAbilityBooleanLevelField(
	FourCC("Uan3"),
);
export const ABILITY_BLF_MANA_CONVERSION_AS_PERCENT = ConvertAbilityBooleanLevelField(
	FourCC("Udp3"),
);
export const ABILITY_BLF_LIFE_CONVERSION_AS_PERCENT = ConvertAbilityBooleanLevelField(
	FourCC("Udp4"),
);
export const ABILITY_BLF_LEAVE_TARGET_ALIVE = ConvertAbilityBooleanLevelField(
	FourCC("Udp5"),
);
export const ABILITY_BLF_PERCENT_BONUS_UAU3 = ConvertAbilityBooleanLevelField(
	FourCC("Uau3"),
);
export const ABILITY_BLF_DAMAGE_IS_PERCENT_RECEIVED = ConvertAbilityBooleanLevelField(
	FourCC("Eah2"),
);
export const ABILITY_BLF_MELEE_BONUS = ConvertAbilityBooleanLevelField(
	FourCC("Ear2"),
);
export const ABILITY_BLF_RANGED_BONUS = ConvertAbilityBooleanLevelField(
	FourCC("Ear3"),
);
export const ABILITY_BLF_FLAT_BONUS = ConvertAbilityBooleanLevelField(
	FourCC("Ear4"),
);
export const ABILITY_BLF_NEVER_MISS_HBH5 = ConvertAbilityBooleanLevelField(
	FourCC("Hbh5"),
);
export const ABILITY_BLF_PERCENT_BONUS_HAD2 = ConvertAbilityBooleanLevelField(
	FourCC("Had2"),
);
export const ABILITY_BLF_CAN_DEACTIVATE = ConvertAbilityBooleanLevelField(
	FourCC("Hds1"),
);
export const ABILITY_BLF_RAISED_UNITS_ARE_INVULNERABLE = ConvertAbilityBooleanLevelField(
	FourCC("Hre2"),
);
export const ABILITY_BLF_PERCENTAGE_OAR2 = ConvertAbilityBooleanLevelField(
	FourCC("Oar2"),
);
export const ABILITY_BLF_SUMMON_BUSY_UNITS = ConvertAbilityBooleanLevelField(
	FourCC("Btl2"),
);
export const ABILITY_BLF_CREATES_BLIGHT = ConvertAbilityBooleanLevelField(
	FourCC("Bli2"),
);
export const ABILITY_BLF_EXPLODES_ON_DEATH = ConvertAbilityBooleanLevelField(
	FourCC("Sds6"),
);
export const ABILITY_BLF_ALWAYS_AUTOCAST_FAE2 = ConvertAbilityBooleanLevelField(
	FourCC("Fae2"),
);
export const ABILITY_BLF_REGENERATE_ONLY_AT_NIGHT = ConvertAbilityBooleanLevelField(
	FourCC("Mbt5"),
);
export const ABILITY_BLF_SHOW_SELECT_UNIT_BUTTON = ConvertAbilityBooleanLevelField(
	FourCC("Neu3"),
);
export const ABILITY_BLF_SHOW_UNIT_INDICATOR = ConvertAbilityBooleanLevelField(
	FourCC("Neu4"),
);
export const ABILITY_BLF_CHARGE_OWNING_PLAYER = ConvertAbilityBooleanLevelField(
	FourCC("Ans6"),
);
export const ABILITY_BLF_PERCENTAGE_ARM2 = ConvertAbilityBooleanLevelField(
	FourCC("Arm2"),
);
export const ABILITY_BLF_TARGET_IS_INVULNERABLE = ConvertAbilityBooleanLevelField(
	FourCC("Pos3"),
);
export const ABILITY_BLF_TARGET_IS_MAGIC_IMMUNE = ConvertAbilityBooleanLevelField(
	FourCC("Pos4"),
);
export const ABILITY_BLF_KILL_ON_CASTER_DEATH = ConvertAbilityBooleanLevelField(
	FourCC("Ucb6"),
);
export const ABILITY_BLF_NO_TARGET_REQUIRED_REJ4 = ConvertAbilityBooleanLevelField(
	FourCC("Rej4"),
);
export const ABILITY_BLF_ACCEPTS_GOLD = ConvertAbilityBooleanLevelField(
	FourCC("Rtn1"),
);
export const ABILITY_BLF_ACCEPTS_LUMBER = ConvertAbilityBooleanLevelField(
	FourCC("Rtn2"),
);
export const ABILITY_BLF_PREFER_HOSTILES_ROA5 = ConvertAbilityBooleanLevelField(
	FourCC("Roa5"),
);
export const ABILITY_BLF_PREFER_FRIENDLIES_ROA6 = ConvertAbilityBooleanLevelField(
	FourCC("Roa6"),
);
export const ABILITY_BLF_ROOTED_TURNING = ConvertAbilityBooleanLevelField(
	FourCC("Roo3"),
);
export const ABILITY_BLF_ALWAYS_AUTOCAST_SLO3 = ConvertAbilityBooleanLevelField(
	FourCC("Slo3"),
);
export const ABILITY_BLF_HIDE_BUTTON = ConvertAbilityBooleanLevelField(
	FourCC("Ihid"),
);
export const ABILITY_BLF_USE_TELEPORT_CLUSTERING_ITP2 = ConvertAbilityBooleanLevelField(
	FourCC("Itp2"),
);
export const ABILITY_BLF_IMMUNE_TO_MORPH_EFFECTS = ConvertAbilityBooleanLevelField(
	FourCC("Eth1"),
);
export const ABILITY_BLF_DOES_NOT_BLOCK_BUILDINGS = ConvertAbilityBooleanLevelField(
	FourCC("Eth2"),
);
export const ABILITY_BLF_AUTO_ACQUIRE_ATTACK_TARGETS = ConvertAbilityBooleanLevelField(
	FourCC("Gho1"),
);
export const ABILITY_BLF_IMMUNE_TO_MORPH_EFFECTS_GHO2 = ConvertAbilityBooleanLevelField(
	FourCC("Gho2"),
);
export const ABILITY_BLF_DO_NOT_BLOCK_BUILDINGS = ConvertAbilityBooleanLevelField(
	FourCC("Gho3"),
);
export const ABILITY_BLF_INCLUDE_RANGED_DAMAGE = ConvertAbilityBooleanLevelField(
	FourCC("Ssk4"),
);
export const ABILITY_BLF_INCLUDE_MELEE_DAMAGE = ConvertAbilityBooleanLevelField(
	FourCC("Ssk5"),
);
export const ABILITY_BLF_MOVE_TO_PARTNER = ConvertAbilityBooleanLevelField(
	FourCC("coa2"),
);
export const ABILITY_BLF_CAN_BE_DISPELLED = ConvertAbilityBooleanLevelField(
	FourCC("cyc1"),
);
export const ABILITY_BLF_IGNORE_FRIENDLY_BUFFS = ConvertAbilityBooleanLevelField(
	FourCC("dvm6"),
);
export const ABILITY_BLF_DROP_ITEMS_ON_DEATH = ConvertAbilityBooleanLevelField(
	FourCC("inv2"),
);
export const ABILITY_BLF_CAN_USE_ITEMS = ConvertAbilityBooleanLevelField(
	FourCC("inv3"),
);
export const ABILITY_BLF_CAN_GET_ITEMS = ConvertAbilityBooleanLevelField(
	FourCC("inv4"),
);
export const ABILITY_BLF_CAN_DROP_ITEMS = ConvertAbilityBooleanLevelField(
	FourCC("inv5"),
);
export const ABILITY_BLF_REPAIRS_ALLOWED = ConvertAbilityBooleanLevelField(
	FourCC("liq4"),
);
export const ABILITY_BLF_CASTER_ONLY_SPLASH = ConvertAbilityBooleanLevelField(
	FourCC("mfl6"),
);
export const ABILITY_BLF_NO_TARGET_REQUIRED_IRL4 = ConvertAbilityBooleanLevelField(
	FourCC("irl4"),
);
export const ABILITY_BLF_DISPEL_ON_ATTACK = ConvertAbilityBooleanLevelField(
	FourCC("irl5"),
);
export const ABILITY_BLF_AMOUNT_IS_RAW_VALUE = ConvertAbilityBooleanLevelField(
	FourCC("ipv3"),
);
export const ABILITY_BLF_SHARED_SPELL_COOLDOWN = ConvertAbilityBooleanLevelField(
	FourCC("spb2"),
);
export const ABILITY_BLF_SLEEP_ONCE = ConvertAbilityBooleanLevelField(
	FourCC("sla1"),
);
export const ABILITY_BLF_ALLOW_ON_ANY_PLAYER_SLOT = ConvertAbilityBooleanLevelField(
	FourCC("sla2"),
);
export const ABILITY_BLF_DISABLE_OTHER_ABILITIES = ConvertAbilityBooleanLevelField(
	FourCC("Ncl5"),
);
export const ABILITY_BLF_ALLOW_BOUNTY = ConvertAbilityBooleanLevelField(
	FourCC("Ntm4"),
);

export const ABILITY_SLF_ICON_NORMAL = ConvertAbilityStringLevelField(
	FourCC("aart"),
);
export const ABILITY_SLF_CASTER = ConvertAbilityStringLevelField(
	FourCC("acat"),
);
export const ABILITY_SLF_TARGET = ConvertAbilityStringLevelField(
	FourCC("atat"),
);
export const ABILITY_SLF_SPECIAL = ConvertAbilityStringLevelField(
	FourCC("asat"),
);
export const ABILITY_SLF_EFFECT = ConvertAbilityStringLevelField(
	FourCC("aeat"),
);
export const ABILITY_SLF_AREA_EFFECT = ConvertAbilityStringLevelField(
	FourCC("aaea"),
);
export const ABILITY_SLF_LIGHTNING_EFFECTS = ConvertAbilityStringLevelField(
	FourCC("alig"),
);
export const ABILITY_SLF_MISSILE_ART = ConvertAbilityStringLevelField(
	FourCC("amat"),
);
export const ABILITY_SLF_TOOLTIP_LEARN = ConvertAbilityStringLevelField(
	FourCC("aret"),
);
export const ABILITY_SLF_TOOLTIP_LEARN_EXTENDED = ConvertAbilityStringLevelField(
	FourCC("arut"),
);
export const ABILITY_SLF_TOOLTIP_NORMAL = ConvertAbilityStringLevelField(
	FourCC("atp1"),
);
export const ABILITY_SLF_TOOLTIP_TURN_OFF = ConvertAbilityStringLevelField(
	FourCC("aut1"),
);
export const ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED = ConvertAbilityStringLevelField(
	FourCC("aub1"),
);
export const ABILITY_SLF_TOOLTIP_TURN_OFF_EXTENDED = ConvertAbilityStringLevelField(
	FourCC("auu1"),
);
export const ABILITY_SLF_NORMAL_FORM_UNIT_EME1 = ConvertAbilityStringLevelField(
	FourCC("Eme1"),
);
export const ABILITY_SLF_SPAWNED_UNITS = ConvertAbilityStringLevelField(
	FourCC("Ndp1"),
);
export const ABILITY_SLF_ABILITY_FOR_UNIT_CREATION = ConvertAbilityStringLevelField(
	FourCC("Nrc1"),
);
export const ABILITY_SLF_NORMAL_FORM_UNIT_MIL1 = ConvertAbilityStringLevelField(
	FourCC("Mil1"),
);
export const ABILITY_SLF_ALTERNATE_FORM_UNIT_MIL2 = ConvertAbilityStringLevelField(
	FourCC("Mil2"),
);
export const ABILITY_SLF_BASE_ORDER_ID_ANS5 = ConvertAbilityStringLevelField(
	FourCC("Ans5"),
);
export const ABILITY_SLF_MORPH_UNITS_GROUND = ConvertAbilityStringLevelField(
	FourCC("Ply2"),
);
export const ABILITY_SLF_MORPH_UNITS_AIR = ConvertAbilityStringLevelField(
	FourCC("Ply3"),
);
export const ABILITY_SLF_MORPH_UNITS_AMPHIBIOUS = ConvertAbilityStringLevelField(
	FourCC("Ply4"),
);
export const ABILITY_SLF_MORPH_UNITS_WATER = ConvertAbilityStringLevelField(
	FourCC("Ply5"),
);
export const ABILITY_SLF_UNIT_TYPE_ONE = ConvertAbilityStringLevelField(
	FourCC("Rai3"),
);
export const ABILITY_SLF_UNIT_TYPE_TWO = ConvertAbilityStringLevelField(
	FourCC("Rai4"),
);
export const ABILITY_SLF_UNIT_TYPE_SOD2 = ConvertAbilityStringLevelField(
	FourCC("Sod2"),
);
export const ABILITY_SLF_SUMMON_1_UNIT_TYPE = ConvertAbilityStringLevelField(
	FourCC("Ist1"),
);
export const ABILITY_SLF_SUMMON_2_UNIT_TYPE = ConvertAbilityStringLevelField(
	FourCC("Ist2"),
);
export const ABILITY_SLF_RACE_TO_CONVERT = ConvertAbilityStringLevelField(
	FourCC("Ndc1"),
);
export const ABILITY_SLF_PARTNER_UNIT_TYPE = ConvertAbilityStringLevelField(
	FourCC("coa1"),
);
export const ABILITY_SLF_PARTNER_UNIT_TYPE_ONE = ConvertAbilityStringLevelField(
	FourCC("dcp1"),
);
export const ABILITY_SLF_PARTNER_UNIT_TYPE_TWO = ConvertAbilityStringLevelField(
	FourCC("dcp2"),
);
export const ABILITY_SLF_REQUIRED_UNIT_TYPE = ConvertAbilityStringLevelField(
	FourCC("tpi1"),
);
export const ABILITY_SLF_CONVERTED_UNIT_TYPE = ConvertAbilityStringLevelField(
	FourCC("tpi2"),
);
export const ABILITY_SLF_SPELL_LIST = ConvertAbilityStringLevelField(
	FourCC("spb1"),
);
export const ABILITY_SLF_BASE_ORDER_ID_SPB5 = ConvertAbilityStringLevelField(
	FourCC("spb5"),
);
export const ABILITY_SLF_BASE_ORDER_ID_NCL6 = ConvertAbilityStringLevelField(
	FourCC("Ncl6"),
);
export const ABILITY_SLF_ABILITY_UPGRADE_1 = ConvertAbilityStringLevelField(
	FourCC("Neg3"),
);
export const ABILITY_SLF_ABILITY_UPGRADE_2 = ConvertAbilityStringLevelField(
	FourCC("Neg4"),
);
export const ABILITY_SLF_ABILITY_UPGRADE_3 = ConvertAbilityStringLevelField(
	FourCC("Neg5"),
);
export const ABILITY_SLF_ABILITY_UPGRADE_4 = ConvertAbilityStringLevelField(
	FourCC("Neg6"),
);
export const ABILITY_SLF_SPAWN_UNIT_ID_NSY2 = ConvertAbilityStringLevelField(
	FourCC("Nsy2"),
);

// Item
export const ITEM_IF_LEVEL = ConvertItemIntegerField(FourCC("ilev"));
export const ITEM_IF_NUMBER_OF_CHARGES = ConvertItemIntegerField(
	FourCC("iuse"),
);
export const ITEM_IF_COOLDOWN_GROUP = ConvertItemIntegerField(FourCC("icid"));
export const ITEM_IF_MAX_HIT_POINTS = ConvertItemIntegerField(FourCC("ihtp"));
export const ITEM_IF_HIT_POINTS = ConvertItemIntegerField(FourCC("ihpc"));
export const ITEM_IF_PRIORITY = ConvertItemIntegerField(FourCC("ipri"));
export const ITEM_IF_ARMOR_TYPE = ConvertItemIntegerField(FourCC("iarm"));
export const ITEM_IF_TINTING_COLOR_RED = ConvertItemIntegerField(
	FourCC("iclr"),
);
export const ITEM_IF_TINTING_COLOR_GREEN = ConvertItemIntegerField(
	FourCC("iclg"),
);
export const ITEM_IF_TINTING_COLOR_BLUE = ConvertItemIntegerField(
	FourCC("iclb"),
);
export const ITEM_IF_TINTING_COLOR_ALPHA = ConvertItemIntegerField(
	FourCC("ical"),
);

export const ITEM_RF_SCALING_VALUE = ConvertItemRealField(FourCC("isca"));

export const ITEM_BF_DROPPED_WHEN_CARRIER_DIES = ConvertItemBooleanField(
	FourCC("idrp"),
);
export const ITEM_BF_CAN_BE_DROPPED = ConvertItemBooleanField(FourCC("idro"));
export const ITEM_BF_PERISHABLE = ConvertItemBooleanField(FourCC("iper"));
export const ITEM_BF_INCLUDE_AS_RANDOM_CHOICE = ConvertItemBooleanField(
	FourCC("iprn"),
);
export const ITEM_BF_USE_AUTOMATICALLY_WHEN_ACQUIRED = ConvertItemBooleanField(
	FourCC("ipow"),
);
export const ITEM_BF_CAN_BE_SOLD_TO_MERCHANTS = ConvertItemBooleanField(
	FourCC("ipaw"),
);
export const ITEM_BF_ACTIVELY_USED = ConvertItemBooleanField(FourCC("iusa"));

export const ITEM_SF_MODEL_USED = ConvertItemStringField(FourCC("ifil"));

// Unit
export const UNIT_IF_DEFENSE_TYPE = ConvertUnitIntegerField(FourCC("udty"));
export const UNIT_IF_ARMOR_TYPE = ConvertUnitIntegerField(FourCC("uarm"));
export const UNIT_IF_LOOPING_FADE_IN_RATE = ConvertUnitIntegerField(
	FourCC("ulfi"),
);
export const UNIT_IF_LOOPING_FADE_OUT_RATE = ConvertUnitIntegerField(
	FourCC("ulfo"),
);
export const UNIT_IF_AGILITY = ConvertUnitIntegerField(FourCC("uagc"));
export const UNIT_IF_INTELLIGENCE = ConvertUnitIntegerField(FourCC("uinc"));
export const UNIT_IF_STRENGTH = ConvertUnitIntegerField(FourCC("ustc"));
export const UNIT_IF_AGILITY_PERMANENT = ConvertUnitIntegerField(
	FourCC("uagm"),
);
export const UNIT_IF_INTELLIGENCE_PERMANENT = ConvertUnitIntegerField(
	FourCC("uinm"),
);
export const UNIT_IF_STRENGTH_PERMANENT = ConvertUnitIntegerField(
	FourCC("ustm"),
);
export const UNIT_IF_AGILITY_WITH_BONUS = ConvertUnitIntegerField(
	FourCC("uagb"),
);
export const UNIT_IF_INTELLIGENCE_WITH_BONUS = ConvertUnitIntegerField(
	FourCC("uinb"),
);
export const UNIT_IF_STRENGTH_WITH_BONUS = ConvertUnitIntegerField(
	FourCC("ustb"),
);
export const UNIT_IF_GOLD_BOUNTY_AWARDED_NUMBER_OF_DICE = ConvertUnitIntegerField(
	FourCC("ubdi"),
);
export const UNIT_IF_GOLD_BOUNTY_AWARDED_BASE = ConvertUnitIntegerField(
	FourCC("ubba"),
);
export const UNIT_IF_GOLD_BOUNTY_AWARDED_SIDES_PER_DIE = ConvertUnitIntegerField(
	FourCC("ubsi"),
);
export const UNIT_IF_LUMBER_BOUNTY_AWARDED_NUMBER_OF_DICE = ConvertUnitIntegerField(
	FourCC("ulbd"),
);
export const UNIT_IF_LUMBER_BOUNTY_AWARDED_BASE = ConvertUnitIntegerField(
	FourCC("ulba"),
);
export const UNIT_IF_LUMBER_BOUNTY_AWARDED_SIDES_PER_DIE = ConvertUnitIntegerField(
	FourCC("ulbs"),
);
export const UNIT_IF_LEVEL = ConvertUnitIntegerField(FourCC("ulev"));
export const UNIT_IF_FORMATION_RANK = ConvertUnitIntegerField(FourCC("ufor"));
export const UNIT_IF_ORIENTATION_INTERPOLATION = ConvertUnitIntegerField(
	FourCC("uori"),
);
export const UNIT_IF_ELEVATION_SAMPLE_POINTS = ConvertUnitIntegerField(
	FourCC("uept"),
);
export const UNIT_IF_TINTING_COLOR_RED = ConvertUnitIntegerField(
	FourCC("uclr"),
);
export const UNIT_IF_TINTING_COLOR_GREEN = ConvertUnitIntegerField(
	FourCC("uclg"),
);
export const UNIT_IF_TINTING_COLOR_BLUE = ConvertUnitIntegerField(
	FourCC("uclb"),
);
export const UNIT_IF_TINTING_COLOR_ALPHA = ConvertUnitIntegerField(
	FourCC("ucal"),
);
export const UNIT_IF_MOVE_TYPE = ConvertUnitIntegerField(FourCC("umvt"));
export const UNIT_IF_TARGETED_AS = ConvertUnitIntegerField(FourCC("utar"));
export const UNIT_IF_UNIT_CLASSIFICATION = ConvertUnitIntegerField(
	FourCC("utyp"),
);
export const UNIT_IF_HIT_POINTS_REGENERATION_TYPE = ConvertUnitIntegerField(
	FourCC("uhrt"),
);
export const UNIT_IF_PLACEMENT_PREVENTED_BY = ConvertUnitIntegerField(
	FourCC("upar"),
);
export const UNIT_IF_PRIMARY_ATTRIBUTE = ConvertUnitIntegerField(
	FourCC("upra"),
);

export const UNIT_RF_STRENGTH_PER_LEVEL = ConvertUnitRealField(FourCC("ustp"));
export const UNIT_RF_AGILITY_PER_LEVEL = ConvertUnitRealField(FourCC("uagp"));
export const UNIT_RF_INTELLIGENCE_PER_LEVEL = ConvertUnitRealField(
	FourCC("uinp"),
);
export const UNIT_RF_HIT_POINTS_REGENERATION_RATE = ConvertUnitRealField(
	FourCC("uhpr"),
);
export const UNIT_RF_MANA_REGENERATION = ConvertUnitRealField(FourCC("umpr"));
export const UNIT_RF_DEATH_TIME = ConvertUnitRealField(FourCC("udtm"));
export const UNIT_RF_FLY_HEIGHT = ConvertUnitRealField(FourCC("ufyh"));
export const UNIT_RF_TURN_RATE = ConvertUnitRealField(FourCC("umvr"));
export const UNIT_RF_ELEVATION_SAMPLE_RADIUS = ConvertUnitRealField(
	FourCC("uerd"),
);
export const UNIT_RF_FOG_OF_WAR_SAMPLE_RADIUS = ConvertUnitRealField(
	FourCC("ufrd"),
);
export const UNIT_RF_MAXIMUM_PITCH_ANGLE_DEGREES = ConvertUnitRealField(
	FourCC("umxp"),
);
export const UNIT_RF_MAXIMUM_ROLL_ANGLE_DEGREES = ConvertUnitRealField(
	FourCC("umxr"),
);
export const UNIT_RF_SCALING_VALUE = ConvertUnitRealField(FourCC("usca"));
export const UNIT_RF_ANIMATION_RUN_SPEED = ConvertUnitRealField(FourCC("urun"));
export const UNIT_RF_SELECTION_SCALE = ConvertUnitRealField(FourCC("ussc"));
export const UNIT_RF_SELECTION_CIRCLE_HEIGHT = ConvertUnitRealField(
	FourCC("uslz"),
);
export const UNIT_RF_SHADOW_IMAGE_HEIGHT = ConvertUnitRealField(FourCC("ushh"));
export const UNIT_RF_SHADOW_IMAGE_WIDTH = ConvertUnitRealField(FourCC("ushw"));
export const UNIT_RF_SHADOW_IMAGE_CENTER_X = ConvertUnitRealField(
	FourCC("ushx"),
);
export const UNIT_RF_SHADOW_IMAGE_CENTER_Y = ConvertUnitRealField(
	FourCC("ushy"),
);
export const UNIT_RF_ANIMATION_WALK_SPEED = ConvertUnitRealField(
	FourCC("uwal"),
);
export const UNIT_RF_DEFENSE = ConvertUnitRealField(FourCC("udfc"));
export const UNIT_RF_SIGHT_RADIUS = ConvertUnitRealField(FourCC("usir"));
export const UNIT_RF_PRIORITY = ConvertUnitRealField(FourCC("upri"));
export const UNIT_RF_SPEED = ConvertUnitRealField(FourCC("umvc"));
export const UNIT_RF_OCCLUDER_HEIGHT = ConvertUnitRealField(FourCC("uocc"));
export const UNIT_RF_HP = ConvertUnitRealField(FourCC("uhpc"));
export const UNIT_RF_MANA = ConvertUnitRealField(FourCC("umpc"));
export const UNIT_RF_ACQUISITION_RANGE = ConvertUnitRealField(FourCC("uacq"));
export const UNIT_RF_CAST_BACK_SWING = ConvertUnitRealField(FourCC("ucbs"));
export const UNIT_RF_CAST_POINT = ConvertUnitRealField(FourCC("ucpt"));
export const UNIT_RF_MINIMUM_ATTACK_RANGE = ConvertUnitRealField(
	FourCC("uamn"),
);

export const UNIT_BF_RAISABLE = ConvertUnitBooleanField(FourCC("urai"));
export const UNIT_BF_DECAYABLE = ConvertUnitBooleanField(FourCC("udec"));
export const UNIT_BF_IS_A_BUILDING = ConvertUnitBooleanField(FourCC("ubdg"));
export const UNIT_BF_USE_EXTENDED_LINE_OF_SIGHT = ConvertUnitBooleanField(
	FourCC("ulos"),
);
export const UNIT_BF_NEUTRAL_BUILDING_SHOWS_MINIMAP_ICON = ConvertUnitBooleanField(
	FourCC("unbm"),
);
export const UNIT_BF_HERO_HIDE_HERO_INTERFACE_ICON = ConvertUnitBooleanField(
	FourCC("uhhb"),
);
export const UNIT_BF_HERO_HIDE_HERO_MINIMAP_DISPLAY = ConvertUnitBooleanField(
	FourCC("uhhm"),
);
export const UNIT_BF_HERO_HIDE_HERO_DEATH_MESSAGE = ConvertUnitBooleanField(
	FourCC("uhhd"),
);
export const UNIT_BF_HIDE_MINIMAP_DISPLAY = ConvertUnitBooleanField(
	FourCC("uhom"),
);
export const UNIT_BF_SCALE_PROJECTILES = ConvertUnitBooleanField(
	FourCC("uscb"),
);
export const UNIT_BF_SELECTION_CIRCLE_ON_WATER = ConvertUnitBooleanField(
	FourCC("usew"),
);
export const UNIT_BF_HAS_WATER_SHADOW = ConvertUnitBooleanField(FourCC("ushr"));

export const UNIT_SF_NAME = ConvertUnitStringField(FourCC("unam"));
export const UNIT_SF_PROPER_NAMES = ConvertUnitStringField(FourCC("upro"));
export const UNIT_SF_GROUND_TEXTURE = ConvertUnitStringField(FourCC("uubs"));
export const UNIT_SF_SHADOW_IMAGE_UNIT = ConvertUnitStringField(FourCC("ushu"));

// Unit Weapon
export const UNIT_WEAPON_IF_ATTACK_DAMAGE_NUMBER_OF_DICE = ConvertUnitWeaponIntegerField(
	FourCC("ua1d"),
);
export const UNIT_WEAPON_IF_ATTACK_DAMAGE_BASE = ConvertUnitWeaponIntegerField(
	FourCC("ua1b"),
);
export const UNIT_WEAPON_IF_ATTACK_DAMAGE_SIDES_PER_DIE = ConvertUnitWeaponIntegerField(
	FourCC("ua1s"),
);
export const UNIT_WEAPON_IF_ATTACK_MAXIMUM_NUMBER_OF_TARGETS = ConvertUnitWeaponIntegerField(
	FourCC("utc1"),
);
export const UNIT_WEAPON_IF_ATTACK_ATTACK_TYPE = ConvertUnitWeaponIntegerField(
	FourCC("ua1t"),
);
export const UNIT_WEAPON_IF_ATTACK_WEAPON_SOUND = ConvertUnitWeaponIntegerField(
	FourCC("ucs1"),
);
export const UNIT_WEAPON_IF_ATTACK_AREA_OF_EFFECT_TARGETS = ConvertUnitWeaponIntegerField(
	FourCC("ua1p"),
);
export const UNIT_WEAPON_IF_ATTACK_TARGETS_ALLOWED = ConvertUnitWeaponIntegerField(
	FourCC("ua1g"),
);

export const UNIT_WEAPON_RF_ATTACK_BACKSWING_POINT = ConvertUnitWeaponRealField(
	FourCC("ubs1"),
);
export const UNIT_WEAPON_RF_ATTACK_DAMAGE_POINT = ConvertUnitWeaponRealField(
	FourCC("udp1"),
);
export const UNIT_WEAPON_RF_ATTACK_BASE_COOLDOWN = ConvertUnitWeaponRealField(
	FourCC("ua1c"),
);
export const UNIT_WEAPON_RF_ATTACK_DAMAGE_LOSS_FACTOR = ConvertUnitWeaponRealField(
	FourCC("udl1"),
);
export const UNIT_WEAPON_RF_ATTACK_DAMAGE_FACTOR_MEDIUM = ConvertUnitWeaponRealField(
	FourCC("uhd1"),
);
export const UNIT_WEAPON_RF_ATTACK_DAMAGE_FACTOR_SMALL = ConvertUnitWeaponRealField(
	FourCC("uqd1"),
);
export const UNIT_WEAPON_RF_ATTACK_DAMAGE_SPILL_DISTANCE = ConvertUnitWeaponRealField(
	FourCC("usd1"),
);
export const UNIT_WEAPON_RF_ATTACK_DAMAGE_SPILL_RADIUS = ConvertUnitWeaponRealField(
	FourCC("usr1"),
);
export const UNIT_WEAPON_RF_ATTACK_PROJECTILE_SPEED = ConvertUnitWeaponRealField(
	FourCC("ua1z"),
);
export const UNIT_WEAPON_RF_ATTACK_PROJECTILE_ARC = ConvertUnitWeaponRealField(
	FourCC("uma1"),
);
export const UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_FULL_DAMAGE = ConvertUnitWeaponRealField(
	FourCC("ua1f"),
);
export const UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_MEDIUM_DAMAGE = ConvertUnitWeaponRealField(
	FourCC("ua1h"),
);
export const UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_SMALL_DAMAGE = ConvertUnitWeaponRealField(
	FourCC("ua1q"),
);
export const UNIT_WEAPON_RF_ATTACK_RANGE = ConvertUnitWeaponRealField(
	FourCC("ua1r"),
);

export const UNIT_WEAPON_BF_ATTACK_SHOW_UI = ConvertUnitWeaponBooleanField(
	FourCC("uwu1"),
);
export const UNIT_WEAPON_BF_ATTACKS_ENABLED = ConvertUnitWeaponBooleanField(
	FourCC("uaen"),
);
export const UNIT_WEAPON_BF_ATTACK_PROJECTILE_HOMING_ENABLED = ConvertUnitWeaponBooleanField(
	FourCC("umh1"),
);

export const UNIT_WEAPON_SF_ATTACK_PROJECTILE_ART = ConvertUnitWeaponStringField(
	FourCC("ua1m"),
);

// Move Type
export const MOVE_TYPE_UNKNOWN = ConvertMoveType(0);
export const MOVE_TYPE_FOOT = ConvertMoveType(1);
export const MOVE_TYPE_FLY = ConvertMoveType(2);
export const MOVE_TYPE_HORSE = ConvertMoveType(4);
export const MOVE_TYPE_HOVER = ConvertMoveType(8);
export const MOVE_TYPE_FLOAT = ConvertMoveType(16);
export const MOVE_TYPE_AMPHIBIOUS = ConvertMoveType(32);
export const MOVE_TYPE_UNBUILDABLE = ConvertMoveType(64);

// Target Flag
export const TARGET_FLAG_NONE = ConvertTargetFlag(1);
export const TARGET_FLAG_GROUND = ConvertTargetFlag(2);
export const TARGET_FLAG_AIR = ConvertTargetFlag(4);
export const TARGET_FLAG_STRUCTURE = ConvertTargetFlag(8);
export const TARGET_FLAG_WARD = ConvertTargetFlag(16);
export const TARGET_FLAG_ITEM = ConvertTargetFlag(32);
export const TARGET_FLAG_TREE = ConvertTargetFlag(64);
export const TARGET_FLAG_WALL = ConvertTargetFlag(128);
export const TARGET_FLAG_DEBRIS = ConvertTargetFlag(256);
export const TARGET_FLAG_DECORATION = ConvertTargetFlag(512);
export const TARGET_FLAG_BRIDGE = ConvertTargetFlag(1024);

// defense type
export const DEFENSE_TYPE_LIGHT = ConvertDefenseType(0);
export const DEFENSE_TYPE_MEDIUM = ConvertDefenseType(1);
export const DEFENSE_TYPE_LARGE = ConvertDefenseType(2);
export const DEFENSE_TYPE_FORT = ConvertDefenseType(3);
export const DEFENSE_TYPE_NORMAL = ConvertDefenseType(4);
export const DEFENSE_TYPE_HERO = ConvertDefenseType(5);
export const DEFENSE_TYPE_DIVINE = ConvertDefenseType(6);
export const DEFENSE_TYPE_NONE = ConvertDefenseType(7);

// Hero Attribute
export const HERO_ATTRIBUTE_STR = ConvertHeroAttribute(1);
export const HERO_ATTRIBUTE_INT = ConvertHeroAttribute(2);
export const HERO_ATTRIBUTE_AGI = ConvertHeroAttribute(3);

// Armor Type
export const ARMOR_TYPE_WHOKNOWS = ConvertArmorType(0);
export const ARMOR_TYPE_FLESH = ConvertArmorType(1);
export const ARMOR_TYPE_METAL = ConvertArmorType(2);
export const ARMOR_TYPE_WOOD = ConvertArmorType(3);
export const ARMOR_TYPE_ETHREAL = ConvertArmorType(4);
export const ARMOR_TYPE_STONE = ConvertArmorType(5);

// Regeneration Type
export const REGENERATION_TYPE_NONE = ConvertRegenType(0);
export const REGENERATION_TYPE_ALWAYS = ConvertRegenType(1);
export const REGENERATION_TYPE_BLIGHT = ConvertRegenType(2);
export const REGENERATION_TYPE_DAY = ConvertRegenType(3);
export const REGENERATION_TYPE_NIGHT = ConvertRegenType(4);

// Unit Category
export const UNIT_CATEGORY_GIANT = ConvertUnitCategory(1);
export const UNIT_CATEGORY_UNDEAD = ConvertUnitCategory(2);
export const UNIT_CATEGORY_SUMMONED = ConvertUnitCategory(4);
export const UNIT_CATEGORY_MECHANICAL = ConvertUnitCategory(8);
export const UNIT_CATEGORY_PEON = ConvertUnitCategory(16);
export const UNIT_CATEGORY_SAPPER = ConvertUnitCategory(32);
export const UNIT_CATEGORY_TOWNHALL = ConvertUnitCategory(64);
export const UNIT_CATEGORY_ANCIENT = ConvertUnitCategory(128);
export const UNIT_CATEGORY_NEUTRAL = ConvertUnitCategory(256);
export const UNIT_CATEGORY_WARD = ConvertUnitCategory(512);
export const UNIT_CATEGORY_STANDON = ConvertUnitCategory(1024);
export const UNIT_CATEGORY_TAUREN = ConvertUnitCategory(2048);

// Pathing Flag
export const PATHING_FLAG_UNWALKABLE = ConvertPathingFlag(2);
export const PATHING_FLAG_UNFLYABLE = ConvertPathingFlag(4);
export const PATHING_FLAG_UNBUILDABLE = ConvertPathingFlag(8);
export const PATHING_FLAG_UNPEONHARVEST = ConvertPathingFlag(16);
export const PATHING_FLAG_BLIGHTED = ConvertPathingFlag(32);
export const PATHING_FLAG_UNFLOATABLE = ConvertPathingFlag(64);
export const PATHING_FLAG_UNAMPHIBIOUS = ConvertPathingFlag(128);
export const PATHING_FLAG_UNITEMPLACABLE = ConvertPathingFlag(256);
