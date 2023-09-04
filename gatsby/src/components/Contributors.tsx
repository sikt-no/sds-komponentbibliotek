import React from "react";
import { Heading4 } from "@sikt/sds-core";
import { UserCircleIcon } from "@sikt/sds-icons";
import * as style from "./contributors.module.css";

const Contributors = () => {
  const contributors = [
    [{ name: "Deg", role: "Din rolle", team: "Ditt team" }],
    [
      { name: "Hanne", role: "Design", team: "Komponentbiblioteket" },
      { name: "Eivind", role: "Inkludering", team: "Komponentbiblioteket" },
      { name: "Kine", role: "Teknologi", team: "Komponentbiblioteket" },
      { name: "Sondre Ek", role: "Design", team: "Komponentbiblioteket" },
      { name: "Kristoffer", role: "Teknologi", team: "Komponentbiblioteket" },
      { name: "Petter", role: "Design", team: "Komponentbiblioteket" },
    ],
    [
      { name: "Erik", role: "Teknologi", team: "Opptak Søker" },
      { name: "Vegard", role: "Teknologi", team: "Opptak Søker" },
      { name: "Hilde", role: "Design", team: "Opptak Søker" },
      { name: "Jakob", role: "Teknologi", team: "Opptak Søker" },
    ],
    [
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
    [{ name: "Sondre", role: "Teknologi", team: "Opptak Kjerne" }],
  ];

  return (
    <div className={style.sdsSiktContributors}>
      {contributors.reverse().map((team) => {
        return (
          <div key={team[0].team}>
            <Heading4 headingType="overline">{team[0].team}</Heading4>
            <div className={style.sdsSiktContributors__contributorGroup}>
              {team.map((contributor) => {
                return (
                  <div
                    key={contributor.name}
                    className={style.sdsSiktContributors__contributor}
                  >
                    {contributor.name === "Deg" && (
                      <UserCircleIcon
                        className={`${style.sdsSiktContributors__contributorImage} ${style.sdsSiktContributors__contributorImageAnimation}`}
                      />
                    )}
                    {contributor.name !== "Deg" && (
                      <img
                        className={style.sdsSiktContributors__contributorImage}
                        src={`/images/${contributor.name
                          .toLowerCase()
                          .replaceAll(" ", "-")}.png`}
                        alt={contributor.name}
                      />
                    )}
                    <div className="sds-typography-strong">
                      {contributor.name}
                    </div>
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
