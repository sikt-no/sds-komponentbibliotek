import figma, { html } from "@figma/code-connect/html";

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=5375-17421",
  {
    props: {
      label: figma.boolean("Show label", {
        true: figma.string("Label text"),
        false: undefined,
      }),
      value: figma.string("Input value"),
    },
    example: ({ label, value }) =>
      html`<div class="sds-form-field sds-input sds-input--text">
        <label class="sds-form-field__label" for="unique-id">
          <div class="sds-form-field__label-text">${label}</div>
          <div class="sds-input__wrapper">
            <input
              class="sds-input__input"
              id="unique-id"
              type="text"
              value="${value}"
            />
          </div>
        </label>
      </div>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=5375-17421",
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
      html`<div class="sds-form-field sds-input sds-input--text">
        <label class="sds-form-field__label" for="unique-id">
          <div class="sds-form-field__label-text">${label}</div>
          <div class="sds-input__wrapper">
            <input
              class="sds-input__input"
              id="unique-id"
              type="text"
              value="${value}"
              aria-describedby="unique-id-help-text"
            />
          </div>
          <div class="sds-form-field__help-text" id=":unique-id-help-text">
            ${helpText}
          </div>
        </label>
      </div>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=5375-17421",
  {
    variant: { "Show helper": true, State: "Invalid" },
    props: {
      label: figma.boolean("Show label", {
        true: figma.string("Label text"),
        false: undefined,
      }),
      value: figma.string("Input value"),
      errorText: figma.boolean("Show helper", {
        true: figma.string("Helper text"),
        false: undefined,
      }),
    },
    example: ({ label, value, errorText }) =>
      html`<div
        class="sds-form-field sds-form-field--error sds-input sds-input--text sds-input--error"
      >
        <label
          class="sds-form-field__label sds-form-field__label--error"
          for="unique-id"
        >
          <div class="sds-form-field__label-text">${label}</div>
          <div class="sds-input__wrapper">
            <input
              class="sds-input__input"
              id="unique-id"
              type="text"
              value="${value}"
              aria-describedby="unique-id-help-text"
              aria-invalid="true"
              aria-errormessage="unique-id-help-text"
            />
          </div>
          <div
            class="sds-form-field__help-text sds-form-field__help-text--error"
            id=":unique-id-help-text"
          >
            ${errorText}
          </div>
        </label>
      </div>`,
  },
);

figma.connect(
  "https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/SDS-Komponentbibliotek-2.0.0?node-id=5375-16778",
  {
    props: {
      label: figma.boolean("Show label", {
        true: figma.string("Label text"),
        false: undefined,
      }),
      value: figma.string("Input value"),
    },
    example: ({ label, value }) =>
      html`<div class="sds-form-field sds-input sds-input--search">
        <label class="sds-form-field__label" for="unique-id">
          <div class="sds-form-field__label-text">${label}</div>
          <div class="sds-input__wrapper">
            <input
              class="sds-input__input"
              id="unique-id"
              type="text"
              value="${value}"
            />
            <button
              class="sds-button sds-button--transparent sds-button--small sds-input__action"
              aria-label="Søk"
              type="button"
            >
              <span class="sds-button__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  class="sds-icon"
                  aria-hidden="true"
                >
                  <path
                    d="m229.66 218.34-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72 72.08 72.08 0 0 1-72-72"
                  ></path></svg
              ></span>
            </button>
          </div>
        </label>
      </div>`,
  },
);
