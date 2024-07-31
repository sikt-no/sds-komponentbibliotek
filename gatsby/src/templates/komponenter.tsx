import type { PageProps } from "gatsby";
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
import { clsx } from "clsx/lite";
import * as style from "../pages/komponenter/index.module.css";
import { Code, GitlabLogo, FigmaLogo, Package } from "@phosphor-icons/react";
import { Section } from "@sikt/sds-section";
import { ButtonLink, ButtonGroup } from "@sikt/sds-button";
import { OrderedList, UnorderedList, ListItem } from "@sikt/sds-list";
import { SubNav } from "../components/komponenter/SubNav";
import { ReactNode } from "react";

export { Head } from "../components/Head";

// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/how-to/routing/mdx.md#make-a-layout-template-for-your-posts
// https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#mdxprovider
const components = {
  p: Paragraph,
  h1: ({ children }: { children: ReactNode }) => (
    <Heading1 variant="large">{children}</Heading1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <Heading2 variant="medium">{children}</Heading2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <Heading3 variant="small">{children}</Heading3>
  ),
  h4: ({ children }: { children: ReactNode }) => (
    <Heading4 variant="paragraph">{children}</Heading4>
  ),
  h5: ({ children }: { children: ReactNode }) => (
    <Heading5 variant="overline">{children}</Heading5>
  ),
  h6: ({ children }: { children: ReactNode }) => (
    <Heading6 variant="overline">{children}</Heading6>
  ),
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
}: PageProps<Queries.PageTemplateQuery> & {
  pageContext: Record<string, unknown>;
}) {
  const frontmatter = data.mdx?.frontmatter;

  return (
    <>
      <Hero
        breadcrumbs={[
          { title: "Komponentbiblioteket", to: "/" },
          { title: "Komponenter", to: "/komponenter/" },
        ]}
        heading={<>{frontmatter?.title}</>}
        leadParagraph={
          <ButtonGroup variant="left">
            <ButtonLink
              variant="transparent"
              icon={<Package />}
              href={`https://www.npmjs.com/package/${pageContext.package}`}
            >
              {`${pageContext.package}@${pageContext.version}`}
            </ButtonLink>
            <ButtonLink
              variant="transparent"
              icon={<Code />}
              href={`/storybook/?path=${frontmatter?.storybook}`}
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
            headingText={frontmatter?.title ?? ""}
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
                  href={frontmatter?.figma ?? ""}
                >
                  Se i Figma
                </ButtonLink>
              </ButtonGroup>
            }
          >
            <div className={style.komponenter__sdsSectionContent}>
              {/* @ts-ignore */}
              <MDXProvider components={components}>{children}</MDXProvider>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
}

export const query = graphql`
  query PageTemplate($id: String!) {
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
