import { ExpandShowAltIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import { DetailsHTMLAttributes, ReactNode } from "react";
import "./details.pcss";

export interface DetailsProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  className?: string;
  children: ReactNode;
  size?: "small" | "large";
  /**
   * Label for the disclosure widget and it's contents (`{children}`).
   */
  summary: ReactNode;
  /**
   * Enables multiple `<details>` elements to be connected, with only one open at a time. Creating an accordion by setting the same `name` attribute to group them.
   *
   * @default undefined
   */
  name?: string;
}

export const Details = ({
  className,
  children,
  size = "large",
  summary,
  name,
  ...rest
}: DetailsProps) => {
  return (
    <details
      className={clsx("sds-details", `sds-details--${size}`, className)}
      name={name}
      {...rest}
    >
      <summary className="sds-details__summary">
        <span className="sds-details__icon">
          <ExpandShowAltIcon />
        </span>
        {summary}
      </summary>
      <div className="sds-details__content">{children}</div>
    </details>
  );
};
Details.displayName = "Details";
