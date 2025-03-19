import * as React from "react";
import { PageProps } from "gatsby";
import { Hero } from "../../components/Hero";
import { clsx } from "clsx/lite";
import * as style from "../grunnleggende/index.module.css";
import { Paragraph, Link } from "@sikt/sds-core";
import { Section } from "@sikt/sds-section";

export { Head } from "../../components/Head";

const PersonvernPage: React.FC<PageProps> = () => {
  return (
    <>
      <Hero
        breadcrumbs={[{ title: "Designsystem", to: "/" }]}
        heading={<>Personvern og informasjons&shy;kapsler</>}
      />
      <section
        className={clsx(
          style.grunnleggende__section,
          style.grunnleggende__sectionDesktop1x4,
        )}
      >
        <div />

        <div>
          <Section
            headingText="Personvern"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-sikt-u-max-width-full">
                Les mer om hvordan Sikt hånderer personvern i vår{" "}
                <Link href="https://sikt.no/personvernerklaering">
                  personvernserklæring
                </Link>
                .
              </Paragraph>
            </div>
          </Section>

          <Section
            headingText="Informasjonskapsler (cookies)"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-sikt-u-max-width-full">
                Denne siden bruker ikke noen informasjonskapsler.
              </Paragraph>
              <Paragraph className="sds-sikt-u-max-width-full">
                Vi samler kun teknisk informasjon for å gjøre tjenesten bedre og
                følger innstillingene dine for å ikke bli sporet (do not track).
              </Paragraph>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
};

export default PersonvernPage;
