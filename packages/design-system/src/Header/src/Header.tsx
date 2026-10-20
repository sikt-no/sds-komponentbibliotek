import { Slot, Slottable } from "@radix-ui/react-slot";
import { Logo, LogoPrimaryProps, LogoProductProps } from "@sikt/sd3-sikt-logo";
import { clsx } from "clsx/lite";
import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import "./header.css";
import { Link } from "../../../index";

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

export type HeaderSkipLinkProps = HeaderLinkProps;

export type HeaderLogoProps = Omit<LogoPrimaryProps, "size"> | LogoProductProps;

export type HeaderContentProps = HTMLAttributes<HTMLDivElement>;

const HeaderSkipLink = ({ ...rest }: HeaderSkipLinkProps) => {
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

const HeaderLogo = ({ ...rest }: HeaderLogoProps) =>
  rest.productName !== undefined ? (
    <Logo {...rest} data-part="logo" />
  ) : (
    <Logo {...rest} size="compact" data-part="logo" />
  );
HeaderLogo.displayName = "HeaderLogo";

const HeaderContent = ({ ...rest }: HeaderContentProps) => (
  <div data-part="content" {...rest} />
);
HeaderContent.displayName = "HeaderContent";

export const Header = ({ className, ...rest }: HeaderProps) => (
  <header className={clsx("sd3-header", className)} {...rest} />
);

Header.displayName = "Header";
Header.SkipLink = HeaderSkipLink;
Header.LogoLink = HeaderLogoLink;
Header.Logo = HeaderLogo;
Header.Content = HeaderContent;
