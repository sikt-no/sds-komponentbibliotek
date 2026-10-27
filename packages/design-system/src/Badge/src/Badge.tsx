import { clsx } from "clsx/lite";
import { HTMLAttributes } from "react";
import "./badge.css";
import { Size, Variant } from "../../../types";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  maxNumber?: number;
  size?: Size;
  variant?: Exclude<Variant, "transparent">;
}

export const Badge = ({
  children,
  className,
  maxNumber = Infinity,
  size = "medium",
  variant = "brand",
  ...rest
}: BadgeProps) => {
  return (
    <span
      className={clsx("sd3-badge", className)}
      data-size={size}
      data-variant={variant}
      {...rest}
    >
      {children != null && (
        <span data-part="number">
          {typeof children === "number" && maxNumber < children
            ? `${maxNumber}+`
            : children}
        </span>
      )}
    </span>
  );
};

Badge.displayName = "Badge";
