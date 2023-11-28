import React from "react";
import { Link as GatsbyLink } from "gatsby";
import {
  Header as SdsHeader,
  HeaderCollapsibleMenu,
  HeaderNav,
} from "@sikt/sds-header";
import { Link } from "@sikt/sds-core";
import * as style from "./header.module.css";

const Header = () => {
  return (
    <SdsHeader logoText="designsystem.sikt.no" className={style.header}>
      <HeaderCollapsibleMenu aria-label="Navigasjon">
        <HeaderNav>
          <GatsbyLink to="/grunnleggende/">Grunnleggende</GatsbyLink>
          <Link href="/komponenter/">Komponenter</Link>
          <Link href="/monstre/">Mønstre</Link>
        </HeaderNav>
      </HeaderCollapsibleMenu>
      <div />
    </SdsHeader>
  );
};

export default Header;
