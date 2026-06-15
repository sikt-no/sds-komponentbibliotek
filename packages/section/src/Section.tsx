import { clsx } from "clsx/lite";
import { ElementType, HTMLAttributes, ReactNode, useId } from "react";
import "./section.css";

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
  const id = useId();
  const H: ElementType = headingLevel;

  return (
    <section
      className={clsx("sds-section", className)}
      aria-labelledby={id}
      {...rest}
    >
      <header className="sds-section__header">
        <H
          id={id}
          className="sds-section__heading sds-typography-editorial-headline--s"
        >
          {headingText}
        </H>
        {callToAction && <div className="sds-section__cta">{callToAction}</div>}
      </header>

      {children && <div className="sds-section__content">{children}</div>}
    </section>
  );
};
Section.displayName = "Section";
