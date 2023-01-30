import React, { HTMLAttributes } from "react";
import { clsx } from "clsx";

export interface DescriptionTermProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const DescriptionTerm = ({ children, className }: DescriptionTermProps) => {
  return (
    <dt className={clsx("sds-description-list__term", className)}>
      {children}
    </dt>
  );
};

export default DescriptionTerm;
