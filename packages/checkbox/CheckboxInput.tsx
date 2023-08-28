import React, { ChangeEvent, HTMLAttributes, forwardRef, useId } from "react";
import clsx from "clsx";
import "./checkbox-input.pcss";
import { CheckIcon } from "@sikt/sds-icons";
import { useFieldset } from "@sikt/sds-form";

export interface CheckboxInputProps extends HTMLAttributes<HTMLInputElement> {
  isChecked?: boolean;
  disabled?: boolean;
  error?: boolean;
  id?: string;
  label?: string;
  name?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  (
    {
      className,
      name,
      disabled,
      isChecked,
      onChange,
      label,
      value,
      error,
      ...rest
    },
    ref
  ) => {
    const id = useId();
    const context = useFieldset() ?? {};
    return (
      <label
        className={clsx(
          "sds-checkbox",
          (error ?? context.error) && "sds-checkbox--error",
          className
        )}
        htmlFor={id}
      >
        <input
          ref={ref}
          className="sds-checkbox__input"
          id={id}
          name={name ?? context.name}
          type="checkbox"
          onChange={onChange}
          value={value}
          checked={isChecked ?? false}
          disabled={disabled}
          aria-invalid={error ?? context.error ? true : false}
          {...rest}
        />
        <div className="sds-checkbox__icon-wrapper">
          <CheckIcon className="sds-checkbox__icon" />
        </div>
        <div className="sds-checkbox__input-label">{label}</div>
      </label>
    );
  }
);
CheckboxInput.displayName = "CheckboxInput";
