import { Badge } from "@sikt/sds-badge";
import { CheckboxInput } from "@sikt/sds-checkbox";
import { ReactNode, useId } from "react";
import { FilterListExpand } from "../components/FilterListExpand/FilterListExpand";
import { FilterListIconLabel } from "../components/FilterListIconLabel/FilterListIconLabel";
import "./filter-list-category.pcss";

export interface FilterListCategoryProps {
  label: string;
  icon?: ReactNode;
  expanded?: boolean;
  onExpandToggle?: (expanded: boolean) => void;
  ariaLabelExpandToggle: NonNullable<string>;
  onCategoryToggle?: (checked: boolean) => void;
  indeterminate: boolean;
  checked: boolean;
  count?: number;
  children: ReactNode;
}

export const FilterListCategory = ({
  label,
  icon,
  expanded,
  ariaLabelExpandToggle,
  onExpandToggle,
  onCategoryToggle,
  indeterminate,
  checked,
  count,
  children,
}: FilterListCategoryProps) => {
  const id = useId();
  const hasCount = count !== undefined && count > 0;

  return (
    <FilterListExpand
      ariaLabelExpandToggle={ariaLabelExpandToggle}
      initialExpanded={expanded}
      onExpandToggle={onExpandToggle}
      header={
        <div className="sds-filter-list-category">
          <CheckboxInput
            className="sds-filter-list-item__input"
            aria-describedby={hasCount ? id : undefined}
            label={
              icon ? <FilterListIconLabel label={label} icon={icon} /> : label
            }
            onChange={(event) => {
              if (onCategoryToggle) {
                onCategoryToggle(event.target.checked);
              }
            }}
            indeterminate={indeterminate}
            checked={checked}
          />
          {hasCount && (
            <Badge
              visibility="strong"
              className="sds-filter-list__badge"
              id={id}
              icon={count}
              aria-label={`${count}`}
            />
          )}
        </div>
      }
    >
      <div className="sds-filter-list-category__content">{children}</div>
    </FilterListExpand>
  );
};
FilterListCategory.displayName = "FilterListCategory";
