# @sikt/sds-combobox — HTML snippets

Rendered HTML for every Storybook story in `packages/combobox`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-combobox/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/combobox.md`) to pick up the visual styles for these classes.

## Combobox.stories

### Controlled

```html
<button>Select Chocolate</button>
<button style="margin-left: 8px">Clear selection</button>
<div style="margin-top: 16px">
  <div class="sds-form-field sds-combobox">
    <div class="sds-form-field__label-wrapper">
      <label class="sds-form__label" for="REPLACE_ME_0">
        <span class="sds-form__label-text">Choose flavor of ice cream</span>
      </label>
      <u-combobox
        class="sds-combobox__combobox"
        data-sr-added="Added"
        data-sr-removed="Removed"
        data-sr-remove="Press to remove"
        data-sr-empty="No selected"
        data-sr-found="Navigate left to find %d selected"
        data-sr-invalid="Invalid value"
        data-sr-of="of"
        data-sr-singular="%d hit"
        data-sr-plural="%d hits"
        data-sr-clear="Clear text"
      >
        <data value="4">Vanilla</data>
        <input
          class="sds-combobox__input"
          id="REPLACE_ME_0"
          list="REPLACE_ME_0-list"
        />
        <del class="sds-combobox__button">
          <span class="sds-screen-reader-only">Clear text</span>
          <span class="sds-combobox__button-icon"
            ><!-- icon: CancelIcon --></span
          >
        </del>
        <span class="sds-combobox__button sds-combobox__button--expand">
          <span class="sds-combobox__button-icon"
            ><!-- icon: ExpandShowAltIcon --></span
          >
        </span>
        <u-datalist
          class="sds-combobox__datalist"
          id="REPLACE_ME_0-list"
          hidden=""
          data-sr-singular="%d hit"
          data-sr-plural="%d hits"
        >
          <u-option class="sds-combobox__datalist-option" value="1"
            >Coconut</u-option
          >
          <u-option class="sds-combobox__datalist-option" value="2"
            >Strawberries</u-option
          >
          <u-option class="sds-combobox__datalist-option" value="3"
            >Chocolate</u-option
          >
          <u-option class="sds-combobox__datalist-option" value="4"
            >Vanilla</u-option
          >
          <u-option class="sds-combobox__datalist-option" value="5"
            >Licorice</u-option
          >
          <u-option class="sds-combobox__datalist-option" value="6"
            >Pistachios</u-option
          >
          <u-option class="sds-combobox__datalist-option" value="7"
            >Mango</u-option
          >
          <u-option class="sds-combobox__datalist-option" value="8"
            >Hazelnut</u-option
          >
        </u-datalist>
      </u-combobox>
    </div>
  </div>
</div>
```

### ControlledMultiple

```html
<button>Select Strawberries &amp; Mango</button>
<button style="margin-left: 8px">Clear all</button>
<div style="margin-top: 16px">
  <div class="sds-form-field sds-combobox">
    <div class="sds-form-field__label-wrapper">
      <label class="sds-form__label" for="REPLACE_ME_0">
        <span class="sds-form__label-text">Choose flavors of ice cream</span>
      </label>
      <u-combobox
        class="sds-combobox__combobox"
        data-multiple=""
        data-sr-added="Added"
        data-sr-removed="Removed"
        data-sr-remove="Press to remove"
        data-sr-empty="No selected"
        data-sr-found="Navigate left to find %d selected"
        data-sr-invalid="Invalid value"
        data-sr-of="of"
        data-sr-singular="%d hit"
        data-sr-plural="%d hits"
        data-sr-clear="Clear text"
      >
        <data value="4">Vanilla</data>
        <data value="3">Chocolate</data>
        <input
          class="sds-combobox__input"
          id="REPLACE_ME_0"
          list="REPLACE_ME_0-list"
        />
        <del class="sds-combobox__button">
          <span class="sds-screen-reader-only">Clear text</span>
          <span class="sds-combobox__button-icon"
            ><!-- icon: CancelIcon --></span
          >
        </del>
        <span class="sds-combobox__button sds-combobox__button--expand">
          <span class="sds-combobox__button-icon"
            ><!-- icon: ExpandShowAltIcon --></span
          >
        </span>
        <u-datalist
          class="sds-combobox__datalist"
          id="REPLACE_ME_0-list"
          hidden=""
          data-sr-singular="%d hit"
          data-sr-plural="%d hits"
        >
          <u-option class="sds-combobox__datalist-option" value="1"
            >Coconut</u-option
          >
          <u-option class="sds-combobox__datalist-option" value="2"
            >Strawberries</u-option
          >
          <u-option class="sds-combobox__datalist-option" value="3"
            >Chocolate</u-option
          >
          <u-option class="sds-combobox__datalist-option" value="4"
            >Vanilla</u-option
          >
          <u-option class="sds-combobox__datalist-option" value="5"
            >Licorice</u-option
          >
          <u-option class="sds-combobox__datalist-option" value="6"
            >Pistachios</u-option
          >
          <u-option class="sds-combobox__datalist-option" value="7"
            >Mango</u-option
          >
          <u-option class="sds-combobox__datalist-option" value="8"
            >Hazelnut</u-option
          >
        </u-datalist>
      </u-combobox>
    </div>
  </div>
</div>
```

### Default

```html
<div class="sds-form-field sds-combobox">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Choose flavor of ice cream</span>
    </label>
    <u-combobox
      class="sds-combobox__combobox"
      data-sr-added="Added"
      data-sr-removed="Removed"
      data-sr-remove="Press to remove"
      data-sr-empty="No selected"
      data-sr-found="Navigate left to find %d selected"
      data-sr-invalid="Invalid value"
      data-sr-of="of"
      data-sr-singular="%d hit"
      data-sr-plural="%d hits"
      data-sr-clear="Clear text"
    >
      <data value="4">Vanilla</data>
      <input
        class="sds-combobox__input"
        id="REPLACE_ME_0"
        list="REPLACE_ME_0-list"
      />
      <del class="sds-combobox__button">
        <span class="sds-screen-reader-only">Clear text</span>
        <span class="sds-combobox__button-icon"><!-- icon: CancelIcon --></span>
      </del>
      <span class="sds-combobox__button sds-combobox__button--expand">
        <span class="sds-combobox__button-icon"
          ><!-- icon: ExpandShowAltIcon --></span
        >
      </span>
      <u-datalist
        class="sds-combobox__datalist"
        id="REPLACE_ME_0-list"
        hidden=""
        data-sr-singular="%d hit"
        data-sr-plural="%d hits"
      >
        <u-option class="sds-combobox__datalist-option" value="1"
          >Coconut</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="2"
          >Strawberries</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="3"
          >Chocolate</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="4"
          >Vanilla</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="5"
          >Licorice</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="6"
          >Pistachios</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="7"
          >Mango</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="8"
          >Hazelnut</u-option
        >
      </u-datalist>
    </u-combobox>
  </div>
</div>
```

### InForm

```html
<div>
  <form style="display: flex; flex-direction: column; gap: 16px">
    <div class="sds-form-field sds-combobox">
      <div class="sds-form-field__label-wrapper">
        <label class="sds-form__label" for="REPLACE_ME_0">
          <span class="sds-form__label-text">Choose your favorite flavor</span>
        </label>
        <u-combobox
          class="sds-combobox__combobox"
          data-sr-added="Added"
          data-sr-removed="Removed"
          data-sr-remove="Press to remove"
          data-sr-empty="No selected"
          data-sr-found="Navigate left to find %d selected"
          data-sr-invalid="Invalid value"
          data-sr-of="of"
          data-sr-singular="%d hit"
          data-sr-plural="%d hits"
          data-sr-clear="Clear text"
        >
          <data value="4">Vanilla</data>
          <input
            class="sds-combobox__input"
            id="REPLACE_ME_0"
            list="REPLACE_ME_0-list"
          />
          <del class="sds-combobox__button">
            <span class="sds-screen-reader-only">Clear text</span>
            <span class="sds-combobox__button-icon"
              ><!-- icon: CancelIcon --></span
            >
          </del>
          <span class="sds-combobox__button sds-combobox__button--expand">
            <span class="sds-combobox__button-icon"
              ><!-- icon: ExpandShowAltIcon --></span
            >
          </span>
          <u-datalist
            class="sds-combobox__datalist"
            id="REPLACE_ME_0-list"
            hidden=""
            data-sr-singular="%d hit"
            data-sr-plural="%d hits"
          >
            <u-option class="sds-combobox__datalist-option" value="1"
              >Coconut</u-option
            >
            <u-option class="sds-combobox__datalist-option" value="2"
              >Strawberries</u-option
            >
            <u-option class="sds-combobox__datalist-option" value="3"
              >Chocolate</u-option
            >
            <u-option class="sds-combobox__datalist-option" value="4"
              >Vanilla</u-option
            >
            <u-option class="sds-combobox__datalist-option" value="5"
              >Licorice</u-option
            >
            <u-option class="sds-combobox__datalist-option" value="6"
              >Pistachios</u-option
            >
            <u-option class="sds-combobox__datalist-option" value="7"
              >Mango</u-option
            >
            <u-option class="sds-combobox__datalist-option" value="8"
              >Hazelnut</u-option
            >
          </u-datalist>
        </u-combobox>
      </div>
    </div>
    <button type="submit" style="padding: 8px 16px; align-self: flex-start">
      Submit Form
    </button>
  </form>
</div>
```

### InFormMultiple

```html
<div>
  <form style="display: flex; flex-direction: column; gap: 16px">
    <div class="sds-form-field sds-combobox">
      <div class="sds-form-field__label-wrapper">
        <label class="sds-form__label" for="REPLACE_ME_0">
          <span class="sds-form__label-text"
            >Choose your favorite flavors (multiple)</span
          >
        </label>
        <u-combobox
          class="sds-combobox__combobox"
          data-multiple=""
          data-sr-added="Added"
          data-sr-removed="Removed"
          data-sr-remove="Press to remove"
          data-sr-empty="No selected"
          data-sr-found="Navigate left to find %d selected"
          data-sr-invalid="Invalid value"
          data-sr-of="of"
          data-sr-singular="%d hit"
          data-sr-plural="%d hits"
          data-sr-clear="Clear text"
        >
          <data value="4">Vanilla</data>
          <data value="3">Chocolate</data>
          <input
            class="sds-combobox__input"
            id="REPLACE_ME_0"
            list="REPLACE_ME_0-list"
          />
          <del class="sds-combobox__button">
            <span class="sds-screen-reader-only">Clear text</span>
            <span class="sds-combobox__button-icon"
              ><!-- icon: CancelIcon --></span
            >
          </del>
          <span class="sds-combobox__button sds-combobox__button--expand">
            <span class="sds-combobox__button-icon"
              ><!-- icon: ExpandShowAltIcon --></span
            >
          </span>
          <u-datalist
            class="sds-combobox__datalist"
            id="REPLACE_ME_0-list"
            hidden=""
            data-sr-singular="%d hit"
            data-sr-plural="%d hits"
          >
            <u-option class="sds-combobox__datalist-option" value="1"
              >Coconut</u-option
            >
            <u-option class="sds-combobox__datalist-option" value="2"
              >Strawberries</u-option
            >
            <u-option class="sds-combobox__datalist-option" value="3"
              >Chocolate</u-option
            >
            <u-option class="sds-combobox__datalist-option" value="4"
              >Vanilla</u-option
            >
            <u-option class="sds-combobox__datalist-option" value="5"
              >Licorice</u-option
            >
            <u-option class="sds-combobox__datalist-option" value="6"
              >Pistachios</u-option
            >
            <u-option class="sds-combobox__datalist-option" value="7"
              >Mango</u-option
            >
            <u-option class="sds-combobox__datalist-option" value="8"
              >Hazelnut</u-option
            >
          </u-datalist>
        </u-combobox>
      </div>
    </div>
    <button type="submit" style="padding: 8px 16px; align-self: flex-start">
      Submit Form
    </button>
  </form>
</div>
```

### Multiple

```html
<div class="sds-form-field sds-combobox">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Choose flavors of ice cream</span>
    </label>
    <u-combobox
      class="sds-combobox__combobox"
      data-multiple=""
      data-sr-added="Added"
      data-sr-removed="Removed"
      data-sr-remove="Press to remove"
      data-sr-empty="No selected"
      data-sr-found="Navigate left to find %d selected"
      data-sr-invalid="Invalid value"
      data-sr-of="of"
      data-sr-singular="%d hit"
      data-sr-plural="%d hits"
      data-sr-clear="Clear text"
    >
      <data value="4">Vanilla</data>
      <data value="3">Chocolate</data>
      <input
        class="sds-combobox__input"
        id="REPLACE_ME_0"
        list="REPLACE_ME_0-list"
      />
      <del class="sds-combobox__button">
        <span class="sds-screen-reader-only">Clear text</span>
        <span class="sds-combobox__button-icon"><!-- icon: CancelIcon --></span>
      </del>
      <span class="sds-combobox__button sds-combobox__button--expand">
        <span class="sds-combobox__button-icon"
          ><!-- icon: ExpandShowAltIcon --></span
        >
      </span>
      <u-datalist
        class="sds-combobox__datalist"
        id="REPLACE_ME_0-list"
        hidden=""
        data-sr-singular="%d hit"
        data-sr-plural="%d hits"
      >
        <u-option class="sds-combobox__datalist-option" value="1"
          >Coconut</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="2"
          >Strawberries</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="3"
          >Chocolate</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="4"
          >Vanilla</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="5"
          >Licorice</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="6"
          >Pistachios</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="7"
          >Mango</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="8"
          >Hazelnut</u-option
        >
      </u-datalist>
    </u-combobox>
  </div>
</div>
```

### WithError

```html
<div
  class="sds-form-field sds-form-field--error sds-combobox sds-combobox--invalid"
>
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label sds-form__label--error" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Choose flavor of ice cream</span>
    </label>
    <u-combobox
      class="sds-combobox__combobox"
      data-sr-added="Added"
      data-sr-removed="Removed"
      data-sr-remove="Press to remove"
      data-sr-empty="No selected"
      data-sr-found="Navigate left to find %d selected"
      data-sr-invalid="Invalid value"
      data-sr-of="of"
      data-sr-singular="%d hit"
      data-sr-plural="%d hits"
      data-sr-clear="Clear text"
    >
      <data value="4">Vanilla</data>
      <input
        class="sds-combobox__input"
        id="REPLACE_ME_0"
        list="REPLACE_ME_0-list"
      />
      <del class="sds-combobox__button">
        <span class="sds-screen-reader-only">Clear text</span>
        <span class="sds-combobox__button-icon"><!-- icon: CancelIcon --></span>
      </del>
      <span class="sds-combobox__button sds-combobox__button--expand">
        <span class="sds-combobox__button-icon"
          ><!-- icon: ExpandShowAltIcon --></span
        >
      </span>
      <u-datalist
        class="sds-combobox__datalist"
        id="REPLACE_ME_0-list"
        hidden=""
        data-sr-singular="%d hit"
        data-sr-plural="%d hits"
      >
        <u-option class="sds-combobox__datalist-option" value="1"
          >Coconut</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="2"
          >Strawberries</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="3"
          >Chocolate</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="4"
          >Vanilla</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="5"
          >Licorice</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="6"
          >Pistachios</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="7"
          >Mango</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="8"
          >Hazelnut</u-option
        >
      </u-datalist>
    </u-combobox>
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

### WithGroupedOptions

```html
<div class="sds-form-field sds-combobox">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Choose a food item</span>
    </label>
    <u-combobox
      class="sds-combobox__combobox"
      data-sr-added="Added"
      data-sr-removed="Removed"
      data-sr-remove="Press to remove"
      data-sr-empty="No selected"
      data-sr-found="Navigate left to find %d selected"
      data-sr-invalid="Invalid value"
      data-sr-of="of"
      data-sr-singular="%d hit"
      data-sr-plural="%d hits"
      data-sr-clear="Clear text"
    >
      <input
        class="sds-combobox__input"
        id="REPLACE_ME_0"
        list="REPLACE_ME_0-list"
      />
      <del class="sds-combobox__button">
        <span class="sds-screen-reader-only">Clear text</span>
        <span class="sds-combobox__button-icon"><!-- icon: CancelIcon --></span>
      </del>
      <span class="sds-combobox__button sds-combobox__button--expand">
        <span class="sds-combobox__button-icon"
          ><!-- icon: ExpandShowAltIcon --></span
        >
      </span>
      <u-datalist
        class="sds-combobox__datalist"
        id="REPLACE_ME_0-list"
        hidden=""
        data-sr-singular="%d hit"
        data-sr-plural="%d hits"
      >
        <div class="sds-combobox__datalist-group" role="group">
          <span class="sds-combobox__datalist-group-label" id="_R_dj_"
            >Fruits</span
          >
          <u-option
            class="sds-combobox__datalist-option"
            value="apple"
            aria-describedby="_R_dj_"
          >
            Apple
          </u-option>
          <u-option
            class="sds-combobox__datalist-option"
            value="banana"
            aria-describedby="_R_dj_"
          >
            Banana
          </u-option>
          <u-option
            class="sds-combobox__datalist-option"
            value="mango"
            aria-describedby="_R_dj_"
          >
            Mango
          </u-option>
          <u-option
            class="sds-combobox__datalist-option"
            value="strawberry"
            aria-describedby="_R_dj_"
          >
            Strawberry
          </u-option>
        </div>
        <div class="sds-combobox__datalist-group" role="group">
          <span class="sds-combobox__datalist-group-label" id="_R_lj_"
            >Vegetables</span
          >
          <u-option
            class="sds-combobox__datalist-option"
            value="broccoli"
            aria-describedby="_R_lj_"
          >
            Broccoli
          </u-option>
          <u-option
            class="sds-combobox__datalist-option"
            value="carrot"
            aria-describedby="_R_lj_"
          >
            Carrot
          </u-option>
          <u-option
            class="sds-combobox__datalist-option"
            value="spinach"
            aria-describedby="_R_lj_"
          >
            Spinach
          </u-option>
        </div>
        <div class="sds-combobox__datalist-group" role="group">
          <span class="sds-combobox__datalist-group-label" id="_R_tj_"
            >Other</span
          >
          <u-option
            class="sds-combobox__datalist-option"
            value="pizza"
            aria-describedby="_R_tj_"
          >
            Pizza
          </u-option>
        </div>
      </u-datalist>
    </u-combobox>
  </div>
</div>
```

### WithGroupedOptionsMultiple

```html
<div class="sds-form-field sds-combobox">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Choose a food item</span>
    </label>
    <u-combobox
      class="sds-combobox__combobox"
      data-multiple=""
      data-sr-added="Added"
      data-sr-removed="Removed"
      data-sr-remove="Press to remove"
      data-sr-empty="No selected"
      data-sr-found="Navigate left to find %d selected"
      data-sr-invalid="Invalid value"
      data-sr-of="of"
      data-sr-singular="%d hit"
      data-sr-plural="%d hits"
      data-sr-clear="Clear text"
    >
      <input
        class="sds-combobox__input"
        id="REPLACE_ME_0"
        list="REPLACE_ME_0-list"
      />
      <del class="sds-combobox__button">
        <span class="sds-screen-reader-only">Clear text</span>
        <span class="sds-combobox__button-icon"><!-- icon: CancelIcon --></span>
      </del>
      <span class="sds-combobox__button sds-combobox__button--expand">
        <span class="sds-combobox__button-icon"
          ><!-- icon: ExpandShowAltIcon --></span
        >
      </span>
      <u-datalist
        class="sds-combobox__datalist"
        id="REPLACE_ME_0-list"
        hidden=""
        data-sr-singular="%d hit"
        data-sr-plural="%d hits"
      >
        <div class="sds-combobox__datalist-group" role="group">
          <span class="sds-combobox__datalist-group-label" id="_R_dj_"
            >Fruits</span
          >
          <u-option
            class="sds-combobox__datalist-option"
            value="apple"
            aria-describedby="_R_dj_"
          >
            Apple
          </u-option>
          <u-option
            class="sds-combobox__datalist-option"
            value="banana"
            aria-describedby="_R_dj_"
          >
            Banana
          </u-option>
          <u-option
            class="sds-combobox__datalist-option"
            value="mango"
            aria-describedby="_R_dj_"
          >
            Mango
          </u-option>
          <u-option
            class="sds-combobox__datalist-option"
            value="strawberry"
            aria-describedby="_R_dj_"
          >
            Strawberry
          </u-option>
        </div>
        <div class="sds-combobox__datalist-group" role="group">
          <span class="sds-combobox__datalist-group-label" id="_R_lj_"
            >Vegetables</span
          >
          <u-option
            class="sds-combobox__datalist-option"
            value="broccoli"
            aria-describedby="_R_lj_"
          >
            Broccoli
          </u-option>
          <u-option
            class="sds-combobox__datalist-option"
            value="carrot"
            aria-describedby="_R_lj_"
          >
            Carrot
          </u-option>
          <u-option
            class="sds-combobox__datalist-option"
            value="spinach"
            aria-describedby="_R_lj_"
          >
            Spinach
          </u-option>
        </div>
        <div class="sds-combobox__datalist-group" role="group">
          <span class="sds-combobox__datalist-group-label" id="_R_tj_"
            >Other</span
          >
          <u-option
            class="sds-combobox__datalist-option"
            value="pizza"
            aria-describedby="_R_tj_"
          >
            Pizza
          </u-option>
        </div>
      </u-datalist>
    </u-combobox>
  </div>
</div>
```

### WithHelpText

```html
<div class="sds-form-field sds-combobox">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Choose flavor of ice cream</span>
    </label>
    <u-combobox
      class="sds-combobox__combobox"
      data-sr-added="Added"
      data-sr-removed="Removed"
      data-sr-remove="Press to remove"
      data-sr-empty="No selected"
      data-sr-found="Navigate left to find %d selected"
      data-sr-invalid="Invalid value"
      data-sr-of="of"
      data-sr-singular="%d hit"
      data-sr-plural="%d hits"
      data-sr-clear="Clear text"
    >
      <data value="4">Vanilla</data>
      <input
        class="sds-combobox__input"
        id="REPLACE_ME_0"
        list="REPLACE_ME_0-list"
      />
      <del class="sds-combobox__button">
        <span class="sds-screen-reader-only">Clear text</span>
        <span class="sds-combobox__button-icon"><!-- icon: CancelIcon --></span>
      </del>
      <span class="sds-combobox__button sds-combobox__button--expand">
        <span class="sds-combobox__button-icon"
          ><!-- icon: ExpandShowAltIcon --></span
        >
      </span>
      <u-datalist
        class="sds-combobox__datalist"
        id="REPLACE_ME_0-list"
        hidden=""
        data-sr-singular="%d hit"
        data-sr-plural="%d hits"
      >
        <u-option class="sds-combobox__datalist-option" value="1"
          >Coconut</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="2"
          >Strawberries</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="3"
          >Chocolate</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="4"
          >Vanilla</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="5"
          >Licorice</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="6"
          >Pistachios</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="7"
          >Mango</u-option
        >
        <u-option class="sds-combobox__datalist-option" value="8"
          >Hazelnut</u-option
        >
      </u-datalist>
    </u-combobox>
  </div>
  <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">
    Helpful text
  </div>
</div>
```
