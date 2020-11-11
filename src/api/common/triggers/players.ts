import { newRun, wrapRun } from "../../../Run";
import { getEvent } from "./events";

// ============================================================================
// Trigger Player Based Event API
// ============================================================================

export const TriggerRegisterPlayerEvent = (
	whichTrigger: trigger,
	whichPlayer: player,
	whichPlayerEvent: playerevent,
): event => {};

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
): event => {};

// EVENT_PLAYER_HERO_LEVEL
// EVENT_UNIT_HERO_LEVEL
export const GetLevelingUnit = (): unit => {};

// EVENT_PLAYER_HERO_SKILL
// EVENT_UNIT_HERO_SKILL
export const GetLearningUnit = (): unit => {};

export const GetLearnedSkill = (): number => {};

export const GetLearnedSkillLevel = (): number => {};

// EVENT_PLAYER_HERO_REVIVABLE
export const GetRevivableUnit = (): unit => {};

// EVENT_PLAYER_HERO_REVIVE_START
// EVENT_PLAYER_HERO_REVIVE_CANCEL
// EVENT_PLAYER_HERO_REVIVE_FINISH
// EVENT_UNIT_HERO_REVIVE_START
// EVENT_UNIT_HERO_REVIVE_CANCEL
// EVENT_UNIT_HERO_REVIVE_FINISH
export const GetRevivingUnit = (): unit => {};

// EVENT_PLAYER_UNIT_ATTACKED
export const GetAttacker = (): unit => {};

// EVENT_PLAYER_UNIT_RESCUED
export const GetRescuer = (): unit => {};

// EVENT_PLAYER_UNIT_DEATH
export const GetDyingUnit = (): unit => {};

export const GetKillingUnit = (): unit => {};

// EVENT_PLAYER_UNIT_DECAY
export const GetDecayingUnit = (): unit => {};

// EVENT_PLAYER_UNIT_SELECTED
// constant native GetSelectedUnit takes nothing returns unit

// EVENT_PLAYER_UNIT_CONSTRUCT_START
export const GetConstructingStructure = (): unit => {};

// EVENT_PLAYER_UNIT_CONSTRUCT_FINISH
// EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL
export const GetCancelledStructure = (): unit => {};

export const GetConstructedStructure = (): unit => {};

// EVENT_PLAYER_UNIT_RESEARCH_START
// EVENT_PLAYER_UNIT_RESEARCH_CANCEL
// EVENT_PLAYER_UNIT_RESEARCH_FINISH
export const GetResearchingUnit = (): unit => {};

export const GetResearched = (): number => {};

// EVENT_PLAYER_UNIT_TRAIN_START
// EVENT_PLAYER_UNIT_TRAIN_CANCEL
export const GetTrainedUnitType = (): number => {};

// EVENT_PLAYER_UNIT_TRAIN_FINISH
export const GetTrainedUnit = (): unit => {};

// EVENT_PLAYER_UNIT_DETECTED
export const GetDetectedUnit = (): unit => {};

// EVENT_PLAYER_UNIT_SUMMONED
export const GetSummoningUnit = (): unit => {};

export const GetSummonedUnit = (): unit => {};

// EVENT_PLAYER_UNIT_LOADED
export const GetTransportUnit = (): unit => {};

export const GetLoadedUnit = (): unit => {};

// EVENT_PLAYER_UNIT_SELL
export const GetSellingUnit = (): unit => {};

export const GetSoldUnit = (): unit => {};

export const GetBuyingUnit = (): unit => {};

// EVENT_PLAYER_UNIT_SELL_ITEM
export const GetSoldItem = (): item => {};

// EVENT_PLAYER_UNIT_CHANGE_OWNER
export const GetChangingUnit = (): unit => {};

export const GetChangingUnitPrevOwner = (): player => {};

// EVENT_PLAYER_UNIT_DROP_ITEM
// EVENT_PLAYER_UNIT_PICKUP_ITEM
// EVENT_PLAYER_UNIT_USE_ITEM
export const GetManipulatingUnit = (): unit => {};

export const GetManipulatedItem = (): item => {};

// EVENT_PLAYER_UNIT_ISSUED_ORDER
export const GetOrderedUnit = (): unit => {};

export const GetIssuedOrderId = (): number => {};

// EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER
export const GetOrderPointX = (): number => {};

export const GetOrderPointY = (): number => {};

export const GetOrderPointLoc = (): location => {};

// EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER
export const GetOrderTarget = (): widget => {};

export const GetOrderTargetDestructable = (): destructable => {};

export const GetOrderTargetItem = (): item => {};

export const GetOrderTargetUnit = (): unit => {};

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
export const GetSpellAbilityUnit = (): unit => {};

export const GetSpellAbilityId = (): number => {};

export const GetSpellAbility = (): ability => {};

export const GetSpellTargetLoc = (): location => {};

export const GetSpellTargetX = (): number => {};

export const GetSpellTargetY = (): number => {};

export const GetSpellTargetDestructable = (): destructable => {};

export const GetSpellTargetItem = (): item => {};

export const GetSpellTargetUnit = (): unit => {};

export const TriggerRegisterPlayerAllianceChange = (
	whichTrigger: trigger,
	whichPlayer: player,
	whichAlliance: alliancetype,
): event => {};

export const TriggerRegisterPlayerStateEvent = (
	whichTrigger: trigger,
	whichPlayer: player,
	whichState: playerstate,
	opcode: limitop,
	limitval: number,
): event => {};

// EVENT_PLAYER_STATE_LIMIT
export const GetEventPlayerState = (): playerstate => {};

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
): event => {};
