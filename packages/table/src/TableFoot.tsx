import clsx from "clsx";
import { HTMLAttributes } from "react";

export interface TableFootProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
}

export const TableFoot = ({ className, ...rest }: TableFootProps) => {
  return <tfoot className={clsx("sds-table__foot", className)} {...rest} />;
};
