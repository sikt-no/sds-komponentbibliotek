import React from "react";
import { Link as GatsbyLink, PageProps } from "gatsby";
import clsx from "clsx";
import {
  Nut,
  ArrowsInLineHorizontal,
  Layout,
  Palette,
  TextAa,
  DotsNine,
  Flask,
  Wheelchair,
  Pencil,
} from "@phosphor-icons/react";
import { Heading1 } from "@sikt/sds-core";
import { Breadcrumbs, BreadcrumbItem } from "@sikt/sds-breadcrumbs";
import { Section } from "@sikt/sds-section";
import * as style from "./index.module.css";
import { SideNav } from "../../components/side-nav/SideNav";
import { SideNavButtonLink } from "../../components/side-nav/SideNavButtonLink";
import { NavCard } from "../../components/NavCard";

const BasicsPage: React.FC<PageProps> = () => {
  const designtokensHref =
    "https://www.figma.com/proto/6AVtxjDULlUdl9F4JEHAfv/Komponentbibliotek-v1.0?page-id=3716%3A12831&type=design&node-id=8610-21896&viewport=986%2C9159%2C0.26&t=QwVCdesNsGPVlTuE-1&scaling=min-zoom&starting-point-node-id=8599%3A15818&hide-ui=1";
  const sizesHref =
    "https://www.figma.com/proto/6AVtxjDULlUdl9F4JEHAfv/Komponentbibliotek-v1.0?page-id=3716%3A12831&type=design&node-id=8610-22360&viewport=986%2C9159%2C0.26&t=QwVCdesNsGPVlTuE-1&scaling=min-zoom&starting-point-node-id=8599%3A15818&hide-ui=1";
  const layoutHref =
    "https://www.figma.com/proto/6AVtxjDULlUdl9F4JEHAfv/Komponentbibliotek-v1.0?page-id=3716%3A12831&type=design&node-id=8712-74121&viewport=986%2C9159%2C0.26&t=QwVCdesNsGPVlTuE-1&scaling=min-zoom&starting-point-node-id=8599%3A15818&hide-ui=1";
  const colorHref =
    "https://www.figma.com/proto/6AVtxjDULlUdl9F4JEHAfv/Komponentbibliotek-v1.0?page-id=3716%3A12831&type=design&node-id=8626-30971&viewport=986%2C9159%2C0.26&t=QwVCdesNsGPVlTuE-1&scaling=min-zoom&starting-point-node-id=8599%3A15818&hide-ui=1";
  const typographyHref =
    "https://www.figma.com/proto/6AVtxjDULlUdl9F4JEHAfv/Komponentbibliotek-v1.0?page-id=3716%3A12831&type=design&node-id=8664-55487&viewport=986%2C9159%2C0.26&t=QwVCdesNsGPVlTuE-1&scaling=min-zoom&starting-point-node-id=8599%3A15818&hide-ui=1";
  const iconsHref =
    "https://www.figma.com/proto/6AVtxjDULlUdl9F4JEHAfv/Komponentbibliotek-v1.0?page-id=3716%3A12831&type=design&node-id=8690-58917&viewport=986%2C9159%2C0.26&t=QwVCdesNsGPVlTuE-1&scaling=min-zoom&starting-point-node-id=8599%3A15818&hide-ui=1";

  return (
    <>
      <section
        className={clsx(
          style.grunnleggende__section,
          style.grunnleggende__sectionPrimary
        )}
      >
        <div className={style.grunnleggende__sectionContent}>
          <Breadcrumbs aria-label="Navigasjonssti">
            <BreadcrumbItem>
              <GatsbyLink className="sds-typography-link" to="/">
                Komponentbiblioteket
              </GatsbyLink>
            </BreadcrumbItem>
          </Breadcrumbs>
          <Heading1 variant="huge">Grunn&shy;leggende</Heading1>
          <p className={style.grunnleggende__paragraphMaxWidth}>
            Velkommen til Sikts komponentbibliotek. Dette er en sammensetning av
            komponenter og retningslinjer du kan bruke når du designer og
            utvikler digitale løsninger og tjenester.
          </p>
        </div>
      </section>

      <section
        className={clsx(
          style.grunnleggende__section,
          style.grunnleggende__sectionDesktop1x4
        )}
      >
        <div className={style.grunnleggende__sideNavWrapper}>
          <span className="sds-typography-heading--paragraph">
            Grunnleggende
          </span>
          <SideNav
            aria-label="Sidenavigasjon, Designelementer"
            heading="Designelementer"
          >
            <li>
              <SideNavButtonLink icon={<Nut />} href={designtokensHref}>
                Designtokens
              </SideNavButtonLink>
            </li>
            <li>
              <SideNavButtonLink
                icon={<ArrowsInLineHorizontal />}
                href={sizesHref}
              >
                Størrelser
              </SideNavButtonLink>
            </li>
            <li>
              <SideNavButtonLink icon={<Layout />} href={layoutHref}>
                Layout
              </SideNavButtonLink>
            </li>
            <li>
              <SideNavButtonLink icon={<Palette />} href={colorHref}>
                Fargesystem
              </SideNavButtonLink>
            </li>
            <li>
              <SideNavButtonLink icon={<TextAa />} href={typographyHref}>
                Typografi
              </SideNavButtonLink>
            </li>
            <li>
              <SideNavButtonLink icon={<DotsNine />} href={iconsHref}>
                Ikonbibliotek
              </SideNavButtonLink>
            </li>
          </SideNav>

          <SideNav
            aria-label="Sidenavigasjon, Krav og mål"
            heading="Krav og mål"
          >
            <li>
              <SideNavButtonLink icon={<Wheelchair />}>
                Tilgjengelighet
              </SideNavButtonLink>
            </li>
            <li>
              <SideNavButtonLink icon={<Flask />}>Testing</SideNavButtonLink>
            </li>
            <li>
              <SideNavButtonLink icon={<Pencil />}>
                Fleksibilitet
              </SideNavButtonLink>
            </li>
          </SideNav>
        </div>

        <div>
          <Section
            headingText="Hva er et komponentbibliotek?"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <p className={style.grunnleggende__paragraphMaxWidth}>
                Sikt komponentbibliotek inneholder en rekke nyttige komponenter
                som kan brukes i design og utvikling av nettsider og
                applikasjoner. Det er flere fordeler ved å ta i bruk
                komponentbiblioteket. For det første vil utviklingsprosessen
                kunne gå raskere, ettersom man ikke trenger å bygge alt fra
                bunnen av hver gang. For det andre vil bruk av komponentene
                sannsynligvis redusere risiko for bugs og manglende universell
                utforming, siden komponentene er grundig testet i forkant. For
                det andre vil komponentene gjøre det mulig å skape en mer
                helhetlig opplevelse på tvers av Sikt sine
                nettsider/applikasjoner, da det visuelle uttrykket og
                interaksjonsmønstrene vil være gjenkjennbart for brukeren.
              </p>
              <p className={style.grunnleggende__paragraphMaxWidth}>
                Komponentbiblioteket vil være en kombinasjon av enkeltstående
                komponenter, samt retningslinjer for hvordan ulike komponenter
                kan settes sammen til en mer helhetlig side (se "Guidelines" og
                "Patterns" i Figma). Per i dag er komponentbiblioteket
                tilgjengelig i Figma, Gitlab og npmjs. Å bygge et godt
                komponentbibliotek for Sikt vil være en laginnsats, der alle
                team er velkomne til å bidra inn. Det har allerede kommet inn
                mange gode bidrag fra ulike team, og vi håper at enda flere team
                ønsker å koble seg på fremover!
              </p>
            </div>
          </Section>

          <Section
            headingText="Designelementer"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <NavCard
                headingText="Design tokens"
                imgSrc="/images/grunnleggende/design-tokens.png"
                imgAlt="Bilde på stol ved pult"
                href={designtokensHref}
              >
                Design tokens er verdier koblet til et navn, og sørger for at
                ting blir likt på tvers av design, utvikling, og tjenester.
              </NavCard>

              <NavCard
                headingText="Størrelser og avstander"
                imgSrc="/images/grunnleggende/storrelser-og-avstander.png"
                imgAlt="Bilde på størrelser i Figma"
                href={sizesHref}
              >
                For å sikre likt utseende på tvers av løsninger og grensesnitt
                har vi definert et sett med størrelser og avstander som design
                tokens.
              </NavCard>

              <NavCard
                headingText="Layout"
                imgSrc="/images/grunnleggende/layout.png"
                imgAlt="Bilde på grid i Figma"
                href={layoutHref}
              ></NavCard>

              <NavCard
                headingText="Fargesystem"
                imgSrc="/images/grunnleggende/fargesystem.png"
                imgAlt="Bilde på farger i Figma"
                href={colorHref}
              >
                Vi har satt opp et fargesystem med grunnfarger som ligger på et
                overordnet nivå, og ett underordnet sett farger som er navngitt
                i forhold til bruken.
              </NavCard>

              <NavCard
                headingText="Typografi"
                imgSrc="/images/grunnleggende/typografi.png"
                imgAlt="Bilde på typografi i Figma"
                href={typographyHref}
              >
                Det er satt opp et typografisystem som skal ivareta lesbarhet og
                utseende på tvers av skjermstørrelser og tjenester.
              </NavCard>

              <NavCard
                headingText="Ikonbibliotek"
                imgSrc="/images/grunnleggende/ikonbibliotek.png"
                imgAlt="Bilde på ikoner i Figma"
                href={iconsHref}
              >
                Vi har tatt i bruk Phosphor Icons som ikonsettet i Sikt, men har
                gjort et eget utvalg slik at vi er enige om hvilke ikoner som
                brukes til hva.
              </NavCard>
            </div>
          </Section>

          <Section
            headingText="Krav og mål"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <NavCard
                headingText="Tilgjengelighet"
                imgSrc="/images/grunnleggende/tilgjengelighet.png"
                imgAlt="Ikon av rullestol"
              >
                Kommer snart
              </NavCard>

              <NavCard
                headingText="Testing"
                imgSrc="/images/grunnleggende/testing.png"
                imgAlt="Ikon av testflaske"
              >
                Kommer snart
              </NavCard>

              <NavCard
                headingText="Fleksibilitet"
                imgSrc="/images/grunnleggende/fleksibilitet.png"
                imgAlt="Ikon av veiskilt"
              >
                Kommer snart
              </NavCard>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
};

export default BasicsPage;
