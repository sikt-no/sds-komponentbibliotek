import type { TransformedToken } from "style-dictionary";
import { dotToKebab, pascalToKebab } from "./string.ts";

export const tokenName = (token: TransformedToken) =>
  `--${pascalToKebab(token.name)}`;

export const tokenToKebab = (str: string) =>
  dotToKebab(str.replaceAll("{", "").replaceAll("}", "").replaceAll("_", ""));
