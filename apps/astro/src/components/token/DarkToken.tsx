import { Paragraph } from "@sikt/sds-core";
import type { TransformedToken } from "style-dictionary";
import { tokenToKebab } from "../../utils/token.ts";

export const DarkToken = ({ token }: { token: TransformedToken }) => {
  const originalValue = `${token.original.dark}`;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return originalValue.includes("}") ? (
    <Paragraph as="span" size="s">
      {tokenToKebab(originalValue)}
    </Paragraph>
  ) : (
    token.dark
  );
};
DarkToken.displayName = "DarkToken";
