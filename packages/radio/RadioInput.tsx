import React, { HTMLAttributes, InputHTMLAttributes } from "react";
import useRadioFieldset from "./RadioFieldsetContext";
import { RadioInputBase } from "./RadioInputBase";

export interface RadioInputProps
  extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  className?: string;
  label: string;
  value: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export const RadioInput = (props: RadioInputProps) => {
  const { value: valueContext, ...context } = useRadioFieldset() ?? {};

  const checked =
    valueContext && valueContext === props.value ? true : undefined;

  return <RadioInputBase {...context} {...props} checked={checked} />;
};
