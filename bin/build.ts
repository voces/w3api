
import glob from "fast-glob";
import { promises as fs } from "fs";
import path from "path";

glob( [ "dist/api/**/*.ts" ], { dot: true } ).then( async ( files: Array<string> ) => {

	const types: Array<string> = [];

	await Promise.all( files.map( async file => {

		const content = await fs.readFile( file, "utf-8" );
		types.push( content.replace( /export declare /g, "declare " ).replace( /export.*/g, "" ) );

	} ) );

	fs.writeFile(
		path.join( "dist", "api", "types.d.ts" ),
		types.join( "\n" ).replace( /\n\n+/g, "\n" ),
	);

} );
