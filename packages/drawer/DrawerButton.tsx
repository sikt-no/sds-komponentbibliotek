import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import "./drawer-button.pcss";

export interface DrawerButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  label: string;
  className?: string;
  secondaryLabel?: string;
  onClick?: (...args: never[]) => void;
}

export const DrawerButton = ({
  className,
  icon,
  label,
  secondaryLabel,
  onClick,
  ...rest
}: DrawerButtonProps) => {
  return (
    <button
      className={clsx("sds-drawer-button", className)}
      onClick={onClick}
      {...rest}
    >
      {icon && <span className="sds-drawer-button__label-icon">{icon}</span>}
      <span className="sds-drawer-button__label-primary">{label}</span>
      {secondaryLabel && (
        <span className="sds-drawer-button__label-secondary">
          {secondaryLabel}
        </span>
      )}
    </button>
  );
};
