import clsx from "clsx";
import { HTMLAttributes } from "react";

export interface TableBodyProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
}

export const TableBody = ({ className, ...rest }: TableBodyProps) => {
  return <tbody className={clsx("sds-table__body", className)} {...rest} />;
};
