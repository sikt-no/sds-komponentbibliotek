import { BreadcrumbItem, Breadcrumbs } from "@sikt/sds-breadcrumbs";
import { Heading1, Link } from "@sikt/sds-core";
import { clsx } from "clsx/lite";
import type { ReactNode } from "react";
import styles from "./hero.module.css";

interface BreadcrumbProps {
  href?: string;
  title: string;
}

interface HeroProps {
  className?: string;
  heading: ReactNode;
  children?: ReactNode;
  breadcrumbs?: BreadcrumbProps[];
}

export const Hero = ({
  className,
  breadcrumbs,
  heading,
  children,
}: HeroProps) => {
  return (
    <div className={clsx(styles.section, className)}>
      {breadcrumbs && (
        <Breadcrumbs aria-label="Navigasjonssti">
          {breadcrumbs.map((breadcrumb) =>
            breadcrumb.href ? (
              <BreadcrumbItem key={breadcrumb.href}>
                <Link href={breadcrumb.href}>{breadcrumb.title}</Link>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem key={breadcrumb.title}>
                <span>{breadcrumb.title}</span>
              </BreadcrumbItem>
            ),
          )}
        </Breadcrumbs>
      )}
      <Heading1 size="xl">{heading}</Heading1>
      {children && (
        <div className={clsx(styles.content, "ds-content-max-width")}>
          {children}
        </div>
      )}
    </div>
  );
};
Hero.displayName = "Hero";
