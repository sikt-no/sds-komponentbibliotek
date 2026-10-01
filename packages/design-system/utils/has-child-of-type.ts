import { Children, isValidElement, type ReactNode } from "react";

/**
 * Returns true if any direct child of `node` is a React element whose
 * `type` matches `component`. Use for detecting compound sub-components
 * (e.g. `hasChildOfType(node, Field.ValidationMessage)`) to drive
 * derived state — not for reordering or extracting them.
 */
export const hasChildOfType = (
  node: ReactNode,
  component: unknown,
): boolean => {
  return Children.toArray(node).some(
    (children) => isValidElement(children) && children.type === component,
  );
};
