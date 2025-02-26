import figma from "@figma/code-connect";
import { InputDatepicker } from "@sikt/sds-input-datepicker";

figma.connect(
  InputDatepicker,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=5375-16047",
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
      <InputDatepicker
        label={label}
        helpText={helpText}
        value={value}
        onChange={() => {}}
      />
    ),
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/components-inputdatepicker--docs",
      },
    ],
  },
);
