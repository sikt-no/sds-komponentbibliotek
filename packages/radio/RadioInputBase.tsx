import React, {
  ChangeEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  forwardRef,
  useId,
} from "react";
import clsx from "clsx";
import "./radio.pcss";

export interface RadioInputBaseProps
  extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  className?: string;
  label: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  checked?: boolean;
  error?: boolean;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export const RadioInputBase = forwardRef<HTMLInputElement, RadioInputBaseProps>(
  (
    {
      className,
      label,
      name,
      onChange,
      checked,
      value,
      error,
      inputProps,
      ...rest
    },
    ref
  ) => {
    const id = useId();

    return (
      <label
        className={clsx("sds-radio", error && "sds-radio--error", className)}
        htmlFor={id}
        {...rest}
      >
        <input
          ref={ref}
          className="sds-radio__input"
          id={id}
          name={name}
          type="radio"
          onChange={onChange}
          value={value}
          checked={checked ?? undefined}
          {...inputProps}
        />
        <div className="sds-radio__input-label">{label}</div>
      </label>
    );
  }
);
RadioInputBase.displayName = "RadioInputBase";
