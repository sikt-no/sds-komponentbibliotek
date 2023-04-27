import React, { ChangeEvent, HTMLAttributes, useId } from "react";
import clsx from "clsx";
import "./checkbox-input.pcss";
import { CheckIcon, MinusIcon } from "@sikt/sds-icons";

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

export const CheckboxInput = ({
  className,
  name,
  disabled,
  isChecked,
  onChange,
  label,
  value,
  error,
  ...rest
}: CheckboxInputProps) => {
  const id = useId();
  return (
    <label htmlFor={id} className={"sds-checkbox"}>
      <input
        id={id}
        name={name}
        type="checkbox"
        value={value}
        checked={isChecked ?? undefined}
        disabled={disabled}
        aria-invalid={error ? true : false}
        onChange={onChange}
        className={clsx(
          "sds-checkbox__input",
          error && "sds-checkbox__input--error",
          className
        )}
        {...rest}
      />
      <div className="sds-checkbox__icon-wrapper">
        <CheckIcon
          className={clsx(
            "sds-checkbox__icon",
            isChecked && "sds-checkbox__icon--checked"
          )}
        />
      </div>

      <span className="sds-checkbox__label">{label}</span>
    </label>
  );
};
