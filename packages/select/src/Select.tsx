import {
  ChangeEventHandler,
  OptionHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  forwardRef,
  useId,
} from "react";
import clsx from "clsx";
import { CaretCircleDownIcon } from "@sikt/sds-icons";
import { FormField } from "@sikt/sds-form";
import "./select.pcss";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  label: ReactNode;
  options: Omit<OptionHTMLAttributes<HTMLOptionElement>, "selected">[];
  errorText?: ReactNode;
  helpText?: ReactNode;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className, label, options, errorText, helpText, onChange, ...rest },
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
            aria-describedby={helpTextId}
            aria-invalid={Boolean(errorText) && true}
            onChange={(e) => {
              onChange && onChange(e);
            }}
            {...rest}
          >
            {options.map((option) => (
              <option key={option.value?.toString()} {...option}>
                {option.label}
              </option>
            ))}
          </select>
          <CaretCircleDownIcon className="sds-select__select-button" />
        </div>
      </FormField>
    );
  },
);
Select.displayName = "Select";
