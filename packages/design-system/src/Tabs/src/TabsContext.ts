import { createContext, useContext } from "react";

export interface TabsContextValue {
  baseId: string;
  selectedValue?: string;
  fallbackValue?: string;
  activationMode: "manual" | "automatic";
  onValueChange: (value: string) => void;
}

export const TabsContext = createContext<TabsContextValue | null>(null);

export const useTabsContext = (consumer: string): TabsContextValue => {
  const ctx = useContext(TabsContext);
  if (ctx === null) {
    throw new Error(`${consumer} must be used inside a <Tabs>.`);
  }
  return ctx;
};
