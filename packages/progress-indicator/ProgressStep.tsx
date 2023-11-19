import React, { HTMLAttributes } from "react";
import clsx from "clsx";
import "./progress-step.pcss";
import { CaretRightIcon } from "@sikt/sds-icons";

export interface ProgressStepProps extends HTMLAttributes<HTMLLIElement> {
  value: number;
  label: string;
  status?: "complete" | "current" | "incomplete";
  className?: string;
  showNumber?: boolean;
  showLabel?: boolean;
  accessibleCompleteString?: string;
}

export const ProgressStep = ({
  value,
  label,
  status = "incomplete",
  className,
  showNumber = true,
  showLabel = true,
  accessibleCompleteString = "Fullført",
  ...rest
}: ProgressStepProps) => {
  return (
    <li
      className={clsx(
        "sds-progress-step",
        (status === "complete" || status === "current") &&
          "sds-progress-step--selected",
        className,
      )}
      aria-current={status === "current" ? "step" : "false"}
      {...rest}
    >
      <CaretRightIcon className="sds-progress-step__separator-icon" />
      <span className="sds-screen-reader-only">{accessibleCompleteString}</span>
      {showNumber && <div className="sds-progress-step__number">{value}</div>}
      <span
        className={clsx(
          "sds-progress-step__label",
          !showLabel && "sds-screen-reader-only",
        )}
      >
        {label}
      </span>
    </li>
  );
};
