import React, {
  AnchorHTMLAttributes,
  HTMLAttributes,
  ReactElement,
} from "react";
import clsx from "clsx";
import { Link, ScreenReaderOnly } from "@sikt/sds-core";
import { Logo } from "@sikt/sds-logo";
import "./header.pcss";

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children?:
    | ReactElement<AnchorHTMLAttributes<HTMLAnchorElement>>
    | ReactElement<AnchorHTMLAttributes<HTMLAnchorElement>>[];
  skipLinkId?: string;
  skipLinkText?: string;
  logoHref?: string;
  logoText?: string;
}

export const Header = ({
  children,
  className,
  skipLinkId = "main",
  skipLinkText = "Gå til innhold",
  logoHref,
  logoText,
  ...rest
}: HeaderProps) => {
  const logoElement = logoText ? (
    <span className="sds-header__logo-text sds-typography-body--large">
      {logoText}
    </span>
  ) : (
    <Logo variant={"primary"} className="sds-header__logo" />
  );

  return (
    <>
      <ScreenReaderOnly isFocusable className="sds-header__skip-link">
        <Link href={`#${skipLinkId}`}>{skipLinkText}</Link>
      </ScreenReaderOnly>
      <header className={clsx("sds-header", className)} {...rest}>
        <div className="sds-header__content">
          {logoHref ? (
            <Link href={logoHref} className="sds-header__logo-link">
              {logoElement}
            </Link>
          ) : (
            logoElement
          )}

          {children}
        </div>
      </header>
    </>
  );
};
