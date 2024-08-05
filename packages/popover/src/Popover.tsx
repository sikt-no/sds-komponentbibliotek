import { clsx } from "clsx/lite";
import { HTMLAttributes, MouseEvent, ReactNode, useId, useState } from "react";
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
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const popovertargetAttr = { popovertarget: id };
  const popoverAttr = { popover };

  // TODO: Replace with https://developer.mozilla.org/en-US/docs/Web/CSS/position-anchor when good browser support
  const setPopoverStylePosition = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const bounding = target.getBoundingClientRect();
    setTop(bounding.top + bounding.height + window.scrollY);
    setLeft(bounding.left);
  };

  return (
    <>
      <button
        className={clsx("sds-popover", className)}
        // INFO: This is a hack to solve that React/TypeScript does not support this native attribute
        {...popovertargetAttr}
        {...rest}
        onClick={(event) => {
          anchor && setPopoverStylePosition(event);
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
