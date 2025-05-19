import { Badge } from "@sikt/sds-badge";
import { clsx } from "clsx";
import { ReactNode, useId } from "react";

import "./filter-list-section.pcss";
import { FilterListExpand } from "../components/FilterListExpand/FilterListExpand";

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
  const id = useId();

  const header = (
    <div
      aria-describedby={id}
      data-testid="filter-list-section-header"
      className={clsx(
        "sds-filter-list-section__header",
        expandable
          ? "sds-filter-list-section__header--expandable"
          : "sds-filter-list-section__header--default",
      )}
    >
      <span className="sds-typography--strong">{label}</span>

      {count !== undefined && count > 0 ? (
        <Badge visibility="strong" data-testid="header-badge" id={id}>
          {count}
        </Badge>
      ) : (
        ""
      )}
    </div>
  );

  return (
    <div>
      {expandable ? (
        <FilterListExpand
          header={header}
          clickableHeader
          ariaLabelExpandToggle={label}
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
      )}
    </div>
  );
};
