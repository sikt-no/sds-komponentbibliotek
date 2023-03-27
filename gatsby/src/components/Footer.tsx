import React from "react";
import { Link, Heading2 } from "@sikt/sds-core";
import { SecondaryLogo } from "@sikt/sds-logo";
import { UnorderedList, ListItem } from "@sikt/sds-list";
import * as style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.sdsSiktFooter} data-color-scheme="dark">
      <div className={style.sdsSiktFooter__content}>
        <div>
          <a href="//sikt.no" className={style.sdsSiktFooter__logoLink}>
            <SecondaryLogo />
          </a>
        </div>
        <div>
          <Heading2
            headingType="overline"
            className={style.sdsSiktFooter__linkHeading}
          >
            Resurser
          </Heading2>
          <UnorderedList>
            <ListItem>
              Skisser i{" "}
              <Link
                href="https://www.figma.com/file/6AVtxjDULlUdl9F4JEHAfv/Komponentbibliotek-v0.1"
                target="_blank"
                aria-label="Skisser i Figma"
              >
                Figma
              </Link>
            </ListItem>
            <ListItem>
              Kode på{" "}
              <Link
                href="https://gitlab.sikt.no/designsystem/sds-komponentbibliotek"
                target="_blank"
                aria-label="Kode på Gitlab"
              >
                Gitlab
              </Link>
            </ListItem>
            <ListItem>
              Pakker på{" "}
              <Link
                href="https://www.npmjs.com/search?q=%40sikt"
                target="_blank"
                aria-label="Pakker på npmjs"
              >
                npmjs
              </Link>
            </ListItem>
          </UnorderedList>
        </div>
        <div>
          <Heading2
            headingType="overline"
            className={style.sdsSiktFooter__linkHeading}
          >
            Kontakt oss
          </Heading2>
          <UnorderedList>
            <ListItem>
              Slack{" "}
              <Link
                href="https://sikt-no.slack.com/archives/C04K82KES0J"
                target="_blank"
                aria-label="Slack #komponenter"
              >
                #komponenter
              </Link>
            </ListItem>
            <ListItem>
              Teams{" "}
              <Link
                href="https://teams.microsoft.com/l/channel/19%3a82f3200166fe4d478fcbbdf601156a04%40thread.tacv2/Designsystem?groupId=df522351-7400-437c-8afb-110611f841fa&tenantId=cb342146-7965-425e-83ab-88f8ecb99e0d"
                target="_blank"
                aria-label="Teams Designsystem"
              >
                Designsystem
              </Link>
            </ListItem>
          </UnorderedList>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
