import { clsx } from "clsx/lite";
import type { HTMLAttributes } from "react";
import {
  StatusIcon,
  type StatusIconVariant,
} from "../../_internal/StatusIcon/StatusIcon";
import { ApplicationStatusDescription } from "./ApplicationStatusDescription";
import { ApplicationStatusDismiss } from "./ApplicationStatusDismiss";
import { ApplicationStatusMessage } from "./ApplicationStatusMessage";
import "./application-status.css";

export type ApplicationStatusVariant = StatusIconVariant;

export interface ApplicationStatusProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "role"
> {
  variant: ApplicationStatusVariant;
  role?: "status" | "alert";
}

const ApplicationStatusRoot = ({
  variant,
  role = "status",
  className,
  children,
  ...rest
}: ApplicationStatusProps) => (
  <section
    {...rest}
    role={role}
    className={clsx("sd3-application-status", className)}
    data-variant={variant}
  >
    <span data-part="icon">
      <StatusIcon variant={variant} />
    </span>
    {children}
  </section>
);

ApplicationStatusRoot.displayName = "ApplicationStatus";

export const ApplicationStatus = Object.assign(ApplicationStatusRoot, {
  Message: ApplicationStatusMessage,
  Description: ApplicationStatusDescription,
  Dismiss: ApplicationStatusDismiss,
});
