import postcss from "esbuild-postcss";
import svgr from "esbuild-plugin-svgr";
import browserslistToEsbuild from "browserslist-to-esbuild";
import { defineConfig } from "tsup";

export default defineConfig({
  name: "tsup",
  entry: ["./index.ts"],
  target: [...(browserslistToEsbuild() as Target)],
  dts: true,
  format: ["esm", "cjs"],
  loader: {
    ".pcss": "css",
  },
  esbuildPlugins: [
    svgr({
      exportType: "named",
    }),
    postcss({
      extensions: [".pcss"],
    }),
  ],
  minify: "terser",
  sourcemap: true,
  treeshake: true,
});
