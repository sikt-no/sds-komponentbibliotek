import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import "./button.pcss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

interface ButtonTypes {
  buttonType: "primary" | "secondary" | "tertiary";
}

const Button = ({
  buttonType,
  children,
  className,
  onClick,
  ...rest
}: ButtonProps & ButtonTypes) => {
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
      <span className="horisont-button__label">{children}</span>
    </button>
  );
};

export const PrimaryButton = (props: ButtonProps) =>
  Button({ ...props, buttonType: "primary" });
export const SecondaryButton = (props: ButtonProps) =>
  Button({ ...props, buttonType: "secondary" });
export const TertiaryButton = (props: ButtonProps) =>
  Button({ ...props, buttonType: "tertiary" });
