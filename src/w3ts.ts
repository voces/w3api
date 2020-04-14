
declare const compiletime: <T>( fn: () => T ) => T;
const compiletimeFn = <T>( fn: () => T ): T => fn();
export { compiletimeFn as compiletime };

