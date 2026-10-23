import { clsx } from "clsx/lite";
import { HTMLAttributes } from "react";
import "./logo.css";
import LogoSvg from "../Logo.svg";

/** @default "standard" */
type SizeDensity = "standard" | "compact";

export type LogoVariant = "primary" | "secondary";
type LogoLang = "nb" | "nn" | "en" | "se" | "smj" | "sma" | "fkv";

interface LogoBaseProps extends HTMLAttributes<HTMLDivElement> {
  hideSymbol?: boolean;
}

export interface LogoPrimaryProps extends LogoBaseProps {
  variant?: "primary" | undefined;
  lang?: LogoLang;
  size?: SizeDensity;
  productName?: never;
}

export interface LogoSecondaryProps extends LogoBaseProps {
  variant: "secondary";
  lang?: LogoLang;
  size?: never;
  productName?: never;
}

export interface LogoProductProps extends LogoBaseProps {
  productName: string;
  variant?: never;
  lang?: never;
  size?: SizeDensity;
}

export type LogoProps =
  LogoPrimaryProps | LogoSecondaryProps | LogoProductProps;

const i18n = {
  nb: "Kunnskapssektorens\n tjenesteleverandør",
  nn: "Kunnskapssektorens\n tenesteleverandør",
  en: "Norwegian Agency for Shared\n Services in Education and Research",
  se: "Máhttosuorggi\n bálvaluslágideaddji",
  smj: "Máhtudaksuorge\n dievnastusbuvtadadiddje",
  sma: "Maahtoesuerkien\n dïenesjedeellije",
  fkv: "Tietosektorin\n palvelu",
};

const addLinebreak = (lang: keyof typeof i18n) => {
  const splitString = i18n[lang].split("\n");
  return (
    <>
      {splitString[0]}
      <br />
      {splitString[1]}
    </>
  );
};

export const Logo = ({
  variant = "primary",
  productName,
  className,
  lang = "nb",
  hideSymbol = false,
  size = "standard",
  ...rest
}: LogoProps) => {
  const isSecondary = variant === "secondary" && !productName;
  return (
    <div
      className={clsx("sd3-sikt-logo", className)}
      data-variant={productName ? "product" : variant}
      data-size={size}
      {...rest}
    >
      {!hideSymbol && <LogoSvg data-part="symbol" aria-hidden />}
      <div>
        <div data-part="title">{productName ?? "Sikt"}</div>
        {isSecondary && <div data-part="subtitle">{addLinebreak(lang)}</div>}
      </div>
    </div>
  );
};
Logo.displayName = "Logo";
