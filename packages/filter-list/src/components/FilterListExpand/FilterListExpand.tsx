import { Button } from "@sikt/sds-button";
import { ExpandShowIcon } from "@sikt/sds-icons";
import clsx from "clsx";
import { ReactNode, useId, useState } from "react";
import "./filter-list-expand.css";

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
  const id = useId();
  const titleId = `${id}-title`;
  const contentId = `${id}-content`;
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
        <button
          className="sds-filter-list-expand__header sds-filter-list-expand__header-clickable"
          onClick={handleToggleByClick}
          id={titleId}
          aria-controls={contentId}
          aria-expanded={expanded}
        >
          {header}
          <div className="sds-filter-list-expand--icon-container">{icon}</div>
        </button>
      ) : (
        <div className="sds-filter-list-expand__header" id={titleId}>
          {header}
          <Button
            variant="transparent"
            size="small"
            icon={icon}
            iconVariant="only"
            onClick={handleToggleByClick}
            aria-expanded={expanded}
            aria-controls={contentId}
          >
            {ariaLabelExpandToggle}
          </Button>
        </div>
      )}

      <div
        className={clsx(
          "sds-filter-list-expand__content",
          expanded && "sds-filter-list-expand__content--open",
        )}
      >
        <div
          role="region"
          id={contentId}
          aria-labelledby={titleId}
          hidden={!expanded}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
