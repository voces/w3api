import {
  BlzFrameSetVisible,
  FRAMEEVENT_CHECKBOX_CHECKED,
  FRAMEEVENT_CHECKBOX_UNCHECKED,
  FRAMEEVENT_CONTROL_CLICK,
  FRAMEEVENT_EDITBOX_ENTER,
  FRAMEEVENT_EDITBOX_TEXT_CHANGED,
  FRAMEEVENT_MOUSE_DOUBLECLICK,
  FRAMEEVENT_MOUSE_DOWN,
  FRAMEEVENT_MOUSE_ENTER,
  FRAMEEVENT_MOUSE_LEAVE,
  FRAMEEVENT_MOUSE_UP,
  FRAMEEVENT_MOUSE_WHEEL,
  FRAMEEVENT_SLIDER_VALUE_CHANGED,
} from "../api";
import { notImplemented } from "../errors";

const frameMap = new Map<HTMLElement, framehandle>();
const nodeMap = new Map<framehandle, HTMLElement>();
// values depend on key
const positionDependencies = new WeakMap<framehandle, Set<framehandle>>();
const reversePositionDependencies = new WeakMap<
  framehandle,
  Set<Set<framehandle>>
>();

// const testLines: Record<string, HTMLElement | undefined> = {};
// const testHLine = (key: string, top: string) => {
//   const line = testLines[key] ?? (() => {
//     const line = document.createElement("span");
//     line.style.display = "inline-block";
//     line.style.position = "fixed";
//     line.style.backgroundColor = "red";
//     line.style.height = "1px";
//     line.style.width = "100vw";
//     line.setAttribute("name", key);
//     document.body.appendChild(line);
//     testLines[key] = line;
//     return line;
//   })();

//   line.style.top = top;
// };

const markDeps = (frame: framehandle, side: FrameSide) => {
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

const resolveX = (frame: framehandle, side: FrameSide): number | undefined => {
  if (side === undefined) return undefined;
  if (typeof side === "number") return side;
  if (typeof side.relativeSide === "string") {
    markDeps(frame, side);

    const { width } = getSize(side.relative);
    const xAnchor = getXAnchor(side.relative, width);
    if (xAnchor === undefined) return;

    const parentOffset = side.relativeSide === "center"
      ? (width ?? 0) / 2
      : side.relativeSide.includes("right")
      ? (width ?? 0)
      : 0;
    return xAnchor + parentOffset + side.xOffset * getFrameScale(frame);
  }
};

const resolveY = (frame: framehandle, side: FrameSide): number | undefined => {
  if (side === undefined) return undefined;
  if (typeof side === "number") return side;
  if (typeof side.relativeSide === "string") {
    markDeps(frame, side);

    const { height } = getSize(side.relative);
    const yAnchor = getYAnchor(side.relative, height);
    if (yAnchor === undefined) return;

    const parentOffset = side.relativeSide === "center"
      ? (height ?? 0) / 2
      : side.relativeSide.includes("bottom")
      ? (height ?? 0)
      : 0;
    return yAnchor - parentOffset + side.yOffset * getFrameScale(frame);
  }
};

const getFrameScale = (frame: framehandle): number =>
  frame.scale * (frame.parent ? getFrameScale(frame.parent) : 1);

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
  if (widthFrom === "explicit") width = frame.width * getFrameScale(frame);
  else if (widthFrom === "points") {
    width = resolveX(frame, frame.pos.right)! -
      resolveX(frame, frame.pos.left)!;
  } else if (widthFrom === "implicit") {
    const element = nodeMap.get(frame);
    if (element) {
      const oldOpacity = element.style.opacity;
      const oldVisibility = element.style.visibility;
      element.style.opacity = "0";
      element.style.visibility = "visible";
      width = px2wc(element.clientWidth);
      element.style.visibility = oldVisibility;
      element.style.opacity = oldOpacity;
    }
  }

  const heightFrom =
    frame.pos.top !== undefined && frame.pos.bottom !== undefined
      ? "points"
      : frame.height
      ? "explicit"
      : "implicit";
  let height: number | undefined;
  if (heightFrom === "explicit") height = frame.height * getFrameScale(frame);
  else if (heightFrom === "points") {
    height = resolveY(frame, frame.pos.top)! -
      resolveY(frame, frame.pos.bottom)!;
  } else if (heightFrom === "implicit") {
    const element = nodeMap.get(frame);
    if (element) {
      const oldOpacity = element.style.opacity;
      const oldVisibility = element.style.visibility;
      element.style.opacity = "0";
      element.style.visibility = "visible";
      height = px2wc(element.clientHeight);
      element.style.visibility = oldVisibility;
      element.style.opacity = oldOpacity;
    }
  }

  return {
    width,
    height,
    implicitWidth: widthFrom === "implicit",
    implicitHeight: heightFrom === "implicit",
  };
};

/** Returns how many wc units the frame's top is from the bottom */
const getYAnchor = (
  frame: framehandle,
  height?: number,
): number | undefined => {
  let top: number | undefined;

  // Simple top
  if (frame.pos.top !== undefined) top = resolveY(frame, frame.pos.top);
  if (top !== undefined) return top;

  // Through bottom
  if (frame.pos.bottom !== undefined && height !== undefined) {
    const bot = resolveY(frame, frame.pos.bottom);
    if (bot !== undefined) return bot + height;
  }

  // Through center
  if (frame.pos.center && height !== undefined) {
    // With abs position
    if ("y" in frame.pos.center) return frame.pos.center.y + height / 2;

    if (frame.parent) {
      const top = resolveY(frame, frame.pos.center);
      if (top !== undefined) return top + height / 2;
    }
  }

  // Implicit center
  if (
    frame.pos.top === undefined && frame.pos.bottom === undefined &&
    (frame.pos.left !== undefined || frame.pos.right !== undefined) &&
    height !== undefined
  ) {
    const relative = typeof frame.pos.left === "object"
      ? frame.pos.left.relative
      : typeof frame.pos.right === "object"
      ? frame.pos.right.relative
      : undefined;
    if (relative) {
      const relativeHeight = getSize(relative).height;
      const relativeTop = getYAnchor(relative, relativeHeight);
      if (relativeHeight !== undefined && relativeTop !== undefined) {
        return relativeTop - relativeHeight / 2 + height / 2;
      }
    }
  }
};

/** Returns how many wc units the frame's left is from the left */
const getXAnchor = (frame: framehandle, width?: number): number | undefined => {
  let left: number | undefined;

  // Simple left
  if (frame.pos.left !== undefined) left = resolveX(frame, frame.pos.left);
  if (left !== undefined) return left;

  // Through right
  if (frame.pos.right !== undefined && width !== undefined) {
    const right = resolveX(frame, frame.pos.right);
    if (right !== undefined) return right - width;
  }

  // Through center
  if (frame.pos.center && width !== undefined) {
    // With abs position
    if ("x" in frame.pos.center) return frame.pos.center.x - width / 2;

    if (frame.parent) {
      const left = resolveX(frame, frame.pos.center);
      if (left !== undefined) return left - width / 2;
    }
  }

  // Implicit center
  if (
    frame.pos.left === undefined && frame.pos.right === undefined &&
    (frame.pos.top !== undefined || frame.pos.bottom !== undefined) &&
    width !== undefined
  ) {
    const relative = typeof frame.pos.top === "object"
      ? frame.pos.top.relative
      : typeof frame.pos.bottom === "object"
      ? frame.pos.bottom.relative
      : undefined;
    if (relative) {
      const relativeWidth = getSize(relative).width;
      const relativeLeft = getXAnchor(relative, relativeWidth);
      if (relativeWidth !== undefined && relativeLeft !== undefined) {
        return relativeLeft + relativeWidth / 2 - width / 2;
      }
    }
  }
};

const getAnchor = (frame: framehandle, width?: number, height?: number) => ({
  x: getXAnchor(frame, width),
  y: getYAnchor(frame, height),
});

export const getAspectRatio = (): number =>
  globalThis.innerWidth / globalThis.innerHeight;
export const getGlobalScale = (): number =>
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

export const wc2px = (v: number): number => v * getGlobalScale();
const px2wc = (px: number): number => px / getGlobalScale();

export const wcy2px = (y: number): number => wc2px(0.6 - y) + getYOffset();
export const wcx2px = (x: number): number => wc2px(x) + getXOffset();

// TODO: Is it safe to batch these calls?
const updateSizeAndPosition = (
  frame: framehandle,
  updated = new Set<framehandle>(),
) => {
  if (updated.has(frame)) return;
  updated.add(frame);

  const reverseDeps = reversePositionDependencies.get(frame);
  if (reverseDeps) {
    reverseDeps.forEach((set) => set.delete(frame));
    reverseDeps.clear();
  }

  const { width, height, implicitWidth, implicitHeight } = getSize(frame);
  const { x, y } = getAnchor(frame, width, height);
  const element = nodeMap.get(frame)!;
  element.style.left = x !== undefined ? wcx2px(x) + "px" : "";
  element.style.top = y !== undefined
    ? wcy2px(y) + "px"
    : x !== undefined
    ? ""
    : "-1000000px";

  if (width !== undefined && !implicitWidth) {
    element.style.width = wc2px(width) + "px";
  }
  if (height !== undefined && !implicitHeight) {
    element.style.height = wc2px(height) + "px";
  }

  new Set(positionDependencies.get(frame))
    .forEach((f) => updateSizeAndPosition(f, updated));
};

const frameEventMap = new Map([
  [FRAMEEVENT_CONTROL_CLICK, "click"],
  [FRAMEEVENT_MOUSE_ENTER, "mouseenter"],
  [FRAMEEVENT_MOUSE_LEAVE, "mouseleave"],
  [FRAMEEVENT_MOUSE_UP, "mouseup"],
  [FRAMEEVENT_MOUSE_DOWN, "mousedown"],
  [FRAMEEVENT_MOUSE_WHEEL, "wheel"],
  // TODO: need to wrap these...
  [FRAMEEVENT_CHECKBOX_CHECKED, "change"],
  [FRAMEEVENT_CHECKBOX_UNCHECKED, "change"],
  [FRAMEEVENT_EDITBOX_TEXT_CHANGED, "change"],
  // [FRAMEEVENT_POPUPMENU_ITEM_CHANGED]
  [FRAMEEVENT_MOUSE_DOUBLECLICK, "dblclick"],
  // [FRAMEEVENT_SPRITE_ANIM_UPDATE]
  [FRAMEEVENT_SLIDER_VALUE_CHANGED, "change"],
  // [FRAMEEVENT_DIALOG_CANCEL]
  // FRAMEEVENT_DIALOG_ACCEPT
  // TODO: need to wrap this...
  [FRAMEEVENT_EDITBOX_ENTER, "keypress"],
]);

type Adapter = {
  createNode: (handle: framehandle, owner: framehandle) => unknown;
  selectAll: (selectors: string) => framehandle[];
  markOrigin: (handle: framehandle, origin: originframetype) => void;
  setTooltip: (frame: framehandle, tooltip: framehandle) => void;
  update: (frame: framehandle) => void;
  addFrameListener: (
    frame: framehandle,
    event: frameeventtype,
    callback: () => void,
  ) => void;
  addListener: typeof globalThis["addEventListener"];
  remove: (frame: framehandle) => void;
  urlRewriter: (url: string) => string;
};

export const adapter: Adapter = {
  createNode: (handle, owner) => {
    const div = document.createElement("span");
    frameMap.set(div, handle);
    nodeMap.set(handle, div);
    div.style.position = "fixed";
    Reflect.set(div, "frame", handle);
    div.setAttribute("frame", handle.handleId.toString());
    div.setAttribute("name", handle.name);
    if (owner) {
      const ownerNode = nodeMap.get(owner);
      if (ownerNode) ownerNode.appendChild(div);
    }
    adapter.update(handle);
    return div;
  },

  selectAll: (...args) =>
    Array.from(document.querySelectorAll(...args))
      .filter((e): e is HTMLElement => e instanceof HTMLElement)
      .map((e) => frameMap.get(e))
      .filter((h): h is framehandle => !!h),

  markOrigin: (handle, origin) => {
    const e = nodeMap.get(handle);
    e?.classList.add(`origin-${origin.originframetypeId}`);
    if (e) document.body.appendChild(e);
  },

  setTooltip: (frame, tooltip) => {
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

  urlRewriter: (url) => `url(${url})`,

  update: (frame) => {
    const element = nodeMap.get(frame);
    if (!element) return;

    // text
    if (typeof frame.text === "string") {
      const html = frame.text
        .replace(/\|cff([0-9a-fA-F]{6})/g, '<div style="color: #$1">')
        .replace(/\|r/g, "</div>")
        .replace(/\|n/g, "<br/>");
      (element as unknown as { setHTML: (html: string) => void }).setHTML(html);

      if (typeof frame.fontSize === "number") {
        element.style.fontSize = wc2px(frame.fontSize) + "px";
      }
    }

    if (typeof frame.image === "string") {
      element.style.backgroundImage = adapter.urlRewriter(frame.image);
      element.style.backgroundSize = "cover";
    }

    // visible
    const visibilityChange =
      frame.visible !== (element.style.visibility !== "hidden");
    if (visibilityChange) {
      element.style.visibility = frame.visible ? "" : "hidden";
    }

    if (typeof frame.alpha === "number") {
      element.style.opacity = (frame.alpha / 255).toString();
    }

    // size & points
    const updated = new Set<framehandle>();
    updateSizeAndPosition(frame, updated);
    if (visibilityChange) {
      frame.children.forEach((child) => updateSizeAndPosition(child, updated));
    }
  },

  addFrameListener: (frame, event, callback) => {
    const element = nodeMap.get(frame);
    if (!element) return;

    const stringEvent = frameEventMap.get(event);
    if (stringEvent) element.addEventListener(stringEvent, callback);
    else {
      notImplemented(
        `BlzTriggerRegisterFrameEvent with ${JSON.stringify(event)}}`,
      );
    }
  },

  addListener: (...args: Parameters<typeof globalThis["addEventListener"]>) =>
    globalThis.addEventListener(...args),

  remove: (frame) => {
    const element = nodeMap.get(frame);
    if (!element) return;

    element.remove();
  },
};

export const setAdapter = (newAdapter: Partial<Adapter>) => {
  Object.assign(adapter, newAdapter);
};
