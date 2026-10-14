import { AddCircleIcon, FailedIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import type { ButtonHTMLAttributes } from "react";
import type { SizeDensity } from "../../../types";
import "./chip.css";

export interface FilterChipProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> {
  size?: SizeDensity;
  pressed?: boolean;
}

const addIcon = <AddCircleIcon />;
const removeIcon = <FailedIcon />;

export const FilterChip = ({
  size = "standard",
  pressed = false,
  className,
  children,
  ...rest
}: FilterChipProps) => (
  <button
    aria-pressed={pressed}
    className={clsx("sd3-chip", className)}
    data-chip="filter"
    data-size={size}
    type="button"
    {...rest}
  >
    <span data-part="label">{children}</span>
    <span data-part="icon">{pressed ? removeIcon : addIcon}</span>
  </button>
);
