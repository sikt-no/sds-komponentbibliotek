import { Slot, Slottable } from "@radix-ui/react-slot";
import { clsx } from "clsx/lite";
import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: ReactNode;
  isNavigation?: boolean;
  isExternal?: boolean;
  noIcon?: boolean;
  asChild?: boolean;
  icon?: ReactNode;
  iconVariant?: "right" | "left";
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      className,
      isNavigation,
      isExternal,
      noIcon,
      icon,
      iconVariant = "right",
      asChild = false,
      ...rest
    }: LinkProps,
    ref,
  ) => {
    const Comp = asChild ? Slot : "a";
    const iconLeft = iconVariant === "left";

    return (
      <Comp
        ref={ref}
        className={clsx(
          "sds-typography-link",
          isNavigation && "sds-typography-link--navigation",
          isExternal && "sds-typography-link--external",
          noIcon && "sds-typography-link--no-icon",
          icon && iconLeft && "sds-typography-link--icon-left",
          className,
        )}
        {...rest}
      >
        <Slottable>{children}</Slottable>
        {icon && (
          <span
            className={clsx(
              "sds-typography-link__icon",
              `sds-typography-link__icon--${iconVariant}`,
            )}
          >
            {icon}
          </span>
        )}
      </Comp>
    );
  },
);

Link.displayName = "Link";
