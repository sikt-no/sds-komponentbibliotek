import React, {
  ChangeEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  useCallback,
  useId,
} from "react";
import clsx from "clsx";
import {
  EnvelopeIcon,
  MagnifyingGlassIcon,
  PasswordIcon,
  PhoneIcon,
  WarningIcon,
} from "@sikt/sds-icons";
import "./input.pcss";

type InputTypes =
  | "email"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "url";

interface InputTypesProp {
  type: InputTypes;
}

export interface InputProps
  extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  className?: string;
  label: string;
  placeholder?: string;
  onChange?: (newValue: string, event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  errorText?: string;
  helpText?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const Input = ({
  className,
  label,
  placeholder,
  onChange,
  value,
  icon,
  iconPosition = "start",
  type,
  errorText,
  helpText,
  inputProps,
  ...rest
}: InputProps & InputTypesProp) => {
  const id = useId();
  const changeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value, event);
    },
    [onChange]
  );

  return (
    <div
      className={clsx(
        "sds-input",
        `sds-input--${type}`,
        errorText ? `sds-input--error` : null,
        className
      )}
      {...rest}
    >
      <label className="sds-input__label" htmlFor={id}>
        <div className="sds-input__label-text">
          {errorText && <WarningIcon className="sds-input__label-error-icon" />}{" "}
          {label}
        </div>
        <div className="sds-input__wrapper">
          {iconPosition === "start" && icon && (
            <div className="sds-input__icon sds-input__icon--start">{icon}</div>
          )}
          <input
            className="sds-input__input"
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={onChange && changeHandler}
            value={value}
            aria-describedby={`${id}-help-text`}
            aria-invalid={Boolean(errorText)}
            aria-errormessage={errorText && `${id}-help-text`}
            {...inputProps}
          />
          {iconPosition === "end" && icon && (
            <div className="sds-input__icon sds-input__icon--end">{icon}</div>
          )}
        </div>
      </label>
      {(errorText ?? helpText) && (
        <div className="sds-input__help-text" id={`${id}-help-text`}>
          {errorText ?? helpText}
        </div>
      )}
    </div>
  );
};

export const TextInput = (props: InputProps) => (
  <Input type="text" {...props} />
);
export const NumberInput = (props: InputProps) => (
  <Input type="number" {...props} />
);
export const EmailInput = (props: InputProps) => (
  <Input type="email" icon={<EnvelopeIcon />} {...props} />
);
export const PasswordInput = (props: InputProps) => (
  <Input type="password" icon={<PasswordIcon />} {...props} />
);
export const TelInput = (props: InputProps) => (
  <Input type="tel" icon={<PhoneIcon />} {...props} />
);
export const SearchInput = (props: InputProps) => (
  <Input
    type="search"
    icon={<MagnifyingGlassIcon />}
    iconPosition="end"
    {...props}
  />
);
