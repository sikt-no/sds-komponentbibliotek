import { clsx } from "clsx/lite";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { reactNodeToString } from "./utils/reactNodeToString";
import "./button.css";

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
  /**
   * Icon element to display on the component.
   * Should be a `@sikt/sds-icons` element,
   * or optionally `@phosphor-icons/react`
   * (with `className="sds-icon" aria-hidden="true"`).
   */
  icon?: ReactNode;
  iconVariant?: "right" | "left" | "only";
  variant?: ButtonVariant;
  size?: ButtonSize;
  /**
   * Notification element to display on the button.
   * Should be a `@sikt/sds-notification` element.
   * The notification element should handle aria attributes itself.
   */
  notification?: ReactNode;
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
      notification,
      type = "button",
      ...rest
    }: ButtonProps,
    ref,
  ) => {
    const ariaLabel = children ? reactNodeToString(children) : undefined;
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
        {(!icon || !iconOnly) && (
          <span className="sds-button__label">{children}</span>
        )}

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

        {notification && (
          <span className="sds-button__notification">{notification}</span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
