import React, { ChangeEvent, forwardRef, useMemo } from "react";
import { Fieldset, FieldsetProps } from "@sikt/sds-form";
import { RadioFieldsetContext } from "./RadioFieldsetContext";

export interface RadioFieldsetProps extends Omit<FieldsetProps, "onChange"> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const RadioFieldset = forwardRef<
  HTMLFieldSetElement,
  RadioFieldsetProps
>(({ onChange, value, ...rest }, ref) => {
  const context = useMemo(() => ({ onChange, value }), [onChange, value]);

  return (
    <RadioFieldsetContext.Provider value={context}>
      <Fieldset ref={ref} {...rest}></Fieldset>
    </RadioFieldsetContext.Provider>
  );
});
RadioFieldset.displayName = "RadioFieldset";
