import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("init-package", {
    description: "Create a new package based on template",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Package name (without sds prefix)",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "packages/{{kebabCase name}}/",
        templateFiles: "template/**/*",
        force: true,
      },
    ],
  });
}
