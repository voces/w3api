// ============================================================================
// MathAPI
export const Deg2Rad = (degrees: number): number => (degrees * Math.PI) / 180;
export const Rad2Deg = (radians: number): number => (radians * 180) / Math.PI;
export const Sin = (radians: number): number => Math.sin(radians);
export const Cos = (radians: number): number => Math.cos(radians);
export const Tan = (radians: number): number => Math.tan(radians);
const clamp = (min: number, value: number, max: number): number =>
  Math.max(Math.min(value, max), min);
// Expect values between -1 and 1...returns 0 for invalid input
export const Asin = (y: number): number => Math.asin(clamp(-1, y, 1));
export const Acos = (x: number): number => Math.acos(clamp(-1, x, 1));
export const Atan = (x: number): number => Math.atan(x);
// Returns 0 if x and y are both 0
export const Atan2 = (y: number, x: number): number => Math.atan2(y, x);
// Returns 0 if x <= 0
export const SquareRoot = (x: number): number => x ** (1 / 2);
// computes x to the y power
// y == 0.0             => 1
// x ==0.0 and y < 0    => 0
//
export const Pow = (x: number, power: number): number => x ** power;
