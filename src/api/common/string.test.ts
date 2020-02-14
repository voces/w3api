
import { FourCC } from "./string";
import { FourCCRev } from "../../helpers/string";

it( "FourCC", () => expect( FourCC( "hfoo" ) ).toEqual( 1751543663 ) );
it( "FourCCRev", () => expect( FourCCRev( FourCC( "hfoo" ) ) ).toEqual( "hfoo" ) );
