import React, { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: ReactNode;
  isExternal?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, isExternal, ...rest }: LinkProps, ref) => {
    return (
      <a
        ref={ref}
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
  }
);

Link.displayName = "Link";
