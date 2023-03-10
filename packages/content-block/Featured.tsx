import React from "react";
import clsx from "clsx";
import { Icon } from "@sikt/sds-icons";
import "./featured.pcss";

export interface FeaturedProps {
  imgSrc: string;
  altText: string;
  imgPosition?: "first" | "last";
  buttonLabel: string;
  overline?: string;
  heading: string;
  text?: string;
  padding?: "small" | "large";
  linkTarget: string;
  type?: "horizontal" | "vertical";
  className?: string;
}

export const Featured = ({
  imgSrc,
  imgPosition,
  buttonLabel,
  overline,
  heading,
  text,
  padding = "small",
  type = "horizontal",
  linkTarget,
  altText,
  className,
  ...rest
}: FeaturedProps) => {
  const imagePositionClassModifier =
    (imgPosition == "last" && type == "horizontal" && "right") ||
    (imgPosition == "first" && type == "horizontal" && "left") ||
    (imgPosition == "first" && type == "vertical" && "top") ||
    (imgPosition === "last" && type === "vertical" && "bottom");

  return (
    <div
      className={clsx(
        "sds-content-block-featured",
        `sds-content-block-featured--${type}`,
        `sds-content-block-featured--${imagePositionClassModifier}`,
        className
      )}
      {...rest}
    >
      <img
        alt={altText}
        src={imgSrc}
        className={clsx(
          "sds-content-block-featured__img",
          `sds-content-block-featured__img--${type}`
        )}
      />
      <div
        className={clsx(
          "sds-content-block-featured__content",
          `sds-content-block-featured__content--${type}`,
          `sds-content-block-featured__content--gap-${padding}`
        )}
      >
        <h6 className="sds-typography-heading--overline">{overline}</h6>
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
