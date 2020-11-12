// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const compiletime: <T>(fn: () => T) => T;
const compiletimeFn = <T>(fn: () => T): T => {
	const oldRequire = require;
	// eslint-disable-next-line no-global-assign
	require = Object.assign(
		// Remove leading ../../../
		(path: string) => oldRequire(path.replace(/^\.\.\/\.\.\/\.\.\//, "")),
		// ../../../
		oldRequire,
	);
	const ret = fn();
	// eslint-disable-next-line no-global-assign
	require = oldRequire;
	return ret;
};
export { compiletimeFn as compiletime };
