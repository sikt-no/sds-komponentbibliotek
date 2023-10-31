import React, { useState } from "react";
import type { PageProps } from "gatsby";
import confetti from "canvas-confetti";
import { Heading1, Heading2, Heading3 } from "@sikt/sds-core";
import { Button } from "@sikt/sds-button";
import useKonami from "react-use-konami";
import * as style from "./index.module.css";
import Contributors from "../components/Contributors";
import * as tokens from "@sikt/sds-tokens/dist/js/tokens.js";
import { Link } from "@sikt/sds-core/components/Link";

const IndexPage: React.FC<PageProps> = () => {
  const [showButton, setShowButton] = useState(false);

  useKonami(() => {
    setShowButton(true);
  });

  const handleLaunchClick = () => {
    const end = Date.now() + 10 * 1000;
    const colors = [
      tokens.default.color.support.warning.default.value,
      tokens.default.color.support.critical.strong.value,
    ];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <>
      <section className={style.sdsSiktIndex__section}>
        <Heading1 variant="huge">Sikt design&shy;system</Heading1>

        <p className={style.sdsSiktIndex__paragraph}>
          Sikt designsystem består av flere bestanddeler, derunder
          komponentbiblioteket, som sammen bidrar til å definere hva opplevelsen
          av Sikt skal være. Designsystemet er under arbeid, men vil etterhvert
          tilgjengeliggjøres og dokumenteres på denne siden. Deler av
          designsystemet (derunder typografi, fargepalett og ikoner) er per nå
          dokumentert i komponentbiblioteket.
        </p>

        <section className={style.sdsSiktIndex__section}>
          <Heading2 variant="large">Komponent&shy;bibliotek</Heading2>

          <p className={style.sdsSiktIndex__paragraph}>
            Sikt komponentbibliotek inneholder en rekke nyttige komponenter som
            kan brukes i design og utvikling av nettsider og applikasjoner. Det
            er flere fordeler ved å ta i bruk komponentbiblioteket. For det
            første vil utviklingsprosessen kunne gå raskere, ettersom man ikke
            trenger å bygge alt fra bunnen av hver gang. For det andre vil bruk
            av komponentene sannsynligvis redusere risiko for bugs og manglende
            universell utforming, siden komponentene er grundig testet i
            forkant. For det andre vil komponentene gjøre det mulig å skape en
            mer helhetlig opplevelse på tvers av Sikt sine
            nettsider/applikasjoner, da det visuelle uttrykket og
            interaksjonsmønstrene vil være gjenkjennbart for brukeren.
          </p>

          <p className={style.sdsSiktIndex__paragraph}>
            Komponentbiblioteket vil være en kombinasjon av enkeltstående
            komponenter, samt retningslinjer for hvordan ulike komponenter kan
            settes sammen til en mer helhetlig side (se "Guidelines" og
            "Patterns" i Figma). Per i dag er komponentbiblioteket tilgjengelig
            i{" "}
            <Link
              href="https://www.figma.com/file/6AVtxjDULlUdl9F4JEHAfv/Komponentbibliotek-v0.1"
              target="_blank"
            >
              Figma
            </Link>
            ,{" "}
            <Link
              href="https://gitlab.sikt.no/designsystem/sds-komponentbibliotek"
              target="_blank"
            >
              Gitlab
            </Link>{" "}
            og{" "}
            <Link href="https://www.npmjs.com/search?q=%40sikt" target="_blank">
              npmjs
            </Link>
            . Å bygge et godt komponentbibliotek for Sikt vil være en
            laginnsats, der alle team er velkomne til å bidra inn. Det har
            allerede kommet inn mange gode bidrag fra ulike team, og vi håper at
            enda flere team ønsker å koble seg på fremover!
          </p>

          <section>
            <Heading3 variant="paragraph">Med bidrag fra</Heading3>
            <div className={style.sdsSiktIndex__paragraph}>
              <Contributors />
            </div>
          </section>

          {showButton && (
            <div className={style.sdsSiktIndex__cta}>
              <Button variant="strong" onClick={handleLaunchClick} icon="🚀">
                Lansere komponentbibliotek v1
              </Button>
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default IndexPage;

export { Head } from "../components/Head";
