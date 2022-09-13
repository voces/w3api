import { BlzFrameSetVisible } from "../api";

const frameMap = new Map<HTMLElement, framehandle>();
const nodeMap = new Map<framehandle, HTMLElement>();
// values depend on key
const positionDependencies = new WeakMap<framehandle, Set<framehandle>>();
const reversePositionDependencies = new WeakMap<
  framehandle,
  Set<Set<framehandle>>
>();

const markDeps = (frame: framehandle, side: framehandle["pos"]["left"]) => {
  if (typeof side !== "object") return;
  let deps = positionDependencies.get(side.relative);
  if (!deps) {
    deps = new Set();
    positionDependencies.set(side.relative, deps);
  }
  deps.add(frame);

  let reverseDeps = reversePositionDependencies.get(frame);
  if (!reverseDeps) {
    reverseDeps = new Set();
    reversePositionDependencies.set(frame, reverseDeps);
  }
  reverseDeps.add(deps);
};

const resolveX = (
  frame: framehandle,
  side: framehandle["pos"]["left"],
): number | undefined => {
  if (side === undefined) return undefined;
  if (typeof side === "number") return side;
  if (typeof side.relativeSide === "string") {
    markDeps(frame, side);

    const { width } = getSize(side.relative);
    const xAnchor = getXAnchor(side.relative, width);
    if (!xAnchor) return;
    if (xAnchor.left !== undefined) {
      return (
        xAnchor.left +
        (side.relativeSide === "left" ? 0 : width ?? 0) +
        side.xOffset
      );
    }
    if (xAnchor.right !== undefined) {
      return (
        xAnchor.right -
        (side.relativeSide === "right" ? 0 : width ?? 0) +
        side.xOffset
      );
    }
  }
};

const resolveY = (
  frame: framehandle,
  side: framehandle["pos"]["top"],
): number | undefined => {
  if (side === undefined) return undefined;
  if (typeof side === "number") return side;
  if (typeof side.relativeSide === "string") {
    markDeps(frame, side);

    const { height } = getSize(side.relative);
    const yAnchor = getYAnchor(side.relative, height);
    if (!yAnchor) return;
    if (yAnchor.top !== undefined) {
      return (
        yAnchor.top +
        (side.relativeSide === "top" ? 0 : height ?? 0) +
        side.yOffset
      );
    }
    if (yAnchor.bottom !== undefined) {
      return (
        yAnchor.bottom -
        (side.relativeSide === "bottom" ? 0 : height ?? 0) +
        side.yOffset
      );
    }
  }
};

const getSize = (
  frame: framehandle,
): {
  width: number | undefined;
  height: number | undefined;
  implicitWidth: boolean;
  implicitHeight: boolean;
} => {
  const widthFrom =
    frame.pos.left !== undefined && frame.pos.right !== undefined
      ? "points"
      : frame.width
      ? "explicit"
      : "implicit";
  let width: number | undefined;
  if (widthFrom === "explicit") width = frame.width;
  else if (widthFrom === "points") {
    width = resolveX(frame, frame.pos.right)! -
      resolveX(frame, frame.pos.left)!;
  } else if (widthFrom === "implicit") {
    const pxWidth = nodeMap.get(frame)?.clientWidth;
    width = typeof pxWidth === "number" ? px2wc(pxWidth) : undefined;
  }

  const heightFrom =
    frame.pos.top !== undefined && frame.pos.bottom !== undefined
      ? "points"
      : frame.height
      ? "explicit"
      : "implicit";
  let height: number | undefined;
  if (heightFrom === "explicit") height = frame.height;
  else if (heightFrom === "points") {
    height = resolveY(frame, frame.pos.bottom)! -
      resolveY(frame, frame.pos.top)!;
  } else if (heightFrom === "implicit") {
    const pxHeight = nodeMap.get(frame)?.clientHeight;
    height = typeof pxHeight === "number" ? px2wc(pxHeight) : undefined;
  }

  return {
    width,
    height,
    implicitWidth: widthFrom === "implicit",
    implicitHeight: heightFrom === "implicit",
  };
};

const getYAnchor = (frame: framehandle, height?: number) => {
  let top: number | undefined;
  if (frame.pos.top !== undefined) top = resolveY(frame, frame.pos.top);
  else if (frame.pos.bottom !== undefined && height !== undefined) {
    top = resolveY(frame, frame.pos.bottom)! + height;
  }

  if (top !== undefined) return { top };

  let bottom: number | undefined;
  if (frame.pos.bottom !== undefined) {
    bottom = resolveY(frame, frame.pos.bottom);
  } else if (frame.pos.top !== undefined && height !== undefined) {
    bottom = resolveY(frame, frame.pos.top)! + height;
  }

  if (bottom !== undefined) return { bottom };

  if (frame.pos.center && height !== undefined) {
    if ("y" in frame.pos.center) top = frame.pos.center.y + height / 2;
    if (top !== undefined) return { top };
  }
};

const getXAnchor = (frame: framehandle, width?: number) => {
  let left: number | undefined;
  if (frame.pos.left !== undefined) left = resolveX(frame, frame.pos.left);
  else if (frame.pos.right !== undefined && width !== undefined) {
    left = resolveX(frame, frame.pos.right)! - width;
  }
  if (left !== undefined) return { left };

  let right: number | undefined;
  if (frame.pos.right !== undefined) right = resolveX(frame, frame.pos.right);
  else if (frame.pos.left !== undefined && width !== undefined) {
    right = resolveX(frame, frame.pos.left)! + width;
  }
  if (right !== undefined) return { right };

  if (frame.pos.center && width !== undefined) {
    if ("x" in frame.pos.center) left = frame.pos.center.x - width / 2;
    if (left !== undefined) return { left };
  }
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

export const wc2px = (v: number): number => v * getScale();
const px2wc = (px: number): number => px / getScale();

export const wcy2px = (y: number): number => wc2px(0.6 - y) + getYOffset();
export const wcx2px = (x: number): number => wc2px(x) + getXOffset();

const updateSizeAndPosition = (frame: framehandle, updated = new Set()) => {
  if (updated.has(frame)) {
    console.error("recursive updateSizeAndPosition");
    return;
  }
  updated.add(frame);

  const reverseDeps = reversePositionDependencies.get(frame);
  if (reverseDeps) {
    reverseDeps.forEach((set) => set.delete(frame));
    reverseDeps.clear();
  }

  const { width, height, implicitWidth, implicitHeight } = getSize(frame);
  const { x, y } = getAnchor(frame, width, height);
  const element = nodeMap.get(frame)!;
  if (x) {
    if (x.left !== undefined) element.style.left = wcx2px(x.left) + "px";
    else element.style.left = "";

    if (x.right !== undefined) element.style.right = wcx2px(x.right) + "px";
  } else {
    element.style.left = "";
    element.style.right = "";
  }

  if (y) {
    if (y.top !== undefined) element.style.top = wcy2px(y.top) + "px";
    else element.style.top = "";

    if (y.bottom !== undefined) {
      element.style.bottom = wcy2px(y.bottom) + "px";
    }
  } else {
    element.style.top = "";
    element.style.bottom = "";
  }

  if (width !== undefined && !implicitWidth) {
    element.style.width = wc2px(width) + "px";
  }
  if (height !== undefined && !implicitHeight) {
    element.style.height = wc2px(height) + "px";
  }

  positionDependencies
    .get(frame)
    ?.forEach((f) => updateSizeAndPosition(f, updated));
};

export const adapter = {
  createNode: (handle: framehandle, owner: framehandle): unknown => {
    const div = document.createElement("span");
    div.style.position = "fixed";
    div.style.background = "rgba(0,0,0,0.1)";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (div as any).frame = handle;
    div.setAttribute("frame", handle.handleId.toString());
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
  setTooltip: (frame: framehandle, tooltip: framehandle): void => {
    BlzFrameSetVisible(tooltip, false);
    const element = nodeMap.get(frame);
    if (!element) return;
    element.addEventListener(
      "mouseenter",
      () => BlzFrameSetVisible(tooltip, true),
    );
    element.addEventListener(
      "mouseleave",
      () => BlzFrameSetVisible(tooltip, false),
    );
  },
  update: (frame: framehandle): void => {
    const element = nodeMap.get(frame);
    if (!element) return;

    // text
    if (typeof frame.text === "string") element.textContent = frame.text;

    // visible
    if (frame.visible !== (element.style.display !== "none")) {
      element.style.display = frame.visible ? "" : "none";
    }

    // size & points
    updateSizeAndPosition(frame);
  },
};

export type Adapter = typeof adapter;

export const setAdapter = (newAdapter: Adapter): void => {
  Object.assign(adapter, newAdapter);
};
