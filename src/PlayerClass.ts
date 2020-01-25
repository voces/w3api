
import { getAgent } from "./handles";
import { ConvertPlayerColor } from "./api/common/converters";

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
	onRemove: ( callback: ( handle: handle ) => void, reference?: any ) => void;
	remove: () => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	clearRemoveHook: ( callback: ( handle: handle ) => void, reference?: any ) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	clearRemoveHookByReference: ( reference: any ) => void;
	agentId: number;

	constructor( id: number ) {

		const agent = getAgent();
		this.handleId = agent.handleId;
		this.onRemove = agent.onRemove;
		this.remove = agent.remove;
		this.clearRemoveHook = agent.clearRemoveHook;
		this.clearRemoveHookByReference = agent.clearRemoveHookByReference;
		this.agentId = agent.agentId;

		this.playerId = id;
		this.name = `Player ${id}`;
		this.color = ConvertPlayerColor( Math.min( id, 23 ) );

	}

	private _racePreference?: racepreference;
	get racePreference(): racepreference {

		if ( ! this._racePreference ) throw new Error( "Accesing Player#racePreference before setting" );
		return this._racePreference;

	}
	set racePreference( racePreference: racepreference ) {

		this._racePreference = racePreference;

	}

	private _slotState?: playerslotstate;
	get slotState(): playerslotstate {

		if ( ! this._slotState ) throw new Error( "Accesing Player#slotState before setting" );
		return this._slotState;

	}
	set slotState( slotState: playerslotstate ) {

		this._slotState = slotState;

	}

	private _controller?: mapcontrol;
	get controller(): mapcontrol {

		if ( ! this._controller ) throw new Error( "Accesing Player#controller before setting" );
		return this._controller;

	}
	set controller( controller: mapcontrol ) {

		this._controller = controller;

	}

	private chatListeners: Array<( message: string ) => void> = [];
	onChat( message: string ): void { this.chatListeners.forEach( cb => cb( message ) ) }
	onChatListener( callback: ( message: string ) => void ): void { this.chatListeners.push( callback ) }

}

export const simulateChat = ( player: player, message: string ): void => player.onChat( message );
