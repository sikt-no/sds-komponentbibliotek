import type { GatsbyConfig } from "gatsby";
//import * as tokens from "@sikt/sds-tokens";
//import favicon192 from "@sikt/sds-logo/Favicon-Light@192px.png";
//import favicon512 from "@sikt/sds-logo/Favicon-Light@512px.png";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Sikt designsystem",
    siteUrl: "https://designsystem.sikt.no",
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
    "gatsby-plugin-force-file-loader",
    "gatsby-plugin-layout",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        sitemap: "sitemap-index.xml",
      },
    },
    /*{
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Sikt designsystem",
        short_name: "SiktDS",
        start_url: "/",
        theme_color: tokens.default.color.background.action.value,
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
      },
    },*/
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "components",
        path: `${__dirname}/../packages`,
        ignore: [
          "**/.*",
          "**/*.png",
          "**/*.svg",
          "**/*.md",
          "**/*.pcss",
          "**/*.mjs",
          "**/*.js",
          "**/*.ts",
          "**/*.tsx",
          "**/*.html",
          "**/*.json",
          "**/.turbo/**",
          "**/build/**",
          "**/dist/**",
          "**/stories/**",
        ],
      },
    },
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
  jsxRuntime: "automatic",
};

export default config;
