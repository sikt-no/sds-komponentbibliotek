import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import "./button.pcss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

interface ButtonTypes {
  buttonType: "primary" | "secondary";
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
      {children}
    </button>
  );
};

export const PrimaryButton = (props: ButtonProps) =>
  Button({ ...props, buttonType: "primary" });
export const SecondaryButton = (props: ButtonProps) =>
  Button({ ...props, buttonType: "secondary" });
