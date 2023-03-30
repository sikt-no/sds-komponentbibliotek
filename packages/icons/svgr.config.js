module.exports = {
  typescript: true,
  svgProps: {
    className: '{clsx("sds-icon", className)}',
    "aria-hidden": "true",
  },
  outDir: "build",
  template: require("./svgr/componentTemplate.js"),
  indexTemplate: require("./svgr/indexTemplate.js"),
};
