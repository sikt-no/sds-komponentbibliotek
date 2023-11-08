import React, { TdHTMLAttributes } from "react";
import clsx from "clsx";

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  className?: string;
  "data-th": string;
}

export const TableCell = ({ className, ...rest }: TableCellProps) => {
  return <td className={clsx("sds-table__cell", className)} {...rest} />;
};
