import type { ReactNode } from "react";

export interface CheckboxCardHelpTextProps {
  children: ReactNode;
}

export const CheckboxCardHelpText = ({
  children,
}: CheckboxCardHelpTextProps) => <span data-part="help-text">{children}</span>;
CheckboxCardHelpText.displayName = "CheckboxCard.HelpText";
