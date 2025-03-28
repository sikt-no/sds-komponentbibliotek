import figma from "@figma/code-connect";
import { ToggleSegmentOption } from "@sikt/sds-toggle";

figma.connect(
  ToggleSegmentOption,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=6438-19845",
  {
    props: {
      checked: figma.boolean("Checked"),
      label: figma.enum("Content", {
        Text: figma.string("Label text"),
        Icon: figma.instance("Icon"),
      }),
      ariaLabel: figma.enum("Content", {
        Text: undefined,
        Icon: figma.string("Label text"),
      }),
    },
    example: ({ checked, label, ariaLabel }) => (
      <ToggleSegmentOption
        checked={checked}
        value="value"
        label={label}
        aria-label={ariaLabel}
        onChange={() => {}}
      />
    ),
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/components-toggle-readme--docs",
      },
    ],
  },
);
