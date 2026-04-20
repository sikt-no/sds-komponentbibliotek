import { FormField } from "@sikt/sds-form";
import { clsx } from "clsx/lite";
import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useCallback,
  useId,
} from "react";
import "./input.pcss";

interface TextAreaBaseProps extends Omit<
  InputHTMLAttributes<HTMLTextAreaElement>,
  "onChange" | "aria-label" | "aria-labelledby"
> {
  className?: string;
  placeholder?: string;
  onChange?: (
    event: ChangeEvent<HTMLTextAreaElement>,
    newValue: string,
  ) => void;
  value?: string;
  icon?: ReactNode;
  /**
   * Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` &  `aria-errormessage`.
   */
  errorText?: ReactNode;
  /**
   * Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.
   */
  helpText?: ReactNode;
  rows?: number;
}

export type TextAreaProps = TextAreaBaseProps &
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

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      label,
      "aria-labelledby": ariaLabelledBy,
      placeholder,
      onChange,
      value,
      icon,
      errorText,
      helpText,
      rows,
      ...rest
    },
    ref,
  ) => {
    const id = useId();
    const changeHandler = useCallback(
      (event: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(event, event.target.value);
      },
      [onChange],
    );
    const errorTextId = `${id}-error-text`;
    const helpTextId = `${id}-help-text`;

    const ariaDescribedBy =
      [errorText && errorTextId, helpText && helpTextId]
        .filter(Boolean)
        .join(" ") || undefined;

    return (
      <FormField
        className={clsx(
          "sds-input",
          `sds-input--textarea`,
          errorText && `sds-input--error`,
          className,
        )}
        label={label}
        errorText={errorText}
        errorTextId={errorTextId}
        helpText={helpText}
        helpTextId={helpTextId}
        htmlFor={id}
      >
        <span className="sds-input__wrapper">
          {icon && <div className="sds-input__icon">{icon}</div>}
          <textarea
            ref={ref}
            className={clsx(
              "sds-input__input",
              !rows && "sds-input__input--content-sized",
            )}
            id={id}
            placeholder={placeholder}
            onChange={onChange && changeHandler}
            value={value}
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
            aria-invalid={Boolean(errorText)}
            aria-errormessage={errorText ? errorTextId : undefined}
            rows={rows}
            {...rest}
          />
        </span>
      </FormField>
    );
  },
);
TextArea.displayName = "TextArea";
