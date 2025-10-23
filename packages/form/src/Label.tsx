import { clsx } from "clsx/lite";
import { LabelHTMLAttributes, ReactNode } from "react";
import "./label.pcss";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  text: NonNullable<ReactNode>;
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
        "sds-form__label",
        error && "sds-form__label--error",
        className,
      )}
      {...rest}
    >
      <span className="sds-form__label-text">{text}</span>
      {children}
    </label>
  );
};
Label.displayName = "Label";
