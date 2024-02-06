import { InputHTMLAttributes, forwardRef } from "react";
import useRadioFieldset from "./RadioFieldsetContext";
import { RadioInputBase } from "./RadioInputBase";

export interface RadioInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  className?: string;
  label: string;
  value: string;
}

export const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
  (props, ref) => {
    const { value: valueContext, ...context } = useRadioFieldset() ?? {};

    const checked = valueContext && valueContext === props.value ? true : false;

    return (
      <RadioInputBase {...context} {...props} ref={ref} checked={checked} />
    );
  },
);
RadioInput.displayName = "RadioInput";
