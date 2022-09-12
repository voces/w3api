export const notImplemented = (func: string, warnOnly = false): void => {
  const str = `\`${func}\` not implemented`;

  if (warnOnly) console.warn(str);
  else throw new Error(str);
};
