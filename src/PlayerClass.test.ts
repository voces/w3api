import { getPlayer } from "./PlayerClass";

it("getPlayer", () => {
  const player0First = getPlayer(0);
  const player0Second = getPlayer(0);
  const player1First = getPlayer(1);
  const player0Third = getPlayer(0);
  const player1Second = getPlayer(1);

  expect(player0First).toBe(player0Second);
  expect(player0First).toBe(player0Third);
  expect(player0First).not.toBe(player1First);
  expect(player1First).toBe(player1Second);
});
