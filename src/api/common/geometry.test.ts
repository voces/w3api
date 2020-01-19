
import { Rect } from "./geometry";

it( "Rect", () => {

	const rect = Rect( - 2, - 1, 2, 1 );

	expect( Object.keys( rect ).sort() ).toEqual(
		"agentId clearRemoveHook clearRemoveHookByReference handleId maxX maxY minX minY onRemove rectId remove".split( " " ),
	);

	expect( rect.minX ).toEqual( - 2 );
	expect( rect.minY ).toEqual( - 1 );
	expect( rect.maxX ).toEqual( 2 );
	expect( rect.maxY ).toEqual( 1 );

} );
