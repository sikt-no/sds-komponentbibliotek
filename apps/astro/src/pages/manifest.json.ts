import favicon192 from "@sikt/sds-logo/Favicon-Light@192px.png";
import favicon512 from "@sikt/sds-logo/Favicon-Light@512px.png";
import * as tokens from "@sikt/sds-tokens";

export function GET() {
  const manifest = {
    short_name: "Sikt DS",
    name: "Sikt designsystem",
    display: "browser",
    start_url: "/",
    background_color: `${tokens.default.color.layout.background.default.value}`,
    theme_color: `${tokens.default.color.brand.accent.strong.value}`,
    icons: [
      {
        src: favicon192,
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: favicon512,
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };

  return new Response(JSON.stringify({ manifest }));
}
