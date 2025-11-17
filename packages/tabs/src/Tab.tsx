import { type BadgeProps } from "@sikt/sds-badge";
import { clsx } from "clsx/lite";
import {
  HTMLAttributes,
  KeyboardEvent,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  useContext,
  PropsWithChildren,
  MouseEvent,
  forwardRef,
} from "react";
import { TabsContext } from "./Tabs";

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  badge?: ReactNode;
  onClick?: (e: MouseEvent) => void;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ children, className, icon, badge, onClick, ...rest }: TabProps, ref) => {
    const { index } = rest as { index: number };
    const context = useContext(TabsContext);

    if (!context) {
      console.warn(
        "TabContext missing. Component needs to be used inside <Tabs>",
      );
      return null;
    }

    const {
      id,
      count,
      isSelectOnFocus,
      selectedIndex,
      setSelectedIndex,
      setPreviousIndex,
    } = context;

    const isSelected = index === selectedIndex;
    const handleSelect = (index: number) => {
      if (isSelectOnFocus) {
        setPreviousIndex(selectedIndex);
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

        handleSelect(
          selectedIndex > firstIndex ? selectedIndex - 1 : lastIndex,
        );
      } else if (event.key === "ArrowRight") {
        const nextSibling = currentTarget.nextSibling as HTMLElement;
        if (index < lastIndex) {
          nextSibling.focus();
        } else {
          firstChild.focus();
        }

        handleSelect(
          selectedIndex < lastIndex ? selectedIndex + 1 : firstIndex,
        );
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
        ref={ref}
        className={clsx("sds-tabs__tab", className)}
        role="tab"
        aria-selected={isSelected}
        aria-controls={`panel-${id}-${index}`}
        id={`tab-${id}-${index}`}
        tabIndex={isSelected ? 0 : -1}
        onClick={(event) => {
          setPreviousIndex(selectedIndex);
          setSelectedIndex(index);

          if (onClick) {
            onClick(event);
          }
        }}
        onKeyDown={handleKeyPress}
        {...rest}
      >
        {icon && <span className="sds-tabs__tab-icon">{icon}</span>}
        {children}
        {badge && (
          <span className="sds-tabs__tab-badge">
            {isValidElement(badge) &&
              cloneElement(
                badge as ReactElement<PropsWithChildren<BadgeProps>>,
                {
                  visibility: "strong",
                },
              )}
          </span>
        )}
      </button>
    );
  },
);

Tab.displayName = "Tab";
