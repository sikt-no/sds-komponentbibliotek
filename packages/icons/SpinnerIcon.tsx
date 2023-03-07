import clsx from "clsx";
import React from "react";
import { Icon, IconProps } from "./Icon";

export type SpinnerIconProps = Omit<IconProps, "icon">;

export const SpinnerIcon = ({ className, ...rest }: SpinnerIconProps) => (
  <Icon
    icon="spinner-gap"
    className={clsx("sds-icon--spinner", className)}
    {...rest}
  />
);
