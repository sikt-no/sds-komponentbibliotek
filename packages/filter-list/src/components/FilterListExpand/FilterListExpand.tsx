import { Button } from "@sikt/sds-button";
import { ExpandShowIcon } from "@sikt/sds-icons";
import clsx from "clsx";

import "./filter-list-expand.pcss";
import { ReactNode, useState } from "react";

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

        expanded &&
          (animate
            ? "sds-filter-list-expand__icon--open"
            : "sds-filter-list-expand__icon--open-no-anim"),
        !expanded &&
          (animate
            ? "sds-filter-list-expand__icon--closed"
            : "sds-filter-list-expand__icon--closed-no-anim"),
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
          data-testid="toggle-expand-button"
          className="sds-filter-list-expand__header-clickable"
          aria-expanded={!!expanded}
          aria-label={ariaLabelExpandToggle}
        >
          {header}
          <div className="sds-filter-list-expand--icon-container">{icon}</div>
        </div>
      ) : (
        <div className="sds-filter-list-expand__header">
          {header}
          <div className="sds-filter-list-expand--button-container">
            <Button
              tabIndex={0}
              onClick={handleToggleByClick}
              className="sds-filter-list-expand__button"
              data-testid="toggle-expand-button"
              title={buttonTitle}
              aria-expanded={expanded}
              aria-label={ariaLabelExpandToggle}
              icon={icon as ReactNode}
              iconVariant="only"
              size="small"
              variant="transparent"
            >
              {buttonTitle}
            </Button>
          </div>
        </div>
      )}

      <div
        data-testid="content"
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
