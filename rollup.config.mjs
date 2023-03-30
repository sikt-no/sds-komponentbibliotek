import { defineConfig } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import ts from "rollup-plugin-ts";
import terser from "@rollup/plugin-terser";

export default defineConfig({
  input: "index.ts",
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    peerDepsExternal(),
    commonjs(),
    postcss({
      extract: true,
      minimize: true,
      sourceMap: true,
    }),
    url({
      fileName: "[name].[hash][extname]",
    }),
    svgr(),
    ts({
      tsconfig: "../../tsconfig.json",
    }),
    terser(),
  ],
});
