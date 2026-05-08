import { isValidElement, ReactNode } from "react";

export const reactNodeToString = (reactNode: ReactNode): string => {
  let string = "";
  if (typeof reactNode === "string") {
    string = reactNode;
  } else if (typeof reactNode === "number") {
    string = reactNode.toString();
  } else if (reactNode instanceof Array) {
    reactNode.forEach((child) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      string += reactNodeToString(child);
    });
  } else if (isValidElement(reactNode)) {
    // @ts-expect-error is of type unknown
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    string += reactNodeToString(reactNode.props.children);
  }
  return string;
};
