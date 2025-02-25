import figma from "@figma/code-connect";
import { TextArea } from "@sikt/sds-input";

figma.connect(
  TextArea,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=8173-25914&",
  {
    props: {
      label: figma.boolean("Show label", {
        true: figma.string("Label text"),
        false: undefined,
      }),
      value: figma.string("Input value"),
      helpText: figma.boolean("Show helper", {
        true: figma.string("Helper text"),
        false: undefined,
      }),
    },
    example: ({ label, value, helpText }) => (
      <TextArea
        label={label}
        value={value}
        helpText={helpText}
        onChange={() => {}}
      />
    ),
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/components-input-textarea--docs",
      },
    ],
  },
);
