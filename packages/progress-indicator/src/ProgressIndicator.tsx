import { ExpandShowIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import {
  Children,
  cloneElement,
  ElementType,
  HTMLAttributes,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";
import type { ProgressStepProps } from "./ProgressStep";
import "./progress-indicator.css";

export interface ProgressIndicatorBaseProps extends HTMLAttributes<
  HTMLDivElement | HTMLDetailsElement
> {
  className?: string;
  currentIndex: number;
  heading: NonNullable<ReactNode>;
  expandable?: boolean;
  open?: boolean;
}

export type ProgressIndicatorProps = ProgressIndicatorBaseProps &
  (
    | {
        children?: never;
        count: number;
      }
    | {
        children: ReactNode;
        count?: never;
      }
  );

export const ProgressIndicator = ({
  children,
  className,
  count,
  currentIndex,
  heading,
  expandable,
  open,
  ...rest
}: ProgressIndicatorProps) => {
  const stepsCount = children ? Children.toArray(children).length : count;
  const E: ElementType = expandable ? "details" : "div";
  const S: ElementType = expandable ? "summary" : "div";

  return (
    <E
      className={clsx(
        "sds-progress-indicator",
        expandable && "sds-progress-indicator--expandable",
        className,
      )}
      open={open}
      {...rest}
    >
      <S className="sds-progress-indicator__summary">
        <div className="sds-progress-indicator__heading">
          <span className="sds-progress-indicator__heading-content">
            {currentIndex + 1}.
          </span>
          <span className="sds-progress-indicator__heading-content">
            {heading}
          </span>
          {expandable && (
            <div className="sds-progress-indicator__heading-button">
              <div className="sds-progress-indicator__heading-icon">
                <ExpandShowIcon />
              </div>
            </div>
          )}
        </div>
        <div className="sds-progress-indicator__step-bar">
          {[...Array(stepsCount).keys()].map((index) => (
            <div
              key={index}
              className={clsx(
                "sds-progress-indicator__step-bar-item",
                index === currentIndex &&
                  "sds-progress-indicator__step-bar-item--current",
              )}
            />
          ))}
        </div>
      </S>
      {children && (
        <ol className="sds-progress-indicator__step-details">
          {Children.map(
            children,
            (child, index) =>
              isValidElement(child) &&
              cloneElement(
                child as ReactElement<PropsWithChildren<ProgressStepProps>>,
                { index, current: index === currentIndex },
              ),
          )}
        </ol>
      )}
    </E>
  );
};
ProgressIndicator.displayName = "ProgressIndicator";
