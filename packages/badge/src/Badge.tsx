import { clsx } from "clsx/lite";
import { HTMLAttributes, ReactNode } from "react";
import "./badge.pcss";

export type BadgeProps = BadgeChildrenProps | BadgeAriaLabelProps;
interface BadgeBaseProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  variant?: "primary" | "success" | "critical" | "warning" | "info";
  visibility?: "strong" | "subtle";
  icon?: ReactNode;
}

interface BadgeAriaLabelProps extends BadgeBaseProps {
  "aria-label": NonNullable<string>;
}

interface BadgeChildrenProps extends BadgeBaseProps {
  children: ReactNode;
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
      role={children === null || children === undefined ? "img" : undefined}
      {...rest}
    >
      {icon && <span className="sds-badge__icon">{icon}</span>}
      {children && <span className="sds-badge__label">{children}</span>}
    </span>
  );
};
