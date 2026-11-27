import {
  autoUpdate,
  computePosition,
  flip,
  limitShift,
  offset,
  shift,
  type Middleware,
  type MiddlewareState,
  type Placement,
} from "@floating-ui/dom";
import { useEffect, type RefObject } from "react";
import type { PopoverPlacement } from "./Popover";

const toFloatingPlacement: Record<PopoverPlacement, Placement> = {
  "top-start": "top-start",
  "top-center": "top",
  "top-end": "top-end",
  "right-start": "right-start",
  "right-center": "right",
  "right-end": "right-end",
  "bottom-start": "bottom-start",
  "bottom-center": "bottom",
  "bottom-end": "bottom-end",
  "left-start": "left-start",
  "left-center": "left",
  "left-end": "left-end",
};

// Keeps the arrow clear of the popover's rounded corners when the trigger
// center falls outside the popover body (e.g. narrow popover under wide trigger).
const ARROW_EDGE_INSET = 16;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const arrowCssVars = (): Middleware => ({
  name: "arrowCssVars",
  fn({ x, y, rects, elements, placement }: MiddlewareState) {
    const { reference, floating } = rects;
    const [side, alignment] = placement.split("-") as [
      "top" | "right" | "bottom" | "left",
      "start" | "end" | undefined,
    ];
    const isVertical = side === "top" || side === "bottom";
    const mainSize = isVertical ? floating.width : floating.height;
    const minPos = ARROW_EDGE_INSET;
    const maxPos = mainSize - ARROW_EDGE_INSET;

    let pos: number;
    if (alignment === "start") {
      pos = minPos;
    } else if (alignment === "end") {
      pos = maxPos;
    } else {
      const raw = isVertical
        ? reference.width / 2 + reference.x - x
        : reference.height / 2 + reference.y - y;
      pos = clamp(raw, minPos, maxPos);
    }
    pos = Math.round(pos);

    elements.floating.style.setProperty(
      isVertical ? "--arrow-x" : "--arrow-y",
      `${pos}px`,
    );
    return {};
  },
});

export const usePopover = (
  ref: RefObject<HTMLElement | null>,
  id: string,
  placement: PopoverPlacement,
) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cleanup: (() => void) | undefined;

    const startPositioning = () => {
      const anchor = document.querySelector<HTMLElement>(
        `[popovertarget="${CSS.escape(id)}"]`,
      );
      if (!anchor) return;

      cleanup = autoUpdate(anchor, el, () => {
        void computePosition(anchor, el, {
          strategy: "fixed",
          placement: toFloatingPlacement[placement],
          middleware: [
            offset(12),
            flip({ padding: 8 }),
            shift({ padding: 8, limiter: limitShift() }),
            arrowCssVars(),
          ],
        }).then(({ x, y, placement }) => {
          el.style.translate = `${x}px ${y}px`;
          el.setAttribute("data-placement", placement);
        });
      });
    };

    const handleToggle = (event: Event) => {
      const e = event as ToggleEvent;
      if (e.newState === "open") {
        startPositioning();
      } else if (e.newState === "closed") {
        cleanup?.();
        cleanup = undefined;
      }
    };

    el.addEventListener("toggle", handleToggle);
    return () => {
      el.removeEventListener("toggle", handleToggle);
      cleanup?.();
    };
  }, [ref, id, placement]);
};
