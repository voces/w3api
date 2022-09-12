export const revFourCC = (value: number): string => {
  let s = "";

  while (value > 0) {
    s = String.fromCharCode(value % 256) + s;
    value = Math.floor(value / 256);
  }

  return s;
};
