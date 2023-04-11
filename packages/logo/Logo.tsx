import clsx from "clsx";
import React, { HTMLAttributes } from "react";
import "./logo.pcss";
import { ReactComponent as LogoSvg } from "./Logo.svg";

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  lang?: "nb" | "nn" | "en" | "se" | "smj" | "sma" | "fkv";
}

interface LogoTypes {
  logoType: "primary" | "secondary";
}

const i18n = {
  nb: "Kunnskapssektorens<br /> tjenesteleverandør",
  nn: "Kunnskapssektorens<br /> tenesteleverandør",
  en: "Norwegian Agency for Shared<br /> Services in Education and Research",
  se: "Máhttosuorggi<br /> bálvaluslágideaddji",
  smj: "Máhtudaksuorge<br /> dievnastusbuvtadadiddje",
  sma: "Maahtoesuerkien<br /> dïenesjedeellije",
  fkv: "Tietosektorin<br /> palvelu",
};

const Logo = ({
  logoType,
  className,
  lang = "nb",
  ...rest
}: LogoProps & LogoTypes) => {
  const isSecondary = logoType === "secondary";
  return (
    <div
      className={clsx("sds-logo", `sds-logo--${logoType}`, className)}
      {...rest}
    >
      <LogoSvg className="sds-logo__icon" aria-hidden />
      <div>
        <div className="sds-logo__title">Sikt</div>
        {isSecondary && (
          <div
            className="sds-logo__subtitle"
            dangerouslySetInnerHTML={{ __html: i18n[lang] }}
          />
        )}
      </div>
    </div>
  );
};

export const PrimaryLogo = (props: Omit<LogoProps, "lang">) =>
  Logo({ ...props, logoType: "primary" });
export const SecondaryLogo = (props: LogoProps) =>
  Logo({ ...props, logoType: "secondary" });
