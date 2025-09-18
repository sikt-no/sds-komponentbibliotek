import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx/lite";
import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: ReactNode;
  isNavigation?: boolean;
  isExternal?: boolean;
  noIcon?: boolean;
  asChild?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      className,
      isNavigation,
      isExternal,
      noIcon,
      asChild = false,
      ...rest
    }: LinkProps,
    ref,
  ) => {
    const Comp = asChild ? Slot : "a";

    return (
      <Comp
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
      </Comp>
    );
  },
);

Link.displayName = "Link";
