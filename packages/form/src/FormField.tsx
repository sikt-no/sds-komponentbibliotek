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
  helpText?: ReactNode;
  /**
   * ID of the form element inside children.
   */
  htmlFor: string;
  /**
   * ID for help text and error text element, needs to be set if either of those is.
   */
  helpTextId?: string;
}

export const FormField = ({
  className,
  label,
  errorText,
  helpText,
  htmlFor,
  helpTextId,
  children,
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
      {(errorText ?? helpText) && (
        <HelpText id={helpTextId} error={Boolean(errorText)}>
          {errorText ?? helpText}
        </HelpText>
      )}
    </div>
  );
};
