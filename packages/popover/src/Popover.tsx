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
  children: ReactNode;
  target: ReactNode;
  popover?: "" | "auto" | "manual";
  anchor?: boolean;
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
  const popovertargetAttr = { popoverTarget: id };
  const popoverAttr = { popover };

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
        // INFO: This is a hack to solve that React/TypeScript does not support this native attribute
        {...popovertargetAttr}
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
        // INFO: This is a hack to solve that React/TypeScript does not support this native attribute
        {...popoverAttr}
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
