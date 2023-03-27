import React, { useState } from "react";
import type { PageProps } from "gatsby";
import confetti from "canvas-confetti";
import { Heading1, Heading2, Heading3 } from "@sikt/sds-core";
import { PrimaryButton } from "@sikt/sds-button";
import useKonami from "react-use-konami";
import * as style from "./index.module.css";
import Contributors from "../components/Contributors";
import * as tokens from "@sikt/sds-core/dist/tokens/js/tokens.js";

const IndexPage: React.FC<PageProps> = () => {
  const [showButton, setShowButton] = useState(false);

  useKonami(() => {
    console.log("hi easter egg!");
    setShowButton(true);
  });

  const handleLaunchClick = () => {
    const end = Date.now() + 10 * 1000;
    const colors = [
      tokens.default.color.surface.info.value,
      tokens.default.color.surface.warning.value,
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
        <Heading1 headingType="xxlarge">Sikt designsystem</Heading1>

        <p className={style.sdsSiktIndex__paragraph}>
          Sikt designsystem er under arbeid.
        </p>

        <p className={style.sdsSiktIndex__paragraph}>
          Her vil du i på sikt finne... og komponentbibliotek, retningslinjer
          for design, kodekomponenter.
        </p>

        <section className={style.sdsSiktIndex__section}>
          <Heading2 headingType="large">Sikt komponentbibliotek</Heading2>

          <p className={style.sdsSiktIndex__paragraph}>
            Sikt komponentbiblioteket er en del av{" "}
            <span className="sds-typography-em">Sikt designsystem</span>.
          </p>

          <p className={style.sdsSiktIndex__paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque faucibus, ipsum non rhoncus consectetur, nisl augue
            iaculis quam, ac dapibus turpis velit in justo. Nam at condimentum
            ipsum. Mauris tincidunt facilisis luctus. Suspendisse potenti. Etiam
            vel mi justo. Quisque ultrices sed mi ac convallis. Nulla quis arcu
            ex. Aenean non tortor nec odio ultrices euismod. In iaculis justo eu
            rutrum auctor. In vehicula posuere enim ut efficitur. Aliquam
            volutpat lectus in nulla ultrices, in maximus eros tempor.
          </p>

          <section className={style.sdsSiktIndex__section}>
            <Heading3 headingType="paragraph">Med bidrag fra</Heading3>
            <div className={style.sdsSiktIndex__paragraph}>
              <Contributors />
            </div>
          </section>

          {showButton && (
            <div className={style.sdsSiktIndex__cta}>
              <PrimaryButton onClick={handleLaunchClick} icon="🚀">
                Lansere komponentbibliotek v1
              </PrimaryButton>
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default IndexPage;

export { Head } from "../components/Head";
