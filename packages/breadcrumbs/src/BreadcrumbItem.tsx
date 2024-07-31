import clsx from "clsx";
import {
  AnchorHTMLAttributes,
  Children,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";

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
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          const childElement = child as ReactElement<
            AnchorHTMLAttributes<HTMLAnchorElement>
          >;
          return <>{cloneElement(childElement, childElement.props)}</>;
        }
      })}
    </li>
  );
};
