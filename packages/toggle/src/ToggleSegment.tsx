import { Fieldset, FieldsetProps } from "@sikt/sds-form";
import { clsx } from "clsx/lite";
import { ReactNode, forwardRef } from "react";
import "./toggle-segment.pcss";

export interface ToggleSegmentProps extends Omit<FieldsetProps, "onChange"> {
  children: ReactNode;
  variant?: "default" | "fixed";
}

export const ToggleSegment = forwardRef<
  HTMLFieldSetElement,
  ToggleSegmentProps
>(({ children, variant = "default", className, ...rest }, ref) => {
  return (
    <div
      className={clsx(
        "sds-toggle-segment",
        variant !== "default" && `sds-toggle-segment--${variant}`,
        className,
      )}
    >
      <Fieldset className="sds-toggle-segment__fieldset" {...rest} ref={ref}>
        <div className="sds-toggle-segment__group">{children}</div>
      </Fieldset>
    </div>
  );
});
ToggleSegment.displayName = "ToggleSegment";
