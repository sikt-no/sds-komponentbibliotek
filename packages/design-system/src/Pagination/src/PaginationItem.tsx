import type { HTMLAttributes, ReactNode } from "react";
import { PaginationEllipsis } from "./PaginationEllipsis";

export interface PaginationItemProps extends HTMLAttributes<HTMLLIElement> {
  /** Omit to render an ellipsis spacer. */
  children?: ReactNode;
}

export const PaginationItem = ({ children, ...rest }: PaginationItemProps) => (
  <li data-part="item" {...rest}>
    {children ?? <PaginationEllipsis />}
  </li>
);

PaginationItem.displayName = "Pagination.Item";
