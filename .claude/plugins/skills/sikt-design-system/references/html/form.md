# @sikt/sds-form — HTML snippets

Rendered HTML for every Storybook story in `packages/form`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-form/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/form.md`) to pick up the visual styles for these classes.

## Fieldset.stories

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
    <span class="sds-checkbox__input-label">Checkbox label</span>
  </label>
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
  <label class="sds-checkbox" for="_R_l_">
    <input
      class="sds-checkbox__input"
      id="_R_l_"
      type="checkbox"
      aria-invalid="false"
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
    <span class="sds-checkbox__input-label">Checkbox label</span>
  </label>
  <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">
    Helpful text
  </div>
</fieldset>
```

## FormField.stories

### Default

```html
<div class="sds-form-field">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="input">
      <span class="sds-form__label-text">Label</span>
      <input id="input" />
    </label>
  </div>
</div>
```

### WithError

```html
<div class="sds-form-field sds-form-field--error">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label sds-form__label--error" for="input">
      <span class="sds-form__label-text">Label</span>
      <input
        id="input"
        aria-describedby="input-help-text input-error-text"
        aria-invalid="true"
        aria-errormessage="input-error-text"
      />
    </label>
  </div>
  <div class="sds-form__help-text" id="input-help-text">Helpful text</div>
  <div
    class="sds-form__help-text sds-form__help-text--error"
    id="input-error-text"
  >
    Error: Message
  </div>
</div>
```

### WithHelpText

```html
<div class="sds-form-field">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="input">
      <span class="sds-form__label-text">Label</span>
      <input id="input" aria-describedby="input-help-text" />
    </label>
  </div>
  <div class="sds-form__help-text" id="input-help-text">Helpful text</div>
</div>
```

### WithPostLabelSlot

```html
<div class="sds-form-field">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="input">
      <span class="sds-form__label-text">Label</span>
      <input id="input" aria-describedby="input-help-text" />
    </label>
    <div class="sds-form-field__label-after"><button>Action</button></div>
  </div>
</div>
```

## HelpText.stories

### Default

```html
<div class="sds-form__help-text">Helpful text</div>
```

### WithError

```html
<div class="sds-form__help-text sds-form__help-text--error">Error: Message</div>
```

## Label.stories

### Default

```html
<label class="sds-form__label"
  ><span class="sds-form__label-text">Label</span></label
>
```

### WithChildren

```html
<label class="sds-form__label">
  <span class="sds-form__label-text">Label</span>
  <div>AAA</div>
</label>
```

### WithError

```html
<label class="sds-form__label sds-form__label--error">
  <span class="sds-form__label-text">Label</span>
</label>
```
