import figma from "@figma/code-connect";
import { Badge } from "@sikt/sds-badge";

figma.connect(
  Badge,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=1025-6572",
  {
    props: {
      children: figma.string("Label"),
      icon: figma.boolean("Show icon", {
        true: figma.instance("Icon"),
        false: undefined,
      }),
      variant: figma.enum("Color", {
        Action: "primary",
        Success: "success",
        Danger: "critical",
        Warning: "warning",
        Info: "info",
      }),
      visibility: figma.enum("Visibility", {
        High: "strong",
        Medium: "subtle",
      }),
    },
    example: ({ children, icon, variant, visibility }) => (
      <Badge icon={icon} variant={variant} visibility={visibility}>
        {children}
      </Badge>
    ),
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/components-badge-readme--docs",
      },
    ],
  },
);
