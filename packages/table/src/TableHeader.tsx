import { ThHTMLAttributes } from "react";
import clsx from "clsx";

export interface TableHeaderProps
  extends ThHTMLAttributes<HTMLTableCellElement> {
  className?: string;
}

export const TableHeader = ({ className, ...rest }: TableHeaderProps) => {
  return <th className={clsx("sds-table__header", className)} {...rest} />;
};
