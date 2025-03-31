import { BreadcrumbItem, Breadcrumbs } from "@sikt/sds-breadcrumbs";
import { Heading1, Link } from "@sikt/sds-core";
import { clsx } from "clsx/lite";
import type { ReactNode } from "react";
import styles from "./hero.module.css";

interface BreadcrumbProps {
  href: string;
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
    <section className={clsx(styles.section, className)}>
      <div className={styles.content}>
        {breadcrumbs && (
          <Breadcrumbs aria-label="Navigasjonssti">
            {breadcrumbs.map((breadcrumb) => (
              <BreadcrumbItem key={breadcrumb.href}>
                <Link className="sds-typography-link" href={breadcrumb.href}>
                  {breadcrumb.title}
                </Link>
              </BreadcrumbItem>
            ))}
          </Breadcrumbs>
        )}
        <Heading1 variant="huge">{heading}</Heading1>
        {children && <div className="content-max-width">{children}</div>}
      </div>
      <div className={styles.image} />
    </section>
  );
};
