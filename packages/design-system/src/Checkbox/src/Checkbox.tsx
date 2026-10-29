import { clsx } from "clsx/lite";
import type { InputHTMLAttributes, ReactNode } from "react";
import { CheckboxControl } from "./CheckboxControl";
import "./checkbox.css";

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "children"
> {
  /** Label text. */
  children: ReactNode;
  /** Mixed selection — renders a horizontal bar instead of a check. Takes precedence over `checked`. */
  indeterminate?: boolean;
}

export const Checkbox = ({
  className,
  children,
  style,
  indeterminate,
  ...rest
}: CheckboxProps) => (
  <label className={clsx("sd3-checkbox", className)} style={style}>
    <CheckboxControl {...rest} indeterminate={indeterminate} />
    {children}
  </label>
);
Checkbox.displayName = "Checkbox";
