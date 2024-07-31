import { clsx } from "clsx/lite";
import { HTMLAttributes } from "react";

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  className?: string;
}

export const TableRow = ({ className, ...rest }: TableRowProps) => {
  return <tr className={clsx("sds-table__row", className)} {...rest} />;
};
