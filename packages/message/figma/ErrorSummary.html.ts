import figma, { html } from "@figma/code-connect/html";

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=18313-868",
  {
    props: {
      className: figma.className(["sds-message", "sds-message--critical"]),
      label: figma.string("Error Message"),
      icon: figma.children("LevelIcon"),
    },
    example: ({ className, label, icon }) =>
      html`<div class="${className}">
        <span class="sds-message__icon">${icon}</span>
        <span class="sds-message__message">${label}</span>
      </div>`,
  },
);
