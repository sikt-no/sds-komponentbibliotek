import React, { LabelHTMLAttributes } from "react";
import clsx from "clsx";
import { WarningIcon } from "@sikt/sds-icons";
import "./label.pcss";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  text: string;
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
        className
      )}
      {...rest}
    >
      <div className="sds-form-field__label-text">
        {error && <WarningIcon className="sds-form-field__label-error-icon" />}{" "}
        {text}
      </div>
      {children}
    </label>
  );
};
