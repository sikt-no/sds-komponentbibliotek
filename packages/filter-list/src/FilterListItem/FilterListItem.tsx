import { CheckboxInput } from "@sikt/sds-checkbox";
import { RadioInput } from "@sikt/sds-radio";
import { ChangeEvent, ReactElement, ReactNode } from "react";
import { FilterListIconLabel } from "../components/FilterListIconLabel/FilterListIconLabel";
import "./filter-list-item.pcss";

export interface FilterListItemProps {
  type: "radio" | "checkbox";
  label: NonNullable<ReactNode>;
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
  const hasCount = count !== undefined;

  const inputLabel = hasCount ? (
    <span className="sds-filter-list-item__input-label">
      <span>{label}</span> <span>({count})</span>
    </span>
  ) : (
    label
  );
  const iconLabel = icon ? (
    <FilterListIconLabel label={inputLabel} icon={icon} />
  ) : (
    inputLabel
  );

  return (
    <div className="sds-filter-list-item">
      {type === "radio" && (
        <RadioInput
          className="sds-filter-list-item__input"
          label={iconLabel}
          value={value}
          checked={checked}
        />
      )}

      {type === "checkbox" && (
        <CheckboxInput
          className="sds-filter-list-item__input"
          label={iconLabel}
          value={value}
          onChange={onChange}
          checked={checked}
        />
      )}
    </div>
  );
};
