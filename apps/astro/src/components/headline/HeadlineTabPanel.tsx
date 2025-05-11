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
import { clsx } from "clsx/lite";
import { Token } from "../token/Token.tsx";
import styles from "./headline-tabs.module.css";
import { HeadlineCard } from "./HeadlineCard.tsx";

export const HeadlineTabPanel = ({
  type = "editorial",
  device = "mobile",
}: {
  type?: "editorial" | "application";
  device?: "mobile" | "tablet" | "desktop";
}) => {
  const dataMobile = tokens.typography[type].headline;
  const dataTablet = tablet.typography[type].headline;
  const dataDesktop = desktop.typography[type].headline;

  return (
    <div className={clsx(styles.panel, "ds-content-max-width")}>
      {Object.entries(dataMobile)
        .reverse()
        .map((group) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          let data = { ...dataMobile[group[0]] };
          if (device === "tablet") {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            data = { ...data, ...dataTablet[group[0]] };
          }
          if (device === "desktop") {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            data = { ...data, ...dataDesktop[group[0]] };
          }

          return (
            <HeadlineCard
              key={group[0]}
              heading={
                <>
                  {type}/<wbr />
                  headline-{group[0]}
                </>
              }
              style={{
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
                fontSize: data.fontsize?.value,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
                fontWeight: data.fontweight?.value,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
                lineHeight: data.lineheight?.value,
              }}
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
                    return (
                      <TableRow key={token[0]}>
                        <TableCell data-th="Type">{token[0]}</TableCell>
                        <TableCell data-th="Token">
                          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment */}
                          <Token token={data?.[token[0]]} />
                        </TableCell>
                        <TableCell data-th="Verdi">
                          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
                          {data?.[token[0]].value}
                        </TableCell>
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
