import figma, { html } from "@figma/code-connect/html";

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=18312-969",
  {
    variant: { Actionable: true },
    props: {
      className: figma.className([
        "sds-message",
        figma.enum("Priority", {
          Info: "sds-message--info",
          Success: "sds-message--success",
          Warning: "sds-message--warning",
          Failure: "sds-message--critical",
        }),
      ]),
      label: figma.string("Status Message"),
      icon: figma.children("LevelIcon"),
      callToAction: figma.children("button / message"),
    },
    example: ({ className, label, callToAction, icon }) =>
      html`<div class="${className}">
        <span class="sds-message__icon">${icon}</span>
        <span class="sds-message__message">${label}</span>
        <span class="sds-message__cta">${callToAction}</span>
      </div>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=18312-969",
  {
    variant: { Actionable: false },
    props: {
      className: figma.className([
        "sds-message",
        figma.enum("Priority", {
          Info: "sds-message--info",
          Success: "sds-message--success",
          Warning: "sds-message--warning",
          Failure: "sds-message--critical",
        }),
      ]),
      label: figma.string("Status Message"),
      icon: figma.children("LevelIcon"),
    },
    example: ({ className, label, icon }) =>
      html`<div class="${className}">
        <span class="sds-message__icon">${icon}</span>
        <span class="sds-message__message">${label}</span>
      </div>`,
  },
);
