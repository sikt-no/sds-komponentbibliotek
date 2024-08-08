import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("init-package", {
    description: "Create a new package based on an existing one",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the new package?",
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
