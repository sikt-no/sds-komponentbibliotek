import { clsx } from "clsx/lite";
import type { InputHTMLAttributes, ReactNode } from "react";
import { RadioCardHelpText } from "./RadioCardHelpText";
import "./radio-card.css";

export interface RadioCardProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "children"
> {
  /** Label text and optional `<RadioCard.HelpText>`. */
  children: ReactNode;
}

const RadioCardRoot = ({
  className,
  children,
  style,
  ...rest
}: RadioCardProps) => (
  <label className={clsx("sd3-radio-card", className)} style={style}>
    <input {...rest} type="radio" data-part="control" />
    <span data-part="body">{children}</span>
  </label>
);
RadioCardRoot.displayName = "RadioCard";

export const RadioCard = Object.assign(RadioCardRoot, {
  HelpText: RadioCardHelpText,
});
