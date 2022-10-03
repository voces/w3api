import { readFileSync } from "fs";
import { parseFdf, tokenizeFdf } from "./fdf";

describe("tokenize", () => {
  it("two simple frames", () => {
    expect(tokenizeFdf(`
Frame "TEXT" "SmallText" {
    DecorateFileNames,
    FrameFont "MasterFont", 0.008, "",
}

Frame "TEXT" "DefaultText" {
    DecorateFileNames,
    FrameFont "MasterFont", 0.010, "",
}

`)).toEqual([
      { type: "newline", content: "\n", index: 0 },

      { type: "id", content: "Frame", index: 1 },
      { type: "string", content: '"TEXT"', index: 7 },
      { type: "string", content: '"SmallText"', index: 14 },
      { type: "lcurl", content: "{", index: 26 },
      { type: "newline", content: "\n", index: 27 },
      { type: "id", content: "DecorateFileNames", index: 32 },
      { type: "comma", content: ",", index: 49 },
      { type: "newline", content: "\n", index: 50 },
      { type: "id", content: "FrameFont", index: 55 },
      { type: "string", content: '"MasterFont"', index: 65 },
      { type: "comma", content: ",", index: 77 },
      { type: "number", content: "0.008", index: 79 },
      { type: "comma", content: ",", index: 84 },
      { type: "string", content: '""', index: 86 },
      { type: "comma", content: ",", index: 88 },
      { type: "newline", content: "\n", index: 89 },
      { type: "rcurl", content: "}", index: 90 },
      { type: "newline", content: "\n\n", index: 91 },

      { type: "id", content: "Frame", index: 93 },
      { type: "string", content: '"TEXT"', index: 99 },
      { type: "string", content: '"DefaultText"', index: 106 },
      { type: "lcurl", content: "{", index: 120 },
      { type: "newline", content: "\n", index: 121 },
      { type: "id", content: "DecorateFileNames", index: 126 },
      { type: "comma", content: ",", index: 143 },
      { type: "newline", content: "\n", index: 144 },
      { type: "id", content: "FrameFont", index: 149 },
      { type: "string", content: '"MasterFont"', index: 159 },
      { type: "comma", content: ",", index: 171 },
      { type: "number", content: "0.010", index: 173 },
      { type: "comma", content: ",", index: 178 },
      { type: "string", content: '""', index: 180 },
      { type: "comma", content: ",", index: 182 },
      { type: "newline", content: "\n", index: 183 },
      { type: "rcurl", content: "}", index: 184 },

      { type: "newline", content: "\n\n", index: 185 },
    ]);
  });

  it("multiline comments", () => {
    expect(tokenizeFdf(`
/*
 * Some long comment string
 */
`)).toEqual([
      { type: "newline", content: "\n", index: 0 },
      {
        type: "comment",
        content: "/*\n * Some long comment string\n */",
        index: 1,
      },
      { type: "newline", content: "\n", index: 35 },
    ]);
  });

  it("comments", () => {
    expect(tokenizeFdf("// single line comment")).toEqual([
      { type: "comment", content: "// single line comment", index: 0 },
    ]);
  });

  it("weird numbers", () => {
    expect(tokenizeFdf("-.1f")).toEqual([
      { type: "number", content: "-.1f", index: 0 },
    ]);
  });
});

describe("parseFdf", () => {
  it("simple frame", () => {
    expect(
      parseFdf(`
Frame "TEXT" "SmallText" {
    DecorateFileNames,
    FrameFont "MasterFont", 0.008, "",
}`).frames[0],
    ).toEqual({
      type: "TEXT",
      name: "SmallText",
      properties: [{ name: "DecorateFileNames" }, {
        name: "FrameFont",
        args: ["MasterFont", 0.008, ""],
      }],
    });
  });

  it("include", () => {
    const fdf = parseFdf(
      `IncludeFile "UI\\FrameDef\\Glue\\StandardTemplates.fdf",`,
    );

    expect(fdf.includes).toEqual(["UI\\FrameDef\\Glue\\StandardTemplates.fdf"]);
  });

  it("simple frames without names", () => {
    const fdf = parseFdf(`
Frame "SIMPLEFRAME" "ConsoleUI" {
  Texture {
  }
}`);

    expect(fdf.frames[0]).toEqual({
      type: "SIMPLEFRAME",
      name: "ConsoleUI",
      children: [{ type: "TEXTURE", name: "" }],
    });
  });

  it("top level simple frames", () => {
    const fdf = parseFdf(`
  Texture "MiniMapSignalButtonEnabled" {
  }`);

    expect(fdf.frames[0]).toEqual({
      type: "TEXTURE",
      name: "MiniMapSignalButtonEnabled",
    });
  });

  it("comment on same line of property", () => {
    const fdf = parseFdf(`
Texture {
  Text "A Quest", // should be filled in by game code...
}`);

    expect(fdf.frames[0]).toEqual({
      type: "TEXTURE",
      name: "",
      properties: [{ name: "Text", args: ["A Quest"] }],
    });
  });

  it("string list", () => {
    const fdf = parseFdf(`
StringList {

  AGILITY                         "Agility",
  AGILITY_2                 "Multi
Line",

}`);

    expect(fdf.strings).toEqual({
      AGILITY: "Agility",
      AGILITY_2: "Multi\nLine",
    });
  });
});
