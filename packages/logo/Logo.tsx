import clsx from "clsx";
import React from "react";
import "./logo.pcss";
import { ReactComponent as LogoSvg } from "./Logo.svg";

export interface LogoProps {
  className?: string;
  lang?: "nb" | "nn" | "fi" | "se" | "smj" | "sma" | "en";
  color?: "light" | "dark";
}

interface LogoTypes {
  logoType: "primary" | "secondary";
}

const i18n = {
  nb: "Kunnskapssektorens<br /> tjenesteleverandør",
  nn: "Kunnskapssektorens<br /> tenesteleverandør",
  fi: "Tietosektorin<br /> palvelu",
  se: "Máhttosuorggi<br /> bálvaluslágideaddji",
  smj: "Máhtudaksuorge<br /> dievnastusbuvtadadiddje",
  sma: "Maahtoesuerkien<br /> dïenesjedeellije",
  en: "Norwegian Agency for Shared<br /> Services in Education and Research",
};

const Logo = ({
  logoType,
  className,
  lang = "nb",
  color = "dark",
  ...rest
}: LogoProps & LogoTypes) => {
  const isSecondary = logoType === "secondary";
  return (
    <div
      className={clsx(
        "sds-logo",
        `sds-logo--${logoType}`,
        `sds-logo--${color}`,
        className
      )}
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
