import figma from "@figma/code-connect";
import { ToggleSegment } from "@sikt/sds-toggle";

figma.connect(
  ToggleSegment,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=8173-31691",
  {
    props: {
      children: figma.children(".Toggle/Segment/Single"),
      variant: figma.enum("Width", {
        Auto: undefined,
        Fixed: "fixed",
      }),
    },
    example: ({ children, variant }) => (
      <ToggleSegment variant={variant}>{children}</ToggleSegment>
    ),
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/components-toggle-readme--docs",
      },
    ],
  },
);
