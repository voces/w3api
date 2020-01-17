
import {
	ConvertOriginFrameType,
	ConvertFramePointType,
	ConvertTextAlignType,
	ConvertFrameEventType,
} from "../converters";

// ===================================================
// Custom UI API constants
// ===================================================

export const ORIGIN_FRAME_GAME_UI = ConvertOriginFrameType( 0 );
export const ORIGIN_FRAME_COMMAND_BUTTON = ConvertOriginFrameType( 1 );
export const ORIGIN_FRAME_HERO_BAR = ConvertOriginFrameType( 2 );
export const ORIGIN_FRAME_HERO_BUTTON = ConvertOriginFrameType( 3 );
export const ORIGIN_FRAME_HERO_HP_BAR = ConvertOriginFrameType( 4 );
export const ORIGIN_FRAME_HERO_MANA_BAR = ConvertOriginFrameType( 5 );
export const ORIGIN_FRAME_HERO_BUTTON_INDICATOR = ConvertOriginFrameType( 6 );
export const ORIGIN_FRAME_ITEM_BUTTON = ConvertOriginFrameType( 7 );
export const ORIGIN_FRAME_MINIMAP = ConvertOriginFrameType( 8 );
export const ORIGIN_FRAME_MINIMAP_BUTTON = ConvertOriginFrameType( 9 );
export const ORIGIN_FRAME_SYSTEM_BUTTON = ConvertOriginFrameType( 10 );
export const ORIGIN_FRAME_TOOLTIP = ConvertOriginFrameType( 11 );
export const ORIGIN_FRAME_UBERTOOLTIP = ConvertOriginFrameType( 12 );
export const ORIGIN_FRAME_CHAT_MSG = ConvertOriginFrameType( 13 );
export const ORIGIN_FRAME_UNIT_MSG = ConvertOriginFrameType( 14 );
export const ORIGIN_FRAME_TOP_MSG = ConvertOriginFrameType( 15 );
export const ORIGIN_FRAME_PORTRAIT = ConvertOriginFrameType( 16 );
export const ORIGIN_FRAME_WORLD_FRAME = ConvertOriginFrameType( 17 );

export const FRAMEPOINT_TOPLEFT = ConvertFramePointType( 0 );
export const FRAMEPOINT_TOP = ConvertFramePointType( 1 );
export const FRAMEPOINT_TOPRIGHT = ConvertFramePointType( 2 );
export const FRAMEPOINT_LEFT = ConvertFramePointType( 3 );
export const FRAMEPOINT_CENTER = ConvertFramePointType( 4 );
export const FRAMEPOINT_RIGHT = ConvertFramePointType( 5 );
export const FRAMEPOINT_BOTTOMLEFT = ConvertFramePointType( 6 );
export const FRAMEPOINT_BOTTOM = ConvertFramePointType( 7 );
export const FRAMEPOINT_BOTTOMRIGHT = ConvertFramePointType( 8 );

export const TEXT_JUSTIFY_TOP = ConvertTextAlignType( 0 );
export const TEXT_JUSTIFY_MIDDLE = ConvertTextAlignType( 1 );
export const TEXT_JUSTIFY_BOTTOM = ConvertTextAlignType( 2 );
export const TEXT_JUSTIFY_LEFT = ConvertTextAlignType( 3 );
export const TEXT_JUSTIFY_CENTER = ConvertTextAlignType( 4 );
export const TEXT_JUSTIFY_RIGHT = ConvertTextAlignType( 5 );

export const FRAMEEVENT_CONTROL_CLICK = ConvertFrameEventType( 1 );
export const FRAMEEVENT_MOUSE_ENTER = ConvertFrameEventType( 2 );
export const FRAMEEVENT_MOUSE_LEAVE = ConvertFrameEventType( 3 );
export const FRAMEEVENT_MOUSE_UP = ConvertFrameEventType( 4 );
export const FRAMEEVENT_MOUSE_DOWN = ConvertFrameEventType( 5 );
export const FRAMEEVENT_MOUSE_WHEEL = ConvertFrameEventType( 6 );
export const FRAMEEVENT_CHECKBOX_CHECKED = ConvertFrameEventType( 7 );
export const FRAMEEVENT_CHECKBOX_UNCHECKED = ConvertFrameEventType( 8 );
export const FRAMEEVENT_EDITBOX_TEXT_CHANGED = ConvertFrameEventType( 9 );
export const FRAMEEVENT_POPUPMENU_ITEM_CHANGED = ConvertFrameEventType( 10 );
export const FRAMEEVENT_MOUSE_DOUBLECLICK = ConvertFrameEventType( 11 );
export const FRAMEEVENT_SPRITE_ANIM_UPDATE = ConvertFrameEventType( 12 );
export const FRAMEEVENT_SLIDER_VALUE_CHANGED = ConvertFrameEventType( 13 );
export const FRAMEEVENT_DIALOG_CANCEL = ConvertFrameEventType( 14 );
export const FRAMEEVENT_DIALOG_ACCEPT = ConvertFrameEventType( 15 );
export const FRAMEEVENT_EDITBOX_ENTER = ConvertFrameEventType( 16 );
