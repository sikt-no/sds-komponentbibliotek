import React, { HTMLAttributes } from "react";
import clsx from "clsx";
import { Icon } from "@sikt/sds-icons";
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
  const H: React.ElementType = `${headingLevel}`;
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
        <a
          href={linkHref}
          className="sds-button sds-button--secondary sds-content-block-inline__link"
        >
          <span className="sds-button__label">{linkText}</span>
          <Icon icon="arrow-right" />
        </a>
      </div>
    </div>
  );
};
