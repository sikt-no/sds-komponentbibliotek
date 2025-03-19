import * as React from "react";
import { PageProps } from "gatsby";
import { Hero } from "../../components/Hero";
import { clsx } from "clsx/lite";
import * as style from "../grunnleggende/index.module.css";
import { Paragraph, Link } from "@sikt/sds-core";
import { Section } from "@sikt/sds-section";
import {
  DescriptionList,
  DescriptionTerm,
  DescriptionDetails,
} from "@sikt/sds-list";

export { Head } from "../../components/Head";

const TilgjengelighetserklaringPage: React.FC<PageProps> = () => {
  return (
    <>
      <Hero
        breadcrumbs={[{ title: "Designsystem", to: "/" }]}
        heading={<>Tilgjengelighets&shy;erklæring</>}
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
            headingText="I
      hvilken grad er nettstedet i samsvar med kravene til universell utforming?"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-sikt-u-max-width-full">
                Nettstedet oppfyller alle krav til universell utforming.
              </Paragraph>

              <Paragraph className="sds-sikt-u-max-width-full">
                Figma, Storybook og GitLab er verktøy for internt bruk og har
                derfor ikke samme krav till universell utforming.
              </Paragraph>
            </div>
          </Section>

          <Section
            headingText="Om nettstedet"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-sikt-u-max-width-full">
                <DescriptionList>
                  <DescriptionTerm>Ansvarlig for nettstedet</DescriptionTerm>
                  <DescriptionDetails>
                    Sikt - Kunnskapssektorens tjenesteleverandør,
                    organisasjonsnummer 919 477 822
                  </DescriptionDetails>
                  <DescriptionTerm>
                    Meld gjerne fra om brudd på kravene
                  </DescriptionTerm>
                  <DescriptionDetails>
                    <Link href="mailto:uu@sikt.no">uu@sikt.no</Link>
                  </DescriptionDetails>
                </DescriptionList>
              </Paragraph>
            </div>
          </Section>

          <Section
            headingText="Klage"
            className={style.grunnleggende__sdsSection}
          >
            <div className={style.grunnleggende__sdsSectionContent}>
              <Paragraph className="sds-sikt-u-max-width-full">
                Diskrimineringsnemnda behandler klager om brudd på regelverket.
                Du finner informasjon om{" "}
                <Link
                  href="https://diskrimineringsnemnda.no/for-klager"
                  isExternal
                >
                  hvordan du klager på nettstedet til Diskrimineringsnemnda
                </Link>
                . Du kan også klage på manglende eller sent svar på
                tilbakemeldinger du har sendt til oss.
              </Paragraph>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
};

export default TilgjengelighetserklaringPage;
