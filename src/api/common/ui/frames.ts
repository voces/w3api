/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import "./common/types";

import { notImplemented } from "../../../errors";
import { contextIndexer, getHandle } from "../../../handles";
import { adapter } from "../../../ui/adapter";
import {
	FRAMEPOINT_BOTTOM,
	FRAMEPOINT_BOTTOMLEFT,
	FRAMEPOINT_BOTTOMRIGHT,
	FRAMEPOINT_LEFT,
	FRAMEPOINT_RIGHT,
	FRAMEPOINT_TOP,
	FRAMEPOINT_TOPLEFT,
	FRAMEPOINT_TOPRIGHT,
} from "../constants";

export const BlzGetOriginFrame = (
	frameType: originframetype,
	index: number,
): framehandle =>
	adapter.selectAll(".origin-" + frameType.originframetypeId)[index];

export const BlzEnableUIAutoPosition = (enable: boolean): void => {};

export const BlzHideOriginFrames = (enable: boolean): void => {};

export const BlzConvertColor = (
	a: number,
	r: number,
	g: number,
	b: number,
): number => a * 255 ** 3 + r * 255 ** 2 + g * 255 + b;

export const BlzLoadTOCFile = (TOCFile: string): boolean => {
	notImplemented("BlzLoadTOCFile", true);
	return false;
};

export const BlzCreateFrame = contextIndexer(
	(
		id,
		name: string,
		owner: framehandle,
		priority: number,
		createContext: number,
	): framehandle => {
		const fh: framehandle = {
			...getHandle(),
			framehandleId: id,
			name,
			owner,
			priority,
			createContext,
			node: null,
			width: 0,
			height: 0,
			pos: {
				left: undefined,
				right: undefined,
				bottom: undefined,
				top: undefined,
			},
		};
		fh.node = adapter.createNode(fh);
		return fh;
	},
);

export const BlzCreateSimpleFrame = (
	name: string,
	owner: framehandle,
	createContext: number,
): framehandle => BlzCreateFrame(name, owner, -1, createContext);

export const BlzCreateFrameByType = (
	typeName: string,
	name: string,
	owner: framehandle,
	inherits: string,
	createContext: number,
): framehandle => {
	const frame = BlzCreateFrame(name, owner, -1, createContext);
	frame.typeName = typeName;
	frame.inherits = inherits;
	return frame;
};

export const BlzDestroyFrame = (frame: framehandle): void => {};

const leftPoints = [FRAMEPOINT_TOPLEFT, FRAMEPOINT_LEFT, FRAMEPOINT_BOTTOMLEFT];
const rightPoints = [
	FRAMEPOINT_TOPRIGHT,
	FRAMEPOINT_RIGHT,
	FRAMEPOINT_BOTTOMRIGHT,
];
const topPoints = [FRAMEPOINT_TOPRIGHT, FRAMEPOINT_TOP, FRAMEPOINT_TOPLEFT];
const bottomPoints = [
	FRAMEPOINT_BOTTOMRIGHT,
	FRAMEPOINT_BOTTOM,
	FRAMEPOINT_BOTTOMLEFT,
];

export const BlzFrameSetPoint = (
	frame: framehandle,
	point: framepointtype,
	relative: framehandle,
	relativePoint: framepointtype,
	x: number,
	y: number,
): void => {
	if (leftPoints.includes(point))
		frame.pos.left = {
			relative,
			relativeSide: leftPoints.includes(relativePoint) ? "left" : "right",
			xOffset: x,
			yOffset: 0,
		};

	if (rightPoints.includes(point))
		frame.pos.right = {
			relative,
			relativeSide: leftPoints.includes(relativePoint) ? "left" : "right",
			xOffset: x,
			yOffset: 0,
		};

	if (topPoints.includes(point))
		frame.pos.top = {
			relative,
			relativeSide: topPoints.includes(relativePoint) ? "top" : "bottom",
			xOffset: 0,
			yOffset: y,
		};

	if (bottomPoints.includes(point))
		frame.pos.bottom = {
			relative,
			relativeSide: topPoints.includes(relativePoint) ? "top" : "bottom",
			xOffset: 0,
			yOffset: y,
		};

	adapter.update(frame);
};

export const BlzFrameSetAbsPoint = (
	frame: framehandle,
	point: framepointtype,
	x: number,
	y: number,
): void => {
	if (leftPoints.includes(point)) frame.pos.left = x;
	if (rightPoints.includes(point)) frame.pos.right = x;
	if (topPoints.includes(point)) frame.pos.top = y;
	if (bottomPoints.includes(point)) frame.pos.bottom = y;

	adapter.update(frame);
};

export const BlzFrameClearAllPoints = (frame: framehandle): void => {
	frame.pos = {
		left: undefined,
		right: undefined,
		bottom: undefined,
		top: undefined,
	};
};

export const BlzFrameSetAllPoints = (
	frame: framehandle,
	relative: framehandle,
): void => {
	["left", "right", "botom", "top"].forEach(
		(side) =>
			(frame.pos[side] =
				typeof relative.pos[side] === "number"
					? relative.pos[side]
					: { ...relative.pos[side] }),
	);
};

export const BlzFrameSetVisible = (
	frame: framehandle,
	visible: boolean,
): void => {};

export const BlzFrameIsVisible = (frame: framehandle): boolean => {
	notImplemented("BlzFrameIsVisible");
	return false;
};

export const BlzGetFrameByName = (
	name: string,
	createContext: number,
): framehandle => adapter.selectAll(name)[createContext];

export const BlzFrameGetName = (frame: framehandle): string => {
	notImplemented("BlzFrameGetName");
	return "";
};

export const BlzFrameClick = (frame: framehandle): void => {};

export const BlzFrameSetText = (frame: framehandle, text: string): void => {};

export const BlzFrameGetText = (frame: framehandle): string => {
	notImplemented("BlzFrameGetText");
	return "";
};

export const BlzFrameAddText = (frame: framehandle, text: string): void => {};

export const BlzFrameSetTextSizeLimit = (
	frame: framehandle,
	size: number,
): void => {};

export const BlzFrameGetTextSizeLimit = (frame: framehandle): number => {
	notImplemented("BlzFrameGetTextSizeLimit");
	return 0;
};

export const BlzFrameSetTextColor = (
	frame: framehandle,
	color: number,
): void => {};

export const BlzFrameSetFocus = (frame: framehandle, flag: boolean): void => {};

export const BlzFrameSetModel = (
	frame: framehandle,
	modelFile: string,
	cameraIndex: number,
): void => {};

export const BlzFrameSetEnable = (
	frame: framehandle,
	enabled: boolean,
): void => {};

export const BlzFrameGetEnable = (frame: framehandle): boolean => {
	notImplemented("BlzFrameGetEnable");
	return false;
};

export const BlzFrameSetAlpha = (frame: framehandle, alpha: number): void => {};

export const BlzFrameGetAlpha = (frame: framehandle): number => {
	notImplemented("BlzFrameGetAlpha");
	return 0;
};

export const BlzFrameSetSpriteAnimate = (
	frame: framehandle,
	primaryProp: number,
	flags: number,
): void => {};

export const BlzFrameSetTexture = (
	frame: framehandle,
	texFile: string,
	flag: number,
	blend: boolean,
): void => {};

export const BlzFrameSetScale = (frame: framehandle, scale: number): void => {};

export const BlzFrameSetTooltip = (
	frame: framehandle,
	tooltip: framehandle,
): void => {};

export const BlzFrameCageMouse = (
	frame: framehandle,
	enable: boolean,
): void => {};

export const BlzFrameSetValue = (frame: framehandle, value: number): void => {};

export const BlzFrameGetValue = (frame: framehandle): number => {
	notImplemented("BlzFrameGetValue");
	return 0;
};

export const BlzFrameSetMinMaxValue = (
	frame: framehandle,
	minValue: number,
	maxValue: number,
): void => {};

export const BlzFrameSetStepSize = (
	frame: framehandle,
	stepSize: number,
): void => {};

export const BlzFrameSetSize = (
	frame: framehandle,
	width: number,
	height: number,
): void => {
	frame.width = width;
	frame.height = height;
	adapter.update(frame);
};

export const BlzFrameSetVertexColor = (
	frame: framehandle,
	color: number,
): void => {};

export const BlzFrameSetLevel = (frame: framehandle, level: number): void => {};

export const BlzFrameSetParent = (
	frame: framehandle,
	parent: framehandle,
): void => {};

export const BlzFrameGetParent = (frame: framehandle): framehandle => {
	notImplemented("BlzFrameGetParent");
	return (null as any) as framehandle;
};

export const BlzFrameGetHeight = (frame: framehandle): number => {
	notImplemented("BlzFrameGetHeight");
	return 0;
};

export const BlzFrameGetWidth = (frame: framehandle): number => {
	notImplemented("BlzFrameGetWidth");
	return 0;
};

export const BlzFrameSetFont = (
	frame: framehandle,
	fileName: string,
	height: number,
	flags: number,
): void => {};

export const BlzFrameSetTextAlignment = (
	frame: framehandle,
	vert: textaligntype,
	horz: textaligntype,
): void => {};

export const BlzTriggerRegisterFrameEvent = (
	whichTrigger: trigger,
	frame: framehandle,
	eventId: frameeventtype,
): event => {
	notImplemented("BlzTriggerRegisterFrameEvent");
	return (null as any) as event;
};

export const BlzGetTriggerFrame = (): framehandle => {
	notImplemented("BlzGetTriggerFrame");
	return (null as any) as framehandle;
};

export const BlzGetTriggerFrameEvent = (): frameeventtype => {
	notImplemented("BlzGetTriggerFrameEvent");
	return (null as any) as frameeventtype;
};

export const BlzGetTriggerFrameValue = (): number => {
	notImplemented("BlzGetTriggerFrameValue");
	return 0;
};

export const BlzGetTriggerFrameText = (): string => {
	notImplemented("BlzGetTriggerFrameText");
	return "";
};
