import type { ReactNode, CSSProperties } from "react";
import styles from "./headline-card.module.css";

export const HeadlineCard = ({
  heading,
  children,
  style,
}: {
  heading: ReactNode;
  children: ReactNode;
  style: CSSProperties;
}) => {
  return (
    <section className={styles.card}>
      <h3 style={style}>{heading}</h3>
      {children}
    </section>
  );
};
