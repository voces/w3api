
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const notImplemented = ( func: string ): void => {

	throw new Error( `\`${func}\` not implemented` );

};
