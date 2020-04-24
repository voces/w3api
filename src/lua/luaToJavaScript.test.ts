
import { luaToJavaScript } from "./luaToJavaScript";

const trimEmptyLines = ( str: string ): string => {

	const lines = str.split( "\n" );

	let start = 0;
	while ( start < lines.length && lines[ start ].trim() === "" )
		start ++;

	if ( start === lines.length ) return "";

	let end = lines.length - 1;
	while ( end >= 0 && lines[ end ].trim() === "" )
		end --;

	if ( end === - 1 ) return "";

	return lines.slice( start, end + 1 ).join( "\n" );

};

const trim = ( str: string ): string => {

	const lines = trimEmptyLines( str );
	const match = lines.match( /^\W+/ );
	if ( match ) {

		const indent = match[ 0 ];
		const regex = new RegExp( "^" + indent );
		return lines
			.split( "\n" )
			.map( line => line.replace( regex, "" ) )
			.join( "\n" );

	}

	return lines;

};

it( "smoke", () => {

	const lua = trim( `
        function CreateRegions()
            local we
            gg_rct_Pen = Rect(-640.0, -1280.0, 128.0, -448.0)
            SetCameraBounds(-5760.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), -5760.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM), 5504.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), 4352.0 - GetCameraMargin(CAMERA_MARGIN_TOP), -5760.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), 4352.0 - GetCameraMargin(CAMERA_MARGIN_TOP), 5504.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), -5760.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM))
            SetMapMusic("Music", true, 0)
        end` );

	const javaScript = trim( `
        const CreateRegions = () => {

            let we = undefined;
            gg_rct_Pen = Rect( -640.0, -1280.0, 128.0, -448.0 );
            SetCameraBounds( -5760.0 + GetCameraMargin( CAMERA_MARGIN_LEFT ), -5760.0 + GetCameraMargin( CAMERA_MARGIN_BOTTOM ), 5504.0 - GetCameraMargin( CAMERA_MARGIN_RIGHT ), 4352.0 - GetCameraMargin( CAMERA_MARGIN_TOP ), -5760.0 + GetCameraMargin( CAMERA_MARGIN_LEFT ), 4352.0 - GetCameraMargin( CAMERA_MARGIN_TOP ), 5504.0 - GetCameraMargin( CAMERA_MARGIN_RIGHT ), -5760.0 + GetCameraMargin( CAMERA_MARGIN_BOTTOM ) );
            SetMapMusic( "Music", true, 0 );

        };` ).replace( / {4}/g, "\t" );

	expect( luaToJavaScript( lua ) ).toEqual( javaScript );

} );
