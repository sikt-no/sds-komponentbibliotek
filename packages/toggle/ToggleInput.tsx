import React, {
  ReactNode,
  ChangeEventHandler,
  useId,
  InputHTMLAttributes,
} from "react";
import clsx from "clsx";
import { CheckIcon, WarningIcon, XIcon } from "@sikt/sds-icons";
import "./toggle-input.pcss";

export type ToggleInputProps = {
  checked?: boolean;
  label: ReactNode;
  labelFirst?: boolean;
  showIcons?: boolean;
  errorText?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const ToggleInput = ({
  checked = false,
  label,
  labelFirst = false,
  showIcons = true,
  errorText,
  onChange,
  inputProps = {},
  ...rest
}: ToggleInputProps) => {
  const id = useId();
  const labelElement = (
    <div className="sds-toggle__label">
      {errorText && <WarningIcon />} {label}
    </div>
  );

  return (
    <div
      className={clsx(
        "sds-toggle",
        checked && "sds-toggle--checked",
        errorText && "sds-toggle--error"
      )}
      {...rest}
    >
      <label className="sds-toggle__main-label">
        {labelFirst && labelElement}
        <div className="sds-toggle__inner">
          <input
            type="checkbox"
            className="sds-toggle__track"
            checked={checked}
            aria-describedby={errorText && `${id}-help-text`}
            aria-invalid={Boolean(errorText)}
            aria-errormessage={errorText && `${id}-help-text`}
            onChange={onChange}
            readOnly={!onChange}
            {...inputProps}
          />
          <div className="sds-toggle__thumb">
            {showIcons && checked && <CheckIcon />}
            {showIcons && !checked && <XIcon />}
          </div>
        </div>
        {!labelFirst && labelElement}
      </label>
      {errorText && (
        <div className="sds-toggle__help-text" id={`${id}-help-text`}>
          {errorText}
        </div>
      )}
    </div>
  );
};
