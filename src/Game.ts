import { mapStrings, mapUnitSpecs, replaceStrings, UnitSpec } from "w3xdata";

import {
  MAP_DENSITY_MEDIUM,
  MAP_DIFFICULTY_NORMAL,
  MAP_PLACEMENT_RANDOM,
  MAP_SPEED_FASTEST,
} from "./api/common/constants/mapSetup";
import { BinaryHeap } from "./BinaryHeap";
import { gameContext } from "./contexts";
import type { FdfFrame } from "./helpers/fdf";
import { newRun } from "./Run";

export class Game {
  creatureDensity: mapdensity = MAP_DENSITY_MEDIUM;
  description = "";
  gameDifficulty: gamedifficulty = MAP_DIFFICULTY_NORMAL;
  gameSpeed: gamespeed = MAP_SPEED_FASTEST;
  globalTickChecks: Set<() => void> = new Set();
  log: Array<{ from?: player; to?: player; message: string }> = [];
  mapFlags: Map<mapflag, boolean> = new Map();
  name = "";
  placement: placement = MAP_PLACEMENT_RANDOM;
  players: Array<player> = [];
  regions: Set<region> = new Set();
  resourceDensity: mapdensity = MAP_DENSITY_MEDIUM;
  startLocationPriorites: Array<startlocprio> = [];
  startLocations: Array<StartLocation> = [];
  supportedGameTypes: Map<gametype, boolean> = new Map();
  teams = 1;
  time = 0;
  timers = new BinaryHeap((t: timer) => t.nextTick);
  triggers: Set<trigger> = new Set();
  localPlayerId = 0;
  frameDefs: Record<string, FdfFrame> = {};
  loadedFdfs = new Set<string>();

  data: {
    units: Record<string, UnitSpec>;
    strings: Record<string, string>;
  } = { units: {}, strings: {} };

  private units: Set<unit> = new Set();

  // apparently the delta should ALWAYS 1/32 ?
  tick(delta: number = 1 / 32): void {
    const newTime = this.time + delta;

    while (this.timers.size && this.timers.peak().nextTick <= newTime) {
      const timer = this.timers.pop();
      timer.lastTick += timer.interval;
      if (timer.periodic) {
        timer.nextTick += timer.interval;
        this.timers.push(timer);
      } else {
        timer.nextTick = timer.lastTick;
        timer.active = false;
      }

      if (timer.callback) {
        this.time = timer.lastTick;
        newRun({ expiredTimer: timer }, () => timer.callback!());
      }
    }

    this.globalTickChecks.forEach((v) => v());

    this.time = newTime;
  }

  tickFor(time: number): void {
    const ticks = time * 32;
    for (let i = 0; i < ticks; i++) this.tick();
  }

  addUnit(unit: unit): void {
    this.units.add(unit);
    for (const region of this.regions) {
      if (region.contains(unit)) region.addUnit(unit);
    }

    unit.onRemove(() => {
      this.units.delete(unit);
    }, this);
  }

  forEachUnit(fn: (unit: unit) => void): void {
    this.units.forEach((u) => fn(u));
  }

  loadData({ w3u, wts }: { w3u: Buffer; wts: Buffer | string }): void {
    this.data.strings = mapStrings(wts.toString());
    this.data.units = replaceStrings(mapUnitSpecs(w3u), this.data.strings);
  }
}

export const wrapGame = gameContext.dataWrapper(() => new Game());
export const getGame = wrapGame((g) => g);
