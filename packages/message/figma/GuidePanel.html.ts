import figma, { html } from "@figma/code-connect/html";

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=18311-1228",
  {
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
      label: figma.string("GuidePanel Message"),
      icon: figma.children("LevelIcon"),
    },
    example: ({ className, label, icon }) =>
      html`<div class="${className}">
        <span class="sds-message__icon">${icon}</span>
        <span class="sds-message__message">${label}</span>
      </div>`,
  },
);
