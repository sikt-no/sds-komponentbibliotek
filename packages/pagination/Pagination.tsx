import React, { HTMLAttributes } from "react";
import { Icon } from "@sikt/sds-icons";
import { clsx } from "clsx";
import "./pagination.pcss";

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  ariaLabel: string;
  ariaLabelPrevious?: string;
  ariaLabelNext?: string;
  ariaLabelItem?: string;
  count: number;
  currentIndex: number;
  /** Total limit of elements, this includes previous/next/first/last. */
  limit?: number;
  handleClick: (index: number) => void;
}

export const Pagination = ({
  ariaLabel,
  ariaLabelNext = "Vis neste side",
  ariaLabelPrevious = "Vis forrige side",
  ariaLabelItem = "Vis side",
  count,
  currentIndex,
  limit = 7,
  handleClick,
  className,
  ...rest
}: PaginationProps) => {
  const constantCount = 2;
  const delimiter = Math.ceil(limit / 2) - constantCount - 1;
  const max = currentIndex + delimiter;
  const min = currentIndex - delimiter;
  const hasMaxSpacer = count - 1 > max;
  const hasMinSpacer = 1 < min;
  const maxModifier = count - 1 - max - 1;
  const minModifier = min - 1;
  const hasLessBeforeIndex = minModifier < 0;
  const hasLessAfterIndex = maxModifier < 0;
  let maxLimit = hasMaxSpacer ? max - 1 : max;
  maxLimit = hasLessBeforeIndex ? maxLimit - minModifier : maxLimit;
  let minLimit = hasMinSpacer ? min + 1 : min;
  minLimit = hasLessAfterIndex ? minLimit + maxModifier : minLimit;

  return (
    <nav
      className={clsx("sds-pagination", className)}
      aria-label={ariaLabel}
      {...rest}
    >
      <ol className="sds-pagination__list">
        <li className="sds-pagination__list-item">
          <button
            className="sds-pagination__button"
            aria-label={`${ariaLabelPrevious} ${currentIndex}`}
            disabled={currentIndex === 0}
            onClick={() => handleClick(currentIndex - 1)}
          >
            <Icon icon="caret-left" />
          </button>
        </li>
        {[...Array(count).keys()].map((value) => {
          if (
            value === 0 ||
            value === count - 1 ||
            (value >= minLimit && value <= maxLimit)
          ) {
            return (
              <li className="sds-pagination__list-item" key={value}>
                <button
                  className="sds-pagination__button"
                  aria-current={value === currentIndex ? true : undefined}
                  aria-label={`${ariaLabelItem} ${value + 1}`}
                  disabled={value === currentIndex}
                  onClick={() => handleClick(value)}
                >
                  {value + 1}
                </button>
              </li>
            );
          } else if (value == maxLimit + 1 || value == minLimit - 1) {
            return (
              <li className="sds-pagination__list-item" key={value}>
                <div className="sds-pagination__button sds-pagination__button--spacer">
                  &hellip;
                </div>
              </li>
            );
          }
        })}
        <li className="sds-pagination__list-item">
          <button
            className="sds-pagination__button"
            aria-label={`${ariaLabelNext} ${currentIndex + 2}`}
            disabled={currentIndex === count - 1}
            onClick={() => handleClick(currentIndex + 1)}
          >
            <Icon icon="caret-right" />
          </button>
        </li>
      </ol>
    </nav>
  );
};
