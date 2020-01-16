
import {
	ConvertCameraField,
	ConvertBlendMode,
	ConvertRarityControl,
	ConvertTexMapFlags,
	ConvertFogState,
} from "common/converters";

// ===================================================
// Animatable Camera Fields
// ===================================================

export const CAMERA_FIELD_TARGET_DISTANCE = ConvertCameraField( 0 );
export const CAMERA_FIELD_FARZ = ConvertCameraField( 1 );
export const CAMERA_FIELD_ANGLE_OF_ATTACK = ConvertCameraField( 2 );
export const CAMERA_FIELD_FIELD_OF_VIEW = ConvertCameraField( 3 );
export const CAMERA_FIELD_ROLL = ConvertCameraField( 4 );
export const CAMERA_FIELD_ROTATION = ConvertCameraField( 5 );
export const CAMERA_FIELD_ZOFFSET = ConvertCameraField( 6 );
export const CAMERA_FIELD_NEARZ = ConvertCameraField( 7 );
export const CAMERA_FIELD_LOCAL_PITCH = ConvertCameraField( 8 );
export const CAMERA_FIELD_LOCAL_YAW = ConvertCameraField( 9 );
export const CAMERA_FIELD_LOCAL_ROLL = ConvertCameraField( 10 );

export const BLEND_MODE_NONE = ConvertBlendMode( 0 );
export const BLEND_MODE_DONT_CARE = ConvertBlendMode( 0 );
export const BLEND_MODE_KEYALPHA = ConvertBlendMode( 1 );
export const BLEND_MODE_BLEND = ConvertBlendMode( 2 );
export const BLEND_MODE_ADDITIVE = ConvertBlendMode( 3 );
export const BLEND_MODE_MODULATE = ConvertBlendMode( 4 );
export const BLEND_MODE_MODULATE_2X = ConvertBlendMode( 5 );

export const RARITY_FREQUENT = ConvertRarityControl( 0 );
export const RARITY_RARE = ConvertRarityControl( 1 );

export const TEXMAP_FLAG_NONE = ConvertTexMapFlags( 0 );
export const TEXMAP_FLAG_WRAP_U = ConvertTexMapFlags( 1 );
export const TEXMAP_FLAG_WRAP_V = ConvertTexMapFlags( 2 );
export const TEXMAP_FLAG_WRAP_UV = ConvertTexMapFlags( 3 );

export const FOG_OF_WAR_MASKED = ConvertFogState( 1 );
export const FOG_OF_WAR_FOGGED = ConvertFogState( 2 );
export const FOG_OF_WAR_VISIBLE = ConvertFogState( 4 );

// ===================================================
// Camera Margin constants for use with GetCameraMargin
// ===================================================

export const CAMERA_MARGIN_LEFT = 0;
export const CAMERA_MARGIN_RIGHT = 1;
export const CAMERA_MARGIN_TOP = 2;
export const CAMERA_MARGIN_BOTTOM = 3;
