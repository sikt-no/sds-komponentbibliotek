import React, { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";
import "./button-link.pcss";

export type ButtonLinkProps =
  | ButtonLinkChildrenProps
  | ButtonLinkAriaLabelProps;

interface ButtonLinkBaseProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  icon?: ReactNode;
  iconType?: "right" | "left" | "only";
  buttonType?: "primary" | "secondary" | "tertiary" | "danger";
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
      buttonType = "primary",
      children,
      className,
      href,
      icon,
      iconType = "right",
      ...rest
    }: ButtonLinkProps,
    ref
  ) => {
    const ariaLabel = typeof children === "string" ? children : undefined;
    return (
      <a
        ref={ref}
        className={clsx(
          "sds-button-link",
          "sds-button",
          `sds-button--${buttonType}`,
          className
        )}
        href={href}
        aria-label={iconType === "only" ? ariaLabel : undefined}
        {...rest}
      >
        {icon && (iconType === "left" || iconType === "only") && (
          <span className="sds-button__icon">{icon}</span>
        )}
        {(!icon || iconType !== "only") && (
          <span className="sds-button__label">{children}</span>
        )}
        {icon && iconType === "right" && (
          <span className="sds-button__icon">{icon}</span>
        )}
      </a>
    );
  }
);

ButtonLink.displayName = "ButtonLink";
