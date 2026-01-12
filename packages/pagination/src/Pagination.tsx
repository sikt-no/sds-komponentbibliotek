import { MoveToPreviousIcon, MoveToNextIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import { HTMLAttributes, MouseEvent } from "react";
import "./pagination.pcss";

export interface PaginationProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "onClick"
> {
  /**
   * Label for pagination navigation element.
   */
  "aria-label": NonNullable<string>;
  /**
   * Label for previuos item button.
   *
   * @default "Vis forrige side"
   */
  ariaLabelPrevious?: string;
  /**
   * Label for next item button.
   *
   * @default "Vis neste side"
   */
  ariaLabelNext?: string;
  /**
   * Label item button.
   *
   * @default "Vis side"
   */
  ariaLabelItem?: string;
  /**
   * Totalt number of pages.
   */
  count: number;
  currentIndex: number;
  /**
   * Total limit of elements, this includes previous/next/first/last. Minimum is 7 (previous/next/first/last/current/)
   */
  limit?: number;
  /**
   * Function for when the user clicks a pagination button.
   *
   * @default undefined
   */
  onClick: (event: MouseEvent<HTMLButtonElement>, index: number) => void;
  className?: string;
}

export const Pagination = ({
  "aria-label": ariaLabel,
  ariaLabelNext = "Vis neste side",
  ariaLabelPrevious = "Vis forrige side",
  ariaLabelItem = "Vis side",
  count,
  currentIndex,
  limit = 7,
  onClick,
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
            onClick={(event) => {
              onClick(event, currentIndex - 1);
            }}
          >
            <MoveToPreviousIcon />
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
                  onClick={(event) => {
                    onClick(event, value);
                  }}
                >
                  {value + 1}
                </button>
              </li>
            );
          } else if (value == maxLimit + 1 || value == minLimit - 1) {
            return (
              <li className="sds-pagination__list-item" key={value}>
                <div className="sds-pagination__button--spacer">&hellip;</div>
              </li>
            );
          }
        })}
        <li className="sds-pagination__list-item">
          <button
            className="sds-pagination__button"
            aria-label={`${ariaLabelNext} ${currentIndex + 2}`}
            disabled={currentIndex === count - 1}
            onClick={(event) => {
              onClick(event, currentIndex + 1);
            }}
          >
            <MoveToNextIcon />
          </button>
        </li>
      </ol>
    </nav>
  );
};
Pagination.displayName = "Pagination";
