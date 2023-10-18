import clsx from "clsx";
import React, { HTMLAttributes } from "react";
import "./logo.pcss";
import { ReactComponent as LogoSvg } from "./Logo.svg";

export type LogoVariant = "primary" | "secondary";

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  lang?: "nb" | "nn" | "en" | "se" | "smj" | "sma" | "fkv";
  variant?: LogoVariant;
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
          <div
            className="sds-logo__subtitle"
            dangerouslySetInnerHTML={{ __html: i18n[lang] }}
          />
        )}
      </div>
    </div>
  );
};
