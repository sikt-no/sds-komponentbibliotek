import {
  AlertIcon,
  FailedIcon,
  FeedbackIcon,
  InfoIcon,
  SuccessIcon,
} from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import type { HTMLAttributes, ReactNode } from "react";
import type { SizeDensity } from "../../../types";
import "./status-message.css";

export type StatusMessageVariant =
  "success" | "failure" | "warning" | "info" | "neutral";

export interface StatusMessageProps extends HTMLAttributes<HTMLDivElement> {
  variant?: StatusMessageVariant;
  size?: SizeDensity;
  children?: ReactNode;
}

export interface StatusMessageTitleProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

const StatusMessageTitle = ({
  className,
  children,
  ...rest
}: StatusMessageTitleProps) => (
  <p data-part="title" className={className} {...rest}>
    {children}
  </p>
);
StatusMessageTitle.displayName = "StatusMessage.Title";

export interface StatusMessageDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

const StatusMessageDescription = ({
  className,
  children,
  ...rest
}: StatusMessageDescriptionProps) => (
  <p data-part="description" className={className} {...rest}>
    {children}
  </p>
);
StatusMessageDescription.displayName = "StatusMessage.Description";

export interface StatusMessageBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const StatusMessageBody = ({
  className,
  children,
  ...rest
}: StatusMessageBodyProps) => (
  <div data-part="body" className={className} {...rest}>
    {children}
  </div>
);
StatusMessageBody.displayName = "StatusMessage.Body";

const VARIANT_ICON: Record<StatusMessageVariant, ReactNode> = {
  success: <SuccessIcon />,
  failure: <FailedIcon />,
  warning: <AlertIcon />,
  info: <InfoIcon />,
  neutral: <FeedbackIcon />,
};

const StatusMessageRoot = ({
  variant = "info",
  size = "standard",
  className,
  children,
  ...rest
}: StatusMessageProps) => (
  <div
    {...rest}
    className={clsx("sd3-status-message", className)}
    data-variant={variant}
    data-size={size}
  >
    <span data-part="icon">{VARIANT_ICON[variant]}</span>
    {children}
  </div>
);
StatusMessageRoot.displayName = "StatusMessage";

export const StatusMessage = Object.assign(StatusMessageRoot, {
  Title: StatusMessageTitle,
  Description: StatusMessageDescription,
  Body: StatusMessageBody,
});
