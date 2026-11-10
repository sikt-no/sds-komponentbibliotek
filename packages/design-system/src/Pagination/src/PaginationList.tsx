import type { OlHTMLAttributes, ReactNode } from "react";

export interface PaginationListProps extends OlHTMLAttributes<HTMLOListElement> {
  children: ReactNode;
}

export const PaginationList = ({ children, ...rest }: PaginationListProps) => (
  <ol data-part="list" {...rest}>
    {children}
  </ol>
);

PaginationList.displayName = "Pagination.List";
