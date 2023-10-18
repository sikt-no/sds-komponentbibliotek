import React, {
  HTMLAttributes,
  ReactNode,
  ElementType,
  forwardRef,
} from "react";
import clsx from "clsx";
import { ButtonLink } from "@sikt/sds-button";
import { ArrowCircleRightIcon } from "@sikt/sds-icons";
import "./section.pcss";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headingText: string;
  linkHref?: string;
  linkLabel?: string;
  children?: ReactNode;
  className?: string;
}

export const Section = forwardRef<HTMLAnchorElement, SectionProps>(
  (
    {
      level = "h2",
      headingText,
      linkHref,
      linkLabel,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const H: ElementType = `${level}`;

    return (
      <section className={clsx("sds-section", className)} {...rest}>
        <header className="sds-section__header">
          <H className="sds-typography-heading--medium sds-section__heading">
            {headingText}
          </H>
          {linkLabel && linkHref && (
            <div className="sds-section__link">
              <ButtonLink
                ref={ref}
                variant="subtle"
                href={linkHref}
                icon={<ArrowCircleRightIcon />}
              >
                {linkLabel}
              </ButtonLink>
            </div>
          )}
        </header>

        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
