import React, { AnchorHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import "./button-link.pcss";

export type ButtonLinkProps = ButtonChildrenProps | ButtonAriaLabelProps;

interface ButtonBaseProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  icon?: ReactNode;
  iconType?: "right" | "left" | "only";
  buttonType?: "primary" | "secondary" | "tertiary";
}

interface ButtonAriaLabelProps extends ButtonBaseProps {
  "aria-label": string;
}

interface ButtonChildrenProps extends ButtonBaseProps {
  children: ReactNode;
}

export const ButtonLink = ({
  buttonType = "primary",
  children,
  className,
  href,
  icon,
  iconType = "right",
  ...rest
}: ButtonLinkProps) => {
  const ariaLabel = typeof children === "string" ? children : undefined;
  return (
    <a
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
        <div className="sds-button__icon">{icon}</div>
      )}
      {(!icon || iconType !== "only") && (
        <span className="sds-button__label">{children}</span>
      )}
      {icon && iconType === "right" && (
        <div className="sds-button__icon">{icon}</div>
      )}
    </a>
  );
};
