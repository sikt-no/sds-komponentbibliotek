import React, { AnchorHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: ReactNode;
}

export const Link = ({ children, className, ...rest }: LinkProps) => {
  return (
    <a className={clsx("sds-typography-link", className)} {...rest}>
      {children}
    </a>
  );
};
