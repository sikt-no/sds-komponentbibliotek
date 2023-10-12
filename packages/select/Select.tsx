import React, {
  ChangeEventHandler,
  HTMLAttributes,
  OptionHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  forwardRef,
  useId,
} from "react";
import clsx from "clsx";
import { CaretCircleDownIcon } from "@sikt/sds-icons";
import { FormField } from "@sikt/sds-form";
import "./select.pcss";

export interface SelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  className?: string;
  label: string;
  options: OptionHTMLAttributes<HTMLOptionElement>[];
  errorText?: string;
  helpText?: string;
  icon?: ReactNode;
  selectProps?: SelectHTMLAttributes<HTMLSelectElement>;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      options,
      errorText,
      helpText,
      icon,
      selectProps,
      onChange,
      ...rest
    },
    ref
  ) => {
    const id = useId();
    const helpTextId = `${id}-help-text`;

    return (
      <FormField
        className={clsx(
          "sds-select",
          icon && "sds-select--icon",
          errorText && "sds-select--invalid",
          className
        )}
        label={label}
        errorText={errorText}
        helpText={helpText}
        htmlFor={id}
        helpTextId={helpTextId}
        {...rest}
      >
        <div className="sds-select__select">
          <select
            ref={ref}
            id={id}
            className="sds-select__select-input"
            aria-describedby={helpTextId}
            aria-invalid={Boolean(errorText) && true}
            onChange={(e) => onChange && onChange(e)}
            {...selectProps}
          >
            {options.map((option) => (
              <option
                key={option.value && option.value.toString()}
                value={option.value}
                selected={option.selected}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <CaretCircleDownIcon className="sds-select__select-button" />
        </div>
      </FormField>
    );
  }
);
Select.displayName = "Select";
