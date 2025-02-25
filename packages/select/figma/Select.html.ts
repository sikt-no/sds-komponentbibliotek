import figma, { html } from "@figma/code-connect/html";

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=8173-29955",
  {
    props: {
      label: figma.boolean("Label", {
        true: figma.string("Label text"),
        false: undefined,
      }),
      value: figma.string("Value"),
    },
    example: ({ label, value }) =>
      html`<div class="sds-form-field sds-select">
        <label class="sds-form-field__label" for="unique-id">
          <div class="sds-form-field__label-text">${label}</div>
          <div class="sds-select__select">
            <select id="unique-id" class="sds-select__select-input">
              <option value="${value}">${value}</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
              class="sds-icon sds-select__select-button"
              aria-hidden="true"
            >
              <path
                d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m45.66-109.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32 0l-40-40a8 8 0 0 1 11.32-11.32L128 140.69l34.34-34.35a8 8 0 0 1 11.32 0"
              ></path>
            </svg>
          </div>
        </label>
      </div>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=8173-29955",
  {
    variant: { Helper: true },
    props: {
      label: figma.boolean("Label", {
        true: figma.string("Label text"),
        false: undefined,
      }),
      value: figma.string("Value"),
      helpText: figma.string("Helper text"),
    },
    example: ({ label, value, helpText }) =>
      html`<div class="sds-form-field sds-select">
        <label class="sds-form-field__label" for="unique-id">
          <div class="sds-form-field__label-text">${label}</div>
          <div class="sds-select__select">
            <select
              id="unique-id"
              class="sds-select__select-input"
              aria-describedby="unique-id-help-text"
            >
              <option value="${value}">${value}</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
              class="sds-icon sds-select__select-button"
              aria-hidden="true"
            >
              <path
                d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m45.66-109.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32 0l-40-40a8 8 0 0 1 11.32-11.32L128 140.69l34.34-34.35a8 8 0 0 1 11.32 0"
              ></path>
            </svg>
          </div>
        </label>
        <div class="sds-form-field__help-text" id="unique-id-help-text">
          ${helpText}
        </div>
      </div>`,
  },
);
