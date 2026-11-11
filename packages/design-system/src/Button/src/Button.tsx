import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx/lite";
import {
  Children,
  type ComponentProps,
  HTMLAttributes,
  type ReactNode,
} from "react";
import "./button.css";
import "./button-group.css";
import type {
  Orientation,
  Size,
  ThemeButton,
  VariantButton,
} from "../../../types";

interface ButtonThemeProp {
  /**
   * Color palette. Use `critical` for destructive actions.
   *
   * @default undefined
   */
  theme?: ThemeButton;
}

export type ButtonProps = ComponentProps<"button"> &
  ButtonThemeProp & {
    /** Render as the child element (e.g. an `<a>` or router `<Link>`). */
    asChild?: boolean;
    /**
     * Visual emphasis.
     *
     * @default "primary"
     */
    variant?: VariantButton;
    /**
     * Visual size.
     *
     * @default "medium"
     */
    size?: Size;
    /** Label text and/or `Button.Icon`. A lone `Button.Icon` renders a circle — set `aria-label` or `aria-labelledby`. */
    children?: ReactNode;
  };

export interface ButtonIconProps {
  /** The icon element to render. Sized by the parent Button's `size` prop. */
  children?: ReactNode;
}

export interface ButtonAvatarProps {
  /** The avatar element to render. */
  children?: ReactNode;
}

export interface ButtonGroupProps
  extends HTMLAttributes<HTMLDivElement>, ButtonThemeProp {
  /** The button element/s to render. */
  children?: ReactNode;
  orientation?: Orientation;
  /**
   * Alignment of the buttons within the group.
   * - `split`: first button left-aligned, remaining buttons right-aligned.
   * - `left`: all buttons left-aligned.
   * - `right`: all buttons right-aligned.
   *
   * @default "right"
   */
  position?: "right" | "left" | "split";
}

const ButtonGroup = ({
  className,
  children,
  orientation = "horizontal",
  position = "right",
  theme,
  ...rest
}: ButtonGroupProps) => (
  <div
    className={clsx("sd3-button-group", className)}
    data-orientation={orientation}
    data-position={position}
    data-button-theme={theme}
    {...rest}
  >
    {children}
  </div>
);
ButtonGroup.displayName = "Button.Group";

const ButtonIcon = ({ children }: ButtonIconProps) => (
  <span data-part="icon" aria-hidden="true">
    {children}
  </span>
);
ButtonIcon.displayName = "Button.Icon";

const ButtonAvatar = ({ children }: ButtonAvatarProps) => (
  <span data-part="avatar" aria-hidden="true">
    {children}
  </span>
);
ButtonAvatar.displayName = "Button.Avatar";

export const Button = ({
  ref,
  asChild,
  variant = "primary",
  theme,
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
Button.Avatar = ButtonAvatar;
Button.Group = ButtonGroup;
