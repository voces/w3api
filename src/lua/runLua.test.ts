import { promises as fs } from "fs";
import { runLua } from "./runLua";

describe("smoke", () => {
  beforeEach(() => {
    Reflect.set(globalThis, "gg_rct_Pen", null);
  });

  it("fixus", async () => {
    const luaCode = await fs.readFile("src/test/data/war3map.lua", "utf-8");

    runLua(luaCode);
  });

  afterEach(() => {
    Reflect.deleteProperty(globalThis, "gg_rct_Pen");
  });
});
