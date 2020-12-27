/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
globalThis.tonumber = parseFloat;

// @ts-ignore
globalThis.string = {
	gsub: (
		s: string,
		pattern: string,
		repl:
			| string
			| Record<string, string>
			| string
			| Record<string, string>
			| ((...matches: string[]) => string),
		n?: number,
	): [string, number] => {
		if (typeof repl !== "string")
			throw new Error("non-string `repl` on string.gsub not implemented");

		return [s.replace(new RegExp(pattern, "g"), repl), n ?? 0];
	},
	pack: (format: string, ...strings: string[]) =>
		format + "|strings" + strings.join("|strbrk"),
	unpack: (format: string, string: string, pos?: number) =>
		string
			.split("|strings")[0]
			.slice(pos ?? 0)
			.split("|strbrk"),
	byte: (str: string, index: number) => str.charCodeAt(index - 1),
};

// @ts-ignore
globalThis.os = {
	clock: () => performance.now() / 1000,
};

// eslint-disable-next-line no-console
globalThis.print = console.log;

// @ts-ignore
globalThis.math = {
	min: Math.min,
	max: Math.max,
};
