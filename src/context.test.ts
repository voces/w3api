
import {
	newContext,
	getContext,
	setContext,
	withContext,
	withTempContext,
	contextMemoize,
	injectContextData,
} from "context";

describe( "new, set, and get Context", () => {

	it( "newContext", () => {

		const context1 = newContext();
		const context2 = newContext();

		expect( context1 ).toBe( context1 );
		expect( context1 ).not.toBe( context2 );

	} );

	it( "setContext and getContext", () => {

		const originalContext = getContext();
		const nextContent = newContext();
		setContext( nextContent );

		expect( getContext() ).not.toBe( originalContext );
		expect( getContext() ).toBe( nextContent );

	} );

} );

it( "withContext", () => {

	const context = newContext();
	expect( getContext() ).not.toBe( context );
	let hasRun = false;
	const value = withContext( context, () => {

		hasRun = true;
		expect( getContext() ).toBe( context );
		return "return value";

	} );
	expect( getContext() ).not.toBe( context );
	expect( hasRun ).toBeTruthy();
	expect( value ).toBe( "return value" );

} );

it( "withTempContext", () => {

	const context = getContext();
	withTempContext( () => expect( getContext() ).not.toBe( context ) );
	expect( getContext() ).toBe( context );

} );

it( "contextMemoize", () => {

	const context2 = newContext();
	const fn = (): {} => ( {} );
	const memoized = contextMemoize( fn );

	const value1a = memoized();
	const value1b = memoized();

	const value2a = withContext( context2, memoized );
	const value2b = withContext( context2, memoized );

	expect( value1a ).toBe( value1b );
	expect( value1a ).not.toBe( value2a );
	expect( value2a ).toBe( value2b );

} );

describe( "injectContextData", () => {

	it( "with values", () => {

		let id = 0;
		const contextId = (): number => {

			const oldId = id;
			id += 2;
			return oldId;

		};
		const injectContextId = injectContextData(
			contextId,
			( id: number, offset: number ) => id ** 2 + offset,
		);

		const contexts = Array( 3 ).fill( 0 ).map( newContext );
		const values = contexts.map( context =>
			withContext( context, () =>
				injectContextId( 3 ) ) );

		expect( values ).toEqual( [ 3, 7, 19 ] );

	} );

	it( "with functions", () => {

        type Unit = {owner: number; x: number; y: number}
        const initUnit = (): Unit => ( { owner: 0, x: 0, y: 0 } );

	} );

} );
