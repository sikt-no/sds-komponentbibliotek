import type { ReactNode, CSSProperties } from "react";
import { useId } from "react";
import styles from "./typography-card.module.css";

export const TypographyCard = ({
  heading,
  children,
  style,
}: {
  heading: ReactNode;
  children: ReactNode;
  style: CSSProperties;
}) => {
  const id = useId();

  return (
    <section className={styles.card} aria-labelledby={id}>
      <h3 id={id} style={style}>
        {heading}
      </h3>
      {children}
    </section>
  );
};
