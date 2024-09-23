import { CheckIcon, XIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import {
  ChangeEventHandler,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useId,
} from "react";
import "./toggle-switch.pcss";

interface ToggleSwitchBaseProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "aria-label" | "aria-labelledby"
  > {
  checked?: boolean;
  showIcons?: boolean;
  error?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

export type ToggleSwitchProps = ToggleSwitchBaseProps &
  (
    | {
        label: NonNullable<ReactNode>;
        labelFirst?: boolean;
        "aria-labelledby"?: never;
      }
    | {
        label?: never;
        labelFirst?: never;
        "aria-labelledby": string;
      }
  );

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
  (
    {
      checked = false,
      label,
      "aria-labelledby": ariaLabelledby,
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
    const input = (
      <div className="sds-toggle-switch__inner">
        <input
          ref={ref}
          id={id}
          type="checkbox"
          role="switch"
          className="sds-toggle-switch__track"
          aria-labelledby={ariaLabelledby}
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
        {label !== undefined ? (
          <label className="sds-toggle-switch__label" htmlFor={id}>
            {labelFirst && labelElement}
            {input}
            {!labelFirst && labelElement}
          </label>
        ) : (
          input
        )}
      </div>
    );
  },
);
ToggleSwitch.displayName = "ToggleSwitch";
