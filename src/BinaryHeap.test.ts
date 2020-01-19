
import { BinaryHeap } from "./BianryHeap";

it( "smoke", () => {

	const values: Array<number> = [];

	const bh = new BinaryHeap( ( i: number ) => i );
	bh.push( 7 );
	bh.push( 3 );
	bh.pop();
	bh.push( 13 );
	bh.push( 4 );
	bh.remove( 7 );
	bh.push( 5 );
	bh.pop();
	bh.push( 15 );
	bh.remove( 4 );
	bh.push( 3 );
	bh.remove( 13 );
	bh.push( 14 );
	bh.remove( 4 );
	bh.push( 13 );

	expect( bh.size ).toBe( 5 );

	while ( bh.size ) values.push( bh.pop() );
	expect( values ).toEqual( [ 3, 5, 13, 14, 15 ] );

} );
