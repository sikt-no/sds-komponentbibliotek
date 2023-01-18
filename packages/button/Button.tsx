import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import "./button.pcss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  iconType?: "right" | "left" | "only";
  color?: "light" | "dark";
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
  color = "dark",
  ...rest
}: ButtonProps & ButtonTypes) => {
  const ariaLabel = typeof children === "string" ? children : undefined;
  return (
    <button
      className={clsx(
        "horisont-button",
        `horisont-button--${buttonType}`,
        buttonType === "primary" ? `horisont-button--${color}` : null,
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {icon && iconType === "left" && (
        <div className="horisont-button__icon">{icon}</div>
      )}
      {icon && iconType === "only" ? (
        <div className="horisont-button__icon" aria-label={ariaLabel}>
          {icon}
        </div>
      ) : (
        <span className="horisont-button__label">{children}</span>
      )}
      {icon && iconType === "right" && (
        <div className="horisont-button__icon">{icon}</div>
      )}
    </button>
  );
};

export const PrimaryButton = (props: ButtonProps) =>
  Button({ ...props, buttonType: "primary" });
export const SecondaryButton = (props: Omit<ButtonProps, "color">) =>
  Button({ ...props, buttonType: "secondary" });
export const TertiaryButton = (props: Omit<ButtonProps, "color">) =>
  Button({ ...props, buttonType: "tertiary" });
