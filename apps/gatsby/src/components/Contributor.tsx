import * as style from "./contributors.module.css";
import { UserProfileIcon } from "@sikt/sds-icons";

const Contributor = ({ name, role, showEasterEggs }) => {
  return (
    <div key={name} className={style.contributors__contributor}>
      {showEasterEggs && name === "Andreas" && (
        <div className={style.contributors__crown}>👑</div>
      )}
      {showEasterEggs && name === "Kristoffer" && (
        <div className={style.contributors__glasses}>🕶️</div>
      )}
      {showEasterEggs && name === "Hilde" && (
        <div className={style.contributors__confetti}>🎉️</div>
      )}
      {showEasterEggs && name === "Jakob" && (
        <div className={style.contributors__hand}>✌️️</div>
      )}
      {showEasterEggs && name === "Rolf Anders" && (
        <div className={style.contributors__handLeft}>🤟</div>
      )}
      {showEasterEggs && name === "Sondre L." && (
        <div className={style.contributors__balloon}>🎈️</div>
      )}
      {showEasterEggs && name === "Petter" && (
        <div className={style.contributors__crown}>🎩️</div>
      )}
      {name === "Deg" && (
        <UserProfileIcon
          className={`${style.contributors__contributorImage} ${style.contributors__contributorImageAnimation}`}
        />
      )}
      {name !== "Deg" && (
        <img
          className={style.contributors__contributorImage}
          src={`/images/contributors/${name
            .toLowerCase()
            .replaceAll(" ", "-")
            .replaceAll(".", "")}.png`}
          alt={name}
          aria-hidden="true"
          loading="lazy"
        />
      )}
      <div>{name}</div>
      <div className="sds-typography-body--small">{role}</div>
    </div>
  );
};

export default Contributor;
