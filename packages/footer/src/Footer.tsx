import { Link } from "@sikt/sds-core";
import { Logo, LogoProps } from "@sikt/sds-logo";
import { clsx } from "clsx/lite";
import { HTMLAttributes, ReactNode } from "react";
import "./footer.pcss";

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children?: ReactNode;
  lang?: LogoProps["lang"];
  logoHref?: string;
}

export const Footer = ({
  children,
  className,
  lang = "nb",
  logoHref = "//sikt.no",
  ...rest
}: FooterProps) => {
  const logoElement = <Logo variant="secondary" lang={lang} />;

  return (
    <footer className={clsx("sds-footer", className)} {...rest}>
      <div className="sds-footer__content" data-color-scheme="dark">
        <div>
          {logoHref ? (
            <Link href={logoHref} className="sds-footer__logo-link">
              {logoElement}
            </Link>
          ) : (
            logoElement
          )}
        </div>
        {children}
      </div>
    </footer>
  );
};
