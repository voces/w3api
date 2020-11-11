import { ConvertEffectType, ConvertSoundType } from "../converters";

// ===================================================
// Effect API constants
// ===================================================

export const EFFECT_TYPE_EFFECT = ConvertEffectType(0);
export const EFFECT_TYPE_TARGET = ConvertEffectType(1);
export const EFFECT_TYPE_CASTER = ConvertEffectType(2);
export const EFFECT_TYPE_SPECIAL = ConvertEffectType(3);
export const EFFECT_TYPE_AREA_EFFECT = ConvertEffectType(4);
export const EFFECT_TYPE_MISSILE = ConvertEffectType(5);
export const EFFECT_TYPE_LIGHTNING = ConvertEffectType(6);

export const SOUND_TYPE_EFFECT = ConvertSoundType(0);
export const SOUND_TYPE_EFFECT_LOOPED = ConvertSoundType(1);
