import clsx from "clsx";
import {
  Children,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";
import "./header-nav.pcss";

export interface HeaderNavProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

interface ChildProps {
  className?: string;
}

const addClassToChildren = (child: ReactElement<ChildProps>) => {
  return cloneElement(child, {
    className: clsx("sds-header__nav-link", child.props.className),
  });
};

export const HeaderNav = ({ children, className, ...rest }: HeaderNavProps) => {
  return (
    <nav className={clsx("sds-header__nav", className)} {...rest}>
      <ul className="sds-header__nav-list">
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return (
              <li className="sds-header__nav-item">
                {addClassToChildren(child as ReactElement<ChildProps>)}
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};
