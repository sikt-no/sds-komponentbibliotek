import { MenuIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import { HTMLAttributes, ReactNode } from "react";
import "./drawer-item-group.pcss";

export interface DrawerItemGroupProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  className?: string;
  expanded: boolean;
  heading?: string;
}

export const DrawerItemGroup = ({
  children,
  expanded,
  heading,
  className,
  ...rest
}: DrawerItemGroupProps) => {
  return (
    <nav
      className={clsx(
        "sds-drawer-item-group",
        expanded && "sds-drawer-item-group--expanded",
        className,
      )}
      {...rest}
    >
      <figure className="sds-drawer-item-group__figure">
        {heading && (
          <figcaption
            className={clsx("sds-drawer-item-group__heading", className)}
          >
            <MenuIcon className="sds-drawer-item-group__heading-icon" />
            {expanded && (
              <span className="sds-drawer-item-group__heading-title">
                {heading}
              </span>
            )}
          </figcaption>
        )}
        <ul>{children}</ul>
      </figure>
    </nav>
  );
};
