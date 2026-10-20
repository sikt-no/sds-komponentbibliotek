import type { HTMLAttributes, ReactNode } from "react";

export interface FieldsetLegendProps extends HTMLAttributes<HTMLLegendElement> {
  children: ReactNode;
}

export const FieldsetLegend = ({ children, ...rest }: FieldsetLegendProps) => (
  <legend data-part="legend" {...rest}>
    {children}
  </legend>
);

FieldsetLegend.displayName = "Fieldset.Legend";
