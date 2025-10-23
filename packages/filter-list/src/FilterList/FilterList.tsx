import { clsx } from "clsx/lite";
import { ReactNode } from "react";
import "./filter-list.pcss";

export interface FilterListProps {
  children: ReactNode;
  className?: string;
}

export const FilterList = ({ children, className }: FilterListProps) => {
  return <div className={clsx("sds-filter-list", className)}>{children}</div>;
};
FilterList.displayName = "FilterList";
