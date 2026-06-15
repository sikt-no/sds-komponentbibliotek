import { useFieldset } from "@sikt/sds-form";
import { ConfirmIcon, SubtractIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useId,
  useEffect,
  useRef,
  useImperativeHandle,
} from "react";
import "./checkbox-input.css";

interface CheckboxInputBaseProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "aria-label" | "aria-labelledby"
> {
  checked?: boolean;
  indeterminate?: boolean;
  error?: boolean;
  name?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>, isChecked: boolean) => void;
  className?: string;
}

export type CheckboxInputProps = CheckboxInputBaseProps &
  (
    | {
        label: NonNullable<ReactNode>;
        "aria-label"?: never;
        "aria-labelledby"?: never;
      }
    | {
        label?: never;
        "aria-label"?: never;
        /**
         * Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden.
         */
        "aria-labelledby": string;
      }
    | {
        label?: never;
        "aria-label": string;
        "aria-labelledby"?: never;
      }
  );

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  (
    {
      className,
      name,
      disabled,
      checked,
      indeterminate,
      onChange,
      label,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      value,
      error,
      ...rest
    },
    ref,
  ) => {
    const id = useId();
    const context = useFieldset() ?? {};
    const inputRef = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(
      ref,
      () => inputRef.current ?? ({} as HTMLInputElement),
      [],
    );

    useEffect(() => {
      if (inputRef.current && "indeterminate" in inputRef.current) {
        inputRef.current.indeterminate = !!indeterminate;
      }
    }, [indeterminate]);

    const labelClassName = clsx(
      "sds-checkbox",
      (error ?? context.error) && "sds-checkbox--error",
      className,
    );

    const input = (
      <>
        <input
          ref={inputRef}
          className="sds-checkbox__input"
          id={id}
          name={name ?? context.name}
          type="checkbox"
          onChange={(e) => onChange?.(e, e.target.checked)}
          value={value}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          checked={checked ?? false}
          disabled={disabled}
          aria-invalid={(error ?? context.error) ? true : false}
          {...(indeterminate && { "aria-checked": "mixed" })}
          {...rest}
        />
        <span className="sds-checkbox__icon-wrapper">
          {indeterminate ? (
            <SubtractIcon className="sds-checkbox__icon" />
          ) : (
            <ConfirmIcon className="sds-checkbox__icon" />
          )}
        </span>
      </>
    );

    return label !== undefined ? (
      <label className={labelClassName} htmlFor={id}>
        {input}
        <span className="sds-checkbox__input-label">{label}</span>
      </label>
    ) : (
      <span className={labelClassName}>{input}</span>
    );
  },
);
CheckboxInput.displayName = "CheckboxInput";
