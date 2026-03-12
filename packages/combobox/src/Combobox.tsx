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
  useState,
} from "react";
import "@u-elements/u-combobox";
import "@u-elements/u-datalist";
import "./combobox.pcss";

export interface ComboboxOptionGroupProps {
  /**
   * Label for the section heading.
   */
  label: string;
  /**
   * Options within this section.
   */
  options: OptionHTMLAttributes<HTMLOptionElement>[];
}

export type ComboboxOption =
  | OptionHTMLAttributes<HTMLOptionElement>
  | ComboboxOptionGroupProps;

const isOptionGroup = (
  item: ComboboxOption,
): item is ComboboxOptionGroupProps =>
  "options" in item && Array.isArray(item.options);

const flattenOptions = (
  items: ComboboxOption[],
): OptionHTMLAttributes<HTMLOptionElement>[] =>
  items.flatMap((item) => (isOptionGroup(item) ? item.options : [item]));

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
   * A list of option objects or section objects containing grouped options:
   * - **label** Text for the option label or section heading.
   * - **value** The value submitted with the form (options only).
   * - **selected** Whether the option is initially selected (options only).
   * - **options** Grouped options within a section (sections only).
   */
  options: ComboboxOption[];
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
  /**
   * Sets language for accessible texts.
   *
   * @default "nb"
   */
  lang?: "nb" | "nn" | "en";
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

const i18n = {
  nb: {
    "data-sr-added": "Lagt til",
    "data-sr-removed": "Fjernet",
    "data-sr-remove": "Trykk for å fjerne",
    "data-sr-empty": "Ingen valgte",
    "data-sr-found": "Naviger til venstre for å finne %d valgte",
    "data-sr-invalid": "Ugyldig verdi",
    "data-sr-of": "av",
    "data-sr-singular": "%d treff",
    "data-sr-plural": "%d treff",
    "data-sr-clear": "Fjern tekst",
  },
  nn: {
    "data-sr-added": "Lagt til",
    "data-sr-removed": "Fjerna",
    "data-sr-remove": "Trykk for å fjerne",
    "data-sr-empty": "Ingen valde",
    "data-sr-found": "Naviger til venstre for å finne %d valde",
    "data-sr-invalid": "Ugyldig verdi",
    "data-sr-of": "av",
    "data-sr-singular": "%d treff",
    "data-sr-plural": "%d treff",
    "data-sr-clear": "Fjern tekst",
  },
  en: {
    "data-sr-added": "Added",
    "data-sr-removed": "Removed",
    "data-sr-remove": "Press to remove",
    "data-sr-empty": "No selected",
    "data-sr-found": "Navigate left to find %d selected",
    "data-sr-invalid": "Invalid value",
    "data-sr-of": "of",
    "data-sr-singular": "%d hit",
    "data-sr-plural": "%d hits",
    "data-sr-clear": "Clear text",
  },
};

const getTextProps = (lang: keyof typeof i18n) => i18n[lang];

const Option = ({
  label,
  value,
  ...rest
}: OptionHTMLAttributes<HTMLOptionElement>) => {
  return (
    <u-option className="sds-combobox__datalist-option" value={value} {...rest}>
      {label}
    </u-option>
  );
};

const OptionGroup = ({ label, options }: ComboboxOptionGroupProps) => {
  const id = useId();

  return (
    <div className="sds-combobox__datalist-group" role="group">
      <span className="sds-combobox__datalist-group-label" id={id}>
        {label}
      </span>
      {options.map((option) => (
        <Option
          key={option.value?.toString()}
          aria-describedby={id}
          {...option}
        />
      ))}
    </div>
  );
};

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
  lang = "nb",
  ...rest
}: ComboboxProps) => {
  const flattenedOptions = flattenOptions(options);
  const comboboxRef = useRef<UHTMLComboboxElement>(null);
  const optionsRef = useRef(flattenedOptions);
  const onChangeRef = useRef(onChange);
  const hasInteracted = useRef(false);
  const id = useId();
  const errorTextId = `${id}-error-text`;
  const helpTextId = `${id}-help-text`;
  const listId = `${id}-list`;
  const textProps = getTextProps(lang);

  const [initialSelectedOptions, setInitialSelectedOptions] = useState(() =>
    flattenedOptions.filter((option) => option.selected),
  );

  useEffect(() => {
    const flattenedOptions = flattenOptions(options);
    optionsRef.current = flattenedOptions;
    if (initialSelectedOptions.length === 0 && !hasInteracted.current) {
      const selected = flattenedOptions.filter((option) => option.selected);
      if (selected.length > 0) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: sync async-arriving selected options into initial badge state before user interaction
        setInitialSelectedOptions(selected);
      }
    }
  }, [options, initialSelectedOptions.length]);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    const currentRef = comboboxRef.current;

    const handleOnChange = (e: CustomEvent<HTMLDataElement>) => {
      e.preventDefault();
      hasInteracted.current = true;

      const currentOptions = optionsRef.current;
      const index = currentOptions.findIndex(
        (item) => item.value === e.detail.value,
      );
      if (index === -1) return;
      const newOption = currentOptions[index];
      if (e.detail.isConnected) {
        newOption.selected = true;
      } else {
        delete newOption.selected;
      }
      onChangeRef.current?.(e, currentOptions);
    };

    currentRef?.addEventListener("comboboxafterselect", handleOnChange);
    return () => {
      currentRef?.removeEventListener("comboboxafterselect", handleOnChange);
    };
  }, []);

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
          {...textProps}
          {...rest}
        >
          {initialSelectedOptions.map((option) => (
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
            <ScreenReaderOnly>{textProps["data-sr-clear"]}</ScreenReaderOnly>
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
            data-sr-singular={textProps["data-sr-singular"]}
            data-sr-plural={textProps["data-sr-plural"]}
          >
            {options.map((option) =>
              isOptionGroup(option) ? (
                <OptionGroup
                  key={option.label}
                  label={option.label}
                  options={option.options}
                />
              ) : (
                <Option key={option.value?.toString()} {...option} />
              ),
            )}
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
