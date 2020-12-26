/* eslint-disable @typescript-eslint/no-unused-vars */

type StartLocation = {
	x: number;
	y: number;
	priorities: Array<startlocprio>;
};

// ============================================================================
// Native types. All native functions take extended handle types when
// possible to help prevent passing bad values to native functions
//
declare interface handle {
	handleId: number;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onRemove: (callback: (handle: handle) => void, reference?: any) => void;
	remove: () => void;
	clearRemoveHook: (
		callback: (handle: handle) => void,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		reference?: any,
	) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	clearRemoveHookByReference: (reference: any) => void;
}
declare interface agent extends handle {
	agentId: number;
}
declare interface event extends agent {
	eventId: number;
}
declare interface player extends agent {
	alliances: Map<player, Map<alliancetype, boolean>>;
	color: playercolor;
	controller: mapcontrol;
	name: string;
	onScoreScreen: boolean;
	playerId: number;
	racePreference: racepreference;
	raceSelectable: boolean;
	slotState: playerslotstate;
	startLocation: number;
	taxRates: Map<player, Map<playerstate, number>>;
	team: number;
	onChat: (message: string) => void;
	addChatListener: (
		callback: (message: string) => void,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		reference: any,
	) => void;
}
declare interface widget extends agent {
	widgetId: number;
	x: number;
	y: number;
	life: number;
}
declare interface unit extends widget {
	data: import("w3xdata").UnitSpec;
	facing: number;
	owner: player;
	type: number;
	unitId: number;
}
declare interface destructable extends widget {
	destructableId: number;
}
declare interface item extends widget {
	itemId: number;
}
declare interface ability extends agent {
	abilityId: number;
}
declare interface buff extends ability {
	buffId: number;
}
declare interface force extends agent {
	forceId: number;
	players: Set<player>;
	_array?: Array<player>;
}
declare interface group extends agent {
	groupId: number;
	units: Set<unit>;
	_array?: Array<unit>;
}
declare interface trigger extends agent {
	actions: Array<triggeraction>;
	conditions: Array<triggercondition>;
	enabled: boolean;
	evaluate: () => boolean;
	evaluations: number;
	events: Array<event>;
	execute: () => void;
	executions: number;
	triggerId: number;
	waitOnSleeps: boolean;
}
declare interface triggercondition extends agent {
	triggerconditionId: number;
	condition: conditionfunc;
}
declare interface triggeraction extends handle {
	triggeractionId: number;
	func: () => void;
}
declare interface timer extends agent {
	active: boolean;
	callback: (() => void) | null;
	interval: number;
	lastTick: number;
	nextTick: number;
	periodic: boolean;
	start: number;
	timerId: number;
}
declare interface location extends agent {
	locationId: number;
	x: number;
	y: number;
}
declare interface region extends agent {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	addEnterListener: (callback: (unit: unit) => void, reference: any) => void;
	contains: (unit: unit) => boolean;
	regionId: number;
	addUnit: (unit: unit) => void;
}
declare interface rect extends agent {
	maxX: number;
	maxY: number;
	minX: number;
	minY: number;
	rectId: number;
}
declare interface boolexpr extends agent {
	boolexprId: number;
	func: () => boolean;
}
declare interface sound extends agent {
	soundId: number;
}
declare interface conditionfunc extends boolexpr {
	conditionfuncId: number;
}
declare interface filterfunc extends boolexpr {
	filterfuncId: number;
}
declare interface unitpool extends handle {
	unitpoolId: number;
}
declare interface itempool extends handle {
	itempoolId: number;
}
declare interface race extends handle {
	raceId: number;
}
declare interface alliancetype extends handle {
	alliancetypeId: number;
}
declare interface racepreference extends handle {
	racepreferenceId: number;
}
declare interface gamestate extends handle {
	gamestateId: number;
}
declare interface igamestate extends gamestate {
	igamestateId: number;
}
declare interface fgamestate extends gamestate {
	fgamestateId: number;
}
declare interface playerstate extends handle {
	playerstateId: number;
}
declare interface playerscore extends handle {
	playerscoreId: number;
}
declare interface playergameresult extends handle {
	playergameresultId: number;
}
declare interface unitstate extends handle {
	unitstateId: number;
}
declare interface aidifficulty extends handle {
	aidifficultyId: number;
}

declare interface eventid extends handle {
	eventidId: number;
}
declare interface gameevent extends eventid {
	gameeventId: number;
}
declare interface playerevent extends eventid {
	playereventId: number;
}
declare interface playerunitevent extends eventid {
	playeruniteventId: number;
}
declare interface unitevent extends eventid {
	uniteventId: number;
}
declare interface limitop extends eventid {
	limitopId: number;
}
declare interface widgetevent extends eventid {
	widgeteventId: number;
}
declare interface dialogevent extends eventid {
	dialogeventId: number;
}
declare interface unittype extends handle {
	unittypeId: number;
}

declare interface gamespeed extends handle {
	gamespeedId: number;
}
declare interface gamedifficulty extends handle {
	gamedifficultyId: number;
}
declare interface gametype extends handle {
	gametypeId: number;
}
declare interface mapflag extends handle {
	mapflagId: number;
}
declare interface mapvisibility extends handle {
	mapvisibilityId: number;
}
declare interface mapsetting extends handle {
	mapsettingId: number;
}
declare interface mapdensity extends handle {
	mapdensityId: number;
}
declare interface mapcontrol extends handle {
	mapcontrolId: number;
}
declare interface playerslotstate extends handle {
	playerslotstateId: number;
}
declare interface volumegroup extends handle {
	volumegroupId: number;
}
declare interface camerafield extends handle {
	camerafieldId: number;
}
declare interface camerasetup extends handle {
	camerasetupId: number;
}
declare interface playercolor extends handle {
	playercolorId: number;
}
declare interface placement extends handle {
	placementId: number;
}
declare interface startlocprio extends handle {
	startlocprioId: number;
}
declare interface raritycontrol extends handle {
	raritycontrolId: number;
}
declare interface blendmode extends handle {
	blendmodeId: number;
}
declare interface texmapflags extends handle {
	texmapflagsId: number;
}
declare interface effect extends agent {
	effectId: number;
}
declare interface effecttype extends handle {
	effecttypeId: number;
}
declare interface weathereffect extends handle {
	weathereffectId: number;
}
declare interface terraindeformation extends handle {
	terraindeformationId: number;
}
declare interface fogstate extends handle {
	fogstateId: number;
}
declare interface fogmodifier extends agent {
	fogmodifierId: number;
}
declare interface dialog extends agent {
	dialogId: number;
}
declare interface button extends agent {
	buttonId: number;
}
declare interface quest extends agent {
	questId: number;
}
declare interface questitem extends agent {
	questitemId: number;
}
declare interface defeatcondition extends agent {
	defeatconditionId: number;
}
declare interface timerdialog extends agent {
	timerdialogId: number;
}
declare interface leaderboard extends agent {
	leaderboardId: number;
}
declare interface multiboard extends agent {
	multiboardId: number;
}
declare interface multiboarditem extends agent {
	multiboarditemId: number;
}
declare interface trackable extends agent {
	trackableId: number;
}
declare interface gamecache extends agent {
	gamecacheId: number;
}
declare interface version extends handle {
	versionId: number;
}
declare interface itemtype extends handle {
	itemtypeId: number;
}
declare interface texttag extends handle {
	texttagId: number;
}
declare interface attacktype extends handle {
	attacktypeId: number;
}
declare interface damagetype extends handle {
	damagetypeId: number;
}
declare interface weapontype extends handle {
	weapontypeId: number;
}
declare interface soundtype extends handle {
	soundtypeId: number;
}
declare interface lightning extends handle {
	lightningId: number;
}
declare interface pathingtype extends handle {
	pathingtypeId: number;
}
declare interface mousebuttontype extends handle {
	mousebuttontypeId: number;
}
declare interface animtype extends handle {
	animtypeId: number;
}
declare interface subanimtype extends handle {
	subanimtypeId: number;
}
declare interface image extends handle {
	imageId: number;
}
declare interface ubersplat extends handle {
	ubersplatId: number;
}
declare interface hashtable extends agent {
	hashtableId: number;
}
type FrameSide =
	| number
	| undefined
	| {
			relative: framehandle;
			relativeSide: "left" | "top" | "right" | "bottom";
			xOffset: number;
			yOffset: number;
	  };
declare interface framehandle extends handle {
	framehandleId: number;
	name: string;
	owner: framehandle | null;
	priority: number;
	createContext: number;
	typeName?: string;
	inherits?: string;
	node: unknown;
	width: number;
	height: number;
	pos: {
		left: FrameSide;
		top: FrameSide;
		right: FrameSide;
		bottom: FrameSide;
	};
}
declare interface originframetype extends handle {
	originframetypeId: number;
}
declare interface framepointtype extends handle {
	framepointtypeId: number;
}
declare interface textaligntype extends handle {
	textaligntypeId: number;
}
declare interface frameeventtype extends handle {
	frameeventtypeId: number;
}
declare interface oskeytype extends handle {
	oskeytypeId: number;
}
declare interface abilityintegerfield extends handle {
	abilityintegerfieldId: number;
}
declare interface abilityrealfield extends handle {
	abilityrealfieldId: number;
}
declare interface abilitybooleanfield extends handle {
	abilitybooleanfieldId: number;
}
declare interface abilitystringfield extends handle {
	abilitystringfieldId: number;
}
declare interface abilityintegerlevelfield extends handle {
	abilityintegerlevelfieldId: number;
}
declare interface abilityreallevelfield extends handle {
	abilityreallevelfieldId: number;
}
declare interface abilitybooleanlevelfield extends handle {
	abilitybooleanlevelfieldId: number;
}
declare interface abilitystringlevelfield extends handle {
	abilitystringlevelfieldId: number;
}
declare interface abilityintegerlevelarrayfield extends handle {
	abilityintegerlevelarrayfieldId: number;
}
declare interface abilityreallevelarrayfield extends handle {
	abilityreallevelarrayfieldId: number;
}
declare interface abilitybooleanlevelarrayfield extends handle {
	abilitybooleanlevelarrayfieldId: number;
}
declare interface abilitystringlevelarrayfield extends handle {
	abilitystringlevelarrayfieldId: number;
}
declare interface unitintegerfield extends handle {
	unitintegerfieldId: number;
}
declare interface unitrealfield extends handle {
	unitrealfieldId: number;
}
declare interface unitbooleanfield extends handle {
	unitbooleanfieldId: number;
}
declare interface unitstringfield extends handle {
	unitstringfieldId: number;
}
declare interface unitweaponintegerfield extends handle {
	unitweaponintegerfieldId: number;
}
declare interface unitweaponrealfield extends handle {
	unitweaponrealfieldId: number;
}
declare interface unitweaponbooleanfield extends handle {
	unitweaponbooleanfieldId: number;
}
declare interface unitweaponstringfield extends handle {
	unitweaponstringfieldId: number;
}
declare interface itemintegerfield extends handle {
	itemintegerfieldId: number;
}
declare interface itemrealfield extends handle {
	itemrealfieldId: number;
}
declare interface itembooleanfield extends handle {
	itembooleanfieldId: number;
}
declare interface itemstringfield extends handle {
	itemstringfieldId: number;
}
declare interface movetype extends handle {
	movetypeId: number;
}
declare interface targetflag extends handle {
	targetflagId: number;
}
declare interface armortype extends handle {
	armortypeId: number;
}
declare interface heroattribute extends handle {
	heroattributeId: number;
}
declare interface defensetype extends handle {
	defensetypeId: number;
}
declare interface regentype extends handle {
	regentypeId: number;
}
declare interface unitcategory extends handle {
	unitcategoryId: number;
}
declare interface pathingflag extends handle {
	pathingflagId: number;
}
