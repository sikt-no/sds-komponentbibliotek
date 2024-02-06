import { HeadFC } from "gatsby";
import favicon32 from "@sikt/sds-logo/Favicon-Light@32px.png";
import favicon180 from "@sikt/sds-logo/Favicon-Light@180px.png";
import faviconSvg from "@sikt/sds-logo/Favicon-Light.svg";
import * as tokens from "@sikt/sds-tokens/dist/js/tokens.js";
import * as colorDark from "@sikt/sds-tokens/dist/js/color.dark.js";

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="nb" />
      <title>Sikt designsystem</title>
      <link rel="icon" href={favicon32} sizes="any" />
      <link rel="icon" href={faviconSvg} type="image/svg+xml" />
      <link rel="apple-touch-icon" href={favicon180} />
      <meta
        name="theme-color"
        content={tokens.default.color.brand.primary.strong.value}
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content={colorDark.default.color.brand.primary.strong.value}
      />
    </>
  );
};
