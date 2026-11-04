import type { HTMLAttributes, ReactNode } from "react";

export interface ApplicationStatusMessageProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export const ApplicationStatusMessage = ({
  children,
  ...rest
}: ApplicationStatusMessageProps) => (
  <span data-part="message" {...rest}>
    {children}
  </span>
);

ApplicationStatusMessage.displayName = "ApplicationStatus.Message";
