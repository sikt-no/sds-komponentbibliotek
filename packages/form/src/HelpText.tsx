import { clsx } from "clsx/lite";
import { HTMLAttributes } from "react";
import "./help-text.pcss";

export interface HelpTextProps extends HTMLAttributes<HTMLDivElement> {
  error?: boolean;
}

export const HelpText = ({ className, error, ...rest }: HelpTextProps) => {
  return (
    <div
      className={clsx(
        "sds-form__help-text",
        error && "sds-form__help-text--error",
        className,
      )}
      {...rest}
    />
  );
};
