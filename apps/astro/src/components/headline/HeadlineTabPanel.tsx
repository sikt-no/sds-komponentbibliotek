import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@sikt/sds-table";
import desktop from "@sikt/sds-tokens/dist/js/tokens.desktop.mjs";
import tokens from "@sikt/sds-tokens/dist/js/tokens.mjs";
import tablet from "@sikt/sds-tokens/dist/js/tokens.tablet.mjs";
import { Token } from "../token/Token.tsx";
import styles from "./headline-tabs.module.css";
import { HeadlineCard } from "./HeadlineCard.tsx";

export const HeadlineTabPanel = ({
  type = "editorial",
  device = "mobile",
}: {
  type: string;
  device: "mobile" | "tablet" | "desktop";
}) => {
  // TODO: ts
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
  const data = tokens.typography[type].headline;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
  const dataTablet = tablet.typography[type].headline;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
  const dataDesktop = desktop.typography[type].headline;
  return (
    <div className={styles.panel}>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */}
      {Object.entries(data)
        .reverse()
        .map((group) => {
          return (
            <HeadlineCard
              key={group[0]}
              heading={`${type}/headline-${group[0]}`}
            >
              <Table caption="Designtokens for editorial headline">
                <TableHead>
                  <TableRow>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Token</TableHeader>
                    <TableHeader>Verdi</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(group[1]).map((token) => {
                    const tokenMobile = token[1];
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    const tokenTablet =
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                      dataTablet[group[0]]?.[token[0]] ?? tokenMobile;
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    const tokenDesktop =
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                      dataDesktop[group[0]]?.[token[0]] ?? tokenTablet;

                    let value = tokenMobile;
                    if (device === "tablet") {
                      value = tokenTablet;
                    } else if (device === "desktop") {
                      value = tokenDesktop;
                    }

                    return (
                      <TableRow key={token[0]}>
                        <TableCell data-th="Type">{token[0]}</TableCell>
                        <TableCell data-th="Token">
                          <Token token={value} />
                        </TableCell>
                        <TableCell data-th="Verdi">{value.value}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </HeadlineCard>
          );
        })}
    </div>
  );
};
