import figma from "@figma/code-connect";
import { GuidePanel } from "@sikt/sds-message";

figma.connect(
  GuidePanel,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=18311-1228",
  {
    props: {
      children: figma.string("GuidePanel Message"),
      variant: figma.enum("Priority", {
        Info: "info",
        Success: "success",
        Warning: "warning",
        Failure: "critical",
      }),
    },
    example: ({ children, variant }) => (
      <GuidePanel variant={variant}>{children}</GuidePanel>
    ),
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/components-message-readme--docs",
      },
    ],
  },
);
