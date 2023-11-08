import React from "react";
import { FigmaLogo, GitlabLogo, SlackLogo } from "@phosphor-icons/react";
import { Footer as SdsFooter } from "@sikt/sds-footer";
import * as style from "./footer.module.css";
import { ButtonLink } from "@sikt/sds-button";

const Footer = ({ className }: { className?: string }) => {
  return (
    <SdsFooter className={className}>
      <div>
        <ul className={style.footer__list}>
          <li>
            <ButtonLink
              variant="transparent"
              iconVariant="only"
              icon={<FigmaLogo />}
              href="https://www.figma.com/files/1167338716494500240/project/73250738/Designsystem"
            >
              Se prosjektet i Figma
            </ButtonLink>
          </li>
          <li>
            <ButtonLink
              variant="transparent"
              iconVariant="only"
              icon={<GitlabLogo />}
              href="https://gitlab.sikt.no/designsystem/sds-komponentbibliotek"
            >
              Se prosjektet på GitLab
            </ButtonLink>
          </li>
          <li>
            <ButtonLink
              variant="transparent"
              iconVariant="only"
              icon={<SlackLogo />}
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

export default Footer;
