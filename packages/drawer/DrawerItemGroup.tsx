import React, { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { ListIcon } from "@sikt/sds-icons";
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
        className
      )}
      {...rest}
    >
      {heading && (
        <div className={clsx("sds-drawer-item-group__heading", className)}>
          <span className="sds-drawer-item-group__heading-title">
            <ListIcon className="sds-drawer-item-group__heading-title-icon" />
            {expanded && (
              <h2 className="sds-drawer-item-group__heading-title-text">
                {heading}
              </h2>
            )}
          </span>
        </div>
      )}
      <ul>{children}</ul>
    </nav>
  );
};
