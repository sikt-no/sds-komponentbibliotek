# @sikt/sds-select — HTML snippets

Rendered HTML for every Storybook story in `packages/select`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-select/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/select.md`) to pick up the visual styles for these classes.

## Select.stories

### Default

```html
<div class="sds-form-field sds-select">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <div class="sds-select__select">
        <select
          id="REPLACE_ME_0"
          class="sds-select__select-input"
          aria-invalid="false"
        >
          <option class="sds-select__option" value="1">First item</option>
          <option class="sds-select__option" value="2" selected="">
            Second item
          </option>
          <option class="sds-select__option" value="3">Third item</option>
        </select>
        <span class="sds-select__select-button"
          ><!-- icon: ExpandShowAltIcon --></span
        >
      </div>
    </label>
  </div>
</div>
```

### Group

```html
<div class="sds-form-field sds-select">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <div class="sds-select__select">
        <select
          id="REPLACE_ME_0"
          class="sds-select__select-input"
          aria-invalid="false"
        >
          <optgroup class="sds-select__optgroup" label="First group">
            <option class="sds-select__option" value="1">First item</option>
            <option class="sds-select__option" value="2" selected="">
              Second item
            </option>
            <option class="sds-select__option" value="3">Third item</option>
          </optgroup>
          <optgroup class="sds-select__optgroup" label="Second group">
            <option class="sds-select__option" value="4">First item</option>
            <option class="sds-select__option" value="5">Second item</option>
            <option class="sds-select__option" value="6">Third item</option>
          </optgroup>
        </select>
        <span class="sds-select__select-button"
          ><!-- icon: ExpandShowAltIcon --></span
        >
      </div>
    </label>
  </div>
</div>
```

### WithAriaLabelledby

```html
<div class="sds-table">
  <table class="sds-table__table">
    <caption class="sds-table__caption">
      Select inside Table
    </caption>
    <thead class="sds-table__head">
      <tr class="sds-table__row">
        <th class="sds-table__header">Name</th>
        <th class="sds-table__header" id="columnTitle">Select</th>
      </tr>
    </thead>
    <tbody class="sds-table__body">
      <tr class="sds-table__row">
        <td class="sds-table__cell" data-th="Name" id="rowTitle">Sikt</td>
        <td class="sds-table__cell" data-th="Select">
          <div class="sds-form-field sds-select">
            <div class="sds-form-field__label-wrapper">
              <div class="sds-select__select">
                <select
                  id="_R_1a_"
                  class="sds-select__select-input"
                  aria-labelledby="rowTitle columnTitle"
                  aria-invalid="false"
                >
                  <option class="sds-select__option" value="1">
                    First item
                  </option>
                  <option class="sds-select__option" value="2">
                    Second item
                  </option>
                  <option class="sds-select__option" value="3">
                    Third item
                  </option>
                </select>
                <span class="sds-select__select-button"
                  ><!-- icon: ExpandShowAltIcon --></span
                >
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### WithError

```html
<div
  class="sds-form-field sds-form-field--error sds-select sds-select--invalid"
>
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label sds-form__label--error" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <div class="sds-select__select">
        <select
          id="REPLACE_ME_0"
          class="sds-select__select-input"
          aria-describedby="REPLACE_ME_0-error-text REPLACE_ME_0-help-text"
          aria-invalid="true"
          aria-errormessage="REPLACE_ME_0-error-text"
        >
          <option class="sds-select__option" value="1">First item</option>
          <option class="sds-select__option" value="2" selected="">
            Second item
          </option>
          <option class="sds-select__option" value="3">Third item</option>
        </select>
        <span class="sds-select__select-button"
          ><!-- icon: ExpandShowAltIcon --></span
        >
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
```

### WithHelpText

```html
<div class="sds-form-field sds-select">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <div class="sds-select__select">
        <select
          id="REPLACE_ME_0"
          class="sds-select__select-input"
          aria-describedby="REPLACE_ME_0-help-text"
          aria-invalid="false"
        >
          <option class="sds-select__option" value="1">First item</option>
          <option class="sds-select__option" value="2" selected="">
            Second item
          </option>
          <option class="sds-select__option" value="3">Third item</option>
        </select>
        <span class="sds-select__select-button"
          ><!-- icon: ExpandShowAltIcon --></span
        >
      </div>
    </label>
  </div>
  <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">
    Helpful text
  </div>
</div>
```
