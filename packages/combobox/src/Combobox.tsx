import { Label, HelpText } from "@sikt/sds-form";
import type { UHTMLComboboxElement } from "@u-elements/u-combobox";
import { clsx } from "clsx/lite";
import {
  InputHTMLAttributes,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
  forwardRef,
} from "react";
import "@u-elements/u-combobox";
import "@u-elements/u-datalist";
import "./combobox.css";
import { ClearButton } from "./ClearButton";
import { ExpandButton } from "./ExpandButton";
import { Option, type OptionProps } from "./Option";
import { OptionGroup, type ComboboxOptionGroupProps } from "./OptionGroup";
import {
  isOptionGroup,
  flattenOptions,
  sanitizeItems,
  nextItems,
  getTextProps,
} from "./utils";

export interface ComboboxItem {
  label: string;
  value: string;
}

export type ComboboxOption = OptionProps | ComboboxOptionGroupProps;

type ComboboxValue<T extends { multiple: boolean }> = T["multiple"] extends true
  ? (string | ComboboxItem)[]
  : string | ComboboxItem;

type ComboboxBaseProps = {
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
   */
  options: ComboboxOption[];
  /**
   * Name of the form control. Submitted with the form as part of a name/value pair.
   *
   * @default undefined
   */
  name?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  /**
   * Sets language for accessible texts.
   *
   * @default "nb"
   */
  lang?: "nb" | "nn" | "en";
  noChips?: boolean;
} & Omit<HTMLAttributes<UHTMLComboboxElement>, "defaultValue" | "onChange"> &
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

interface ComboboxValueProps<T extends { multiple: boolean }> {
  /**
   * Indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time.
   *
   * @default false
   */
  multiple?: T["multiple"];
  /**
   * The selected item of the Combobox.
   *
   * If `label` and `value` are the same, each item can be a `string`. Otherwise, each item must be a `ComboboxItem`.
   *
   * Using this makes the component controlled and it must be used in combination with `onSelectedChange`.
   */
  selected?: ComboboxValue<T> | null;
  /**
   * Default selected item when uncontrolled
   */
  defaultSelected?: ComboboxValue<T>;
  /**
   * Callback when selected items changes
   */
  onSelectedChange?: (
    value: T["multiple"] extends true ? ComboboxItem[] : ComboboxItem | null,
  ) => void;
}

export type ComboboxSingleProps = ComboboxBaseProps &
  ComboboxValueProps<{ multiple: false }>;

export type ComboboxMultipleProps = ComboboxBaseProps &
  ComboboxValueProps<{ multiple: true }> & { multiple: true };

export type ComboboxProps = ComboboxSingleProps | ComboboxMultipleProps;

export type ComboboxSelected =
  string | ComboboxItem | (string | ComboboxItem)[] | null;

export const Combobox = forwardRef<UHTMLComboboxElement, ComboboxProps>(
  function Combobox(
    {
      className,
      errorText,
      helpText,
      label,
      "aria-labelledby": ariaLabelledBy,
      multiple = false,
      options,
      name,
      inputProps,
      lang = "nb",
      selected,
      defaultSelected,
      onSelectedChange,
      noChips,
      ...rest
    },
    ref,
  ) {
    const comboboxRef = useRef<UHTMLComboboxElement>(null);
    const id = useId();
    const errorTextId = `${id}-error-text`;
    const helpTextId = `${id}-help-text`;
    const listId = `${id}-list`;
    const textProps = getTextProps(lang);
    const isControlled = selected !== undefined;
    const onSelectedChangeRef = useRef(onSelectedChange);
    const selectedItemsRef = useRef<ComboboxItem[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    const [defaultItems, setDefaultItems] = useState<ComboboxItem[]>(() => {
      // Priority: defaultSelected prop > selected options in options array
      const fromProp = sanitizeItems(defaultSelected);
      if (fromProp.length > 0) {
        return fromProp;
      }

      // Extract initially selected options from the options array
      const initiallySelectedFromOptions = flattenOptions(options)
        .filter((option) => option.selected)
        .map((option) => ({
          label: (option.label ?? option.value ?? "") as string,
          value: (option.value ?? "") as string,
        }));

      return initiallySelectedFromOptions;
    });

    const selectedItems = selected ? sanitizeItems(selected) : defaultItems;
    // Keep the ref updated with the latest callback
    useEffect(() => {
      selectedItemsRef.current = selectedItems;
    }, [selectedItems]);

    // Set mounted state after hydration
    useEffect(() => {
      setIsMounted(true);
    }, []);

    useEffect(() => {
      onSelectedChangeRef.current = onSelectedChange;
    }, [onSelectedChange]);

    // Combine refs
    useEffect(() => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(comboboxRef.current);
      } else {
        ref.current = comboboxRef.current;
      }
    }, [ref]);

    /**
     * Listeners and handling of adding/removing
     */
    useEffect(() => {
      const combobox = comboboxRef.current;
      const beforeChange = (event: CustomEvent<HTMLDataElement>) => {
        event.preventDefault();
        const data = event.detail;

        const nextItem = nextItems(data, selectedItemsRef.current, multiple);

        if (multiple) {
          // Multiple selection: nextItem should be ComboboxItem[]
          const callback = onSelectedChangeRef.current as
            ((value: ComboboxItem[]) => void) | undefined;
          callback?.(nextItem as ComboboxItem[]);
          if (!isControlled) setDefaultItems(nextItem as ComboboxItem[]);
        } else {
          // Single selection: nextItem should be ComboboxItem | undefined
          const callback = onSelectedChangeRef.current as
            ((value: ComboboxItem | null) => void) | undefined;
          callback?.((nextItem as ComboboxItem | undefined) ?? null);
          if (!isControlled) setDefaultItems(sanitizeItems(nextItem));
        }
      };

      combobox?.addEventListener(
        "comboboxbeforeselect",
        beforeChange as EventListener,
      );
      return () =>
        combobox?.removeEventListener(
          "comboboxbeforeselect",
          beforeChange as EventListener,
        );
    }, [isControlled, multiple]);

    return (
      <div
        className={clsx(
          "sds-form-field",
          errorText && "sds-form-field--error",
          "sds-combobox",
          noChips && "sds-combobox--no-chips",
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
            suppressHydrationWarning
            {...textProps}
            {...rest}
          >
            {selectedItems.map((item) => (
              <data
                key={item.value}
                value={item.value}
                suppressHydrationWarning
              >
                {item.label}
              </data>
            ))}
            <input
              suppressHydrationWarning
              className="sds-combobox__input"
              {...inputProps}
              id={id}
              list={listId}
              aria-labelledby={ariaLabelledBy}
            />
            <ClearButton clearText={textProps["data-sr-clear"]} />
            <ExpandButton />
            <u-datalist
              suppressHydrationWarning
              className="sds-combobox__datalist"
              id={listId}
              hidden
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
                  <Option
                    suppressHydrationWarning
                    key={`${option.value?.toString() ?? option.label?.toString()}`}
                    {...option}
                  />
                ),
              )}
            </u-datalist>
            {!!name && isMounted && (
              <select
                name={name}
                multiple={multiple}
                aria-hidden
                hidden
                suppressHydrationWarning
              />
            )}
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
  },
);

Combobox.displayName = "Combobox";
