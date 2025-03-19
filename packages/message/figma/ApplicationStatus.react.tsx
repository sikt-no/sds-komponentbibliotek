import figma from "@figma/code-connect";
import { ApplicationStatus } from "@sikt/sds-message";

figma.connect(
  ApplicationStatus,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=18312-969",
  {
    props: {
      children: figma.string("Status Message"),
      variant: figma.enum("Priority", {
        Info: "info",
        Success: "success",
        Warning: "warning",
        Failure: "critical",
      }),
      callToAction: figma.boolean("Actionable", {
        true: figma.children("button / message"),
        false: undefined,
      }),
    },
    example: ({ children, variant, callToAction }) => (
      <ApplicationStatus variant={variant} callToAction={callToAction}>
        {children}
      </ApplicationStatus>
    ),
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/components-message-readme--docs",
      },
    ],
  },
);
