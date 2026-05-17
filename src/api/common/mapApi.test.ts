import { GetTeams } from "./mapApi.js";

describe("Set/GetTeams", () => {
  it("run one", () => {
    expect(GetTeams()).toEqual(1);
  });
});
