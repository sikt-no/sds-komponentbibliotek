import figma, { html } from "@figma/code-connect/html";

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=1025-6572",
  {
    variant: { "Show icon": false },
    props: {
      className: figma.className([
        "sds-badge",
        figma.enum("Color", {
          Action: "sds-badge--primary",
          Success: "sds-badge--success",
          Danger: "sds-badge--critical",
          Warning: "sds-badge--warning",
          Info: "sds-badge--info",
        }),
        figma.enum("Visibilty", {
          Strong: "sds-badge--visibility-strong",
          Subtle: "sds-badge--visibility-subtle",
        }),
      ]),
      label: figma.boolean("Show label", {
        true: figma.string("Label"),
        false: undefined,
      }),
    },
    example: ({ className, label }) =>
      html`<span class=${className}>
        <span class="sds-badge__label">${label}</span>
      </span>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=1025-6572",
  {
    variant: { "Show icon": true },
    props: {
      className: figma.className([
        "sds-badge",
        figma.enum("Color", {
          Action: "sds-badge--primary",
          Success: "sds-badge--success",
          Danger: "sds-badge--critical",
          Warning: "sds-badge--warning",
          Info: "sds-badge--info",
        }),
        figma.enum("Visibility", {
          High: "sds-badge--visibility-strong",
          Medium: "sds-badge--visibility-subtle",
        }),
      ]),
      label: figma.boolean("Show label", {
        true: figma.string("Label"),
        false: undefined,
      }),
      icon: figma.instance("Icon"),
    },
    example: ({ className, label, icon }) =>
      html`<span class=${className}>
        <span class="sds-badge__icon">${icon}</span>
        <span class="sds-badge__label">${label}</span>
      </span>`,
  },
);
