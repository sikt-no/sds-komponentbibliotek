import favicon192 from "@sikt/sds-logo/Favicon-Light@192px.png";
import favicon512 from "@sikt/sds-logo/Favicon-Light@512px.png";
import tokens from "@sikt/sds-tokens/dist/js/tokens.mjs";

export function GET() {
  const manifest = {
    short_name: "Sikt DS",
    name: "Sikt designsystem",
    display: "browser",
    start_url: "/",
    background_color: tokens.color.layout.background.default.value,
    theme_color: tokens.color.brand.accent.strong.value,
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
