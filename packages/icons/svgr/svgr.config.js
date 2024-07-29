module.exports = {
  typescript: true,
  svgProps: {
    className: '{clsx("sds-icon", className)}',
    "aria-hidden": "true",
  },
  outDir: "build",
  template: require("./componentTemplate.js"),
  indexTemplate: require("./indexTemplate.js"),
};
