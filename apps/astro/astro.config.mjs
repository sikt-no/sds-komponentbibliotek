// @ts-check
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import matomo from "astro-matomo";
import svgr from "vite-plugin-svgr";
import { loadEnv } from "vite";
import pagefind from "astro-pagefind";

const { PUBLIC_STORYBOOK_URL } = loadEnv(
  process.env.NODE_ENV ?? "",
  process.cwd(),
  "",
);
const siteUrl = "https://designsystem.sikt.no";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    react(),
    matomo({
      enabled: import.meta.env.PROD,
      host: "https://matomo.sikt.no/",
      siteId: 48,
      disableCookies: true,
    }),
    sitemap({
      customPages: [`${siteUrl}/storybook/`],
    }),
    pagefind(),
  ],
  site: siteUrl,
  image: {
    dangerouslyProcessSVG: true,
  },
  server: {
    open: true,
    // INFO: These should be identical to Response Headers in nginx/headers.conf
    headers: {
      "Content-Security-Policy":
        "default-src 'self'; connect-src 'self' https://matomo.sikt.no/ ws: wss:; script-src 'self' https://matomo.sikt.no/ 'unsafe-inline' 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' https://static.sikt.no/; img-src 'self' https://matomo.sikt.no/ data:; media-src 'self'; frame-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'; worker-src blob:;",
      "Permissions-Policy":
        "accelerometer=(), autoplay=(), camera=(), display-capture=(), fullscreen=(), geolocation=(), gyroscope=(), microphone=(), payment=(), storage-access=(), web-share=(), xr-spatial-tracking=()",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Strict-Transport-Security":
        "max-age=63072000; includeSubDomains; preload",
      "X-Content-Type-Options": "nosniff",
      "X-DNS-Prefetch-Control": "on",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
    },
  },
  redirects: {
    "/produktutvikling/komponenter/dialog": `${PUBLIC_STORYBOOK_URL}?path=/docs/components-dialog--docs`,
    "/produktutvikling/komponenter/header": `${PUBLIC_STORYBOOK_URL}?path=/docs/components-header--docs`,
    "/produktutvikling/komponenter/logo": `${PUBLIC_STORYBOOK_URL}?path=/docs/components-logo--docs`,
  },
  vite: {
    plugins: [svgr()],
  },
});
