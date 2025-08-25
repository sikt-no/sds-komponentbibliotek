import { clsx } from "clsx/lite";
import {
  Children,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";

export interface FigureProps extends HTMLAttributes<HTMLElement> {
  aspectRatio?: "16x9";
  children: ReactNode;
  className?: string;
  figCaption?: string;
}

interface ChildProps {
  className?: string;
}

export const Figure = ({
  aspectRatio,
  children,
  className,
  figCaption,
  ...rest
}: FigureProps) => {
  const addClassToChildren = (child: ReactElement<ChildProps>) => {
    const props = {
      className: clsx(
        "sds-figure__figure",
        aspectRatio === "16x9" && "sds-figure__figure--ratio-16x9",
        child.props.className,
      ),
    };

    return cloneElement(child, props);
  };

  return (
    <figure className={clsx("sds-figure", className)} {...rest}>
      {Children.map(
        children,
        (child) =>
          isValidElement(child) &&
          addClassToChildren(child as ReactElement<ChildProps>),
      )}
      {figCaption && (
        <figcaption className="sds-figure__caption">{figCaption}</figcaption>
      )}
    </figure>
  );
};
