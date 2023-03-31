import React, { HTMLAttributes, ReactNode, useState, useId } from "react";
import { CaretCircleDownIcon, CaretCircleUpIcon } from "@sikt/sds-icons";
import clsx from "clsx";
import "./accordion.pcss";

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;
  className?: string;
  size?: "small" | "large";
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Accordion = ({
  title,
  children,
  className,
  size = "large",
  headingLevel = "h3",
  ...rest
}: AccordionProps) => {
  const [expanded, setExpanded] = useState(false);
  const Heading: React.ElementType = `${headingLevel}`;
  const id = useId();

  return (
    <section
      className={clsx("sds-accordion", `sds-accordion--${size}`, className)}
      {...rest}
    >
      <button
        id={`${id}-title`}
        aria-expanded={expanded}
        aria-controls={`${id}-content`}
        className="sds-accordion__button"
        onClick={() => setExpanded(!expanded)}
      >
        <Heading className="sds-accordion__title">{title}</Heading>
        {expanded ? <CaretCircleUpIcon /> : <CaretCircleDownIcon />}
      </button>

      <div
        role="region"
        id={`${id}-content`}
        aria-labelledby={`${id}-title`}
        className="sds-accordion__content"
        hidden={!expanded}
      >
        {children}
      </div>
    </section>
  );
};
