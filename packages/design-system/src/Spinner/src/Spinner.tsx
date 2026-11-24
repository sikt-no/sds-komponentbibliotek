import { type IconProps, SpinnerGapIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import "./spinner.css";

export type SpinnerProps = IconProps;

export const Spinner = ({ className, ...rest }: SpinnerProps) => (
  <SpinnerGapIcon className={clsx("sd3-spinner", className)} {...rest} />
);
Spinner.displayName = "Spinner";
