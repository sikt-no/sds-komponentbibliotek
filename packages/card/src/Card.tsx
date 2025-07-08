import { clsx } from "clsx/lite";
import { ElementType, HTMLAttributes, ReactNode, useId } from "react";
import "./card.pcss";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  image?: ReactNode;
  overlineText?: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headingText: string;
  leadText?: string;
  children?: ReactNode;
  callToAction?: ReactNode;
  className?: string;
}

export const Card = ({
  image,
  overlineText,
  headingLevel = "h3",
  headingText,
  leadText,
  children,
  callToAction,
  className,
  ...rest
}: CardProps) => {
  const id = useId();
  const H: ElementType = headingLevel;

  return (
    <section
      className={clsx("sds-card", className)}
      aria-labelledby={id}
      {...rest}
    >
      {image && <div className="sds-card__image">{image}</div>}
      <div className="sds-card__content">
        {overlineText && (
          <span className="sds-typography-overline">{overlineText}</span>
        )}
        <H id={id} className="sds-typography-editorial-headline--xs">
          {headingText}
        </H>
        {leadText && (
          <span className="sds-typography-body--xl">{leadText}</span>
        )}
        {children && <div className="sds-typography-body">{children}</div>}
        {callToAction && <div className="sds-card__cta">{callToAction}</div>}
      </div>
    </section>
  );
};
