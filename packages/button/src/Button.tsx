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
   * Icon element to display inside the button. Use an icon from `@sikt/sds-icons`.
   * Position is controlled by `iconVariant`.
   */
  icon?: ReactNode;
  /**
   * Controls where the icon appears relative to the label.
   * - `right` (default): icon after the label.
   * - `left`: icon before the label.
   * - `only`: icon replaces the label. The label text is used as `aria-label` automatically.
   */
  iconVariant?: "right" | "left" | "only";
  /**
   * Visual emphasis of the button. Choose based on the action's importance, not aesthetics.
   * - `subtle` (default): secondary actions.
   * - `strong`: primary call to action — use at most one per section.
   * - `transparent`: low-emphasis or icon-only actions.
   * - `critical`: destructive actions such as delete or remove.
   * - `neutral` / `neutral-transparent`: neutral-tone variants.
   */
  variant?: ButtonVariant;
  /**
   * Size of the button.
   * - `default`: standard size for most contexts.
   * - `small`: compact size for dense UIs or toolbars.
   */
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
