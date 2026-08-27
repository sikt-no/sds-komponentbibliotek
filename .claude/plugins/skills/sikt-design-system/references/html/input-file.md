# @sikt/sds-input-file — HTML snippets

Rendered HTML for every Storybook story in `packages/input-file`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-input-file/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/input-file.md`) to pick up the visual styles for these classes.

## InputFile.stories

### Default

```html
<div class="sds-input-file-wrapper">
  <div class="sds-form-field sds-input-file">
    <div class="sds-form-field__label-wrapper">
      <label class="sds-form__label" for="REPLACE_ME_0">
        <span class="sds-form__label-text">Label</span>
        <div class="sds-input-file__drop-zone" data-rac="">
          <div
            style="
              border: 0;
              clip: rect(0 0 0 0);
              clip-path: inset(50%);
              height: 1px;
              margin: -1px;
              overflow: hidden;
              padding: 0;
              position: absolute;
              width: 1px;
              white-space: nowrap;
            "
          >
            <button
              type="button"
              tabindex="0"
              data-react-aria-pressable="true"
              id="react-aria-_R_9bH1_"
              aria-label="Label"
              aria-labelledby="react-aria-_R_9bH1_ react-aria-_R_9b_"
            ></button>
          </div>
          <div class="sds-input-file__drop-zone-icon">
            <!-- icon: UploadIcon -->
          </div>
          <p
            class="sds-typography-body sds-typography--color-primary sds-input-file__placeholder"
          >
            Drop file here,
            <br />
            or
          </p>
          <button
            class="sds-button sds-button--subtle"
            data-rac=""
            type="button"
            tabindex="0"
            data-react-aria-pressable="true"
            id="react-aria-_R_upb_"
          >
            <span class="sds-button__label">Open file explorer</span>
          </button>
          <input
            id="REPLACE_ME_0"
            class=""
            type="file"
            style="display: none"
            accept=".doc,.docx,image/png,image/jpg"
            multiple=""
            data-rac=""
          />
        </div>
      </label>
    </div>
    <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">
      Helpful text
    </div>
  </div>
  <figure class="sds-input-file-list">
    <figcaption class="sds-input-file-list__caption sds-typography-label">
      Attachments (2)
    </figcaption>
    <ul class="sds-input-file-list__list">
      <li class="sds-input-file-list__item sds-typography-body">
        <div class="sds-input-file-list__item-start">
          <div>
            <div class="sds-input-file-list__item-icon">
              <!-- icon: SuccessIcon -->
            </div>
          </div>
          <div>
            <div
              class="sds-input-file-list__item-name sds-typography-body sds-typography--strong"
            >
              <span>
                <button
                  class="sds-popover"
                  popovertarget="_R_35l_"
                  style="anchor-name: --popover-anchor-_R_35l_"
                >
                  FileName.jpg
                </button>
                <span
                  class="sds-popover__target sds-popover__target--anchor sds-typography-body"
                  id="_R_35l_"
                  popover="auto"
                  style="
                    position-anchor: --popover-anchor-_R_35l_;
                    top: anchor(bottom);
                    left: anchor(left);
                  "
                >
                  Image preview
                </span>
              </span>
            </div>
            <div class="sds-input-file-list__item-size">1.47MB</div>
          </div>
        </div>
        <div class="sds-input-file-list__item-end">
          <button
            class="sds-button sds-button--transparent sds-button--small"
            aria-label="Remove FileName.jpg"
            type="button"
            label="Remove FileName.jpg"
          >
            <span class="sds-button__icon sds-button__icon--only"
              ><!-- icon: DeleteIcon --></span
            >
          </button>
        </div>
      </li>
      <li class="sds-input-file-list__item sds-typography-body">
        <div class="sds-input-file-list__item-start">
          <div>
            <div
              class="sds-input-file-list__item-icon sds-input-file-list__item-icon--loading"
            >
              <!-- icon: SpinnerIcon -->
            </div>
          </div>
          <div>
            <div
              class="sds-input-file-list__item-name sds-typography-body sds-typography--strong"
            >
              FileNameVeeeeeeeeeeeeeeeeeeeeeeeeeeeeeryLong.pdf
            </div>
          </div>
        </div>
        <div class="sds-input-file-list__item-end">
          <div
            role="progressbar"
            aria-valuenow="54"
            aria-label="Loading FileNameVeeeeeeeeeeeeeeeeeeeeeeeeeeeeeryLong.pdf"
          >
            54%
          </div>
        </div>
      </li>
    </ul>
  </figure>
</div>
```

### WithError

```html
<div class="sds-input-file-wrapper">
  <div
    class="sds-form-field sds-form-field--error sds-input-file sds-input-file--error"
  >
    <div class="sds-form-field__label-wrapper">
      <label class="sds-form__label sds-form__label--error" for="REPLACE_ME_0">
        <span class="sds-form__label-text">Label</span>
        <div
          class="sds-input-file__drop-zone sds-input-file__drop-zone--error"
          data-rac=""
        >
          <div
            style="
              border: 0;
              clip: rect(0 0 0 0);
              clip-path: inset(50%);
              height: 1px;
              margin: -1px;
              overflow: hidden;
              padding: 0;
              position: absolute;
              width: 1px;
              white-space: nowrap;
            "
          >
            <button
              type="button"
              tabindex="0"
              data-react-aria-pressable="true"
              id="react-aria-_R_9bH1_"
              aria-label="Label"
              aria-labelledby="react-aria-_R_9bH1_ react-aria-_R_9b_"
            ></button>
          </div>
          <div class="sds-input-file__drop-zone-icon">
            <!-- icon: UploadIcon -->
          </div>
          <p
            class="sds-typography-body sds-typography--color-primary sds-input-file__placeholder"
          >
            Drop file here,
            <br />
            or
          </p>
          <button
            class="sds-button sds-button--critical"
            data-rac=""
            type="button"
            tabindex="0"
            data-react-aria-pressable="true"
            id="react-aria-_R_upb_"
          >
            <span class="sds-button__label">Open file explorer</span>
          </button>
          <input
            id="REPLACE_ME_0"
            class=""
            type="file"
            style="display: none"
            accept=".doc,.docx,image/png,image/jpg"
            multiple=""
            data-rac=""
          />
        </div>
      </label>
    </div>
    <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">
      Helpful text
    </div>
    <div
      class="sds-form__help-text sds-form__help-text--error"
      id="REPLACE_ME_0-error-text"
    >
      Error: Message
    </div>
  </div>
  <figure class="sds-input-file-list">
    <figcaption class="sds-input-file-list__caption sds-typography-label">
      Attachments (1)
    </figcaption>
    <ul class="sds-input-file-list__list">
      <li class="sds-input-file-list__item sds-typography-body">
        <div class="sds-input-file-list__item-start">
          <div>
            <div class="sds-input-file-list__item-icon">
              <!-- icon: SuccessIcon -->
            </div>
          </div>
          <div>
            <div
              class="sds-input-file-list__item-name sds-typography-body sds-typography--strong"
            >
              <span>
                <button
                  class="sds-popover"
                  popovertarget="_R_35l_"
                  style="anchor-name: --popover-anchor-_R_35l_"
                >
                  FileName.jpg
                </button>
                <span
                  class="sds-popover__target sds-popover__target--anchor sds-typography-body"
                  id="_R_35l_"
                  popover="auto"
                  style="
                    position-anchor: --popover-anchor-_R_35l_;
                    top: anchor(bottom);
                    left: anchor(left);
                  "
                >
                  Image preview
                </span>
              </span>
            </div>
            <div class="sds-input-file-list__item-size">1.47MB</div>
          </div>
        </div>
        <div class="sds-input-file-list__item-end">
          <button
            class="sds-button sds-button--transparent sds-button--small"
            aria-label="Remove FileName.jpg"
            type="button"
            label="Remove FileName.jpg"
          >
            <span class="sds-button__icon sds-button__icon--only"
              ><!-- icon: DeleteIcon --></span
            >
          </button>
        </div>
      </li>
      <li
        class="sds-input-file-list__item sds-input-file-list__item--error sds-typography-body"
      >
        <div class="sds-input-file-list__item-start">
          <div>
            <div class="sds-input-file-list__item-icon">
              <!-- icon: FailedIcon -->
            </div>
          </div>
          <div>
            <div
              class="sds-input-file-list__item-name sds-typography-body sds-typography--strong"
            >
              FileName.pdf
            </div>
            <div class="sds-input-file-list__item-size">1KB</div>
            <div
              class="sds-form__help-text sds-form__help-text--error sds-input-file-list__item-error"
            >
              Error: Message
            </div>
          </div>
        </div>
        <div class="sds-input-file-list__item-end">
          <button
            class="sds-button sds-button--transparent sds-button--small"
            aria-label="Remove FileName.jpg"
            type="button"
            label="Remove FileName.jpg"
          >
            <span class="sds-button__icon sds-button__icon--only"
              ><!-- icon: CancelIcon --></span
            >
          </button>
        </div>
      </li>
    </ul>
  </figure>
</div>
```
