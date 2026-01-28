import { clsx } from "clsx/lite";
import { HTMLAttributes } from "react";
import "./notification.pcss";

export interface NotificationProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  count?: number;
  maxCount?: number;
}

export const Notification = ({
  className,
  count,
  maxCount = Infinity,
  ...rest
}: NotificationProps) => {
  return (
    <span className={clsx("sds-notification", className)} {...rest}>
      {count && (
        <span className="sds-notification__count">
          {maxCount < count ? `${maxCount}+` : count}
        </span>
      )}
    </span>
  );
};

Notification.displayName = "Notification";
