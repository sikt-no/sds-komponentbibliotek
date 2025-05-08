import { Heading3 } from "@sikt/sds-core";
import type { ReactNode } from "react";
import styles from "./headline-card.module.css";

export const HeadlineCard = ({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) => {
  return (
    <section className={styles.card}>
      <Heading3 variant="application" size="xxl">
        {heading}
      </Heading3>
      {children}
    </section>
  );
};
