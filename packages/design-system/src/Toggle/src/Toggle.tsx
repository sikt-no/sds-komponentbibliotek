import { clsx } from "clsx/lite";
import type { InputHTMLAttributes, ReactNode } from "react";
import "./toggle.css";

export interface ToggleProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "role"
> {
  /** Label text. If omitted, Toggle renders only the switch control; the consumer must provide an accessible name (e.g. `aria-label` or an external `<label htmlFor>`). */
  children?: ReactNode;
  /** Visual position of the label relative to the switch. Defaults to `"left"`. Ignored when no `children` is provided. */
  labelPosition?: "left" | "right";
}

export const Toggle = ({
  className,
  children,
  style,
  labelPosition,
  ...rest
}: ToggleProps) =>
  children == null ? (
    <input
      {...rest}
      className={clsx("sd3-toggle", className)}
      style={style}
      type="checkbox"
      role="switch"
      data-part="control"
    />
  ) : (
    <label
      className={clsx("sd3-toggle", className)}
      style={style}
      data-label-position={labelPosition}
    >
      {children}
      <input {...rest} type="checkbox" role="switch" data-part="control" />
    </label>
  );
Toggle.displayName = "Toggle";
