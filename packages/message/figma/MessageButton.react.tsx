import figma from "@figma/code-connect";
import { MessageButton } from "@sikt/sds-message";

figma.connect(
  MessageButton,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=18313-820",
  {
    props: {
      children: figma.textContent("Label"),
      icon: figma.boolean("Icon", {
        true: figma.instance("Icon Selection"),
        false: undefined,
      }),
    },
    example: ({ children, icon }) => (
      <MessageButton icon={icon}>{children}</MessageButton>
    ),
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/components-message-readme--docs",
      },
    ],
  },
);

figma.connect(
  MessageButton,
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=18572-1362",
  {
    props: {
      children: figma.textContent("Label"),
      icon: figma.boolean("Icon", {
        true: figma.instance("Icon Selection"),
        false: undefined,
      }),
    },
    example: ({ children, icon }) => (
      <MessageButton icon={icon}>{children}</MessageButton>
    ),
    links: [
      {
        name: "Storybook",
        url: "https://designsystem.sikt.no/storybook/?path=/docs/components-message-readme--docs",
      },
    ],
  },
);
