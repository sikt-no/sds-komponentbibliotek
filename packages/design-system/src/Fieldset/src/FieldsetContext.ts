import { createContext, useContext } from "react";

export type FieldsetSize = "medium" | "large";

export interface FieldsetContextValue {
  id: string;
  size: FieldsetSize;
  disabled?: boolean;
  descriptionId: string;
  validationId: string;
}

export const FieldsetContext = createContext<FieldsetContextValue | null>(null);

export const useFieldsetContext = (): FieldsetContextValue => {
  const context = useContext(FieldsetContext);
  if (context === null) {
    throw new Error("useFieldsetContext must be called inside a <Fieldset>.");
  }
  return context;
};
