import React from "react";
import { Header as SdsHeader } from "@sikt/sds-header";
import { TabLink } from "@sikt/sds-tabs";
import * as style from "./header.module.css";

const Header = () => {
  return (
    <SdsHeader logoText="designsystem" className={style.sdsSiktHeader}>
      <nav aria-label="Navigajon" className="sds-tabs">
        <ul className={`sds-tabs__tab-list ${style.sdsSiktHeader__tabList}`}>
          <li>
            <TabLink href="/retningslinjer/">Retningslinjer</TabLink>
          </li>
          <li>
            <TabLink href="/komponenter/">Komponenter</TabLink>
          </li>
        </ul>
      </nav>
    </SdsHeader>
  );
};

export default Header;
