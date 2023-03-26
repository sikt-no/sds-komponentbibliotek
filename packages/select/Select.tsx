import React, {
  ChangeEventHandler,
  HTMLAttributes,
  OptionHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  useId,
} from "react";
import clsx from "clsx";
import { Icon } from "@sikt/sds-icons";
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

export const Select = ({
  className,
  label,
  options,
  errorText,
  helpText,
  icon,
  selectProps,
  onChange,
  ...rest
}: SelectProps) => {
  const id = useId();

  return (
    <div
      className={clsx(
        "sds-select",
        icon && "sds-select--icon",
        errorText && "sds-select--invalid",
        className
      )}
      {...rest}
    >
      <label htmlFor={id} className="sds-select__label">
        <div className="sds-select__label-text">
          {errorText && (
            <Icon icon="warning" className="sds-select__help-icon" />
          )}{" "}
          {label}
        </div>
        <div className="sds-select__select">
          {icon && <div className="sds-select__select-icon">{icon}</div>}
          <select
            id={id}
            className="sds-select__select-input"
            aria-describedby={`${id}-described`}
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
          <Icon
            icon="caret-circle-down"
            className="sds-select__select-button"
          />
        </div>
      </label>
      {(errorText ?? helpText) && (
        <div id={`${id}-described`} className="sds-select__help-text">
          {errorText ?? helpText}
        </div>
      )}
    </div>
  );
};
