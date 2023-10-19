import React, { ReactNode } from "react";
import clsx from "clsx";
import { ArrowRightIcon } from "@sikt/sds-icons";
import { Button } from "@sikt/sds-button";
import "./drawer-header.pcss";

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
    <div
      className={clsx(
        "sds-drawer-header",
        expanded && "sds-drawer-header--expanded",
        className
      )}
      {...rest}
    >
      {expanded && (
        <div className="sds-drawer-header__heading">
          {icon}
          {title && (
            <span className="sds-typography-heading--paragraph">{title}</span>
          )}
        </div>
      )}
      <Button
        variant="transparent"
        iconVariant="only"
        icon={<ArrowRightIcon />}
        className="sds-drawer-header__button"
        aria-label={ariaLabel}
        aria-expanded={expanded}
        onClick={handleToggleDrawer}
      />
    </div>
  );
};
