import { clsx } from "clsx/lite";
import {
  Children,
  type HTMLAttributes,
  isValidElement,
  type ReactNode,
  useCallback,
  useId,
  useMemo,
  useState,
} from "react";
import type { SizeDensity } from "../../../types";
import { TabsContext } from "./TabsContext";
import { TabsList } from "./TabsList";
import { TabsPanel } from "./TabsPanel";
import { TabsTab } from "./TabsTab";
import "./tabs.css";

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  /** @default "standard" */
  size?: SizeDensity;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** @default "manual" */
  activationMode?: "manual" | "automatic";
  children: ReactNode;
}

const collectTabValues = (children: ReactNode, into: string[]): void => {
  for (const child of Children.toArray(children)) {
    if (!isValidElement(child)) continue;
    const props = child.props as { value?: unknown; children?: ReactNode };
    if (child.type === TabsTab && typeof props.value === "string") {
      into.push(props.value);
    }
    collectTabValues(props.children, into);
  }
};

const TabsRoot = ({
  size = "standard",
  value,
  defaultValue,
  onValueChange,
  activationMode = "manual",
  className,
  children,
  ...rest
}: TabsProps) => {
  const baseId = useId();
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const selectedValue = isControlled ? value : internalValue;

  const tabValues: string[] = [];
  collectTabValues(children, tabValues);
  const hasValidSelection =
    selectedValue !== undefined && tabValues.includes(selectedValue);
  const fallbackValue = hasValidSelection ? undefined : tabValues[0];

  const handleValueChange = useCallback(
    (next: string) => {
      if (!isControlled) setInternalValue(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange],
  );

  const contextValue = useMemo(
    () => ({
      baseId,
      selectedValue,
      fallbackValue,
      activationMode,
      onValueChange: handleValueChange,
    }),
    [baseId, selectedValue, fallbackValue, activationMode, handleValueChange],
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div data-size={size} className={clsx("sd3-tabs", className)} {...rest}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};
TabsRoot.displayName = "Tabs";

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Tab: TabsTab,
  Panel: TabsPanel,
});
