import { clsx } from "clsx/lite";
import type { InputHTMLAttributes, ReactNode } from "react";
import "./radio.css";

export interface RadioProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "children"
> {
  /** Label text. */
  children: ReactNode;
}

export const Radio = ({ className, children, style, ...rest }: RadioProps) => (
  <label className={clsx("sd3-radio", className)} style={style}>
    <input {...rest} type="radio" data-part="control" />
    {children}
  </label>
);
Radio.displayName = "Radio";
