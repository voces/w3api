
export type Context = {__context: true};

export const newContext = (): Context => ( { __context: true } );

let context: Context = newContext();

export const setContext = ( newContext: Context ): void => {

	context = newContext;

};

export const getContext = (): Context => context;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withContext = <T extends Array<any>, U>( newContext: Context, fn: ( ...args: T ) => U ) =>
	( ...args: T ): U => {

		const oldContext = context;
		context = newContext;
		const v = fn( ...args );
		context = oldContext;
		return v;

	};
