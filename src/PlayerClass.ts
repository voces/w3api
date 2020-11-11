import { MAP_CONTROL_NONE } from "./api/common/constants/mapSetup";
import { ConvertPlayerColor } from "./api/common/converters";
import { contextConverter, getAgent } from "./handles";

export class PlayerClass implements player {
	alliances: Map<player, Map<alliancetype, boolean>> = new Map();
	color: playercolor;
	name: string;
	onScoreScreen = false;
	playerId: number;
	raceSelectable = true;
	startLocation = 0;
	taxRates: Map<player, Map<playerstate, number>> = new Map();
	team = 0;

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
	agentId: number;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChatMap: Map<any, (message: string) => void> = new Map();
	controller = MAP_CONTROL_NONE;

	constructor(id: number) {
		const agent = getAgent();
		this.handleId = agent.handleId;
		this.onRemove = agent.onRemove;
		this.remove = agent.remove;
		this.clearRemoveHook = agent.clearRemoveHook;
		this.clearRemoveHookByReference = agent.clearRemoveHookByReference;
		this.agentId = agent.agentId;

		this.playerId = id;
		this.name = `Player ${id}`;
		this.color = ConvertPlayerColor(Math.min(id, 23));
	}

	private _racePreference?: racepreference;
	get racePreference(): racepreference {
		if (!this._racePreference)
			throw new Error("Accesing Player#racePreference before setting");
		return this._racePreference;
	}
	set racePreference(racePreference: racepreference) {
		this._racePreference = racePreference;
	}

	private _slotState?: playerslotstate;
	get slotState(): playerslotstate {
		if (!this._slotState)
			throw new Error("Accesing Player#slotState before setting");
		return this._slotState;
	}
	set slotState(slotState: playerslotstate) {
		this._slotState = slotState;
	}

	private chatListeners: Array<(message: string) => void> = [];
	onChat(message: string): void {
		this.chatListeners.forEach((cb) => cb(message));
	}
	addChatListener(callback: (message: string) => void, reference): void {
		this.chatListeners.push(callback);
		if (reference) this.onChatMap.set(reference, callback);
	}
}

export const simulateChat = (player: player, message: string): void =>
	player.onChat(message);

export const getPlayer = contextConverter((id): player => new PlayerClass(id));
