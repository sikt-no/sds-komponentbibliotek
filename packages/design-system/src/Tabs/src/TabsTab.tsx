import {
  type ButtonHTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { useTabsContext } from "./TabsContext";

export interface TabsTabProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "value"
> {
  value: string;
  children: ReactNode;
}

export interface TabsTabIconProps {
  children?: ReactNode;
}

export interface TabsTabSlotProps {
  children?: ReactNode;
}

const TabsTabIcon = ({ children }: TabsTabIconProps) => (
  <span data-part="icon" aria-hidden="true">
    {children}
  </span>
);
TabsTabIcon.displayName = "Tabs.Tab.Icon";

const TabsTabSlot = ({ children }: TabsTabSlotProps) => (
  <span data-part="slot">{children}</span>
);
TabsTabSlot.displayName = "Tabs.Tab.Slot";

const TabsTabRoot = ({
  value,
  onKeyDown,
  onClick,
  children,
  ...rest
}: TabsTabProps) => {
  const ctx = useTabsContext("Tabs.Tab");
  const selected = ctx.selectedValue === value;
  const isFallbackTabStop = ctx.fallbackValue === value;

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;
    const { key, currentTarget } = event;
    if (
      key !== "ArrowLeft" &&
      key !== "ArrowRight" &&
      key !== "Home" &&
      key !== "End"
    ) {
      return;
    }

    const tablist = currentTarget.closest('[role="tablist"]');
    if (!tablist) return;
    const tabs = Array.from(
      tablist.querySelectorAll<HTMLButtonElement>(
        '[role="tab"]:not([disabled])',
      ),
    );
    const current = tabs.indexOf(currentTarget);
    const last = tabs.length - 1;

    let next: number;
    if (key === "ArrowRight") next = current === last ? 0 : current + 1;
    else if (key === "ArrowLeft") next = current === 0 ? last : current - 1;
    else if (key === "Home") next = 0;
    else next = last;

    event.preventDefault();
    const nextTab = tabs[next];
    nextTab.focus();
    if (ctx.activationMode === "automatic") {
      const nextValue = nextTab.dataset.value;
      if (nextValue) ctx.onValueChange(nextValue);
    }
  };

  return (
    <button
      type="button"
      role="tab"
      id={`${ctx.baseId}-tab-${value}`}
      aria-selected={selected}
      aria-controls={`${ctx.baseId}-panel-${value}`}
      tabIndex={selected || isFallbackTabStop ? 0 : -1}
      data-part="tab"
      data-value={value}
      onKeyDown={handleKeyDown}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) ctx.onValueChange(value);
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
TabsTabRoot.displayName = "Tabs.Tab";

export const TabsTab = Object.assign(TabsTabRoot, {
  Icon: TabsTabIcon,
  Slot: TabsTabSlot,
});
