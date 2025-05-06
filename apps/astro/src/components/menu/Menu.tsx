import { SquaresFour } from "@phosphor-icons/react/dist/ssr";
import { Nav, NavButtonLink } from "../";

export const Menu = ({ currentUrl }: { currentUrl: string }) => {
  const storybookUrl = `${import.meta.env.PUBLIC_STORYBOOK_URL}`;

  return (
    <>
      {/* TODO: Menu {url} to determine current */}
      {/*
      <Nav aria-label="Sidenavigasjon, Grunnleggende" heading="Grunnleggende">
        <li>
          <NavButtonLink>hello</NavButtonLink>
        </li>
      </Nav>
      */}
      <Nav aria-label="Sidenavigasjon, Komponenter" heading="Komponenter">
        <li>
          <NavButtonLink
            icon={<SquaresFour className="sds-icon" aria-hidden />}
            href={storybookUrl}
            aria-current={currentUrl === storybookUrl}
          >
            Komponenter (Storybook)
          </NavButtonLink>
        </li>
      </Nav>
    </>
  );
};
