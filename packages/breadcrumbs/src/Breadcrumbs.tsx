import { clsx } from "clsx/lite";
import { ReactNode } from "react";
import "./breadcrumbs.pcss";

export interface BreadcrumbsProps {
  "aria-label": NonNullable<string>;
  children?: ReactNode;
  className?: string;
}

export const Breadcrumbs = ({
  /**
   * Unique label to be used to identify navigation landmark for assistive technology
   */
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

Breadcrumbs.displayName = "Breadcrumbs";
