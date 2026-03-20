import { OptionHTMLAttributes } from "react";
import "@u-elements/u-datalist";

export const Option = ({
  label,
  value,
  ...rest
}: OptionHTMLAttributes<HTMLOptionElement>) => (
  <u-option className="sds-combobox__datalist-option" value={value} {...rest}>
    {label}
  </u-option>
);
