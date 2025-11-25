import { Link } from "@sikt/sds-core";
import { Header as SdsHeader } from "@sikt/sds-header";
import styles from "./header.module.css";

export const Header = ({ currentHref }: { currentHref: string }) => {
  return (
    <SdsHeader
      logoText="Designsystem"
      logoHref="/"
      topSlot={
        <nav
          className={styles.nav}
          aria-label="Navigasjon, tekniskt dokumentasjon"
        >
          <ul className={styles.ul}>
            <li>
              <Link href="/" aria-current={currentHref === "/" && "page"}>
                Designsystem
              </Link>
            </li>
            <li>
              <Link href="https://platon.sikt.no/">Utvikerplattform</Link>
            </li>
            <li>
              <Link href="https://docs.feide.no/">Autentisering</Link>
            </li>
          </ul>
        </nav>
      }
    />
  );
};
