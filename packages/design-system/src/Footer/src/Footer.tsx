import { Slot, Slottable } from "@radix-ui/react-slot";
import { Logo, LogoSecondaryProps } from "@sikt/sd3-sikt-logo";
import { clsx } from "clsx/lite";
import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import "./footer.css";

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export interface FooterLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  /**
   * Use to change element type into alternative React component. Useful with libraries that require their own routing components.
   *
   * For example `<Footer.Link asChild><NextLink>` would result in a `<NextLink>` with all properties of this component.
   *
   * @default false
   */
  asChild?: boolean;
}

const FooterLink = ({
  children,
  asChild = false,
  ...rest
}: FooterLinkProps) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp data-part="link" {...rest}>
      <Slottable>{children}</Slottable>
    </Comp>
  );
};
FooterLink.displayName = "FooterLink";

const FooterLogo = ({ ...rest }: Omit<LogoSecondaryProps, "variant">) => (
  <Logo {...rest} variant="secondary" />
);
FooterLogo.displayName = "FooterLogo";

export const Footer = ({ children, className, ...rest }: FooterProps) => (
  <footer className={clsx("sd3-footer", className)} {...rest}>
    <div data-part="content">{children}</div>
  </footer>
);

Footer.displayName = "Footer";
Footer.Link = FooterLink;
Footer.Logo = FooterLogo;
