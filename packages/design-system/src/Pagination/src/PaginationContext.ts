import { createContext, useContext } from "react";

export type PaginationSize = "standard" | "compact";

export interface PaginationContextValue {
  size: PaginationSize;
}

export const PaginationContext = createContext<PaginationContextValue | null>(
  null,
);

export const usePaginationContext = (): PaginationContextValue => {
  const context = useContext(PaginationContext);
  if (context === null) {
    throw new Error(
      "Pagination sub-components must be rendered inside a <Pagination>.",
    );
  }
  return context;
};
