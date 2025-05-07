import {
  ArrowsInLineHorizontal,
  DotsNine,
  Layout,
  Nut,
  Palette,
  SquaresFour,
  TextAa,
  Wheelchair,
} from "@phosphor-icons/react/dist/ssr";
import { Nav, NavButtonLink } from "../";

export const Menu = ({ currentUrl }: { currentUrl: string }) => {
  const tokensHref = "/grunnleggende/designtokens/";
  const sizesHref = "/grunnleggende/storrelser/";
  const layoutHref = "/grunnleggende/layout/";
  const colorsHref = "/grunnleggende/farger/";
  const typographyHref = "/grunnleggende/typografi/";
  const iconsHref = "/grunnleggende/ikoner/";
  const a11yHref = "https://isikt.sharepoint.com/sites/Universellutforming";
  const storybookUrl = `${import.meta.env.PUBLIC_STORYBOOK_URL}`;

  return (
    <>
      <Nav aria-label="Sidenavigasjon, Grunnleggende" heading="Grunnleggende">
        <li>
          <NavButtonLink
            icon={<Nut className="sds-icon" aria-hidden />}
            href={tokensHref}
            aria-current={currentUrl === tokensHref && "page"}
          >
            Designtokens
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            icon={<ArrowsInLineHorizontal className="sds-icon" aria-hidden />}
            href={sizesHref}
            aria-current={currentUrl === sizesHref && "page"}
          >
            Størrelser
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            icon={<Layout className="sds-icon" aria-hidden />}
            aria-current={currentUrl === layoutHref && "page"}
          >
            Layout
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            icon={<Palette className="sds-icon" aria-hidden />}
            aria-current={currentUrl === colorsHref && "page"}
          >
            Fargesystem
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            icon={<TextAa className="sds-icon" aria-hidden />}
            aria-current={currentUrl === typographyHref && "page"}
          >
            Typografi
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            icon={<DotsNine className="sds-icon" aria-hidden />}
            aria-current={currentUrl === iconsHref && "page"}
          >
            Ikonbibliotek
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            icon={<Wheelchair className="sds-icon" aria-hidden />}
            href={a11yHref}
            aria-current={currentUrl === a11yHref && "page"}
          >
            Tilgjengelighet
          </NavButtonLink>
        </li>
      </Nav>

      <Nav aria-label="Sidenavigasjon, Komponenter" heading="Komponenter">
        <li>
          <NavButtonLink
            icon={<SquaresFour className="sds-icon" aria-hidden />}
            href={storybookUrl}
            aria-current={currentUrl === storybookUrl && "page"}
          >
            Komponenter (Storybook)
          </NavButtonLink>
        </li>
      </Nav>
    </>
  );
};
