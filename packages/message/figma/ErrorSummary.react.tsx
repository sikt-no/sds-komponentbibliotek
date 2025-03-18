import figma from "@figma/code-connect";
import { ErrorSummary } from "@sikt/sds-message";

figma.connect(
  ErrorSummary,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=18313-868",
  {
    props: {
      children: figma.textContent("Text"),
    },
    example: ({ children }) => <ErrorSummary>{children}</ErrorSummary>,
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/components-message-readme--docs",
      },
    ],
  },
);
