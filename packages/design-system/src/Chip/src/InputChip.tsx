import { CloseIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import type { ButtonHTMLAttributes } from "react";
import type { SizeDensity } from "../../../types";
import "./chip.css";

export interface InputChipProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> {
  size?: SizeDensity;
}

const closeIcon = <CloseIcon />;

export const InputChip = ({
  size = "standard",
  className,
  children,
  ...rest
}: InputChipProps) => (
  <button
    className={clsx("sd3-chip", className)}
    data-chip="input"
    data-size={size}
    type="button"
    {...rest}
  >
    <span data-part="label">{children}</span>
    <span data-part="icon">{closeIcon}</span>
  </button>
);
