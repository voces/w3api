// deno-lint-ignore-file no-unused-vars
import { notImplemented } from "../../errors";
import { wrapGame } from "../../Game";
import { contextIndexer, getAgent } from "../../handles";
import { getRun, newRun } from "../../Run";

// ============================================================================
// Group API
//
export const CreateGroup = contextIndexer(
  (id): group => ({ ...getAgent(), groupId: id, units: new Set() }),
);
export const DestroyGroup = (whichGroup: group): void => whichGroup.remove();
export const GroupRemoveUnit = (
  whichGroup: group,
  whichUnit: unit,
): boolean => {
  // todo: verify this boolean thing?
  const size = whichGroup.units.size;
  whichGroup.units.delete(whichUnit);
  whichGroup._array = undefined;
  whichUnit.clearRemoveHookByReference(whichGroup);
  return size === whichGroup.units.size;
};
export const GroupAddUnit = (whichGroup: group, whichUnit: unit): boolean => {
  // todo: verify this boolean thing?
  const size = whichGroup.units.size;
  whichGroup.units.add(whichUnit);
  whichGroup._array = undefined;
  whichUnit.onRemove(() => {
    GroupRemoveUnit(whichGroup, whichUnit);
  }, whichGroup);
  return size === whichGroup.units.size;
};
export const BlzGroupAddGroupFast = (
  whichGroup: group,
  addGroup: group,
): number => {
  // todo: verify this boolean thing?
  const size = addGroup.units.size;
  for (const unit of whichGroup.units) {
    addGroup.units.add(unit);
    unit.onRemove(() => {
      GroupRemoveUnit(whichGroup, unit);
    }, whichGroup);
  }
  addGroup._array = undefined;
  return addGroup.units.size - size;
};
export const BlzGroupRemoveGroupFast = (
  whichGroup: group,
  removeGroup: group,
): number => {
  // todo: verify this boolean thing?
  const size = removeGroup.units.size;
  for (const unit of whichGroup.units) {
    removeGroup.units.delete(unit);
    unit.clearRemoveHookByReference(whichGroup);
  }
  removeGroup._array = undefined;
  return removeGroup.units.size - size;
};
export const GroupClear = (whichGroup: group): void => {
  for (const unit of whichGroup.units) {
    unit.clearRemoveHookByReference(whichGroup);
  }
  whichGroup.units = new Set();
  whichGroup._array = undefined;
};
export const BlzGroupGetSize = (whichGroup: group): number =>
  whichGroup.units.size;
export const BlzGroupUnitAt = (whichGroup: group, index: number): unit => {
  if (whichGroup._array) return whichGroup._array[index];
  whichGroup._array = [...whichGroup.units.values()];
  return whichGroup._array[index];
};
export const GroupEnumUnitsOfType = (
  whichGroup: group,
  unitname: string,
  filter: boolexpr | null,
): void => {};
export const GroupEnumUnitsOfPlayer = wrapGame(
  (
    game,
    whichGroup: group,
    whichPlayer: player,
    filter: boolexpr | null,
  ): void => {
    game.forEachUnit((u) => {
      if (u.owner !== whichPlayer) return;

      if (filter) {
        const filterResult = newRun(
          { ...getRun(), enumUnit: u },
          () => filter.func(),
        );
        if (!filterResult) return;
      }

      GroupAddUnit(whichGroup, u);
    });
  },
);
export const GroupEnumUnitsOfTypeCounted = (
  whichGroup: group,
  unitname: string,
  filter: boolexpr | null,
  countLimit: number,
): void => {};
export const GroupEnumUnitsInRect = (
  whichGroup: group,
  r: rect,
  filter: boolexpr | null,
): void => {};
export const GroupEnumUnitsInRectCounted = (
  whichGroup: group,
  r: rect,
  filter: boolexpr | null,
  countLimit: number,
): void => {};
export const GroupEnumUnitsInRange = (
  whichGroup: group,
  x: number,
  y: number,
  radius: number,
  filter: boolexpr | null,
): void => {};
export const GroupEnumUnitsInRangeOfLoc = (
  whichGroup: group,
  whichLocation: location,
  radius: number,
  filter: boolexpr | null,
): void => {};
export const GroupEnumUnitsInRangeCounted = (
  whichGroup: group,
  x: number,
  y: number,
  radius: number,
  filter: boolexpr | null,
  countLimit: number,
): void => {};
export const GroupEnumUnitsInRangeOfLocCounted = (
  whichGroup: group,
  whichLocation: location,
  radius: number,
  filter: boolexpr | null,
  countLimit: number,
): void => {};
export const GroupEnumUnitsSelected = (
  whichGroup: group,
  whichPlayer: player,
  filter: boolexpr | null,
): void => {};
export const GroupImmediateOrder = (
  whichGroup: group,
  order: string,
): boolean => {
  notImplemented("GroupImmediateOrder");
  return false;
};
export const GroupImmediateOrderById = (
  whichGroup: group,
  order: number,
): boolean => {
  notImplemented("GroupImmediateOrderById");
  return false;
};
export const GroupPointOrder = (
  whichGroup: group,
  order: string,
  x: number,
  y: number,
): boolean => {
  notImplemented("GroupPointOrder");
  return false;
};
export const GroupPointOrderLoc = (
  whichGroup: group,
  order: string,
  whichLocation: location,
): boolean => {
  notImplemented("GroupPointOrderLoc");
  return false;
};
export const GroupPointOrderById = (
  whichGroup: group,
  order: number,
  x: number,
  y: number,
): boolean => {
  notImplemented("GroupPointOrderById");
  return false;
};
export const GroupPointOrderByIdLoc = (
  whichGroup: group,
  order: number,
  whichLocation: location,
): boolean => {
  notImplemented("GroupPointOrderByIdLoc");
  return false;
};
export const GroupTargetOrder = (
  whichGroup: group,
  order: string,
  targetWidget: widget,
): boolean => {
  notImplemented("GroupTargetOrder");
  return false;
};
export const GroupTargetOrderById = (
  whichGroup: group,
  order: number,
  targetWidget: widget,
): boolean => {
  notImplemented("GroupTargetOrderById");
  return false;
};
// This will be difficult to support with potentially disjoint, cell-based regions
// as it would involve enumerating all the cells that are covered by a particularregion
// a better implementation would be a trigger that adds relevant units as they enter
// and removes them if they leave...
export const ForGroup = (whichGroup: group, callback: () => void): void => {
  for (const unit of whichGroup.units) {
    newRun({ ...getRun(), enumUnit: unit }, callback);
  }
};
export const FirstOfGroup = (whichGroup: group): unit =>
  BlzGroupUnitAt(whichGroup, 0);
