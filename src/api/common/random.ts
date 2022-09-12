// deno-lint-ignore-file no-unused-vars
import { notImplemented } from "../../errors";

// ============================================================================

// Randomization API
export const GetRandomInt = (lowBound: number, highBound: number): number =>
  Math.floor(Math.random() * (highBound - lowBound + 1)) + lowBound;

export const GetRandomReal = (lowBound: number, highBound: number): number =>
  Math.random() * (highBound - lowBound) + lowBound;

export const CreateUnitPool = (): unitpool => {
  notImplemented("CreateUnitPool");
  return (null as unknown) as unitpool;
};

export const DestroyUnitPool = (whichPool: unitpool): void => {};

export const UnitPoolAddUnitType = (
  whichPool: unitpool,
  unitId: number,
  weight: number,
): void => {};

export const UnitPoolRemoveUnitType = (
  whichPool: unitpool,
  unitId: number,
): void => {};

export const PlaceRandomUnit = (
  whichPool: unitpool,
  forWhichPlayer: player,
  x: number,
  y: number,
  facing: number,
): unit => {
  notImplemented("PlaceRandomUnit");
  return (null as unknown) as unit;
};

export const CreateItemPool = (): itempool => {
  notImplemented("CreateItemPool");
  return (null as unknown) as itempool;
};

export const DestroyItemPool = (whichItemPool: itempool): void => {};

export const ItemPoolAddItemType = (
  whichItemPool: itempool,
  itemId: number,
  weight: number,
): void => {};

export const ItemPoolRemoveItemType = (
  whichItemPool: itempool,
  itemId: number,
): void => {};

export const PlaceRandomItem = (
  whichItemPool: itempool,
  x: number,
  y: number,
): item => {
  notImplemented("PlaceRandomItem");
  return (null as unknown) as item;
};

// Choose any random unit/item. (NP means Neutral Passive)
export const ChooseRandomCreep = (level: number): number => {
  notImplemented("ChooseRandomCreep");
  return 0;
};

export const ChooseRandomNPBuilding = (): number => {
  notImplemented("ChooseRandomNPBuilding");
  return 0;
};

export const ChooseRandomItem = (level: number): number => {
  notImplemented("ChooseRandomItem");
  return 0;
};

export const ChooseRandomItemEx = (
  whichType: itemtype,
  level: number,
): number => {
  notImplemented("ChooseRandomItemEx");
  return 0;
};

export const SetRandomSeed = (seed: number): void => {};
