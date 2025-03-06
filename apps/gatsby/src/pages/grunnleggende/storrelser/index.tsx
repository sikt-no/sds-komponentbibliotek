import { PageProps } from "gatsby";
import { Hero } from "../../../components/Hero";
import { clsx } from "clsx/lite";
import * as indexStyle from "../../index.module.css";
import * as style from "../index.module.css";
import * as moduleStyle from "./index.module.css";
import { Paragraph } from "@sikt/sds-core";
import { Section } from "@sikt/sds-section";
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
import { Nut } from "@phosphor-icons/react";
import { Badge } from "@sikt/sds-badge";
import { Token } from "../../../components/Token";
import { SubNav } from "../../../components/grunnleggende/SubNav";

export { Head } from "../../../components/Head";

const StorrelserPage: React.FC<PageProps> = ({ location }) => {
  return (
    <>
      <Hero
        breadcrumbs={[
          { title: "Designsystem", to: "/" },
          { title: "Grunnleggende", to: "/grunnleggende/" },
        ]}
        heading={<>Størrelser</>}
        leadParagraph="For å sikre likt utseende på tvers av løsninger og grensesnitt har vi
          definert et sett med størrelser og avstander som design tokens."
        className={clsx(indexStyle.index__hero, moduleStyle.storrelser__hero)}
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
            headingText="Grunnstørrelser (Base / Size)"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                For å sikre at vi bruker de samme verdiene er det satt opp en
                skala med tallverdier som definerer de grunleggende størrelsene
                og avstandene som er i bruk.
              </Paragraph>

              <Paragraph className="sds-paragraph--max-width">
                Disse tokensene er kun tilgjengelige i Figma-filen til
                designsystemet da de ikke skal brukes direkte, men er grunnlaget
                for de semantiske tokensene.
              </Paragraph>

              <Table caption="Designtokens for grunnstørrelser">
                <TableHead>
                  <TableRow>
                    <TableHeader>Navn</TableHeader>
                    <TableHeader>Verdi</TableHeader>
                    <TableHeader>Token</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(tokens.default.base.size).map((token) => {
                    return (
                      <TableRow key={token[1].name}>
                        <TableCell data-th="Navn">{token[0]}</TableCell>
                        <TableCell data-th="Verdi">
                          <Token token={token[1]} />
                        </TableCell>
                        <TableCell data-th="Token">
                          <Badge visibility="strong" icon={<Nut />}>
                            {`--sds-${Object.values(token[1].path).join("-")}`}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </Section>

          <Section
            headingText="Avstander (Space / Padding)"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                Avstander brukes til å sette marginer og padding.
              </Paragraph>

              <Paragraph className="sds-paragraph--max-width">
                Noen av avstands-tokensene endrer seg ut i fra hvilken enhet man
                bruker, slik at enkelte elementer tar mindre plass på små
                skjermer.
              </Paragraph>

              <Table caption="Designtokens for avstander">
                <TableHead>
                  <TableRow>
                    <TableHeader>Navn</TableHeader>
                    <TableHeader>Verdi @ mobile</TableHeader>
                    <TableHeader>Verdi @ tablet</TableHeader>
                    <TableHeader>Verdi @ desktop</TableHeader>
                    <TableHeader>Token</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(tokens.default.space.padding).map((token) => {
                    return (
                      <TableRow key={token[1].name}>
                        <TableCell data-th="Navn">{token[0]}</TableCell>
                        <TableCell data-th="Verdi @ mobile">
                          <Token token={token[1]} />
                        </TableCell>
                        <TableCell data-th="Verdi @ tablet">
                          <Token
                            token={
                              tablet.default.space.padding[token[0]] ?? token[1]
                            }
                          />
                        </TableCell>
                        <TableCell data-th="Verdi @ desktop">
                          <Token
                            token={
                              desktop.default.space.padding[token[0]] ??
                              token[1]
                            }
                          />
                        </TableCell>
                        <TableCell data-th="Token">
                          <Badge visibility="strong" icon={<Nut />}>
                            {`--sds-${Object.values(token[1].path).join("-")}`}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </Section>

          <Section
            headingText="Mellomrom (Space / Gap)"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                Mellomrom brukes til å sette avstander mellom elementer.
              </Paragraph>

              <Paragraph className="sds-paragraph--max-width">
                Mellomrommene er faste på tvers av enheter da de er knyttet til
                tekst o.l. for å skape en visuell rytme.
              </Paragraph>

              <Table caption="Designtokens for mellomrom">
                <TableHead>
                  <TableRow>
                    <TableHeader>Navn</TableHeader>
                    <TableHeader>Verdi @ mobile</TableHeader>
                    <TableHeader>Verdi @ tablet</TableHeader>
                    <TableHeader>Verdi @ desktop</TableHeader>
                    <TableHeader>Token</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(tokens.default.space.gap).map((token) => {
                    return (
                      <TableRow key={token[1].name}>
                        <TableCell data-th="Navn">{token[0]}</TableCell>
                        <TableCell data-th="Verdi @ mobile">
                          <Token token={token[1]} />
                        </TableCell>
                        <TableCell data-th="Verdi @ tablet">
                          <Token
                            token={
                              tablet.default.space.gap?.[token[0]] ?? token[1]
                            }
                          />
                        </TableCell>
                        <TableCell data-th="Verdi @ desktop">
                          <Token
                            token={
                              desktop.default.space.gap?.[token[0]] ?? token[1]
                            }
                          />
                        </TableCell>
                        <TableCell data-th="Token">
                          <Badge visibility="strong" icon={<Nut />}>
                            {`--sds-${Object.values(token[1].path).join("-")}`}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </Section>

          <Section
            headingText="Linjetykkelse (Space / Border / Weight)"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                Linjetykkelse brukes til å sette tykkelsen/vekten på linjer og
                omriss.
              </Paragraph>

              <Table caption="Designtokens for linjetykkelse">
                <TableHead>
                  <TableRow>
                    <TableHeader>Navn</TableHeader>
                    <TableHeader>Verdi @ mobile</TableHeader>
                    <TableHeader>Verdi @ tablet</TableHeader>
                    <TableHeader>Verdi @ desktop</TableHeader>
                    <TableHeader>Token</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(tokens.default.space.border.weight).map(
                    (token) => {
                      return (
                        <TableRow key={token[1].name}>
                          <TableCell data-th="Navn">{token[0]}</TableCell>
                          <TableCell data-th="Verdi @ mobile">
                            <Token token={token[1]} />
                          </TableCell>
                          <TableCell data-th="Verdi @ tablet">
                            <Token
                              token={
                                tablet.space.border?.weight?.[token[0]] ??
                                token[1]
                              }
                            />
                          </TableCell>
                          <TableCell data-th="Verdi @ desktop">
                            <Token
                              token={
                                desktop.default.space.border?.weight?.[
                                  token[0]
                                ] ?? token[1]
                              }
                            />
                          </TableCell>
                          <TableCell data-th="Token">
                            <Badge visibility="strong" icon={<Nut />}>
                              {`--sds-${Object.values(token[1].path).join("-")}`}
                            </Badge>
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
            headingText="Hjørneavrunding (Space / Border / Radius)"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                Hjørneavrunding setter radiusen på hjørner.
              </Paragraph>

              <Table caption="Designtokens for hjørneavrunding">
                <TableHead>
                  <TableRow>
                    <TableHeader>Navn</TableHeader>
                    <TableHeader>Verdi @ mobile</TableHeader>
                    <TableHeader>Verdi @ tablet</TableHeader>
                    <TableHeader>Verdi @ desktop</TableHeader>
                    <TableHeader>Token</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(tokens.default.space.border.radius).map(
                    (token) => {
                      return (
                        <TableRow key={token[1].name}>
                          <TableCell data-th="Navn">{token[0]}</TableCell>
                          <TableCell data-th="Verdi @ mobile">
                            <Token token={token[1]} />
                          </TableCell>
                          <TableCell data-th="Verdi @ tablet">
                            <Token
                              token={
                                tablet.default.space.border?.radius?.[
                                  token[0]
                                ] ?? token[1]
                              }
                            />
                          </TableCell>
                          <TableCell data-th="Verdi @ desktop">
                            <Token
                              token={
                                desktop.default.space.border?.radius?.[
                                  token[0]
                                ] ?? token[1]
                              }
                            />
                          </TableCell>
                          <TableCell data-th="Token">
                            <Badge visibility="strong" icon={<Nut />}>
                              {`--sds-${Object.values(token[1].path).join("-")}`}
                            </Badge>
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

export default StorrelserPage;
