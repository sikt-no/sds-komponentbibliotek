import { AlertIcon, FailedIcon, InfoIcon, SuccessIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import type { HTMLAttributes, ReactNode } from "react";
import type { SizeDensity, Variant } from "../../../types";
import "./tag-status.css";

export type TagStatusVariant = Extract<
  Variant,
  "success" | "info" | "warning" | "critical"
>;

const iconForVariant: Record<TagStatusVariant, ReactNode> = {
  success: <SuccessIcon />,
  info: <InfoIcon />,
  warning: <AlertIcon />,
  critical: <FailedIcon />,
};

export interface TagStatusProps extends HTMLAttributes<HTMLSpanElement> {
  /** Semantic status. Determines the palette and locked icon. */
  variant: TagStatusVariant;
  /** Visual emphasis: `subtle` (tinted) or `strong` (filled). */
  visibility?: "strong" | "subtle";
  /** Size: `standard` or `compact` */
  size?: SizeDensity;
  /** Tag content */
  children: ReactNode;
}

export const TagStatus = ({
  variant,
  visibility = "subtle",
  size = "standard",
  className,
  children,
  ...rest
}: TagStatusProps) => (
  <span
    className={clsx("sd3-tag-status", className)}
    data-variant={variant}
    data-visibility={visibility}
    data-size={size}
    {...rest}
  >
    <span data-part="icon">{iconForVariant[variant]}</span>
    {children}
  </span>
);
TagStatus.displayName = "TagStatus";
