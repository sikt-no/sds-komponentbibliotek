import { Paragraph } from "@sikt/sds-core";
import type { TransformedToken } from "style-dictionary";
import { dotToKebab } from "../../utils/string.ts";

const tokenToKebab = (str: string) =>
  dotToKebab(str.replaceAll("{", "").replaceAll("}", ""));

const tokenOriginalName = (token: TransformedToken) =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  `--${tokenToKebab(token.original.value)}`;

const tokenValueOrOriginal = (token: TransformedToken) =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
  token.original.value.indexOf("}") > -1
    ? tokenOriginalName(token)
    : token.value;

export const Token = ({ token }: { token: TransformedToken }) => {
  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access */}
      {token.original.value.indexOf("}") > -1 ? (
        <Paragraph as="span" size="s">
          {tokenValueOrOriginal(token)}
        </Paragraph>
      ) : (
        token.value
      )}
    </>
  );
};
