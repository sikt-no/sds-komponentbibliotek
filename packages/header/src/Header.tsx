import { Link, ScreenReaderOnly } from "@sikt/sds-core";
import { Logo } from "@sikt/sds-logo";
import { clsx } from "clsx/lite";
import {
  AnchorHTMLAttributes,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import "./header.pcss";

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children?:
    | ReactElement<AnchorHTMLAttributes<HTMLAnchorElement>>
    | ReactElement<AnchorHTMLAttributes<HTMLAnchorElement>>[];
  topSlot?: ReactNode;
  skipLinkId?: string;
  skipLinkText?: string;
  logoHref?: string;
  logoText?: string;
}

export const Header = ({
  children,
  topSlot,
  className,
  skipLinkId = "main",
  skipLinkText = "Gå til innhold",
  logoHref,
  logoText,
  ...rest
}: HeaderProps) => {
  const logoElement = logoText ? (
    <span className="sds-header__logo-text sds-typography-body--xl">
      {logoText}
    </span>
  ) : (
    <Logo variant="primary" className="sds-header__logo" />
  );

  return (
    <>
      <ScreenReaderOnly isFocusable className="sds-header__skip-link">
        <Link href={`#${skipLinkId}`}>{skipLinkText}</Link>
      </ScreenReaderOnly>
      {topSlot}
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
