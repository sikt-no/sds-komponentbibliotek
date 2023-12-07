import React from "react";
import { PageProps } from "gatsby";
import clsx from "clsx";
import { Section } from "@sikt/sds-section";
import * as style from "./index.module.css";
import { NavCard } from "../../components/NavCard";
import { Hero } from "../../components/Hero";
import { Paragraph } from "@sikt/sds-core";
import {
  a11yHref,
  colorsHref,
  iconsHref,
  layoutHref,
  sizesHref,
  SubNav,
  tokensHref,
  typographyHref,
} from "../../components/grunnleggende/SubNav";

export { Head } from "../../components/Head";

const BasicsPage: React.FC<PageProps> = () => {
  return (
    <>
      <Hero
        breadcrumbs={[{ title: "Komponentbiblioteket", to: "/" }]}
        heading={<>Grunn&shy;leggende</>}
      />

      <section
        className={clsx(
          style.grunnleggende__section,
          style.grunnleggende__sectionDesktop1x4,
        )}
      >
        <div className={style.grunnleggende__sideNavWrapper}>
          <SubNav />
        </div>

        <div>
          <Section
            headingText="Hva er et komponentbibliotek?"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
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
              </Paragraph>

              <Paragraph className="sds-paragraph--max-width">
                Komponentbiblioteket vil være en kombinasjon av enkeltstående
                komponenter, samt retningslinjer for hvordan ulike komponenter
                kan settes sammen til en mer helhetlig side (se "Guidelines" og
                "Patterns" i Figma). Per i dag er komponentbiblioteket
                tilgjengelig i Figma, GitLab og npmjs. Å bygge et godt
                komponentbibliotek for Sikt vil være en laginnsats, der alle
                team er velkomne til å bidra inn. Det har allerede kommet inn
                mange gode bidrag fra ulike team, og vi håper at enda flere team
                ønsker å koble seg på fremover!
              </Paragraph>
            </div>
          </Section>

          <Section
            headingText="Designelementer"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <NavCard
                headingText="Design tokens"
                imgSrc="/images/grunnleggende/designtokens.png"
                imgAlt="Bilde på designtokens i Figma"
                href={tokensHref}
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
              >
                For å sikre likt utseende på tvers av løsninger og grensesnitt
                har vi definert et sett med størrelser og avstander som design
                tokens.
              </NavCard>

              <NavCard
                headingText="Fargesystem"
                imgSrc="/images/grunnleggende/fargesystem.png"
                imgAlt="Bilde på farger i Figma"
                href={colorsHref}
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
                href={a11yHref}
              >
                Universell utforming er å planlegge produkter, omgivelser,
                programmer og tjenester slik at de kan brukes av så mange
                mennesker som mulig på en likeverdig måte.
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
