import { ItemSpec } from "w3xdata";

import { notImplemented } from "../../errors.js";
import { wrapGame } from "../../Game.js";
import { contextIndexer, getWidget } from "../../handles.js";
import { revFourCC } from "../../helpers/string.js";

// ============================================================================
// Item API
export const CreateItem = contextIndexer(
  wrapGame(
    (game, id: number, itemid: number, x: number, y: number): item => {
      const prettyType = revFourCC(itemid);
      let data = game.data.items[prettyType];
      if (!data) {
        console.warn(`Unknown item type ${prettyType} (${itemid})`);
        data = {} as ItemSpec;
      }

      return {
        ...getWidget(),
        data: structuredClone(data),
        itemId: id,
        type: itemid,
        x,
        y,
      };
    },
  ),
);

export const RemoveItem = (whichItem: item): void => {};

export const GetItemPlayer = (whichItem: item): player => {
  notImplemented("GetItemPlayer");
  return (null as unknown) as player;
};

export const GetItemTypeId = (i: item): number => i.type;

export const GetItemX = (i: item): number => i.x;

export const GetItemY = (i: item): number => i.y;

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

export const IsItemPowerup = (whichItem: item): boolean =>
  whichItem.data.stats?.powerup || false;

export const IsItemSellable = (whichItem: item): boolean =>
  whichItem.data.stats?.sellable || false;

export const IsItemPawnable = (whichItem: item): boolean =>
  whichItem.data.stats?.pawnable || false;

export const IsItemIdPowerup = wrapGame((game, itemId: number): boolean =>
  game.data.items[revFourCC(itemId)]?.stats?.powerup || false
);

export const IsItemIdSellable = wrapGame((game, itemId: number): boolean =>
  game.data.items[revFourCC(itemId)]?.stats?.sellable || false
);

export const IsItemIdPawnable = wrapGame((game, itemId: number): boolean =>
  game.data.items[revFourCC(itemId)]?.stats?.pawnable || false
);

export const EnumItemsInRect = (
  r: rect,
  filter: boolexpr | null,
  actionFunc: () => void,
): void => {};

export const GetItemLevel = (whichItem: item): number =>
  whichItem.data.stats?.Level || 0;

export const GetItemType = (whichItem: item): itemtype => {
  notImplemented("GetItemType");
  return (null as unknown) as itemtype;
};

export const SetItemDropID = (whichItem: item, unitId: number): void => {};

export const GetItemName = (whichItem: item): string =>
  whichItem.data.text?.Name || "";

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

export const BlzGetItemDescription = (whichItem: item): string =>
  whichItem.data.text?.Description || "";

export const BlzSetItemTooltip = (whichItem: item, tooltip: string): void => {};

export const BlzGetItemTooltip = (whichItem: item): string =>
  whichItem.data.text?.Tip || "";

export const BlzSetItemExtendedTooltip = (
  whichItem: item,
  extendedTooltip: string,
): void => {};

export const BlzGetItemExtendedTooltip = (whichItem: item): string =>
  whichItem.data.text?.Ubertip || "";

export const BlzSetItemIconPath = (
  whichItem: item,
  iconPath: string,
): void => {};

export const BlzGetItemIconPath = (whichItem: item): string =>
  whichItem.data.art?.Art || "";

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
