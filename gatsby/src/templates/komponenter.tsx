import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Hero } from "../components/Hero";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
  Link,
} from "@sikt/sds-core";
import clsx from "clsx";
import * as style from "../pages/komponenter/index.module.css";
import { Code, GitlabLogo, FigmaLogo, Package } from "@phosphor-icons/react";
import { Section } from "@sikt/sds-section";
import { ButtonLink, ButtonGroup } from "@sikt/sds-button";
import { OrderedList, UnorderedList, ListItem } from "@sikt/sds-list";
import { SubNav } from "../components/komponenter/SubNav";

export { Head } from "../components/Head";

// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/how-to/routing/mdx.md#make-a-layout-template-for-your-posts
// https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#mdxprovider
const components = {
  p: Paragraph,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  a: Link,
};

export default function PageTemplate({
  location,
  data,
  pageContext,
  children,
}) {
  return (
    <>
      <Hero
        breadcrumbs={[
          { title: "Komponentbiblioteket", to: "/" },
          { title: "Komponenter", to: "/komponenter/" },
        ]}
        heading={<>{data.mdx.frontmatter.title}</>}
        leadParagraph={
          <ButtonGroup variant="left">
            <ButtonLink
              variant="transparent"
              icon={<Package />}
              href={`https://www.npmjs.com/package/${pageContext.package}`}
            >
              {pageContext.package}@{pageContext.version}
            </ButtonLink>
            <ButtonLink
              variant="transparent"
              icon={<Code />}
              href={`/storybook/?path=${data.mdx.frontmatter.storybook}`}
            >
              Se i Storybook
            </ButtonLink>
          </ButtonGroup>
        }
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
            headingText={data.mdx.frontmatter.title}
            className={style.komponenter__sdsSection}
            callToAction={
              <ButtonGroup variant="right">
                <ButtonLink
                  variant="transparent"
                  icon={<GitlabLogo />}
                  href={`https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/-/tree/main/packages/${pageContext.directory}`}
                >
                  Se i GitLab
                </ButtonLink>
                <ButtonLink
                  variant="transparent"
                  icon={<FigmaLogo />}
                  href={data.mdx.frontmatter.figma}
                >
                  Se i Figma
                </ButtonLink>
              </ButtonGroup>
            }
          >
            <div className={style.komponenter__sdsSectionContent}>
              <MDXProvider components={components}>{children}</MDXProvider>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
}

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        storybook
        figma
        category
      }
    }
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
