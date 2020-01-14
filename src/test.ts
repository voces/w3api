
const memoizedIndexedObject = <T>( fn: ( id: number ) => T ): ( id?: number ) => T => {

	let index = 0;
	const map: Array<T> = [];
	return ( id = index ++ ): T => map[ id ] || ( map[ id ] = fn( id ) );

};
