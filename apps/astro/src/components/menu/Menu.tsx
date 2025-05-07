import {
  ArrowsInLineHorizontal,
  DotsNine,
  Nut,
  Palette,
  SquaresFour,
  TextAa,
  Wheelchair,
} from "@phosphor-icons/react/dist/ssr";
import { Nav, NavButtonLink } from "../";

export const Menu = ({ pathname }: { pathname: string }) => {
  const tokensHref = "/grunnleggende/designtokens/";
  const sizesHref = "/grunnleggende/storrelse-og-layout/";
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
            aria-current={pathname === tokensHref && "page"}
          >
            Designtokens
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            icon={<ArrowsInLineHorizontal className="sds-icon" aria-hidden />}
            href={sizesHref}
            aria-current={pathname === sizesHref && "page"}
          >
            Størrelse og layout
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            icon={<Palette className="sds-icon" aria-hidden />}
            aria-current={pathname === colorsHref && "page"}
          >
            Fargesystem
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            icon={<TextAa className="sds-icon" aria-hidden />}
            href={typographyHref}
            aria-current={pathname === typographyHref && "page"}
          >
            Typografi
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            icon={<DotsNine className="sds-icon" aria-hidden />}
            aria-current={pathname === iconsHref && "page"}
          >
            Ikonbibliotek
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            icon={<Wheelchair className="sds-icon" aria-hidden />}
            href={a11yHref}
            aria-current={pathname === a11yHref && "page"}
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
            aria-current={pathname === storybookUrl && "page"}
          >
            Komponenter (Storybook)
          </NavButtonLink>
        </li>
      </Nav>
    </>
  );
};
