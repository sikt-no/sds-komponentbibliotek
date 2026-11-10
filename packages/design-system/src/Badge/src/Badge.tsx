import { clsx } from "clsx/lite";
import { HTMLAttributes } from "react";
import "./badge.css";
import "./badge-position.css";
import { Size, Variant } from "../../../types";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  maxNumber?: number;
  size?: Size;
  variant?: Exclude<Variant, "transparent">;
}

export interface BadgePositionProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * @default top-right
   */
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  /**
   * Where the badge is anchored on the sibling component
   *
   * @default edge
   */
  anchor?: "edge" | "inside";
}

const BadgePosition = ({
  className,
  position = "top-right",
  anchor = "edge",
  ...rest
}: BadgePositionProps) => (
  <span
    className={clsx("sd3-badge-position", className)}
    data-position={position}
    data-anchor={anchor}
    {...rest}
  />
);

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

Badge.Position = BadgePosition;
