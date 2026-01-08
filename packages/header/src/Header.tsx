import { Link, ScreenReaderOnly } from "@sikt/sds-core";
import { Logo } from "@sikt/sds-logo";
import { clsx } from "clsx/lite";
import {
  AnchorHTMLAttributes,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
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
  applicationStatus?: ReactNode;
  skipLinkId?: string;
  skipLinkText?: string;
  /**
   * Element to wrap logotype. Can be any framework routing Link, like `next/link` or `react-router`.
   * Should have className `sds-typography-link`.
   * Children will be overwritten with `logoText` prop.
   *
   * @default undefined
   */
  logoLink?: ReactNode;
  logoText?: string;
}

export const Header = ({
  children,
  topSlot,
  leftSlot,
  rightSlot,
  applicationStatus,
  className,
  skipLinkId = "main",
  skipLinkText = "Gå til innhold",
  logoLink,
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
            {logoLink && isValidElement(logoLink)
              ? cloneElement(logoLink, logoLink.props ?? {}, logoElement)
              : logoElement}
            {leftSlot && (
              <div className="sds-header__content-left-item">{leftSlot}</div>
            )}
          </div>
          <div className="sds-header__content-mid">{children}</div>
          {rightSlot && (
            <div className="sds-header__content-right">{rightSlot}</div>
          )}
        </div>
      </header>
      {applicationStatus}
    </>
  );
};
Header.displayName = "Header";
