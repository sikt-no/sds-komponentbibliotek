import { PageProps } from "gatsby";
import { clsx } from "clsx/lite";
import { Hero } from "../../../components/Hero";
import * as indexStyle from "../../index.module.css";
import * as style from "../index.module.css";
import * as moduleStyle from "./index.module.css";
import { Paragraph, Heading3 } from "@sikt/sds-core";
import { Section } from "@sikt/sds-section";
import { Notice } from "../../../components/Notice";
import { SubNav } from "../../../components/grunnleggende/SubNav";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@sikt/sds-table";
import * as tokens from "@sikt/sds-tokens";
import * as tablet from "@sikt/sds-tokens/dist/js/tokens.tablet.js";
import * as desktop from "@sikt/sds-tokens/dist/js/tokens.desktop.js";

export { Head } from "../../../components/Head";

const TypografiPage: React.FC<PageProps> = ({ location }) => {
  return (
    <>
      <Hero
        breadcrumbs={[
          { title: "Designsystemet", to: "/" },
          { title: "Grunnleggende", to: "/grunnleggende/" },
        ]}
        heading={<>Typografi</>}
        leadParagraph="Typografisystemet skal ivareta lesbarhet og utseende på tvers av
          skjermstørrelser og tjenester."
        className={clsx(indexStyle.index__hero, moduleStyle.typografi__hero)}
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
            headingText="Fontfamilier"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Heading3 variant="paragraph">Profilfont</Heading3>

              <Paragraph className="sds-paragraph--max-width">
                Profilfonten til Sikt er Haffer, laget av Displaay Type Foundry.
              </Paragraph>

              <Paragraph
                className={clsx(
                  "sds-typography-heading--huge",
                  "sds-paragraph--max-width",
                )}
              >
                Haffer Hamburge&shy;fonstiv
              </Paragraph>

              <Heading3 variant="paragraph">Supplerende</Heading3>

              <Paragraph className="sds-paragraph--max-width">
                Hvis man ikke har Haffer tilgjengelig kan man bruke Arial
              </Paragraph>

              <Paragraph
                className={clsx(
                  moduleStyle.typografi__fontArial,
                  "sds-typography-heading--huge",
                  "sds-paragraph--max-width",
                )}
              >
                Arial Hamburge&shy;fonstiv
              </Paragraph>

              <Paragraph className="sds-paragraph--max-width">
                Til visning av for eksempel kode og lignende bruker vi Courier
                New
              </Paragraph>

              <Notice heading="NB!">
                Dette er ikke avgjort, bare valgt ut ifra dekningsgrad.
              </Notice>

              <Paragraph
                className={clsx(
                  moduleStyle.typografi__fontCourier,
                  "sds-typography-heading--huge",
                  "sds-paragraph--max-width",
                )}
              >
                Courier New Hamburge&shy;fonstiv
              </Paragraph>
            </div>
          </Section>

          <Section
            headingText="Overskrifter (Heading)"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                En overskrift skal gi en idé innholdet i en tekst som følger.
                Den kan tillegges en funksjon som blikkfang og for eksempel være
                informativ, tankevekkende eller provokativ, alt etter hvilken
                sammenheng den står i.
              </Paragraph>

              <Paragraph className="sds-paragraph--max-width">
                De tre største overskriftsstilene endrer størrelse ut ifra
                skjermstørrelsen.
              </Paragraph>

              <Table
                caption="Typografi for overskrifter"
                className={moduleStyle.typografi__fontTable}
              >
                <TableHead>
                  <TableRow>
                    <TableHeader>Navn</TableHeader>
                    <TableHeader data-color-scheme="light">
                      Verdi @ mobil
                    </TableHeader>
                    <TableHeader data-color-scheme="light">
                      Verdi @ nettbrett
                    </TableHeader>
                    <TableHeader data-color-scheme="light">
                      Verdi @ datamaskin
                    </TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    "huge",
                    "xlarge",
                    "large",
                    "medium",
                    "small",
                    "paragraph",
                    "overline",
                  ].map((item) => {
                    const fontSize =
                      tokens.default.typography.heading[`fontsize-${item}`]
                        .value;
                    const lineHeight =
                      tokens.default.typography.heading[`lineheight-${item}`]
                        .value;

                    const tabletFontSize =
                      tablet.default.typography.heading[`fontsize-${item}`]
                        ?.value ?? fontSize;
                    const tabletLineHeight =
                      tablet.default.typography.heading[`lineheight-${item}`]
                        ?.value ?? lineHeight;

                    const desktopFontSize =
                      desktop.default.typography.heading[`fontsize-${item}`]
                        ?.value ?? tabletFontSize;
                    const desktopLineHeight =
                      desktop.default.typography.heading[`lineheight-${item}`]
                        ?.value ?? tabletLineHeight;
                    return (
                      <TableRow key={item}>
                        <TableCell data-th="Navn">{item}</TableCell>
                        <TableCell
                          data-th="Verdi @ mobil"
                          data-color-scheme="light"
                        >
                          <span
                            className={`sds-typography-heading--${item}`}
                            style={{
                              fontSize,
                              lineHeight,
                            }}
                          >
                            Aa
                          </span>
                        </TableCell>
                        <TableCell
                          data-th="Verdi @ nettbrett"
                          data-color-scheme="light"
                        >
                          <span
                            className={`sds-typography-heading--${item}`}
                            style={{
                              fontSize: tabletFontSize,
                              lineHeight: tabletLineHeight,
                            }}
                          >
                            Aa
                          </span>
                        </TableCell>
                        <TableCell
                          data-th="Verdi @ datamaskin"
                          data-color-scheme="light"
                        >
                          <span
                            className={`sds-typography-heading--${item}`}
                            style={{
                              fontSize: desktopFontSize,
                              lineHeight: desktopLineHeight,
                            }}
                          >
                            Aa
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </Section>

          <Section
            headingText="Brødtekst (Body)"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                Brødtekst er den vanlige løpende teksten.
              </Paragraph>

              <Table
                caption="Typografi for brødtekst"
                className={moduleStyle.typografi__fontTable}
              >
                <TableHead>
                  <TableRow>
                    <TableHeader>Navn</TableHeader>
                    <TableHeader data-color-scheme="light">Verdi</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    "lead",
                    "large",
                    "regular",
                    "small",
                    "emphasis",
                    "strong",
                    "quote",
                    "code",
                  ].map((item) => {
                    return (
                      <TableRow key={item}>
                        <TableCell data-th="Navn">{item}</TableCell>
                        <TableCell data-th="Verdi" data-color-scheme="light">
                          <span className={`sds-typography-body--${item}`}>
                            Aa
                          </span>
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

export default TypografiPage;
