import type { Game } from "../Game";
import { load } from "./load";

type Token = {
  type:
    | "newline"
    | "string"
    | "id"
    | "whitespace"
    | "lcurl"
    | "rcurl"
    | "comma"
    | "number"
    | "comment";
  content: string;
  index: number;
};

export const tokenizeFdf = (
  contents: string,
): Token[] => {
  const tokens: Token[] = [];
  let index = 0;

  const testAddAndAdvance = (name: Token["type"], regexp: RegExp) => {
    regexp.lastIndex = index;
    const results = regexp.exec(contents);
    if (results) {
      if (name !== "whitespace") {
        tokens.push({ type: name, content: results[0], index });
      }
      index += results[0].length;

      return true;
    }
    return false;
  };

  while (index < contents.length) {
    if (testAddAndAdvance("newline", /(?:\r?\n)+/y)) continue;
    if (testAddAndAdvance("string", /"[^"]*"/y)) continue;
    if (testAddAndAdvance("id", /[A-Za-z][A-Za-z0-9_]*/y)) continue;
    if (testAddAndAdvance("whitespace", /[ \t]+/y)) continue;
    if (testAddAndAdvance("lcurl", /\{/y)) continue;
    if (testAddAndAdvance("rcurl", /\}/y)) continue;
    if (testAddAndAdvance("comma", /\,/y)) continue;
    if (testAddAndAdvance("number", /-?(?:\d+(?:\.\d*)?|\.\d+)f?/y)) continue;
    if (testAddAndAdvance("comment", /(?:\/\*[\s\S]*?\*\/|\/\/.*)/y)) continue;

    throw new Error(`Unknown part: ${contents.slice(index, index + 100)}`);
  }

  return tokens;
};

type FdfId = {
  type: "FdfId";
  name: string;
};

export type FdfArg = string | number | FdfId;

type FdfProperty = {
  name: string;
  args?: ReadonlyArray<FdfArg>;
};

export type FdfFrame = {
  type: string;
  name: string;
  inherits?: string;
  inheritsChildren?: true;
  properties?: FdfProperty[];
  children?: FdfFrame[];
};

type Context = {
  index: number;
  tokens: Token[];
};

const peek = (context: Context) => context.tokens[context.index];

const parseSingleToken = (context: Context, token: Token["type"]) => {
  const next = peek(context);
  if (next.type === token) {
    return context.tokens[context.index++];
  }
  throw new Error(
    `Expected ${token}, got ${JSON.stringify(next)}`,
  );
};

const parseProperty = (context: Context): FdfProperty => {
  const name = parseSingleToken(context, "id");
  const args: FdfArg[] = [];

  const property: FdfProperty = {
    name: name.content,
  };

  while (peek(context).type !== "newline") {
    const token = context.tokens[context.index++];
    if (token.type === "string") args.push(token.content.slice(1, -1));
    else if (token.type === "id") {
      args.push({ type: "FdfId", name: token.content });
    } else if (token.type === "number") args.push(parseFloat(token.content));
    else if (token.type == "comma" || token.type === "comment") {}
    else {throw new Error(
        `Unexpected token when parsing property: ${JSON.stringify(token)}`,
      );}
  }

  if (args.length) property.args = args;

  return property;
};

const eat = (context: Context) => {
  while (
    context.index < context.tokens.length &&
    ["comment", "newline"].includes(
      peek(context).type,
    )
  ) parseSingleToken(context, peek(context).type);
};

const parseFrameBody = (context: Context) => {
  const properties: FdfProperty[] = [];
  const children: FdfFrame[] = [];
  parseSingleToken(context, "lcurl");
  while (peek(context).type !== "rcurl") {
    eat(context);

    const next = peek(context);
    if (next.type === "rcurl") break;

    if (
      next.type === "id" &&
      ["Frame", "Texture", "String", "Layer"].includes(next.content)
    ) {
      children.push(parseFrame(context));
    } else properties.push(parseProperty(context));
  }
  parseSingleToken(context, "rcurl");

  return [properties, children] as const;
};

const parseFrameOpening = (context: Context): FdfFrame => {
  const opening = parseSingleToken(context, "id");

  if (opening.content === "Frame") {
    return {
      type: parseSingleToken(context, "string").content.slice(1, -1),
      name: parseSingleToken(context, "string").content.slice(1, -1),
    };
  }

  return {
    type: opening.content.toUpperCase(),
    name: peek(context).type === "string"
      ? parseSingleToken(context, "string").content.slice(1, -1)
      : "",
  };
};

const parseFrame = (context: Context): FdfFrame => {
  const frame = parseFrameOpening(context);

  if (peek(context).type === "id" && peek(context).content === "INHERITS") {
    parseSingleToken(context, "id");

    if (
      peek(context).type === "id" && peek(context).content === "WITHCHILDREN"
    ) {
      frame.inheritsChildren = true;
      parseSingleToken(context, "id");
    }

    frame.inherits = parseSingleToken(context, "string").content.slice(1, -1);
  }

  const [properties, children] = parseFrameBody(context);

  if (properties.length) frame.properties = properties;
  if (children.length) frame.children = children;

  return frame;
};

const parseInclude = (context: Context) => {
  parseSingleToken(context, "id");
  const path = parseSingleToken(context, "string").content.slice(1, -1);
  parseSingleToken(context, "comma");
  return path;
};

const parseStrings = (context: Context) => {
  parseSingleToken(context, "id");

  const strings: Record<string, string> = {};
  parseSingleToken(context, "lcurl");

  while (peek(context).type !== "rcurl") {
    eat(context);
    if (peek(context).type === "rcurl") break;

    strings[parseSingleToken(context, "id").content] = parseSingleToken(
      context,
      "string",
    ).content.slice(1, -1);
    parseSingleToken(context, "comma");
  }

  parseSingleToken(context, "rcurl");

  return strings;
};

export const parseFdf = (
  contents: string,
): {
  frames: FdfFrame[];
  includes: string[];
  strings: Record<string, string>;
} => {
  const frames: FdfFrame[] = [];
  const includes: string[] = [];
  const strings: Record<string, string> = {};
  const context = { index: 0, tokens: tokenizeFdf(contents) };

  while (context.index < context.tokens.length) {
    eat(context);
    if (context.index === context.tokens.length) break;

    const next = peek(context);
    if (["Frame", "Texture", "String", "Layer"].includes(next.content)) {
      frames.push(parseFrame(context));
    } else if (next.content === "IncludeFile") {
      includes.push(parseInclude(context));
    } else if (next.content === "StringList") {
      Object.assign(strings, parseStrings(context));
    } else {
      throw new Error(
        `Expected Frame or IncludeFile, got ${JSON.stringify(next)}`,
      );
    }
  }

  return { frames, includes, strings };
};

export const loadFdf = (game: Game, contents: string) => {
  try {
    const { frames, includes } = parseFdf(contents);
    Object.assign(
      game.frameDefs,
      Object.fromEntries(
        frames.map((frame) => [frame.name, frame]),
      ),
    );
    includes.forEach((path) => {
      if (game.loadedFdfs.has(path.toLowerCase())) return;
      game.loadedFdfs.add(path.toLowerCase());
      const contents = load(path);
      if (!contents) throw new Error(`Could not load include: ${path}`);
      loadFdf(game, contents);
    });
  } catch (err) {
    console.log(contents);
    console.error(err);
  }
};
