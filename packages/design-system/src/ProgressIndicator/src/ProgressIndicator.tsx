import { clsx } from "clsx/lite";
import { OlHTMLAttributes, ReactNode, useMemo } from "react";
import {
  ProgressIndicatorContext,
  ProgressIndicatorStepStatus,
} from "./ProgressIndicatorContext";
import { ProgressIndicatorStep } from "./ProgressIndicatorStep";
import "./progress-indicator.css";

export interface ProgressIndicatorProps extends OlHTMLAttributes<HTMLOListElement> {
  /** @default "standard" */
  size?: "compact" | "standard" | "expanded";
  /** @default "horizontal" */
  direction?: "horizontal" | "vertical";
  "aria-label"?: string;
  /** Visually-hidden suffix read by screen readers for each status (e.g. `{ completed: "fullført" }`). Omitted statuses stay silent. */
  statusLabels?: Partial<Record<ProgressIndicatorStepStatus, string>>;
  children: ReactNode;
}

const ProgressIndicatorRoot = ({
  className,
  size = "standard",
  direction = "horizontal",
  statusLabels,
  children,
  ...rest
}: ProgressIndicatorProps) => {
  const ctx = useMemo(() => ({ size, statusLabels }), [size, statusLabels]);
  return (
    <ProgressIndicatorContext.Provider value={ctx}>
      <ol
        className={clsx("sd3-progress-indicator", className)}
        data-size={size}
        data-direction={direction}
        {...rest}
      >
        {children}
      </ol>
    </ProgressIndicatorContext.Provider>
  );
};

ProgressIndicatorRoot.displayName = "ProgressIndicator";

export const ProgressIndicator = Object.assign(ProgressIndicatorRoot, {
  Step: ProgressIndicatorStep,
});
