import { GetTeams } from "./mapApi";

describe("Set/GetTeams", () => {
  it("run one", () => {
    expect(GetTeams()).toEqual(1);
  });
});
