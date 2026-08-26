import autoprefixer from "autoprefixer";
import postcssNested from "postcss-nested";
import postcssImport from "postcss-import";
import postcssCustomMedia from "postcss-custom-media";

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [autoprefixer, postcssNested, postcssImport, postcssCustomMedia],
};
