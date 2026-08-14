import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("init-package", {
    description: "Create a new component based on template",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name (without prefix)",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "packages/design-system/src/{{pascalCase name}}/",
        templateFiles: "template/**/*",
        force: true,
      },
    ],
  });
}
