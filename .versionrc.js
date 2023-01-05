const packageName = process.env.npm_config_package;

module.exports = {
  bumpFiles: [
    `./packages/${packageName}/package.json`,
    `./packages/${packageName}/package-lock.json`,
  ],
  infile: `./packages/${packageName}/CHANGELOG.md`,
  "no-verify": true,
  packageFiles: [`./packages/${packageName}/package.json`],
  path: `./packages/${packageName}`,
  "tag-prefix": `@sikt/horisont-${packageName}@`,
};
