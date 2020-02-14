
import { promises as fs } from "fs";
import { Game } from "./Game";

it( "#loadData", async () => {

	const game = new Game();

	const [ w3u, wts ] = await Promise.all( [
		fs.readFile( "src/test/data/war3map.w3u" ),
		fs.readFile( "src/test/data/war3map.wts" ),
	] );

	game.loadData( { w3u, wts } );

	expect( game.data.units.hfoo.text?.Name ).toEqual( "Footman" );
	expect( game.data.units.uC04.text?.Name ).toEqual( "Sheep" );

} );
