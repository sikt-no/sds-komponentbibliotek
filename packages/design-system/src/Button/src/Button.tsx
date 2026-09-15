import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx/lite";
import { Children, type ComponentProps, type ReactNode } from "react";
import "./button.css";

export type ButtonVariant =
  "primary" | "primary-subtle" | "secondary" | "tertiary";

export type ButtonTheme = "main" | "neutral" | "danger";

export type ButtonSize = "large" | "medium" | "small";

type CommonButtonProps = Omit<
  ComponentProps<"button">,
  "aria-label" | "aria-labelledby"
> & {
  /** Render as the child element (e.g. an `<a>` or router `<Link>`). */
  asChild?: boolean;
  /** Visual emphasis. */
  variant?: ButtonVariant;
  /** Colour palette. Use `danger` for destructive actions. */
  theme?: ButtonTheme;
  /** Visual size. */
  size?: ButtonSize;
  /** Label text and/or `Button.Icon`. */
  children?: ReactNode;
};

type TextButtonProps = CommonButtonProps & {
  /** Set to `true` when the button contains only a `Button.Icon`. Collapses the button to a circle and type-forces `aria-label` or `aria-labelledby`. */
  iconOnly?: false;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

type IconOnlyButtonProps = CommonButtonProps & {
  iconOnly: true;
} & (
    | { "aria-label": string; "aria-labelledby"?: string }
    | { "aria-label"?: string; "aria-labelledby": string }
  );

export type ButtonProps = TextButtonProps | IconOnlyButtonProps;

export interface ButtonIconProps {
  /** The icon element to render. Sized by the parent Button's `size` prop. */
  children?: ReactNode;
}

const ButtonIcon = ({ children }: ButtonIconProps) => (
  <span data-part="icon" aria-hidden="true">
    {children}
  </span>
);
ButtonIcon.displayName = "Button.Icon";

export const Button = ({
  ref,
  asChild,
  variant = "primary",
  theme = "main",
  size = "medium",
  iconOnly,
  type,
  className,
  children,
  ...rest
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      className={clsx("sd3-button", className)}
      data-variant={variant}
      data-button-theme={theme}
      data-size={size}
      data-icon-only={iconOnly ? "" : undefined}
      type={asChild ? undefined : (type ?? "button")}
      {...rest}
    >
      {asChild
        ? children
        : Children.map(children, (child) =>
            typeof child === "string" || typeof child === "number" ? (
              <span data-part="label">{child}</span>
            ) : (
              child
            ),
          )}
    </Comp>
  );
};
Button.displayName = "Button";
Button.Icon = ButtonIcon;
