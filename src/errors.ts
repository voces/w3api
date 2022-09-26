let warnNotImplemented = false;

export const setWarnNotImplemented = (value: boolean): void => {
  warnNotImplemented = value;
};

export const notImplemented = (func: string, warnOnly = false): void => {
  const str = `\`${func}\` not implemented`;

  if (warnNotImplemented || warnOnly) console.warn(str);
  else throw new Error(str);
};
