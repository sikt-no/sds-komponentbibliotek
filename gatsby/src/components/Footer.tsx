import React from "react";
import { Link, Heading2 } from "@sikt/sds-core";
import { UnorderedList, ListItem } from "@sikt/sds-list";
import { Footer as SdsFooter } from "@sikt/sds-footer";
import * as style from "./footer.module.css";

const Footer = () => {
  return (
    <SdsFooter>
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
    </SdsFooter>
  );
};

export default Footer;
