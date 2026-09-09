import figma from "@figma/code-connect";
import { Details } from "@sikt/sd3-design-system";

figma.connect(
  Details,
  "https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=13122-2440",
  {
    props: {
      size: figma.enum("Size", {
        Standard: "standard",
        Compact: "compact",
      }),
    },
    example: ({ size }) => (
      <Details size={size}>
        <Details.Summary>Summary label</Details.Summary>
        <Details.Content>Revealed content</Details.Content>
      </Details>
    ),
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/sd3-details--docs",
      },
    ],
  },
);
