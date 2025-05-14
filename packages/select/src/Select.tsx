import { FormField } from "@sikt/sds-form";
import { ExpandShowAltIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import {
  ChangeEventHandler,
  OptionHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  forwardRef,
  useId,
} from "react";
import "./select.pcss";

interface SelectBaseProps
  extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "onChange" | "aria-label" | "aria-labelledby"
  > {
  className?: string;
  options: Omit<OptionHTMLAttributes<HTMLOptionElement>, "selected">[];
  errorText?: ReactNode;
  helpText?: ReactNode;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export type SelectProps = SelectBaseProps &
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
              onChange?.(e);
            }}
            {...rest}
          >
            {options.map((option) => (
              <option key={option.value?.toString()} {...option}>
                {option.label}
              </option>
            ))}
          </select>
          <ExpandShowAltIcon className="sds-select__select-button" />
        </div>
      </FormField>
    );
  },
);
Select.displayName = "Select";
