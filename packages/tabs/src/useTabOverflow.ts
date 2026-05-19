import { useLayoutEffect, useRef, useState } from "react";

const MENU_BTN_WIDTH = 48;

export function useTabOverflow(selectedIndex: number, tabCount: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cutIndex, setCutIndex] = useState(tabCount);
  const widthCache = useRef<number[]>([]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const recalculate = () => {
      const tabs = Array.from(
        container.querySelectorAll<HTMLElement>("[role='tab']"),
      );
      if (!tabs.length) return;

      const available = container.offsetWidth;
      if (!available) return;

      for (let i = 0; i < tabCount; i++) {
        const tab = tabs[i];
        if (!tab.classList.contains("sds-screen-reader-only")) {
          widthCache.current[i] = tab.offsetWidth;
        }
      }

      let accumulated = 0;
      let newCut = tabCount;

      for (let i = 0; i < tabCount; i++) {
        const isLast = i === tabCount - 1;
        const space = available - (isLast ? 0 : MENU_BTN_WIDTH);
        accumulated += widthCache.current[i] ?? 0;

        if (accumulated > space) {
          newCut = i;
          break;
        }
      }

      if (selectedIndex >= newCut && newCut < tabCount) {
        newCut = Math.max(0, newCut - 1);
      }

      setCutIndex(newCut);
    };

    recalculate();
    const ro = new ResizeObserver(recalculate);
    ro.observe(container);
    return () => {
      ro.disconnect();
    };
  }, [selectedIndex, tabCount]);

  return { containerRef, cutIndex };
}
