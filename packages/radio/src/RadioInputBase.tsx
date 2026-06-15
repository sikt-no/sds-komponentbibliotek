import { clsx } from "clsx/lite";
import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useId,
} from "react";
import "./radio.css";

interface RadioInputBaseBaseProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "aria-label" | "aria-labelledby"
> {
  className?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
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
        /**
         * Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden.
         */
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
        onChange={(e) => onChange?.(e, e.target.value)}
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
