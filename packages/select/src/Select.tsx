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
    const helpTextId = `${id}-help-text`;

    return (
      <FormField
        className={clsx(
          "sds-select",
          errorText && "sds-select--invalid",
          className,
        )}
        label={label}
        errorText={errorText}
        helpText={helpText}
        htmlFor={id}
        helpTextId={helpTextId}
      >
        <div className="sds-select__select">
          <select
            ref={ref}
            id={id}
            className="sds-select__select-input"
            aria-labelledby={ariaLabelledBy}
            aria-describedby={(errorText ?? helpText) ? helpTextId : undefined}
            aria-invalid={Boolean(errorText) && true}
            aria-errormessage={errorText ? helpTextId : undefined}
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
