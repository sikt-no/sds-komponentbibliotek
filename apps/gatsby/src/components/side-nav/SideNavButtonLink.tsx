import {
  AnchorHTMLAttributes,
  ElementType,
  forwardRef,
  ReactNode,
} from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link } from "@sikt/sds-core";
import { clsx } from "clsx/lite";
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
    { className, icon, href, children, ...rest }: SideNavButtonLinkProps,
    ref,
  ) => {
    const isExternal = href?.startsWith("http");
    const Component: ElementType = href
      ? isExternal
        ? Link
        : GatsbyLink
      : "div";

    return (
      <Component
        // @ts-ignore
        ref={ref}
        href={isExternal ? href : undefined}
        to={!isExternal ? href : undefined}
        className={clsx(
          "sds-side-nav-button",
          !href && "sds-side-nav-button--disabled",
          className,
        )}
        {...rest}
      >
        {icon && <span className="sds-side-nav-button__icon">{icon}</span>}
        <span className="sds-side-nav__label">{children}</span>
      </Component>
    );
  },
);

SideNavButtonLink.displayName = "SideNavButtonLink";
