import React from "react";
import { Link, ScreenReaderOnly } from "@sikt/sds-core";
import { PrimaryLogo } from "@sikt/sds-logo";
import * as style from "./header.module.css";

const Header = () => {
  return (
    <>
      <ScreenReaderOnly isFocusable className={style.sdsSiktHeader__skipLink}>
        <Link href="#main">Gå til innhold</Link>
      </ScreenReaderOnly>
      <header className={`${style.sdsSiktHeader} sds-sikt-header`}>
        <PrimaryLogo className={style.sdsSiktHeader__logo} />
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
      </header>
    </>
  );
};

export default Header;
