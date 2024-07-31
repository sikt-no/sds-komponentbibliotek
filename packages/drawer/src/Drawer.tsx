import { clsx } from "clsx/lite";
import { HTMLAttributes, MouseEvent, ReactNode, useRef } from "react";
import "./drawer.pcss";

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  expanded: boolean;
  className?: string;
  onOverlayClick: () => void;
}

export const Drawer = ({
  className,
  children,
  expanded,
  onOverlayClick,
  ...rest
}: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>): void {
    if (event.target === drawerRef.current && expanded) onOverlayClick();
  }

  return (
    <div
      className={clsx(
        "sds-drawer",
        expanded && "sds-drawer--expanded",
        className,
      )}
      {...rest}
    >
      <div className="sds-drawer__content">{children}</div>
      <div
        ref={drawerRef}
        className="sds-drawer__overlay"
        role="none"
        onClick={handleOverlayClick}
      />
    </div>
  );
};
