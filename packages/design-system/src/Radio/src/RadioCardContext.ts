import { createContext } from "react";

export interface RadioCardContextValue {
  helpTextId?: string;
}

export const RadioCardContext = createContext<RadioCardContextValue | null>(
  null,
);
