// TODO: Objects are not valid as a React child (found: object with keys {$$typeof, type, key, ref, props, _owner, _store}). If you meant to render a collection of children, use an array instead.
// import { FigmaLogo, GitlabLogo, SlackLogo } from "@phosphor-icons/react/dist/ssr";
import FigmaLogo from "@phosphor-icons/core/regular/figma-logo.svg?react";
import GitlabLogo from "@phosphor-icons/core/regular/gitlab-logo.svg?react";
import SlackLogo from "@phosphor-icons/core/regular/slack-logo.svg?react";
import { ButtonLink } from "@sikt/sds-button";
import { Link } from "@sikt/sds-core";
import { Footer as SdsFooter } from "@sikt/sds-footer";
import { clsx } from "clsx/lite";
import styles from "./footer.module.css";

export const Footer = ({
  className,
  currentHref,
}: {
  className?: string;
  currentHref: string;
}) => {
  const isJune = new Date().getMonth() === 5;

  return (
    <SdsFooter className={className}>
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
          <li>Laget med kjærlighet ❤️{isJune && <>🧡💛💚💙💜</>}</li>
        </ul>
      </div>
      <div>
        <ul className={clsx(styles.ul, styles.horizontal)}>
          <li>
            <ButtonLink
              variant="transparent"
              iconVariant="only"
              icon={<FigmaLogo className="sds-icon" aria-hidden />}
              href="https://www.figma.com/files/1167338716494500240/project/73250738/Designsystem"
            >
              Se prosjektet i Figma
            </ButtonLink>
          </li>
          <li>
            <ButtonLink
              variant="transparent"
              iconVariant="only"
              icon={<GitlabLogo className="sds-icon" aria-hidden />}
              href="https://gitlab.sikt.no/designsystem/sds-komponentbibliotek"
            >
              Se prosjektet på GitLab
            </ButtonLink>
          </li>
          <li>
            <ButtonLink
              variant="transparent"
              iconVariant="only"
              icon={<SlackLogo className="sds-icon" aria-hidden />}
              href="https://sikt-no.slack.com/archives/C04K82KES0J"
            >
              Bli med i Slack-kanalen
            </ButtonLink>
          </li>
        </ul>
      </div>
    </SdsFooter>
  );
};
