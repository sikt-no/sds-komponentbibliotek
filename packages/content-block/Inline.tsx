import React from "react";
import clsx from "clsx";
import { Icon } from "@sikt/sds-icons";
import "./inline.pcss";

export interface InlineProps {
  className?: string;
  imgSrc: string;
  altText: string;
  buttonLabel: string;
  heading?: string;
  text?: string;
  padding?: "medium" | "large";
  type?: "horizontal" | "vertical";
  linkTarget: string;
}

export const Inline = ({
  imgSrc,
  buttonLabel,
  text,
  padding = "medium",
  type = "horizontal",
  heading,
  linkTarget,
  altText,
  className,
  ...rest
}: InlineProps) => {
  return (
    <div
      className={clsx(
        "sds-content-block-inline",
        `sds-content-block-inline--${type}`,
        `sds-content-block-inline--${padding}`,
        className
      )}
      {...rest}
    >
      <img
        alt={altText}
        src={imgSrc}
        className="sds-content-block-inline__img"
      />
      <div
        className={clsx(
          "sds-content-block-inline__content",
          `sds-content-block-inline__content--${padding}-${type}`
        )}
      >
        <h3 className="sds-typography-heading--component">{heading}</h3>
        <p className="sds-typography-body--normal">{text}</p>
        <div>
          <a
            href={linkTarget}
            className="sds-button sds-button--secondary sds-content-block-featured__link"
            rel="noreferrer"
          >
            <span className="sds-button__label">{buttonLabel}</span>
            <Icon icon="arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
};
