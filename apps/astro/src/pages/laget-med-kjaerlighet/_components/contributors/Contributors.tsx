import { Button, ButtonGroup } from "@sikt/sds-button";
import confetti from "canvas-confetti";
import { useState } from "react";
import useKonami from "../../../../utils/useKonami.ts";
import { contributors, team } from "../../_data/contributors.ts";
import { ContributorList } from "./ContributorList.tsx";

export const Contributors = () => {
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

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    confetti({
      ...defaults,
    });

    setTimeout(() => {
      setDisableButton(false);
    }, 1000);
  };

  return (
    <>
      <ContributorList
        heading="Laget"
        contributors={team}
        showEasterEggs={showEasterEggs}
      />
      {showEasterEggs && (
        <ButtonGroup variant="right">
          <Button
            variant="strong"
            icon="🎈"
            onClick={handleLaunchClick}
            disabled={disableButton}
          >
            Feire designsystemet 2 år
          </Button>
        </ButtonGroup>
      )}
      <ContributorList
        heading="Bidragsytere"
        contributors={contributors}
        showEasterEggs={showEasterEggs}
      />
    </>
  );
};
