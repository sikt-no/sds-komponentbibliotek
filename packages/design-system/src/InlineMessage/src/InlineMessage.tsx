import {
  AlertFilledIcon,
  FailedFilledIcon,
  InfoFilledIcon,
  SuccessFilledIcon,
} from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import type { HTMLAttributes, ReactNode } from "react";
import type { Variant } from "../../../types";
import "./inline-message.css";

export type InlineMessageVariant = Extract<
  Variant,
  "critical" | "warning" | "success" | "info"
>;

const iconForVariant: Record<InlineMessageVariant, ReactNode> = {
  critical: <FailedFilledIcon />,
  warning: <AlertFilledIcon />,
  success: <SuccessFilledIcon />,
  info: <InfoFilledIcon />,
};

export interface InlineMessageProps extends HTMLAttributes<HTMLDivElement> {
  /** Semantic status. Determines the icon and color. */
  variant?: InlineMessageVariant;
  /** Message text. */
  children: ReactNode;
}

export const InlineMessage = ({
  variant = "critical",
  className,
  children,
  ...rest
}: InlineMessageProps) => (
  <div
    className={clsx("sd3-inline-message", className)}
    data-variant={variant}
    {...rest}
  >
    <span data-part="icon">{iconForVariant[variant]}</span>
    {children}
  </div>
);
InlineMessage.displayName = "InlineMessage";
