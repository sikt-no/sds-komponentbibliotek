import { FormField } from "@sikt/sds-form";
import { ExpandShowAltIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import {
  ChangeEvent,
  OptionHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  forwardRef,
  useId,
} from "react";
import "./select.pcss";

interface SelectBaseProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "onChange" | "aria-label" | "aria-labelledby"
> {
  className?: string;
  options: Omit<OptionHTMLAttributes<HTMLOptionElement>, "selected">[];
  /**
   * Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` &  `aria-errormessage`.
   */
  errorText?: ReactNode;
  /**
   * Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.
   */
  helpText?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLSelectElement>, value: string) => void;
}

export type SelectProps = SelectBaseProps &
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

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      "aria-labelledby": ariaLabelledBy,
      options,
      errorText,
      helpText,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const id = useId();
    const errorTextId = `${id}-error-text`;
    const helpTextId = `${id}-help-text`;

    const ariaDescribedBy =
      [errorText && errorTextId, helpText && helpTextId]
        .filter(Boolean)
        .join(" ") || undefined;

    return (
      <FormField
        className={clsx(
          "sds-select",
          errorText && "sds-select--invalid",
          className,
        )}
        label={label}
        errorText={errorText}
        errorTextId={errorTextId}
        helpText={helpText}
        helpTextId={helpTextId}
        htmlFor={id}
      >
        <div className="sds-select__select">
          <select
            ref={ref}
            id={id}
            className="sds-select__select-input"
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
            aria-invalid={Boolean(errorText)}
            aria-errormessage={errorText ? errorTextId : undefined}
            onChange={(e) => {
              onChange?.(e, e.target.value);
            }}
            {...rest}
          >
            {options.map((option) => (
              <option key={option.value?.toString()} {...option}>
                {option.label}
              </option>
            ))}
          </select>
          <span className="sds-select__select-button">
            <ExpandShowAltIcon />
          </span>
        </div>
      </FormField>
    );
  },
);
Select.displayName = "Select";
