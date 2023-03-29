import React, { HTMLAttributes, ReactNode, ElementType } from "react";
import clsx from "clsx";
import { ArrowCircleRightIcon } from "@sikt/sds-icons";
import "./section.pcss";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headingText: string;
  linkHref?: string;
  linkLabel?: string;
  children?: ReactNode;
  className?: string;
}

export const Section = ({
  headingLevel = "h2",
  headingText,
  linkHref,
  linkLabel,
  children,
  className,
  ...rest
}: SectionProps) => {
  const H: ElementType = `${headingLevel}`;

  return (
    <section className={clsx("sds-section", className)} {...rest}>
      <header className="sds-section__header">
        <H className="sds-typography-heading--medium sds-section__heading">
          {headingText}
        </H>
        {linkLabel && linkHref && (
          /* TODO: replace with ButtonLink component when available #88 */
          <a
            href={linkHref}
            className="sds-section__link sds-typography-body--large"
          >
            {linkLabel}
            <ArrowCircleRightIcon className="sds-section__icon" />
          </a>
        )}
      </header>

      {children}
    </section>
  );
};
