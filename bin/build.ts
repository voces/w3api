
import { print, types, visit } from "recast";
import { parse } from "recast/parsers/typescript";
import glob from "fast-glob";
import { promises as fs } from "fs";
import path from "path";

const b = types.builders;

const scopeVariableAlias = "___scope";

glob( [ "src/**/*.ts" ], { dot: true } ).then( async ( files: Array<string> ) => {

	if ( ! await fs.stat( "dist" ).catch( () => false ) )
		await fs.mkdir( "dist" );

	files.forEach( async file => {

		const ast = parse(
			await fs.readFile( file, "utf-8" ),
			// { parser: typescriptParser },
		);

		let scopeInjected = false;

		// console.log( file );
		if ( file.startsWith( "src/api" ) )
			visit( ast, {
				visitExportNamedDeclaration( path ) {

					const identifier = path.get( "declaration", "declarations", 0, "id", "name" );
					const name = identifier.value;

					// implementation
					const implementation = path.get( "declaration" ).node;

					if ( implementation.type !== "VariableDeclaration" ) {

						this.traverse( path );
						return;

					}

					implementation.declarations[ 0 ].id.name = "_" + name;
					path.replace( implementation );

					// inject scope if not yet injected
					if ( ! scopeInjected ) {

						scopeInjected = true;
						const scopeIdentifier = b.identifier( scopeVariableAlias );
						scopeIdentifier.typeAnnotation = b.tsTypeAnnotation( b.tsAnyKeyword() );
						const globalAlias = b.variableDeclaration( "const", [
							b.variableDeclarator(
								scopeIdentifier,
								b.identifier( "globalThis" ),
							),
						] );
						path.insertBefore( globalAlias );

					}

					// global scope augmentation
					path.insertAfter( b.expressionStatement( b.assignmentExpression(
						"=",
						b.memberExpression( b.identifier( scopeVariableAlias ), b.identifier( name ) ),
						b.identifier( "_" + name ),
					) ) );

					// global declaration
					const declarationIdentifier = b.identifier( name );
					declarationIdentifier.typeAnnotation = b.tsTypeAnnotation( b.tsTypeQuery(
						b.identifier( "_" + name ),
					) );
					const declaration = b.variableDeclaration( path.value.kind, [
						b.variableDeclarator(
							declarationIdentifier,
						),
					] );
					// Can't find a type to do this for us, but w/e
					// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-extra-parens
					( declaration as any ).declare = true;
					path.insertAfter( declaration );

					this.traverse( path );

				},
			} );

		await fs.mkdir( path.dirname( file.replace( /^src/, "dist" ) ), { recursive: true } );
		fs.writeFile(
			file.replace( /^src/, "dist" ),
			print( ast ).code,
		);

	} );

} );
