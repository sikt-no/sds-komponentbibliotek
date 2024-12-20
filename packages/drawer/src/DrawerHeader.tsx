import { Button } from "@sikt/sds-button";
import { NavigateToNextIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import { MouseEvent, ReactNode } from "react";
import "./drawer-header.pcss";

export interface DrawerHeaderProps {
  ariaLabelExpanded?: string;
  ariaLabelCollapsed?: string;
  title?: string;
  icon?: ReactNode;
  expanded: boolean;
  handleToggleDrawer: (event: MouseEvent<HTMLButtonElement>) => void;
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
        className,
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
        icon={<NavigateToNextIcon />}
        className="sds-drawer-header__button"
        aria-label={ariaLabel}
        aria-expanded={expanded}
        onClick={handleToggleDrawer}
      />
    </div>
  );
};
