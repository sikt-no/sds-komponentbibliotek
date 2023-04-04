import React, {
  Children,
  ReactNode,
  ReactElement,
  cloneElement,
  isValidElement,
} from "react";
import clsx from "clsx";
import { TabProps } from "./Tab";

export interface TabListProps {
  children: ReactNode;
  "aria-label": string;
  className?: string;
}

export const TabList = ({
  children,
  "aria-label": ariaLabel,
  className,
  ...rest
}: TabListProps) => {
  const arrayChildren = Children.toArray(children);

  return (
    <div
      className={clsx("sds-tabs__tab-list", className)}
      role="tablist"
      aria-label={ariaLabel}
      {...rest}
    >
      {Children.map(arrayChildren, (child, index) => {
        if (isValidElement(child)) {
          return (
            <>
              {cloneElement(
                child as ReactElement<TabProps & { index: number }>,
                {
                  index,
                }
              )}
            </>
          );
        }
      })}
    </div>
  );
};
