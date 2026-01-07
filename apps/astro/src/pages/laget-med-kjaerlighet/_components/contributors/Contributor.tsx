import { UserProfileIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import type { Contributor as ContributorType } from "../../_data/contributors.ts";
import styles from "./contributors.module.css";

export const Contributor = ({
  name,
  role,
  showEasterEggs,
}: ContributorType & {
  showEasterEggs: boolean;
}) => {
  if (name === "Andreas" && !showEasterEggs) {
    return;
  }

  const imgName = name.toLowerCase().replaceAll(" ", "-").replaceAll(".", "");
  const imgSrc = `/images/contributors/${imgName}.png`;

  return (
    <div className={styles.contributor}>
      {showEasterEggs && name === "Andreas" && (
        <div className={styles.crown}>👑</div>
      )}
      {showEasterEggs && name === "Kristoffer" && (
        <div className={styles.glasses}>🕶</div>
      )}
      {showEasterEggs && name === "Hilde" && (
        <div className={styles.confetti}>🎉️</div>
      )}
      {showEasterEggs && name === "Jakob" && (
        <div className={styles.hand}>✌️️</div>
      )}
      {showEasterEggs && name === "Rolf Anders" && (
        <div className={styles.handLeft}>🤟</div>
      )}
      {showEasterEggs && name === "Sondre L." && (
        <div className={styles.balloon}>🎈️</div>
      )}
      {showEasterEggs && name === "Petter S." && (
        <div className={styles.crown}>🎩️</div>
      )}
      {name === "Deg" && (
        <UserProfileIcon className={clsx(styles.image, styles.pulse)} />
      )}
      {showEasterEggs && name === "Andreas" && (
        <div className={styles.crown}>👑</div>
      )}
      {name !== "Deg" && (
        <img
          className={styles.image}
          src={imgSrc}
          alt=""
          aria-hidden
          loading="lazy"
        />
      )}
      <div>{name}</div>
      <div className="sds-typography-body--s">{role}</div>
    </div>
  );
};
