import { clsx } from "clsx/lite";
import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";
import "./drawer-button.pcss";

export interface DrawerButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ReactNode;
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
    let ariaLabel = undefined;
    if (typeof children === "string") {
      ariaLabel = secondaryLabel ? `${children} ${secondaryLabel}` : children;
    }

    return (
      <a
        ref={ref}
        aria-label={ariaLabel}
        className={clsx("sds-drawer-button", className)}
        href={href}
        {...rest}
      >
        {icon && <span className="sds-drawer-button__icon">{icon}</span>}
        <span className="sds-drawer-button__label-primary">{children}</span>
        {secondaryLabel && (
          <span className="sds-drawer-button__label-secondary">
            {secondaryLabel}
          </span>
        )}
      </a>
    );
  },
);

DrawerButtonLink.displayName = "DrawerButtonLink";
