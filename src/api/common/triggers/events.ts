import { contextIndexer, getAgent } from "../../../handles";

export const getEvent = contextIndexer(
  (id, type: eventid | frameeventtype): event => ({
    ...getAgent(),
    eventId: id,
    type,
  }),
);
