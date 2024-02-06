import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import "./button.pcss";

export type ButtonProps = ButtonChildrenProps | ButtonAriaLabelProps;
export type ButtonVariant = "strong" | "subtle" | "transparent" | "critical";
export type ButtonSize = "default" | "small";
export type ButtonIconVariant = "right" | "left" | "only";

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: ReactNode;
  iconVariant?: "right" | "left" | "only";
  variant?: ButtonVariant;
  size?: ButtonSize;
}

interface ButtonAriaLabelProps extends ButtonBaseProps {
  "aria-label": string;
}

interface ButtonChildrenProps extends ButtonBaseProps {
  children: ReactNode;
}

export const Button = ({
  variant = "subtle",
  size = "default",
  children,
  className,
  onClick,
  icon,
  iconVariant = "right",
  ...rest
}: ButtonProps) => {
  const ariaLabel = typeof children === "string" ? children : undefined;
  return (
    <button
      className={clsx(
        "sds-button",
        `sds-button--${variant}`,
        size !== "default" && `sds-button--${size}`,
        className,
      )}
      onClick={onClick}
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
    </button>
  );
};
