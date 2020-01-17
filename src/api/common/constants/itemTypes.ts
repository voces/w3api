
import { ConvertItemType } from "../converters";

// ===================================================
// Unit Type Constants for use with ChooseRandomItemEx()
// ===================================================

export const ITEM_TYPE_PERMANENT = ConvertItemType( 0 );
export const ITEM_TYPE_CHARGED = ConvertItemType( 1 );
export const ITEM_TYPE_POWERUP = ConvertItemType( 2 );
export const ITEM_TYPE_ARTIFACT = ConvertItemType( 3 );
export const ITEM_TYPE_PURCHASABLE = ConvertItemType( 4 );
export const ITEM_TYPE_CAMPAIGN = ConvertItemType( 5 );
export const ITEM_TYPE_MISCELLANEOUS = ConvertItemType( 6 );
export const ITEM_TYPE_UNKNOWN = ConvertItemType( 7 );
export const ITEM_TYPE_ANY = ConvertItemType( 8 );

// Deprecated, should use ITEM_TYPE_POWERUP
export const ITEM_TYPE_TOME = ConvertItemType( 2 );
