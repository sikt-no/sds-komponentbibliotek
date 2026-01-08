import { ConfirmIcon, CancelIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import {
  ChangeEventHandler,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useId,
} from "react";
import "./toggle-switch.pcss";

interface ToggleSwitchBaseProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "aria-label" | "aria-labelledby"
> {
  checked?: boolean;
  showIcons?: boolean;
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
        /**
         * Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden.
         */
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
      onChange,
      className,
      ...rest
    },
    ref,
  ) => {
    const id = useId();
    const labelElement = (
      <span className="sds-toggle-switch__label-text">{label}</span>
    );
    const input = (
      <span className="sds-toggle-switch__inner">
        <input
          ref={ref}
          id={id}
          type="checkbox"
          role="switch"
          className="sds-toggle-switch__track"
          aria-labelledby={ariaLabelledby}
          checked={checked}
          onChange={onChange}
          readOnly={!onChange}
          {...rest}
        />
        <span className="sds-toggle-switch__thumb">
          {showIcons && checked && <ConfirmIcon />}
          {showIcons && !checked && <CancelIcon />}
        </span>
      </span>
    );

    return (
      <div
        className={clsx(
          "sds-toggle-switch",
          checked && "sds-toggle-switch--checked",
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
