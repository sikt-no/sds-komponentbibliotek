import { Badge } from "@sikt/sds-badge";

export const Token = ({ token }) => {
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
