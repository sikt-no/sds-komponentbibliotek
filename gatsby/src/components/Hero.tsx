import React, { ReactNode } from "react";
import clsx from "clsx";
import { BreadcrumbItem, Breadcrumbs } from "@sikt/sds-breadcrumbs";
import { Link as GatsbyLink } from "gatsby-link";
import { Heading1 } from "@sikt/sds-core";
import * as style from "./hero.module.css";

interface BreadcrumbProps {
  to: string;
  title: string;
}

interface HeroProps {
  className?: string;
  heading: ReactNode;
  leadParagraph?: ReactNode;
  breadcrumbs?: BreadcrumbProps[];
}

export const Hero = ({
  className,
  breadcrumbs,
  heading,
  leadParagraph,
}: HeroProps) => {
  return (
    <>
      <section className={clsx(style.hero__section, className)}>
        <div className={style.hero__sectionContent}>
          {breadcrumbs && (
            <Breadcrumbs aria-label="Navigasjonssti">
              {breadcrumbs.map((breadcrumb) => (
                <BreadcrumbItem key={breadcrumb.to}>
                  <GatsbyLink
                    className="sds-typography-link"
                    to={breadcrumb.to}
                  >
                    {breadcrumb.title}
                  </GatsbyLink>
                </BreadcrumbItem>
              ))}
            </Breadcrumbs>
          )}
          <Heading1 variant="huge">{heading}</Heading1>
          {leadParagraph && (
            <p className={style.hero__paragraph}>{leadParagraph}</p>
          )}
        </div>
        <div className={style.hero__sectionImage}></div>
      </section>
    </>
  );
};
