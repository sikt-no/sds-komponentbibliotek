import { clsx } from "clsx/lite";
import { HTMLAttributes } from "react";
import "./badge.pcss";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  count?: number;
  maxCount?: number;
}

export const Badge = ({
  className,
  count,
  maxCount = Infinity,
  ...rest
}: BadgeProps) => {
  return (
    <span className={clsx("sds-badge", className)} {...rest}>
      {count && (
        <span className="sds-badge__count">
          {maxCount < count ? `${maxCount}+` : count}
        </span>
      )}
    </span>
  );
};

Badge.displayName = "Badge";
