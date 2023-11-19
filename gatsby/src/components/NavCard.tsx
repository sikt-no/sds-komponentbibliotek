import React, { ElementType, forwardRef, ReactNode } from "react";
import clsx from "clsx";
import { ArrowRightIcon } from "@sikt/sds-icons";
import * as style from "./nav-card.module.css";

interface NavCardProps {
  imgSrc?: string;
  imgAlt?: string;
  headingText: string;
  children?: ReactNode;
  className?: string;
}

export const NavCard = forwardRef<HTMLAnchorElement, NavCardProps>(
  (
    { href, imgSrc, imgAlt, headingText, children, className, ...rest },
    ref,
  ) => {
    const Component: ElementType = href ? "a" : "div";

    return (
      <Component
        ref={ref}
        href={href}
        className={clsx(style.navCard, className)}
        {...rest}
      >
        <div className={style.navCard__image}>
          {imgSrc && imgAlt && <img alt={imgAlt} src={imgSrc} />}
        </div>
        <div className={style.navCard__title}>
          <h3 className="sds-typography-heading--small">{headingText}</h3>
          <div>
            <span
              className={clsx(
                "sds-button sds-button--subtle",
                style.navCard__button,
              )}
            >
              <span className="sds-button__icon">
                <ArrowRightIcon />
              </span>
            </span>
          </div>
        </div>
        <div
          className={clsx(
            style.navCard__children,
            "sds-typography-body--large",
          )}
        >
          {children}
        </div>
      </Component>
    );
  },
);

NavCard.displayName = "NavCard";
