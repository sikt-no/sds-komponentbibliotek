import { Slot, Slottable } from "@radix-ui/react-slot";
import { clsx } from "clsx/lite";
import {
  AnchorHTMLAttributes,
  ReactNode,
  forwardRef,
  cloneElement,
  isValidElement,
} from "react";
import type { ButtonIconVariant, ButtonSize, ButtonVariant } from "./Button";
import { reactNodeToString } from "./utils/reactNodeToString";
import "./button-link.pcss";

export type ButtonLinkProps =
  | ButtonLinkChildrenProps
  | ButtonLinkAriaLabelProps;

interface ButtonLinkBaseProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  icon?: ReactNode;
  iconVariant?: ButtonIconVariant;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /**
   * Use to change element type into alternative React component. Useful with libraries that require their own routing components.
   *
   * For example `<ButtonLink asChild><NextLink>` would result in a `<NextLink>` with all properties of this component.
   *
   * @default false
   */
  asChild?: boolean;
  /**
   * Notification element to display on the button.
   * Should be a `@sikt/sds-notification` element.
   * The notification element should handle aria attributes itself.
   */
  notification?: ReactNode;
}

interface ButtonLinkAriaLabelProps extends ButtonLinkBaseProps {
  "aria-label": NonNullable<string>;
}

interface ButtonLinkChildrenProps extends ButtonLinkBaseProps {
  children: ReactNode;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      variant = "subtle",
      size = "default",
      children,
      className,
      href,
      icon,
      iconVariant = "right",
      notification,
      asChild = false,
      ...rest
    }: ButtonLinkProps,
    ref,
  ) => {
    const Comp = asChild ? Slot : "a";
    const ariaLabel = children ? reactNodeToString(children) : undefined;
    const iconOnly = iconVariant === "only";
    const iconLeft = iconVariant === "left";
    const iconElement = icon && (
      <span
        className={clsx("sds-button__icon", `sds-button__icon--${iconVariant}`)}
      >
        {icon}
      </span>
    );

    return (
      <Comp
        ref={ref}
        className={clsx(
          "sds-button-link",
          "sds-button",
          `sds-button--${variant}`,
          size !== "default" && `sds-button--${size}`,
          iconLeft && "sds-button--icon-left",
          className,
        )}
        href={href}
        aria-label={iconOnly ? ariaLabel : undefined}
        {...rest}
      >
        {(!icon || !iconOnly) &&
          (asChild && isValidElement(children) ? (
            <Slottable>
              {cloneElement(
                children,
                children.props ?? {},
                <span className="sds-button__label">
                  {/* @ts-expect-error Property does not exist on type */}
                  {children.props?.children}
                </span>,
              )}
            </Slottable>
          ) : (
            <span className="sds-button__label">{children}</span>
          ))}
        {icon &&
          (iconOnly && asChild && isValidElement(children) ? (
            <Slottable>
              {cloneElement(children, children.props ?? {}, iconElement)}
            </Slottable>
          ) : (
            iconElement
          ))}

        {notification && (
          <span className="sds-button__notification">{notification}</span>
        )}
      </Comp>
    );
  },
);

ButtonLink.displayName = "ButtonLink";
