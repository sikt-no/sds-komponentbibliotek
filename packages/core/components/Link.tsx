import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: ReactNode;
  isExternal?: boolean;
  noIcon?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, isExternal, noIcon, ...rest }: LinkProps, ref) => {
    return (
      <a
        ref={ref}
        className={clsx(
          "sds-typography-link",
          isExternal && "sds-typography-link--external",
          noIcon && "sds-typography-link--no-icon",
          className,
        )}
        {...rest}
      >
        {children}
      </a>
    );
  },
);

Link.displayName = "Link";
