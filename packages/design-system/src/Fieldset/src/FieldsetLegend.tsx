import type { HTMLAttributes, ReactNode } from "react";
import { Label } from "../../Typography";
import { useFieldsetContext } from "./FieldsetContext";

export interface FieldsetLegendProps extends HTMLAttributes<HTMLLegendElement> {
  children: ReactNode;
}

export const FieldsetLegend = ({ children, ...rest }: FieldsetLegendProps) => {
  const { size } = useFieldsetContext();
  return (
    <Label asChild size={size === "large" ? "lg" : undefined}>
      <legend data-part="legend" {...rest}>
        {children}
      </legend>
    </Label>
  );
};

FieldsetLegend.displayName = "Fieldset.Legend";
