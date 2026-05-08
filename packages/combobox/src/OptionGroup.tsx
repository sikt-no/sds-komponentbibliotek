import { useId } from "react";
import type { ComboboxOptionGroupProps } from "./Combobox";
import { Option } from "./Option";

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
