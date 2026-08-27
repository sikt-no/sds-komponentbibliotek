# @sikt/sds-radio — HTML snippets

Rendered HTML for every Storybook story in `packages/radio`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-radio/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/radio.md`) to pick up the visual styles for these classes.

## RadioFieldset.stories

### Default

```html
<fieldset class="sds-form-fieldset" aria-invalid="false">
  <legend class="sds-form-fieldset__legend">Legend</legend>
  <label class="sds-radio" for="_R_l_">
    <input
      class="sds-radio__input"
      id="_R_l_"
      type="radio"
      name="REPLACE_ME_0"
      checked=""
      value="1"
    />
    <span class="sds-radio__input-label">Radio 1</span>
  </label>
  <label class="sds-radio" for="REPLACE_ME_1">
    <input
      class="sds-radio__input"
      id="REPLACE_ME_1"
      type="radio"
      name="REPLACE_ME_0"
      value="2"
    />
    <span class="sds-radio__input-label">Radio 2</span>
  </label>
  <label class="sds-radio" for="_R_1l_">
    <input
      class="sds-radio__input"
      id="_R_1l_"
      type="radio"
      name="REPLACE_ME_0"
      value="3"
    />
    <span class="sds-radio__input-label">Radio 3</span>
  </label>
</fieldset>
```

### HorizontalLayout

```html
<fieldset class="sds-form-fieldset" aria-invalid="false">
  <legend class="sds-form-fieldset__legend">Legend</legend>
  <div style="display: flex">
    <label class="sds-radio" for="_R_l_">
      <input
        class="sds-radio__input"
        id="_R_l_"
        type="radio"
        name="REPLACE_ME_0"
        checked=""
        value="1"
      />
      <span class="sds-radio__input-label">Radio 1</span>
    </label>
    <label class="sds-radio" for="REPLACE_ME_1">
      <input
        class="sds-radio__input"
        id="REPLACE_ME_1"
        type="radio"
        name="REPLACE_ME_0"
        value="2"
      />
      <span class="sds-radio__input-label">Radio 2</span>
    </label>
    <label class="sds-radio" for="_R_1l_">
      <input
        class="sds-radio__input"
        id="_R_1l_"
        type="radio"
        name="REPLACE_ME_0"
        value="3"
      />
      <span class="sds-radio__input-label">Radio 3</span>
    </label>
  </div>
</fieldset>
```

### WithAriaLabelledby

```html
<div class="sds-table">
  <table class="sds-table__table">
    <caption class="sds-table__caption">
      Radio inside Table
    </caption>
    <thead class="sds-table__head">
      <tr class="sds-table__row">
        <th class="sds-table__header">Name</th>
        <th class="sds-table__header" id="columnTitle">Fieldset</th>
      </tr>
    </thead>
    <tbody class="sds-table__body">
      <tr class="sds-table__row">
        <td class="sds-table__cell" data-th="Name" id="rowTitle">Sikt</td>
        <td class="sds-table__cell" data-th="Fieldset">
          <fieldset
            class="sds-form-fieldset"
            aria-labelledby="rowTitle columnTitle"
            aria-invalid="false"
          >
            <label class="sds-radio" for="_R_1ba_">
              <input
                class="sds-radio__input"
                id="_R_1ba_"
                type="radio"
                name="_R_1a_"
                value="1"
              />
              <span class="sds-radio__input-label">Radio 1</span>
            </label>
            <label class="sds-radio" for="_R_2ba_">
              <input
                class="sds-radio__input"
                id="_R_2ba_"
                type="radio"
                name="_R_1a_"
                value="2"
              />
              <span class="sds-radio__input-label">Radio 2</span>
            </label>
            <label class="sds-radio" for="_R_3ba_">
              <input
                class="sds-radio__input"
                id="_R_3ba_"
                type="radio"
                name="_R_1a_"
                value="3"
              />
              <span class="sds-radio__input-label">Radio 3</span>
            </label>
          </fieldset>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### WithError

```html
<fieldset
  class="sds-form-fieldset sds-form-fieldset--error"
  aria-describedby="REPLACE_ME_0-error-text REPLACE_ME_0-help-text"
  aria-invalid="true"
  aria-errormessage="REPLACE_ME_0-error-text"
>
  <legend class="sds-form-fieldset__legend">Legend</legend>
  <label class="sds-radio sds-radio--error" for="_R_l_">
    <input
      class="sds-radio__input"
      id="_R_l_"
      type="radio"
      name="REPLACE_ME_0"
      value="1"
    />
    <span class="sds-radio__input-label">Radio 1</span>
  </label>
  <label class="sds-radio sds-radio--error" for="REPLACE_ME_1">
    <input
      class="sds-radio__input"
      id="REPLACE_ME_1"
      type="radio"
      name="REPLACE_ME_0"
      value="2"
    />
    <span class="sds-radio__input-label">Radio 2</span>
  </label>
  <label class="sds-radio sds-radio--error" for="_R_1l_">
    <input
      class="sds-radio__input"
      id="_R_1l_"
      type="radio"
      name="REPLACE_ME_0"
      checked=""
      value="3"
    />
    <span class="sds-radio__input-label">Radio 3</span>
  </label>
  <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">
    Helpful text
  </div>
  <div
    class="sds-form__help-text sds-form__help-text--error"
    id="REPLACE_ME_0-error-text"
  >
    Error: Message
  </div>
</fieldset>
```

### WithHelpText

```html
<fieldset
  class="sds-form-fieldset"
  aria-describedby="REPLACE_ME_0-help-text"
  aria-invalid="false"
>
  <legend class="sds-form-fieldset__legend">Legend</legend>
  <label class="sds-radio" for="_R_l_">
    <input
      class="sds-radio__input"
      id="_R_l_"
      type="radio"
      name="REPLACE_ME_0"
      value="1"
    />
    <span class="sds-radio__input-label">Radio 1</span>
  </label>
  <label class="sds-radio" for="REPLACE_ME_1">
    <input
      class="sds-radio__input"
      id="REPLACE_ME_1"
      type="radio"
      name="REPLACE_ME_0"
      checked=""
      value="2"
    />
    <span class="sds-radio__input-label">Radio 2</span>
  </label>
  <label class="sds-radio" for="_R_1l_">
    <input
      class="sds-radio__input"
      id="_R_1l_"
      type="radio"
      name="REPLACE_ME_0"
      value="3"
    />
    <span class="sds-radio__input-label">Radio 3</span>
  </label>
  <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">
    Helpful text
  </div>
</fieldset>
```
