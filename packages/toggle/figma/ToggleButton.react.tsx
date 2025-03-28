import figma from "@figma/code-connect";
import { ToggleButton } from "@sikt/sds-toggle";

figma.connect(
  ToggleButton,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=6438-19810",
  {
    props: {
      checked: figma.boolean("Checked"),
      label: figma.textContent("Label"),
      /* TODO: missing prop in Figma showIcons: figma.boolean("Show icon"), */
    },
    example: ({ checked, label }) => (
      <ToggleButton checked={checked} label={label} onChange={() => {}} />
    ),
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/components-toggle-readme--docs",
      },
    ],
  },
);
