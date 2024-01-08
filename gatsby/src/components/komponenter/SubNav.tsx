import * as style from "./sub-nav.module.css";
import { SideNav } from "../side-nav/SideNav";
import { SideNavButtonLink } from "../side-nav/SideNavButtonLink";
import { Cube, Code } from "@phosphor-icons/react";
import React from "react";

export const SubNav = ({
  data,
  currentHref,
}: {
  data: any;
  currentHref?: string;
}) => {
  const categories = data.allMdx.nodes
    .reduce(
      (accumulator, currentValue) => [
        ...accumulator,
        currentValue.frontmatter.category,
      ],
      [],
    )
    .sort();

  return (
    <div className={style.subNav}>
      <span className="sds-typography-heading--paragraph">Komponenter</span>
      <SideNav heading="Alle" aria-label={`Sidenavigasjon, alle komponenter`}>
        <li>
          <SideNavButtonLink icon={<Code />} href="/storybook/">
            Se <span className="sds-screen-reader-only">alle komponenter</span>{" "}
            i Storybook
          </SideNavButtonLink>
        </li>
      </SideNav>
      {categories.map((category) => {
        const components = data.allMdx.nodes
          .filter((node) => {
            return node.frontmatter.category === category;
          })
          .sort();
        return (
          <SideNav
            aria-label={`Sidenavigasjon, ${category}komponenter`}
            heading={category}
            key={category}
          >
            {components.map((component) => {
              const href = `/komponenter${component.frontmatter.slug}/`;
              return (
                <li key={component.frontmatter.slug}>
                  <SideNavButtonLink
                    icon={<Cube />}
                    href={href}
                    aria-current={currentHref === href && "page"}
                  >
                    {component.frontmatter.title}
                  </SideNavButtonLink>
                </li>
              );
            })}
          </SideNav>
        );
      })}
    </div>
  );
};
