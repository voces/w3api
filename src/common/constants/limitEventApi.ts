
import { ConvertLimitOp } from "common/converters";

// ===================================================
// Limit Event API constants
// variable, player state, game state, and unit state events
// ( do NOT change the order of these... )
// ===================================================
export const LESS_THAN = ConvertLimitOp( 0 );
export const LESS_THAN_OR_EQUAL = ConvertLimitOp( 1 );
export const EQUAL = ConvertLimitOp( 2 );
export const GREATER_THAN_OR_EQUAL = ConvertLimitOp( 3 );
export const GREATER_THAN = ConvertLimitOp( 4 );
export const NOT_EQUAL = ConvertLimitOp( 5 );
