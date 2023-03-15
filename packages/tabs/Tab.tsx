import React, { KeyboardEvent, ReactElement, ReactNode } from "react";
import clsx from "clsx";
import { TabsContext, TabsContextType } from "./Tabs";

export interface TabProps {
  children: React.ReactNode;
  className?: string;
  icon?: ReactNode;
  badge?: ReactNode;
}

export const Tab = ({
  children,
  className,
  icon,
  badge,
  ...rest
}: TabProps) => {
  const { index } = rest as { index: number };
  const { id, count, isSelectOnFocus, selectedIndex, setSelectedIndex } =
    React.useContext(TabsContext) as TabsContextType;
  const isSelected = index === selectedIndex;
  const handleSelect = (index: number) => {
    if (isSelectOnFocus) {
      setSelectedIndex(index);
    }
  };
  const handleKeyPress = (event: KeyboardEvent<HTMLButtonElement>) => {
    const firstIndex = 0;
    const lastIndex = count - 1;
    const currentTarget = event.currentTarget;
    const firstChild = currentTarget.parentElement?.firstChild as HTMLElement;
    const lastChild = currentTarget.parentElement?.lastChild as HTMLElement;

    if (event.key === "ArrowLeft") {
      const previousSibling = currentTarget.previousSibling as HTMLElement;
      if (index > firstIndex) {
        previousSibling.focus();
      } else {
        lastChild.focus();
      }

      handleSelect(selectedIndex > firstIndex ? selectedIndex - 1 : lastIndex);
    } else if (event.key === "ArrowRight") {
      const nextSibling = currentTarget.nextSibling as HTMLElement;
      if (index < lastIndex) {
        nextSibling.focus();
      } else {
        firstChild.focus();
      }

      handleSelect(selectedIndex < lastIndex ? selectedIndex + 1 : firstIndex);
    } else if (event.key === "Home") {
      firstChild.focus();
      handleSelect(firstIndex);
    } else if (event.key === "End") {
      lastChild.focus();
      handleSelect(lastIndex);
    } else if (event.key === "Enter" || event.code === "Space") {
      setSelectedIndex(index);
    }
  };

  return (
    <button
      className={clsx("sds-tabs__tab", className)}
      role="tab"
      aria-selected={isSelected}
      aria-controls={`panel-${id}-${index}`}
      id={`tab-${id}-${index}`}
      tabIndex={isSelected ? 0 : -1}
      onClick={() => setSelectedIndex(index)}
      onKeyDown={handleKeyPress}
      {...rest}
    >
      {icon && <div className="sds-tabs__tab-icon">{icon}</div>}
      {children}
      {badge && (
        <div className="sds-tabs__tab-badge">
          {isSelected
            ? React.cloneElement(badge as ReactElement, { visibility: "high" })
            : badge}
        </div>
      )}
    </button>
  );
};
