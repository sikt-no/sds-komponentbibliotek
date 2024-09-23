import { useFieldset } from "@sikt/sds-form";
import { CheckIcon, MinusIcon } from "@sikt/sds-icons";
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
import "./checkbox-input.pcss";

interface CheckboxInputBaseProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "aria-label" | "aria-labelledby"
  > {
  isChecked?: boolean;
  indeterminate?: boolean;
  error?: boolean;
  name?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export type CheckboxInputProps = CheckboxInputBaseProps &
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

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  (
    {
      className,
      name,
      disabled,
      isChecked,
      indeterminate,
      onChange,
      label,
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
          onChange={onChange}
          value={value}
          aria-labelledby={ariaLabelledby}
          checked={isChecked ?? false}
          disabled={disabled}
          aria-invalid={(error ?? context.error) ? true : false}
          {...(indeterminate && { "aria-checked": "mixed" })}
          {...rest}
        />
        <div className="sds-checkbox__icon-wrapper">
          {indeterminate ? (
            <MinusIcon className="sds-checkbox__icon" />
          ) : (
            <CheckIcon className="sds-checkbox__icon" />
          )}
        </div>
      </>
    );

    return label !== undefined ? (
      <label className={labelClassName} htmlFor={id}>
        {input}
        <div className="sds-checkbox__input-label">{label}</div>
      </label>
    ) : (
      <div className={labelClassName}>{input}</div>
    );
  },
);
CheckboxInput.displayName = "CheckboxInput";
