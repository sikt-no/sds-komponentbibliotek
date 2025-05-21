import { Badge } from "@sikt/sds-badge";
import "./filter-list-category.pcss";
import { CheckboxInput } from "@sikt/sds-checkbox";
import { ReactNode, useId } from "react";
import { FilterListExpand } from "../components/FilterListExpand/FilterListExpand";
import { FilterListIconLabel } from "../components/FilterListIconLabel/FilterListIconLabel";

export interface FilterListCategoryProps {
  label: string;
  icon?: ReactNode;
  expanded?: boolean;
  onExpandToggle?: (expanded: boolean) => void;
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
  onExpandToggle,
  onCategoryToggle,
  indeterminate,
  checked,
  count,
  children,
}: FilterListCategoryProps) => {
  const id = useId();

  return (
    <FilterListExpand
      ariaLabelExpandToggle={label}
      initialExpanded={expanded}
      onExpandToggle={onExpandToggle}
      header={
        <div className="sds-filter-list-category__header">
          <CheckboxInput
            className="sds-filter-list-item__input"
            aria-describedby={id}
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
          {count !== undefined && count > 0 && (
            <Badge id={id} visibility="strong">
              {count}
            </Badge>
          )}
        </div>
      }
    >
      <div className="sds-filter-list-category__content">{children}</div>
    </FilterListExpand>
  );
};
