import clsx from "clsx";
import { HTMLAttributes } from "react";

export interface TableHeadProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
}

export const TableHead = ({ className, ...rest }: TableHeadProps) => {
  return <thead className={clsx("sds-table__head", className)} {...rest} />;
};
