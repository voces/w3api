
import { contextIndexer, getAgent } from "../../../handles";

export const getEvent = contextIndexer( ( id ): event =>
	( { ...getAgent(), eventId: id } ) );
