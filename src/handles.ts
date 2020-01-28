
import { gameContext } from "./contexts";

const converter = (): ( ( index?: number ) => number ) => {

	let _index = 0;
	return ( index?: number ): number => {

		// Nothing was passed, just increment
		if ( index === undefined ) return _index ++;

		if ( index >= _index ) _index = index + 1;

		return index;

	};

};

const unwrappedContextConverter = gameContext.simpleFunctionWrapper( converter );
export const contextConverter = <A extends handle>( fn: ( id: number ) => A ): ( ( id?: number ) => A ) => {

	const identity = ( i: number ): number => i;
	const converter = unwrappedContextConverter( identity );
	const map: Array<A | undefined> = [];
	return ( id?: number ): A => {

		id = converter( id );
		if ( map[ id ] ) return map[ id ] as A;

		const value = fn( id );
		map[ id ] = value;
		if ( value.onRemove ) value.onRemove( () => map[ id as number ] = undefined );
		return value;

	};

};
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
