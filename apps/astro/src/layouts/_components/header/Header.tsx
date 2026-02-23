import { ButtonLink } from "@sikt/sds-button";
import { Link } from "@sikt/sds-core";
import { Header as SdsHeader } from "@sikt/sds-header";
import { SearchIcon } from "@sikt/sds-icons";
import styles from "./header.module.css";

export const Header = ({ currentHref }: { currentHref: string }) => {
  const home = (
    <Link href="/" aria-current={currentHref === "/" ? "page" : undefined}>
      Designsystem
    </Link>
  );

  return (
    <SdsHeader
      logoText="Designsystem"
      logoLink={home}
      topSlot={
        <nav
          className={styles.nav}
          aria-label="Navigasjon, tekniskt dokumentasjon"
        >
          <ul className={styles.ul}>
            <li>
              <Link href="https://platon.sikt.no/">Platon</Link>
            </li>
            <li>
              <Link href="https://platon.sikt.no/feide/">
                Autentisering&nbsp;&&nbsp;API
              </Link>
            </li>
            <li>
              <Link href="https://platon.sikt.no/brukskvalitet/">
                Brukskvalitet
              </Link>
            </li>
            <li>{home}</li>
          </ul>
        </nav>
      }
      rightSlot={
        <ButtonLink
          iconVariant="only"
          icon={<SearchIcon />}
          aria-label="Søk"
          href="/sok"
        />
      }
      skipLinkId="content"
    />
  );
};
