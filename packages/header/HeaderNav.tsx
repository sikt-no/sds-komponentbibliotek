import React, {
  Children,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
} from "react";
import "./header-nav.pcss";
import clsx from "clsx";

export interface HeaderNavProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export const HeaderNav = ({ children, className, ...rest }: HeaderNavProps) => {
  return (
    <nav className={clsx("sds-header__header-nav", className)} {...rest}>
      <ul className="sds-header__header-nav-list">
        {/* Since we need to apply sds-tabs__tab conditionally on a media query,
        we need to duplicate these children and always only show one. Hiding is
        done with the desktop and css classes they have. */}
        {Children.map(children, (child) => {
          return (
            <li className="sds-header__header-nav-item--desktop">
              {cloneElement(child as ReactElement, {
                className: "sds-tab-link sds-tabs__tab",
              })}
            </li>
          );
        })}
        {Children.map(children, (child) => {
          return (
            <li className="sds-header__header-nav-item--mobile">{child}</li>
          );
        })}
      </ul>
    </nav>
  );
};
