import { Button } from "@sikt/sds-button";
import { ExpandShowIcon } from "@sikt/sds-icons";
import clsx from "clsx";
import { ReactNode, useState } from "react";
import "./filter-list-expand.pcss";

interface FilterListExpandProps {
  header: ReactNode;
  clickableHeader?: boolean;
  buttonTitle?: string;
  initialExpanded?: boolean;
  onExpandToggle?: (expanded: boolean) => void;
  ariaLabelExpandToggle: string;
  children: ReactNode;
}

export function FilterListExpand({
  header,
  clickableHeader = false,
  buttonTitle,
  initialExpanded = false,
  onExpandToggle,
  ariaLabelExpandToggle,
  children,
}: FilterListExpandProps) {
  const [expanded, setExpanded] = useState(initialExpanded);
  const [animate, setAnimate] = useState(false);

  const onToggle = () => {
    const newState = !expanded;
    setAnimate(true);
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
          aria-label={ariaLabelExpandToggle}
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
            title={buttonTitle}
            aria-expanded={expanded}
            aria-label={ariaLabelExpandToggle}
          >
            {buttonTitle}
          </Button>
        </div>
      )}

      <div
        className={clsx(
          "sds-filter-list-expand__content",
          expanded &&
            (animate
              ? "sds-filter-list-expand__content--open"
              : "sds-filter-list-expand__content--open-no-anim"),
          !expanded &&
            (animate
              ? "sds-filter-list-expand__content--closed"
              : "sds-filter-list-expand__content--closed-no-anim"),
        )}
      >
        {children}
      </div>
    </div>
  );
}
