import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import useRadioFieldset from "./RadioFieldsetContext";
import { RadioInputBase } from "./RadioInputBase";

interface RadioInputBaseProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "aria-label" | "aria-labelledby"
  > {
  className?: string;
  value: string;
}

export type RadioInputProps = RadioInputBaseProps &
  (
    | {
        label: NonNullable<ReactNode>;
        "aria-labelledby"?: never;
      }
    | {
        label?: never;
        "aria-labelledby": string;
      }
  );

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
