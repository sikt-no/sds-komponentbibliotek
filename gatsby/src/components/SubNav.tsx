import * as style from "./sub-nav.module.css";
import { SideNav } from "./side-nav/SideNav";
import { SideNavButtonLink } from "./side-nav/SideNavButtonLink";
import {
  ArrowsInLineHorizontal,
  DotsNine,
  Flask,
  Layout,
  Nut,
  Palette,
  Pencil,
  TextAa,
  Wheelchair,
} from "@phosphor-icons/react";
import React from "react";

export const tokensHref = "/grunnleggende/designtokens/";
export const sizesHref = "/grunnleggende/storrelser/";
export const layoutHref = "/grunnleggende/layout/";
export const colorsHref = "/grunnleggende/farger/";
export const typographyHref = "/grunnleggende/typografi/";
export const iconsHref = "/grunnleggende/ikoner/";
export const a11yHref =
  "https://isikt.sharepoint.com/sites/Universellutforming";

export const SubNav = ({ currentHref }: { currentHref?: string }) => {
  return (
    <div className={style.subNav}>
      <span className="sds-typography-heading--paragraph">Grunnleggende</span>
      <SideNav
        aria-label="Sidenavigasjon, Designelementer"
        heading="Designelementer"
      >
        <li>
          <SideNavButtonLink
            icon={<Nut />}
            href={tokensHref}
            aria-current={currentHref === tokensHref && "page"}
          >
            Designtokens
          </SideNavButtonLink>
        </li>
        <li>
          <SideNavButtonLink
            icon={<ArrowsInLineHorizontal />}
            href={sizesHref}
            aria-current={currentHref === sizesHref && "page"}
          >
            Størrelser
          </SideNavButtonLink>
        </li>
        <li>
          <SideNavButtonLink
            icon={<Layout />}
            href={layoutHref}
            aria-current={currentHref === layoutHref && "page"}
          >
            Layout
          </SideNavButtonLink>
        </li>
        <li>
          <SideNavButtonLink
            icon={<Palette />}
            href={colorsHref}
            aria-current={currentHref === colorsHref && "page"}
          >
            Fargesystem
          </SideNavButtonLink>
        </li>
        <li>
          <SideNavButtonLink
            icon={<TextAa />}
            href={typographyHref}
            aria-current={currentHref === typographyHref && "page"}
          >
            Typografi
          </SideNavButtonLink>
        </li>
        <li>
          <SideNavButtonLink
            icon={<DotsNine />}
            href={iconsHref}
            aria-current={currentHref === iconsHref && "page"}
          >
            Ikonbibliotek
          </SideNavButtonLink>
        </li>
      </SideNav>

      <SideNav aria-label="Sidenavigasjon, Krav og mål" heading="Krav og mål">
        <li>
          <SideNavButtonLink icon={<Wheelchair />} href={a11yHref}>
            Tilgjengelighet
          </SideNavButtonLink>
        </li>
        <li>
          <SideNavButtonLink icon={<Flask />}>Testing</SideNavButtonLink>
        </li>
        <li>
          <SideNavButtonLink icon={<Pencil />}>Fleksibilitet</SideNavButtonLink>
        </li>
      </SideNav>
    </div>
  );
};
