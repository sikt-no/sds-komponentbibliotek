import React from "react";
import { Header as SdsHeader } from "@sikt/sds-header";
import { TabLink } from "@sikt/sds-tabs";
import * as style from "./header.module.css";

const Header = () => {
  return (
    <SdsHeader logoText="design&shy;system" className={style.sdsSiktHeader}>
      <nav aria-label="Navigasjon" className="sds-tabs">
        <ul className={`sds-tabs__tab-list ${style.sdsSiktHeader__tabList}`}>
          <li>
            <TabLink href="/grunnleggende/">Grunnleggende</TabLink>
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
