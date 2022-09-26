import {
  ConvertDialogEvent,
  ConvertGameEvent,
  ConvertPlayerEvent,
  ConvertPlayerUnitEvent,
  ConvertUnitEvent,
  ConvertWidgetEvent,
} from "../converters";

// ===================================================
// Game, Player and Unit Events
//
//  When an event causes a trigger to fire these
//  values allow the action code to determine which
//  event was dispatched and therefore which set of
//  native functions should be used to get information
//  about the event.
//
// Do NOT change the order or value of these constants
// without insuring that the JASS_GAME_EVENTS_WAR3 enum
// is changed to match.
//
// ===================================================

// ===================================================
// For use with TriggerRegisterGameEvent
// ===================================================

export const EVENT_GAME_VICTORY = ConvertGameEvent(0);
export const EVENT_GAME_END_LEVEL = ConvertGameEvent(1);

export const EVENT_GAME_VARIABLE_LIMIT = ConvertGameEvent(2);
export const EVENT_GAME_STATE_LIMIT = ConvertGameEvent(3);

export const EVENT_GAME_TIMER_EXPIRED = ConvertGameEvent(4);

export const EVENT_GAME_ENTER_REGION = ConvertGameEvent(5);
export const EVENT_GAME_LEAVE_REGION = ConvertGameEvent(6);

export const EVENT_GAME_TRACKABLE_HIT = ConvertGameEvent(7);
export const EVENT_GAME_TRACKABLE_TRACK = ConvertGameEvent(8);

export const EVENT_GAME_SHOW_SKILL = ConvertGameEvent(9);
export const EVENT_GAME_BUILD_SUBMENU = ConvertGameEvent(10);

// ===================================================
// For use with TriggerRegisterPlayerEvent
// ===================================================
export const EVENT_PLAYER_STATE_LIMIT = ConvertPlayerEvent(11);
export const EVENT_PLAYER_ALLIANCE_CHANGED = ConvertPlayerEvent(12);

export const EVENT_PLAYER_DEFEAT = ConvertPlayerEvent(13);
export const EVENT_PLAYER_VICTORY = ConvertPlayerEvent(14);
export const EVENT_PLAYER_LEAVE = ConvertPlayerEvent(15);
export const EVENT_PLAYER_CHAT = ConvertPlayerEvent(16);
export const EVENT_PLAYER_END_CINEMATIC = ConvertPlayerEvent(17);

// ===================================================
// For use with TriggerRegisterPlayerUnitEvent
// ===================================================

export const EVENT_PLAYER_UNIT_ATTACKED = ConvertPlayerUnitEvent(18);
export const EVENT_PLAYER_UNIT_RESCUED = ConvertPlayerUnitEvent(19);

export const EVENT_PLAYER_UNIT_DEATH = ConvertPlayerUnitEvent(20);
export const EVENT_PLAYER_UNIT_DECAY = ConvertPlayerUnitEvent(21);

export const EVENT_PLAYER_UNIT_DETECTED = ConvertPlayerUnitEvent(22);
export const EVENT_PLAYER_UNIT_HIDDEN = ConvertPlayerUnitEvent(23);

export const EVENT_PLAYER_UNIT_SELECTED = ConvertPlayerUnitEvent(24);
export const EVENT_PLAYER_UNIT_DESELECTED = ConvertPlayerUnitEvent(25);

export const EVENT_PLAYER_UNIT_CONSTRUCT_START = ConvertPlayerUnitEvent(26);
export const EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL = ConvertPlayerUnitEvent(27);
export const EVENT_PLAYER_UNIT_CONSTRUCT_FINISH = ConvertPlayerUnitEvent(28);

export const EVENT_PLAYER_UNIT_UPGRADE_START = ConvertPlayerUnitEvent(29);
export const EVENT_PLAYER_UNIT_UPGRADE_CANCEL = ConvertPlayerUnitEvent(30);
export const EVENT_PLAYER_UNIT_UPGRADE_FINISH = ConvertPlayerUnitEvent(31);

export const EVENT_PLAYER_UNIT_TRAIN_START = ConvertPlayerUnitEvent(32);
export const EVENT_PLAYER_UNIT_TRAIN_CANCEL = ConvertPlayerUnitEvent(33);
export const EVENT_PLAYER_UNIT_TRAIN_FINISH = ConvertPlayerUnitEvent(34);

export const EVENT_PLAYER_UNIT_RESEARCH_START = ConvertPlayerUnitEvent(35);
export const EVENT_PLAYER_UNIT_RESEARCH_CANCEL = ConvertPlayerUnitEvent(36);
export const EVENT_PLAYER_UNIT_RESEARCH_FINISH = ConvertPlayerUnitEvent(37);
export const EVENT_PLAYER_UNIT_ISSUED_ORDER = ConvertPlayerUnitEvent(38);
export const EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER = ConvertPlayerUnitEvent(39);
export const EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER = ConvertPlayerUnitEvent(40);
export const EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER = ConvertPlayerUnitEvent(40);

export const EVENT_PLAYER_HERO_LEVEL = ConvertPlayerUnitEvent(41);
export const EVENT_PLAYER_HERO_SKILL = ConvertPlayerUnitEvent(42);

export const EVENT_PLAYER_HERO_REVIVABLE = ConvertPlayerUnitEvent(43);

export const EVENT_PLAYER_HERO_REVIVE_START = ConvertPlayerUnitEvent(44);
export const EVENT_PLAYER_HERO_REVIVE_CANCEL = ConvertPlayerUnitEvent(45);
export const EVENT_PLAYER_HERO_REVIVE_FINISH = ConvertPlayerUnitEvent(46);
export const EVENT_PLAYER_UNIT_SUMMON = ConvertPlayerUnitEvent(47);
export const EVENT_PLAYER_UNIT_DROP_ITEM = ConvertPlayerUnitEvent(48);
export const EVENT_PLAYER_UNIT_PICKUP_ITEM = ConvertPlayerUnitEvent(49);
export const EVENT_PLAYER_UNIT_USE_ITEM = ConvertPlayerUnitEvent(50);

export const EVENT_PLAYER_UNIT_LOADED = ConvertPlayerUnitEvent(51);
export const EVENT_PLAYER_UNIT_DAMAGED = ConvertPlayerUnitEvent(308);
export const EVENT_PLAYER_UNIT_DAMAGING = ConvertPlayerUnitEvent(315);

// ===================================================
// For use with TriggerRegisterUnitEvent
// ===================================================

export const EVENT_UNIT_DAMAGED = ConvertUnitEvent(52);
export const EVENT_UNIT_DAMAGING = ConvertUnitEvent(314);
export const EVENT_UNIT_DEATH = ConvertUnitEvent(53);
export const EVENT_UNIT_DECAY = ConvertUnitEvent(54);
export const EVENT_UNIT_DETECTED = ConvertUnitEvent(55);
export const EVENT_UNIT_HIDDEN = ConvertUnitEvent(56);
export const EVENT_UNIT_SELECTED = ConvertUnitEvent(57);
export const EVENT_UNIT_DESELECTED = ConvertUnitEvent(58);

export const EVENT_UNIT_STATE_LIMIT = ConvertUnitEvent(59);

// Events which may have a filter for the "other unit"
//
export const EVENT_UNIT_ACQUIRED_TARGET = ConvertUnitEvent(60);
export const EVENT_UNIT_TARGET_IN_RANGE = ConvertUnitEvent(61);
export const EVENT_UNIT_ATTACKED = ConvertUnitEvent(62);
export const EVENT_UNIT_RESCUED = ConvertUnitEvent(63);

export const EVENT_UNIT_CONSTRUCT_CANCEL = ConvertUnitEvent(64);
export const EVENT_UNIT_CONSTRUCT_FINISH = ConvertUnitEvent(65);

export const EVENT_UNIT_UPGRADE_START = ConvertUnitEvent(66);
export const EVENT_UNIT_UPGRADE_CANCEL = ConvertUnitEvent(67);
export const EVENT_UNIT_UPGRADE_FINISH = ConvertUnitEvent(68);

// Events which involve the specified unit performing
// training of other units
//
export const EVENT_UNIT_TRAIN_START = ConvertUnitEvent(69);
export const EVENT_UNIT_TRAIN_CANCEL = ConvertUnitEvent(70);
export const EVENT_UNIT_TRAIN_FINISH = ConvertUnitEvent(71);

export const EVENT_UNIT_RESEARCH_START = ConvertUnitEvent(72);
export const EVENT_UNIT_RESEARCH_CANCEL = ConvertUnitEvent(73);
export const EVENT_UNIT_RESEARCH_FINISH = ConvertUnitEvent(74);

export const EVENT_UNIT_ISSUED_ORDER = ConvertUnitEvent(75);
export const EVENT_UNIT_ISSUED_POINT_ORDER = ConvertUnitEvent(76);
export const EVENT_UNIT_ISSUED_TARGET_ORDER = ConvertUnitEvent(77);

export const EVENT_UNIT_HERO_LEVEL = ConvertUnitEvent(78);
export const EVENT_UNIT_HERO_SKILL = ConvertUnitEvent(79);

export const EVENT_UNIT_HERO_REVIVABLE = ConvertUnitEvent(80);
export const EVENT_UNIT_HERO_REVIVE_START = ConvertUnitEvent(81);
export const EVENT_UNIT_HERO_REVIVE_CANCEL = ConvertUnitEvent(82);
export const EVENT_UNIT_HERO_REVIVE_FINISH = ConvertUnitEvent(83);

export const EVENT_UNIT_SUMMON = ConvertUnitEvent(84);

export const EVENT_UNIT_DROP_ITEM = ConvertUnitEvent(85);
export const EVENT_UNIT_PICKUP_ITEM = ConvertUnitEvent(86);
export const EVENT_UNIT_USE_ITEM = ConvertUnitEvent(87);

export const EVENT_UNIT_LOADED = ConvertUnitEvent(88);

export const EVENT_WIDGET_DEATH = ConvertWidgetEvent(89);

export const EVENT_DIALOG_BUTTON_CLICK = ConvertDialogEvent(90);
export const EVENT_DIALOG_CLICK = ConvertDialogEvent(91);

// ===================================================
// Frozen Throne Expansion Events
// Need to be added here to preserve compat
// ===================================================

export const EVENT_GAME_LOADED = ConvertGameEvent(256);
export const EVENT_GAME_TOURNAMENT_FINISH_SOON = ConvertGameEvent(257);
export const EVENT_GAME_TOURNAMENT_FINISH_NOW = ConvertGameEvent(258);
export const EVENT_GAME_SAVE = ConvertGameEvent(259);
export const EVENT_GAME_CUSTOM_UI_FRAME = ConvertGameEvent(310);

// ===================================================
// For use with TriggerRegisterPlayerEvent
// ===================================================

export const EVENT_PLAYER_ARROW_LEFT_DOWN = ConvertPlayerEvent(261);
export const EVENT_PLAYER_ARROW_LEFT_UP = ConvertPlayerEvent(262);
export const EVENT_PLAYER_ARROW_RIGHT_DOWN = ConvertPlayerEvent(263);
export const EVENT_PLAYER_ARROW_RIGHT_UP = ConvertPlayerEvent(264);
export const EVENT_PLAYER_ARROW_DOWN_DOWN = ConvertPlayerEvent(265);
export const EVENT_PLAYER_ARROW_DOWN_UP = ConvertPlayerEvent(266);
export const EVENT_PLAYER_ARROW_UP_DOWN = ConvertPlayerEvent(267);
export const EVENT_PLAYER_ARROW_UP_UP = ConvertPlayerEvent(268);
export const EVENT_PLAYER_MOUSE_DOWN = ConvertPlayerEvent(305);
export const EVENT_PLAYER_MOUSE_UP = ConvertPlayerEvent(306);
export const EVENT_PLAYER_MOUSE_MOVE = ConvertPlayerEvent(307);
export const EVENT_PLAYER_SYNC_DATA = ConvertPlayerEvent(309);
export const EVENT_PLAYER_KEY = ConvertPlayerEvent(311);
export const EVENT_PLAYER_KEY_DOWN = ConvertPlayerEvent(312);
export const EVENT_PLAYER_KEY_UP = ConvertPlayerEvent(313);

// ===================================================
// For use with TriggerRegisterPlayerUnitEvent
// ===================================================

export const EVENT_PLAYER_UNIT_SELL = ConvertPlayerUnitEvent(269);
export const EVENT_PLAYER_UNIT_CHANGE_OWNER = ConvertPlayerUnitEvent(270);
export const EVENT_PLAYER_UNIT_SELL_ITEM = ConvertPlayerUnitEvent(271);
export const EVENT_PLAYER_UNIT_SPELL_CHANNEL = ConvertPlayerUnitEvent(272);
export const EVENT_PLAYER_UNIT_SPELL_CAST = ConvertPlayerUnitEvent(273);
export const EVENT_PLAYER_UNIT_SPELL_EFFECT = ConvertPlayerUnitEvent(274);
export const EVENT_PLAYER_UNIT_SPELL_FINISH = ConvertPlayerUnitEvent(275);
export const EVENT_PLAYER_UNIT_SPELL_ENDCAST = ConvertPlayerUnitEvent(276);
export const EVENT_PLAYER_UNIT_PAWN_ITEM = ConvertPlayerUnitEvent(277);
export const EVENT_PLAYER_UNIT_STACK_ITEM = ConvertPlayerUnitEvent(319);

// ===================================================
// For use with TriggerRegisterUnitEvent
// ===================================================

export const EVENT_UNIT_SELL = ConvertUnitEvent(286);
export const EVENT_UNIT_CHANGE_OWNER = ConvertUnitEvent(287);
export const EVENT_UNIT_SELL_ITEM = ConvertUnitEvent(288);
export const EVENT_UNIT_SPELL_CHANNEL = ConvertUnitEvent(289);
export const EVENT_UNIT_SPELL_CAST = ConvertUnitEvent(290);
export const EVENT_UNIT_SPELL_EFFECT = ConvertUnitEvent(291);
export const EVENT_UNIT_SPELL_FINISH = ConvertUnitEvent(292);
export const EVENT_UNIT_SPELL_ENDCAST = ConvertUnitEvent(293);
export const EVENT_UNIT_PAWN_ITEM = ConvertUnitEvent(294);
export const EVENT_UNIT_STACK_ITEM = ConvertUnitEvent(318);
