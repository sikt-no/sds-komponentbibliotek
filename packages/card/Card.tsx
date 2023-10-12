import React, { ElementType, forwardRef, HTMLAttributes } from "react";
import clsx from "clsx";
import { ButtonLink } from "@sikt/sds-button";
import { ArrowRightIcon } from "@sikt/sds-icons";
import "./card.pcss";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  imgSrc?: string;
  imgAlt?: string;
  linkText: string;
  linkHref: string;
  overlineText?: string;
  headingText: string;
  text?: string;
}

export const Card = forwardRef<HTMLAnchorElement, CardProps>(
  (
    {
      headingLevel = "h3",
      imgSrc,
      imgAlt,
      linkText,
      linkHref,
      overlineText,
      headingText,
      text,
      className,
      ...rest
    },
    ref
  ) => {
    const H: ElementType = `${headingLevel}`;

    return (
      <section className={clsx("sds-card", className)} {...rest}>
        {imgSrc && imgAlt && (
          <img alt={imgAlt} src={imgSrc} className="sds-card__image" />
        )}
        <div className="sds-card__content">
          {overlineText && (
            <span className="sds-typography-heading--overline">
              {overlineText}
            </span>
          )}
          <H className="sds-typography-heading--small">{headingText}</H>
          {text && <p className="sds-typography-body--regular">{text}</p>}
          <ButtonLink
            ref={ref}
            buttonType="strong"
            href={linkHref}
            className="sds-card__link"
            icon={<ArrowRightIcon />}
          >
            {linkText}
          </ButtonLink>
        </div>
      </section>
    );
  }
);

Card.displayName = "Card";
