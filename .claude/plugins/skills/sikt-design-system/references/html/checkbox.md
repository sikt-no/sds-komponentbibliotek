# @sikt/sds-checkbox — HTML snippets

Rendered HTML for every Storybook story in `packages/checkbox`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-checkbox/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/checkbox.md`) to pick up the visual styles for these classes.

## Checkbox.stories

### Checked

```html
<label class="sds-checkbox" for="REPLACE_ME_0">
  <input
    class="sds-checkbox__input"
    id="REPLACE_ME_0"
    type="checkbox"
    aria-invalid="false"
    checked=""
  />
  <span class="sds-checkbox__icon-wrapper"><!-- icon: ConfirmIcon --></span>
  <span class="sds-checkbox__input-label">Checked checkbox</span>
</label>
```

### Indeterminate

```html
<label class="sds-checkbox" for="REPLACE_ME_0">
  <input
    class="sds-checkbox__input"
    id="REPLACE_ME_0"
    type="checkbox"
    aria-invalid="false"
    aria-checked="mixed"
  />
  <span class="sds-checkbox__icon-wrapper"><!-- icon: SubtractIcon --></span>
  <span class="sds-checkbox__input-label">Indeterminate checkbox</span>
</label>
```

### Unchecked

```html
<label class="sds-checkbox" for="REPLACE_ME_0">
  <input
    class="sds-checkbox__input"
    id="REPLACE_ME_0"
    type="checkbox"
    aria-invalid="false"
  />
  <span class="sds-checkbox__icon-wrapper"><!-- icon: ConfirmIcon --></span>
  <span class="sds-checkbox__input-label">Unchecked checkbox</span>
</label>
```

### WithAriaLabel

```html
<span class="sds-checkbox">
  <input
    class="sds-checkbox__input"
    id="REPLACE_ME_0"
    type="checkbox"
    aria-label="Label"
    aria-invalid="false"
    checked=""
  />
  <span class="sds-checkbox__icon-wrapper"><!-- icon: ConfirmIcon --></span>
</span>
```

### WithAriaLabelledby

```html
<div class="sds-table">
  <table class="sds-table__table">
    <caption class="sds-table__caption">
      CheckboxInput inside Table
    </caption>
    <thead class="sds-table__head">
      <tr class="sds-table__row">
        <th class="sds-table__header">Name</th>
        <th class="sds-table__header" id="columnTitle">Active</th>
      </tr>
    </thead>
    <tbody class="sds-table__body">
      <tr class="sds-table__row">
        <td class="sds-table__cell" data-th="Name" id="rowTitle">Sikt</td>
        <td class="sds-table__cell" data-th="Active">
          <span class="sds-checkbox">
            <input
              class="sds-checkbox__input"
              id="_R_1a_"
              type="checkbox"
              aria-labelledby="rowTitle columnTitle"
              aria-invalid="false"
              checked=""
            />
            <span class="sds-checkbox__icon-wrapper"
              ><!-- icon: ConfirmIcon --></span
            >
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

## CheckboxFieldset.stories

### Default

```html
<fieldset class="sds-form-fieldset" aria-invalid="false">
  <legend class="sds-form-fieldset__legend">Legend</legend>
  <label class="sds-checkbox" for="_R_l_">
    <input
      class="sds-checkbox__input"
      id="_R_l_"
      type="checkbox"
      aria-invalid="false"
      checked=""
    />
    <span class="sds-checkbox__icon-wrapper"><!-- icon: ConfirmIcon --></span>
    <span class="sds-checkbox__input-label">Checkbox label 1</span>
  </label>
  <label class="sds-checkbox" for="REPLACE_ME_0">
    <input
      class="sds-checkbox__input"
      id="REPLACE_ME_0"
      type="checkbox"
      aria-invalid="false"
    />
    <span class="sds-checkbox__icon-wrapper"><!-- icon: ConfirmIcon --></span>
    <span class="sds-checkbox__input-label">Checkbox label 2</span>
  </label>
  <label class="sds-checkbox" for="_R_1l_">
    <input
      class="sds-checkbox__input"
      id="_R_1l_"
      type="checkbox"
      aria-invalid="false"
      checked=""
    />
    <span class="sds-checkbox__icon-wrapper"><!-- icon: ConfirmIcon --></span>
    <span class="sds-checkbox__input-label">Checkbox label 3</span>
  </label>
</fieldset>
```

### HorizontalLayout

```html
<fieldset class="sds-form-fieldset" aria-invalid="false">
  <legend class="sds-form-fieldset__legend">Legend</legend>
  <div style="display: flex">
    <label class="sds-checkbox" for="_R_l_">
      <input
        class="sds-checkbox__input"
        id="_R_l_"
        type="checkbox"
        aria-invalid="false"
        checked=""
      />
      <span class="sds-checkbox__icon-wrapper"><!-- icon: ConfirmIcon --></span>
      <span class="sds-checkbox__input-label">Checkbox label 1</span>
    </label>
    <label class="sds-checkbox" for="REPLACE_ME_0">
      <input
        class="sds-checkbox__input"
        id="REPLACE_ME_0"
        type="checkbox"
        aria-invalid="false"
      />
      <span class="sds-checkbox__icon-wrapper"><!-- icon: ConfirmIcon --></span>
      <span class="sds-checkbox__input-label">Checkbox label 2</span>
    </label>
    <label class="sds-checkbox" for="_R_1l_">
      <input
        class="sds-checkbox__input"
        id="_R_1l_"
        type="checkbox"
        aria-invalid="false"
        checked=""
      />
      <span class="sds-checkbox__icon-wrapper"><!-- icon: ConfirmIcon --></span>
      <span class="sds-checkbox__input-label">Checkbox label 3</span>
    </label>
  </div>
</fieldset>
```

### WithAriaLabelledby

```html
<div class="sds-table">
  <table class="sds-table__table">
    <caption class="sds-table__caption">
      Fieldset inside Table
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
            <label class="sds-checkbox" for="_R_ba_">
              <input
                class="sds-checkbox__input"
                id="_R_ba_"
                type="checkbox"
                aria-invalid="false"
              />
              <span class="sds-checkbox__icon-wrapper"
                ><!-- icon: ConfirmIcon --></span
              >
              <span class="sds-checkbox__input-label">Checkbox label</span>
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
  <label class="sds-checkbox sds-checkbox--error" for="_R_l_">
    <input
      class="sds-checkbox__input"
      id="_R_l_"
      type="checkbox"
      aria-invalid="true"
      checked=""
    />
    <span class="sds-checkbox__icon-wrapper"><!-- icon: ConfirmIcon --></span>
    <span class="sds-checkbox__input-label">Checkbox label</span>
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
  <label class="sds-checkbox" for="_R_l_">
    <input
      class="sds-checkbox__input"
      id="_R_l_"
      type="checkbox"
      aria-invalid="false"
      checked=""
    />
    <span class="sds-checkbox__icon-wrapper"><!-- icon: ConfirmIcon --></span>
    <span class="sds-checkbox__input-label">Checkbox label 1</span>
  </label>
  <label class="sds-checkbox" for="REPLACE_ME_1">
    <input
      class="sds-checkbox__input"
      id="REPLACE_ME_1"
      type="checkbox"
      aria-invalid="false"
    />
    <span class="sds-checkbox__icon-wrapper"><!-- icon: ConfirmIcon --></span>
    <span class="sds-checkbox__input-label">Checkbox label 2</span>
  </label>
  <label class="sds-checkbox" for="_R_1l_">
    <input
      class="sds-checkbox__input"
      id="_R_1l_"
      type="checkbox"
      aria-invalid="false"
      checked=""
    />
    <span class="sds-checkbox__icon-wrapper"><!-- icon: ConfirmIcon --></span>
    <span class="sds-checkbox__input-label">Checkbox label 3</span>
  </label>
  <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">
    Helpful text
  </div>
</fieldset>
```
