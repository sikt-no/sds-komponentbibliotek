import React, { Children, cloneElement, useId, useState } from "react";
import clsx from "clsx";
import "./tabs.pcss";
import { TabPanelProps } from "./TabPanel";

export type TabsContextType = {
  id: string;
  count: number;
  isSelectOnFocus: boolean;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
};

export const TabsContext = React.createContext<TabsContextType | null>(null);

export interface TabsProps {
  defaultIndex?: number;
  isSelectOnFocus?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Tabs = ({
  defaultIndex = 0,
  isSelectOnFocus = false,
  children,
  className,
  ...rest
}: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const id = useId();

  const arrayChildren = Children.toArray(children);
  const count = arrayChildren.length - 1;

  return (
    <TabsContext.Provider
      value={{ id, count, isSelectOnFocus, selectedIndex, setSelectedIndex }}
    >
      <div className={clsx("sds-tabs", className)} {...rest}>
        {Children.map(arrayChildren, (child, index) => {
          if (React.isValidElement(child) && index > 0) {
            return (
              <>
                {cloneElement(
                  child as React.ReactElement<
                    TabPanelProps & { index: number }
                  >,
                  {
                    index: index - 1,
                  }
                )}
              </>
            );
          } else {
            return child;
          }
        })}
      </div>
    </TabsContext.Provider>
  );
};
