import { Heading2, Heading3 } from "@sikt/sds-core";
import * as style from "./contributors.module.css";
import Contributor from "./Contributor";

const Contributors = ({
  heading,
  contributors,
  showEasterEggs = false,
}: {
  heading: string;
  contributors: [];
  showEasterEggs?: boolean;
}) => {
  return (
    <>
      <Heading2 variant="medium">{heading}</Heading2>
      <div className={style.contributors}>
        {contributors.reverse().map((team) => {
          return (
            <div key={team[0].team}>
              {contributors.length > 1 && (
                <Heading3 variant="overline">{team[0].team}</Heading3>
              )}
              <div className={style.contributors__contributorGroup}>
                {team.map((contributor) => {
                  return (
                    <Contributor
                      {...contributor}
                      showEasterEggs={showEasterEggs}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contributors;
