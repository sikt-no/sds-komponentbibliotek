import { CollapseHideIcon, ExpandShowIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import { DetailsHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { SizeDensity } from "../../../types";
import "./details.css";

export interface DetailsProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  /**
   * Must contain exactly one `Details.Summary` (first child) and one
   * `Details.Content`.
   */
  children: ReactNode;
  /**
   * Trigger row density.
   *
   * - `standard` (default): 48px row height, 8px vertical padding.
   * - `compact`: 40px row height, 4px vertical padding.
   *
   * Typography and icon size are unchanged between sizes.
   *
   * @default "standard"
   */
  size?: SizeDensity;
  /**
   * Groups multiple `Details` under a shared name so that only one can be
   * open at a time (native HTML accordion via the `name` attribute). All
   * grouped instances must share the same value.
   *
   * @default undefined
   */
  name?: string;
}

export interface DetailsSummaryProps extends HTMLAttributes<HTMLElement> {
  /**
   * Trigger label. Plain text or inline formatting only — nesting
   * interactive elements (`<button>`, `<a>`) or heading tags is not
   * supported and breaks native activation and screen-reader outlines.
   */
  children: ReactNode;
}

export interface DetailsContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Any content revealed when the disclosure is open.
   */
  children: ReactNode;
}

const iconClosed = <ExpandShowIcon data-part="icon-closed" />;
const iconOpen = <CollapseHideIcon data-part="icon-open" />;

const DetailsSummary = ({
  className,
  children,
  ...rest
}: DetailsSummaryProps) => (
  <summary data-part="summary" className={className} {...rest}>
    {iconClosed}
    {iconOpen}
    <span data-part="label">{children}</span>
  </summary>
);

DetailsSummary.displayName = "Details.Summary";

const DetailsContent = ({
  className,
  children,
  ...rest
}: DetailsContentProps) => (
  <div data-part="content" className={className} {...rest}>
    {children}
  </div>
);

DetailsContent.displayName = "Details.Content";

const DetailsRoot = ({
  className,
  size = "standard",
  children,
  ...rest
}: DetailsProps) => (
  <details
    className={clsx("sd3-details", className)}
    data-size={size}
    {...rest}
  >
    {children}
  </details>
);

DetailsRoot.displayName = "Details";

export const Details = Object.assign(DetailsRoot, {
  Summary: DetailsSummary,
  Content: DetailsContent,
});
