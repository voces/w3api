
// ============================================================================
// String Utility API
export const I2R = ( i: number ): number => i;
export const R2I = ( r: number ): number => Math.floor( r );
export const I2S = ( i: number ): string => i.toString();
export const R2S = ( r: number ): string => r.toString();
export const R2SW = ( r: number, width: number, precision: number ): string => r.toFixed( precision );
export const S2I = ( s: string ): number => parseInt( s );
export const S2R = ( s: string ): number => parseFloat( s );
export const GetHandleId = ( h: handle ): number => h.handleId;
// todo: verify this is correct
export const SubString = ( source: string, start: number, end: number ): string => source.slice( start - 1, end - 1 );
export const StringLength = ( s: string ): number => s.length;
export const StringCase = ( source: string, upper: boolean ): string => upper ? source.toUpperCase() : source.toLowerCase();
// todo: match wc3; this is just stolen from https://stackoverflow.com/a/7616484
export const StringHash = ( s: string ): number => {

	let hash = 0;
	if ( s.length === 0 ) return hash;
	for ( let i = 0; i < s.length; i ++ ) {

		const chr = s.charCodeAt( i );
		hash = ( hash << 5 ) - hash + chr;
		hash |= 0; // Convert to 32bit integer

	}
	return hash;

};

// todo: investigate what these should actually do
export const GetLocalizedString = ( source: string ): string => source;
export const GetLocalizedHotkey = ( source: string ): number => source.charCodeAt( 0 );

export const FourCC = ( four: string ): number =>
	four.charCodeAt( 0 ) * 256 ** 3 +
	four.charCodeAt( 1 ) * 256 ** 2 +
	four.charCodeAt( 2 ) * 256 +
	four.charCodeAt( 3 );

