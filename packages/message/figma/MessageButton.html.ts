import figma, { html } from "@figma/code-connect/html";

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=18313-820",
  {
    variant: { Label: true, Icon: false },
    props: {
      className: figma.className([
        "sds-message-button",
        "sds-button--transparent",
        "sds-button--small",
      ]),
      label: figma.textContent("Label"),
    },
    example: ({ className, label }) =>
      html`<button class="${className}">
        <span class="sds-button__label">${label}</span>
      </button>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=18313-820",
  {
    variant: { Label: true, Icon: true },
    props: {
      className: figma.className([
        "sds-message-button",
        "sds-button--transparent",
        "sds-button--small",
      ]),
      label: figma.textContent("Label"),
      icon: figma.boolean("Icon", {
        true: figma.instance("Icon Selection"),
        false: undefined,
      }),
    },
    example: ({ className, label, icon }) =>
      html`<button class="${className}">
        <span class="sds-button__label">${label}</span>
        <span class="sds-button__icon">${icon}</span>
      </button>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=18313-820",
  {
    variant: { Label: false, Icon: true },
    props: {
      className: figma.className([
        "sds-message-button",
        "sds-button--transparent",
        "sds-button--small",
      ]),
      label: figma.textContent("Label"),
      icon: figma.boolean("Icon", {
        true: figma.instance("Icon Selection"),
        false: undefined,
      }),
    },
    example: ({ className, label, icon }) =>
      html`<button class="${className}" aria-label="${label}">
        <span class="sds-button__icon">${icon}</span>
      </button>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=18572-1362",
  {
    variant: { Label: true, Icon: false },
    props: {
      className: figma.className([
        "sds-message-button",
        "sds-button--transparent",
        "sds-button--small",
      ]),
      label: figma.textContent("Label"),
    },
    example: ({ className, label }) =>
      html`<button class="${className}">
        <span class="sds-button__label">${label}</span>
      </button>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=18572-1362",
  {
    variant: { Label: true, Icon: true },
    props: {
      className: figma.className([
        "sds-message-button",
        "sds-button--transparent",
        "sds-button--small",
      ]),
      label: figma.textContent("Label"),
      icon: figma.boolean("Icon", {
        true: figma.instance("Icon Selection"),
        false: undefined,
      }),
    },
    example: ({ className, label, icon }) =>
      html`<button class="${className}">
        <span class="sds-button__label">${label}</span>
        <span class="sds-button__icon">${icon}</span>
      </button>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=18572-1362",
  {
    variant: { Label: false, Icon: true },
    props: {
      className: figma.className([
        "sds-message-button",
        "sds-button--transparent",
        "sds-button--small",
      ]),
      label: figma.textContent("Label"),
      icon: figma.boolean("Icon", {
        true: figma.instance("Icon Selection"),
        false: undefined,
      }),
    },
    example: ({ className, label, icon }) =>
      html`<button class="${className}" aria-label="${label}">
        <span class="sds-button__icon">${icon}</span>
      </button>`,
  },
);
