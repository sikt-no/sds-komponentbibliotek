import { Slot, Slottable } from "@radix-ui/react-slot";
import { clsx } from "clsx/lite";
import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: ReactNode;
  /**
   * Will add icon to navigation links.
   */
  isNavigation?: boolean;
  /**
   * Will add icon to external links. These are default added to `target="_blank"`.
   */
  isExternal?: boolean;
  /**
   * Will hide default icons for `target="_blank"`, `href="mailto:"` & `href="tel:"`.
   */
  noIcon?: boolean;
  /**
   * Use to change element type into alternative React component. Useful with libraries that require their own routing components.
   *
   * For example `<Link asChild><NextLink>` would result in a `<NextLink>` with all properties of this component.
   *
   * @default false
   */
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
