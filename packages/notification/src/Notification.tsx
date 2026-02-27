import { clsx } from "clsx/lite";
import { HTMLAttributes } from "react";
import "./notification.pcss";

export interface NotificationProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "neutral" | "success" | "info" | "warning" | "critical";
  className?: string;
  count?: number;
  maxCount?: number;
}

export const Notification = ({
  variant = "info",
  className,
  count,
  maxCount = Infinity,
  ...rest
}: NotificationProps) => {
  return (
    <span
      className={clsx(
        "sds-notification",
        `sds-notification--${variant}`,
        className,
      )}
      {...rest}
    >
      {count && (
        <span className="sds-notification__count">
          {maxCount < count ? `${maxCount}+` : count}
        </span>
      )}
    </span>
  );
};

Notification.displayName = "Notification";
