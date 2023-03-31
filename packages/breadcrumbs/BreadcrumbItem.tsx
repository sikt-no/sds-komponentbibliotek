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
  children,
  ...rest
}: BreadcrumbItemProps) => {
  return (
    <li className={clsx("sds-breadcrumbs-item", className)} {...rest}>
      {React.Children.map(children, (child) => {
        const childElement = child as React.ReactElement<
          AnchorHTMLAttributes<HTMLAnchorElement>
        >;
        return (
          <>
            {cloneElement(
              childElement,
              {
                className: clsx("sds-breadcrumbs-item__link", className),
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
              childElement.props.children
            )}
          </>
        );
      })}
    </li>
  );
};
