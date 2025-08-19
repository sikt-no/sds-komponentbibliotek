import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@sikt/sds-table";
import tokens from "@sikt/sds-tokens/dist/js/tokens.mjs";
import { clsx } from "clsx/lite";
import { Token } from "../../../../../components";
import styles from "../typography/typography-panel.module.css";
import { TypographyCard } from "./TypographyCard.tsx";

export const TypographyPanel = ({
  type = "body",
}: {
  type?: "label" | "body" | "overline";
}) => {
  const dataMobile = tokens.typography[type];

  return (
    <div className={clsx(styles.panel, "ds-content-max-width")}>
      {Object.entries(dataMobile)
        .reverse()
        .map((group) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const data = { ...dataMobile[group[0]] };

          return (
            <TypographyCard
              key={group[0]}
              heading={
                <>
                  {type}/<wbr />
                  headline-{group[0]}
                </>
              }
              style={{
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
                fontSize: data.fontsize?.$value,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
                fontWeight: data.fontweight?.$value,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
                lineHeight: data.lineheight?.$value,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
                textTransform: data.texttransform?.$value,
              }}
            >
              <Table caption={`Designtokens for ${type}`}>
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
                          {data?.[token[0]].$value}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TypographyCard>
          );
        })}
    </div>
  );
};
