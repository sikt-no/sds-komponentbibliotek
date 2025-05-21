import { CheckboxInput } from "@sikt/sds-checkbox";
import { RadioInput } from "@sikt/sds-radio";
import { ChangeEvent, ReactElement, useId } from "react";
import { FilterListIconLabel } from "../components/FilterListIconLabel/FilterListIconLabel";
import "./filter-list-item.pcss";

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
      {type === "radio" && (
        <RadioInput
          className="sds-filter-list-item__input"
          label={iconLabel}
          value={value}
          checked={checked}
          aria-describedby={id}
        />
      )}

      {type === "checkbox" && (
        <CheckboxInput
          className="sds-filter-list-item__input"
          label={iconLabel}
          value={value}
          onChange={onChange}
          checked={checked}
          aria-describedby={id}
        />
      )}

      {count !== undefined && (
        <div className="sds-filter-list-item__count" id={id}>
          {count}
        </div>
      )}
    </div>
  );
};
