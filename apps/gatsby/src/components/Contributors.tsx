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
      { name: "Sigve", role: "Design", team: "Designsystemet" },
      { name: "Vegar", role: "Teknologi", team: "Designsystemet" },
      { name: "Kim", role: "Design", team: "Designsystemet" },
      { name: "Hanne", role: "Design", team: "Designsystemet" },
      { name: "Eivind", role: "Inkludering", team: "Designsystemet" },
      { name: "Kine", role: "Teknologi", team: "Designsystemet" },
      { name: "Sondre E.", role: "Design", team: "Designsystemet" },
      { name: "Kristoffer", role: "Teknologi", team: "Designsystemet" },
      { name: "Petter", role: "Design", team: "Designsystemet" },
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
      {
        name: "Kjartan",
        role: "Teknologi",
        team: "Studieadm. Min utdanning",
      },
      {
        name: "Sondre S.",
        role: "Teknologi",
        team: "Studieadm. Min utdanning",
      },
      { name: "Erik", role: "Teknologi", team: "Studieadm. Min utdanning" },
      { name: "Vegard", role: "Teknologi", team: "Studieadm. Min utdanning" },
      { name: "Hilde", role: "Design", team: "Studieadm. Min utdanning" },
      { name: "Jakob", role: "Teknologi", team: "Studieadm. Min utdanning" },
    ],
    [
      { name: "Sigurd", role: "Teknologi", team: "Kudaf" },
      { name: "Rolf Anders", role: "Design", team: "Kudaf" },
      { name: "Glaysa", role: "Teknologi", team: "Kudaf" },
    ],
    [
      { name: "Mats", role: "Teknologi", team: "Studieadm. Admin" },
      { name: "Marius", role: "Teknologi", team: "Studieadm. Admin" },
      { name: "Patrick", role: "Teknologi", team: "Studieadm. Admin" },
      { name: "An", role: "Teknologi", team: "Studieadm. Admin" },
    ],
    [
      { name: "Jonas", role: "Teknologi", team: "FS Studentportal" },
      { name: "Christian", role: "Design", team: "FS Studentportal" },
      { name: "Lasse", role: "Teknologi", team: "FS Studentportal" },
    ],
    [{ name: "Sondre L.", role: "Teknologi", team: "Studieadm. Kjerne" }],
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
                        aria-hidden="true"
                        loading="lazy"
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
