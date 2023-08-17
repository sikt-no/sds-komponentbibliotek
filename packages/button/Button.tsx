import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import "./button.pcss";

export type ButtonProps = ButtonChildrenProps | ButtonAriaLabelProps;

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: ReactNode;
  iconType?: "right" | "left" | "only";
}

interface ButtonAriaLabelProps extends ButtonBaseProps {
  "aria-label": string;
}

interface ButtonChildrenProps extends ButtonBaseProps {
  children: ReactNode;
}

interface ButtonTypes {
  buttonType: "danger" | "primary" | "secondary" | "tertiary";
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

export const DangerButton = (props: ButtonProps) =>
  Button({ ...props, buttonType: "danger" });
export const PrimaryButton = (props: ButtonProps) =>
  Button({ ...props, buttonType: "primary" });
export const SecondaryButton = (props: ButtonProps) =>
  Button({ ...props, buttonType: "secondary" });
export const TertiaryButton = (props: ButtonProps) =>
  Button({ ...props, buttonType: "tertiary" });
