// deno-lint-ignore-file no-unused-vars
import { notImplemented } from "../../errors";
import { contextIndexer, getAgent } from "../../handles";
import { Rect } from "./geometry";

// ============================================================================
// Force API
//
export const CreateForce = contextIndexer(
  (id): force => ({ ...getAgent(), forceId: id, players: new Set() }),
);
export const DestroyForce = (whichForce: force): void => whichForce.remove();
export const ForceRemovePlayer = (
  whichForce: force,
  whichPlayer: player,
): void => {
  whichForce.players.delete(whichPlayer);
  whichForce._array = undefined;
  whichPlayer.clearRemoveHookByReference(whichForce);
};
export const ForceAddPlayer = (
  whichForce: force,
  whichPlayer: player,
): void => {
  whichForce.players.add(whichPlayer);
  whichForce._array = undefined;
  whichPlayer.onRemove(() => {
    ForceRemovePlayer(whichForce, whichPlayer);
  }, whichForce);
};
export const BlzForceHasPlayer = (
  whichForce: force,
  whichPlayer: player,
): boolean => whichForce.players.has(whichPlayer);
export const ForceClear = (whichForce: force): void => {
  for (const player of whichForce.players) {
    player.clearRemoveHookByReference(whichForce);
  }
  whichForce.players = new Set();
  whichForce._array = undefined;
};
export const ForceEnumPlayers = (
  whichForce: force,
  filter: boolexpr | null,
): void => {};
export const ForceEnumPlayersCounted = (
  whichForce: force,
  filter: boolexpr,
  countLimit: number,
): void => {};
export const ForceEnumAllies = (
  whichForce: force,
  whichPlayer: player,
  filter: boolexpr | null,
): void => {};
export const ForceEnumEnemies = (
  whichForce: force,
  whichPlayer: player,
  filter: boolexpr | null,
): void => {};
export const ForForce = (
  whichForce: force,
  callback: (player: player) => void,
): void => {
  for (const player of whichForce.players) callback(player);
};
// Returns full map bounds, including unplayable borders, in world coordinates
export const GetWorldBounds = (): rect => {
  notImplemented("GetWorldBounds", true);
  return Rect(-Infinity, -Infinity, Infinity, Infinity);
};
