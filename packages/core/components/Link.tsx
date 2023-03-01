import React, { AnchorHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: ReactNode;
  isExternal?: boolean;
}

export const Link = ({
  children,
  className,
  isExternal,
  ...rest
}: LinkProps) => {
  return (
    <a
      className={clsx(
        "sds-typography-link",
        isExternal && "sds-typography-link--external",
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
};
