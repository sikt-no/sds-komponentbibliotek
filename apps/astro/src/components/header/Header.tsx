import { Link } from "@sikt/sds-core";
import { Header as SdsHeader, HeaderNav } from "@sikt/sds-header";
import styles from "./header.module.css";

export const Header = ({ currentHref }: { currentHref: string }) => {
  return (
    <SdsHeader
      topSlot={
        <nav
          className={styles.nav}
          aria-label="Navigasjon, tekniskt dokumentasjon"
        >
          <ul className={styles.ul} data-color-scheme="dark">
            <li>
              <Link href="/" aria-current={currentHref === "/" && "page"}>
                Designsystem
              </Link>
            </li>
            <li>
              <Link href="https://platon.sikt.no/">Platon</Link>
            </li>
            <li>
              <Link href="https://docs.feide.no/">Feide</Link>
            </li>
          </ul>
        </nav>
      }
    >
      <HeaderNav aria-label="Navigasjon">
        <Link href="/storybook/">Komponenter</Link>
      </HeaderNav>
    </SdsHeader>
  );
};
