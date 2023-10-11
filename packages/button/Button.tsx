import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import "./button.pcss";

export type ButtonProps = ButtonChildrenProps | ButtonAriaLabelProps;

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: ReactNode;
  iconType?: "right" | "left" | "only";
  buttonSize?: "default" | "small";
}

interface ButtonAriaLabelProps extends ButtonBaseProps {
  "aria-label": string;
}

interface ButtonChildrenProps extends ButtonBaseProps {
  children: ReactNode;
}

interface ButtonTypes {
  buttonType: "strong" | "subtle" | "transparent" | "critical";
}

const Button = ({
  buttonType,
  buttonSize = "default",
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
      className={clsx(
        "sds-button",
        `sds-button--${buttonType}`,
        buttonSize !== "default" && `sds-button--${buttonSize}`,
        className
      )}
      onClick={onClick}
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
    </button>
  );
};

export const StrongButton = (props: ButtonProps) =>
  Button({ ...props, buttonType: "strong" });
export const SubtleButton = (props: ButtonProps) =>
  Button({ ...props, buttonType: "subtle" });
export const TransparentButton = (props: ButtonProps) =>
  Button({ ...props, buttonType: "transparent" });
export const CriticalButton = (props: ButtonProps) =>
  Button({ ...props, buttonType: "critical" });
