import React, { AnchorHTMLAttributes, forwardRef, ReactNode } from "react";
import clsx from "clsx";
import "./drawer-button.pcss";

export interface DrawerButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
  secondaryLabel?: string;
  children: ReactNode;
}

export const DrawerButtonLink = forwardRef<
  HTMLAnchorElement,
  DrawerButtonLinkProps
>(
  (
    {
      className,
      icon,
      secondaryLabel,
      href,
      children,
      ...rest
    }: DrawerButtonLinkProps,
    ref,
  ) => {
    return (
      <a
        ref={ref}
        href={href}
        className={clsx("sds-drawer-button", className)}
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
      </a>
    );
  },
);

DrawerButtonLink.displayName = "DrawerButtonLink";
