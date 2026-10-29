import { clsx } from "clsx/lite";
import type { InputHTMLAttributes, ReactNode } from "react";
import { CheckboxCardHelpText } from "./CheckboxCardHelpText";
import { CheckboxControl } from "./CheckboxControl";
import "./checkbox-card.css";

export interface CheckboxCardProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "children"
> {
  /** Label text and optional `<CheckboxCard.HelpText>`. */
  children: ReactNode;
  /** Mixed selection — renders a horizontal bar instead of a check. Takes precedence over `checked`. */
  indeterminate?: boolean;
}

const CheckboxCardRoot = ({
  className,
  children,
  style,
  indeterminate,
  ...rest
}: CheckboxCardProps) => (
  <label className={clsx("sd3-checkbox-card", className)} style={style}>
    <CheckboxControl {...rest} indeterminate={indeterminate} />
    <span data-part="body">{children}</span>
  </label>
);
CheckboxCardRoot.displayName = "CheckboxCard";

export const CheckboxCard = Object.assign(CheckboxCardRoot, {
  HelpText: CheckboxCardHelpText,
});
