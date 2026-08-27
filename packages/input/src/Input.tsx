import { Button, ButtonProps } from "@sikt/sds-button";
import { FormField } from "@sikt/sds-form";
import { useFormFieldIds } from "@sikt/sds-hooks";
import {
  EmailIcon,
  SearchIcon,
  PasswordIcon,
  PhoneIcon,
  CloseIcon,
} from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useCallback,
} from "react";
import "./input.css";

interface InputBaseProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "aria-label" | "aria-labelledby"
> {
  className?: string;
  placeholder?: string;
  /**
   * Called when the input value changes. Receives the native event and the new
   * string value as a second argument — use the second argument rather than
   * reading `event.target.value`.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>, newValue: string) => void;
  value?: string;
  /**
   * Icon element displayed inside the input field, before the text.
   * Use an icon from `@sikt/sds-icons`. The specialized variants
   * (`EmailInput`, `PasswordInput`, `TelInput`) pre-wire the appropriate icon.
   */
  icon?: ReactNode;
  /**
   * Props for the clear button shown in `SearchInput` when the field has a value.
   * At minimum supply `aria-label` with a localized "Clear" string.
   */
  clearActionProps?: Pick<ButtonProps, "onClick" | "aria-label" | "type">;
  /**
   * Props for the action button shown in `SearchInput` (the search submit button).
   * At minimum supply `aria-label` with a localized "Search" string.
   */
  actionProps?: Pick<ButtonProps, "onClick" | "aria-label" | "type">;
  /**
   * Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` &  `aria-errormessage`.
   */
  errorText?: ReactNode;
  /**
   * Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.
   */
  helpText?: ReactNode;
}

export type InputProps = InputBaseProps &
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

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      "aria-labelledby": ariaLabelledBy,
      placeholder,
      onChange,
      value,
      icon,
      clearActionProps,
      actionProps,
      type,
      errorText,
      helpText,
      ...rest
    },
    ref,
  ) => {
    const { id, errorTextId, helpTextId, ariaDescribedBy, ariaErrorMessage } =
      useFormFieldIds({ errorText, helpText });
    const changeHandler = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event, event.target.value);
      },
      [onChange],
    );

    const handleClearClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (clearActionProps?.onClick) {
        clearActionProps.onClick(event);
      }

      if (ref && "current" in ref && ref.current) {
        ref.current.value = "";
        ref.current.focus();
      }
    };

    const postLabelSlot = type === "search" && (
      <>
        {value && (
          <Button
            size="small"
            variant="transparent"
            iconVariant="only"
            className="sds-input__clear"
            onClick={handleClearClick}
            icon={<CloseIcon />}
            aria-label={clearActionProps?.["aria-label"] ?? "Tøm søketekst"}
            type={clearActionProps?.type ?? "button"}
          />
        )}

        <Button
          variant={errorText ? "critical" : "transparent"}
          iconVariant="only"
          className="sds-input__action"
          size="small"
          aria-label={actionProps?.["aria-label"] ?? "Søk"}
          icon={<SearchIcon />}
          type={actionProps?.type ?? "button"}
          {...actionProps}
        />
      </>
    );

    return (
      <FormField
        className={clsx(
          "sds-input",
          `sds-input--${type}`,
          errorText && `sds-input--error`,
          className,
        )}
        label={label}
        errorText={errorText}
        errorTextId={errorTextId}
        helpText={helpText}
        helpTextId={helpTextId}
        htmlFor={id}
        postLabelSlot={postLabelSlot}
      >
        <span className="sds-input__wrapper">
          {icon && <span className="sds-input__icon">{icon}</span>}
          <input
            ref={ref}
            className="sds-input__input"
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={onChange && changeHandler}
            onWheel={(e) => {
              e.currentTarget.blur();
            }}
            value={value}
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
            aria-invalid={Boolean(errorText)}
            aria-errormessage={ariaErrorMessage}
            {...rest}
          />
        </span>
      </FormField>
    );
  },
);
Input.displayName = "Input";

const TextInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input type="text" ref={ref} {...props} />
));
TextInput.displayName = "TextInput";

const NumberInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input type="number" ref={ref} {...props} />
));
NumberInput.displayName = "NumberInput";

const EmailInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input type="email" icon={<EmailIcon />} ref={ref} {...props} />
));
EmailInput.displayName = "EmailInput";

const PasswordInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input type="password" icon={<PasswordIcon />} ref={ref} {...props} />
));
PasswordInput.displayName = "PasswordInput";

const TelInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input type="tel" icon={<PhoneIcon />} ref={ref} {...props} />
));
TelInput.displayName = "TelInput";

const SearchInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input type="search" ref={ref} {...props} />
));
SearchInput.displayName = "SearchInput";

export {
  TextInput,
  NumberInput,
  EmailInput,
  PasswordInput,
  TelInput,
  SearchInput,
};
