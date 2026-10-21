import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx/lite";
import { Children, type ComponentProps, type ReactNode } from "react";
import "./button.css";

export type ButtonVariant =
  "primary" | "primary-subtle" | "secondary" | "tertiary";

export type ButtonTheme = "main" | "neutral" | "critical";

export type ButtonSize = "large" | "medium" | "small";

export type ButtonProps = ComponentProps<"button"> & {
  /** Render as the child element (e.g. an `<a>` or router `<Link>`). */
  asChild?: boolean;
  /** Visual emphasis. */
  variant?: ButtonVariant;
  /** Colour palette. Use `critical` for destructive actions. */
  theme?: ButtonTheme;
  /** Visual size. */
  size?: ButtonSize;
  /** Label text and/or `Button.Icon`. A lone `Button.Icon` renders a circle — set `aria-label` or `aria-labelledby`. */
  children?: ReactNode;
};

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
