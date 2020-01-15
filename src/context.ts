import { ConvertPlayerSlotState } from "common/converters";

// A context is a way to associate data with a particular instance of usage.
// As an example, if we were running unit tests, we'd effectively want a new
// map for each specific test. When we create a unit, it should be created for
// that specific map. This file makes that kind of modeling possible,
// specifically without need of passing around that context reference around,
// and instead using a wrapper method.
// Note that this only works for a given thread, and the context should be set
// at the beginning of the event loop.

// A context is simply an object. We use it in (Weak)Maps.
export type Context = {__context: true};

/**
 * Generates and returns a new context.
 */
export const newContext = (): Context => ( { __context: true } );

let currentContext: Context = newContext();

/**
 * Sets the current context.
 */
export const setContext = ( context: Context ): void => {

	currentContext = context;

};

/**
 * Returns the current context.
 */
export const getContext = (): Context => currentContext;

/**
 * Sets the current context for the duration of the function. Restores the
 * previous context upon completion.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withContext = <T extends Array<any>, U>( context: Context, fn: () => U ): U => {

	const oldContext = currentContext;
	currentContext = context;
	const v = fn();
	currentContext = oldContext;
	return v;

};

/**
 * Sets the current context to an ephemeral context for the duration of the
 * function. Restores the previous context upon completion.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withTempContext = <T extends Array<any>, U>( fn: ( ...args: T ) => U ) =>
	( ...args: T ): U => {

		const oldContext = currentContext;
		currentContext = newContext();
		const v = fn( ...args );
		currentContext = oldContext;
		return v;

	};

/**
 * Returns a memoized function that memoizes on the context.
 */
export const contextMemoize = <U>( fn: () => U ): () => U => {

	const map: WeakMap<Context, U> = new WeakMap();

	return (): U => {

		if ( map.has( currentContext ) ) return map.get( currentContext ) as U;

		const value = fn();
		map.set( currentContext, value );

		return value;

	};

};

/**
 * Invokes `fn` with the result of `generator` as the first argument.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const injectContextData = <T, U extends Array<any>, G>( generator: () => T, fn: ( data: T, ...args: U ) => G ) =>
	( ...args: U ): G => {

		const data = generator();
		return fn( data, ...args );

	};

/**
 * Returns a function that invokes a passed function `fn` with the result of
 * `generator` injected as the first argument.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const contextDataWrapper = <T>( generator: () => T, memoize = true ): <U extends any[], G>( fn: ( data: T, ...args: U ) => G ) => ( ...args: U ) => G => {

	if ( memoize ) generator = contextMemoize( generator );

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return <U extends Array<any>, G>( fn: ( data: T, ...args: U ) => G ): ( ( ...args: U ) => G ) => injectContextData( generator, fn );

};

/**
 * Returns a function that invokes a passed function `fn` with the result of
 * `generator`.
 */
export const withContextDataWrapper = <T>( generator: () => T, memoize = true ): <G>( fn: ( data: T ) => G ) => G => {

	if ( memoize ) generator = contextMemoize( generator );
	return <G>( fn: ( ( data: T ) => G ) ): G => fn( generator() );

};

type Tezt = {
	a: number;
	b: number;
	c: number;
}
const withTezt = withContextDataWrapper( () => ( { a: 0, b: 0, c: 0 } ) );
export const incA = ( amount: number ): number => withTezt( ( tezt: Tezt ): number => {

	tezt.a += amount;
	return tezt.a;

} );
