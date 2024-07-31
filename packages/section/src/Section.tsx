import clsx from "clsx";
import { ElementType, HTMLAttributes, ReactNode } from "react";
import "./section.pcss";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headingText: string;
  children?: ReactNode;
  className?: string;
  callToAction?: ReactNode;
}

export const Section = ({
  headingLevel = "h2",
  headingText,
  children,
  className,
  callToAction,
  ...rest
}: SectionProps) => {
  const H: ElementType = headingLevel;

  return (
    <section className={clsx("sds-section", className)} {...rest}>
      <header className="sds-section__header">
        <H className="sds-section__heading sds-typography-heading--medium">
          {headingText}
        </H>
        {callToAction && <div className="sds-section__cta">{callToAction}</div>}
      </header>

      {children && <div className="sds-section__content">{children}</div>}
    </section>
  );
};
