const frameMap = new Map<HTMLElement, framehandle>();
const nodeMap = new Map<framehandle, HTMLElement>();

const resolveX = (side: framehandle["pos"]["left"]): number | undefined => {
	if (side === undefined) return undefined;
	if (typeof side === "number") return side;
	const relX = resolveX(side.relative[side.relativeSide]);
	if (relX === undefined) return undefined;
	return relX + side.xOffset;
};

const resolveY = (side: framehandle["pos"]["top"]): number | undefined => {
	if (side === undefined) return undefined;
	if (typeof side === "number") return side;
	const relY = resolveY(side.relative[side.relativeSide]);
	if (relY === undefined) return undefined;
	return relY + side.yOffset;
};

const getSize = (
	frame: framehandle,
): { width: number | undefined; height: number | undefined } => {
	const widthFrom =
		frame.pos.left !== undefined && frame.pos.right !== undefined
			? "points"
			: frame.width
			? "explicit"
			: "implicit";
	let width: number | undefined;
	if (widthFrom === "explicit") width = frame.width;
	else if (widthFrom === "points")
		width = resolveX(frame.pos.right)! - resolveX(frame.pos.left)!;
	else if (widthFrom === "implicit") width = nodeMap.get(frame)?.clientWidth;

	const heightFrom =
		frame.pos.top !== undefined && frame.pos.bottom !== undefined
			? "points"
			: frame.height
			? "explicit"
			: "implicit";
	let height: number | undefined;
	if (heightFrom === "explicit") height = frame.height;
	else if (heightFrom === "points")
		height = resolveY(frame.pos.top)! - resolveY(frame.pos.bottom)!;
	else if (heightFrom === "implicit")
		height = nodeMap.get(frame)?.clientHeight;

	return { width, height };
};

const getYAnchor = (frame: framehandle, height?: number) => {
	let top: number | undefined;
	if (frame.pos.top !== undefined) top = resolveY(frame.pos.top);
	else if (frame.pos.bottom !== undefined && height !== undefined)
		top = resolveY(frame.pos.bottom)! + height;

	if (top !== undefined) return { top };

	let bottom: number | undefined;
	if (frame.pos.bottom !== undefined) bottom = resolveY(frame.pos.bottom);
	else if (frame.pos.top !== undefined && height !== undefined)
		bottom = resolveY(frame.pos.top)! + height;

	if (bottom !== undefined) return { bottom };
};

const getXAnchor = (frame: framehandle, width?: number) => {
	let left: number | undefined;
	if (frame.pos.left !== undefined) left = resolveY(frame.pos.left);
	else if (frame.pos.right !== undefined && width !== undefined)
		left = resolveY(frame.pos.right)! + width;
	if (left !== undefined) return { left };

	let right: number | undefined;
	if (frame.pos.right !== undefined) right = resolveY(frame.pos.right);
	else if (frame.pos.left !== undefined && width !== undefined)
		right = resolveY(frame.pos.left)! + width;
	if (right !== undefined) return { right };
};

const getAnchor = (frame: framehandle, width?: number, height?: number) => ({
	x: getXAnchor(frame, width),
	y: getYAnchor(frame, height),
});

export const getAspectRatio = (): number =>
	globalThis.innerWidth / globalThis.innerHeight;
export const getScale = (): number =>
	(getAspectRatio() > 4 / 3
		? globalThis.innerHeight * (4 / 3)
		: globalThis.innerWidth) * 1.25;
export const getXOffset = (): number => {
	const ar = getAspectRatio();
	if (ar > 4 / 3) return ((ar - 4 / 3) / 2) * globalThis.innerHeight;
	return 0;
};
export const getYOffset = (): number => {
	const ar = getAspectRatio();
	if (ar > 4 / 3) return 0;
	return (globalThis.innerHeight - globalThis.innerWidth * (3 / 4)) / 2;
};

export const wc2px = (y: number): number => y * getScale();

export const wcy2px = (y: number): number => wc2px(0.6 - y) + getYOffset();
export const wcx2px = (x: number): number => wc2px(x) + getXOffset();

export const adapter = {
	createNode: (handle: framehandle, owner?: framehandle): unknown => {
		const div = document.createElement("div");
		div.style.position = "absolute";
		frameMap.set(div, handle);
		nodeMap.set(handle, div);
		if (owner) {
			const ownerNode = nodeMap.get(owner);
			if (ownerNode) ownerNode.appendChild(div);
		}
		return div;
	},
	selectAll: (
		...args: Parameters<typeof document.querySelectorAll>
	): framehandle[] =>
		Array.from(document.querySelectorAll(...args))
			.filter((e): e is HTMLElement => e instanceof HTMLElement)
			.map((e) => frameMap.get(e))
			.filter((h): h is framehandle => !!h),
	markOrigin: (handle: framehandle, origin: originframetype): void => {
		const e = nodeMap.get(handle);
		e?.classList.add(`origin-${origin.originframetypeId}`);
		if (e) document.body.appendChild(e);
	},
	update: (frame: framehandle): void => {
		const { width, height } = getSize(frame);
		const { x, y } = getAnchor(frame, width, height);
		const element = nodeMap.get(frame)!;
		if (x) {
			if (x.left !== undefined)
				element.style.left = wcx2px(x.left) + "px";
			else element.style.left = "";

			if (x.right !== undefined)
				element.style.right = wcx2px(x.right) + "px";
		} else {
			element.style.left = "";
			element.style.right = "";
		}

		if (y) {
			if (y.top !== undefined) element.style.top = wcy2px(y.top) + "px";
			else element.style.top = "";

			if (y.bottom !== undefined)
				element.style.bottom = wcy2px(y.bottom) + "px";
		} else {
			element.style.top = "";
			element.style.bottom = "";
		}

		if (width !== undefined) element.style.width = wc2px(width) + "px";
		if (height !== undefined) element.style.height = wc2px(height) + "px";
	},
};

export type Adapter = typeof adapter;

export const setAdapter = (newAdapter: Adapter): void => {
	Object.assign(adapter, newAdapter);
};
