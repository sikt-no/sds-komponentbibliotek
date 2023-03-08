import React from "react";
import clsx from "clsx";
import { TabsContext, TabsContextType } from "./Tabs";

export interface TabPanelProps {
  children: React.ReactNode;
  className?: string;
}

export const TabPanel = ({ children, className, ...rest }: TabPanelProps) => {
  const { index } = rest as { index: number };
  const { id, selectedIndex } = React.useContext(
    TabsContext
  ) as TabsContextType;
  const isSelected = index === selectedIndex;
  return (
    <div
      className={clsx("sds-tabs__tab-panel", className)}
      id={`panel-${id}-${index}`}
      role="tabpanel"
      tabIndex={isSelected ? 0 : -1}
      aria-labelledby={`tab-${id}-${index}`}
      hidden={!isSelected}
      {...rest}
    >
      {children}
    </div>
  );
};
