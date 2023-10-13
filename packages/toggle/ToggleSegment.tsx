import React, { ReactNode, forwardRef } from "react";
import "./toggle-segment.pcss";
import { Fieldset, FieldsetProps } from "../form/index";

export interface ToggleSegmentProps extends Omit<FieldsetProps, "onChange"> {
  children: ReactNode;
}

export const ToggleSegment = forwardRef<
  HTMLFieldSetElement,
  ToggleSegmentProps
>(({ children, ...rest }, ref) => {
  return (
    <div className="sds-toggle-segment">
      <Fieldset className="sds-toggle-segment__fieldset" {...rest} ref={ref}>
        <div className="sds-toggle-segment__group">{children}</div>
      </Fieldset>
    </div>
  );
});
ToggleSegment.displayName = "ToggleSegment";
