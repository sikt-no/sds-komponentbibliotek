import { clsx } from "clsx/lite";
import { HTMLAttributes, ReactNode } from "react";
import "./badge.pcss";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  children: ReactNode;
  variant?: "primary" | "success" | "critical" | "warning" | "info";
  visibility?: "strong" | "subtle";
  icon?: ReactNode;
}

export const Badge = ({
  variant = "primary",
  visibility = "subtle",
  className,
  children,
  icon,
  ...rest
}: BadgeProps) => {
  return (
    <span
      className={clsx(
        "sds-badge",
        `sds-badge--${variant}`,
        `sds-badge--visibility-${visibility}`,
        className,
      )}
      data-color-scheme={variant === "warning" && "light"}
      {...rest}
    >
      {icon && <span className="sds-badge__icon">{icon}</span>}
      {children}
    </span>
  );
};
