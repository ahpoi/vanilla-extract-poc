import { assignInlineVars } from "@vanilla-extract/dynamic";

export const createInlineCssVariables = (vars: Record<string, string | undefined | null>) =>
  assignInlineVars(removeUndefined(vars));

const removeUndefined = (obj: Record<string | number, unknown>) =>
  Object.keys(obj)
    .filter((k) => obj[k] != null)
    .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
