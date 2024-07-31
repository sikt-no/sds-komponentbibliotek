import { clsx } from "clsx/lite";
import { TdHTMLAttributes } from "react";

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  className?: string;
  "data-th": string;
}

export const TableCell = ({ className, ...rest }: TableCellProps) => {
  return <td className={clsx("sds-table__cell", className)} {...rest} />;
};
