import React, { HTMLAttributes, ElementType } from "react";
import clsx from "clsx";
import { ButtonLink } from "@sikt/sds-button";
import { ArrowRightIcon } from "@sikt/sds-icons";
import "./inline.pcss";

export interface InlineProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  imgSrc: string;
  imgAlt: string;
  linkText: string;
  linkHref: string;
  headingText: string;
  text?: string;
}

export const Inline = ({
  headingLevel = "h3",
  imgSrc,
  imgAlt,
  linkText,
  linkHref,
  text,
  headingText,
  className,
  ...rest
}: InlineProps) => {
  const H: ElementType = `${headingLevel}`;
  return (
    <div className={clsx("sds-content-block-inline", className)} {...rest}>
      <img
        alt={imgAlt}
        src={imgSrc}
        className="sds-content-block-inline__image"
      />
      <div className="sds-content-block-inline__content">
        <H className="sds-typography-heading--small">{headingText}</H>
        {text && <p className="sds-typography-body--regular">{text}</p>}
        <ButtonLink
          buttonType="secondary"
          href={linkHref}
          className="sds-content-block-inline__link"
          icon={<ArrowRightIcon />}
        >
          {linkText}
        </ButtonLink>
      </div>
    </div>
  );
};
