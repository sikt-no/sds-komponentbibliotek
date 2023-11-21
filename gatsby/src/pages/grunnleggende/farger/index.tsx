import React from "react";
import { PageProps } from "gatsby";
import { Hero } from "../../../components/Hero";
import clsx from "clsx";
import * as indexStyle from "../../index.module.css";
import * as style from "../index.module.css";
import * as moduleStyle from "./index.module.css";
import { Link, Paragraph } from "@sikt/sds-core";
import { Section } from "@sikt/sds-section";
import { Notice } from "../../../components/Notice";
import { Heading3 } from "@sikt/sds-core/components/Heading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@sikt/sds-table";
import { Badge } from "@sikt/sds-badge";
import { FigmaLogo, Nut } from "@phosphor-icons/react";
import * as tokens from "@sikt/sds-tokens/dist/js/tokens.js";
import * as dark from "@sikt/sds-tokens/dist/js/color.dark.js";
import { Swatch } from "../../../components/Swatch";
import { SubNav } from "../../../components/SubNav";
import { ButtonLink } from "@sikt/sds-button";

export { Head } from "../../../components/Head";

const DesignTokensPage: React.FC<PageProps> = ({ location }) => {
  return (
    <>
      <Hero
        breadcrumbs={[
          { title: "Komponentbiblioteket", to: "/" },
          { title: "Gunnleggende", to: "/grunnleggende/" },
        ]}
        heading={<>Fargesystem</>}
        leadParagraph="For å sikre likt utseende på tvers av løsninger og grensesnitt har vi
          definert et sett med størrelser og avstander som design tokens."
        className={clsx(indexStyle.index__hero, moduleStyle.farger__hero)}
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
            headingText="Fargemodell"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <div>
                <img
                  src="/images/grunnleggende/farger/fargemodell.png"
                  alt="Bilde på fargemodell"
                />
              </div>

              <Paragraph variant="lead" className="sds-paragraph--max-width">
                HSL beskriver fargen som punkter i en sylinder hvor aksen går
                fra svart på bunnen til hvitt på toppen. Gråtonene ligger mellom
                dem.
              </Paragraph>

              <Paragraph
                variant="small"
                modifier="emphasis"
                className="sds-paragraph--max-width"
              >
                <Link href="https://no.wikipedia.org/wiki/HSL">
                  https://no.wikipedia.org/wiki/HSL
                </Link>
              </Paragraph>

              <Paragraph className="sds-paragraph--max-width">
                Fargene i komponentbiblioteket er satt opp i HSL-modellen (Hue,
                Saturation, Lightness) for å enkelt lage fargeskalaer basert på
                en enkelt farge. For eksempel kan man generere
                interaksjonsfarger basert på en profilfarge ved å legge til
                eller trekke fra lysstyrkeverdien (lightness).
              </Paragraph>
            </div>
          </Section>

          <Section
            headingText="Grunnfarger (Base / Color)"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                Grunnfargene er definert ved å ta HSL-verdiene fra fargene i
                profilmanualen som grunnlag for å genere fargeskalaer i
                lysstyrke (lightness) og gjennomsiktighet (alpha). For lysstyrke
                er skalaen definert fra 0 til 100 i intervaller på 5, mens for
                gjennomsiktighet er det 0 til 1 i stegene 0.1-0.25-0.5-0.75-1
                ganget med 100.
              </Paragraph>

              <Paragraph className="sds-paragraph--max-width">
                Navnet på tokenet beskriver verdiene:
              </Paragraph>

              <Paragraph modifier="code" className="sds-paragraph--max-width">
                fargenavn-lysstyrke-gjennomsiktighet
              </Paragraph>

              <Paragraph modifier="code" className="sds-paragraph--max-width">
                colorname-lightness-alpha
              </Paragraph>

              <Notice heading="NB!">
                Dette er kun et utdrag for å illustrere hvordan skalaene er satt
                opp.
              </Notice>

              <Heading3 variant="small">Palett</Heading3>

              <Table caption="Designtokens for fargepalett">
                <TableHead>
                  <TableRow>
                    <TableHeader>Swatch</TableHeader>
                    <TableHeader>Navn</TableHeader>
                    <TableHeader>Verdi</TableHeader>
                    <TableHeader>Token</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell data-th="Swatch">
                      <Swatch color="#7351FB" />
                    </TableCell>
                    <TableCell data-th="Navn">Purple 65 100</TableCell>
                    <TableCell data-th="Verdi">
                      hsla(252, 95%, 65% / 1)
                    </TableCell>
                    <TableCell data-th="Token">
                      <Badge visibility="strong" icon={<Nut />}>
                        --sds-base-color-purple-65-100
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-th="Swatch">
                      <Swatch color="#808080" />
                    </TableCell>
                    <TableCell data-th="Navn">Neutral 50 100</TableCell>
                    <TableCell data-th="Verdi">hsla(0, 0%, 50% / 1)</TableCell>
                    <TableCell data-th="Token">
                      <Badge visibility="strong" icon={<Nut />}>
                        --sds-base-color-neutral-50-100
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-th="Swatch">
                      <Swatch color="#0B7551" />
                    </TableCell>
                    <TableCell data-th="Navn">Green 25 100</TableCell>
                    <TableCell data-th="Verdi">
                      hsla(160, 83%, 25% / 1)
                    </TableCell>
                    <TableCell data-th="Token">
                      <Badge visibility="strong" icon={<Nut />}>
                        --sds-base-color-green-25-100
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-th="Swatch">
                      <Swatch color="#CC0070" />
                    </TableCell>
                    <TableCell data-th="Navn">Red 40 100</TableCell>
                    <TableCell data-th="Verdi">
                      hsla(327, 100%, 40% / 1)
                    </TableCell>
                    <TableCell data-th="Token">
                      <Badge visibility="strong" icon={<Nut />}>
                        --sds-base-color-red-40-100
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-th="Swatch">
                      <Swatch color="#FFBB00" />
                    </TableCell>
                    <TableCell data-th="Navn">Yellow 50 100</TableCell>
                    <TableCell data-th="Verdi">
                      hsla(44, 100%, 50% / 1)
                    </TableCell>
                    <TableCell data-th="Token">
                      <Badge visibility="strong" icon={<Nut />}>
                        --sds-base-color-yellow-50-100
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-th="Swatch">
                      <Swatch color="#0062FF" />
                    </TableCell>
                    <TableCell data-th="Navn">Blue 50 100</TableCell>
                    <TableCell data-th="Verdi">
                      hsla(217, 100%, 50% / 1)
                    </TableCell>
                    <TableCell data-th="Token">
                      <Badge visibility="strong" icon={<Nut />}>
                        --sds-base-color-blue-50-100
                      </Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Heading3 variant="small">Skala - Alpha</Heading3>

              <Table caption="Designtokens for fargeskala, alpha">
                <TableHead>
                  <TableRow>
                    <TableHeader>Swatch</TableHeader>
                    <TableHeader>Navn</TableHeader>
                    <TableHeader>Verdi</TableHeader>
                    <TableHeader>Token</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell data-th="Swatch">
                      <Swatch color="#7351FB" />
                    </TableCell>
                    <TableCell data-th="Navn">
                      Purple 65{" "}
                      <span className="sds-typography-body--strong">100</span>
                    </TableCell>
                    <TableCell data-th="Verdi">
                      hsla(252, 95%, 65% /{" "}
                      <span className="sds-typography-body--strong">1</span>)
                    </TableCell>
                    <TableCell data-th="Token">
                      <Badge visibility="strong" icon={<Nut />}>
                        --sds-base-color-purple-65-100
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-th="Swatch">
                      <Swatch color="#7351FBBF" />
                    </TableCell>
                    <TableCell data-th="Navn">
                      Purple 65{" "}
                      <span className="sds-typography-body--strong">75</span>
                    </TableCell>
                    <TableCell data-th="Verdi">
                      hsla(252, 95%, 65% /{" "}
                      <span className="sds-typography-body--strong">.75</span>)
                    </TableCell>
                    <TableCell data-th="Token">
                      <Badge visibility="strong" icon={<Nut />}>
                        --sds-base-color-purple-65-75
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-th="Swatch">
                      <Swatch color="#7351FB80" />
                    </TableCell>
                    <TableCell data-th="Navn">
                      Purple 65{" "}
                      <span className="sds-typography-body--strong">50</span>
                    </TableCell>
                    <TableCell data-th="Verdi">
                      hsla(252, 95%, 65% /{" "}
                      <span className="sds-typography-body--strong">.5</span>)
                    </TableCell>
                    <TableCell data-th="Token">
                      <Badge visibility="strong" icon={<Nut />}>
                        --sds-base-color-purple-65-50
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-th="Swatch">
                      <Swatch color="#7251FB40" />
                    </TableCell>
                    <TableCell data-th="Navn">
                      Purple 65{" "}
                      <span className="sds-typography-body--strong">25</span>
                    </TableCell>
                    <TableCell data-th="Verdi">
                      hsla(252, 95%, 65% /{" "}
                      <span className="sds-typography-body--strong">.25</span>)
                    </TableCell>
                    <TableCell data-th="Token">
                      <Badge visibility="strong" icon={<Nut />}>
                        --sds-base-color-purple-65-25
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-th="Swatch">
                      <Swatch color="#7351FB1A" />
                    </TableCell>
                    <TableCell data-th="Navn">
                      Purple 65{" "}
                      <span className="sds-typography-body--strong">10</span>
                    </TableCell>
                    <TableCell data-th="Verdi">
                      hsla(252, 95%, 65% /{" "}
                      <span className="sds-typography-body--strong">.1</span>)
                    </TableCell>
                    <TableCell data-th="Token">
                      <Badge visibility="strong" icon={<Nut />}>
                        --sds-base-color-purple-65-10
                      </Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Heading3 variant="small">Skala - Lightness</Heading3>

              <Table caption="Designtokens for fargesakla, lightness">
                <TableHead>
                  <TableRow>
                    <TableHeader>Swatch</TableHeader>
                    <TableHeader>Navn</TableHeader>
                    <TableHeader>Verdi</TableHeader>
                    <TableHeader>Token</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell data-th="Swatch">
                      <Swatch color="#AF9CFC" />
                    </TableCell>
                    <TableCell data-th="Navn">
                      Purple{" "}
                      <span className="sds-typography-body--strong">80</span>{" "}
                      100
                    </TableCell>
                    <TableCell data-th="Verdi">
                      hsla(252, 95%,{" "}
                      <span className="sds-typography-body--strong">80%</span> /
                      1)
                    </TableCell>
                    <TableCell data-th="Token">
                      <Badge visibility="strong" icon={<Nut />}>
                        --sds-base-color-purple-80-100
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-th="Swatch">
                      <Swatch color="#9B83FC" />
                    </TableCell>
                    <TableCell data-th="Navn">
                      Purple{" "}
                      <span className="sds-typography-body--strong">75</span>{" "}
                      100
                    </TableCell>
                    <TableCell data-th="Verdi">
                      hsla(252, 95%,{" "}
                      <span className="sds-typography-body--strong">75%</span> /
                      1)
                    </TableCell>
                    <TableCell data-th="Token">
                      <Badge visibility="strong" icon={<Nut />}>
                        --sds-base-color-purple-75-100
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-th="Swatch">
                      <Swatch color="#876AFB" />
                    </TableCell>
                    <TableCell data-th="Navn">
                      Purple{" "}
                      <span className="sds-typography-body--strong">70</span>{" "}
                      100
                    </TableCell>
                    <TableCell data-th="Verdi">
                      hsla(252, 95%,{" "}
                      <span className="sds-typography-body--strong">70%</span> /
                      1)
                    </TableCell>
                    <TableCell data-th="Token">
                      <Badge visibility="strong" icon={<Nut />}>
                        --sds-base-color-purple-70-100
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-th="Swatch">
                      <Swatch color="#7351FB" />
                    </TableCell>
                    <TableCell data-th="Navn">
                      Purple{" "}
                      <span className="sds-typography-body--strong">65</span>{" "}
                      100
                    </TableCell>
                    <TableCell data-th="Verdi">
                      hsla(252, 95%,{" "}
                      <span className="sds-typography-body--strong">65%</span> /
                      1)
                    </TableCell>
                    <TableCell data-th="Token">
                      <Badge visibility="strong" icon={<Nut />}>
                        --sds-base-color-purple-65-100
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-th="Swatch">
                      <Swatch color="#5F38FA" />
                    </TableCell>
                    <TableCell data-th="Navn">
                      Purple{" "}
                      <span className="sds-typography-body--strong">60</span>{" "}
                      100
                    </TableCell>
                    <TableCell data-th="Verdi">
                      hsla(252, 95%,{" "}
                      <span className="sds-typography-body--strong">60%</span> /
                      1)
                    </TableCell>
                    <TableCell data-th="Token">
                      <Badge visibility="strong" icon={<Nut />}>
                        --sds-base-color-purple-60-100
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-th="Swatch">
                      <Swatch color="#4B1FF9" />
                    </TableCell>
                    <TableCell data-th="Navn">
                      Purple{" "}
                      <span className="sds-typography-body--strong">55</span>{" "}
                      100
                    </TableCell>
                    <TableCell data-th="Verdi">
                      hsla(252, 95%,{" "}
                      <span className="sds-typography-body--strong">55%</span> /
                      1)
                    </TableCell>
                    <TableCell data-th="Token">
                      <Badge visibility="strong" icon={<Nut />}>
                        --sds-base-color-purple-55-100
                      </Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Section>

          <Section
            headingText="Semantiske farger"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                De semantiske fargene er de som faktisk brukes i design og
                utvikling. Disse fargene referer til grunnfargene, og har
                forskjellige verdier basert på modus (f.eks. light- og
                dark-mode).
              </Paragraph>

              <Paragraph className="sds-paragraph--max-width">
                Navnet på tokenet beskriver konteksten og bruken.
              </Paragraph>

              <Heading3 variant="paragraph">Kontrast-krav</Heading3>

              <Heading3 variant="paragraph">
                Strong - Subtle - Transparent
              </Heading3>
            </div>
          </Section>

          <Section
            headingText="Merkevare (Color / Brand)"
            className={style.grunnleggende__sdsSection}
            callToAction={
              <ButtonLink
                variant="transparent"
                icon={<FigmaLogo />}
                href="https://www.figma.com/file/6AVtxjDULlUdl9F4JEHAfv/Komponentbibliotek-v1.0?type=design&node-id=7849-9188&mode=design&t=luqGyDtXZMLzJTFV-4"
              >
                Vis i Figma
              </ButtonLink>
            }
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                Merkevarefargene er basert på Sikt sin visuelle profil og
                merkevare, og fungerer som basis for andre farger i
                komponentbiblioteket.
              </Paragraph>

              <Table
                caption="Designtokens for tilleggsfarger"
                className={moduleStyle.farger__swatchTable}
              >
                <TableHead>
                  <TableRow>
                    <TableHeader>Token</TableHeader>
                    <TableHeader data-color-scheme="light">
                      Verdi @ light-mode
                    </TableHeader>
                    <TableHeader data-color-scheme="dark">
                      Verdi @ dark-mode
                    </TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(tokens.color.brand).map((token, index) => {
                    return Object.entries(token[1]).map(
                      (subtoken, subindex) => {
                        return (
                          <TableRow key={subtoken[1].name}>
                            <TableCell data-th="Token">
                              <Badge visibility="strong" icon={<Nut />}>
                                {`--sds-${Object.values(subtoken[1].path).join(
                                  "-",
                                )}`}
                              </Badge>
                            </TableCell>
                            <TableCell
                              data-th="Verdi @ light-mode"
                              data-color-scheme="light"
                            >
                              <div className={moduleStyle.farger__flex}>
                                <Swatch color={subtoken[1].value} />
                                <Badge>{subtoken[1].value}</Badge>
                              </div>
                            </TableCell>
                            <TableCell
                              data-th="Verdi @ dark-mode"
                              data-color-scheme="dark"
                            >
                              <div className={moduleStyle.farger__flex}>
                                <Swatch
                                  color={
                                    dark.color.brand?.[token[0]]?.[subtoken[0]]
                                      .value ?? subtoken[1].value
                                  }
                                />
                                <Badge>
                                  {dark.color.brand?.[token[0]]?.[subtoken[0]]
                                    .value ?? subtoken[1].value}
                                </Badge>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      },
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </Section>

          <Section
            headingText="Interaksjoner (Color / Interaction)"
            className={style.grunnleggende__sdsSection}
            callToAction={
              <ButtonLink
                variant="transparent"
                icon={<FigmaLogo />}
                href="https://www.figma.com/file/6AVtxjDULlUdl9F4JEHAfv/Komponentbibliotek-v1.0?type=design&node-id=7968-8516&mode=design&t=luqGyDtXZMLzJTFV-4"
              >
                Vis i Figma
              </ButtonLink>
            }
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                Interaksjonsfargene krever at man har tilgjengelige farger for
                forskjellige tilstander, som for eksempel når elementet blir
                trykket på.
              </Paragraph>

              <Paragraph className="sds-paragraph--max-width">
                Strong-farger mørkere i light-mode og lysere i dark-mode, og
                flytter seg ett hakk på lightness-skalaen per steg i
                interaksjonen. Subtle- og transparent-farger blir mindre
                gjennomsiktig.
              </Paragraph>

              <Table
                caption="Designtokens for tilleggsfarger"
                className={moduleStyle.farger__swatchTable}
              >
                <TableHead>
                  <TableRow>
                    <TableHeader>Token</TableHeader>
                    <TableHeader data-color-scheme="light">
                      Verdi @ light-mode
                    </TableHeader>
                    <TableHeader data-color-scheme="dark">
                      Verdi @ dark-mode
                    </TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(tokens.color.interaction).map(
                    (token, index) => {
                      return Object.entries(token[1]).map(
                        (subtoken, subindex) => {
                          return Object.entries(subtoken[1]).map(
                            (subsubtoken, subsubindex) => {
                              return (
                                <TableRow key={subsubtoken[1].name}>
                                  <TableCell data-th="Token">
                                    <Badge visibility="strong" icon={<Nut />}>
                                      {`--sds-${Object.values(
                                        subsubtoken[1].path,
                                      ).join("-")}`}
                                    </Badge>
                                  </TableCell>
                                  <TableCell
                                    data-th="Verdi @ light-mode"
                                    data-color-scheme="light"
                                  >
                                    <div className={moduleStyle.farger__flex}>
                                      <Swatch color={subsubtoken[1].value} />
                                      <Badge>{subsubtoken[1].value}</Badge>
                                    </div>
                                  </TableCell>
                                  <TableCell
                                    data-th="Verdi @ dark-mode"
                                    data-color-scheme="dark"
                                  >
                                    <div className={moduleStyle.farger__flex}>
                                      <Swatch
                                        color={
                                          Object.entries(
                                            Object.entries(
                                              Object.entries(
                                                dark.color.interaction,
                                              )[index][1],
                                            )[subindex][1],
                                          )[subsubindex][1].value ??
                                          subsubtoken[1].value
                                        }
                                      />
                                      <Badge>
                                        {Object.entries(
                                          Object.entries(
                                            Object.entries(
                                              dark.color.interaction,
                                            )[index][1],
                                          )[subindex][1],
                                        )[subsubindex][1].value ??
                                          subsubtoken[1].value}
                                      </Badge>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              );
                            },
                          );
                        },
                      );
                    },
                  )}
                </TableBody>
              </Table>
            </div>
          </Section>

          <Section
            headingText="Tilleggsfarger (Color / Support)"
            className={style.grunnleggende__sdsSection}
            callToAction={
              <ButtonLink
                variant="transparent"
                icon={<FigmaLogo />}
                href="https://www.figma.com/file/6AVtxjDULlUdl9F4JEHAfv/Komponentbibliotek-v1.0?type=design&node-id=7899-5888&mode=design&t=luqGyDtXZMLzJTFV-4"
              >
                Vis i Figma
              </ButtonLink>
            }
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                Tilleggsfargene brukes til å understreke statuser, nivåer,
                grafer, osv.
              </Paragraph>

              <Table
                caption="Designtokens for tilleggsfarger"
                className={moduleStyle.farger__swatchTable}
              >
                <TableHead>
                  <TableRow>
                    <TableHeader>Token</TableHeader>
                    <TableHeader data-color-scheme="light">
                      Verdi @ light-mode
                    </TableHeader>
                    <TableHeader data-color-scheme="dark">
                      Verdi @ dark-mode
                    </TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(tokens.color.support).map((token, index) => {
                    return Object.entries(token[1]).map(
                      (subtoken, subindex) => {
                        return (
                          <TableRow key={subtoken[1].name}>
                            <TableCell data-th="Token">
                              <Badge visibility="strong" icon={<Nut />}>
                                {`--sds-${Object.values(subtoken[1].path).join(
                                  "-",
                                )}`}
                              </Badge>
                            </TableCell>
                            <TableCell
                              data-th="Verdi @ light-mode"
                              data-color-scheme="light"
                            >
                              <div className={moduleStyle.farger__flex}>
                                <Swatch color={subtoken[1].value} />
                                <Badge>{subtoken[1].value}</Badge>
                              </div>
                            </TableCell>
                            <TableCell
                              data-th="Verdi @ dark-mode"
                              data-color-scheme="dark"
                            >
                              <div className={moduleStyle.farger__flex}>
                                <Swatch
                                  color={
                                    dark.color.support?.[token[0]]?.[
                                      subtoken[0]
                                    ].value ?? subtoken[1].value
                                  }
                                />
                                <Badge>
                                  {dark.color.support?.[token[0]]?.[subtoken[0]]
                                    .value ?? subtoken[1].value}
                                </Badge>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      },
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </Section>

          <Section
            headingText="Layout (Color / Layout)"
            className={style.grunnleggende__sdsSection}
            callToAction={
              <ButtonLink
                variant="transparent"
                icon={<FigmaLogo />}
                href="https://www.figma.com/file/6AVtxjDULlUdl9F4JEHAfv/Komponentbibliotek-v1.0?type=design&node-id=7849-9513&mode=design&t=luqGyDtXZMLzJTFV-4"
              >
                Vis i Figma
              </ButtonLink>
            }
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                Farger som brukes til generelle deler av sider, som for eksempel
                bakgrunner og oppsettselementer.
              </Paragraph>

              <Table
                caption="Designtokens for layoutfarger"
                className={moduleStyle.farger__swatchTable}
              >
                <TableHead>
                  <TableRow>
                    <TableHeader>Token</TableHeader>
                    <TableHeader data-color-scheme="light">
                      Verdi @ light-mode
                    </TableHeader>
                    <TableHeader data-color-scheme="dark">
                      Verdi @ dark-mode
                    </TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(tokens.color.layout).map((token, index) => {
                    return Object.entries(token[1]).map(
                      (subtoken, subindex) => {
                        return (
                          <TableRow key={subtoken[1].name}>
                            <TableCell data-th="Token">
                              <Badge visibility="strong" icon={<Nut />}>
                                {`--sds-${Object.values(subtoken[1].path).join(
                                  "-",
                                )}`}
                              </Badge>
                            </TableCell>
                            <TableCell
                              data-th="Verdi @ light-mode"
                              data-color-scheme="light"
                            >
                              <div className={moduleStyle.farger__flex}>
                                <Swatch color={subtoken[1].value} />
                                <Badge>{subtoken[1].value}</Badge>
                              </div>
                            </TableCell>
                            <TableCell
                              data-th="Verdi @ dark-mode"
                              data-color-scheme="dark"
                            >
                              <div className={moduleStyle.farger__flex}>
                                <Swatch
                                  color={
                                    dark.color.layout?.[token[0]]?.[subtoken[0]]
                                      .value
                                  }
                                />
                                <Badge>
                                  {
                                    dark.color.layout?.[token[0]]?.[subtoken[0]]
                                      .value
                                  }
                                </Badge>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      },
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </Section>

          <Section
            headingText="Tekstfarger (Color / Text)"
            className={style.grunnleggende__sdsSection}
            callToAction={
              <ButtonLink
                variant="transparent"
                icon={<FigmaLogo />}
                href="https://www.figma.com/file/6AVtxjDULlUdl9F4JEHAfv/Komponentbibliotek-v1.0?type=design&node-id=7863-9761&mode=design&t=luqGyDtXZMLzJTFV-4"
              >
                Vis i Figma
              </ButtonLink>
            }
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                Farger som brukes til tekst. Må følge WCAG-kravene tiil
                kontrast.
              </Paragraph>

              <Paragraph className="sds-paragraph--max-width">
                "On_strong"-fargen brukes kun på elementer som er fargelagt med
                en "strong"-farge for å sørge for god nok kontrast mellom tekst
                og bakgrunn.
              </Paragraph>

              <Table
                caption="Designtokens for tekstfarger"
                className={moduleStyle.farger__swatchTable}
              >
                <TableHead>
                  <TableRow>
                    <TableHeader>Token</TableHeader>
                    <TableHeader data-color-scheme="light">
                      Verdi @ light-mode
                    </TableHeader>
                    <TableHeader data-color-scheme="dark">
                      Verdi @ dark-mode
                    </TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(tokens.color.text).map((token, index) => {
                    return (
                      <TableRow key={token[1].name}>
                        <TableCell data-th="Token">
                          <Badge visibility="strong" icon={<Nut />}>
                            {`--sds-${Object.values(token[1].path).join("-")}`}
                          </Badge>
                        </TableCell>
                        <TableCell
                          data-th="Verdi @ light-mode"
                          data-color-scheme="light"
                        >
                          <div className={moduleStyle.farger__flex}>
                            <Swatch color={token[1].value} />
                            <Badge>{token[1].value}</Badge>
                          </div>
                        </TableCell>
                        <TableCell
                          data-th="Verdi @ dark-mode"
                          data-color-scheme="dark"
                        >
                          <div className={moduleStyle.farger__flex}>
                            <Swatch
                              color={
                                Object.entries(dark.color.text)[index][1]
                                  .value ?? subtoken[1].value
                              }
                            />
                            <Badge>
                              {Object.entries(dark.color.text)[index][1]
                                .value ?? subtoken[1].value}
                            </Badge>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
};

export default DesignTokensPage;
