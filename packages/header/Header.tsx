import React, { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { Link, ScreenReaderOnly } from "@sikt/sds-core";
import { PrimaryLogo } from "@sikt/sds-logo";
import "./header.pcss";

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children?: ReactNode;
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
    <div className="sds-header__logo-text sds-typography-body--large">
      {logoText}
    </div>
  ) : (
    <PrimaryLogo className="sds-header__logo" />
  );

  return (
    <>
      <ScreenReaderOnly isFocusable className="sds-header__skip-link">
        <Link href={`#${skipLinkId}`}>{skipLinkText}</Link>
      </ScreenReaderOnly>
      <header className={clsx("sds-header", className)} {...rest}>
        <div>
          {logoHref ? (
            <Link href={logoHref} className="sds-header__logo-link">
              {logoElement}
            </Link>
          ) : (
            logoElement
          )}
        </div>
        {children}
      </header>
    </>
  );
};
