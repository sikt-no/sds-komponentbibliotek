import React, { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";
import type { ButtonVariant, ButtonSize, ButtonIconVariant } from "./Button";
import "./button-link.pcss";

export type ButtonLinkProps =
  | ButtonLinkChildrenProps
  | ButtonLinkAriaLabelProps;

interface ButtonLinkBaseProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconVariant?: ButtonIconVariant;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

interface ButtonLinkAriaLabelProps extends ButtonLinkBaseProps {
  "aria-label": string;
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
      ...rest
    }: ButtonLinkProps,
    ref,
  ) => {
    const ariaLabel = typeof children === "string" ? children : undefined;
    return (
      <a
        ref={ref}
        className={clsx(
          "sds-button-link",
          "sds-button",
          `sds-button--${variant}`,
          size !== "default" && `sds-button--${size}`,
          className,
        )}
        href={href}
        aria-label={iconVariant === "only" ? ariaLabel : undefined}
        {...rest}
      >
        {icon && (iconVariant === "left" || iconVariant === "only") && (
          <span className="sds-button__icon">{icon}</span>
        )}
        {(!icon || iconVariant !== "only") && (
          <span className="sds-button__label">{children}</span>
        )}
        {icon && iconVariant === "right" && (
          <span className="sds-button__icon">{icon}</span>
        )}
      </a>
    );
  },
);

ButtonLink.displayName = "ButtonLink";
