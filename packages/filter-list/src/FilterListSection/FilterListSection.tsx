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
  const header = (
    <div
      className={clsx(
        "sds-filter-list-section__header",
        expandable && "sds-filter-list-section__header--expandable",
      )}
    >
      <span className="sds-typography--strong">{label}</span>
      {count !== undefined && count > 0 && (
        <Badge visibility="strong">{count}</Badge>
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
