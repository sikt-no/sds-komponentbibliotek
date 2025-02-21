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
  variant?: AlertVariant;
}

export type ApplicationStatusVariant = Extract<
  MessageVariant,
  "info" | "warning"
>;

export interface ApplicationStatusProps extends MessageBaseProps {
  callToAction?: ReactNode;
  variant?: ApplicationStatusVariant;
}

export type ErrorSummaryProps = MessageBaseProps;

export type GuidePanelVariant = Extract<MessageVariant, "info" | "warning">;

export interface GuidePanelProps extends MessageBaseProps {
  variant?: Extract<MessageVariant, "info" | "warning">;
}

const Message = ({
  className,
  children,
  callToAction,
  variant,
  type,
  ...rest
}: MessageProps) => {
  return (
    <div {...rest}>
      {children && (
        <div
          className={clsx(
            "sds-message",
            `sds-message--${variant}`,
            `sds-message--${type}`,
            className,
          )}
        >
          <span
            className="sds-message__icon"
            data-color-scheme={variant === "warning" && "light"}
          >
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
  <Message role="alert" variant="critical" {...props} type="box" />
);

export const ApplicationStatus = (props: ApplicationStatusProps) => (
  <Message role="status" variant="info" {...props} type="bar" />
);

export const ErrorSummary = (props: ErrorSummaryProps) => (
  <Message aria-live="polite" {...props} variant="critical" type="box" />
);

export const GuidePanel = (props: GuidePanelProps) => (
  <Message variant="info" {...props} type="box" />
);
