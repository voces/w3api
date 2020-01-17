
import {
	newContext,
	injectContextData,
	ContextManager,
} from "./ContextManager";

it( "newContext", () => {

	const context1 = newContext();
	const context2 = newContext();

	expect( context1 ).toBe( context1 );
	expect( context1 ).not.toBe( context2 );

} );

describe( "ContextManager", () => {

	it( "#context", () => {

		const cm = new ContextManager();
		const originalContext = cm.context;

		expect( originalContext ).toEqual( {} );

		const nextContent = newContext();
		cm.context = nextContent;

		expect( cm.context ).not.toBe( originalContext );
		expect( cm.context ).toBe( nextContent );

	} );

	it( "#with", () => {

		const cm = new ContextManager();
		const context = newContext();

		expect( cm.context ).not.toBe( context );

		let hasRun = false;
		const value = cm.with( context, () => {

			hasRun = true;
			expect( cm.context ).toBe( context );
			return "return value";

		} );

		expect( cm.context ).not.toBe( context );
		expect( hasRun ).toBeTruthy();
		expect( value ).toBe( "return value" );

	} );

	it( "#withTemp", () => {

		const cm = new ContextManager();
		const context = cm.context;
		const value = cm.withTemp( () => {

			expect( cm.context ).not.toBe( context );
			return "return value";

		} );

		expect( cm.context ).toBe( context );
		expect( value ).toBe( "return value" );

	} );

	it( "#memoize", () => {

		const cm = new ContextManager();
		const context2 = newContext();
		const fn = (): {} => ( {} );
		const memoized = cm.memoize( fn );

		const value1a = memoized();
		const value1b = memoized();

		const value2a = cm.with( context2, memoized );
		const value2b = cm.with( context2, memoized );

		expect( value1a ).toBe( value1b );
		expect( value1a ).not.toBe( value2a );
		expect( value2a ).toBe( value2b );

	} );

	const indexer = (): ( ( index?: number ) => number ) => {

		let _index = 0;
		return ( index?: number ): number => {

			if ( index !== undefined && index >= _index ) _index = index + 1;
			else index = _index ++;

			return index;

		};

	};

	it( "value", () => {

		const cm = new ContextManager();
		const context2 = newContext();

		type Map = {name: string}
		const mapGenerator = (): Map => ( { name: "" } );
		const contextMap = cm.dataWrapper( mapGenerator );

		const setMapName = contextMap( ( map: Map, name: string ): void => { map.name = name } );
		const getMapName = contextMap( ( map: Map ): string => map.name );

		setMapName( "Global context" );
		cm.with( context2, () => setMapName( "Local context" ) );

		expect( getMapName() ).toBe( "Global context" );
		expect( cm.with( context2, getMapName ) ).toBe( "Local context" );

	} );

	it( "function", () => {

		const cm = new ContextManager();
		const context2 = newContext();

		const contextMap = cm.data( indexer );

		const indexer1 = contextMap();
		const indexer2 = contextMap();
		const indexer3 = cm.with( context2, contextMap );
		const indexer4 = cm.with( context2, contextMap );

		expect( [
			indexer1(),
			indexer2( 3 ),
			indexer3(),
			indexer1(),
			indexer4( 2 ),
			indexer2(),
			indexer4(),
			indexer3(),
		] ).toEqual( [ 0, 3, 0, 4, 2, 5, 3, 4 ] );

	} );

	describe( "simpleFunctionWrapper", () => {

		it( "function wrapper", () => {

			const cm = new ContextManager();
			const context2 = newContext();

			const contextIndexer = cm.simpleFunctionWrapper( indexer );
			const indexer1 = contextIndexer( i => i );
			const indexer2 = contextIndexer( i => i );

			expect( [
				indexer1(),
				indexer1(),
				cm.with( context2, () => indexer1() ),
				indexer2( 7 ),
				cm.with( context2, () => indexer2( 11 ) ),
				cm.with( context2, () => indexer1() ),
				indexer1(),
				indexer2(),
				cm.with( context2, () => indexer2() ),
			] ).toEqual( [ 0, 1, 0, 7, 11, 1, 2, 8, 12 ] );

		} );

		it( "handles", () => {

			const cm = new ContextManager();
			const context2 = newContext();

			type Handle = {handleId: number}
			type Widget = {handleId: number; widgetId: number}
			type Event = {handleId: number; eventId: number}

			const contextIndexer = cm.simpleFunctionWrapper( indexer );

			const getHandle = contextIndexer( ( id: number ): Handle => ( { handleId: id } ) );
			const getWidget = contextIndexer( ( id: number ): Widget => ( { ...getHandle(), widgetId: id } ) );
			const getEvent = contextIndexer( ( id: number ): Event => ( { ...getHandle(), eventId: id } ) );

			const handle1 = getHandle();
			const widget1 = getWidget( 2 );
			const event1 = getEvent( 1 );
			const widget2 = cm.with( context2, getWidget );
			const event2 = getEvent( 2 );
			const widget3 = getWidget();
			const handle2 = getHandle();
			const widget4 = cm.with( context2, getWidget );
			const event3 = cm.with( context2, getEvent );

			expect( handle1 ).toEqual( { handleId: 0 } );
			expect( widget1 ).toEqual( { handleId: 1, widgetId: 2 } );
			expect( event1 ).toEqual( { handleId: 2, eventId: 1 } );
			expect( widget2 ).toEqual( { handleId: 0, widgetId: 0 } );
			expect( event2 ).toEqual( { handleId: 3, eventId: 2 } );
			expect( widget3 ).toEqual( { handleId: 4, widgetId: 3 } );
			expect( handle2 ).toEqual( { handleId: 5 } );
			expect( widget4 ).toEqual( { handleId: 1, widgetId: 1 } );
			expect( event3 ).toEqual( { handleId: 2, eventId: 0 } );

		} );

		it( "range", () => {

			const cm = new ContextManager();
			const context2 = newContext();

			type range = {id: number; min: number; max: number}
			const Range = ( id: number, min: number, max: number ): range => ( { id, min, max } );

			const contextIndexer = cm.complexFunctionWrapper( indexer );

			const SimpleRange1 = contextIndexer( Range );
			const SimpleRange2 = contextIndexer( Range );

			const range1c1a = SimpleRange1( 0, 1 );
			const range2c1a = SimpleRange2( 0, 1 );
			const range1c2a = cm.with( context2, () => SimpleRange1( 0, 1 ) );
			const range1c1b = SimpleRange1( 0, 1 );
			const range1c1c = SimpleRange1( 1, 2 );
			const range2c1b = SimpleRange2( 1, 2 );

			expect( range1c1a ).toEqual( { min: 0, max: 1, id: 0 } );
			expect( range2c1a ).toEqual( { min: 0, max: 1, id: 0 } );
			expect( range1c2a ).toEqual( { min: 0, max: 1, id: 0 } );
			expect( range1c1b ).toEqual( { min: 0, max: 1, id: 1 } );
			expect( range1c1c ).toEqual( { min: 1, max: 2, id: 2 } );
			expect( range2c1b ).toEqual( { min: 1, max: 2, id: 1 } );

		} );

	} );

} );

describe( "injectContextData", () => {

	it( "with values", () => {

		const cm = new ContextManager();
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
			cm.with( context, () =>
				injectContextId( 3 ) ) );

		expect( values ).toEqual( [ 3, 7, 19 ] );

	} );

} );
