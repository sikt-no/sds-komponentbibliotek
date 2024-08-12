import { HTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx/lite";
import "./side-nav.css";

export interface SideNavProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  className?: string;
  heading?: string;
}

export const SideNav = ({
  children,
  heading,
  className,
  ...rest
}: SideNavProps) => {
  return (
    <nav className={clsx("sds-side-nav", className)} {...rest}>
      <figure className="sds-side-nav__figure">
        {heading && (
          <figcaption className={clsx("sds-side-nav__heading", className)}>
            <span className="sds-side-nav__heading-title sds-typography-heading--overline">
              {heading}
            </span>
          </figcaption>
        )}
        <ul>{children}</ul>
      </figure>
    </nav>
  );
};
