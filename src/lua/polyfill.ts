Reflect.set(globalThis, "tonumber", parseFloat);

Reflect.set(globalThis, "string", {
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
    if (typeof repl !== "string") {
      throw new Error("non-string `repl` on string.gsub not implemented");
    }

    return [s.replace(new RegExp(pattern, "g"), repl), n ?? 0];
  },
  pack: (format: string, ...strings: string[]) =>
    format + "|strings" + strings.join("|strbrk"),
  // deno-lint-ignore no-unused-vars
  unpack: (format: string, string: string, pos?: number) =>
    string
      .split("|strings")[1]
      .slice(pos ?? 0)
      .split("|strbrk"),
  byte: (str: string, index: number) => str.charCodeAt(index - 1),
});

Reflect.set(globalThis, "os", {
  clock: () => performance.now() / 1000,
});

Reflect.set(globalThis, "print", console.log);

Reflect.set(globalThis, "math", {
  min: Math.min,
  max: Math.max,
});
