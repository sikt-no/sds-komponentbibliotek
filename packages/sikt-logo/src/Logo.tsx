import { clsx } from "clsx/lite";
import { HTMLAttributes } from "react";
import "./logo.css";
import LogoSvg from "../Logo.svg";

export type LogoVariant = "primary" | "secondary";
type LogoLang = "nb" | "nn" | "en" | "se" | "smj" | "sma" | "fkv";

interface LogoBaseProps extends HTMLAttributes<HTMLDivElement> {
  hideSymbol?: boolean;
}

interface LogoBrandProps extends LogoBaseProps {
  variant?: LogoVariant;
  lang?: LogoLang;
  productName?: never;
}

interface LogoProductProps extends LogoBaseProps {
  productName: string;
  variant?: never;
  lang?: never;
}

export type LogoProps = LogoBrandProps | LogoProductProps;

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
  ...rest
}: LogoProps) => {
  const isSecondary = variant === "secondary" && !productName;
  return (
    <div
      className={clsx("sd3-sikt-logo", className)}
      data-variant={productName ? "product" : variant}
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
