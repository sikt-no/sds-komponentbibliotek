import React from "react";
import { PageProps } from "gatsby";
import { Hero } from "../../../components/Hero";
import clsx from "clsx";
import * as indexStyle from "../../index.module.css";
import * as style from "../index.module.css";
import * as moduleStyle from "./index.module.css";
import { Section } from "@sikt/sds-section";
import { Heading3, Link, Paragraph } from "@sikt/sds-core";
import { colorsHref, SubNav } from "../../../components/SubNav";

export { Head } from "../../../components/Head";

const DesignTokensPage: React.FC<PageProps> = ({ location }) => {
  return (
    <>
      <Hero
        breadcrumbs={[
          { title: "Komponentbiblioteket", to: "/" },
          { title: "Gunnleggende", to: "/grunnleggende/" },
        ]}
        heading={<>Ikonbibliotek</>}
        leadParagraph="Vi har tatt i bruk Phosphor Icons som ikonsettet i Sikt, men har gjort
          et eget utvalg slik at vi er enige om hvilke ikoner som brukes til hva."
        className={clsx(indexStyle.index__hero, moduleStyle.ikoner__hero)}
      />

      <section
        className={clsx(
          style.grunnleggende__section,
          style.grunnleggende__sectionDesktop1x4,
        )}
      >
        <div className={style.grunnleggende__sideNavWrapper}>
          <SubNav currentHref={location.pathname} />
        </div>

        <div>
          <Section
            headingText="Om ikonbiblioteket"
            className={style.grunnleggende__sdsSection}
          >
            <div
              className={clsx(
                style.grunnleggende__sdsSectionContent,
                style.grunnleggende__sdsSectionContentGapLarge,
              )}
            >
              <div className={style.grunnleggende__sdsSectionContent}>
                <Paragraph variant="lead" className="sds-paragraph--max-width">
                  Sikt designsystem bruker ikoner fra{" "}
                  <Link href="https://phosphoricons.com/" isExternal>
                    Phosphor icons
                  </Link>
                  . Ikonene er open-source, og{" "}
                  <Link
                    href="https://raw.githubusercontent.com/phosphor-icons/phosphor-home/master/LICENSE"
                    isExternal
                  >
                    lisensiert under MIT
                  </Link>
                  . I{" "}
                  <Link
                    href="https://www.figma.com/file/R5mBIZ6yBu96pZUsrqqv3H/Ikonbibliotek"
                    isExternal
                  >
                    Sikt designsystem bruker vi et utvalg av Phosphor-ikonene
                  </Link>
                  . Merk at ikonenes retningslinjer fremdeles er under arbeid,
                  så kom gjerne med tilbakemelding på hva som funger og ikke
                  funker.
                </Paragraph>
              </div>

              <div className={style.grunnleggende__sdsSectionContent}>
                <Heading3 variant="small">Utvalg</Heading3>

                <Paragraph className="sds-paragraph--max-width">
                  Phosphor icons har et svært bredt utvalg ikoner, der mange av
                  ikonene kan brukes i samme kontekst. I Sikt designsystem har
                  vi begrenset utvalget, ettersom vi tror det er lettere å ha en
                  felles forståelse av bruken dersom det er et mindre utvalg
                  ikoner. Tanken er å utvide utvalget av ikoner ved behov. Disse
                  behovene bør komme direkte fra produkt-teamene, basert på
                  reelle problemstillinger. I Figma har man per idag tilgang på
                  alle Phosphor-ikonene, mens man i NPM-pakkene kun har tilgang
                  på Sikt sitt ikonbibliotek.
                </Paragraph>
              </div>

              <div className={style.grunnleggende__sdsSectionContent}>
                <Heading3 variant="small">Utvidelse</Heading3>

                <Paragraph className="sds-paragraph--max-width">
                  Dersom det oppstår behov for å inkludere flere ikoner i
                  ikonbiblioteket til Sikt vil vi gjerne ha tilbakemelding på
                  dette, slik at vi kan utvide utvalget. Dette kan enten være i
                  form av å legge til flere av de eksisterende Phosphor-ikonene,
                  eller å designe nye ikoner fra bunnen av. Det vil kunne oppstå
                  behov som er spesifikke for et enkelt produkt, men i
                  utgangspunktet tror vi det mest gunstige er et sentralt
                  ikonbibliotek alle kan benytte seg av.
                </Paragraph>
              </div>

              <div className={style.grunnleggende__sdsSectionContent}>
                <Heading3 variant="small">Konsistent bruk</Heading3>

                <Paragraph className="sds-paragraph--max-width">
                  For å sørge for en helhetlig brukeropplevelse på tvers av Sikt
                  sine tjenester/flater er det ønskelig med konsistent bruk av
                  ikoner. Det vil si at samme brukskontekst bør bruke samme
                  ikon. Som eksempel bør en tidsfrist indikeres ved
                  bjelle-ikonet (deadline), og ikke ved f.eks klokke-ikonet
                  (time). For å understøtte konsekvent bruk har hvert ikon et
                  navn som beskriver den tenkte brukskonteksten.
                </Paragraph>
              </div>

              <div className={style.grunnleggende__sdsSectionContent}>
                <Heading3 variant="small">Alternative ikoner</Heading3>

                <Paragraph className="sds-paragraph--max-width">
                  I ikonbiblioteket vil du se at enkelte brukskontekster har
                  flere alternative ikoner. Her kan man selv avgjøre hva som
                  passer best i det aktuelle brukergrensesnittet.
                </Paragraph>
              </div>

              <div className={style.grunnleggende__sdsSectionContent}>
                <Heading3 variant="small">Farge</Heading3>

                <Paragraph className="sds-paragraph--max-width">
                  Ikonene bruker samme fargepalett som tekst, med samme
                  betydning av fargene. Dette vil sørge for at ikon-fargen
                  støtter UU-krav på lik linje som tekst-fargen. Se{" "}
                  <Link href={colorsHref}>Farger</Link> for mer informasjon.
                  Unntaket er offisielle tredjepartsikoner der det finnes
                  retningslinjer for bruk av merkevaren (f.eks LinkedIn logo).
                  Her kan det kun brukes et mer begrenset fargeutvalg. Som regel
                  vil hvit (#FFFFFF), sort (#000000), og merkevarefargen (f.eks
                  LinkedIn mørkeblå) være aktuelle farger å bruke her.
                </Paragraph>
              </div>

              <div className={style.grunnleggende__sdsSectionContent}>
                <Heading3 variant="small">Fyll</Heading3>

                <Paragraph className="sds-paragraph--max-width">
                  Enkelte ikoner finnes også med fyll (fill), slik at man kan
                  bruke ikonet som en knapp der omriss (outline) endres til fyll
                  når den er trykket på. Eksempel på bruk kan være å lagre noe
                  med bokmerke-ikonet (bookmark). Logikken for dette på
                  kodesiden må i utgangspunktet det enkelte team stå for. Det er
                  ikke ønskelig å bruke fyll-ikoner som standard.
                </Paragraph>
              </div>

              <div className={style.grunnleggende__sdsSectionContent}>
                <Heading3 variant="small">Størrelse og skalering</Heading3>

                <Paragraph className="sds-paragraph--max-width">
                  Størrelsen på ikonet bør ses i sammenheng med linjehøyden på
                  teksten som ligger før/etter ikonet. Dersom ikonet ikke skal
                  ses i sammenheng med tekst blir det en skjønnsmessig
                  vurdering. Ikonene er satt opp slik at linjetykkelsen vil bli
                  større i takt med at ikonet skaleres opp.
                </Paragraph>
              </div>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
};

export default DesignTokensPage;
