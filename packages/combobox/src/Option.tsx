import { OptionHTMLAttributes } from "react";
import "@u-elements/u-datalist";

export type OptionProps = OptionHTMLAttributes<HTMLOptionElement>;

export const Option = ({ label, value, ...rest }: OptionProps) => (
  <u-option
    className="sds-combobox__datalist-option"
    value={value}
    suppressHydrationWarning
    {...rest}
  >
    {label}
  </u-option>
);
