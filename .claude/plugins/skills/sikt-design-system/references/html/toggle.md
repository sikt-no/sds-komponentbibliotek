# @sikt/sds-toggle — HTML snippets

Rendered HTML for every Storybook story in `packages/toggle`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-toggle/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/toggle.md`) to pick up the visual styles for these classes.

## ToggleSegment.stories

### Default

```html
<div class="sds-toggle-segment sds-toggle-segment--horizontal">
  <fieldset
    class="sds-form-fieldset sds-toggle-segment__fieldset"
    aria-invalid="false"
  >
    <legend class="sds-form-fieldset__legend">Toggle segment</legend>
    <div class="sds-toggle-segment__group">
      <div
        class="sds-toggle-segment__option sds-toggle-segment__option--checked"
      >
        <input
          id="_R_l_"
          type="radio"
          class="sds-toggle-segment__input"
          name="REPLACE_ME_0"
          checked=""
          value="1"
        />
        <label class="sds-toggle-segment__label" for="_R_l_">L</label>
      </div>
      <div class="sds-toggle-segment__option">
        <input
          id="REPLACE_ME_1"
          type="radio"
          class="sds-toggle-segment__input"
          name="REPLACE_ME_0"
          value="2"
        />
        <label class="sds-toggle-segment__label" for="REPLACE_ME_1"
          >Label</label
        >
      </div>
      <div class="sds-toggle-segment__option">
        <input
          id="_R_1l_"
          type="radio"
          class="sds-toggle-segment__input"
          name="REPLACE_ME_0"
          value="3"
        />
        <label class="sds-toggle-segment__label" for="_R_1l_"
          >Very long long label</label
        >
      </div>
    </div>
  </fieldset>
</div>
```

### WithFixedWidth

```html
<div
  class="sds-toggle-segment sds-toggle-segment--fixed sds-toggle-segment--horizontal"
>
  <fieldset
    class="sds-form-fieldset sds-toggle-segment__fieldset"
    aria-invalid="false"
  >
    <legend class="sds-form-fieldset__legend">Toggle segment</legend>
    <div class="sds-toggle-segment__group">
      <div
        class="sds-toggle-segment__option sds-toggle-segment__option--checked"
      >
        <input
          id="_R_l_"
          type="radio"
          class="sds-toggle-segment__input"
          name="REPLACE_ME_0"
          checked=""
          value="1"
        />
        <label class="sds-toggle-segment__label" for="_R_l_">L</label>
      </div>
      <div class="sds-toggle-segment__option">
        <input
          id="REPLACE_ME_1"
          type="radio"
          class="sds-toggle-segment__input"
          name="REPLACE_ME_0"
          value="2"
        />
        <label class="sds-toggle-segment__label" for="REPLACE_ME_1"
          >Label</label
        >
      </div>
      <div class="sds-toggle-segment__option">
        <input
          id="_R_1l_"
          type="radio"
          class="sds-toggle-segment__input"
          name="REPLACE_ME_0"
          value="3"
        />
        <label class="sds-toggle-segment__label" for="_R_1l_"
          >Very long long label</label
        >
      </div>
    </div>
  </fieldset>
</div>
```

### WithVerticalOrientation

```html
<div class="sds-toggle-segment sds-toggle-segment--vertical">
  <fieldset
    class="sds-form-fieldset sds-toggle-segment__fieldset"
    aria-invalid="false"
  >
    <legend class="sds-form-fieldset__legend">Toggle segment</legend>
    <div class="sds-toggle-segment__group">
      <div
        class="sds-toggle-segment__option sds-toggle-segment__option--checked"
      >
        <input
          id="_R_l_"
          type="radio"
          class="sds-toggle-segment__input"
          name="REPLACE_ME_0"
          checked=""
          value="1"
        />
        <label class="sds-toggle-segment__label" for="_R_l_">L</label>
      </div>
      <div class="sds-toggle-segment__option">
        <input
          id="REPLACE_ME_1"
          type="radio"
          class="sds-toggle-segment__input"
          name="REPLACE_ME_0"
          value="2"
        />
        <label class="sds-toggle-segment__label" for="REPLACE_ME_1"
          >Label</label
        >
      </div>
      <div class="sds-toggle-segment__option">
        <input
          id="_R_1l_"
          type="radio"
          class="sds-toggle-segment__input"
          name="REPLACE_ME_0"
          value="3"
        />
        <label class="sds-toggle-segment__label" for="_R_1l_"
          >Very long long label</label
        >
      </div>
    </div>
  </fieldset>
</div>
```

## ToggleSwitch.stories

### Default

```html
<div
  class="sds-toggle-switch sds-toggle-switch--checked"
  data-testid="sds-toggle-switch"
>
  <label class="sds-toggle-switch__label" for="REPLACE_ME_0">
    <span class="sds-toggle-switch__inner">
      <input
        id="REPLACE_ME_0"
        type="checkbox"
        role="switch"
        class="sds-toggle-switch__track"
        checked=""
      />
      <span class="sds-toggle-switch__thumb"><!-- icon: ConfirmIcon --></span>
    </span>
    <span class="sds-toggle-switch__label-text">Label</span>
  </label>
</div>
```

### WithAriaLabelledby

```html
<div class="sds-table">
  <table class="sds-table__table">
    <caption class="sds-table__caption">
      ToggleSwitch inside Table
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
          <div
            class="sds-toggle-switch sds-toggle-switch--checked"
            data-testid="sds-toggle-switch"
          >
            <span class="sds-toggle-switch__inner">
              <input
                id="_R_1a_"
                type="checkbox"
                role="switch"
                class="sds-toggle-switch__track"
                aria-labelledby="rowTitle columnTitle"
                readonly=""
                checked=""
              />
              <span class="sds-toggle-switch__thumb"
                ><!-- icon: ConfirmIcon --></span
              >
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### WithLabelFirst

```html
<div
  class="sds-toggle-switch sds-toggle-switch--checked"
  data-testid="sds-toggle-switch"
>
  <label class="sds-toggle-switch__label" for="REPLACE_ME_0">
    <span class="sds-toggle-switch__label-text">Label</span>
    <span class="sds-toggle-switch__inner">
      <input
        id="REPLACE_ME_0"
        type="checkbox"
        role="switch"
        class="sds-toggle-switch__track"
        checked=""
      />
      <span class="sds-toggle-switch__thumb"><!-- icon: ConfirmIcon --></span>
    </span>
  </label>
</div>
```

### WithoutIcon

```html
<div
  class="sds-toggle-switch sds-toggle-switch--checked"
  data-testid="sds-toggle-switch"
>
  <label class="sds-toggle-switch__label" for="REPLACE_ME_0">
    <span class="sds-toggle-switch__inner">
      <input
        id="REPLACE_ME_0"
        type="checkbox"
        role="switch"
        class="sds-toggle-switch__track"
        checked=""
      />
      <span class="sds-toggle-switch__thumb"></span>
    </span>
    <span class="sds-toggle-switch__label-text">Label</span>
  </label>
</div>
```
