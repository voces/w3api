/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { notImplemented } from "../../../errors";
import { newRun, wrapRun } from "../../../Run";
import { getEvent } from "./events";

// ============================================================================
// Trigger Player Based Event API
// ============================================================================

export const TriggerRegisterPlayerEvent = (
	whichTrigger: trigger,
	whichPlayer: player,
	whichPlayerEvent: playerevent,
): event => {
	notImplemented("TriggerRegisterPlayerEvent");
	return (null as any) as event;
};

// EVENT_PLAYER_DEFEAT
// EVENT_PLAYER_VICTORY
export const GetTriggerPlayer = wrapRun(
	(run): player | null => run.triggeringPlayer,
);

export const TriggerRegisterPlayerUnitEvent = (
	whichTrigger: trigger,
	whichPlayer: player,
	whichPlayerUnitEvent: playerunitevent,
	filter: boolexpr | null,
): event => {
	notImplemented("TriggerRegisterPlayerUnitEvent");
	return (null as any) as event;
};

// EVENT_PLAYER_HERO_LEVEL
// EVENT_UNIT_HERO_LEVEL
export const GetLevelingUnit = (): unit => {
	notImplemented("GetLevelingUnit");
	return (null as any) as unit;
};

// EVENT_PLAYER_HERO_SKILL
// EVENT_UNIT_HERO_SKILL
export const GetLearningUnit = (): unit => {
	notImplemented("GetLearningUnit");
	return (null as any) as unit;
};

export const GetLearnedSkill = (): number => {
	notImplemented("GetLearnedSkill");
	return 0;
};

export const GetLearnedSkillLevel = (): number => {
	notImplemented("GetLearnedSkillLevel");
	return 0;
};

// EVENT_PLAYER_HERO_REVIVABLE
export const GetRevivableUnit = (): unit => {
	notImplemented("GetRevivableUnit");
	return (null as any) as unit;
};

// EVENT_PLAYER_HERO_REVIVE_START
// EVENT_PLAYER_HERO_REVIVE_CANCEL
// EVENT_PLAYER_HERO_REVIVE_FINISH
// EVENT_UNIT_HERO_REVIVE_START
// EVENT_UNIT_HERO_REVIVE_CANCEL
// EVENT_UNIT_HERO_REVIVE_FINISH
export const GetRevivingUnit = (): unit => {
	notImplemented("GetRevivingUnit");
	return (null as any) as unit;
};

// EVENT_PLAYER_UNIT_ATTACKED
export const GetAttacker = (): unit => {
	notImplemented("GetAttacker");
	return (null as any) as unit;
};

// EVENT_PLAYER_UNIT_RESCUED
export const GetRescuer = (): unit => {
	notImplemented("GetRescuer");
	return (null as any) as unit;
};

// EVENT_PLAYER_UNIT_DEATH
export const GetDyingUnit = (): unit => {
	notImplemented("GetDyingUnit");
	return (null as any) as unit;
};

export const GetKillingUnit = (): unit => {
	notImplemented("GetKillingUnit");
	return (null as any) as unit;
};

// EVENT_PLAYER_UNIT_DECAY
export const GetDecayingUnit = (): unit => {
	notImplemented("GetDecayingUnit");
	return (null as any) as unit;
};

// EVENT_PLAYER_UNIT_SELECTED
// constant native GetSelectedUnit takes nothing returns unit

// EVENT_PLAYER_UNIT_CONSTRUCT_START
export const GetConstructingStructure = (): unit => {
	notImplemented("GetConstructingStructure");
	return (null as any) as unit;
};

// EVENT_PLAYER_UNIT_CONSTRUCT_FINISH
// EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL
export const GetCancelledStructure = (): unit => {
	notImplemented("GetCancelledStructure");
	return (null as any) as unit;
};

export const GetConstructedStructure = (): unit => {
	notImplemented("GetConstructedStructure");
	return (null as any) as unit;
};

// EVENT_PLAYER_UNIT_RESEARCH_START
// EVENT_PLAYER_UNIT_RESEARCH_CANCEL
// EVENT_PLAYER_UNIT_RESEARCH_FINISH
export const GetResearchingUnit = (): unit => {
	notImplemented("GetTrainedUnit");
	return (null as any) as unit;
};

export const GetResearched = (): number => {
	notImplemented("GetResearched");
	return 0;
};

// EVENT_PLAYER_UNIT_TRAIN_START
// EVENT_PLAYER_UNIT_TRAIN_CANCEL
export const GetTrainedUnitType = (): number => {
	notImplemented("GetTrainedUnitType");
	return 0;
};

// EVENT_PLAYER_UNIT_TRAIN_FINISH
export const GetTrainedUnit = (): unit => {
	notImplemented("GetTrainedUnit");
	return (null as any) as unit;
};

// EVENT_PLAYER_UNIT_DETECTED
export const GetDetectedUnit = (): unit => {
	notImplemented("GetDetectedUnit");
	return (null as any) as unit;
};

// EVENT_PLAYER_UNIT_SUMMONED
export const GetSummoningUnit = (): unit => {
	notImplemented("GetSummoningUnit");
	return (null as any) as unit;
};

export const GetSummonedUnit = (): unit => {
	notImplemented("GetSummonedUnit");
	return (null as any) as unit;
};

// EVENT_PLAYER_UNIT_LOADED
export const GetTransportUnit = (): unit => {
	notImplemented("GetTransportUnit");
	return (null as any) as unit;
};

export const GetLoadedUnit = (): unit => {
	notImplemented("GetLoadedUnit");
	return (null as any) as unit;
};

// EVENT_PLAYER_UNIT_SELL
export const GetSellingUnit = (): unit => {
	notImplemented("GetSellingUnit");
	return (null as any) as unit;
};

export const GetSoldUnit = (): unit => {
	notImplemented("GetSoldUnit");
	return (null as any) as unit;
};

export const GetBuyingUnit = (): unit => {
	notImplemented("GetBuyingUnit");
	return (null as any) as unit;
};

// EVENT_PLAYER_UNIT_SELL_ITEM
export const GetSoldItem = (): item => {
	notImplemented("GetSoldItem");
	return (null as any) as item;
};

// EVENT_PLAYER_UNIT_CHANGE_OWNER
export const GetChangingUnit = (): unit => {
	notImplemented("GetChangingUnit");
	return (null as any) as unit;
};

export const GetChangingUnitPrevOwner = (): player => {
	notImplemented("GetChangingUnitPrevOwner");
	return (null as any) as player;
};

// EVENT_PLAYER_UNIT_DROP_ITEM
// EVENT_PLAYER_UNIT_PICKUP_ITEM
// EVENT_PLAYER_UNIT_USE_ITEM
export const GetManipulatingUnit = (): unit => {
	notImplemented("GetManipulatingUnit");
	return (null as any) as unit;
};

export const GetManipulatedItem = (): item => {
	notImplemented("GetManipulatedItem");
	return (null as any) as item;
};

// EVENT_PLAYER_UNIT_ISSUED_ORDER
export const GetOrderedUnit = (): unit => {
	notImplemented("GetOrderedUnit");
	return (null as any) as unit;
};

export const GetIssuedOrderId = (): number => {
	notImplemented("GetIssuedOrderId");
	return 0;
};

// EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER
export const GetOrderPointX = (): number => {
	notImplemented("GetOrderPointX");
	return 0;
};

export const GetOrderPointY = (): number => {
	notImplemented("GetOrderPointY");
	return 0;
};

export const GetOrderPointLoc = (): location => {
	notImplemented("GetOrderPointLoc");
	return (null as any) as location;
};

// EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER
export const GetOrderTarget = (): widget => {
	notImplemented("GetOrderTarget");
	return (null as any) as widget;
};

export const GetOrderTargetDestructable = (): destructable => {
	notImplemented("GetOrderTargetDestructable");
	return (null as any) as destructable;
};

export const GetOrderTargetItem = (): item => {
	notImplemented("GetOrderTargetItem");
	return (null as any) as item;
};

export const GetOrderTargetUnit = (): unit => {
	notImplemented("GetOrderTargetUnit");
	return (null as any) as unit;
};

// EVENT_UNIT_SPELL_CHANNEL
// EVENT_UNIT_SPELL_CAST
// EVENT_UNIT_SPELL_EFFECT
// EVENT_UNIT_SPELL_FINISH
// EVENT_UNIT_SPELL_ENDCAST
// EVENT_PLAYER_UNIT_SPELL_CHANNEL
// EVENT_PLAYER_UNIT_SPELL_CAST
// EVENT_PLAYER_UNIT_SPELL_EFFECT
// EVENT_PLAYER_UNIT_SPELL_FINISH
// EVENT_PLAYER_UNIT_SPELL_ENDCAST
export const GetSpellAbilityUnit = (): unit => {
	notImplemented("GetSpellAbilityUnit");
	return (null as any) as unit;
};

export const GetSpellAbilityId = (): number => {
	notImplemented("GetSpellAbilityId");
	return 0;
};

export const GetSpellAbility = (): ability => {
	notImplemented("GetSpellAbility");
	return (null as any) as ability;
};

export const GetSpellTargetLoc = (): location => {
	notImplemented("GetSpellTargetLoc");
	return (null as any) as location;
};

export const GetSpellTargetX = (): number => {
	notImplemented("GetSpellTargetX");
	return 0;
};

export const GetSpellTargetY = (): number => {
	notImplemented("GetSpellTargetY");
	return 0;
};

export const GetSpellTargetDestructable = (): destructable => {
	notImplemented("GetSpellTargetDestructable");
	return (null as any) as destructable;
};

export const GetSpellTargetItem = (): item => {
	notImplemented("GetSpellTargetItem");
	return (null as any) as item;
};

export const GetSpellTargetUnit = (): unit => {
	notImplemented("GetSpellTargetUnit");
	return (null as any) as unit;
};

export const TriggerRegisterPlayerAllianceChange = (
	whichTrigger: trigger,
	whichPlayer: player,
	whichAlliance: alliancetype,
): event => {
	notImplemented("TriggerRegisterPlayerAllianceChange");
	return (null as any) as event;
};

export const TriggerRegisterPlayerStateEvent = (
	whichTrigger: trigger,
	whichPlayer: player,
	whichState: playerstate,
	opcode: limitop,
	limitval: number,
): event => {
	notImplemented("TriggerRegisterPlayerStateEvent");
	return (null as any) as event;
};

// EVENT_PLAYER_STATE_LIMIT
export const GetEventPlayerState = (): playerstate => {
	notImplemented("GetEventPlayerState");
	return (null as any) as playerstate;
};

export const TriggerRegisterPlayerChatEvent = (
	whichTrigger: trigger,
	whichPlayer: player,
	chatMessageToDetect: string,
	exactMatchOnly: boolean,
): event => {
	const callback = (message: string): void => {
		if (
			exactMatchOnly
				? message !== chatMessageToDetect
				: message.indexOf(chatMessageToDetect) === -1
		)
			return;

		newRun(
			{
				chatString: message,
				matchedChatString: chatMessageToDetect,
				triggeringPlayer: whichPlayer,
				triggeringTrigger: whichTrigger,
			},
			() => {
				if (whichTrigger.evaluate()) whichTrigger.execute();
			},
		);
	};

	const event = getEvent();
	whichPlayer.addChatListener(callback, event);
	return event;
};

// EVENT_PLAYER_CHAT

// returns the actual string they typed in ( same as what you registered for
// if you required exact match )
export const GetEventPlayerChatString = wrapRun(
	(run): string => run.chatString,
);

// returns the string that you registered for
export const GetEventPlayerChatStringMatched = wrapRun(
	(run): string => run.matchedChatString,
);

export const TriggerRegisterDeathEvent = (
	whichTrigger: trigger,
	whichWidget: widget,
): event => {
	notImplemented("TriggerRegisterDeathEvent");
	return (null as any) as event;
};
