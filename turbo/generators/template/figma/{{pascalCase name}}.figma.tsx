import figma from "@figma/code-connect";
import { {{pascalCase name}} } from "@sikt/sds-{{kebabCase name}}";

figma.connect(
  {{pascalCase name}},
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=<node-id>",
  {
    props: {},
    example: ({}) => (<{{pascalCase name}} />),
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/components-{{kebabCase name}}-readme--docs",
      },
    ],
  },
);
