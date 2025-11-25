import { SuccessIcon, InfoIcon, AlertIcon, FailedIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import { HTMLAttributes, ReactNode } from "react";
import "./message.pcss";

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

export const Alert = (props: AlertProps) => (
  <Message role="alert" {...props} type="box" />
);
Alert.displayName = "Alert";

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

export const GuidePanel = (props: GuidePanelProps) => (
  <Message {...props} type="box" />
);
GuidePanel.displayName = "GuidePanel";
