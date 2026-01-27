import figma, { html } from "@figma/code-connect/html";

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=422-4494",
  {
    variant: { "Show label": true },
    props: {
      className: figma.className([
        "sds-button",
        figma.enum("Visibilty", {
          Strong: "sds-button--strong",
          Subtle: "sds-button--subtle",
          Transparent: "sds-button--transparent",
          Danger: "sds-button--critical",
          "Subtle Neutral": "sds-button--neutral",
          "Transparent Neutral": "sds-button--neutral-transparent",
        }),
        figma.enum("Size", { Small: "sds-button--small" }),
      ]),
      label: figma.string("Label text"),
    },
    example: ({ className, label }) =>
      html`<button class="${className}">${label}</button>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=422%3A4494",
  {
    variant: { "Show label": true, "Show icon / Right": true },
    props: {
      className: figma.className([
        "sds-button",
        figma.enum("Visibilty", {
          Strong: "sds-button--strong",
          Subtle: "sds-button--subtle",
          Transparent: "sds-button--transparent",
          Danger: "sds-button--critical",
          "Subtle Neutral": "sds-button--neutral",
          "Transparent Neutral": "sds-button--neutral-transparent",
        }),
        figma.enum("Size", { Small: "sds-button--small" }),
      ]),
      label: figma.string("Label text"),
      icon: figma.instance("Icon / Right"),
    },
    example: ({ className, label, icon }) =>
      html`<button class="${className}">
        ${label}
        <span class="sds-button__icon">${icon}</span>
      </button>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=422%3A4494",
  {
    variant: { "Show label": true, "Show icon / Left": true },
    props: {
      className: figma.className([
        "sds-button",
        "sds-button--icon-left",
        figma.enum("Visibilty", {
          Strong: "sds-button--strong",
          Subtle: "sds-button--subtle",
          Transparent: "sds-button--transparent",
          Danger: "sds-button--critical",
          "Subtle Neutral": "sds-button--neutral",
          "Transparent Neutral": "sds-button--neutral-transparent",
        }),
        figma.enum("Size", { Small: "sds-button--small" }),
      ]),
      label: figma.string("Label text"),
      icon: figma.instance("Icon / Left"),
    },
    example: ({ className, label, icon }) =>
      html`<button class="${className}">
        ${label}
        <span class="sds-button__icon">${icon}</span>
      </button>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=422%3A4494",
  {
    variant: { "Show label": false, "Show icon / Right": true },
    props: {
      className: figma.className([
        "sds-button",
        figma.enum("Visibilty", {
          Strong: "sds-button--strong",
          Subtle: "sds-button--subtle",
          Transparent: "sds-button--transparent",
          Danger: "sds-button--critical",
          "Subtle Neutral": "sds-button--neutral",
          "Transparent Neutral": "sds-button--neutral-transparent",
        }),
        figma.enum("Size", { Small: "sds-button--small" }),
      ]),
      label: figma.string("Label text"),
      icon: figma.instance("Icon / Right"),
    },
    example: ({ className, label, icon }) =>
      html`<button class="${className}" aria-label="${label}">
        <span class="sds-button__icon">${icon}</span>
      </button>`,
  },
);
