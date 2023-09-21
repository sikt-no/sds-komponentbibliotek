import { ArrowRightIcon } from "@sikt/sds-icons";
import React, { ReactNode } from "react";
import "./drawer-header.pcss";
import clsx from "clsx";

export interface DrawerHeaderProps {
  ariaLabelExpanded?: string;
  ariaLabelCollapsed?: string;
  title?: string;
  icon?: ReactNode;
  expanded: boolean;
  handleToggleDrawer: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export const DrawerHeader = ({
  expanded,
  handleToggleDrawer,
  title,
  icon,
  className,
  ariaLabelExpanded = "Åpne skuff",
  ariaLabelCollapsed = "Lukk skuff",
  ...rest
}: DrawerHeaderProps) => {
  const ariaLabel = expanded ? ariaLabelCollapsed : ariaLabelExpanded;

  return (
    <div className={clsx("sds-drawer-header", className)} {...rest}>
      {expanded && (
        <div className="sds-drawer-header__label">
          <div className="sds-drawer-header__icon">
            {icon && icon}
            {title && <span className="sds-drawer-header__title">{title}</span>}
          </div>
        </div>
      )}
      <button
        aria-expanded={expanded}
        className={clsx(
          "sds-drawer-header__button",
          expanded && "sds-drawer-header__button--expanded"
        )}
        aria-label={ariaLabel}
        onClick={handleToggleDrawer}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};
