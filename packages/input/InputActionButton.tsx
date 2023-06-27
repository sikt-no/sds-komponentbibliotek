import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { TertiaryButton } from "@sikt/sds-button";
import "./input-action-button.pcss";

export interface InputActionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ReactNode;
}

export const InputActionButton = ({
  className,
  label,
  icon,
  ...rest
}: InputActionButtonProps) => (
  <TertiaryButton
    type="button"
    className={clsx("sds-input-action", className)}
    aria-label={label}
    title={label}
    icon={icon}
    iconType="only"
    {...rest}
  />
);
