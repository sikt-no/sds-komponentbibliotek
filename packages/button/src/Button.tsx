import { clsx } from "clsx/lite";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import "./button.pcss";

export type ButtonProps = ButtonChildrenProps | ButtonAriaLabelProps;
export type ButtonVariant =
  | "strong"
  | "subtle"
  | "transparent"
  | "critical"
  | "neutral"
  | "neutral-transparent";
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
  "aria-label": NonNullable<string>;
}

interface ButtonChildrenProps extends ButtonBaseProps {
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "subtle",
      size = "default",
      children,
      className,
      onClick,
      icon,
      iconVariant = "right",
      type = "button",
      ...rest
    }: ButtonProps,
    ref,
  ) => {
    const ariaLabel = typeof children === "string" ? children : undefined;
    const iconOnly = iconVariant === "only";
    const iconLeft = iconVariant === "left";

    return (
      <button
        ref={ref}
        className={clsx(
          "sds-button",
          `sds-button--${variant}`,
          size !== "default" && `sds-button--${size}`,
          iconLeft && "sds-button--icon-left",
          className,
        )}
        onClick={onClick}
        aria-label={iconOnly ? ariaLabel : undefined}
        type={type}
        {...rest}
      >
        {(!icon || !iconOnly) && children}
        {icon && (
          <span
            className={clsx(
              "sds-button__icon",
              `sds-button__icon--${iconVariant}`,
            )}
          >
            {icon}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
