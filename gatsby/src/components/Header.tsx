import React from "react";
import { Header as SdsHeader } from "@sikt/sds-header";
import * as style from "./header.module.css";

const Header = () => {
  return (
    <SdsHeader logoText="designsystem" className={style.sdsSiktHeader}>
      <nav
        aria-label="Navigajon"
        className={`sds-tabs ${style.sdsSiktHeader__tab}`}
      >
        <ul className={`sds-tabs__tab-list ${style.sdsSiktHeader__tabList}`}>
          <li className={style.sdsSiktHeader__tabItem}>
            <a
              href="/retningslinjer/"
              className={`sds-tabs__tab ${style.sdsSiktHeader__tabLink}`}
            >
              Retningslinjer
            </a>
          </li>
          <li className={style.sdsSiktHeader__tabItem}>
            <a
              href="/komponenter/"
              className={`sds-tabs__tab ${style.sdsSiktHeader__tabLink}`}
            >
              Komponenter
            </a>
          </li>
        </ul>
      </nav>
    </SdsHeader>
  );
};

export default Header;
