import { useWindowResize } from "@sikt/sds-hooks";
import { clsx } from "clsx/lite";
import {
  HTMLAttributes,
  MouseEvent,
  ReactNode,
  useCallback,
  useId,
  useRef,
  useState,
  RefObject,
} from "react";
import { useFocusWithin } from "react-aria";
import "./popover.pcss";

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
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const popoverRef = useRef<HTMLSpanElement | null>(null);
  const [inset, setInset] = useState<string | number>("auto auto auto auto");

  const handleOnFocus = () => {
    if (!tooltip) {
      return;
    }

    if (anchor) {
      setPopoverStylePosition();
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

  // TODO: Replace with https://developer.mozilla.org/en-US/docs/Web/CSS/position-anchor when good browser support
  const setPopoverStylePosition = useCallback(() => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      const scrollbarHeight =
        window.innerHeight - document.documentElement.clientHeight;
      const distanceToTop = buttonRect.top;
      const distanceToBottom =
        window.innerHeight - scrollbarHeight - buttonRect.bottom;
      const distanceToRight =
        window.innerWidth - scrollbarWidth - buttonRect.right;
      const distanceToLeft = buttonRect.left;
      const position = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto",
      };

      if (distanceToBottom < distanceToTop) {
        position.bottom = `${distanceToBottom + buttonRect.height - window.scrollY}px`;
      } else {
        position.top = `${buttonRect.top + buttonRect.height + window.scrollY}px`;
      }

      if (distanceToRight < distanceToLeft) {
        position.right = `${distanceToRight - window.scrollX}px`;
      } else {
        position.left = `${buttonRect.left + window.scrollX}px`;
      }

      setInset(Object.values(position).join(" "));
    }
  }, []);

  useWindowResize(anchor ? setPopoverStylePosition : undefined, {
    throttleTime: 10,
  });

  return (
    <span
      {...focusWithinProps}
      onMouseEnter={handleOnFocus}
      onMouseLeave={handleOnBlur}
    >
      <button
        ref={buttonRef}
        className={clsx("sds-popover", className)}
        popoverTarget={id}
        {...rest}
        onClick={(event) => {
          if (anchor) {
            setPopoverStylePosition();
          }
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
        style={{ inset }}
      >
        {target}
      </span>
    </span>
  );
};
Popover.displayName = "Popover";

export const Tooltip = (props: PopoverProps) => <Popover {...props} tooltip />;
Tooltip.displayName = "Tooltip";
