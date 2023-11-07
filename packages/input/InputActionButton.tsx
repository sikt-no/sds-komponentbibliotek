import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { Button } from "@sikt/sds-button";

export interface InputActionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ReactNode;
  error?: boolean;
}

export const InputActionButton = ({
  className,
  label,
  icon,
  error = false,
  ...rest
}: InputActionButtonProps) => {
  return (
    <Button
      variant={error ? "critical" : "transparent"}
      size="small"
      className={clsx("sds-input-action", className)}
      aria-label={label}
      icon={icon}
      iconVariant="only"
      {...rest}
    />
  );
};
