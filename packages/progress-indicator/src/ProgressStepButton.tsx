import { clsx } from "clsx/lite";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ProgressStepButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  current?: boolean;
  index?: number;
}

export const ProgressStepButton = forwardRef<
  HTMLButtonElement,
  ProgressStepButtonProps
>(({ children, className, current, index = 0, onClick, ...rest }, ref) => (
  <button
    ref={ref}
    className={clsx(
      "sds-progress-indicator__step-details-content",
      "sds-progress-indicator__step-details-action",
      className,
    )}
    onClick={onClick}
    aria-current={current ? "step" : undefined}
    type="button"
    {...rest}
  >
    {index + 1}.&nbsp;{children}
  </button>
));

ProgressStepButton.displayName = "ProgressStepButton";
