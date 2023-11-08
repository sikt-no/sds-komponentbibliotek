import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Header as SdsHeader } from "@sikt/sds-header";
import { TabLink } from "@sikt/sds-tabs";
import * as style from "./header.module.css";

const Header = () => {
  return (
    <SdsHeader logoText="design&shy;system" className={style.header}>
      <nav aria-label="Navigasjon" className="sds-tabs">
        <ul className={`sds-tabs__tab-list ${style.header__tabList}`}>
          <li>
            <GatsbyLink
              className="sds-tabs__tab sds-tab-link"
              to="/grunnleggende/"
            >
              Grunnleggende
            </GatsbyLink>
          </li>
          <li>
            <TabLink href="/komponenter/">Komponenter</TabLink>
          </li>
          <li>
            <TabLink href="/monstre/">Mønstre</TabLink>
          </li>
        </ul>
      </nav>
      <div />
    </SdsHeader>
  );
};

export default Header;
