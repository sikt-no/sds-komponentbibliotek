# @sikt/sds-input — HTML snippets

Rendered HTML for every Storybook story in `packages/input`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-input/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/input.md`) to pick up the visual styles for these classes.

## EmailInput.stories

### Input

```html
<div class="sds-form-field sds-input sds-input--email">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <span class="sds-input__icon"><!-- icon: EmailIcon --></span>
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="email"
          aria-invalid="false"
        />
      </span>
    </label>
  </div>
</div>
```

### Readonly

```html
<div class="sds-form-field sds-input sds-input--email">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <span class="sds-input__icon"><!-- icon: EmailIcon --></span>
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="email"
          aria-describedby="REPLACE_ME_0-help-text"
          aria-invalid="false"
          readonly=""
          value="example@sikt.no"
        />
      </span>
    </label>
  </div>
  <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">Readonly</div>
</div>
```

### WithCustomIcon

```html
<div class="sds-form-field sds-input sds-input--email">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <span class="sds-input__icon"><!-- icon: SettingsIcon --></span>
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="email"
          aria-invalid="false"
        />
      </span>
    </label>
  </div>
</div>
```

### WithError

```html
<div
  class="sds-form-field sds-form-field--error sds-input sds-input--email sds-input--error"
>
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label sds-form__label--error" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <span class="sds-input__icon"><!-- icon: EmailIcon --></span>
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="email"
          aria-describedby="REPLACE_ME_0-error-text REPLACE_ME_0-help-text"
          aria-invalid="true"
          aria-errormessage="REPLACE_ME_0-error-text"
        />
      </span>
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
<div class="sds-form-field sds-input sds-input--email">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <span class="sds-input__icon"><!-- icon: EmailIcon --></span>
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="email"
          aria-describedby="REPLACE_ME_0-help-text"
          aria-invalid="false"
        />
      </span>
    </label>
  </div>
  <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">
    Helpful text
  </div>
</div>
```

## NumberInput.stories

### Default

```html
<div class="sds-form-field sds-input sds-input--number">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="number"
          aria-invalid="false"
        />
      </span>
    </label>
  </div>
</div>
```

### Readonly

```html
<div class="sds-form-field sds-input sds-input--number">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="number"
          aria-describedby="REPLACE_ME_0-help-text"
          aria-invalid="false"
          readonly=""
          value="10"
        />
      </span>
    </label>
  </div>
  <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">Readonly</div>
</div>
```

### WithCustomIcon

```html
<div class="sds-form-field sds-input sds-input--number">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <span class="sds-input__icon"><!-- icon: DateCalendarIcon --></span>
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="number"
          aria-invalid="false"
        />
      </span>
    </label>
  </div>
</div>
```

### WithError

```html
<div
  class="sds-form-field sds-form-field--error sds-input sds-input--number sds-input--error"
>
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label sds-form__label--error" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="number"
          aria-describedby="REPLACE_ME_0-error-text REPLACE_ME_0-help-text"
          aria-invalid="true"
          aria-errormessage="REPLACE_ME_0-error-text"
        />
      </span>
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
<div class="sds-form-field sds-input sds-input--number">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="number"
          aria-describedby="REPLACE_ME_0-help-text"
          aria-invalid="false"
        />
      </span>
    </label>
  </div>
  <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">
    Helpful text
  </div>
</div>
```

## PasswordInput.stories

### Default

```html
<div class="sds-form-field sds-input sds-input--password">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <span class="sds-input__icon"><!-- icon: PasswordIcon --></span>
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="password"
          aria-invalid="false"
        />
      </span>
    </label>
  </div>
</div>
```

### WithCustomIcon

```html
<div class="sds-form-field sds-input sds-input--password">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <span class="sds-input__icon"><!-- icon: UserProfileIcon --></span>
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="password"
          aria-invalid="false"
        />
      </span>
    </label>
  </div>
</div>
```

### WithError

```html
<div
  class="sds-form-field sds-form-field--error sds-input sds-input--password sds-input--error"
>
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label sds-form__label--error" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <span class="sds-input__icon"><!-- icon: PasswordIcon --></span>
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="password"
          aria-describedby="REPLACE_ME_0-error-text REPLACE_ME_0-help-text"
          aria-invalid="true"
          aria-errormessage="REPLACE_ME_0-error-text"
        />
      </span>
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
<div class="sds-form-field sds-input sds-input--password">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <span class="sds-input__icon"><!-- icon: PasswordIcon --></span>
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="password"
          aria-describedby="REPLACE_ME_0-help-text"
          aria-invalid="false"
        />
      </span>
    </label>
  </div>
  <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">
    Helpful text
  </div>
</div>
```

## SearchInput.stories

### Default

```html
<div class="sds-form-field sds-input sds-input--search">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="search"
          aria-invalid="false"
          value=""
        />
      </span>
    </label>
    <div class="sds-form-field__label-after">
      <button
        class="sds-button sds-button--transparent sds-button--small sds-input__action"
        aria-label="Search"
        type="submit"
      >
        <span class="sds-button__icon sds-button__icon--only"
          ><!-- icon: SearchIcon --></span
        >
      </button>
    </div>
  </div>
</div>
```

### WithClearButton

```html
<div class="sds-form-field sds-input sds-input--search">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="search"
          aria-invalid="false"
          value="Value"
        />
      </span>
    </label>
    <div class="sds-form-field__label-after">
      <button
        class="sds-button sds-button--transparent sds-button--small sds-input__clear"
        aria-label="Tøm søketekst"
        type="button"
      >
        <span class="sds-button__icon sds-button__icon--only"
          ><!-- icon: CancelIcon --></span
        >
      </button>
      <button
        class="sds-button sds-button--transparent sds-button--small sds-input__action"
        aria-label="Søk"
        type="button"
      >
        <span class="sds-button__icon sds-button__icon--only"
          ><!-- icon: SearchIcon --></span
        >
      </button>
    </div>
  </div>
</div>
```

### WithCustomIcon

```html
<div class="sds-form-field sds-input sds-input--search">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <span class="sds-input__icon"><!-- icon: LocationIcon --></span>
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="search"
          aria-invalid="false"
          value=""
        />
      </span>
    </label>
    <div class="sds-form-field__label-after">
      <button
        class="sds-button sds-button--transparent sds-button--small sds-input__action"
        aria-label="Search"
        type="submit"
      >
        <span class="sds-button__icon sds-button__icon--only"
          ><!-- icon: SearchIcon --></span
        >
      </button>
    </div>
  </div>
</div>
```

### WithError

```html
<div
  class="sds-form-field sds-form-field--error sds-input sds-input--search sds-input--error"
>
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label sds-form__label--error" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="search"
          aria-describedby="REPLACE_ME_0-error-text REPLACE_ME_0-help-text"
          aria-invalid="true"
          aria-errormessage="REPLACE_ME_0-error-text"
          value=""
        />
      </span>
    </label>
    <div class="sds-form-field__label-after">
      <button
        class="sds-button sds-button--critical sds-button--small sds-input__action"
        aria-label="Search"
        type="submit"
      >
        <span class="sds-button__icon sds-button__icon--only"
          ><!-- icon: SearchIcon --></span
        >
      </button>
    </div>
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
<div class="sds-form-field sds-input sds-input--search">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="search"
          aria-describedby="REPLACE_ME_0-help-text"
          aria-invalid="false"
          value=""
        />
      </span>
    </label>
    <div class="sds-form-field__label-after">
      <button
        class="sds-button sds-button--transparent sds-button--small sds-input__action"
        aria-label="Search"
        type="submit"
      >
        <span class="sds-button__icon sds-button__icon--only"
          ><!-- icon: SearchIcon --></span
        >
      </button>
    </div>
  </div>
  <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">
    Helpful text
  </div>
</div>
```

## TelInput.stories

### Default

```html
<div class="sds-form-field sds-input sds-input--tel">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <span class="sds-input__icon"><!-- icon: PhoneIcon --></span>
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="tel"
          aria-invalid="false"
        />
      </span>
    </label>
  </div>
</div>
```

### Readonly

```html
<div class="sds-form-field sds-input sds-input--tel">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <span class="sds-input__icon"><!-- icon: PhoneIcon --></span>
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="tel"
          aria-describedby="REPLACE_ME_0-help-text"
          aria-invalid="false"
          readonly=""
          value="012345678"
        />
      </span>
    </label>
  </div>
  <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">Readonly</div>
</div>
```

### WithCustomIcon

```html
<div class="sds-form-field sds-input sds-input--tel">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <span class="sds-input__icon"><!-- icon: AdjustSettingsIcon --></span>
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="tel"
          aria-invalid="false"
        />
      </span>
    </label>
  </div>
</div>
```

### WithError

```html
<div
  class="sds-form-field sds-form-field--error sds-input sds-input--tel sds-input--error"
>
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label sds-form__label--error" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <span class="sds-input__icon"><!-- icon: PhoneIcon --></span>
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="tel"
          aria-describedby="REPLACE_ME_0-error-text REPLACE_ME_0-help-text"
          aria-invalid="true"
          aria-errormessage="REPLACE_ME_0-error-text"
        />
      </span>
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
<div class="sds-form-field sds-input sds-input--tel">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <span class="sds-input__icon"><!-- icon: PhoneIcon --></span>
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="tel"
          aria-describedby="REPLACE_ME_0-help-text"
          aria-invalid="false"
        />
      </span>
    </label>
  </div>
  <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">
    Helpful text
  </div>
</div>
```

## TextArea.stories

### Default

```html
<div class="sds-form-field sds-input sds-input--textarea">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <textarea
          class="sds-input__input sds-input__input--content-sized"
          id="REPLACE_ME_0"
          aria-invalid="false"
        ></textarea>
      </span>
    </label>
  </div>
</div>
```

### Readonly

```html
<div class="sds-form-field sds-input sds-input--textarea">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <textarea
          class="sds-input__input sds-input__input--content-sized"
          id="REPLACE_ME_0"
          aria-describedby="REPLACE_ME_0-help-text"
          aria-invalid="false"
          readonly=""
        >
Value</textarea>
      </span>
    </label>
  </div>
  <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">Readonly</div>
</div>
```

### WithCustomIcon

```html
<div class="sds-form-field sds-input sds-input--textarea">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <div class="sds-input__icon"><!-- icon: InfoIcon --></div>
        <textarea
          class="sds-input__input sds-input__input--content-sized"
          id="REPLACE_ME_0"
          aria-invalid="false"
        ></textarea>
      </span>
    </label>
  </div>
</div>
```

### WithError

```html
<div
  class="sds-form-field sds-form-field--error sds-input sds-input--textarea sds-input--error"
>
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label sds-form__label--error" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <textarea
          class="sds-input__input sds-input__input--content-sized"
          id="REPLACE_ME_0"
          aria-describedby="REPLACE_ME_0-error-text REPLACE_ME_0-help-text"
          aria-invalid="true"
          aria-errormessage="REPLACE_ME_0-error-text"
        ></textarea>
      </span>
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
<div class="sds-form-field sds-input sds-input--textarea">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <textarea
          class="sds-input__input sds-input__input--content-sized"
          id="REPLACE_ME_0"
          aria-describedby="REPLACE_ME_0-help-text"
          aria-invalid="false"
        ></textarea>
      </span>
    </label>
  </div>
  <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">
    Helpful text
  </div>
</div>
```

### WithRows

```html
<div class="sds-form-field sds-input sds-input--textarea">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <textarea
          class="sds-input__input"
          id="REPLACE_ME_0"
          aria-invalid="false"
          rows="10"
        ></textarea>
      </span>
    </label>
  </div>
</div>
```

## TextInput.stories

### Default

```html
<div class="sds-form-field sds-input sds-input--text">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="text"
          aria-invalid="false"
        />
      </span>
    </label>
  </div>
</div>
```

### Readonly

```html
<div class="sds-form-field sds-input sds-input--text">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="text"
          aria-describedby="REPLACE_ME_0-help-text"
          aria-invalid="false"
          readonly=""
          value="Value"
        />
      </span>
    </label>
  </div>
  <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">Readonly</div>
</div>
```

### WithAriaLabelledby

```html
<div class="sds-table">
  <table class="sds-table__table">
    <caption class="sds-table__caption">
      TextInput inside Table
    </caption>
    <thead class="sds-table__head">
      <tr class="sds-table__row">
        <th class="sds-table__header">Name</th>
        <th class="sds-table__header" id="columnTitle">Input</th>
      </tr>
    </thead>
    <tbody class="sds-table__body">
      <tr class="sds-table__row">
        <td class="sds-table__cell" data-th="Name" id="rowTitle">Sikt</td>
        <td class="sds-table__cell" data-th="Input">
          <div class="sds-form-field sds-input sds-input--text">
            <div class="sds-form-field__label-wrapper">
              <span class="sds-input__wrapper">
                <input
                  class="sds-input__input"
                  id="_R_1a_"
                  type="text"
                  placeholder=""
                  aria-labelledby="rowTitle columnTitle"
                  aria-invalid="false"
                />
              </span>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### WithCustomIcon

```html
<div class="sds-form-field sds-input sds-input--text">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <span class="sds-input__icon"><!-- icon: InfoIcon --></span>
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="text"
          aria-invalid="false"
        />
      </span>
    </label>
  </div>
</div>
```

### WithError

```html
<div
  class="sds-form-field sds-form-field--error sds-input sds-input--text sds-input--error"
>
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label sds-form__label--error" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="text"
          aria-describedby="REPLACE_ME_0-error-text REPLACE_ME_0-help-text"
          aria-invalid="true"
          aria-errormessage="REPLACE_ME_0-error-text"
        />
      </span>
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
<div class="sds-form-field sds-input sds-input--text">
  <div class="sds-form-field__label-wrapper">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
      <span class="sds-input__wrapper">
        <input
          class="sds-input__input"
          id="REPLACE_ME_0"
          type="text"
          aria-describedby="REPLACE_ME_0-help-text"
          aria-invalid="false"
        />
      </span>
    </label>
  </div>
  <div class="sds-form__help-text" id="REPLACE_ME_0-help-text">
    Helpful text
  </div>
</div>
```
