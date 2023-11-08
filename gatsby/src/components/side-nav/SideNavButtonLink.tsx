import React, {
  AnchorHTMLAttributes,
  ElementType,
  forwardRef,
  ReactNode,
} from "react";
import clsx from "clsx";
import "./side-nav-button.css";

export interface SideNavButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
  children: ReactNode;
}

export const SideNavButtonLink = forwardRef<
  HTMLAnchorElement,
  SideNavButtonLinkProps
>(
  (
    {
      className,
      icon,
      secondaryLabel,
      href,
      children,
      disabled = false,
      ...rest
    }: SideNavButtonLinkProps,
    ref
  ) => {
    const Component: ElementType = href ? "a" : "div";

    return (
      <Component
        ref={ref}
        href={href}
        className={clsx(
          "sds-side-nav-button",
          !href && "sds-side-nav-button--disabled",
          className
        )}
        {...rest}
      >
        {icon && <span className="sds-side-nav-button__icon">{icon}</span>}
        <span className="sds-side-nav__label">{children}</span>
      </Component>
    );
  }
);

SideNavButtonLink.displayName = "SideNavButtonLink";
