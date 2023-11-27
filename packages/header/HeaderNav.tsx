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
    <nav className={clsx("sds-header__nav", className)} {...rest}>
      <ul className="sds-header__nav-list">
        {Children.map(children, (child) => {
          return (
            <li className="sds-header__nav-item">
              {cloneElement(child as ReactElement, {
                className: "sds-header__nav-link",
              })}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
