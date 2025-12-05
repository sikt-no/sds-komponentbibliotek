import { clsx } from "clsx/lite";
import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useId,
} from "react";
import "./radio.pcss";

interface RadioInputBaseBaseProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "aria-label" | "aria-labelledby"
> {
  className?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  checked?: boolean;
  error?: boolean;
}

export type RadioInputBaseProps = RadioInputBaseBaseProps &
  (
    | {
        label: NonNullable<ReactNode>;
        "aria-labelledby"?: never;
      }
    | {
        label?: never;
        "aria-labelledby": string;
      }
  );

export const RadioInputBase = forwardRef<HTMLInputElement, RadioInputBaseProps>(
  (
    {
      className,
      label,
      "aria-labelledby": ariaLabelledby,
      name,
      onChange,
      checked,
      value,
      error,
      ...rest
    },
    ref,
  ) => {
    const id = useId();

    const labelClassName = clsx(
      "sds-radio",
      error && "sds-radio--error",
      className,
    );

    const input = (
      <input
        ref={ref}
        className="sds-radio__input"
        id={id}
        name={name}
        type="radio"
        onChange={onChange}
        value={value}
        aria-labelledby={ariaLabelledby}
        checked={checked}
        {...rest}
      />
    );

    return label !== undefined ? (
      <label className={labelClassName} htmlFor={id}>
        {input}
        <span className="sds-radio__input-label">{label}</span>
      </label>
    ) : (
      <span className={labelClassName}>{input}</span>
    );
  },
);
RadioInputBase.displayName = "RadioInputBase";
