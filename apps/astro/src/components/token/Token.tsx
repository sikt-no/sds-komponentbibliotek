import { Paragraph } from "@sikt/sds-core";
import type { TransformedToken } from "style-dictionary";
import { dotToKebab } from "../../utils/string.ts";

const tokenToKebab = (str: string) =>
  dotToKebab(str.replaceAll("{", "").replaceAll("}", ""));

const tokenOriginalName = (token: TransformedToken) => {
  const originalValue = `${token.original.value}`;
  return tokenToKebab(originalValue);
};

const tokenValueOrOriginal = (token: TransformedToken) => {
  const originalValue = `${token.original.value}`;
  return originalValue.includes("}")
    ? tokenOriginalName(token)
    : `${token.value}`;
};

export const Token = ({ token }: { token: TransformedToken }) => {
  const originalValue = `${token.original.value}`;
  return (
    <>
      {originalValue.includes("}") ? (
        <Paragraph as="span" size="s">
          {tokenValueOrOriginal(token)}
        </Paragraph>
      ) : (
        token.value
      )}
    </>
  );
};
