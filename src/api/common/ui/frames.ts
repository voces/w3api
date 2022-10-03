// deno-lint-ignore-file no-unused-vars

import { notImplemented } from "../../../errors";
import { Game, wrapGame } from "../../../Game";
import { contextIndexer, getHandle } from "../../../handles";
import { load } from "../../../helpers";
import { FdfArg, loadFdf } from "../../../helpers/fdf";
import { newRun } from "../../../Run";
import { adapter } from "../../../ui/adapter";
import {
  FRAMEPOINT_BOTTOM,
  FRAMEPOINT_BOTTOMLEFT,
  FRAMEPOINT_BOTTOMRIGHT,
  FRAMEPOINT_CENTER,
  FRAMEPOINT_LEFT,
  FRAMEPOINT_RIGHT,
  FRAMEPOINT_TOP,
  FRAMEPOINT_TOPLEFT,
  FRAMEPOINT_TOPRIGHT,
} from "../constants";
import { getEvent } from "../triggers/events";

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

export const BlzLoadTOCFile = wrapGame((game, TOCFile: string): boolean => {
  try {
    const contents = load(TOCFile);
    if (!contents) return false;

    const fdfs = contents.split("\n").filter((v) => v.length > 0);
    fdfs.forEach((fdf) => {
      if (game.loadedFdfs.has(fdf.toLowerCase())) return;
      game.loadedFdfs.add(fdf.toLowerCase());
      const contents = load(fdf);
      if (!contents) return;

      loadFdf(game, contents);
    });

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
});

type ParseArg<T> = {
  (args: FdfArg[] | undefined, name: string, fn: (text: T) => void): void;
  (
    args: FdfArg[] | undefined,
    name: string,
    index: number,
    fn: (text: T) => void,
  ): void;
};

const parseString = ((
  args: FdfArg[] | undefined,
  name: string,
  index: number | ((text: string) => void),
  fn: undefined | ((text: string) => void),
) => {
  if (typeof index === "function") {
    fn = index;
    index = 0;
  }

  const value = args?.[index];
  if (typeof value === "string") fn!(value);
  else {console.warn(
      `Expected string for ${name}, got: ${JSON.stringify(value)}`,
    );}
}) as ParseArg<string>;

const parseNumber = ((
  args: FdfArg[] | undefined,
  name: string,
  index: number | ((value: number) => void),
  fn: undefined | ((value: number) => void),
) => {
  if (typeof index === "function") {
    fn = index;
    index = 0;
  }

  const value = args?.[index];
  if (typeof value === "number") fn!(value);
  else {console.warn(
      `Expected number for ${name}, got: ${JSON.stringify(value)}`,
    );}
}) as ParseArg<number>;

const createFrame = wrapGame(
  contextIndexer((id, game: Game, { owner, ...props }:
    & Omit<
      framehandle,
      | "framehandleId"
      | "parent"
      | "node"
      | "width"
      | "height"
      | "pos"
      | "children"
      | "visible"
      | "scale"
      | keyof ReturnType<typeof getHandle>
    >
    & Partial<
      Pick<framehandle, "width" | "height" | "pos" | "visible" | "scale">
    >
    & {
      owner: framehandle | null;
    }) => {
    const fh: framehandle = {
      ...getHandle(),
      ...props,
      framehandleId: id,
      parent: owner,
      node: null,
      width: 0,
      height: 0,
      pos: {
        left: undefined,
        right: undefined,
        bottom: undefined,
        top: undefined,
        center: undefined,
      },
      children: [],
      visible: true,
      scale: 1,
    };
    // owner may be missing on root frame
    owner?.children.push(fh);

    const inherits = fh.inherits ? game.frameDefs[fh.inherits] : undefined;
    let decorateFileNames = false;
    const functionalChildren = new Set<string>();
    if (inherits) {
      for (const property of (inherits.properties ?? [])) {
        const args = property.args;
        switch (property.name) {
          case "DecorateFileNames":
            decorateFileNames = true;
            break;
          case "ButtonText":
            parseString(
              args,
              "ButtonText",
              (name) => functionalChildren.add(name),
            );
            break;
          case "Text":
            parseString(args, "Text", (text) => fh.text = text);
            break;
          case "Width":
            parseNumber(args, "Width", (width) => fh.width = width);
          case "Height":
            parseNumber(args, "Height", (height) => fh.height = height);
          case "ControlStyle":
            parseString(
              args,
              "ControlStyle",
              (styles) => fh.controlStyles = styles.split("|"),
            );
            break;
          case "ButtonPushedTextOffset":
            // IDK
            break;
          default:
            console.warn(`Unhandled fdf property ${property.name}`);
        }
      }
    }

    fh.node = adapter.createNode(fh, owner!);

    if (inherits) {
      for (const child of (inherits.children ?? [])) {
        createFrame({
          name: child.name,
          owner: fh,
          priority: 0,
          createContext: 0,
          pos: functionalChildren.has(child.name)
            ? {
              top: {
                relative: fh,
                relativeSide: "top",
                xOffset: 0,
                yOffset: 0,
              },
              bottom: {
                relative: fh,
                relativeSide: "bottom",
                xOffset: 0,
                yOffset: 0,
              },
              left: {
                relative: fh,
                relativeSide: "left",
                xOffset: 0,
                yOffset: 0,
              },
              right: {
                relative: fh,
                relativeSide: "right",
                xOffset: 0,
                yOffset: 0,
              },
              center: undefined,
            }
            : undefined,
        });
      }
    }

    return fh;
  }),
);

export const BlzCreateFrame = (
  name: string,
  owner: framehandle,
  priority: number,
  createContext: number,
): framehandle => createFrame({ name, owner, priority, createContext });

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
): framehandle =>
  createFrame({ name, owner, inherits, typeName, createContext, priority: -1 });

export const BlzDestroyFrame = (frame: framehandle): void => {
  adapter.remove(frame);
};

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
const pointMap = new Map<framepointtype, RelativeFrameSide["relativeSide"]>([
  [FRAMEPOINT_TOPLEFT, "topleft"],
  [FRAMEPOINT_TOP, "top"],
  [FRAMEPOINT_TOPRIGHT, "topright"],
  [FRAMEPOINT_LEFT, "left"],
  [FRAMEPOINT_CENTER, "center"],
  [FRAMEPOINT_RIGHT, "right"],
  [FRAMEPOINT_BOTTOMLEFT, "bottomleft"],
  [FRAMEPOINT_BOTTOM, "bottom"],
  [FRAMEPOINT_BOTTOMRIGHT, "bottomright"],
]);

export const BlzFrameSetPoint = (
  frame: framehandle,
  point: framepointtype,
  relative: framehandle,
  relativePoint: framepointtype,
  x: number,
  y: number,
): void => {
  const relativeSide = pointMap.get(relativePoint);
  if (!relativeSide) {
    return console.warn(
      "Unknown relativePoint passed to BlzFrameSetPoint: " +
        relativePoint.framepointtypeId,
    );
  }

  if (leftPoints.includes(point)) {
    frame.pos.left = { relative, relativeSide, xOffset: x, yOffset: 0 };
  }

  if (rightPoints.includes(point)) {
    frame.pos.right = { relative, relativeSide, xOffset: x, yOffset: 0 };
  }

  if (topPoints.includes(point)) {
    frame.pos.top = { relative, relativeSide, xOffset: 0, yOffset: y };
  }

  if (bottomPoints.includes(point)) {
    frame.pos.bottom = { relative, relativeSide, xOffset: 0, yOffset: y };
  }

  if (point === FRAMEPOINT_CENTER) {
    frame.pos.center = { relative, relativeSide, xOffset: x, yOffset: y };
  }

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

  if (point === FRAMEPOINT_CENTER) frame.pos.center = { x, y };

  adapter.update(frame);
};

export const BlzFrameClearAllPoints = (frame: framehandle): void => {
  frame.pos = {
    left: undefined,
    right: undefined,
    bottom: undefined,
    top: undefined,
    center: undefined,
  };
};

export const BlzFrameSetAllPoints = (
  frame: framehandle,
  relative: framehandle,
): void => {
  frame.pos = {
    top: { relative, relativeSide: "top", xOffset: 0, yOffset: 0 },
    bottom: { relative, relativeSide: "bottom", xOffset: 0, yOffset: 0 },
    left: { relative, relativeSide: "left", xOffset: 0, yOffset: 0 },
    right: { relative, relativeSide: "right", xOffset: 0, yOffset: 0 },
    center: undefined,
  };
  adapter.update(frame);
};

export const BlzFrameSetVisible = (
  frame: framehandle | null,
  visible: boolean,
): void => {
  if (!frame) return;
  frame.visible = visible;
  adapter.update(frame);
};

export const BlzFrameIsVisible = (frame: framehandle): boolean => {
  notImplemented("BlzFrameIsVisible");
  return false;
};

export const BlzGetFrameByName = (
  name: string,
  createContext: number,
): framehandle => adapter.selectAll(`[name=${name}]`)[createContext];

export const BlzFrameGetName = (frame: framehandle): string => {
  notImplemented("BlzFrameGetName");
  return "";
};

export const BlzFrameClick = (frame: framehandle): void => {};

export const BlzFrameSetText = (frame: framehandle, text: string): void => {
  frame.text = text;
  adapter.update(frame);
};

export const BlzFrameGetText = (frame: framehandle): string | undefined =>
  frame.text;

export const BlzFrameAddText = (frame: framehandle, text: string): void => {
  frame.text = (frame.text ?? "") + text;
  adapter.update(frame);
};

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
): void => {
  frame.image = texFile;
  adapter.update(frame);
};

export const BlzFrameSetScale = (frame: framehandle, scale: number): void => {
  frame.scale = scale;
  adapter.update(frame);
};

export const BlzFrameSetTooltip = (
  frame: framehandle,
  tooltip: framehandle,
): void => {
  adapter.setTooltip(frame, tooltip);
};

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

export const BlzFrameGetParent = (frame: framehandle): framehandle | null =>
  frame.parent;

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
  const event = getEvent(eventId);
  whichTrigger.events.push(event);

  adapter.addFrameListener(frame, eventId, () => {
    newRun({}, () => {
      if (whichTrigger.evaluate()) whichTrigger.execute();
    });
  });

  return event;
};

export const BlzGetTriggerFrame = (): framehandle => {
  notImplemented("BlzGetTriggerFrame");
  return (null as unknown) as framehandle;
};

export const BlzGetTriggerFrameEvent = (): frameeventtype => {
  notImplemented("BlzGetTriggerFrameEvent");
  return (null as unknown) as frameeventtype;
};

export const BlzGetTriggerFrameValue = (): number => {
  notImplemented("BlzGetTriggerFrameValue");
  return 0;
};

export const BlzGetTriggerFrameText = (): string => {
  notImplemented("BlzGetTriggerFrameText");
  return "";
};

export const BlzFrameGetChildrenCount = (frame: framehandle): number =>
  frame.children.length;

export const BlzFrameGetChild = (
  frame: framehandle,
  index: number,
): framehandle => frame.children[index];
