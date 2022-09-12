import { gameContext } from "./contexts";

const converter = (): (index?: number) => number => {
  let _index = 0;
  return (index?: number): number => {
    // Nothing was passed, just increment
    if (index === undefined) return _index++;

    if (index >= _index) _index = index + 1;

    return index;
  };
};

const unwrappedContextConverter = gameContext.simpleFunctionWrapper(converter);
export const contextConverter = <A extends handle>(
  fn: (id: number) => A,
): (id?: number) => A => {
  const identity = (i: number): number => i;
  const converter = unwrappedContextConverter(identity);
  const map: Array<A | undefined> = [];
  return (id?: number): A => {
    id = converter(id);
    if (map[id]) return map[id] as A;

    const value = fn(id);
    map[id] = value;
    if (value.onRemove) {
      value.onRemove(() => (map[id as number] = undefined));
    }
    return value;
  };
};
export const contextIndexer = gameContext.complexFunctionWrapper(converter);

type HandleCallback = (handle: handle) => void;

export const getHandle = contextIndexer(
  (id): handle => {
    const onRemoveListeners: Set<HandleCallback> = new Set();
    // deno-lint-ignore ban-types
    const referenceMap: WeakMap<object, HandleCallback> = new WeakMap();
    return {
      handleId: id,
      onRemove: (
        cb: HandleCallback,
        // deno-lint-ignore ban-types
        reference?: object,
      ): void => {
        onRemoveListeners.add(cb);
        if (reference) referenceMap.set(reference, cb);
      },
      clearRemoveHook(
        cb: HandleCallback,
        // deno-lint-ignore ban-types
        reference?: object,
      ): void {
        onRemoveListeners.delete(cb);
        if (reference) referenceMap.delete(reference);
      },
      // deno-lint-ignore ban-types
      clearRemoveHookByReference(reference: object): void {
        const cb = referenceMap.get(reference);
        if (cb) {
          onRemoveListeners.delete(cb);
          if (reference) referenceMap.delete(reference);
        }
      },
      remove(): void {
        onRemoveListeners.forEach((l) => l(this));
      },
    };
  },
);
export const getAgent = contextIndexer(
  (id): agent => ({ ...getHandle(), agentId: id }),
);
export const getWidget = contextIndexer(
  (id): widget => ({ ...getAgent(), widgetId: id, x: 0, y: 0, life: 0 }),
);
