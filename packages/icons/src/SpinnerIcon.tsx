import clsx from "clsx";
import { IconProps, SpinnerGapIcon } from "../build/index";

export const SpinnerIcon = ({ className, ...rest }: IconProps) => (
  <SpinnerGapIcon
    className={clsx("sds-icon sds-icon--spinner", className)}
    {...rest}
  />
);
