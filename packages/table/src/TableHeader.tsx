import { clsx } from "clsx/lite";
import { ThHTMLAttributes } from "react";

export interface TableHeaderProps
  extends ThHTMLAttributes<HTMLTableCellElement> {
  className?: string;
}

export const TableHeader = ({ className, ...rest }: TableHeaderProps) => {
  return <th className={clsx("sds-table__header", className)} {...rest} />;
};
