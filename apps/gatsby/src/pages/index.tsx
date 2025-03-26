import { useState } from "react";
import type { PageProps } from "gatsby";
import { clsx } from "clsx/lite";
import confetti from "canvas-confetti";
import { FigmaLogo, GitlabLogo, SlackLogo } from "@phosphor-icons/react";
import { Heading2, Paragraph } from "@sikt/sds-core";
import { Button, ButtonLink, ButtonGroup } from "@sikt/sds-button";
import useKonami from "react-use-konami";
import * as style from "./index.module.css";
import Contributors from "../components/Contributors";
import { Card } from "@sikt/sds-card";
import { Hero } from "../components/Hero";
import { NavigateToNextAltIcon } from "@sikt/sds-icons";

export { Head } from "../components/Head";

const IndexPage: React.FC<PageProps> = () => {
  const [showEasterEggs, setShowEasterEggs] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  useKonami(() => {
    setShowEasterEggs(true);
  });

  const team = [
    [
      { name: "Sigve", role: "Design", team: "Designsystem" },
      { name: "Kim", role: "Design", team: "Designsystem" },
      { name: "Eivind", role: "Inkludering", team: "Designsystem" },
      { name: "Kristoffer", role: "Teknologi", team: "Designsystem" },
      ...(showEasterEggs
        ? [
            {
              name: "Andreas",
              role: "Sjef",
              team: "Designsystem",
            },
          ]
        : []),
    ],
  ];

  const contributors = [
    [
      { name: "Vegar", role: "Teknologi", team: "Designsystem" },
      { name: "Hanne", role: "Design", team: "Designsystem" },
      { name: "Kine", role: "Teknologi", team: "Designsystem" },
      { name: "Sondre E.", role: "Design", team: "Designsystem" },
      { name: "Petter", role: "Design", team: "Designsystem" },
    ],
    [
      {
        name: "Kjartan",
        role: "Teknologi",
        team: "Min utdanning",
      },
      {
        name: "Sondre S.",
        role: "Teknologi",
        team: "Min utdanning",
      },
      { name: "Erik", role: "Teknologi", team: "Min utdanning" },
      { name: "Vegard", role: "Teknologi", team: "Min utdanning" },
      { name: "Hilde", role: "Design", team: "Min utdanning" },
      { name: "Jakob", role: "Teknologi", team: "Min utdanning" },
    ],
    [
      { name: "Sigurd", role: "Teknologi", team: "Kudaf" },
      { name: "Rolf Anders", role: "Design", team: "Kudaf" },
      { name: "Glaysa", role: "Teknologi", team: "Kudaf" },
    ],
    [
      { name: "Eirik", role: "Teknologi", team: "FS Admin" },
      { name: "Mats", role: "Teknologi", team: "FS Admin" },
      { name: "Marius", role: "Teknologi", team: "FS Admin" },
      { name: "Patrick", role: "Teknologi", team: "FS Admin" },
      { name: "An", role: "Teknologi", team: "FS Admin" },
    ],
    [
      { name: "Christian", role: "Design", team: "FS Studentportal" },
      { name: "Lasse", role: "Teknologi", team: "FS Studentportal" },
    ],
    [{ name: "Sondre L.", role: "Teknologi", team: "FS Kjerne" }],
    [{ name: "John-Magne", role: "Teknologi", team: "Feide Kundeportal" }],
    [{ name: "Deg", role: "Din rolle", team: "Ditt team" }],
  ];

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
        heading={<>Design&shy;system</>}
        leadParagraph="Velkommen til Sikts designsystem. Dette er en sammensetning av
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
            image={
              <img src="/images/index/grunnleggende.png" alt="Portfølje" />
            }
            callToAction={
              <ButtonLink
                variant="strong"
                href="/grunnleggende/"
                icon={<NavigateToNextAltIcon />}
              >
                Les alle bestanddelene
              </ButtonLink>
            }
          >
            Les deg opp på hva designsystemet er og hva det består av
          </Card>
          <Card
            headingLevel="h2"
            headingText="Komponenter"
            image={<img src="/images/index/komponenter.png" alt="Pusslebit" />}
            callToAction={
              <ButtonLink
                variant="strong"
                href="/komponenter/"
                icon={<NavigateToNextAltIcon />}
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
            image={<img src="/images/index/monstre.png" alt="Tavle" />}
            callToAction={
              <ButtonLink
                variant="strong"
                href="/monstre/"
                icon={<NavigateToNextAltIcon />}
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
            Å bygge et godt designsystem for Sikt vil være en laginnsats, der
            alle team er velkomne til å bidra inn. Det har allerede kommet inn
            mange gode bidrag fra ulike team, og vi håper at enda flere team
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
        <div className={style.index__sectionContent}>
          <Contributors
            heading="Team"
            contributors={team}
            showEasterEggs={showEasterEggs}
          />
          {showEasterEggs && (
            <ButtonGroup variant="right">
              <Button
                variant="strong"
                onClick={handleLaunchClick}
                disabled={disableButton}
                icon="🎈"
              >
                Feire designsystemet 2 år
              </Button>
            </ButtonGroup>
          )}
          <Contributors
            heading="Bidrag fra"
            contributors={contributors}
            showEasterEggs={showEasterEggs}
          />
        </div>
      </section>
    </>
  );
};

export default IndexPage;
