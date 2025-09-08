import {
  ArrowsInLineHorizontalIcon,
  DotsNineIcon,
  NutIcon,
  PaletteIcon,
  SquaresFourIcon,
  GridFourIcon,
  TextAaIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Nav } from "./nav/Nav";
import { NavButtonLink } from "./nav/NavButtonLink";

interface PathnameType {
  pathname: string;
}

interface MenuItemType extends AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  url?: string;
  icon?: ReactNode;
}

const merkevareMenu: MenuItemType[] = [
  { name: "Merkevarestrategi", url: "/merkevare/merkevarestrategi" },
  { name: "Merkevareprinsipper", url: "/merkevare/merkevareprinsipper" },
  { name: "Stil og tone", url: "/merkevare/stil-og-tone" },
  { name: "Navngiving", url: "/merkevare/navngiving" },
];

const visuellIdentitetMenu: MenuItemType[] = [
  { name: "Fargepalett", url: "/visuell-identitet/fargepalett" },
  {
    name: "Logoer",
    url: "/visuell-identitet/logoer",
  },
  { name: "Typografi" },
  { name: "Illustrasjoner" },
  { name: "Bilder" },
  { name: "Designelementer" },
  { name: "Komposisjon" },
];

const utviklingMenu: MenuItemType[] = [
  {
    name: "Designtokens",
    url: "/utvikling/designtokens",
    icon: <NutIcon className="sds-icon" aria-hidden />,
  },
  {
    name: "Størrelse og layout",
    url: "/utvikling/storrelse-og-layout",
    icon: <ArrowsInLineHorizontalIcon className="sds-icon" aria-hidden />,
  },
  {
    name: "Fargesystem",
    url: "/utvikling/fargesystem",
    icon: <PaletteIcon className="sds-icon" aria-hidden />,
  },
  {
    name: "Typografi",
    url: "/utvikling/typografi",
    icon: <TextAaIcon className="sds-icon" aria-hidden />,
  },
  {
    name: "Ikonbibliotek",
    url: "/utvikling/ikonbibliotek",
    icon: <DotsNineIcon className="sds-icon" aria-hidden />,
  },
  {
    name: "Komponenter",
    url: "/utvikling/komponenter",
    icon: <SquaresFourIcon className="sds-icon" aria-hidden />,
  },
  {
    name: "Mønstre",
    icon: <GridFourIcon className="sds-icon" aria-hidden />,
  },
];

const tilgjengelighetMenu: MenuItemType[] = [
  {
    name: "Tilgjengelighet",
    url: "/tilgjengelighet",
  },
  {
    name: "Tilgjengelighetstesting",
    url: "/tilgjengelighet/tilgjengelighetstesting",
  },
];

const MenuItem = ({
  name,
  url,
  icon,
  pathname,
  ...rest
}: MenuItemType & PathnameType) => (
  <li>
    <NavButtonLink
      icon={icon}
      href={url}
      aria-current={url === pathname && "page"}
      {...rest}
    >
      {name}
    </NavButtonLink>
  </li>
);

export const Menu = ({ pathname }: PathnameType) => {
  return (
    <>
      <Nav aria-label="Sidenavigasjon, Merkevare" heading="Merkevare">
        {merkevareMenu.map((item) => (
          <MenuItem key={item.name} {...item} pathname={pathname} />
        ))}
      </Nav>

      <Nav
        aria-label="Sidenavigasjon, Visuell identitet"
        heading="Visuell identitet"
      >
        {visuellIdentitetMenu.map((item) => (
          <MenuItem key={item.name} {...item} pathname={pathname} />
        ))}
      </Nav>

      <Nav aria-label="Sidenavigasjon, Utvikling" heading="Utvikling">
        {utviklingMenu.map((item) => (
          <MenuItem key={item.name} {...item} pathname={pathname} />
        ))}
      </Nav>

      <Nav
        aria-label="Sidenavigasjon, Tilgjengelighet"
        heading="Tilgjengelighet"
      >
        {tilgjengelighetMenu.map((item) => (
          <MenuItem key={item.name} {...item} pathname={pathname} />
        ))}
      </Nav>
    </>
  );
};
