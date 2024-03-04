import {
  ChangeEvent,
  ForwardedRef,
  ReactNode,
  forwardRef,
  useCallback,
  useId,
  InputHTMLAttributes,
} from "react";
import clsx from "clsx";
import {
  EnvelopeIcon,
  MagnifyingGlassIcon,
  PasswordIcon,
  PhoneIcon,
} from "@sikt/sds-icons";
import { FormField } from "@sikt/sds-form";
import { InputActionButton, InputActionButtonProps } from "./InputActionButton";
import "./input.pcss";

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    "onChange"
  > {
  className?: string;
  label: ReactNode;
  placeholder?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue: string,
  ) => void;
  value?: string;
  icon?: ReactNode;
  actionProps?: Omit<InputActionButtonProps, "icon">;
  errorText?: ReactNode;
  helpText?: ReactNode;
  rows?: number;
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      className,
      label,
      placeholder,
      onChange,
      value,
      icon,
      actionProps,
      type,
      errorText,
      helpText,
      rows,
      ...rest
    },
    ref,
  ) => {
    const id = useId();
    const changeHandler = useCallback(
      (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange?.(event, event.target.value);
      },
      [onChange],
    );
    const helpTextId = `${id}-help-text`;

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
        helpText={helpText}
        htmlFor={id}
        helpTextId={helpTextId}
      >
        <div className="sds-input__wrapper">
          {icon && <div className="sds-input__icon">{icon}</div>}
          {type === "textarea" ? (
            <textarea
              ref={ref as ForwardedRef<HTMLTextAreaElement>}
              className="sds-input__input"
              id={id}
              placeholder={placeholder}
              onChange={onChange && changeHandler}
              value={value}
              aria-describedby={helpTextId}
              aria-invalid={Boolean(errorText)}
              aria-errormessage={errorText ? helpTextId : undefined}
              rows={rows}
              {...rest}
            />
          ) : (
            <input
              ref={ref as ForwardedRef<HTMLInputElement>}
              className="sds-input__input"
              id={id}
              type={type}
              placeholder={placeholder}
              onChange={onChange && changeHandler}
              value={value}
              aria-describedby={helpTextId}
              aria-invalid={Boolean(errorText)}
              aria-errormessage={errorText ? helpTextId : undefined}
              {...rest}
            />
          )}
          {type === "search" && (
            <InputActionButton
              type="submit"
              className="sds-input__action"
              label="Søk"
              icon={<MagnifyingGlassIcon />}
              error={Boolean(errorText)}
              {...actionProps}
            />
          )}
        </div>
      </FormField>
    );
  },
);

Input.displayName = "Input";

export const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  (props, ref) => <Input type="textarea" ref={ref} {...props} />,
);
TextArea.displayName = "TextArea";
export const TextInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => <Input type="text" ref={ref} {...props} />,
);
TextInput.displayName = "TextInput";
export const NumberInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => <Input type="number" ref={ref} {...props} />,
);
NumberInput.displayName = "NumberInput";
export const EmailInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => (
    <Input type="email" icon={<EnvelopeIcon />} ref={ref} {...props} />
  ),
);
EmailInput.displayName = "EmailInput";
export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => (
    <Input type="password" icon={<PasswordIcon />} ref={ref} {...props} />
  ),
);
PasswordInput.displayName = "PasswordInput";
export const TelInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => (
    <Input type="tel" icon={<PhoneIcon />} ref={ref} {...props} />
  ),
);
TelInput.displayName = "TelInput";
export const SearchInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => <Input type="search" ref={ref} {...props} />,
);
SearchInput.displayName = "SearchInput";
