
import { gameContext } from "./contexts";

const converter = (): ( ( index?: number ) => number ) => {

	let _index = 0;
	return ( index?: number ): number => {

		if ( index !== undefined && index >= _index ) _index = index + 1;
		else index = _index ++;

		return index;

	};

};

export const contextConverter = gameContext.simpleFunctionWrapper( converter );
export const contextIndexer = gameContext.complexFunctionWrapper( converter );

type HandleCallback = ( handle: handle ) => void;

export const getHandle = contextIndexer( ( id ): handle => {

	const onRemoveListeners: Set<HandleCallback> = new Set();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const referenceMap: WeakMap<any, HandleCallback> = new WeakMap();
	return {
		handleId: id,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onRemove: ( cb: HandleCallback, reference?: any ): void => {

			onRemoveListeners.add( cb );
			if ( reference ) referenceMap.set( reference, cb );

		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		clearRemoveHook( cb: HandleCallback, reference?: any ): void {

			onRemoveListeners.delete( cb );
			if ( reference ) referenceMap.delete( reference );

		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		clearRemoveHookByReference( reference: any ): void {

			const cb = referenceMap.get( reference );
			if ( cb ) {

				onRemoveListeners.delete( cb );
				if ( reference ) referenceMap.delete( reference );

			}

		},
		remove(): void {

			onRemoveListeners.forEach( l => l( this ) );

		},
	};

} );
export const getAgent = contextIndexer( ( id ): agent => ( { ...getHandle(), agentId: id } ) );
