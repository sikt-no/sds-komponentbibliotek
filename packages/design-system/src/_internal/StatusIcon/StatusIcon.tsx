import { FeedbackIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import type { HTMLAttributes, ReactNode } from "react";
import type { SizeDensity } from "../../../types";
import {
  AlertFilledDuo,
  FailedFilledDuo,
  InfoFilledDuo,
  SuccessFilledDuo,
} from "./StatusGlyphs";
import "./status-icon.css";

export type StatusIconVariant =
  "success" | "critical" | "warning" | "info" | "neutral";

export interface StatusIconProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children"
> {
  variant: StatusIconVariant;
  size?: SizeDensity;
}

const VARIANT_ICON: Record<StatusIconVariant, ReactNode> = {
  success: <SuccessFilledDuo />,
  critical: <FailedFilledDuo />,
  warning: <AlertFilledDuo />,
  info: <InfoFilledDuo />,
  neutral: <FeedbackIcon />,
};

export const StatusIcon = ({
  variant,
  size = "standard",
  className,
  ...rest
}: StatusIconProps) => (
  <span
    {...rest}
    className={clsx("sd3-status-icon", className)}
    data-variant={variant}
    data-size={size}
  >
    {variant === "neutral" ? (
      <span data-part="badge">
        <span data-part="glyph">{VARIANT_ICON[variant]}</span>
      </span>
    ) : (
      VARIANT_ICON[variant]
    )}
  </span>
);
StatusIcon.displayName = "StatusIcon";
