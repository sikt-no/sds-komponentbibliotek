import { Features } from "lightningcss";
import { defineConfig } from "tsdown";
import browserslistToEsbuild from "browserslist-to-esbuild";
import svgr from "@svgr/rollup";

export default defineConfig({
  name: "tsdown",
  clean: false,
  entry: "./index.ts",
  format: ["cjs", "esm"],
  /* INFO: Remove when solved https://github.com/rolldown/rolldown/issues/9152 */
  target: browserslistToEsbuild(),
  sourcemap: true,
  minify: true,
  css: {
    fileName: "index.css",
    minify: true,
    transformer: "postcss",
    lightningcss: {
      /* INFO: Remove when solved https://github.com/parcel-bundler/lightningcss/issues/873 */
      exclude: Features.LightDark,
    },
  },
  plugins: [svgr()],
  publint: true,
});
