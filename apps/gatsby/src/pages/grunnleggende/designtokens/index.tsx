import { PageProps } from "gatsby";
import { Hero } from "../../../components/Hero";
import { clsx } from "clsx/lite";
import * as indexStyle from "../../index.module.css";
import * as style from "../index.module.css";
import * as moduleStyle from "./index.module.css";
import { Link, Paragraph, Heading3 } from "@sikt/sds-core";
import { Section } from "@sikt/sds-section";
import { Badge } from "@sikt/sds-badge";
import { Nut } from "@phosphor-icons/react";
import { SubNav } from "../../../components/grunnleggende/SubNav";

export { Head } from "../../../components/Head";

const DesigntokensPage: React.FC<PageProps> = ({ location }) => {
  return (
    <>
      <Hero
        breadcrumbs={[
          { title: "Designsystemet", to: "/" },
          { title: "Grunnleggende", to: "/grunnleggende/" },
        ]}
        heading={<>Designtokens</>}
        leadParagraph="Designtokens er verdier koblet til et navn, og sørger for at ting blir
          likt på tvers av design, utvikling, og tjenester."
        className={clsx(indexStyle.index__hero, moduleStyle.tokens__hero)}
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
            headingText="Hva er designtokens?"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph variant="lead" className="sds-paragraph--max-width">
                Designtokens er små byggeklosser bestående av designattributter
                som farger, typografi, størrelser, avstander, former osv. De er
                ikke begrenset til en spesifikk teknologi eller et
                designverktøy, men er fleksible variabler som kan benyttes av
                alle. Ved å bruke designtokens sørger vi for at både designere
                og utviklere arbeider etter de samme reglene og retningslinjene.
                Dette forenkler vedlikeholdet av designet og sikrer en helhetlig
                visuell fremstilling på tvers av produkter.
              </Paragraph>

              <Paragraph
                variant="small"
                modifier="emphasis"
                className="sds-paragraph--max-width"
              >
                Fra{" "}
                <Link href="https://aksel.nav.no" isExternal>
                  aksel.nav.no
                </Link>
              </Paragraph>
            </div>
          </Section>

          <Section
            headingText="Designtokens i Figma"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                Vi bruker den innebygde funksjonaliteten for designtokens som
                Figma kaller “variables”. Denne funksjonaliteten er fremdeles i
                beta-versjon og under utvikling, men det gir oss en større
                sikkerhet i forhold til kompatibilitet og mindre avhengigheter.
              </Paragraph>
            </div>
          </Section>

          <Section
            headingText="Collections og modes"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                I Figma brukes terminologien collections og modes om å gruppere
                variabler i sett (collections) og å kunne gi et token flere
                verdier (mode, f.eks. dark- og light-mode).
              </Paragraph>

              <Paragraph className="sds-paragraph--max-width">
                Vi har gruppert et sett tokens i “Base”-collection som kun er
                tilgjengelig i selve bibliotek-filen, da disse ikke skal brukes
                direkte men inneholder de grunnleggende verdiene de andre
                tokensene baserer seg på.
              </Paragraph>

              <Paragraph className="sds-paragraph--max-width">
                De andre tokensene er gruppert i farger (Color) og
                størrelser/avstander (Space) slik at man enkelt kan bytte mellom
                de forskjellige modusene de inneholder (dark / light, og desktop
                / tablet / mobile).
              </Paragraph>
            </div>
          </Section>

          <Section
            headingText="Navngiving"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <div className={moduleStyle.tokens__tagList}>
                <div className={moduleStyle.tokens__tagContainer}>
                  <div
                    className={clsx(
                      moduleStyle.tokens__tag,
                      "sds-typography-body--code",
                    )}
                  >
                    sds
                  </div>
                  <div className="sds-typography-body--small">Prefix</div>
                </div>

                <div className={moduleStyle.tokens__tagContainer}>
                  <div
                    className={clsx(
                      moduleStyle.tokens__tag,
                      "sds-typography-body--code",
                    )}
                  >
                    color
                  </div>
                  <div className="sds-typography-body--small">Type</div>
                </div>

                <div className={moduleStyle.tokens__tagContainer}>
                  <div
                    className={clsx(
                      moduleStyle.tokens__tag,
                      "sds-typography-body--code",
                    )}
                  >
                    brand
                  </div>
                  <div className="sds-typography-body--small">Category</div>
                </div>

                <div className={moduleStyle.tokens__tagContainer}>
                  <div
                    className={clsx(
                      moduleStyle.tokens__tag,
                      "sds-typography-body--code",
                    )}
                  >
                    primary
                  </div>
                  <div className="sds-typography-body--small">Name</div>
                </div>

                <div className={moduleStyle.tokens__tagContainer}>
                  <div
                    className={clsx(
                      moduleStyle.tokens__tag,
                      "sds-typography-body--code",
                    )}
                  >
                    subtle
                  </div>
                  <div className="sds-typography-body--small">Variant</div>
                </div>
              </div>

              <Paragraph className="sds-paragraph--max-width">
                Navngivingen på tokens er forsøkt satt opp slik at de er
                selvforklarende om hvilken type de er og hva de skal brukes til.
                Som en tommelfingerregel går det fra generellt -&gt; spesifikt i
                leseretningen.
              </Paragraph>

              <Heading3 variant="paragraph">Eksempel:</Heading3>

              <Paragraph className="sds-paragraph--max-width">
                <Badge visibility="strong" icon={<Nut />}>
                  --sds-color-interaction-primary-transparent-default
                </Badge>
              </Paragraph>

              <Paragraph className="sds-paragraph--max-width">
                Dette er et token fra Sikt Design System (sds), en farge (color)
                som brukes til interaksjoner (interaction), og er basert på
                hovedfargen (primary), med gjennomsiktighet (transparent) i
                standard variasjon (default).
              </Paragraph>
            </div>
          </Section>

          <Section
            headingText="Mer info"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Heading3 variant="small">Lenker</Heading3>
              <Paragraph className="sds-paragraph--max-width">
                W3C Design tokens Community Group{" "}
                <Link href="https://tr.designtokens.org/" isExternal>
                  https://tr.designtokens.org/
                </Link>
              </Paragraph>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
};

export default DesigntokensPage;
