import type { GatsbyConfig } from "gatsby";
//import * as tokens from "@sikt/sds-core/dist/tokens/js/tokens.js";
//import favicon192 from "@sikt/sds-logo/Favicon-Light@192px.png";
//import favicon512 from "@sikt/sds-logo/Favicon-Light@512px.png";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Sikt designsystem`,
    siteUrl: `https://designsystem.sikt.no`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("autoprefixer"),
          require("postcss-nested"),
          require("postcss-import"),
          require("postcss-custom-media"),
        ],
      },
    },
    "gatsby-plugin-layout",
    /*{
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Sikt designsystem",
        short_name: "SiktDS",
        start_url: "/",
        theme_color: tokens.default.color.background.action.value,
        icons: [
          {
            src: favicon192.src,
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: favicon512.src,
            type: "image/png",
            sizes: "512x512",
          },
        ],
      },
    },*/
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "48",
        matomoUrl: "https://matomo.sikt.no/",
        siteUrl: "https://designsystem.sikt.no",
        disableCookies: true,
        respectDnt: true,
      },
    },
  ],
};

export default config;
