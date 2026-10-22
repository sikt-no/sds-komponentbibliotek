import type { ReactNode } from "react";

export interface RadioCardHelpTextProps {
  children: ReactNode;
}

export const RadioCardHelpText = ({ children }: RadioCardHelpTextProps) => (
  <span data-part="help-text">{children}</span>
);
RadioCardHelpText.displayName = "RadioCard.HelpText";
