import { clsx } from "clsx";
import { HTMLAttributes, ReactNode } from "react";

export interface DescriptionDetailsProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export const DescriptionDetails = ({
  children,
  className,
}: DescriptionDetailsProps) => {
  return (
    <dd className={clsx("sds-description-list__details", className)}>
      {children}
    </dd>
  );
};
