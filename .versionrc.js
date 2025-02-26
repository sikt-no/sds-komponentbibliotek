const packageName = process.env.npm_config_package;

module.exports = {
  "commit-all": true,
  bumpFiles: [
    `./packages/${packageName}/package.json`,
    `./packages/${packageName}/package-lock.json`,
  ],
  infile: `./packages/${packageName}/CHANGELOG.md`,
  "no-verify": true,
  packageFiles: [`./packages/${packageName}/package.json`],
  path: `./packages/${packageName}`,
  releaseCommitMessageFormat: `chore(${packageName}): release {{currentTag}}`,
  scripts: {
    precommit:
      "npm install --silent --ignore-scripts && npm run format --silent -- --log-level silent && git add .",
  },
  "tag-prefix": `@sikt/sds-${packageName}@`,
};
