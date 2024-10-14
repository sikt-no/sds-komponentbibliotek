import figma from "@figma/code-connect";
import { Button } from "@sikt/sds-button";

figma.connect(
  Button,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=422%3A4494",
  {
    props: {
      children: figma.string("Label text"),
      icon: figma.boolean("Show icon / Right", {
        true: figma.instance("Icon / Right"),
        false: figma.instance("Icon / Left"),
      }),
      iconVariant: figma.boolean("Label", {
        true: figma.boolean("Show icon / Left", {
          true: "left",
          false: undefined,
        }),
        false: "only",
      }),
      variant: figma.enum("Visibilty", {
        Strong: "strong",
        Subtle: "subtle",
        Transparent: "transparent",
        Danger: "critical",
      }),
      size: figma.enum("Size", {
        Default: undefined,
        Small: "small",
      }),
    },
    example: ({ children, icon, iconVariant, variant, size }) => (
      <Button
        variant={variant}
        size={size}
        icon={icon}
        iconVariant={iconVariant}
        onClick={() => {}}
      >
        {children}
      </Button>
    ),
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/components-button-readme--docs",
      },
    ],
  },
);
