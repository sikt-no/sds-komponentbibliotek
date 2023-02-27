import clsx from "clsx";
import React, { ReactNode } from "react";
import "./badge.pcss";

export interface BadgeProps {
  className?: string;
  children: ReactNode;
  badgeType?: "action" | "success" | "danger" | "warning" | "info";
  icon?: ReactNode;
}

export const Badge = ({
  badgeType = "action",
  className,
  children,
  icon,
  ...rest
}: BadgeProps) => {
  return (
    <span
      className={clsx("sds-badge", `sds-badge--${badgeType}`, className)}
      {...rest}
    >
      {icon && <div className="sds-badge__icon">{icon}</div>}
      {children}
    </span>
  );
};
