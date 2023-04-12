import React, { HTMLAttributes, ElementType } from "react";
import clsx from "clsx";
import { ButtonLink } from "@sikt/sds-button";
import { ArrowRightIcon } from "@sikt/sds-icons";
import "./featured.pcss";

export interface FeaturedProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  imgSrc: string;
  imgAlt: string;
  imgPosition?: "first" | "last";
  linkText: string;
  linkHref: string;
  overlineText?: string;
  headingText: string;
  text?: string;
}

export const Featured = ({
  headingLevel = "h3",
  imgSrc,
  imgAlt,
  imgPosition = "first",
  linkText,
  linkHref,
  overlineText,
  headingText,
  text,
  className,
  ...rest
}: FeaturedProps) => {
  const H: ElementType = `${headingLevel}`;

  return (
    <div
      className={clsx(
        "sds-content-block-featured",
        `sds-content-block-featured--image-${imgPosition}`,
        className
      )}
      {...rest}
    >
      <img
        alt={imgAlt}
        src={imgSrc}
        className="sds-content-block-featured__image"
      />
      <div className="sds-content-block-featured__content">
        {overlineText && (
          <span className="sds-typography-heading--overline">
            {overlineText}
          </span>
        )}
        <H className="sds-typography-heading--component">{headingText}</H>
        {text && <p className="sds-typography-body--normal">{text}</p>}
        <ButtonLink
          buttonType="secondary"
          href={linkHref}
          className="sds-content-block-featured__link"
          icon={<ArrowRightIcon />}
        >
          {linkText}
        </ButtonLink>
      </div>
    </div>
  );
};
