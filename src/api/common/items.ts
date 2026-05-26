import { notImplemented } from "../../errors.js";
import { contextIndexer, getWidget } from "../../handles.js";

// ============================================================================
// Item API
export const CreateItem = contextIndexer(
  (id, itemid: number, x: number, y: number): item => ({
    ...getWidget(),
    itemId: id,
    type: itemid,
    x,
    y,
  }),
);

export const RemoveItem = (whichItem: item): void => {};

export const GetItemPlayer = (whichItem: item): player => {
  notImplemented("GetItemPlayer");
  return (null as unknown) as player;
};

export const GetItemTypeId = (i: item): number => i.type;

export const GetItemX = (i: item): number => {
  notImplemented("GetItemX");
  return 0;
};

export const GetItemY = (i: item): number => {
  notImplemented("GetItemY");
  return 0;
};

export const SetItemPosition = (i: item, x: number, y: number): void => {};

export const SetItemDropOnDeath = (whichItem: item, flag: boolean): void => {};

export const SetItemDroppable = (i: item, flag: boolean): void => {};

export const SetItemPawnable = (i: item, flag: boolean): void => {};

export const SetItemPlayer = (
  whichItem: item,
  whichPlayer: player,
  changeColor: boolean,
): void => {};

export const SetItemInvulnerable = (whichItem: item, flag: boolean): void => {};

export const IsItemInvulnerable = (whichItem: item): boolean => {
  notImplemented("IsItemInvulnerable");
  return false;
};

export const SetItemVisible = (whichItem: item, show: boolean): void => {};

export const IsItemVisible = (whichItem: item): boolean => {
  notImplemented("IsItemVisible");
  return false;
};

export const IsItemOwned = (whichItem: item): boolean => {
  notImplemented("IsItemOwned");
  return false;
};

export const IsItemPowerup = (whichItem: item): boolean => {
  notImplemented("IsItemPowerup");
  return false;
};

export const IsItemSellable = (whichItem: item): boolean => {
  notImplemented("IsItemSellable");
  return false;
};

export const IsItemPawnable = (whichItem: item): boolean => {
  notImplemented("IsItemPawnable");
  return false;
};

export const IsItemIdPowerup = (itemId: number): boolean => {
  notImplemented("IsItemIdPowerup");
  return false;
};

export const IsItemIdSellable = (itemId: number): boolean => {
  notImplemented("IsItemIdSellable");
  return false;
};

export const IsItemIdPawnable = (itemId: number): boolean => {
  notImplemented("IsItemIdPawnable");
  return false;
};

export const EnumItemsInRect = (
  r: rect,
  filter: boolexpr | null,
  actionFunc: () => void,
): void => {};

export const GetItemLevel = (whichItem: item): number => {
  notImplemented("GetItemLevel");
  return 0;
};

export const GetItemType = (whichItem: item): itemtype => {
  notImplemented("GetItemType");
  return (null as unknown) as itemtype;
};

export const SetItemDropID = (whichItem: item, unitId: number): void => {};

export const GetItemName = (whichItem: item): string => {
  notImplemented("GetItemName");
  return "";
};

export const GetItemCharges = (whichItem: item): number => {
  notImplemented("GetItemCharges");
  return 0;
};

export const SetItemCharges = (whichItem: item, charges: number): void => {};

export const GetItemUserData = (whichItem: item): number => {
  notImplemented("GetItemUserData");
  return 0;
};

export const SetItemUserData = (whichItem: item, data: number): void => {};

// ============================================================================
// Blizzard Item API
export const BlzSetItemName = (whichItem: item, name: string): void => {};

export const BlzSetItemDescription = (
  whichItem: item,
  description: string,
): void => {};

export const BlzGetItemDescription = (whichItem: item): string => {
  notImplemented("BlzGetItemDescription");
  return "";
};

export const BlzSetItemTooltip = (whichItem: item, tooltip: string): void => {};

export const BlzGetItemTooltip = (whichItem: item): string => {
  notImplemented("BlzGetItemTooltip");
  return "";
};

export const BlzSetItemExtendedTooltip = (
  whichItem: item,
  extendedTooltip: string,
): void => {};

export const BlzGetItemExtendedTooltip = (whichItem: item): string => {
  notImplemented("BlzGetItemExtendedTooltip");
  return "";
};

export const BlzSetItemIconPath = (
  whichItem: item,
  iconPath: string,
): void => {};

export const BlzGetItemIconPath = (whichItem: item): string => {
  notImplemented("BlzGetItemIconPath");
  return "";
};

export const BlzGetItemAbilityByIndex = (
  whichItem: item,
  index: number,
): ability => {
  notImplemented("BlzGetItemAbilityByIndex");
  return (null as unknown) as ability;
};

export const BlzGetItemAbility = (
  whichItem: item,
  abilCode: number,
): ability => {
  notImplemented("BlzGetItemAbility");
  return (null as unknown) as ability;
};

export const BlzItemAddAbility = (
  whichItem: item,
  abilCode: number,
): boolean => {
  notImplemented("BlzItemAddAbility");
  return false;
};

export const BlzGetItemBooleanField = (
  whichItem: item,
  whichField: itembooleanfield,
): boolean => {
  notImplemented("BlzGetItemBooleanField");
  return false;
};

export const BlzGetItemIntegerField = (
  whichItem: item,
  whichField: itemintegerfield,
): number => {
  notImplemented("BlzGetItemIntegerField");
  return 0;
};

export const BlzGetItemRealField = (
  whichItem: item,
  whichField: itemrealfield,
): number => {
  notImplemented("BlzGetItemRealField");
  return 0;
};

export const BlzGetItemStringField = (
  whichItem: item,
  whichField: itemstringfield,
): string => {
  notImplemented("BlzGetItemStringField");
  return "";
};

export const BlzSetItemBooleanField = (
  whichItem: item,
  whichField: itembooleanfield,
  value: boolean,
): boolean => {
  notImplemented("BlzSetItemBooleanField");
  return false;
};

export const BlzSetItemIntegerField = (
  whichItem: item,
  whichField: itemintegerfield,
  value: number,
): boolean => {
  notImplemented("BlzSetItemIntegerField");
  return false;
};

export const BlzSetItemRealField = (
  whichItem: item,
  whichField: itemrealfield,
  value: number,
): boolean => {
  notImplemented("BlzSetItemRealField");
  return false;
};

export const BlzSetItemStringField = (
  whichItem: item,
  whichField: itemstringfield,
  value: string,
): boolean => {
  notImplemented("BlzSetItemStringField");
  return false;
};

export const BlzItemRemoveAbility = (
  whichItem: item,
  abilCode: number,
): boolean => {
  notImplemented("BlzItemRemoveAbility");
  return false;
};

export const BlzSetItemSkin = (whichItem: item, skinId: number): void => {
  notImplemented("BlzSetItemSkin");
};

export const BlzGetItemSkin = (whichItem: item): number => {
  notImplemented("BlzGetItemSkin");
  return 0;
};

export const BlzCreateItemWithSkin = (
  itemid: number,
  x: number,
  y: number,
  skinId: number,
): item => {
  notImplemented("BlzCreateItemWithSkin");
  return null as unknown as item;
};
