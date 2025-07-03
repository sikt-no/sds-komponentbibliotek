import { ExpandShowAltIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import { DetailsHTMLAttributes, ReactNode } from "react";
import "./details.pcss";

export interface DetailsProps
  extends DetailsHTMLAttributes<HTMLDetailsElement> {
  className?: string;
  children: ReactNode;
  size?: "small" | "large";
  summary: ReactNode;
}

export const Details = ({
  className,
  children,
  size = "large",
  summary,
  ...rest
}: DetailsProps) => {
  return (
    <details
      className={clsx("sds-details", `sds-details--${size}`, className)}
      {...rest}
    >
      <summary className="sds-details__summary">
        <span>
          <ExpandShowAltIcon className="sds-details__icon" />
        </span>
        {summary}
      </summary>
      <div className="sds-details__content">{children}</div>
    </details>
  );
};
