import React, { ReactElement } from "react";
import { clsx } from "clsx";

export interface FigureProps {
  children: React.ReactNode;
  aspectRatio?: "16x9";
  figCaption?: string;
}

export const Figure = ({ children, aspectRatio, figCaption }: FigureProps) => {
  const addClassToChildren = (child: ReactElement) => {
    const props = {
      className: clsx(
        "sds-figure__figure",
        aspectRatio === "16x9" && "sds-figure__figure--ratio-16x9",
        child.props.className
      ),
    };

    return React.cloneElement(child, props);
  };

  return (
    <figure className="sds-figure">
      {React.Children.map(children, (child) =>
        addClassToChildren(child as ReactElement)
      )}
      {figCaption && (
        <figcaption className="sds-figure__caption">{figCaption}</figcaption>
      )}
    </figure>
  );
};
