/* eslint-disable @typescript-eslint/no-unused-vars */

import { notImplemented } from "../../errors";
import { wrapGame } from "../../Game";
import { contextIndexer, getAgent } from "../../handles";

// ============================================================================
// Region and Location API
//

const isPointInRect = (x: number, y: number, rect: rect) =>
	x >= rect.minX && x <= rect.maxX && y >= rect.minY && y <= rect.maxY;

export const Rect = contextIndexer(
	(id, minx: number, miny: number, maxx: number, maxy: number): rect => ({
		...getAgent(),
		rectId: id,
		minX: minx,
		minY: miny,
		maxX: maxx,
		maxY: maxy,
	}),
);
export const RectFromLoc = (min: location, max: location): rect =>
	Rect(min.x, min.y, max.x, max.y);
export const RemoveRect = (whichRect: rect): void => whichRect.remove();
export const SetRect = (
	whichRect: rect,
	minx: number,
	miny: number,
	maxx: number,
	maxy: number,
): void => {
	Object.assign(whichRect, {
		minX: minx,
		minY: miny,
		maxX: maxx,
		maxY: maxy,
	});
};
export const SetRectFromLoc = (
	whichRect: rect,
	min: location,
	max: location,
): void => SetRect(whichRect, min.x, min.y, max.x, max.y);
export const GetRectCenterX = (whichRect: rect): number =>
	(whichRect.minX + whichRect.maxX) / 2;
export const GetRectCenterY = (whichRect: rect): number =>
	(whichRect.minY + whichRect.maxY) / 2;
export const MoveRectTo = (
	whichRect: rect,
	newCenterX: number,
	newCenterY: number,
): void => {
	const offsetX = newCenterX - GetRectCenterX(whichRect);
	const offsetY = newCenterY - GetRectCenterY(whichRect);

	SetRect(
		whichRect,
		whichRect.minX + offsetX,
		whichRect.minY + offsetY,
		whichRect.maxX + offsetX,
		whichRect.maxY + offsetY,
	);
};
export const MoveRectToLoc = (whichRect: rect, newCenterLoc: location): void =>
	MoveRectTo(whichRect, newCenterLoc.x, newCenterLoc.y);
export const GetRectMinX = (whichRect: rect): number => whichRect.minX;
export const GetRectMinY = (whichRect: rect): number => whichRect.minY;
export const GetRectMaxX = (whichRect: rect): number => whichRect.maxX;
export const GetRectMaxY = (whichRect: rect): number => whichRect.maxY;

export const Location = contextIndexer(
	(id: number, x: number, y: number): location => ({
		...getAgent(),
		locationId: id,
		x,
		y,
	}),
);
export const RemoveLocation = (whichLocation: location): void =>
	whichLocation.remove();
export const MoveLocation = (
	whichLocation: location,
	newX: number,
	newY: number,
): void => {
	Object.assign(whichLocation, { x: newX, y: newY });
};
export const GetLocationX = (whichLocation: location): number =>
	whichLocation.x;
export const GetLocationY = (whichLocation: location): number =>
	whichLocation.y;
// This function is asynchronous. The values it returns are not guaranteed synchronous between each player.
//  If you attempt to use it in a synchronous manner, it may cause a desync.
export const GetLocationZ = (whichLocation: location): number => {
	notImplemented("GetLocationZ");
	return 0;
};

// todo: test how regions work: if I add a global rect, clear a subrect, is that a hole?
export const CreateRegion = wrapGame(
	contextIndexer(
		(id, game): region => {
			const enterListeners: Array<(unit: unit) => void> = [];
			const enterListenersMap: WeakMap<
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				any,
				(unit: unit) => void
			> = new WeakMap();
			const units: Set<unit> = new Set();

			const region: region = {
				...getAgent(),
				regionId: id,
				addEnterListener: (
					callback: (unit: unit) => void,
					reference,
				): void => {
					enterListeners.push(callback);
					if (reference) enterListenersMap.set(reference, callback);
				},
				addUnit(unit: unit): void {
					units.add(unit);
					enterListeners.forEach((cb) => cb(unit));
					unit.onRemove(() => {
						units.delete(unit);
					}, this);
				},
				rects: [],
			};
			game.regions.add(region);
			region.onRemove(() => game.regions.delete(region));
			return region;
		},
	),
);
export const RemoveRegion = (whichRegion: region): void => whichRegion.remove();
export const RegionAddRect = (whichRegion: region, r: rect): void => {
	notImplemented("RegionAddRect");
	whichRegion.rects.push(r);
};
export const RegionClearRect = (whichRegion: region, r: rect): void => {
	notImplemented("RegionClearRect");
};
export const RegionAddCell = (
	whichRegion: region,
	x: number,
	y: number,
): void => {
	notImplemented("RegionAddCell");
};
export const RegionAddCellAtLoc = (
	whichRegion: region,
	whichLocation: location,
): void => {
	notImplemented("RegionAddCellAtLoc");
};
export const RegionClearCell = (
	whichRegion: region,
	x: number,
	y: number,
): void => {
	notImplemented("RegionClearCell");
};
export const RegionClearCellAtLoc = (
	whichRegion: region,
	whichLocation: location,
): void => {
	notImplemented("RegionClearCellAtLoc");
};

export const IsLocationInRegion = (
	whichRegion: region,
	whichLocation: location,
): boolean => {
	notImplemented("IsLocationInRegion");
	return false;
};
export const IsUnitInRegion = (
	whichRegion: region,
	whichUnit: unit,
): boolean => {
	notImplemented("IsUnitInRegion");
	return false;
};
export const IsPointInRegion = (
	whichRegion: region,
	x: number,
	y: number,
): boolean => {
	notImplemented("IsPointInRegion");
	return whichRegion.rects.some((r) => isPointInRect(x, y, r));
};
