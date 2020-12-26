// A context is a way to associate data with a particular instance of usage.
// As an example, if we were running unit tests, we'd effectively want a new
// map for each specific test. When we create a unit, it should be created for
// that specific map. This file makes that kind of modeling possible,
// specifically without need of passing around that context reference around,
// and instead using a wrapper method.
// Note that this only works for a given thread, and the context should be set
// at the beginning of the event loop.

// A context is simply an object. We use it in (Weak)Maps.
// eslint-disable-next-line @typescript-eslint/ban-types
export type Context = {};

/**
 * Generates and returns a new context.
 */
export const newContext = (): Context => ({});

/**
 * Invokes `fn` with the result of `generator` as the first argument.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const injectContextData = <T, U extends Array<any>, G>(
	generator: () => T,
	fn: (data: T, ...args: U) => G,
) => (...args: U): G => {
	const data = generator();
	return fn(data, ...args);
};

export class ContextManager {
	private currentContext = newContext();

	get context(): Context {
		return this.currentContext;
	}
	set context(newContext: Context) {
		this.currentContext = newContext;
	}

	/**
	 * Sets the current context for the duration of the function. Restores the
	 * previous context upon completion.
	 */
	with<T>(context: Context, fn: () => T): T {
		const oldContext = this.currentContext;
		this.currentContext = context;
		const v = fn();
		this.currentContext = oldContext;
		return v;
	}

	/**
	 * Sets the current context to an ephemeral context for the duration of the
	 * function. Restores the previous context upon completion.
	 */
	withTemp<T>(fn: (context: Context) => T): T {
		const oldContext = this.currentContext;
		this.currentContext = newContext();
		const v = fn(this.currentContext);
		this.currentContext = oldContext;
		return v;
	}

	/**
	 * Sets the current context to an ephemeral clone of the current context.
	 */
	fork<T>(fn: () => T): T {
		const oldContext = this.currentContext;
		this.currentContext = { ...oldContext };
		const v = fn();
		this.currentContext = oldContext;
		return v;
	}

	/**
	 * Returns a memoized function that memoizes on the context.
	 */
	memoize<U>(fn: () => U): () => U {
		const map: WeakMap<Context, U> = new WeakMap();

		return (): U => {
			if (map.has(this.currentContext))
				return map.get(this.currentContext) as U;

			const value = fn();
			map.set(this.currentContext, value);

			return value;
		};
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data<T, U extends Array<any>>(
		fn: (...args: U) => T,
		memoize = true,
	): (...args: U) => T {
		if (memoize) fn = this.memoize(fn);

		return (...args: U): T => fn(...args);
	}

	/**
	 * Returns a function that invokes a passed function `fn` with the result of
	 * `generator` injected as the first argument.
	 */
	dataWrapper<T>(
		generator: () => T,
		memoize = true,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): <U extends any[], G>(
		fn: (data: T, ...args: U) => G,
	) => (...args: U) => G {
		if (memoize) generator = this.memoize(generator);

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return <U extends Array<any>, G>(
			fn: (data: T, ...args: U) => G,
		): ((...args: U) => G) => injectContextData(generator, fn);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	simpleFunctionWrapper<A extends Array<any>, B>(
		generator: () => (...args: A) => B,
	) {
		return <C>(fn: (generatorValue: B) => C): ((...args: A) => C) => {
			const contextMap = this.data(generator);

			return (...args: A): C => {
				const counter = contextMap();
				const value = counter(...args);
				return fn(value);
			};
		};
	}

	complexFunctionWrapper<A>(generator: () => () => A) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return <B extends Array<any>, C>(
			fn: (generatorValues: A, ...otherValues: B) => C,
		): ((...args: B) => C) => {
			const contextMap = this.data(generator);

			return (...args: B): C => {
				const counter = contextMap();
				const value = counter();
				return fn(value, ...args);
			};
		};
	}
}
