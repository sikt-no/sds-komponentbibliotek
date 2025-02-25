import figma, { html } from "@figma/code-connect/html";

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=8173-25914&",
  {
    props: {
      label: figma.boolean("Show label", {
        true: figma.string("Label text"),
        false: undefined,
      }),
      value: figma.string("Input value"),
    },
    example: ({ label, value }) =>
      html`<div class="sds-form-field sds-input sds-input--textarea">
        <label class="sds-form-field__label" for="unique-id">
          <div class="sds-form-field__label-text">${label}</div>
          <div class="sds-input__wrapper">
            <textarea
              class="sds-input__input"
              id="unique-id"
              aria-describedby="unique-id-help-text"
            >
${value}
            </textarea
            >
          </div>
        </label>
      </div>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=8173-25914&",
  {
    variant: { "Show helper": true },
    props: {
      label: figma.boolean("Show label", {
        true: figma.string("Label text"),
        false: undefined,
      }),
      value: figma.string("Input value"),
      helpText: figma.boolean("Show helper", {
        true: figma.string("Helper text"),
        false: undefined,
      }),
    },
    example: ({ label, value, helpText }) =>
      html` <div
        class="sds-form-field sds-input sds-input--textarea"
        xmlns="http://www.w3.org/1999/html"
      >
        <label class="sds-form-field__label" for="unique-id">
          <div class="sds-form-field__label-text">${label}</div>
          <div class="sds-input__wrapper">
            <textarea
              class="sds-input__input"
              id="unique-id"
              aria-describedby="unique-id-help-text"
            >
${value}
            </textarea
            >
          </div>
          <div class="sds-form-field__help-text" id=":unique-id-help-text">
            ${helpText}
          </div>
        </label>
      </div>`,
  },
);
