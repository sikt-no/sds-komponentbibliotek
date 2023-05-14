const path = require("path");

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `export { default as ${exportName}Icon } from './${basename}'`;
  });
  exportEntries.push(
    `export type { IconProps } from './${path.basename(
      filePaths[0].path,
      path.extname(filePaths[0].path)
    )}'`
  );
  return exportEntries.join("\n");
}

module.exports = defaultIndexTemplate;
