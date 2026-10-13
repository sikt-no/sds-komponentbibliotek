import { Slot, Slottable } from "@radix-ui/react-slot";
import { Logo, LogoProps } from "@sikt/sd3-sikt-logo";
import { clsx } from "clsx/lite";
import {
  AnchorHTMLAttributes,
  Children,
  HTMLAttributes,
  ReactNode,
} from "react";
import "./header.css";
import { Link } from "../../../index";
import { hasChildOfType } from "../../../utils/has-child-of-type";

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export interface HeaderLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  /**
   * Use to change element type into alternative React component. Useful with libraries that require their own routing components.
   *
   * For example `<Header.Link asChild><NextLink>` would result in a `<NextLink>` with all properties of this component.
   *
   * @default false
   */
  asChild?: boolean;
}

export type HeaderSubHeaderProps = HTMLAttributes<HTMLDivElement>;

const HeaderSkipLink = ({ ...rest }: HeaderLinkProps) => {
  return (
    <Link
      className="sd3-visually-hidden focusable"
      data-part="skip-link"
      {...rest}
    />
  );
};
HeaderSkipLink.displayName = "HeaderSkipLink";

const HeaderLogoLink = ({
  children,
  asChild = false,
  ...rest
}: HeaderLinkProps) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp data-part="logo-link" {...rest}>
      <Slottable>{children}</Slottable>
    </Comp>
  );
};
HeaderLogoLink.displayName = "HeaderLogoLink";

const HeaderLogo = ({ ...rest }: LogoProps) => (
  <Logo {...rest} size="compact" data-part="logo" />
);
HeaderLogo.displayName = "HeaderLogo";

const HeaderSubHeader = ({ ...rest }: HeaderSubHeaderProps) => (
  <div data-part="sub-header" {...rest} />
);
HeaderSubHeader.displayName = "HeaderSubHeader";

export const Header = ({ children, className, ...rest }: HeaderProps) => {
  const isSkipLink = (child: ReactNode) =>
    hasChildOfType(child, HeaderSkipLink);
  const isLogo = (child: ReactNode) =>
    hasChildOfType(child, HeaderLogoLink) || hasChildOfType(child, HeaderLogo);
  const isSubHeader = (child: ReactNode) =>
    hasChildOfType(child, HeaderSubHeader);
  const items = Children.toArray(children);
  const skipLink = items.filter(isSkipLink);
  const logo = items.filter(isLogo);
  const content = items.filter(
    (child) => !isSkipLink(child) && !isLogo(child) && !isSubHeader(child),
  );
  const subHeader = items.filter(isSubHeader);

  return (
    <header className={clsx("sd3-header", className)} {...rest}>
      {skipLink}
      <div data-part="header">
        {logo}
        {content.length > 0 && <div data-part="content">{content}</div>}
      </div>
      {subHeader}
    </header>
  );
};

Header.displayName = "Header";
Header.SkipLink = HeaderSkipLink;
Header.LogoLink = HeaderLogoLink;
Header.Logo = HeaderLogo;
Header.SubHeader = HeaderSubHeader;
