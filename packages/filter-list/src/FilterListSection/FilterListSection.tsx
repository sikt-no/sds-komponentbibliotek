import { Badge } from "@sikt/sds-badge";
import { clsx } from "clsx";
import { ReactNode } from "react";
import { FilterListExpand } from "../components/FilterListExpand/FilterListExpand";
import "./filter-list-section.pcss";

export interface FilterListSectionProps {
  label: string;
  children: ReactNode;
  expandable?: {
    expanded: boolean;
    onExpandToggle?: (expanded: boolean) => void;
  };
  count?: number;
}

export const FilterListSection = ({
  label,
  children,
  expandable,
  count,
}: FilterListSectionProps) => {
  const hasCount = count !== undefined && count > 0;

  const header = (
    <div
      className={clsx(
        "sds-filter-list-section",
        expandable && "sds-filter-list-section--expandable",
      )}
    >
      <span className="sds-filter-list-section__label">{label}</span>
      {hasCount && (
        <Badge
          visibility="strong"
          className="sds-filter-list__badge"
          icon={count}
          aria-label={`${count}`}
        />
      )}
    </div>
  );

  return expandable ? (
    <FilterListExpand
      header={header}
      clickableHeader
      initialExpanded={expandable.expanded}
      onExpandToggle={expandable.onExpandToggle}
    >
      {children}
    </FilterListExpand>
  ) : (
    <>
      {header}
      {children}
    </>
  );
};
FilterListSection.displayName = "FilterListSection";
