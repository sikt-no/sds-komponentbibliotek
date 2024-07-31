import { CaretCircleDownIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import {
  ElementType,
  HTMLAttributes,
  MouseEvent,
  ReactNode,
  useId,
  useState,
} from "react";
import "./accordion.pcss";

export interface AccordionProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
  title: string;
  children: ReactNode;
  className?: string;
  size?: "small" | "large";
  isExpanded?: boolean;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  onClick?: (e: MouseEvent, isExpanded: boolean) => void;
}

export const Accordion = ({
  title,
  children,
  className,
  isExpanded = false,
  size = "large",
  headingLevel = "h3",
  onClick,
  ...rest
}: AccordionProps) => {
  const [expanded, setExpanded] = useState(isExpanded);
  const Heading: ElementType = headingLevel;
  const id = useId();

  return (
    <section
      className={clsx("sds-accordion", `sds-accordion--${size}`, className)}
      {...rest}
    >
      <Heading>
        <button
          id={`${id}-title`}
          aria-expanded={expanded}
          aria-controls={`${id}-content`}
          className="sds-accordion__button"
          onClick={(e) => {
            const newValue = !expanded;
            setExpanded(newValue);
            if (onClick) {
              onClick(e, newValue);
            }
          }}
        >
          <span className="sds-accordion__title">{title}</span>
          <span className="sds-accordion__icon">
            <CaretCircleDownIcon
              className={clsx(
                "sds-accordion__icon-icon",
                expanded && "sds-accordion__icon-icon--expanded",
              )}
            />
          </span>
        </button>
      </Heading>

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
