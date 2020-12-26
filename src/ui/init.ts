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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const nullFrameHandle = (null as any) as framehandle;

export const initUI = wrapGame(() => {
	const gameUI = BlzCreateFrame(
		// TODO: grab the actual name
		"ORIGIN_FRAME_GAME_UI",
		nullFrameHandle,
		0,
		0,
	);
	adapter.markOrigin(gameUI, ORIGIN_FRAME_GAME_UI);
	BlzFrameSetAbsPoint(gameUI, FRAMEPOINT_BOTTOMLEFT, 0, 0);
	BlzFrameSetSize(gameUI, 0.8, 0.6);
});
