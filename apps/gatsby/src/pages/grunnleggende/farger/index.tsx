import { PageProps } from "gatsby";
import { Hero } from "../../../components/Hero";
import { clsx } from "clsx/lite";
import * as indexStyle from "../../index.module.css";
import * as style from "../index.module.css";
import * as moduleStyle from "./index.module.css";
import { Link, Paragraph, Heading3 } from "@sikt/sds-core";
import { Section } from "@sikt/sds-section";
import { Notice } from "../../../components/Notice";
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
import * as tokens from "@sikt/sds-tokens";
import * as dark from "@sikt/sds-tokens/dist/js/color.dark.js";
import { Swatch } from "../../../components/Swatch";
import { SubNav } from "../../../components/grunnleggende/SubNav";
import { ButtonLink } from "@sikt/sds-button";

export { Head } from "../../../components/Head";

const FargerPage: React.FC<PageProps> = ({ location }) => {
  return (
    <>
      <Hero
        breadcrumbs={[
          { title: "Designsystem", to: "/" },
          { title: "Grunnleggende", to: "/grunnleggende/" },
        ]}
        heading={<>Fargesystem</>}
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
            headingText="Merkevare (Color / Brand)"
            className={style.grunnleggende__sdsSection}
            callToAction={
              <ButtonLink
                variant="transparent"
                icon={<FigmaLogo />}
                href="https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=7849-9188&t=4xtxvL1BGv6sRmM5-4"
              >
                Se i Figma
              </ButtonLink>
            }
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-sikt-u-max-width-full">
                Merkevarefargene er basert på Sikt sin visuelle profil og
                merkevare, og fungerer som basis for andre farger i
                designsystemet.
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
                  {Object.entries(tokens.default.color.brand).map(
                    (token, index) => {
                      return Object.entries(token[1]).map(
                        (subtoken, subindex) => {
                          return (
                            <TableRow key={subtoken[1].name}>
                              <TableCell data-th="Token">
                                <Badge visibility="strong" icon={<Nut />}>
                                  {`--sds-${Object.values(
                                    subtoken[1].path,
                                  ).join("-")}`}
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
                                      dark.default.color.brand[token[0]]?.[
                                        subtoken[0]
                                      ].value ?? subtoken[1].value
                                    }
                                  />
                                  <Badge>
                                    {dark.default.color.brand[token[0]]?.[
                                      subtoken[0]
                                    ].value ?? subtoken[1].value}
                                  </Badge>
                                </div>
                              </TableCell>
                            </TableRow>
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
            headingText="Interaksjoner (Color / Interaction)"
            className={style.grunnleggende__sdsSection}
            callToAction={
              <ButtonLink
                variant="transparent"
                icon={<FigmaLogo />}
                href="https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=7968-8516&t=4xtxvL1BGv6sRmM5-4"
              >
                Se i Figma
              </ButtonLink>
            }
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-sikt-u-max-width-full">
                Interaksjonsfargene krever at man har tilgjengelige farger for
                forskjellige tilstander, som for eksempel når elementet blir
                trykket på.
              </Paragraph>

              <Paragraph className="sds-sikt-u-max-width-full">
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
                  {Object.entries(tokens.default.color.interaction).map(
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
                                                dark.default.color.interaction,
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
                                              dark.default.color.interaction,
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
                href="https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=7899-5888&t=4xtxvL1BGv6sRmM5-4"
              >
                Se i Figma
              </ButtonLink>
            }
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-sikt-u-max-width-full">
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
                  {Object.entries(tokens.default.color.support).map(
                    (token, index) => {
                      return Object.entries(token[1]).map(
                        (subtoken, subindex) => {
                          return (
                            <TableRow key={subtoken[1].name}>
                              <TableCell data-th="Token">
                                <Badge visibility="strong" icon={<Nut />}>
                                  {`--sds-${Object.values(
                                    subtoken[1].path,
                                  ).join("-")}`}
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
                                      dark.default.color.support[token[0]]?.[
                                        subtoken[0]
                                      ].value ?? subtoken[1].value
                                    }
                                  />
                                  <Badge>
                                    {dark.default.color.support[token[0]]?.[
                                      subtoken[0]
                                    ].value ?? subtoken[1].value}
                                  </Badge>
                                </div>
                              </TableCell>
                            </TableRow>
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
            headingText="Layout (Color / Layout)"
            className={style.grunnleggende__sdsSection}
            callToAction={
              <ButtonLink
                variant="transparent"
                icon={<FigmaLogo />}
                href="https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=7849-9513&t=4xtxvL1BGv6sRmM5-4"
              >
                Se i Figma
              </ButtonLink>
            }
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-sikt-u-max-width-full">
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
                  {Object.entries(tokens.default.color.layout).map(
                    (token, index) => {
                      return Object.entries(token[1]).map(
                        (subtoken, subindex) => {
                          return (
                            <TableRow key={subtoken[1].name}>
                              <TableCell data-th="Token">
                                <Badge visibility="strong" icon={<Nut />}>
                                  {`--sds-${Object.values(
                                    subtoken[1].path,
                                  ).join("-")}`}
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
                                      dark.default.color.layout[token[0]]?.[
                                        subtoken[0]
                                      ].value
                                    }
                                  />
                                  <Badge>
                                    {
                                      dark.default.color.layout[token[0]]?.[
                                        subtoken[0]
                                      ].value
                                    }
                                  </Badge>
                                </div>
                              </TableCell>
                            </TableRow>
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
            headingText="Tekstfarger (Color / Text)"
            className={style.grunnleggende__sdsSection}
            callToAction={
              <ButtonLink
                variant="transparent"
                icon={<FigmaLogo />}
                href="https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=7863-9761&t=4xtxvL1BGv6sRmM5-4"
              >
                Se i Figma
              </ButtonLink>
            }
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-sikt-u-max-width-full">
                Farger som brukes til tekst. Må følge WCAG-kravene til kontrast.
              </Paragraph>

              <Paragraph className="sds-sikt-u-max-width-full">
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
                  {Object.entries(tokens.default.color.text).map(
                    (token, index) => {
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
                                  Object.entries(dark.default.color.text)[
                                    index
                                  ][1].value ?? subtoken[1].value
                                }
                              />
                              <Badge>
                                {Object.entries(dark.default.color.text)[
                                  index
                                ][1].value ?? subtoken[1].value}
                              </Badge>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    },
                  )}
                </TableBody>
              </Table>
            </div>
          </Section>

          <Section
            headingText="Skyggefarger (Color / Shadow)"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-sikt-u-max-width-full">
                Farger som brukes til skygger.
              </Paragraph>

              <Table
                caption="Designtokens for skyggefarger"
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
                  {Object.entries(tokens.default.color.shadow.elevated).map(
                    (token, index) => {
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
                                  Object.entries(
                                    dark.default.color.shadow.elevated,
                                  )[index][1].value ?? subtoken[1].value
                                }
                              />
                              <Badge>
                                {Object.entries(
                                  dark.default.color.shadow.elevated,
                                )[index][1].value ?? subtoken[1].value}
                              </Badge>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    },
                  )}
                </TableBody>
              </Table>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
};

export default FargerPage;
