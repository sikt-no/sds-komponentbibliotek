import React, { HTMLAttributes } from "react";
import { clsx } from "clsx";

export interface DescriptionDetailsProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const DescriptionDetails = ({
  children,
  className,
}: DescriptionDetailsProps) => {
  return (
    <dd className={clsx("sds-description-list__details", className)}>
      {children}
    </dd>
  );
};

export default DescriptionDetails;
