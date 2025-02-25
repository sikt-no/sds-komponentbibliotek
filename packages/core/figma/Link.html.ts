import figma, { html } from "@figma/code-connect/html";

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=1777-8174",
  {
    props: {
      className: figma.className(["sds-typography-link"]),
      label: figma.textContent("Link text"),
    },
    example: ({ className, label }) =>
      html`<a href="#" class="${className}">${label}</a>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=1777-8174",
  {
    variant: { Type: "Navigation" },
    props: {
      className: figma.className([
        "sds-typography-link",
        "sds-typography-link--navigation",
      ]),
      label: figma.textContent("Link text"),
    },
    example: ({ className, label }) =>
      html`<a href="#" class="${className}">${label}</a>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=1777-8174",
  {
    variant: { Type: "External" },
    props: {
      className: figma.className([
        "sds-typography-link",
        "sds-typography-link--external",
      ]),
      label: figma.textContent("Link text"),
    },
    example: ({ className, label }) =>
      html`<a href="#" class="${className}">${label}</a>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=1777-8174",
  {
    variant: { Type: "Phone" },
    props: {
      className: figma.className(["sds-typography-link"]),
      label: figma.textContent("Link text"),
    },
    example: ({ className, label }) =>
      html`<a href="tel:#" class="${className}">${label}</a>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=1777-8174",
  {
    variant: { Type: "Email" },
    props: {
      className: figma.className(["sds-typography-link"]),
      label: figma.textContent("Link text"),
    },
    example: ({ className, label }) =>
      html`<a href="mailto:#" class="${className}">${label}</a>`,
  },
);
