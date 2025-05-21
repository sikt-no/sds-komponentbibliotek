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
    <div className="sds-filter-list-icon-label">
      <span className="sds-filter-list-icon-label__icon">{icon}</span>
      <span>{label}</span>
    </div>
  );
};
