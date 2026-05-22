import { OptgroupHTMLAttributes, useId } from "react";
import { Option, type OptionProps } from "./Option";

export interface ComboboxOptionGroupProps extends OptgroupHTMLAttributes<HTMLOptGroupElement> {
  options: OptionProps[];
}

export const OptionGroup = ({ label, options }: ComboboxOptionGroupProps) => {
  const id = useId();

  return (
    <div className="sds-combobox__datalist-group" role="group">
      <span className="sds-combobox__datalist-group-label" id={id}>
        {label}
      </span>
      {options.map((option) => (
        <Option
          key={`${option.value?.toString() ?? option.label?.toString()}`}
          aria-describedby={id}
          suppressHydrationWarning
          {...option}
        />
      ))}
    </div>
  );
};
