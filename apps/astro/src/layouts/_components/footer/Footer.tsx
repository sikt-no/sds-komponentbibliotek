import { Link } from "@sikt/sds-core";
import { Footer as SdsFooter } from "@sikt/sds-footer";
import { clsx } from "clsx/lite";
import { GitlabButton, FigmaButton, SlackButton } from "../../../components";
import styles from "./footer.module.css";

export const Footer = ({ currentHref }: { currentHref: string }) => {
  const isJune = new Date().getMonth() === 5;

  return (
    <SdsFooter className={styles.footer}>
      <div>
        <ul className={clsx(styles.ul, styles.vertical)}>
          <li>
            <Link
              href="/personvern/"
              aria-current={currentHref === "/personvern/" && "page"}
            >
              Personvern og informasjons&shy;kapsler
            </Link>
          </li>
          <li>
            <Link
              href="/tilgjengelighetserklaring/"
              aria-current={
                currentHref === "/tilgjengelighetserklaring/" && "page"
              }
            >
              Tilgjengelighets&shy;erklæring
            </Link>
          </li>
          <li>
            <Link
              href="/laget-med-kjaerlighet/"
              aria-current={currentHref === "/laget-med-kjaerlighet/" && "page"}
            >
              Laget med kjærlighet ❤️{isJune && <>🧡💛💚💙💜</>}
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className={clsx(styles.ul, styles.horizontal)}>
          <li>
            <FigmaButton variant="transparent" iconVariant="only" />
          </li>
          <li>
            <GitlabButton variant="transparent" iconVariant="only" />
          </li>
          <li>
            <SlackButton variant="transparent" iconVariant="only" />
          </li>
        </ul>
      </div>
    </SdsFooter>
  );
};
