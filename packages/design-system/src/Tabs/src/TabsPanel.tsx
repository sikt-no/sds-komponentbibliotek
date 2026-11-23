import type { HTMLAttributes, ReactNode } from "react";
import { useTabsContext } from "./TabsContext";

export interface TabsPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
}

export const TabsPanel = ({ value, children, ...rest }: TabsPanelProps) => {
  const ctx = useTabsContext("Tabs.Panel");
  const selected = ctx.selectedValue === value;

  return (
    <div
      role="tabpanel"
      id={`${ctx.baseId}-panel-${value}`}
      aria-labelledby={`${ctx.baseId}-tab-${value}`}
      data-part="panel"
      tabIndex={selected ? -1 : undefined}
      hidden={!selected}
      {...rest}
    >
      {children}
    </div>
  );
};
TabsPanel.displayName = "Tabs.Panel";
