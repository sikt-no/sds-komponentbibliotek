import React, {
  Children,
  cloneElement,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react";
import { clsx } from "clsx";

export interface FigureProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  aspectRatio?: "16x9";
  figCaption?: string;
}

export const Figure = ({
  children,
  aspectRatio,
  figCaption,
  ...rest
}: FigureProps) => {
  const addClassToChildren = (child: ReactElement) => {
    const props = {
      className: clsx(
        "sds-figure__figure",
        aspectRatio === "16x9" && "sds-figure__figure--ratio-16x9",
        child.props.className
      ),
    };

    return cloneElement(child, props);
  };

  return (
    <figure className="sds-figure" {...rest}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return addClassToChildren(child as ReactElement);
        }
      })}
      {figCaption && (
        <figcaption className="sds-figure__caption">{figCaption}</figcaption>
      )}
    </figure>
  );
};
