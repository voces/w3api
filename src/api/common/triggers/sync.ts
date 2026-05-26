import { newRun, wrapRun } from "../../../Run.js";
import { EVENT_PLAYER_SYNC_DATA } from "../constants/gamePlayerAndUnitEvents.js";
import { GetLocalPlayer } from "../players.js";
import { getEvent } from "./events.js";

type SyncRegistration = {
  trigger: trigger;
  player: player;
  prefix: string;
  fromServer: boolean;
};

const registrations: Array<SyncRegistration> = [];

export const BlzTriggerRegisterPlayerSyncEvent = (
  whichTrigger: trigger,
  whichPlayer: player,
  prefix: string,
  fromServer: boolean,
): event => {
  const event = getEvent(EVENT_PLAYER_SYNC_DATA);
  event.player = whichPlayer;
  whichTrigger.events.push(event);

  const registration: SyncRegistration = {
    trigger: whichTrigger,
    player: whichPlayer,
    prefix,
    fromServer,
  };
  registrations.push(registration);

  whichTrigger.onRemove(() => {
    const i = registrations.indexOf(registration);
    if (i >= 0) registrations.splice(i, 1);
  }, registration);

  return event;
};

export const BlzSendSyncData = (prefix: string, data: string): boolean => {
  const sender = GetLocalPlayer();
  if (!sender) return false;

  // Snapshot to make handlers that register/unregister mid-dispatch safe.
  for (const reg of registrations.slice()) {
    if (!reg.trigger.enabled) continue;
    if (reg.player !== sender) continue;
    if (reg.prefix !== prefix) continue;

    newRun(
      {
        triggeringPlayer: sender,
        triggeringTrigger: reg.trigger,
        triggerSyncPrefix: prefix,
        triggerSyncData: data,
      },
      () => {
        if (reg.trigger.evaluate()) reg.trigger.execute();
      },
    );
  }

  return true;
};

export const BlzGetTriggerSyncPrefix = wrapRun(
  (run): string => run.triggerSyncPrefix,
);

export const BlzGetTriggerSyncData = wrapRun(
  (run): string => run.triggerSyncData,
);
