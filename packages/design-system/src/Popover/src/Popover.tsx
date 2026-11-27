import { clsx } from "clsx/lite";
import {
  useRef,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type Ref,
} from "react";
import { usePopover } from "./usePopover";
import "./popover.css";

export type PopoverPlacement =
  | "top-start"
  | "top-center"
  | "top-end"
  | "right-start"
  | "right-center"
  | "right-end"
  | "bottom-start"
  | "bottom-center"
  | "bottom-end"
  | "left-start"
  | "left-center"
  | "left-end";

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  /** DOM id. Targeted by `popoverTarget` on an opener/closer `<Button>`. */
  id: string;
  /** Preferred placement relative to the trigger. Browser flips on collision. Default `"top-start"`. */
  placement?: PopoverPlacement;
  /** Ref to the underlying `<div>` for imperative `showPopover()` / `hidePopover()`. */
  ref?: Ref<HTMLDivElement>;
}

const PopoverRoot = ({
  ref: externalRef,
  id,
  placement = "top-start",
  className,
  ...rest
}: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const setRef = (el: HTMLDivElement | null) => {
    popoverRef.current = el;
    if (typeof externalRef === "function") externalRef(el);
    else if (externalRef) externalRef.current = el;
  };
  usePopover(popoverRef, id, placement);

  return (
    <div
      ref={setRef}
      id={id}
      popover="auto"
      className={clsx("sd3-popover", className)}
      {...rest}
    />
  );
};
PopoverRoot.displayName = "Popover";

export interface PopoverInlineTextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: Ref<HTMLButtonElement>;
}

const InlineTextButton = ({
  ref,
  type = "button",
  className,
  ...rest
}: PopoverInlineTextButtonProps) => (
  <button
    ref={ref}
    type={type}
    className={clsx("sd3-popover-inline-text-button", className)}
    {...rest}
  />
);
InlineTextButton.displayName = "Popover.InlineTextButton";

export const Popover = Object.assign(PopoverRoot, {
  InlineTextButton,
});
