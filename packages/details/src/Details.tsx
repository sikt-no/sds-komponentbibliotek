import { CaretCircleDownIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import { HTMLAttributes, ReactNode } from "react";
import "./details.pcss";

export interface DetailsProps extends HTMLAttributes<HTMLDetailsElement> {
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
        {summary}
        <div>
          <CaretCircleDownIcon className="sds-details__icon" />
        </div>
      </summary>
      <div className="sds-details__content">{children}</div>
    </details>
  );
};
