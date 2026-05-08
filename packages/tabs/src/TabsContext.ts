import { createContext } from "react";

export interface TabsContextType {
  id: string;
  count: number;
  isSelectOnFocus: boolean;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

export const TabsContext = createContext<TabsContextType | null>(null);
