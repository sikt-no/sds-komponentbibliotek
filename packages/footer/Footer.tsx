import React, { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { Link } from "@sikt/sds-core/components/Link";
import { SecondaryLogo, LogoProps } from "@sikt/sds-logo/Logo";
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
  const logoElement = <SecondaryLogo lang={lang} />;

  return (
    <footer
      className={clsx("sds-footer", className)}
      data-color-scheme="dark"
      {...rest}
    >
      <div className="sds-footer__content">
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
