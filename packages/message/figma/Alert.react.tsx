import figma from "@figma/code-connect";
import { Alert } from "@sikt/sds-message";

figma.connect(
  Alert,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=18311-2101",
  {
    props: {
      children: figma.textContent("Text"),
      variant: figma.enum("Priority", {
        Info: "info",
        Success: "success",
        Warning: "warning",
        Failure: "critical",
      }),
      callToAction: figma.boolean("Dismissable", {
        true: figma.children("button / message / icon"),
        false: undefined,
      }),
    },
    example: ({ children, variant, callToAction }) => (
      <Alert variant={variant} callToAction={callToAction}>
        {children}
      </Alert>
    ),
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/components-message-readme--docs",
      },
    ],
  },
);
