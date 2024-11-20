import { Button, ButtonProps } from "@sikt/sds-button";
import { FormField } from "@sikt/sds-form";
import {
  EnvelopeIcon,
  MagnifyingGlassIcon,
  PasswordIcon,
  PhoneIcon,
  XIcon,
} from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useCallback,
  useId,
} from "react";
import "./input.pcss";

interface InputBaseProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "aria-label" | "aria-labelledby"
  > {
  className?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, newValue: string) => void;
  value?: string;
  icon?: ReactNode;
  clearActionProps?: Pick<ButtonProps, "onClick" | "aria-label" | "type">;
  actionProps?: Pick<ButtonProps, "onClick" | "aria-label" | "type">;
  errorText?: ReactNode;
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
        "aria-labelledby": string;
      }
  );

const Input = forwardRef<HTMLInputElement, InputProps>(
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
    const id = useId();
    const changeHandler = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event, event.target.value);
      },
      [onChange],
    );
    const helpTextId = `${id}-help-text`;

    const handleClearClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (clearActionProps?.onClick) {
        clearActionProps.onClick(event);
      }

      if (ref && "current" in ref && ref.current) {
        ref.current.value = "";
        ref.current.focus();
      }
    };

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
          <input
            ref={ref}
            className="sds-input__input"
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={onChange && changeHandler}
            value={value}
            aria-labelledby={ariaLabelledBy}
            aria-describedby={(errorText ?? helpText) ? helpTextId : undefined}
            aria-invalid={Boolean(errorText)}
            aria-errormessage={errorText ? helpTextId : undefined}
            {...rest}
          />

          {type === "search" && value && (
            <Button
              size="small"
              variant="transparent"
              iconVariant="only"
              className="sds-input__clear"
              onClick={handleClearClick}
              icon={<XIcon />}
              aria-label={clearActionProps?.["aria-label"] ?? "Tøm søketekst"}
              type={clearActionProps?.type ?? "button"}
            />
          )}

          {type === "search" && (
            <Button
              variant={errorText ? "critical" : "transparent"}
              iconVariant="only"
              className="sds-input__action"
              size="small"
              aria-label={actionProps?.["aria-label"] ?? "Søk"}
              icon={<MagnifyingGlassIcon />}
              type={actionProps?.type ?? "button"}
              {...actionProps}
            />
          )}
        </div>
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
  <Input type="email" icon={<EnvelopeIcon />} ref={ref} {...props} />
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
