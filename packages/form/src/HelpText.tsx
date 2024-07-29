import { HTMLAttributes } from "react";
import clsx from "clsx";
import "./help-text.pcss";

export interface HelpTextProps extends HTMLAttributes<HTMLDivElement> {
  error?: boolean;
}

export const HelpText = ({ className, error, ...rest }: HelpTextProps) => {
  return (
    <div
      className={clsx(
        "sds-form-field__help-text",
        error && "sds-form-field__help-text--error",
        className,
      )}
      {...rest}
    />
  );
};
