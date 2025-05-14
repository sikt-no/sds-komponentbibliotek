import figma from "@figma/code-connect";
import { TextInput, SearchInput } from "@sikt/sds-input";

figma.connect(
  TextInput,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=5375-17421",
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
      errorText: figma.enum("State", {
        Invalid: figma.boolean("Show helper", {
          true: figma.string("Error Message"),
          false: undefined,
        }),
      }),
    },
    example: ({ label, value, helpText, errorText }) => (
      <TextInput
        label={label}
        value={value}
        helpText={helpText}
        errorText={errorText}
        onChange={() => {}}
      />
    ),
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/components-input-text--docs",
      },
    ],
  },
);

figma.connect(
  SearchInput,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=5375-16778",
  {
    props: {
      label: figma.boolean("Show label", {
        true: figma.string("Label text"),
        false: undefined,
      }),
      value: figma.string("Input value"),
    },
    example: ({ label, value }) => (
      <SearchInput label={label} value={value} onChange={() => {}} />
    ),
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/components-input-search--docs",
      },
    ],
  },
);
