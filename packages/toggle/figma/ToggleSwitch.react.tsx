import figma from "@figma/code-connect";
import { ToggleSwitch } from "@sikt/sds-toggle";

figma.connect(
  ToggleSwitch,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=5320-14700",
  {
    props: {
      checked: figma.boolean("Checked"),
      label: figma.string("Label"),
      /* TODO: missing prop in Figma labelFirst: figma.boolean("Label first") */
      showIcons: figma.boolean("Show icon"),
    },
    example: ({ checked, label, showIcons }) => (
      <ToggleSwitch
        checked={checked}
        label={label}
        labelFirst
        showIcons={showIcons}
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
