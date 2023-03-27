import React from "react";
import { Heading4 } from "@sikt/sds-core";
import { Icon } from "@sikt/sds-icons";
import * as style from "./contributors.module.css";

const Contributors = () => {
  const contributors = [
    [{ name: "Deg", role: "Din rolle", team: "Ditt team" }],
    [
      { name: "Kine", role: "Dev", team: "Komponentbibliotekt" },
      { name: "Petter", role: "Design" },
      { name: "Kristoffer", role: "Dev" },
      { name: "Sondre Ek", role: "Design" },
    ],
    [
      { name: "Hilde", role: "Design", team: "Opptak Søker" },
      { name: "Jakob", role: "Dev" },
    ],
    [
      { name: "Rolf Anders", role: "Design", team: "Kudaf" },
      { name: "Glaysa", role: "Dev" },
    ],
    [
      { name: "Patrick", role: "Dev", team: "Opptak Søknadsbehandling" },
      { name: "An", role: "Dev" },
    ],
    [{ name: "Christian", role: "Design", team: "Studentportal" }],
    [{ name: "Sondre", role: "Dev", team: "Opptak Kjerne" }],
  ];

  return (
    <div className={style.sdsSiktContributors}>
      {contributors.reverse().map((team) => {
        return (
          <div key={team[0].team}>
            <Heading4 headingType="overline">{team[0].team}</Heading4>
            <div
              className={`${style.sdsSiktContributors__contributorGroup} ${
                team.length === 1 &&
                style.sdsSiktContributors__contributorGroupOne
              }`}
            >
              {team.map((contributor) => {
                return (
                  <div
                    key={contributor.name}
                    className={style.sdsSiktContributors__contributor}
                  >
                    {contributor.name === "Deg" && (
                      <Icon
                        icon="user-circle"
                        className={`${style.sdsSiktContributors__contributorImage} ${style.sdsSiktContributors__contributorImageAnimation}`}
                      />
                    )}
                    {contributor.name !== "Deg" && (
                      <img
                        className={style.sdsSiktContributors__contributorImage}
                        src={`./images/${contributor.name
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
