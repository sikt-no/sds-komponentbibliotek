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
    ref
  ) => {
    return (
      <a
        ref={ref}
        href={href}
        className={clsx("sds-drawer-button", className)}
        {...rest}
      >
        {icon && <span className="sds-drawer-button__label-icon">{icon}</span>}
        <span className="sds-drawer-button__label-primary">{children}</span>
        {secondaryLabel && (
          <span className="sds-drawer-button__label-secondary">
            {secondaryLabel}
          </span>
        )}
      </a>
    );
  }
);

DrawerButtonLink.displayName = "DrawerButtonLink";
