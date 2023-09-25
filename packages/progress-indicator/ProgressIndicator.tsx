import React, { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import "./progress-indicator.pcss";

export interface ProgressIndicatorProps
  extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  className?: string;
}

export const ProgressIndicator = ({
  children,
  className,
  ...rest
}: ProgressIndicatorProps) => {
  return (
    <ol className={clsx("sds-progress-indicator", className)} {...rest}>
      {children}
    </ol>
  );
};
