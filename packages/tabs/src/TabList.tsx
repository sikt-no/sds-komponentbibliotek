import { clsx } from "clsx/lite";
import {
  Children,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";
import { TabProps } from "./Tab";

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
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
                },
              )}
            </>
          );
        }
      })}
    </div>
  );
};
