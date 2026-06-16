import { clsx } from "clsx/lite";
import { ReactNode } from "react";
import "./button-group.css";

export interface ButtonGroupProps {
  children: ReactNode;
  className?: string;
  /**
   * Layout direction of the buttons.
   * - `auto` (default): horizontal, wrapping to vertical on small viewports.
   * - `horizontal`: always side by side.
   * - `vertical`: always stacked.
   */
  orientation?: "auto" | "vertical" | "horizontal";
  /**
   * Alignment of the buttons within the group.
   * - `split` (default): first button left-aligned, remaining buttons right-aligned.
   * - `left`: all buttons left-aligned.
   * - `right`: all buttons right-aligned.
   */
  variant?: "right" | "left" | "split";
}

export const ButtonGroup = ({
  children,
  className,
  orientation = "auto",
  variant = "split",
  ...rest
}: ButtonGroupProps) => {
  return (
    <div
      role="group"
      className={clsx(
        "sds-button-group",
        `sds-button-group--${orientation}`,
        orientation !== "vertical" && `sds-button-group--${variant}`,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

ButtonGroup.displayName = "ButtonGroup";
