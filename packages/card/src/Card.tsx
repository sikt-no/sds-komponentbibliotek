import { ElementType, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
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
  const H: ElementType = headingLevel;

  return (
    <section className={clsx("sds-card", className)} {...rest}>
      {image && <div className="sds-card__image">{image}</div>}
      <div className="sds-card__content">
        {overlineText && (
          <span className="sds-typography-heading--overline">
            {overlineText}
          </span>
        )}
        <H className="sds-typography-heading--small">{headingText}</H>
        {leadText && (
          <span className="sds-typography-body--lead">{leadText}</span>
        )}
        {children && (
          <div className="sds-typography-body--regular">{children}</div>
        )}
        {callToAction && <div className="sds-card__cta">{callToAction}</div>}
      </div>
    </section>
  );
};
