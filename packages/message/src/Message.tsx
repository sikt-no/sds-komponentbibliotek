import { SuccessIcon, InfoIcon, AlertIcon, FailedIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import { HTMLAttributes, ReactNode } from "react";
import "./message.css";

type MessageVariant = "info" | "warning" | "success" | "critical";

interface MessageProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  callToAction?: ReactNode;
  variant?: MessageVariant;
  type?: "bar" | "box";
}

type MessageBaseProps = Omit<MessageProps, "callToAction" | "variant" | "type">;

export type AlertVariant = Extract<MessageVariant, "success" | "critical">;

export interface AlertProps extends MessageBaseProps {
  callToAction?: ReactNode;
  variant: AlertVariant;
}

export type ApplicationStatusVariant = Extract<
  MessageVariant,
  "info" | "warning"
>;

export interface ApplicationStatusProps extends MessageBaseProps {
  callToAction?: ReactNode;
  variant: ApplicationStatusVariant;
}

export type ErrorSummaryProps = Omit<MessageBaseProps, "variant">;

export type GuidePanelVariant = Extract<MessageVariant, "info" | "warning">;

export interface GuidePanelProps extends MessageBaseProps {
  variant: Extract<MessageVariant, "info" | "warning">;
}

const Message = ({
  className,
  children,
  callToAction,
  variant,
  type,
  role,
  "aria-live": ariaLive,
  ...rest
}: MessageProps) => {
  return (
    <div role={role} aria-live={ariaLive}>
      {children && (
        <div
          className={clsx(
            "sds-message",
            `sds-message--${variant}`,
            `sds-message--${type}`,
            className,
          )}
          {...rest}
        >
          <span className="sds-message__icon">
            {variant === "info" && <InfoIcon />}
            {variant === "warning" && <AlertIcon />}
            {variant === "success" && <SuccessIcon />}
            {variant === "critical" && <FailedIcon />}
          </span>
          <span className="sds-message__message">{children}</span>
          {callToAction && (
            <span className="sds-message__cta">{callToAction}</span>
          )}
        </div>
      )}
    </div>
  );
};

/**
 * Is used to give instant feedback on a user action, for example posting a form or saving changes.
 * It should be placed in context of that action, and not be placed above other content.
 */
export const Alert = (props: AlertProps) => (
  <Message role="alert" {...props} type="box" />
);
Alert.displayName = "Alert";

/**
 * Is used to indicate status on application level. Typically placed under the header or main menu.
 * It can, in most cases, not be dismissed by the user since it is needed to show the current system status.
 */
export const ApplicationStatus = ({
  className,
  ...props
}: ApplicationStatusProps) => (
  <Message
    role="status"
    {...props}
    type="bar"
    className={clsx("sds-message--application-status", className)}
  />
);
ApplicationStatus.displayName = "ApplicationStatus";

/**
 * Is used to summarize errors in a form. Should help the user find errors if there are many.
 */
export const ErrorSummary = (props: ErrorSummaryProps) => (
  <Message
    aria-live="polite"
    tabIndex={-1}
    {...props}
    variant="critical"
    type="box"
  />
);
ErrorSummary.displayName = "ErrorSummary";

/**
 * Is used to give to give reasurment and additional information to a task or work flow.
 * For example where users struggle, where irreversible changes are made,
 * where there are error sources like fetched data or where manual validation is needed.
 */
export const GuidePanel = (props: GuidePanelProps) => (
  <Message {...props} type="box" />
);
GuidePanel.displayName = "GuidePanel";
