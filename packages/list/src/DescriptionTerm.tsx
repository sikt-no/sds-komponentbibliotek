import { clsx } from "clsx";
import { HTMLAttributes, ReactNode } from "react";

export interface DescriptionTermProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export const DescriptionTerm = ({
  children,
  className,
}: DescriptionTermProps) => {
  return (
    <dt className={clsx("sds-description-list__term", className)}>
      {children}
    </dt>
  );
};
