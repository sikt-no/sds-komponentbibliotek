import { useState } from "react";
import type { PageProps } from "gatsby";
import clsx from "clsx";
import confetti from "canvas-confetti";
import { FigmaLogo, GitlabLogo, SlackLogo } from "@phosphor-icons/react";
import { Heading2, Paragraph } from "@sikt/sds-core";
import { Button, ButtonLink, ButtonGroup } from "@sikt/sds-button";
import useKonami from "react-use-konami";
import * as style from "./index.module.css";
import Contributors from "../components/Contributors";
import { Card } from "@sikt/sds-card";
import { Hero } from "../components/Hero";
import { ArrowCircleRightIcon } from "@sikt/sds-icons";

export { Head } from "../components/Head";

const IndexPage: React.FC<PageProps> = () => {
  const [showEasterEggs, setShowEasterEggs] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  useKonami(() => {
    setShowEasterEggs(true);
  });

  const handleLaunchClick = () => {
    setDisableButton(true);
    const scalar = 2;
    const crown = confetti.shapeFromText({ text: "🎈", scalar });

    const defaults = {
      spread: 360,
      ticks: 120,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [crown],
      scalar,
    };

    confetti({
      ...defaults,
    });

    setTimeout(() => {
      setDisableButton(false);
    }, 1000);
  };

  return (
    <>
      <Hero
        heading={<>Komponent&shy;biblioteket</>}
        leadParagraph="Velkommen til Sikts komponentbibliotek. Dette er en sammensetning av
            komponenter og retningslinjer du kan bruke når du designer og
            utvikler digitale løsninger og tjenester."
        className={style.index__hero}
      />

      <section className={clsx(style.index__section)}>
        <div
          className={clsx(
            style.index__sectionInner,
            style.index__sectionTabletGrid2,
            style.index__sectionDesktopGrid3,
          )}
        >
          <Card
            headingLevel="h2"
            headingText="Grunnleggende"
            imgSrc="/images/index/grunnleggende.png"
            imgAlt="Portfølje"
            callToAction={
              <ButtonLink
                variant="strong"
                href="/grunnleggende/"
                icon={<ArrowCircleRightIcon />}
              >
                Les alle bestanddelene
              </ButtonLink>
            }
          >
            Les deg opp på hva komponent-biblioteket er og hva det består av
          </Card>
          <Card
            headingLevel="h2"
            headingText="Komponenter"
            imgSrc="/images/index/komponenter.png"
            imgAlt="Pusslebit"
            callToAction={
              <ButtonLink
                variant="strong"
                href="/komponenter/"
                icon={<ArrowCircleRightIcon />}
              >
                Se alle komponentene
              </ButtonLink>
            }
          >
            Se oversikten over de ferdige komponentene som kan tas i bruk
          </Card>
          <Card
            headingLevel="h2"
            headingText="Mønstre"
            imgSrc="/images/index/monstre.png"
            imgAlt="Tavle"
            callToAction={
              <ButtonLink
                variant="strong"
                href="/monstre/"
                icon={<ArrowCircleRightIcon />}
              >
                Se mønster og eksempler
              </ButtonLink>
            }
          >
            Se eksempler på hvordan du kan sette opp ofte brukte interaksjoner
            og sider
          </Card>
        </div>
      </section>

      <section
        className={clsx(
          style.index__section,
          style.index__sectionPrimary,
          style.index__sectionTabletGrid2,
          style.index__sectionTabletReverse,
        )}
      >
        <div className={style.index__sectionContent}>
          <Heading2 variant="medium">Samarbeid</Heading2>
          <Paragraph variant="lead">
            Å bygge et godt komponentbibliotek for Sikt vil være en laginnsats,
            der alle team er velkomne til å bidra inn. Det har allerede kommet
            inn mange gode bidrag fra ulike team, og vi håper at enda flere team
            ønsker å koble seg på fremover!
          </Paragraph>
          <ButtonGroup variant="right" className="sds-sikt-button-group">
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
              Se prosjektet i GitLab
            </ButtonLink>
            <ButtonLink
              variant="strong"
              iconVariant="left"
              icon={<SlackLogo />}
              href="https://sikt-no.slack.com/archives/C04K82KES0J"
            >
              Bli med i Slack-kanalen
            </ButtonLink>
          </ButtonGroup>
        </div>
        <div>
          <Contributors showEasterEggs={showEasterEggs} />
          {showEasterEggs && (
            <ButtonGroup variant="right">
              <Button
                variant="strong"
                onClick={handleLaunchClick}
                disabled={disableButton}
                icon="🎈"
              >
                Feire komponentbiblioteket 1 år
              </Button>
            </ButtonGroup>
          )}
        </div>
      </section>
    </>
  );
};

export default IndexPage;
