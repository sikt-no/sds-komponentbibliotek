import React, {
  ReactNode,
  ChangeEventHandler,
  useId,
  InputHTMLAttributes,
} from "react";
import clsx from "clsx";
import { CheckIcon, WarningIcon, XIcon } from "@sikt/sds-icons";
import "./toggle-switch.pcss";

export type ToggleSwitchProps = {
  checked?: boolean;
  label: ReactNode;
  labelFirst?: boolean;
  showIcons?: boolean;
  errorText?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const ToggleSwitch = ({
  checked = false,
  label,
  labelFirst = false,
  showIcons = true,
  errorText,
  onChange,
  inputProps = {},
  ...rest
}: ToggleSwitchProps) => {
  const id = useId();
  const labelElement = (
    <div className="sds-toggle-switch__label">
      {errorText && <WarningIcon />} {label}
    </div>
  );

  return (
    <div
      className={clsx(
        "sds-toggle-switch",
        checked && "sds-toggle-switch--checked",
        errorText && "sds-toggle-switch--error"
      )}
      {...rest}
    >
      <label className="sds-toggle-switch__main-label">
        {labelFirst && labelElement}
        <div className="sds-toggle-switch__inner">
          <input
            type="checkbox"
            role="switch"
            className="sds-toggle-switch__track"
            checked={checked}
            aria-describedby={errorText && `${id}-help-text`}
            aria-invalid={Boolean(errorText)}
            aria-errormessage={errorText && `${id}-help-text`}
            onChange={onChange}
            readOnly={!onChange}
            {...inputProps}
          />
          <div className="sds-toggle-switch__thumb">
            {showIcons && checked && <CheckIcon />}
            {showIcons && !checked && <XIcon />}
          </div>
        </div>
        {!labelFirst && labelElement}
      </label>
      {errorText && (
        <div className="sds-toggle-switch__help-text" id={`${id}-help-text`}>
          {errorText}
        </div>
      )}
    </div>
  );
};
