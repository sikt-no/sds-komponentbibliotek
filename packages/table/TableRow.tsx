import React, { HTMLAttributes } from "react";
import clsx from "clsx";

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  className?: string;
}

export const TableRow = ({ className, ...rest }: TableRowProps) => {
  return <tr className={clsx("sds-table__row", className)} {...rest} />;
};
