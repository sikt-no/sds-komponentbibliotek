import React from "react";
import { PageProps } from "gatsby";
import { Hero } from "../../../components/Hero";
import clsx from "clsx";
import * as indexStyle from "../../index.module.css";
import * as style from "../index.module.css";
import * as moduleStyle from "./index.module.css";
import { Paragraph } from "@sikt/sds-core";
import { Section } from "@sikt/sds-section";
import { Badge } from "@sikt/sds-badge";
import { Nut } from "@phosphor-icons/react";
import { SubNav } from "../../../components/SubNav";

const LayoutPage: React.FC<PageProps> = () => {
  return (
    <>
      <Hero
        breadcrumbs={[
          { title: "Komponentbiblioteket", to: "/" },
          { title: "Gunnleggende", to: "/grunnleggende/" },
        ]}
        heading={<>Layout</>}
        leadParagraph="For å sikre likt utseende på tvers av løsninger og grensesnitt har vi
          definert et sett med størrelser og avstander som design tokens."
        className={clsx(indexStyle.index__hero, moduleStyle.layout__hero)}
      />

      <section
        className={clsx(
          style.grunnleggende__section,
          style.grunnleggende__sectionDesktop1x4
        )}
      >
        <div className={style.grunnleggende__sideNavWrapper}>
          <SubNav currentHref="/grunnleggende/layout/" />
        </div>

        <div>
          <Section
            headingText="Rutenett"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                Det er satt opp et enkelt gridsystem basert på 12 kolonner.
                Marginene på sidene er{" "}
                <code className="sds-typography-body--code">
                  --sds-space-padding-huge
                </code>
                , og med
                <code className="sds-typography-body--code">
                  --sds-space-gap-large
                </code>{" "}
                som mellomrom mellom kolonnene.
              </Paragraph>

              <div>
                <img
                  src="/images/grunnleggende/layout/grid.png"
                  alt="Bilde på gridsystem i Figma"
                />
              </div>
            </div>
          </Section>

          <Section
            headingText="Maksbredde"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                På store skjermer og med enklere innhold kan det være fornuftig
                å begrense hvor mye bredde innholdet skal ta, da det kan se rart
                ut f.eks. på en ultra-wide skjerm.
              </Paragraph>

              <Paragraph className="sds-paragraph--max-width">
                I Figma er det definert et layout-grid som har en bredde på
                960px. Innholdet må også tilpasses, og section-mønstrene er
                tilrettelagt slik at man kan bruke max-width-funksjonaliteten i
                Figma.
              </Paragraph>
            </div>
          </Section>

          <Section
            headingText="Bruddpunkter"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                Vi har definert forskjellige enhetsstørrelser i
                komponentbiblioteket, mobil, nettbrett, stasjonær datamaskin, og
                svært brede skjermer (mobile, tablet, desktop, utrawide).
                Bruddpunktene er verdiene som definerer når grensesnittet bytter
                mellom de forskjellige størrelsene og enhetene.
              </Paragraph>

              <div>
                <div className={moduleStyle.layout__breakpointList}>
                  <div className={moduleStyle.layout__breakpoint}>
                    <img
                      src="/images/grunnleggende/layout/device-mobile.png"
                      alt="Skisse på mobildings"
                    />
                    <Badge visibility="strong" icon={<Nut />}>
                      --sds-base-breakpoint-mobile
                    </Badge>
                  </div>

                  <div className={moduleStyle.layout__breakpoint}>
                    <img
                      src="/images/grunnleggende/layout/device-tablet.png"
                      alt="Skisse på nettbrettdings"
                    />
                    <Badge visibility="strong" icon={<Nut />}>
                      --sds-base-breakpoint-tablet
                    </Badge>
                  </div>

                  <div className={moduleStyle.layout__breakpoint}>
                    <img
                      src="/images/grunnleggende/layout/device-desktop.png"
                      alt="Skisse på dataskjerm"
                    />
                    <Badge visibility="strong" icon={<Nut />}>
                      --sds-base-breakpoint-desktop
                    </Badge>
                  </div>

                  <div className={moduleStyle.layout__breakpoint}>
                    <img
                      src="/images/grunnleggende/layout/device-utrawide.png"
                      alt="Skisse på ekstrebred dataskjerm"
                    />
                    <Badge visibility="strong" icon={<Nut />}>
                      --sds-base-breakpoint-ultrawide
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
};

export default LayoutPage;
