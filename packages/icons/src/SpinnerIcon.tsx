import { clsx } from "clsx/lite";
import { IconProps, SpinnerGapIcon } from "../build/index";

/**
 * @deprecated Use `Spinner` from `@sikt/sd3-design-system` instead. Will be removed in a future release.
 */
export const SpinnerIcon = ({ className, ...rest }: IconProps) => (
  <SpinnerGapIcon
    className={clsx("sds-icon sds-icon--spinner", className)}
    {...rest}
  />
);
SpinnerIcon.displayName = "SpinnerIcon";
