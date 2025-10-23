import { clsx } from "clsx/lite";
import { IconProps, LinkedInIcon } from "../build/index";

export interface LogoIconsProps extends IconProps {
  className?: string;
  color?: "black" | "white";
}

export const LinkedInLogo = ({ color, className, ...rest }: LogoIconsProps) => (
  <LinkedInIcon
    className={clsx(
      "sds-icon",
      "sds-icon-logo",
      color && `sds-icon-logo--color-${color}`,
      className,
    )}
    {...rest}
  />
);
LinkedInLogo.displayName = "LinkedInLogo";
