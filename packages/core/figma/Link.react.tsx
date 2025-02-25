import figma from "@figma/code-connect";
import { Link } from "@sikt/sds-core";

figma.connect(
  Link,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=1777-8174",
  {
    props: {
      children: figma.textContent("Link text"),
      href: figma.enum("Type", {
        Regular: "#",
        Navigation: "#",
        External: "#",
        Phone: "tel:#",
        Email: "mailto:#",
      }),
      isNavigation: figma.enum("Type", {
        Navigation: true,
      }),
      isExternal: figma.enum("Type", {
        External: true,
      }),
    },
    example: ({ children, href, isNavigation, isExternal }) => (
      <Link href={href} isNavigation={isNavigation} isExternal={isExternal}>
        {children}
      </Link>
    ),
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/core-link--docs",
      },
    ],
  },
);
