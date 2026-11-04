import type { HTMLAttributes, ReactNode } from "react";

export interface ApplicationStatusDescriptionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ApplicationStatusDescription = ({
  children,
  ...rest
}: ApplicationStatusDescriptionProps) => (
  <div data-part="description" {...rest}>
    {children}
  </div>
);

ApplicationStatusDescription.displayName = "ApplicationStatus.Description";
