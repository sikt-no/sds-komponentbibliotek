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
  OptgroupHTMLAttributes,
} from "react";
import "./select.css";

/** HTML `<option>` attributes. The most common are `label` and `value`. */
type OptionProps = OptionHTMLAttributes<HTMLOptionElement>;

/** Renders an `<optgroup>`. Provide a `label` and an array of `options`. */
interface SelectOptionGroupProps extends OptgroupHTMLAttributes<HTMLOptGroupElement> {
  options: OptionProps[];
}

/** A single option `{ label, value }` or an optgroup `{ label, options: [...] }`. */
type SelectOptionProps = OptionProps | SelectOptionGroupProps;

interface SelectBaseProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "onChange" | "aria-label" | "aria-labelledby"
> {
  className?: string;
  /**
   * Options to render. Each option is `{ label, value }`. For grouped options,
   * use `{ label, options: [{ label, value }, ...] }`.
   *
   * @example
   * options={[
   *   { label: 'First item', value: '1' },
   *   { label: 'Second item', value: '2' },
   * ]}
   */
  options: SelectOptionProps[];
  /**
   * The controlled selected value. Must match one of the `value` fields in `options`.
   */
  value?: string | number | readonly string[];
  /**
   * Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` &  `aria-errormessage`.
   */
  errorText?: ReactNode;
  /**
   * Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.
   */
  helpText?: ReactNode;
  /**
   * Called when the user selects an option. `value` is `event.target.value` as a convenience.
   */
  onChange?: (event: ChangeEvent<HTMLSelectElement>, value: string) => void;
}

export type SelectProps = SelectBaseProps &
  (
    | {
        /** Visible label rendered above the select. Required unless `aria-labelledby` is set. */
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

const isOptionGroup = (
  option: SelectOptionProps,
): option is SelectOptionGroupProps =>
  "options" in option && Array.isArray(option.options);

const Option = ({ label, value, ...rest }: OptionProps) => (
  <option className="sds-select__option" value={value} {...rest}>
    {label}
  </option>
);

const SelectOptionGroup = ({ label, options }: SelectOptionGroupProps) => (
  <optgroup className="sds-select__optgroup" label={label}>
    {options.map((option) => (
      <Option
        key={`${option.value?.toString() ?? option.label?.toString()}`}
        {...option}
      />
    ))}
  </optgroup>
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
            {options.map((option) =>
              isOptionGroup(option) ? (
                <SelectOptionGroup key={option.label} {...option} />
              ) : (
                <Option
                  key={`${option.value?.toString() ?? option.label?.toString()}`}
                  {...option}
                />
              ),
            )}
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
