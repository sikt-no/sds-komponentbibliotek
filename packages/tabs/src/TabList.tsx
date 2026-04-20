import { useWindowResize } from "@sikt/sds-hooks";
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
  useRef,
  useEffect,
  useState,
  useContext,
} from "react";
import { TabProps } from "./Tab";
import { TabsContext } from "./Tabs";

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
  const listLength = arrayChildren.length;
  const [listCutIndex, setListCutIndex] = useState(listLength);
  const listRef = useRef<HTMLDivElement | null>(null);
  const tabListRef = useRef<HTMLDivElement | null>(null);
  const popoverTargetRef = useRef<HTMLElement | null>(null);

  const context = useContext(TabsContext);
  const { selectedIndex } = context ?? { selectedIndex: 0 };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tabsBoundingRectRight: number[] = [];

  // INFO: ignore unit test coverage for lines depending on browser rendering
  // istanbul ignore next
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculateListCutIndex = () => {
    const listBoundingRectRight =
      listRef.current?.getBoundingClientRect().right ?? 0;
    const popoverTabWidth = 48;

    tabsBoundingRectRight.some((rect, index) => {
      const hasListRectValue = listBoundingRectRight > 0;
      const lastTab = index + 1 === listLength;
      const popoverTabSpace =
        hasListRectValue && !lastTab ? popoverTabWidth : 0;

      if (listBoundingRectRight - popoverTabSpace < rect) {
        const listCutModifier = selectedIndex >= index ? -1 : 0;
        setListCutIndex(index + listCutModifier);
        return true;
      }
    });
  };

  useEffect(() => {
    // istanbul ignore next
    const tabs = tabListRef.current?.children ?? [];
    for (const [index, child] of Array.from(tabs).entries()) {
      tabsBoundingRectRight[index] = child.getBoundingClientRect().right;
    }
    calculateListCutIndex();
  }, [calculateListCutIndex, tabsBoundingRectRight]);

  // istanbul ignore next
  const handleTogglePopover = () => {
    if (popoverTargetRef.current) {
      popoverTargetRef.current.togglePopover();
    }
  };

  // istanbul ignore next
  useWindowResize(() => {
    setListCutIndex(listLength);
    calculateListCutIndex();
  });

  // istanbul ignore next
  return (
    <div ref={listRef} className={clsx("sds-tabs__tab-list", className)}>
      <div
        className="sds-tabs__tab-tablist"
        role="tablist"
        aria-label={ariaLabel}
        ref={tabListRef}
        {...rest}
      >
        {Children.map(arrayChildren, (child, index) => {
          if (!isTabElement(child)) return null;

          return cloneElement(child, {
            index,
            className: clsx(
              index !== selectedIndex && index >= listCutIndex
                ? "sds-screen-reader-only sds-screen-reader-only--focusable"
                : "",
              child.props.className,
            ),
          });
        })}
      </div>
      {listCutIndex !== listLength && (
        <Popover
          className="sds-tabs__tab"
          targetRef={popoverTargetRef}
          target={
            <div className="sds-tabs__popover-target">
              {Children.map(arrayChildren, (child, index) => {
                if (!isTabElement(child)) return null;

                return cloneElement(child, {
                  index,
                  onClick: handleTogglePopover,
                  className: clsx(
                    "sds-tabs__tab-button",
                    child.props.className,
                  ),
                  style: {
                    display: listCutIndex > index ? "none" : "",
                  },
                });
              })}
            </div>
          }
          tabIndex={-1}
          aria-label="..."
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
