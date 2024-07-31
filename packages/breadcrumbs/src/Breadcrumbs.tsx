import { clsx } from "clsx/lite";
import { ReactNode } from "react";
import "./breadcrumbs.pcss";

export interface BreadcrumbsProps {
  "aria-label": string;
  children?: ReactNode;
  className?: string;
}

export const Breadcrumbs = ({
  "aria-label": ariaLabel,
  className,
  children,
  ...rest
}: BreadcrumbsProps) => {
  return (
    <nav
      className={clsx("sds-breadcrumbs", className)}
      aria-label={ariaLabel}
      {...rest}
    >
      <ol className="sds-breadcrumbs__list">{children}</ol>
    </nav>
  );
};
