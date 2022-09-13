const compiletimeFn = <T>(fn: () => T): T => {
  const oldRequire = require;
  require = Object.assign(
    // Remove leading ../../../
    (path: string) => oldRequire(path.replace(/^\.\.\/\.\.\/\.\.\//, "")),
    // ../../../
    oldRequire,
  );
  const ret = fn();
  require = oldRequire;
  return ret;
};
export { compiletimeFn as compiletime };
