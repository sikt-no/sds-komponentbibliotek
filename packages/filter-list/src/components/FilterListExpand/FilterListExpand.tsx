import { Button } from "@sikt/sds-button";
import { ExpandShowIcon } from "@sikt/sds-icons";
import clsx from "clsx";
import { ReactNode, useState } from "react";
import "./filter-list-expand.pcss";

interface FilterListExpandProps {
  header: ReactNode;
  clickableHeader?: boolean;
  initialExpanded?: boolean;
  onExpandToggle?: (expanded: boolean) => void;
  ariaLabelExpandToggle?: NonNullable<string>;
  children: ReactNode;
}

export function FilterListExpand({
  header,
  clickableHeader = false,
  initialExpanded = false,
  onExpandToggle,
  ariaLabelExpandToggle,
  children,
}: FilterListExpandProps) {
  const [expanded, setExpanded] = useState(initialExpanded);

  const onToggle = () => {
    const newState = !expanded;
    setExpanded(newState);
    if (onExpandToggle) {
      onExpandToggle(newState);
    }
  };

  const handleToggleByClick = () => {
    onToggle();
  };

  const handleToggleByKeyDown = (event: KeyboardEvent) => {
    const key = event.key;
    if (key == "Enter" || key === " ") {
      onToggle();
    }
  };

  const icon = (
    <ExpandShowIcon
      className={clsx(
        "sds-filter-list-expand__icon",
        expanded && "sds-filter-list-expand__icon--expanded",
      )}
    />
  );

  return (
    <div className="sds-filter-list-expand">
      {clickableHeader ? (
        <div
          onClick={handleToggleByClick}
          onKeyDown={handleToggleByKeyDown}
          tabIndex={0}
          role="button"
          className="sds-filter-list-expand__header sds-filter-list-expand__header-clickable"
          aria-expanded={!!expanded}
        >
          {header}
          <div className="sds-filter-list-expand--icon-container">{icon}</div>
        </div>
      ) : (
        <div className="sds-filter-list-expand__header">
          {header}
          <Button
            variant="transparent"
            size="small"
            icon={icon}
            iconVariant="only"
            onClick={handleToggleByClick}
            aria-expanded={expanded}
          >
            {ariaLabelExpandToggle}
          </Button>
        </div>
      )}

      <div
        className={clsx(
          "sds-filter-list-expand__content",
          expanded
            ? "sds-filter-list-expand__content--open"
            : "sds-filter-list-expand__content--closed",
        )}
        role="region"
        id={`${id}-content`}
        aria-labelledby={`${id}-title`}
        hidden={!expanded}
      >
        {children}
      </div>
    </div>
  );
}
