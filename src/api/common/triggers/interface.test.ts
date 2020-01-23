
import { CreateTrigger } from "./interface";

it( "CreateTrigger", () => expect( CreateTrigger() ).toMatchObject( { triggerId: 0 } ) );
