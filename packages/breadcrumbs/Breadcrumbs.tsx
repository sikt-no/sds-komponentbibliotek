import React, { ReactNode, cloneElement } from "react";
import { BreadcrumbItemProps } from "./BreadcrumbItem";
import clsx from "clsx";
import "./breadcrumbs.pcss";
export interface BreadcrumbsProps {
  "aria-label": string;
  children?: ReactNode[];
  className?: string;
}

export const Breadcrumbs = ({
  "aria-label": ariaLabel,
  className,
  children,
  ...rest
}: BreadcrumbsProps) => {
  const numberOfChildren = React.Children.count(children);
  return (
    <nav
      className={clsx("sds-breadcrumbs", className)}
      aria-label={ariaLabel}
      {...rest}
    >
      <ol className="sds-breadcrumbs__list">
        {React.Children.map(children, (child, index) => {
          const isLastElement = index + 1 === numberOfChildren;
          return (
            <>
              {React.isValidElement<BreadcrumbItemProps>(child) &&
                cloneElement<BreadcrumbItemProps>(child, {
                  isLastElement,
                })}
            </>
          );
        })}
      </ol>
    </nav>
  );
};
