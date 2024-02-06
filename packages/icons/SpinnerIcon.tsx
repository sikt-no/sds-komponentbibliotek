import clsx from "clsx";
import { SpinnerGapIcon, IconProps } from "./build/index";

export const SpinnerIcon = ({ className, ...rest }: IconProps) => (
  <SpinnerGapIcon
    className={clsx("sds-icon sds-icon--spinner", className)}
    {...rest}
  />
);
