import clsx from "clsx";
import React, { ReactNode } from "react";
import "./badge.pcss";

export interface BadgeProps {
  className?: string;
  children: ReactNode;
  active?: boolean;
  icon?: ReactNode;
}

export const Badge = ({
  className,
  children,
  active = false,
  icon,
  ...rest
}: BadgeProps) => {
  return (
    <span
      className={clsx("sds-badge", active && "sds-badge--active", className)}
      {...rest}
    >
      {icon && <div className="sds-badge__icon">{icon}</div>}
      {children}
    </span>
  );
};
