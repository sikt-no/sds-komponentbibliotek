import { Heading3 } from "@sikt/sds-core";
import { UserCircleIcon } from "@sikt/sds-icons";
import * as style from "./contributors.module.css";

const Contributors = ({
  showEasterEggs = false,
}: {
  showEasterEggs?: boolean;
}) => {
  const contributors = [
    [
      { name: "Kim", role: "Design", team: "Komponentbiblioteket" },
      { name: "Hanne", role: "Design", team: "Komponentbiblioteket" },
      { name: "Eivind", role: "Inkludering", team: "Komponentbiblioteket" },
      { name: "Kine", role: "Teknologi", team: "Komponentbiblioteket" },
      { name: "Sondre E.", role: "Design", team: "Komponentbiblioteket" },
      { name: "Kristoffer", role: "Teknologi", team: "Komponentbiblioteket" },
      { name: "Petter", role: "Design", team: "Komponentbiblioteket" },
      ...(showEasterEggs
        ? [
            {
              name: "Andreas",
              role: "Sjef",
              team: "Komponentbiblioteket",
            },
          ]
        : []),
    ],
    [
      { name: "Kjartan", role: "Teknologi", team: "Opptak Søker" },
      { name: "Sondre S.", role: "Teknologi", team: "Opptak Søker" },
      { name: "Erik", role: "Teknologi", team: "Opptak Søker" },
      { name: "Vegard", role: "Teknologi", team: "Opptak Søker" },
      { name: "Hilde", role: "Design", team: "Opptak Søker" },
      { name: "Jakob", role: "Teknologi", team: "Opptak Søker" },
    ],
    [
      { name: "Sigurd", role: "Teknologi", team: "Kudaf" },
      { name: "Rolf Anders", role: "Design", team: "Kudaf" },
      { name: "Glaysa", role: "Teknologi", team: "Kudaf" },
    ],
    [
      { name: "Marius", role: "Teknologi", team: "Opptak Søknadsbehandling" },
      { name: "Patrick", role: "Teknologi", team: "Opptak Søknadsbehandling" },
      { name: "An", role: "Teknologi", team: "Opptak Søknadsbehandling" },
    ],
    [
      { name: "Jonas", role: "Teknologi", team: "FS Studentportal" },
      { name: "Christian", role: "Design", team: "FS Studentportal" },
      { name: "Lasse", role: "Teknologi", team: "FS Studentportal" },
    ],
    [{ name: "Sondre L.", role: "Teknologi", team: "Opptak Kjerne" }],
    [{ name: "John-Magne", role: "Teknologi", team: "Feide Kundeportal" }],
    [{ name: "Deg", role: "Din rolle", team: "Ditt team" }],
  ];

  return (
    <div className={style.contributors}>
      {contributors.reverse().map((team) => {
        return (
          <div key={team[0].team}>
            <Heading3 variant="overline">{team[0].team}</Heading3>
            <div className={style.contributors__contributorGroup}>
              {team.map((contributor) => {
                return (
                  <div
                    key={contributor.name}
                    className={style.contributors__contributor}
                  >
                    {showEasterEggs && contributor.name === "Andreas" && (
                      <div className={style.contributors__crown}>👑</div>
                    )}
                    {showEasterEggs && contributor.name === "Kristoffer" && (
                      <div className={style.contributors__glasses}>🕶️</div>
                    )}
                    {showEasterEggs && contributor.name === "Hilde" && (
                      <div className={style.contributors__confetti}>🎉️</div>
                    )}
                    {showEasterEggs && contributor.name === "Jakob" && (
                      <div className={style.contributors__hand}>✌️️</div>
                    )}
                    {showEasterEggs && contributor.name === "Rolf Anders" && (
                      <div className={style.contributors__handLeft}>🤟</div>
                    )}
                    {showEasterEggs && contributor.name === "Sondre L." && (
                      <div className={style.contributors__balloon}>🎈️</div>
                    )}
                    {showEasterEggs && contributor.name === "Petter" && (
                      <div className={style.contributors__crown}>🎩️</div>
                    )}
                    {contributor.name === "Deg" && (
                      <UserCircleIcon
                        className={`${style.contributors__contributorImage} ${style.contributors__contributorImageAnimation}`}
                      />
                    )}
                    {contributor.name !== "Deg" && (
                      <img
                        className={style.contributors__contributorImage}
                        src={`/images/contributors/${contributor.name
                          .toLowerCase()
                          .replaceAll(" ", "-")
                          .replaceAll(".", "")}.png`}
                        alt={contributor.name}
                      />
                    )}
                    <div>{contributor.name}</div>
                    <div className="sds-typography-body--small">
                      {contributor.role}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contributors;
