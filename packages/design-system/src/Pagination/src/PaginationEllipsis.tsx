import type { HTMLAttributes } from "react";

export type PaginationEllipsisProps = HTMLAttributes<HTMLSpanElement>;

export const PaginationEllipsis = (rest: PaginationEllipsisProps) => (
  <span data-part="ellipsis" aria-hidden="true" {...rest}>
    …
  </span>
);

PaginationEllipsis.displayName = "Pagination.Ellipsis";
