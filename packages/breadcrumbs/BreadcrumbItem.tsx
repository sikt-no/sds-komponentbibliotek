import React, { ReactNode, cloneElement, AnchorHTMLAttributes } from "react";
import { CircleIcon, ArrowCircleRightIcon } from "@sikt/sds-icons";
import clsx from "clsx";

export interface BreadcrumbItemProps {
  className?: string;
  isLastElement?: boolean;
  children?: ReactNode;
}

export const BreadcrumbItem = ({
  className,
  isLastElement,
  children,
  ...rest
}: BreadcrumbItemProps) => {
  return (
    <li className={clsx("sds-breadcrumbs-item", className)} {...rest}>
      {React.Children.map(children, (child) => {
        if (
          React.isValidElement<AnchorHTMLAttributes<HTMLAnchorElement>>(child)
        ) {
          return cloneElement<AnchorHTMLAttributes<HTMLAnchorElement>>(
            child,
            {
              "aria-current": isLastElement ? "page" : undefined,
              className: clsx("sds-breadcrumbs-item__link", className),
              tabIndex: 0,
            },
            <CircleIcon
              className={clsx(
                "sds-breadcrumbs-item__icon",
                "sds-breadcrumbs-item__icon--inactive"
              )}
            />,
            <ArrowCircleRightIcon
              className={clsx(
                "sds-breadcrumbs-item__icon",
                "sds-breadcrumbs-item__icon--active"
              )}
            />,
            child.props.children
          );
        }
      })}
    </li>
  );
};
