import { Slot, Slottable } from "@radix-ui/react-slot";
import { clsx } from "clsx/lite";
import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";
import type { ButtonIconVariant, ButtonSize, ButtonVariant } from "./Button";
import "./button-link.pcss";

export type ButtonLinkProps =
  | ButtonLinkChildrenProps
  | ButtonLinkAriaLabelProps;

interface ButtonLinkBaseProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  icon?: ReactNode;
  iconVariant?: ButtonIconVariant;
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

interface ButtonLinkAriaLabelProps extends ButtonLinkBaseProps {
  "aria-label": NonNullable<string>;
}

interface ButtonLinkChildrenProps extends ButtonLinkBaseProps {
  children: ReactNode;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      variant = "subtle",
      size = "default",
      children,
      className,
      href,
      icon,
      iconVariant = "right",
      asChild = false,
      ...rest
    }: ButtonLinkProps,
    ref,
  ) => {
    const Comp = asChild ? Slot : "a";
    const ariaLabel = typeof children === "string" ? children : undefined;
    const iconOnly = iconVariant === "only";
    const iconLeft = iconVariant === "left";

    return (
      <Comp
        ref={ref}
        className={clsx(
          "sds-button-link",
          "sds-button",
          `sds-button--${variant}`,
          size !== "default" && `sds-button--${size}`,
          iconLeft && "sds-button--icon-left",
          className,
        )}
        href={href}
        aria-label={iconOnly ? ariaLabel : undefined}
        {...rest}
      >
        {(!icon || !iconOnly) && <Slottable>{children}</Slottable>}
        {icon && (
          <span
            className={clsx(
              "sds-button__icon",
              `sds-button__icon--${iconVariant}`,
            )}
          >
            {icon}
          </span>
        )}
      </Comp>
    );
  },
);

ButtonLink.displayName = "ButtonLink";
