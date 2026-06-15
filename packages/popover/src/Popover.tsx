import { clsx } from "clsx/lite";
import {
  HTMLAttributes,
  MouseEvent,
  ReactNode,
  useId,
  useRef,
  RefObject,
} from "react";
import { useFocusWithin } from "react-aria";
import "./popover.css";

export interface PopoverProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  /**
   * ReactNode of the popover trigger element.
   */
  children: ReactNode;
  /**
   * ReactNode of the popover target element, the element opened when clicking the trigger.
   */
  target: ReactNode;
  /**
   * The popover attribute can take one of the following values:
   * - Setting an empty value for popover — popover or popover="" — is equivalent to setting popover="auto".
   * - **auto** popovers can be "light dismissed" — this means that you can hide the popover by clicking outside it or pressing the Esc key. Showing an auto popover will generally close other auto popovers that are already displayed, unless they are nested.
   * - **manual** popovers cannot be "light dismissed" and are not automatically closed. Popovers must explicitly be displayed and closed using declarative show/hide/toggle buttons or JavaScript. Multiple independent manual popovers can be shown simultaneously.
   *
   *  @default "auto"
   */
  popover?: "" | "auto" | "manual";
  /**
   * Boolean that anchors the popover to the trigger element.
   *
   *  @default true
   */
  anchor?: boolean;
  /**
   * Function called when a user clicks the tigger element.
   *
   * @default undefined
   */
  onClick?: (e: MouseEvent) => void;
  targetProps?: HTMLAttributes<HTMLElement>;
  targetRef?: RefObject<HTMLElement | null>;
}

export type TooltipProps = PopoverProps;

export const Popover = ({
  className,
  children,
  target,
  popover = "auto",
  anchor = true,
  onClick,
  tooltip = false,
  targetProps,
  targetRef,
  ...rest
}: PopoverProps & { tooltip?: boolean }) => {
  const id = useId();
  const anchorName = `--popover-anchor-${id}`;
  const popoverRef = useRef<HTMLSpanElement | null>(null);

  const handleOnFocus = () => {
    if (!tooltip) {
      return;
    }
    popoverRef.current?.showPopover();
  };
  const handleOnBlur = () => {
    if (!tooltip) {
      return;
    }
    popoverRef.current?.hidePopover();
  };

  const { focusWithinProps } = useFocusWithin({
    onFocusWithin: handleOnFocus,
    onBlurWithin: handleOnBlur,
  });

  return (
    <span
      {...focusWithinProps}
      onMouseEnter={handleOnFocus}
      onMouseLeave={handleOnBlur}
    >
      <button
        className={clsx("sds-popover", className)}
        popoverTarget={id}
        {...rest}
        style={anchor ? { anchorName } : undefined}
        onClick={(event) => {
          if (onClick) {
            onClick(event);
          }
        }}
      >
        {children}
      </button>
      <span
        ref={(node) => {
          popoverRef.current = node;
          if (targetRef) {
            targetRef.current = node;
          }
        }}
        className={clsx(
          "sds-popover__target",
          anchor && "sds-popover__target--anchor",
          "sds-typography-body",
        )}
        id={id}
        popover={popover}
        {...targetProps}
        style={
          anchor
            ? {
                positionAnchor: anchorName,
                ...(tooltip
                  ? { bottom: "anchor(top)", left: "anchor(left)" }
                  : { top: "anchor(bottom)", left: "anchor(left)" }),
              }
            : undefined
        }
      >
        {target}
      </span>
    </span>
  );
};
Popover.displayName = "Popover";

export const Tooltip = (props: PopoverProps) => <Popover {...props} tooltip />;
Tooltip.displayName = "Tooltip";
