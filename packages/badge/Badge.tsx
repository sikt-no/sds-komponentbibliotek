import clsx from "clsx";
import React, { ReactNode } from "react";
import "./badge.pcss";

export interface BadgeProps {
  className?: string;
  children: ReactNode;
  badgeType?: "action" | "success" | "danger" | "warning" | "info";
  visibility?: "high" | "medium" | "low";
  icon?: ReactNode;
}

export const Badge = ({
  badgeType = "action",
  visibility = "medium",
  className,
  children,
  icon,
  ...rest
}: BadgeProps) => {
  return (
    <span
      className={clsx(
        "sds-badge",
        `sds-badge--${badgeType}`,
        `sds-badge--visibility-${visibility}`,
        className
      )}
      {...rest}
    >
      {icon && <div className="sds-badge__icon">{icon}</div>}
      {children}
    </span>
  );
};
