import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import "./drawer-button.pcss";

export interface DrawerButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
  secondaryLabel?: string;
  onClick?: (...args: never[]) => void;
}

export const DrawerButton = ({
  className,
  icon,
  children,
  secondaryLabel,
  onClick,
  ...rest
}: DrawerButtonProps) => {
  let ariaLabel = undefined;
  if (typeof children === "string") {
    ariaLabel = secondaryLabel ? `${children} ${secondaryLabel}` : children;
  }

  return (
    <button
      aria-label={ariaLabel}
      className={clsx("sds-drawer-button", className)}
      onClick={onClick}
      {...rest}
    >
      {icon && <span className="sds-drawer-button__icon">{icon}</span>}
      <span className="sds-drawer-button__label-primary sds-typography-body--regular">
        {children}
      </span>
      {secondaryLabel && (
        <span className="sds-drawer-button__label-secondary sds-typography-body--small">
          {secondaryLabel}
        </span>
      )}
    </button>
  );
};
