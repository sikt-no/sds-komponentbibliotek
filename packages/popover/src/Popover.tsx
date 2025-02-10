import { useWindowResize } from "@sikt/sds-hooks";
import { clsx } from "clsx/lite";
import {
  HTMLAttributes,
  MouseEvent,
  ReactNode,
  useId,
  useRef,
  useState,
} from "react";
import "./popover.pcss";

export interface PopoverProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  target: ReactNode;
  popover?: "" | "auto" | "manual";
  anchor?: boolean;
  onClick?: (e: MouseEvent) => void;
}

export const Popover = ({
  className,
  children,
  target,
  popover = "auto",
  anchor = true,
  onClick,
  ...rest
}: PopoverProps) => {
  const id = useId();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const popovertargetAttr = { popoverTarget: id };
  const popoverAttr = { popover };

  // TODO: Replace with https://developer.mozilla.org/en-US/docs/Web/CSS/position-anchor when good browser support
  const setPopoverStylePosition = () => {
    if (buttonRef.current) {
      const bounding = buttonRef.current.getBoundingClientRect();
      setTop(bounding.top + bounding.height + window.scrollY);
      setLeft(bounding.left);
    }
  };

  anchor && useWindowResize(setPopoverStylePosition, { throttleTime: 10 });

  return (
    <>
      <button
        ref={buttonRef}
        className={clsx("sds-popover", className)}
        // INFO: This is a hack to solve that React/TypeScript does not support this native attribute
        {...popovertargetAttr}
        {...rest}
        onClick={(event) => {
          anchor && setPopoverStylePosition();
          if (onClick) {
            onClick(event);
          }
        }}
      >
        {children}
      </button>
      <div
        className={clsx(
          "sds-popover__target",
          anchor && "sds-popover__target--anchor",
        )}
        id={id}
        // INFO: This is a hack to solve that React/TypeScript does not support this native attribute
        {...popoverAttr}
        style={{ top, left }}
      >
        {target}
      </div>
    </>
  );
};
