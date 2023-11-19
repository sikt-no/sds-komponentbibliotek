import React, { ReactNode, ChangeEventHandler, useId, forwardRef } from "react";
import clsx from "clsx";
import { CheckIcon, XIcon } from "@sikt/sds-icons";
import "./toggle-switch.pcss";

export type ToggleSwitchProps = {
  checked?: boolean;
  label: ReactNode;
  labelFirst?: boolean;
  showIcons?: boolean;
  error?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
  (
    {
      checked = false,
      label,
      labelFirst = false,
      showIcons = true,
      error = false,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const id = useId();
    const labelElement = (
      <div className="sds-toggle-switch__label-text">{label}</div>
    );

    return (
      <div
        className={clsx(
          "sds-toggle-switch",
          checked && "sds-toggle-switch--checked",
          error && "sds-toggle-switch--error",
        )}
        data-testid="sds-toggle-switch"
      >
        <label className="sds-toggle-switch__label" htmlFor={id}>
          {labelFirst && labelElement}
          <div className="sds-toggle-switch__inner">
            <input
              ref={ref}
              id={id}
              type="checkbox"
              role="switch"
              className="sds-toggle-switch__track"
              checked={checked}
              aria-invalid={error}
              onChange={onChange}
              readOnly={!onChange}
              {...rest}
            />
            <div className="sds-toggle-switch__thumb">
              {showIcons && checked && <CheckIcon />}
              {showIcons && !checked && <XIcon />}
            </div>
          </div>
          {!labelFirst && labelElement}
        </label>
      </div>
    );
  },
);
ToggleSwitch.displayName = "ToggleSwitch";
