import { Paragraph } from "@sikt/sds-core";
import { Section } from "@sikt/sds-section";
import type { Contributors as ContributorsType } from "../../_data/contributors.ts";
import { Contributor } from "./Contributor";
import styles from "./contributors.module.css";

export const ContributorList = ({
  heading,
  contributors,
  showEasterEggs = false,
}: {
  heading: string;
  contributors: ContributorsType[];
  showEasterEggs?: boolean;
}) => {
  return (
    <Section headingText={heading}>
      <div className={styles.contributors}>
        {contributors.map((group) => {
          return (
            <div key={group[0].team} className="ds-content-max-width">
              {contributors.length > 1 && (
                <Paragraph variant="overline" as="h3">
                  {group[0].team}
                </Paragraph>
              )}
              <div className={styles.group}>
                {group.map((contributor) => {
                  return (
                    <Contributor
                      key={contributor.name}
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
    </Section>
  );
};
