import { ContextualMenuIcon } from "@sikt/sds-icons";
import { Popover } from "@sikt/sds-popover";
import { clsx } from "clsx/lite";
import {
  Children,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  useCallback,
  useRef,
  useContext,
} from "react";
import { TabProps } from "./Tab";
import { TabsContext } from "./TabsContext";
import { useTabOverflow } from "./useTabOverflow";

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  "aria-label": NonNullable<string>;
  className?: string;
}

const isTabElement = (
  child: ReactNode,
): child is ReactElement<TabProps & { index?: number }> => {
  return isValidElement(child);
};

export const TabList = ({
  children,
  "aria-label": ariaLabel,
  className,
  ...rest
}: TabListProps) => {
  const arrayChildren = Children.toArray(children);
  const tabCount = arrayChildren.filter(isTabElement).length;
  const context = useContext(TabsContext);
  const { selectedIndex } = context ?? { selectedIndex: 0 };

  const { containerRef, cutIndex } = useTabOverflow(selectedIndex, tabCount);
  const popoverTargetRef = useRef<HTMLElement | null>(null);

  const handleTogglePopover = useCallback(() => {
    popoverTargetRef.current?.togglePopover();
  }, []);

  const hasOverflow = cutIndex < tabCount;

  /* eslint-disable react-hooks/refs */
  const overflowTabList = hasOverflow ? (
    <div className="sds-tabs__popover-target">
      {Children.map(arrayChildren, (child, index) => {
        if (!isTabElement(child)) return null;

        return cloneElement(child, {
          index,
          onClick: handleTogglePopover,
          className: clsx("sds-tabs__tab-button", child.props.className),
          style: { display: cutIndex > index ? "none" : "" },
        });
      })}
    </div>
  ) : null;
  /* eslint-enable react-hooks/refs */

  return (
    <div ref={containerRef} className={clsx("sds-tabs__tab-list", className)}>
      <div
        className="sds-tabs__tab-tablist"
        role="tablist"
        aria-label={ariaLabel}
        {...rest}
      >
        {Children.map(arrayChildren, (child, index) => {
          if (!isTabElement(child)) return null;

          return cloneElement(child, {
            index,
            className: clsx(
              index !== selectedIndex && index >= cutIndex
                ? "sds-screen-reader-only sds-screen-reader-only--focusable"
                : "",
              child.props.className,
            ),
          });
        })}
      </div>
      {hasOverflow && (
        <Popover
          className="sds-tabs__tab"
          targetRef={popoverTargetRef}
          tabIndex={-1}
          aria-label="..."
          target={overflowTabList}
        >
          <span className="sds-tabs__tab-icon">
            <ContextualMenuIcon />
          </span>
        </Popover>
      )}
    </div>
  );
};

TabList.displayName = "TabList";
