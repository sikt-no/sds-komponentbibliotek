import { CheckIcon, XIcon } from "@sikt/sds-icons";
import clsx from "clsx";
import { ChangeEventHandler, ReactNode, forwardRef, useId } from "react";
import "./toggle-switch.pcss";

export interface ToggleSwitchProps {
  checked?: boolean;
  label: ReactNode;
  labelFirst?: boolean;
  showIcons?: boolean;
  error?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
  (
    {
      checked = false,
      label,
      labelFirst = false,
      showIcons = true,
      error = false,
      onChange,
      className,
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
          className,
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
