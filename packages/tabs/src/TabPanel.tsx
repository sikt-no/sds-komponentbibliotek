import { clsx } from "clsx/lite";
import { ReactNode, useContext } from "react";
import { TabsContext } from "./TabsContext";

export interface TabPanelProps {
  children: ReactNode;
  className?: string;
}

export const TabPanel = ({ children, className, ...rest }: TabPanelProps) => {
  const { index } = rest as { index: number };
  const context = useContext(TabsContext);

  if (!context) {
    console.warn(
      "TabContext missing. Component needs to be used inside <Tabs>",
    );
    return null;
  }

  const { id, selectedIndex } = context;

  const isSelected = index === selectedIndex;
  return (
    <div
      className={clsx("sds-tabs__tab-panel", className)}
      id={`panel-${id}-${index}`}
      role="tabpanel"
      tabIndex={isSelected ? undefined : -1}
      aria-labelledby={`tab-${id}-${index}`}
      hidden={!isSelected}
      {...rest}
    >
      {children}
    </div>
  );
};

TabPanel.displayName = "TabPanel";
