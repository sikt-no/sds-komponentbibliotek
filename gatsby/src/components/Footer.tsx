import React from "react";
import { Link, Heading2 } from "@sikt/sds-core";
import { UnorderedList, ListItem } from "@sikt/sds-list";
import { Footer as SdsFooter } from "@sikt/sds-footer";
import * as style from "./footer.module.css";

const Footer = ({ className }: { className?: string }) => {
  return (
    <SdsFooter className={className}>
      <div>
        <Heading2
          variant="overline"
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
        </UnorderedList>
      </div>
    </SdsFooter>
  );
};

export default Footer;
