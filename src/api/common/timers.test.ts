import { gameContext } from "../../contexts";
import { Game, wrapGame } from "../../Game";
// import { CreateTimer, TimerStart } from "./timers";

it("smoke", () =>
  gameContext.withTemp(
    wrapGame((game: Game) => {
      //   const timer1 = CreateTimer();
      //   let timer1Counter = 0;
      //   const timer2 = CreateTimer();
      //   let timer2Counter = 0;
      //   const timer3 = CreateTimer();
      //   let timer3Counter = 0;

      //   TimerStart(timer1, 1 / 4, true, () => timer1Counter++);
      //   game.tick(0.4);
      //   TimerStart(timer2, 1 / 2, false, () => timer2Counter++);
      //   TimerStart(timer3, 3 / 4, true, () => timer3Counter++);
      //   game.tick(1.6);

      //   expect(timer1Counter).toBe(8);
      //   expect(timer2Counter).toBe(1);
      //   expect(timer3Counter).toBe(2);
    }),
  ));
