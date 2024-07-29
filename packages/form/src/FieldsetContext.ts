import { createContext, useContext } from "react";

export interface FieldsetState {
  name?: string;
  error?: boolean;
}

export const FieldsetContext = createContext<FieldsetState | undefined>(
  undefined,
);

export function useFieldset(): FieldsetState | undefined {
  return useContext(FieldsetContext);
}
