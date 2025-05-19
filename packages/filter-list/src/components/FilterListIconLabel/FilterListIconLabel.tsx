import { ReactNode } from "react";

import "./filter-list-icon-label.pcss";

export interface FilterListIconLabelProps {
  icon: ReactNode;
  label: string;
}

export const FilterListIconLabel = ({
  icon,
  label,
}: FilterListIconLabelProps) => {
  return (
    <div
      className="sds-filter-list__icon-label"
      data-testid="filter-list-icon-label"
    >
      {icon}
      {label}
    </div>
  );
};
