import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { clsx } from "clsx/lite";
import {
  Children,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  isValidElement,
  useId,
} from "react";
import "./tabs.pcss";
import { TabPanelProps } from "./TabPanel";

export interface TabsContextType {
  id: string;
  count: number;
  isSelectOnFocus: boolean;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

export const TabsContext = createContext<TabsContextType | null>(null);

export interface TabsProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  defaultIndex?: number;
  controlledIndex?: number;
  isSelectOnFocus?: boolean;
  onValueChange?: (index: number) => void;
  children: ReactNode;
  className?: string;
}

export const Tabs = ({
  defaultIndex = 0,
  controlledIndex,
  onValueChange,
  isSelectOnFocus = false,
  children,
  className,
  ...rest
}: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = useControllableState({
    prop: controlledIndex,
    defaultProp: defaultIndex,
    onChange: onValueChange,
  });

  const id = useId();

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
      }}
    >
      <div className={clsx("sds-tabs", className)} {...rest}>
        {Children.map(arrayChildren, (child, index) => {
          const isTabListElement = index === 0;
          if (isValidElement(child) && !isTabListElement) {
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

Tabs.displayName = "Tabs";
