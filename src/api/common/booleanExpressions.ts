import { contextIndexer, getAgent } from "../../handles";

const getBoolExpr = contextIndexer(
  (id, func: () => boolean): boolexpr => ({
    ...getAgent(),
    boolexprId: id,
    func,
  }),
);

// ============================================================================
// Boolean Expr API ( for compositing trigger conditions and unit filter funcs...)
// ============================================================================
export const And = (operandA: boolexpr, operandB: boolexpr): boolexpr =>
  getBoolExpr(() => operandA.func() && operandB.func());

export const Or = (operandA: boolexpr, operandB: boolexpr): boolexpr =>
  getBoolExpr(() => operandA.func() || operandB.func());

export const Not = (operand: boolexpr): boolexpr =>
  getBoolExpr(() => !operand.func());

export const Condition = contextIndexer(
  (id, func: () => boolean): conditionfunc => ({
    ...getBoolExpr(func),
    conditionfuncId: id,
  }),
);

export const DestroyCondition = (c: conditionfunc): void => c.remove();

export const Filter = contextIndexer(
  (id, func: () => boolean): filterfunc => ({
    ...getBoolExpr(func),
    filterfuncId: id,
  }),
);

export const DestroyFilter = (f: filterfunc): void => f.remove();

export const DestroyBoolExpr = (e: boolexpr): void => e.remove();
