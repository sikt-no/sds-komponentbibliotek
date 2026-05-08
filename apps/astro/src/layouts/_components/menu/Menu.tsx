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
import { MenuButtonLink } from "./_components/MenuButtonLink";
import { MenuGroup } from "./_components/MenuGroup";

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
  {
    name: "Produkt- og tjenestenavn",
    url: "/merkevare/produkt-og-tjenestenavn",
  },
  { name: "Stil og tone", url: "/merkevare/stil-og-tone" },
];

const visuellIdentitetMenu: MenuItemType[] = [
  { name: "Fargepalett", url: "/visuell-identitet/fargepalett" },
  {
    name: "Logoer",
    url: "/visuell-identitet/logoer",
  },
];

const produktutviklingMenu: MenuItemType[] = [
  {
    name: "Designtokens",
    url: "/produktutvikling/designtokens",
    icon: <NutIcon className="sds-icon" aria-hidden />,
  },
  {
    name: "Størrelse og layout",
    url: "/produktutvikling/storrelse-og-layout",
    icon: <ArrowsInLineHorizontalIcon className="sds-icon" aria-hidden />,
  },
  {
    name: "Fargesystem",
    url: "/produktutvikling/fargesystem",
    icon: <PaletteIcon className="sds-icon" aria-hidden />,
  },
  {
    name: "Fargetokens",
    url: "/produktutvikling/fargetokens",
    icon: <PaletteIcon className="sds-icon" aria-hidden />,
  },
  {
    name: "Typografi",
    url: "/produktutvikling/typografi",
    icon: <TextAaIcon className="sds-icon" aria-hidden />,
  },
  {
    name: "Ikonbibliotek",
    url: "/produktutvikling/ikonbibliotek",
    icon: <DotsNineIcon className="sds-icon" aria-hidden />,
  },
  {
    name: "Komponenter",
    url: "/produktutvikling/komponenter",
    icon: <SquaresFourIcon className="sds-icon" aria-hidden />,
  },
  {
    name: "Mønstre",
    url: "/produktutvikling/monstre",
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

const fullMenu = [
  {
    name: "Produktutvikling",
    menu: produktutviklingMenu,
  },
  {
    name: "Merkevare",
    menu: merkevareMenu,
  },
  {
    name: "Visuell identitet",
    menu: visuellIdentitetMenu,
  },
  {
    name: "Tilgjengelighet",
    menu: tilgjengelighetMenu,
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
    <MenuButtonLink
      icon={icon}
      href={url}
      aria-current={url === pathname ? "page" : undefined}
      {...rest}
    >
      {name}
    </MenuButtonLink>
  </li>
);

export const Menu = ({ pathname }: PathnameType) =>
  fullMenu.map((group) => (
    <MenuGroup aria-label={group.name} heading={group.name} key={group.name}>
      {group.menu.map((item) => (
        <MenuItem key={item.name} {...item} pathname={pathname} />
      ))}
    </MenuGroup>
  ));
