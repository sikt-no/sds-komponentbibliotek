import fs from "fs";
import path from "path";

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/grunnleggende/)) {
    page.context.layout = "grunnleggende";
    createPage(page);
  }

  if (page.path.match(/komponenter/)) {
    page.context.layout = "komponenter";
    createPage(page);
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors);
  }

  const getPath = (node) => {
    try {
      return node.internal.contentFilePath
        .split("/sds-komponentbibliotek/packages/")[1]
        .split("/")[0];
    } catch (e) {
      reporter.panicOnBuild("Error getting package path", e);
    }
  };

  const getPackage = (packageDir) => {
    try {
      const pathToPackageJson = path.resolve(
        __dirname,
        "..",
        "packages",
        packageDir,
        "package.json",
      );
      const packageJsonContent = fs.readFileSync(pathToPackageJson, "utf-8");
      const packageJson = JSON.parse(packageJsonContent);
      return {
        name: packageJson.name,
        version: packageJson.version,
      };
    } catch (e) {
      reporter.panicOnBuild("Error reading package.json", e);
    }
  };

  const template = path.resolve(`src/templates/komponenter.tsx`);
  const files = result.data.allMdx.nodes;

  files.forEach((node) => {
    const packageDir = getPath(node);
    const { name, version } = getPackage(packageDir);

    createPage({
      path: `/komponenter${node.frontmatter.slug}`,
      component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        directory: packageDir,
        package: name,
        version,
      },
    });
  });
};
