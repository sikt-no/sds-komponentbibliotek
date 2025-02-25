import { clsx } from "clsx/lite";
import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: ReactNode;
  isNavigation?: boolean;
  isExternal?: boolean;
  noIcon?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      className,
      isNavigation,
      isExternal,
      noIcon,
      ...rest
    }: LinkProps,
    ref,
  ) => {
    return (
      <a
        ref={ref}
        className={clsx(
          "sds-typography-link",
          isNavigation && "sds-typography-link--navigation",
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
