import { clsx } from "clsx/lite";
import { HTMLAttributes, ReactNode } from "react";
import { HelpText } from "./HelpText";
import { Label } from "./Label";
import "./form-field.pcss";

export interface FormFieldProps
  extends Omit<HTMLAttributes<HTMLLabelElement>, "onChange"> {
  className?: string;
  /**
   * A label is required, but undefined is allowed for use when a label is provided via `aria-labelledby`.
   */
  label: NonNullable<ReactNode> | undefined;
  errorText?: ReactNode;
  /**
   * ID for error text element, needs to be set if there is an error text.
   */
  errorTextId?: string;
  helpText?: ReactNode;
  /**
   * ID for help text element, needs to be set if there is a help text.
   */
  helpTextId?: string;
  /**
   * ID of the form element inside children.
   */
  htmlFor: string;
  postLabelSlot?: ReactNode;
}

export const FormField = ({
  className,
  label,
  errorText,
  errorTextId,
  helpText,
  helpTextId,
  htmlFor,
  children,
  postLabelSlot,
  ...rest
}: FormFieldProps) => {
  return (
    <div
      className={clsx(
        "sds-form-field",
        errorText && "sds-form-field--error",
        className,
      )}
    >
      <div className="sds-form-field__label-wrapper">
        {label !== undefined ? (
          <Label
            text={label}
            error={Boolean(errorText)}
            htmlFor={htmlFor}
            {...rest}
          >
            {children}
          </Label>
        ) : (
          children
        )}
        {postLabelSlot && (
          <div className="sds-form-field__label-after">{postLabelSlot}</div>
        )}
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
FormField.displayName = "FormField";
