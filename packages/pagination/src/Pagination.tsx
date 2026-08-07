import { MoveToPreviousIcon, MoveToNextIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import { HTMLAttributes, MouseEvent } from "react";
import "./pagination.css";
import { usePaginationRange } from "./usePaginationRange";

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
  const items = usePaginationRange({ count, currentIndex, limit });

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
        {items.map((item) => {
          if (item.type === "spacer") {
            return (
              <li className="sds-pagination__list-item" key={item.key}>
                <div className="sds-pagination__button--spacer">&hellip;</div>
              </li>
            );
          }
          return (
            <li className="sds-pagination__list-item" key={item.index}>
              <button
                className="sds-pagination__button"
                aria-current={item.index === currentIndex ? "page" : undefined}
                aria-label={`${ariaLabelItem} ${item.index + 1}`}
                disabled={item.index === currentIndex}
                onClick={(event) => {
                  onClick(event, item.index);
                }}
              >
                {item.index + 1}
              </button>
            </li>
          );
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
