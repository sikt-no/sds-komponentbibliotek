import { isValidElement, ReactNode, ReactElement } from "react";

/**
 * Recursively extracts the text content from a React node, concatenating
 * strings, numbers, arrays, and element children into a single string.
 */
export const reactNodeToString = (reactNode: ReactNode): string => {
  if (typeof reactNode === "string") return reactNode;
  if (typeof reactNode === "number") return String(reactNode);

  if (Array.isArray(reactNode)) {
    return reactNode.map(reactNodeToString).join("");
  }

  if (isValidElement(reactNode)) {
    const element = reactNode as ReactElement<{ children?: ReactNode }>;
    return reactNodeToString(element.props.children);
  }

  return "";
};
