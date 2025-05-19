import "./filter-list-item.pcss";
import { CheckboxInput } from "@sikt/sds-checkbox";
import { RadioInput } from "@sikt/sds-radio";
import { ChangeEvent, ReactElement, useId } from "react";
import { FilterListIconLabel } from "../components/FilterListIconLabel/FilterListIconLabel";

export interface FilterListItemProps {
  type: "radio" | "checkbox";
  label: string;
  icon?: ReactElement;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  count?: number;
}

export const FilterListItem = ({
  type,
  label,
  icon,
  value,
  onChange,
  checked,
  count,
}: FilterListItemProps) => {
  const id = useId();
  const iconLabel = icon ? (
    <FilterListIconLabel label={label} icon={icon} />
  ) : (
    label
  );

  return (
    <div className="sds-filter-list-item">
      <div className="sds-filter-list-item__input">
        {type === "radio" && (
          <RadioInput
            tabIndex={0}
            data-testid="filter-list-item-input"
            label={iconLabel}
            value={value}
            checked={checked}
            aria-describedby={id}
          />
        )}

        {type === "checkbox" && (
          <CheckboxInput
            tabIndex={0}
            data-testid="filter-list-item-input"
            label={iconLabel}
            value={value}
            onChange={onChange}
            checked={checked}
            aria-describedby={id}
          />
        )}
      </div>

      {count !== undefined && (
        <div className="sds-filter-list-item__count" id={id}>
          {count}
        </div>
      )}
    </div>
  );
};
