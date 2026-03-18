import { clsx } from "clsx/lite";
import { ReactNode } from "react";

export interface BreadcrumbItemProps {
  className?: string;
  children?: ReactNode;
}

export const BreadcrumbItem = ({
  className,
  children,
  ...rest
}: BreadcrumbItemProps) => {
  return (
    <li className={clsx("sds-breadcrumbs-item", className)} {...rest}>
      {children}
    </li>
  );
};

BreadcrumbItem.displayName = "BreadcrumbItem";
