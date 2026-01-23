import { ScreenReaderOnly } from "@sikt/sds-core";
import { Label, HelpText } from "@sikt/sds-form";
import { CancelIcon, ExpandShowAltIcon } from "@sikt/sds-icons";
import type { UHTMLComboboxElement } from "@u-elements/u-combobox";
import { clsx } from "clsx/lite";
import {
  InputHTMLAttributes,
  HTMLAttributes,
  OptionHTMLAttributes,
  ReactNode,
  useEffect,
  useId,
  useRef,
} from "react";
import "@u-elements/u-combobox";
import "@u-elements/u-datalist";
import "./combobox.pcss";

export interface ComboboxBaseProps extends Omit<
  HTMLAttributes<UHTMLComboboxElement>,
  "onChange"
> {
  className?: string;
  /**
   * Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` &  `aria-errormessage`.
   */
  errorText?: ReactNode;
  /**
   * Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.
   */
  helpText?: ReactNode;
  /**
   * A list of option objects:
   * - **label** This attribute is text for the label indicating the meaning of the option.
   * - **value** The content of this attribute represents the value to be submitted with the form, should this option be selected.
   * - **selected** If present, this Boolean attribute indicates that the option is initially selected.
   */
  options: OptionHTMLAttributes<HTMLOptionElement>[];
  /**
   * Indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time.
   *
   * @default undefined
   */
  multiple?: boolean;
  /**
   * Name of the form control. Submitted with the form as part of a name/value pair.
   *
   * @default undefined
   */
  name?: string;
  /**
   * Function when a user changes the selected option.
   *
   * @default undefined
   */
  onChange?: (
    event: CustomEvent<HTMLDataElement>,
    newValue: OptionHTMLAttributes<HTMLOptionElement>[],
  ) => void;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  "data-sr-added"?: string;
  "data-sr-removed"?: string;
  "data-sr-remove"?: string;
  "data-sr-empty"?: string;
  "data-sr-found"?: string;
  "data-sr-invalid"?: string;
  "data-sr-of"?: string;
  "data-sr-items"?: string;
  "data-sr-singular"?: string;
  "data-sr-plural"?: string;
  "data-sr-clear"?: string;
}

export type ComboboxProps = ComboboxBaseProps &
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

export const Combobox = ({
  className,
  errorText,
  helpText,
  label,
  "aria-labelledby": ariaLabelledBy,
  multiple = false,
  options,
  name,
  onChange,
  inputProps,
  "data-sr-added": dataSrAdded = "Lagt til",
  "data-sr-removed": dataSrRemoved = "Fjernet",
  "data-sr-remove": dataSrRemove = "Trykk for å fjerne",
  "data-sr-empty": dataSrEmpty = "Ingen valgte",
  "data-sr-found": dataSrFound = "Naviger til venstre for å finne %d valgte",
  "data-sr-invalid": dataSrInvalid = "Ugyldig verdi",
  "data-sr-of": dataSrOf = "av",
  "data-sr-items": dataSrItems = "Valgte",
  "data-sr-singular": dataSrSingular = "%d treff",
  "data-sr-plural": dataSrPlural = "%d treff",
  "data-sr-clear": dataSrClear = "Fjern tekst",
  ...rest
}: ComboboxProps) => {
  const comboboxRef = useRef<UHTMLComboboxElement>(null);
  const id = useId();
  const errorTextId = `${id}-error-text`;
  const helpTextId = `${id}-help-text`;
  const listId = `${id}-list`;

  useEffect(() => {
    const handleOnChange = (e: CustomEvent<HTMLDataElement>) => {
      e.preventDefault();

      const index = options.findIndex((item) => item.value === e.detail.value);
      const newOption = options[index];
      if (e.detail.isConnected) {
        newOption.selected = e.detail.isConnected;
      } else {
        delete newOption.selected;
      }
      onChange?.(e, options);
    };

    comboboxRef.current?.addEventListener(
      "comboboxafterselect",
      handleOnChange,
    );
    return () => {
      comboboxRef.current?.removeEventListener(
        "comboboxafterselect",
        handleOnChange,
      );
    };
  }, [options, onChange]);

  return (
    <div
      className={clsx(
        "sds-form-field",
        errorText && "sds-form-field--error",
        "sds-combobox",
        errorText && "sds-combobox--invalid",
        className,
      )}
    >
      <div className="sds-form-field__label-wrapper">
        {label !== undefined && (
          <Label text={label} error={Boolean(errorText)} htmlFor={id} />
        )}
        <u-combobox
          className="sds-combobox__combobox"
          data-multiple={multiple}
          ref={comboboxRef}
          data-sr-added={dataSrAdded}
          data-sr-removed={dataSrRemoved}
          data-sr-remove={dataSrRemove}
          data-sr-empty={dataSrEmpty}
          data-sr-found={dataSrFound}
          data-sr-invalid={dataSrInvalid}
          data-sr-of={dataSrOf}
          data-sr-items={dataSrItems}
          {...rest}
        >
          {options
            .filter((option) => option.selected)
            .map((option) => (
              <data key={option.value?.toString()} value={option.value}>
                {option.label}
              </data>
            ))}
          <input
            className="sds-combobox__input"
            id={id}
            list={listId}
            {...inputProps}
            aria-labelledby={ariaLabelledBy}
          />
          <del className="sds-combobox__button">
            <ScreenReaderOnly>{dataSrClear}</ScreenReaderOnly>
            <span className="sds-combobox__button-icon">
              <CancelIcon />
            </span>
          </del>
          <span className="sds-combobox__button">
            <span className="sds-combobox__button-icon">
              <ExpandShowAltIcon />
            </span>
          </span>
          <u-datalist
            className="sds-combobox__datalist"
            id={listId}
            data-sr-singular={dataSrSingular}
            data-sr-plural={dataSrPlural}
          >
            {options.map((option) => (
              <u-option
                className="sds-combobox__datalist-option"
                key={option.value?.toString()}
                value={option.value}
              >
                {option.label}
              </u-option>
            ))}
          </u-datalist>
          {!!name && <select name={name} aria-hidden hidden />}
        </u-combobox>
      </div>
      {helpText && <HelpText id={helpTextId}>{helpText}</HelpText>}
      {errorText && (
        <HelpText id={errorTextId} error>
          {errorText}
        </HelpText>
      )}
    </div>
  );
};

Combobox.displayName = "Combobox";
