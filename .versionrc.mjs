const packageName = process.env.npm_config_package;
const isSd3 = packageName.startsWith("design-");
const isConfig = packageName.includes("config");
const packageSuffix = isConfig ? "-sds" : "";
let packagePrefix = "";
if (isSd3) {
  packagePrefix = "sd3-";
} else if (!isConfig) {
  packagePrefix = "sds-";
}

/**
 * commit-and-tag-version config file
 */
export default {
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
    prerelease: `npm run build --workspace=packages/${packageName} --if-present`,
    precommit:
      "npm install --silent --ignore-scripts && npm run format --silent -- --log-level silent && git add .",
  },
  "tag-prefix": `@sikt/${packagePrefix}${packageName}${packageSuffix}@`,
};
