import { clsx } from "clsx/lite";
import { ReactNode } from "react";
import "./button-group.pcss";

export interface ButtonGroupProps {
  children: ReactNode;
  className?: string;
  orientation?: "auto" | "vertical" | "horizontal";
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
