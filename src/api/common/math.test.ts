
import { Deg2Rad, Rad2Deg } from "./math";

it( "Deg2Rad", () => expect( [
	0, 30, 45, 90, 180, 270, - 180, 360,
].map( Deg2Rad ) ).toEqual( [
	0, Math.PI / 6, Math.PI / 4, Math.PI / 2, Math.PI, Math.PI * 1.5, - Math.PI, Math.PI * 2,
] ) );

it( "Rad2Deg", () => expect( [
	0, Math.PI / 4, Math.PI / 2, Math.PI, Math.PI * 1.5, - Math.PI, Math.PI * 2,
].map( Rad2Deg ) ).toEqual( [
	0, 45, 90, 180, 270, - 180, 360,
] ) );
