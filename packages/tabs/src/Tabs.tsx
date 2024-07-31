import clsx from "clsx";
import {
  Children,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  isValidElement,
  useEffect,
  useId,
  useState,
} from "react";
import "./tabs.pcss";
import { TabPanelProps } from "./TabPanel";

export interface TabsContextType {
  id: string;
  count: number;
  isSelectOnFocus: boolean;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  setPreviousIndex: (index: number) => void;
}

export const TabsContext = createContext<TabsContextType | null>(null);

export interface TabsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  defaultIndex?: number;
  isSelectOnFocus?: boolean;
  onChange?: (index: number) => void;
  children: ReactNode;
  className?: string;
}

export const Tabs = ({
  defaultIndex = 0,
  onChange,
  isSelectOnFocus = false,
  children,
  className,
  ...rest
}: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const [previousIndex, setPreviousIndex] = useState(defaultIndex);
  const id = useId();

  useEffect(() => {
    if (onChange && previousIndex !== selectedIndex) {
      onChange(selectedIndex);
    }
  }, [onChange, selectedIndex]);

  const arrayChildren = Children.toArray(children);
  const count = arrayChildren.length - 1;

  return (
    <TabsContext.Provider
      value={{
        id,
        count,
        isSelectOnFocus,
        selectedIndex,
        setSelectedIndex,
        setPreviousIndex,
      }}
    >
      <div className={clsx("sds-tabs", className)} {...rest}>
        {Children.map(arrayChildren, (child, index) => {
          if (isValidElement(child) && index > 0) {
            return (
              <>
                {cloneElement(
                  child as ReactElement<TabPanelProps & { index: number }>,
                  {
                    index: index - 1,
                  },
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
