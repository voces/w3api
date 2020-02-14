
import { contextConverter, getHandle } from "./handles";

it( "contextConverter", () => {

	const cc = contextConverter( ( value: number ) => ( { ...getHandle(), value } ) );

	const value1a = cc( 1 );
	const value1b = cc( 1 );
	const value2a = cc( 2 );
	const value1c = cc( 1 );
	const value2b = cc( 2 );

	expect( value1a ).toBe( value1b );
	expect( value1a ).toBe( value1c );
	expect( value1a ).not.toBe( value2a );
	expect( value2a ).toBe( value2b );

} );
