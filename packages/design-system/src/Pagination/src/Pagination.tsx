import { clsx } from "clsx/lite";
import type { HTMLAttributes } from "react";
import { PaginationButton } from "./PaginationButton";
import { PaginationContext, type PaginationSize } from "./PaginationContext";
import { PaginationItem } from "./PaginationItem";
import { PaginationList } from "./PaginationList";
import { PaginationNext } from "./PaginationNext";
import { PaginationPrevious } from "./PaginationPrevious";
import { usePaginationRange } from "./usePaginationRange";

import "./pagination.css";

export interface PaginationI18n {
  previousLabel?: string;
  nextLabel?: string;
}

export type PaginationLocale = "en" | "nb" | "nn";

const paginationLocales: Record<PaginationLocale, Required<PaginationI18n>> = {
  en: {
    previousLabel: "Previous",
    nextLabel: "Next",
  },
  nb: {
    previousLabel: "Forrige",
    nextLabel: "Neste",
  },
  nn: {
    previousLabel: "Førre",
    nextLabel: "Neste",
  },
};

const resolveI18n = (
  i18n: PaginationLocale | PaginationI18n | undefined,
): Required<PaginationI18n> => {
  if (typeof i18n === "string") return paginationLocales[i18n];

  const { nb } = paginationLocales;

  return {
    previousLabel: i18n?.previousLabel ?? nb.previousLabel,
    nextLabel: i18n?.nextLabel ?? nb.nextLabel,
  };
};

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  size?: PaginationSize;
  count: number;
  currentIndex: number;
  onPageChange: (index: number) => void;
  /**
   * Maximum number of page atoms rendered (including the two edges). The
   * middle collapses to an ellipsis when the range exceeds this.
   * @default 7
   */
  limit?: number;
  /**
   * Locale preset (`"en"`, `"nb"`, `"nn"`) or a custom label object. Omitted
   * fields on the object fall back to Norwegian bokmål.
   * @default "nb"
   */
  i18n?: PaginationLocale | PaginationI18n;
}

export const Pagination = ({
  "aria-label": ariaLabel,
  size = "standard",
  className,
  count,
  currentIndex,
  onPageChange,
  limit = 7,
  i18n,
  ...rest
}: PaginationProps) => {
  const items = usePaginationRange({ count, currentIndex, limit });
  const { previousLabel, nextLabel } = resolveI18n(i18n);

  return (
    <nav
      aria-label={ariaLabel}
      data-size={size}
      className={clsx("sd3-pagination", className)}
      {...rest}
    >
      <PaginationContext.Provider value={{ size }}>
        <PaginationList>
          <PaginationItem>
            <PaginationPrevious
              disabled={currentIndex <= 0}
              onClick={() => {
                onPageChange(currentIndex - 1);
              }}
            >
              {previousLabel}
            </PaginationPrevious>
          </PaginationItem>
          {items.map((item) =>
            item.type === "spacer" ? (
              <PaginationItem key={item.key} />
            ) : (
              <PaginationItem key={item.index}>
                <PaginationButton
                  aria-current={
                    item.index === currentIndex ? "page" : undefined
                  }
                  onClick={() => {
                    onPageChange(item.index);
                  }}
                >
                  {item.index + 1}
                </PaginationButton>
              </PaginationItem>
            ),
          )}
          <PaginationItem>
            <PaginationNext
              disabled={currentIndex >= count - 1}
              onClick={() => {
                onPageChange(currentIndex + 1);
              }}
            >
              {nextLabel}
            </PaginationNext>
          </PaginationItem>
        </PaginationList>
      </PaginationContext.Provider>
    </nav>
  );
};

Pagination.displayName = "Pagination";
