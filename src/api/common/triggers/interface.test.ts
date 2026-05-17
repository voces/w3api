import { CreateTrigger } from "./interface.js";

it("CreateTrigger", () =>
  expect(CreateTrigger()).toMatchObject({ triggerId: 0 }));
