import { Slot, Slottable } from "@radix-ui/react-slot";
import { CloseIcon, ConfirmIcon } from "@sikt/sds-icons";
import { isValidElement, LiHTMLAttributes, ReactNode } from "react";
import {
  ProgressIndicatorStepStatus,
  useProgressIndicatorContext,
} from "./ProgressIndicatorContext";

export type { ProgressIndicatorStepStatus };

const isInteractiveAsChild = (children: ReactNode): boolean => {
  if (!isValidElement(children)) return false;
  const props = children.props as { href?: string; onClick?: unknown };
  return Boolean(props.href) || Boolean(props.onClick);
};

const StepMarker = ({
  isExpanded,
  status,
}: {
  isExpanded: boolean;
  status: ProgressIndicatorStepStatus;
}) => (
  <span data-part="marker" aria-hidden="true">
    {!isExpanded && status === "completed" && <ConfirmIcon />}
    {!isExpanded && status === "critical" && <CloseIcon />}
  </span>
);

const StepText = ({
  label,
  description,
}: {
  label: string;
  description?: string;
}) => (
  <span data-part="text">
    <span data-part="label">{label}</span>
    {description && <span data-part="description">{description}</span>}
  </span>
);

const StepTrailingIcon = ({
  status,
}: {
  status: ProgressIndicatorStepStatus;
}) => (
  <span data-part="status-icon" aria-hidden="true">
    {status === "completed" && <ConfirmIcon />}
    {status === "critical" && <CloseIcon />}
  </span>
);

export interface ProgressIndicatorStepProps extends Omit<
  LiHTMLAttributes<HTMLLIElement>,
  "children"
> {
  label: string;
  /** Secondary line under the label. Hidden on `size="compact"`. */
  description?: string;
  status: ProgressIndicatorStepStatus;
  /** Render the step as the supplied child element (anchor, button, framework `Link`). */
  asChild?: boolean;
  /** Override the auto-detected interactive state. Falls back to `href`/`onClick` detection on the `asChild` child. Disabled steps are never interactive. */
  interactive?: boolean;
  children?: ReactNode;
}

export const ProgressIndicatorStep = ({
  className,
  label,
  description,
  status,
  asChild,
  interactive: interactiveProp,
  children,
  ...rest
}: ProgressIndicatorStepProps) => {
  const { size, statusLabels } = useProgressIndicatorContext();
  const isDisabled = status === "disabled";
  const interactive =
    asChild &&
    !isDisabled &&
    (interactiveProp ?? isInteractiveAsChild(children));
  const isExpanded = size === "expanded";
  const hasStatusIcon = status === "completed" || status === "critical";
  const statusLabel = statusLabels?.[status];

  const triggerContent = (
    <>
      <StepMarker isExpanded={isExpanded} status={status} />
      <StepText label={label} description={description} />
      {statusLabel && (
        <span className="sd3-visually-hidden">, {statusLabel}</span>
      )}
      {isExpanded && hasStatusIcon && <StepTrailingIcon status={status} />}
    </>
  );

  return (
    <li
      className={className}
      data-part="step"
      data-status={status}
      data-interactive={interactive ? true : undefined}
      aria-current={status === "current" ? "step" : undefined}
      {...rest}
    >
      {asChild ? (
        <Slot
          data-part="trigger"
          aria-disabled={isDisabled || undefined}
          tabIndex={isDisabled ? -1 : undefined}
          onClick={
            isDisabled
              ? (e) => {
                  e.preventDefault();
                }
              : undefined
          }
        >
          {triggerContent}
          <Slottable>{children}</Slottable>
        </Slot>
      ) : (
        <span data-part="trigger">{triggerContent}</span>
      )}
    </li>
  );
};

ProgressIndicatorStep.displayName = "ProgressIndicator.Step";
