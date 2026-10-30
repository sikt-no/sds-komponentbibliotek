import { createContext, useContext } from "react";
import type { Size } from "../../../types";

export interface ToggleGroupContextValue {
  size: Size;
  selectedValue?: string;
  fallbackTabStopValue?: string;
  onItemChange: (value: string) => void;
  disabled?: boolean;
}

export const ToggleGroupContext = createContext<ToggleGroupContextValue | null>(
  null,
);

export const useToggleGroupContext = (): ToggleGroupContextValue => {
  const ctx = useContext(ToggleGroupContext);
  if (ctx === null) {
    throw new Error("ToggleGroup.Item must be used inside a <ToggleGroup>.");
  }
  return ctx;
};
