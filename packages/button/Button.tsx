import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import "./button.pcss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

interface ButtonTypes {
  buttonType: "primary" | "secondary" | "tertiary";
}

const Button = ({
  buttonType,
  children,
  className,
  onClick,
  iconLeft,
  iconRight,
  icon,
  ...rest
}: ButtonProps & ButtonTypes) => {
  const ariaLabel = typeof children === "string" ? children : undefined;
  return (
    <button
      className={clsx(
        "horisont-button",
        `horisont-button--${buttonType}`,
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {iconLeft && <div className="horisont-button__icon">{iconLeft}</div>}
      {icon ? (
        <div className="horisont-button__icon" aria-label={ariaLabel}>
          {icon}
        </div>
      ) : (
        <span className="horisont-button__label">{children}</span>
      )}
      {iconRight && <div className="horisont-button__icon">{iconRight}</div>}
    </button>
  );
};

export const PrimaryButton = (props: ButtonProps) =>
  Button({ ...props, buttonType: "primary" });
export const SecondaryButton = (props: Omit<ButtonProps, "icon">) =>
  Button({ ...props, buttonType: "secondary" });
export const TertiaryButton = (props: Omit<ButtonProps, "icon">) =>
  Button({ ...props, buttonType: "tertiary" });
