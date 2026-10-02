import { createContext, useContext } from "react";
import type { Size } from "../../../types";

export interface FieldContextValue {
  id: string;
  "aria-describedby"?: string;
  "aria-errormessage"?: string;
  "aria-invalid"?: true;
  disabled?: boolean;
  readOnly?: boolean;
  size: Size;
}

export const FieldContext = createContext<FieldContextValue | null>(null);

/** Reads Field's wiring on the input control. Spread the return value: `<input {...useFieldContext()} />`. */
export const useFieldContext = (): FieldContextValue => {
  const context = useContext(FieldContext);
  if (context === null) {
    throw new Error("useFieldContext must be called inside a <Field>.");
  }
  return context;
};
