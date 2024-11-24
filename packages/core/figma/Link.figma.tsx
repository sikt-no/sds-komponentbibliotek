import figma from "@figma/code-connect";
import { Link } from "@sikt/sds-core";

figma.connect(
  Link,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=1777-8174",
  {
    props: {
      children: figma.textContent("Link text"),
    },
    example: ({ children }) => <Link href="">{children}</Link>,
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/core-link--docs",
      },
    ],
  },
);
