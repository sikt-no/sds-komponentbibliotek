import { LabelHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import "./label.pcss";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  text: ReactNode;
  error?: boolean;
}

export const Label = ({
  className,
  text,
  error,
  children,
  ...rest
}: LabelProps) => {
  return (
    <label
      className={clsx(
        "sds-form-field__label",
        error && "sds-form-field__label--error",
        className,
      )}
      {...rest}
    >
      <div className="sds-form-field__label-text">{text}</div>
      {children}
    </label>
  );
};
