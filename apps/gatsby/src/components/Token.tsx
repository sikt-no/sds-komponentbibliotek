import { Badge } from "@sikt/sds-badge";
import type { DesignToken } from "style-dictionary";

export const Token = ({ token }: { token: DesignToken }) => {
  return (
    <>
      {token.original.value.indexOf("}") > -1 ? (
        <Badge>{`--sds-${token.original.value
          .split(".")
          .join("-")
          .replaceAll("{", "")
          .replaceAll("}", "")}`}</Badge>
      ) : (
        token.value
      )}
    </>
  );
};
