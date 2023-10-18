import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { Button } from "@sikt/sds-button";
import "./input-action-button.pcss";

export interface InputActionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ReactNode;
  errorText?: string;
}

export const InputActionButton = ({
  className,
  label,
  icon,
  errorText,
  ...rest
}: InputActionButtonProps) => {
  return (
    <Button
      variant={errorText ? "critical" : "transparent"}
      size="small"
      className={clsx("sds-input-action", className)}
      aria-label={label}
      title={label}
      icon={icon}
      iconVariant="only"
      {...rest}
    />
  );
};
