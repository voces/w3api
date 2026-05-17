import { contextIndexer, getAgent } from "../../../handles.js";

export const getEvent = contextIndexer(
  (id, type: eventid | frameeventtype): event => ({
    ...getAgent(),
    eventId: id,
    type,
  }),
);
