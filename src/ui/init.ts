import {
  FRAMEPOINT_BOTTOMLEFT,
  ORIGIN_FRAME_GAME_UI,
} from "../api/common/constants/customUiApi";
import {
  BlzCreateFrame,
  BlzFrameSetAbsPoint,
  BlzFrameSetSize,
} from "../api/common/ui/frames";
import { wrapGame } from "../Game";
import { adapter } from "./adapter";

export const initUI = wrapGame(() => {
  const gameUI = BlzCreateFrame(
    // TODO: grab the actual name
    "ORIGIN_FRAME_GAME_UI",
    null as unknown as framehandle,
    0,
    0,
  );
  adapter.markOrigin(gameUI, ORIGIN_FRAME_GAME_UI);
  BlzFrameSetAbsPoint(gameUI, FRAMEPOINT_BOTTOMLEFT, 0, 0);
  BlzFrameSetSize(gameUI, 0.8, 0.6);
});
