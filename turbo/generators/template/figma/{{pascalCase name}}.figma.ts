// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=<node-id>
// source=packages/design-system/src/{{pascalCase name}}/index.ts
// component={{pascalCase name}}
import figma from "figma";

const instance = figma.selectedInstance;

export default {
  example: figma.code`
    <{{pascalCase name}} />
  `,
  imports: ["import { {{pascalCase name}} } from \"@sikt/sd3-design-system\";"],
  id: "{{kebabCase name}}",
};
