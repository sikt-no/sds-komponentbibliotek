import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import "./button.pcss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  iconType?: "right" | "left" | "only";
}

interface ButtonTypes {
  buttonType: "primary" | "secondary" | "tertiary";
}

const Button = ({
  buttonType,
  children,
  className,
  onClick,
  icon,
  iconType = "right",
  ...rest
}: ButtonProps & ButtonTypes) => {
  const ariaLabel = typeof children === "string" ? children : undefined;
  return (
    <button
      className={clsx("sds-button", `sds-button--${buttonType}`, className)}
      onClick={onClick}
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
    </button>
  );
};

export const PrimaryButton = (props: ButtonProps) =>
  Button({ ...props, buttonType: "primary" });
export const SecondaryButton = (props: ButtonProps) =>
  Button({ ...props, buttonType: "secondary" });
export const TertiaryButton = (props: ButtonProps) =>
  Button({ ...props, buttonType: "tertiary" });
