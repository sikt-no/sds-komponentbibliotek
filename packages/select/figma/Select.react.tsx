import figma from "@figma/code-connect";
import { Select } from "@sikt/sds-select";

figma.connect(
  Select,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=8173-29955",
  {
    props: {
      label: figma.boolean("Label", {
        true: figma.string("Label text"),
        false: undefined,
      }),
      value: figma.string("Value"),
      helpText: figma.boolean("Helper", {
        true: figma.string("Helper text"),
        false: undefined,
      }),
    },
    example: ({ label, value, helpText }) => (
      <Select
        label={label}
        options={[{ label: value, value: value }]}
        onChange={() => {}}
        helpText={helpText}
      />
    ),
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/components-select-readme--docs",
      },
    ],
  },
);
