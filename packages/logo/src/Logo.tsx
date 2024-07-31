import { clsx } from "clsx/lite";
import { HTMLAttributes } from "react";
import "./logo.pcss";
import { ReactComponent as LogoSvg } from "../Logo.svg";

export type LogoVariant = "primary" | "secondary";

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  lang?: "nb" | "nn" | "en" | "se" | "smj" | "sma" | "fkv";
  variant?: LogoVariant;
}

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
  className,
  lang = "nb",
  ...rest
}: LogoProps) => {
  const isSecondary = variant === "secondary";
  return (
    <div
      className={clsx("sds-logo", `sds-logo--${variant}`, className)}
      {...rest}
    >
      <LogoSvg className="sds-logo__icon" aria-hidden />
      <div>
        <div className="sds-logo__title">Sikt</div>
        {isSecondary && (
          <div className="sds-logo__subtitle">{addLinebreak(lang)}</div>
        )}
      </div>
    </div>
  );
};
