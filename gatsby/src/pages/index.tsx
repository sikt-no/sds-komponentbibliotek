import React, { useState } from "react";
import type { PageProps } from "gatsby";
import clsx from "clsx";
import confetti from "canvas-confetti";
import { FigmaLogo, GitlabLogo, SlackLogo } from "@phosphor-icons/react";
import { Heading1, Heading2, Paragraph } from "@sikt/sds-core";
import { Button, ButtonLink } from "@sikt/sds-button";
import useKonami from "react-use-konami";
import * as style from "./index.module.css";
import Contributors from "../components/Contributors";
import { Card } from "@sikt/sds-card";

const IndexPage: React.FC<PageProps> = () => {
  const [showButton, setShowButton] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  useKonami(() => {
    setShowButton(true);
  });

  const handleLaunchClick = () => {
    setDisableButton(true);
    const scalar = 2;
    const unicorn = confetti.shapeFromText({ text: "🦄", scalar });

    const defaults = {
      spread: 360,
      ticks: 120,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [unicorn],
      scalar,
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 30,
      });

      confetti({
        ...defaults,
        particleCount: 5,
        flat: true,
      });

      confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ["circle"],
      });
    };

    setTimeout(shoot, 0);
    setTimeout(shoot, 200);
    setTimeout(shoot, 400);
    setTimeout(shoot, 600);
    setTimeout(shoot, 800);
    setTimeout(() => {
      setDisableButton(false);
    }, 1000);
  };

  return (
    <>
      <section
        className={clsx(
          style.sdsSiktIndex__section,
          style.sdsSiktIndex__sectionPrimary,
          style.sdsSiktIndex__sectionTabletGrid2,
          style.sdsSiktIndex__sectionTabletReverse
        )}
      >
        <div>
          <img src="/images/index/sikt.png" alt="Sikt logotype" />
        </div>

        <div className={style.sdsSiktIndex__sectionContent}>
          <Heading1 variant="huge">Komponent&shy;biblioteket</Heading1>
          <p>
            Velkommen til Sikts komponentbibliotek. Dette er en sammensetning av
            komponenter og retningslinjer du kan bruke når du designer og
            utvikler digitale løsninger og tjenester.
          </p>
          <div>
            {showButton && (
              <div className="sds-sikt__button-group">
                <Button
                  variant="strong"
                  onClick={handleLaunchClick}
                  disabled={disableButton}
                  icon="🦄"
                >
                  Lansere komponentbibliotek v2
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section
        className={clsx(
          style.sdsSiktIndex__section,
          style.sdsSiktIndex__sectionTabletGrid2,
          style.sdsSiktIndex__sectionDesktopGrid3
        )}
      >
        <Card
          headingLevel="h2"
          headingText="Grunnleggende"
          imgSrc="/images/index/grunnleggende.png"
          imgAlt="Portfølje"
          linkHref="/grunnleggende/"
          linkText="Les om bestanddelene"
          text="Les deg opp på hva komponent-biblioteket er og hva det består av"
        />
        <Card
          headingLevel="h2"
          headingText="Komponenter"
          imgSrc="/images/index/komponenter.png"
          imgAlt="Pusslebit"
          linkHref="/komponenter/"
          linkText="Se alle komponentene"
          text="Se oversikten over de ferdige komponentene som kan tas i bruk"
        />
        <Card
          headingLevel="h2"
          headingText="Mønstre"
          imgSrc="/images/index/monstre.png"
          imgAlt="Tavle"
          linkHref="/monstre/"
          linkText="Se mønster og eksempler"
          text="Se eksempler på hvordan du kan sette opp ofte brukte interaksjoner og sider"
        />
      </section>

      <section
        className={clsx(
          style.sdsSiktIndex__section,
          style.sdsSiktIndex__sectionPrimary,
          style.sdsSiktIndex__sectionTabletGrid2,
          style.sdsSiktIndex__sectionTabletReverse
        )}
      >
        <div className={style.sdsSiktIndex__sectionContent}>
          <Heading2 variant="medium">Samarbeid</Heading2>
          <Paragraph variant="lead">
            Å bygge et godt komponentbibliotek for Sikt vil være en laginnsats,
            der alle team er velkomne til å bidra inn. Det har allerede kommet
            inn mange gode bidrag fra ulike team, og vi håper at enda flere team
            ønsker å koble seg på fremover!
          </Paragraph>
          <div className="sds-sikt__button-group">
            <ButtonLink
              iconVariant="left"
              icon={<FigmaLogo />}
              href="https://www.figma.com/files/1167338716494500240/project/73250738/Designsystem"
            >
              Se prosjektet i Figma
            </ButtonLink>
            <ButtonLink
              iconVariant="left"
              icon={<GitlabLogo />}
              href="https://gitlab.sikt.no/designsystem/sds-komponentbibliotek"
            >
              Se prosjektet på GitLab
            </ButtonLink>
            <ButtonLink
              variant="strong"
              iconVariant="left"
              icon={<SlackLogo />}
              href="https://sikt-no.slack.com/archives/C04K82KES0J"
            >
              Bli med i Slack-kanalen
            </ButtonLink>
          </div>
        </div>
        <div>
          <Contributors />
        </div>
      </section>
    </>
  );
};

export default IndexPage;
