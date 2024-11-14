import { graphql, PageProps } from "gatsby";
import { clsx } from "clsx/lite";
import { Section } from "@sikt/sds-section";
import * as style from "./index.module.css";
import { Hero } from "../../components/Hero";
import { Paragraph } from "@sikt/sds-core";
import { SubNav } from "../../components/komponenter/SubNav";
import { ButtonLink, ButtonGroup } from "@sikt/sds-button";
import { FigmaLogo, GitlabLogo } from "@phosphor-icons/react";

export { Head } from "../../components/Head";

const KomponenterPage: React.FC<PageProps<Queries.PageTemplateQuery>> = ({
  location,
  data,
}) => {
  return (
    <>
      <Hero
        breadcrumbs={[{ title: "Designsystemet", to: "/" }]}
        heading={<>Komponenter</>}
      />

      <section
        className={clsx(
          style.komponenter__section,
          style.komponenter__sectionDesktop1x4,
        )}
      >
        <div className={style.komponenter__sideNavWrapper}>
          <SubNav currentHref={location.pathname} data={data} />
        </div>

        <div>
          <Section
            headingText="Komponenterne"
            className={style.komponenter__sdsSection}
          >
            <div className={style.komponenter__sdsSectionContent}>
              <Paragraph className="sds-paragraph--max-width">
                Komponenterne er designsystemets brød og smør som muliggjør for
                likt bruk på tvers. Disse er sammensatte av mindre byggeklosser
                som designtokens og atomer.
              </Paragraph>

              <div className="sds-paragraph--max-width">
                <ButtonGroup variant="right">
                  <ButtonLink
                    href="https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/"
                    icon={<GitlabLogo />}
                    iconVariant="left"
                  >
                    Se komponenterne i GitLab
                  </ButtonLink>
                  <ButtonLink
                    href="https://www.figma.com/file/6AVtxjDULlUdl9F4JEHAfv/Komponentbibliotek-v1.0?node-id=21-357"
                    icon={<FigmaLogo />}
                    iconVariant="left"
                  >
                    Se komponenterne i Figma
                  </ButtonLink>
                </ButtonGroup>
              </div>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
};

export const query = graphql`
  query KomponenterPage {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          category
        }
      }
    }
  }
`;

export default KomponenterPage;
