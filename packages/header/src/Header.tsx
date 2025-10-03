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
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  skipLinkId?: string;
  skipLinkText?: string;
  logoHref?: string;
  logoText?: string;
}

export const Header = ({
  children,
  topSlot,
  leftSlot,
  rightSlot,
  className,
  skipLinkId = "main",
  skipLinkText = "Gå til innhold",
  logoHref,
  logoText = "Sikt",
  ...rest
}: HeaderProps) => {
  const logoElement = (
    <Logo productName={logoText} className="sds-header__logo" />
  );

  return (
    <>
      <ScreenReaderOnly isFocusable className="sds-header__skip-link">
        <Link href={`#${skipLinkId}`}>{skipLinkText}</Link>
      </ScreenReaderOnly>
      {topSlot}
      <header className={clsx("sds-header", className)} {...rest}>
        <div className="sds-header__content">
          <div className="sds-header__content-left">
            {logoHref ? (
              <Link href={logoHref} className="sds-header__logo-link">
                {logoElement}
              </Link>
            ) : (
              logoElement
            )}
            {leftSlot && (
              <div className="sds-header__content-left-item">{leftSlot}</div>
            )}
          </div>
          {children && (
            <div className="sds-header__content-mid">{children}</div>
          )}
          {rightSlot && (
            <div className="sds-header__content-right">{rightSlot}</div>
          )}
        </div>
      </header>
    </>
  );
};
