# @sikt/sds-input-datepicker — HTML snippets

Rendered HTML for every Storybook story in `packages/input-datepicker`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-input-datepicker/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/input-datepicker.md`) to pick up the visual styles for these classes.

## InputDatepicker.stories

### Default

```html
<div class="sds-input sds-input-datepicker" data-rac="">
  <span class="react-aria-Label" id="react-aria-_R_1H4_">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
    </label>
  </span>
  <div
    data-react-aria-pressable="true"
    id="react-aria-_R_1H3_"
    aria-labelledby="react-aria-_R_1H4_"
    aria-describedby="react-aria-_R_1H6_ react-aria-_R_1H7_"
    role="group"
    class="sds-input__wrapper sds-input-datepicker__wrapper"
    data-rac=""
  >
    <div
      id="react-aria-_R_1H2_"
      role="presentation"
      data-react-aria-pressable="true"
      style="unicode-bidi: isolate"
      class="sds-input-datepicker__input"
      data-rac=""
    >
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="31"
        id="react-aria-_R_5l7_"
        aria-label="dag, "
        aria-labelledby="react-aria-_R_5l7H1_ react-aria-_R_1H4_"
        aria-describedby="react-aria-_R_57H3_ react-aria-_R_57H4_ react-aria-_R_1H6_ react-aria-_R_1H7_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="day"
      >
        dd
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="12"
        id="react-aria-_R_dl7_"
        aria-label="måned, "
        aria-labelledby="react-aria-_R_dl7H1_ react-aria-_R_1H4_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="month"
      >
        mm
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="9999"
        id="react-aria-_R_ll7_"
        aria-label="år, "
        aria-labelledby="react-aria-_R_ll7H1_ react-aria-_R_1H4_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="year"
      >
        åååå
      </span>
    </div>
    <input type="text" hidden="" class="" data-rac="" value="" />
    <button
      class="sds-button sds-button--transparent sds-button--small"
      aria-label="Åpne kalender"
      type="button"
    >
      <span class="sds-button__icon sds-button__icon--only"
        ><!-- icon: DateCalendarIcon --></span
      >
    </button>
  </div>
</div>
<div
  style="
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: fixed;
    width: 1px;
    white-space: nowrap;
    top: 0;
    left: 0;
  "
  aria-hidden="true"
  data-react-aria-prevent-focus="true"
  data-a11y-ignore="aria-hidden-focus"
  data-testid="hidden-dateinput-container"
>
  <input tabindex="-1" type="date" form="" step="60" value="" />
</div>
```

### WithAriaLabelledby

```html
<div class="sds-table">
  <table class="sds-table__table">
    <caption class="sds-table__caption">
      InputDatepicker inside Table
    </caption>
    <thead class="sds-table__head">
      <tr class="sds-table__row">
        <th class="sds-table__header">Name</th>
        <th class="sds-table__header" id="columnTitle">Date</th>
      </tr>
    </thead>
    <tbody class="sds-table__body">
      <tr class="sds-table__row">
        <td class="sds-table__cell" data-th="Name" id="rowTitle">Sikt</td>
        <td class="sds-table__cell" data-th="Date">
          <div class="sds-input sds-input-datepicker" data-rac="">
            <div
              data-react-aria-pressable="true"
              id="react-aria-_R_3aH3_"
              aria-labelledby="rowTitle columnTitle"
              aria-describedby="react-aria-_R_3aH6_ react-aria-_R_3aH7_"
              role="group"
              class="sds-input__wrapper sds-input-datepicker__wrapper"
              data-rac=""
            >
              <div
                id="react-aria-_R_3aH2_"
                role="presentation"
                data-react-aria-pressable="true"
                style="unicode-bidi: isolate"
                class="sds-input-datepicker__input"
                data-rac=""
              >
                <span
                  role="spinbutton"
                  aria-valuetext="Tom"
                  aria-valuemin="1"
                  aria-valuemax="31"
                  id="react-aria-_R_bafa_"
                  aria-label="dag, "
                  aria-labelledby="react-aria-_R_bafaH1_ rowTitle columnTitle"
                  aria-describedby="react-aria-_R_afaH3_ react-aria-_R_afaH4_ react-aria-_R_3aH6_ react-aria-_R_3aH7_"
                  data-placeholder="true"
                  contentEditable="true"
                  spellCheck="false"
                  autoCorrect="off"
                  enterKeyHint="next"
                  inputMode="numeric"
                  tabindex="0"
                  style="caret-color: transparent"
                  class="sds-input-datepicker__input-segment"
                  data-rac=""
                  data-type="day"
                >
                  dd
                </span>
                <span
                  aria-hidden="true"
                  class="sds-input-datepicker__input-segment"
                  data-rac=""
                  data-type="literal"
                >
                  .
                </span>
                <span
                  role="spinbutton"
                  aria-valuetext="Tom"
                  aria-valuemin="1"
                  aria-valuemax="12"
                  id="react-aria-_R_rafa_"
                  aria-label="måned, "
                  aria-labelledby="react-aria-_R_rafaH1_ rowTitle columnTitle"
                  data-placeholder="true"
                  contentEditable="true"
                  spellCheck="false"
                  autoCorrect="off"
                  enterKeyHint="next"
                  inputMode="numeric"
                  tabindex="0"
                  style="caret-color: transparent"
                  class="sds-input-datepicker__input-segment"
                  data-rac=""
                  data-type="month"
                >
                  mm
                </span>
                <span
                  aria-hidden="true"
                  class="sds-input-datepicker__input-segment"
                  data-rac=""
                  data-type="literal"
                >
                  .
                </span>
                <span
                  role="spinbutton"
                  aria-valuetext="Tom"
                  aria-valuemin="1"
                  aria-valuemax="9999"
                  id="react-aria-_R_1bafa_"
                  aria-label="år, "
                  aria-labelledby="react-aria-_R_1bafaH1_ rowTitle columnTitle"
                  data-placeholder="true"
                  contentEditable="true"
                  spellCheck="false"
                  autoCorrect="off"
                  enterKeyHint="next"
                  inputMode="numeric"
                  tabindex="0"
                  style="caret-color: transparent"
                  class="sds-input-datepicker__input-segment"
                  data-rac=""
                  data-type="year"
                >
                  åååå
                </span>
              </div>
              <input type="text" hidden="" class="" data-rac="" value="" />
              <button
                class="sds-button sds-button--transparent sds-button--small"
                aria-label="Åpne kalender"
                type="button"
              >
                <span class="sds-button__icon sds-button__icon--only">
                  <!-- icon: DateCalendarIcon -->
                </span>
              </button>
            </div>
          </div>
          <div
            style="
              border: 0;
              clip: rect(0 0 0 0);
              clip-path: inset(50%);
              height: 1px;
              margin: -1px;
              overflow: hidden;
              padding: 0;
              position: fixed;
              width: 1px;
              white-space: nowrap;
              top: 0;
              left: 0;
            "
            aria-hidden="true"
            data-react-aria-prevent-focus="true"
            data-a11y-ignore="aria-hidden-focus"
            data-testid="hidden-dateinput-container"
          >
            <input tabindex="-1" type="date" form="" step="60" value="" />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### WithClearOption

```html
<div class="sds-input sds-input-datepicker" data-rac="">
  <span class="react-aria-Label" id="react-aria-_R_1H4_">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
    </label>
  </span>
  <div
    data-react-aria-pressable="true"
    id="react-aria-_R_1H3_"
    aria-labelledby="react-aria-_R_1H4_"
    aria-describedby="react-aria-_R_1H6_ react-aria-_R_1H7_"
    role="group"
    class="sds-input__wrapper sds-input-datepicker__wrapper"
    data-rac=""
  >
    <div
      id="react-aria-_R_1H2_"
      role="presentation"
      data-react-aria-pressable="true"
      style="unicode-bidi: isolate"
      class="sds-input-datepicker__input"
      data-rac=""
    >
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="31"
        id="react-aria-_R_5l7_"
        aria-label="dag, "
        aria-labelledby="react-aria-_R_5l7H1_ react-aria-_R_1H4_"
        aria-describedby="react-aria-_R_57H3_ react-aria-_R_57H4_ react-aria-_R_1H6_ react-aria-_R_1H7_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="day"
      >
        dd
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="12"
        id="react-aria-_R_dl7_"
        aria-label="måned, "
        aria-labelledby="react-aria-_R_dl7H1_ react-aria-_R_1H4_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="month"
      >
        mm
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="9999"
        id="react-aria-_R_ll7_"
        aria-label="år, "
        aria-labelledby="react-aria-_R_ll7H1_ react-aria-_R_1H4_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="year"
      >
        åååå
      </span>
    </div>
    <input type="text" hidden="" class="" data-rac="" value="" />
    <button
      class="sds-button sds-button--transparent sds-button--small"
      aria-label="Åpne kalender"
      type="button"
    >
      <span class="sds-button__icon sds-button__icon--only"
        ><!-- icon: DateCalendarIcon --></span
      >
    </button>
  </div>
</div>
<div
  style="
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: fixed;
    width: 1px;
    white-space: nowrap;
    top: 0;
    left: 0;
  "
  aria-hidden="true"
  data-react-aria-prevent-focus="true"
  data-a11y-ignore="aria-hidden-focus"
  data-testid="hidden-dateinput-container"
>
  <input tabindex="-1" type="date" form="" step="60" value="" />
</div>
```

### WithCustomLocale

```html
<div class="sds-input sds-input-datepicker" data-rac="">
  <span class="react-aria-Label" id="react-aria-_R_1H4_">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
    </label>
  </span>
  <div
    data-react-aria-pressable="true"
    id="react-aria-_R_1H3_"
    aria-labelledby="react-aria-_R_1H4_"
    aria-describedby="react-aria-_R_1H6_ react-aria-_R_1H7_"
    role="group"
    class="sds-input__wrapper sds-input-datepicker__wrapper"
    data-rac=""
  >
    <div
      id="react-aria-_R_1H2_"
      role="presentation"
      data-react-aria-pressable="true"
      style="unicode-bidi: isolate"
      class="sds-input-datepicker__input"
      data-rac=""
    >
      <span
        role="spinbutton"
        aria-valuetext="Empty"
        aria-valuemin="1"
        aria-valuemax="31"
        id="react-aria-_R_5l7_"
        aria-label="day, "
        aria-labelledby="react-aria-_R_5l7H1_ react-aria-_R_1H4_"
        aria-describedby="react-aria-_R_57H3_ react-aria-_R_57H4_ react-aria-_R_1H6_ react-aria-_R_1H7_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="day"
      >
        dd
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        /
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Empty"
        aria-valuemin="1"
        aria-valuemax="12"
        id="react-aria-_R_dl7_"
        aria-label="month, "
        aria-labelledby="react-aria-_R_dl7H1_ react-aria-_R_1H4_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="month"
      >
        mm
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        /
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Empty"
        aria-valuemin="1"
        aria-valuemax="9999"
        id="react-aria-_R_ll7_"
        aria-label="year, "
        aria-labelledby="react-aria-_R_ll7H1_ react-aria-_R_1H4_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="year"
      >
        yyyy
      </span>
    </div>
    <input type="text" hidden="" class="" data-rac="" value="" />
    <button
      class="sds-button sds-button--transparent sds-button--small"
      aria-label="Åpne kalender"
      type="button"
    >
      <span class="sds-button__icon sds-button__icon--only"
        ><!-- icon: DateCalendarIcon --></span
      >
    </button>
  </div>
</div>
<div
  style="
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: fixed;
    width: 1px;
    white-space: nowrap;
    top: 0;
    left: 0;
  "
  aria-hidden="true"
  data-react-aria-prevent-focus="true"
  data-a11y-ignore="aria-hidden-focus"
  data-testid="hidden-dateinput-container"
>
  <input tabindex="-1" type="date" form="" step="60" value="" />
</div>
```

### WithDate

```html
<div class="sds-input sds-input-datepicker" data-rac="">
  <span class="react-aria-Label" id="react-aria-_R_1H4_">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
    </label>
  </span>
  <div
    data-react-aria-pressable="true"
    id="react-aria-_R_1H3_"
    aria-labelledby="react-aria-_R_1H4_"
    aria-describedby="react-aria-_R_1H6_ react-aria-_R_1H7_"
    role="group"
    class="sds-input__wrapper sds-input-datepicker__wrapper"
    data-rac=""
  >
    <div
      id="react-aria-_R_1H2_"
      role="presentation"
      data-react-aria-pressable="true"
      style="unicode-bidi: isolate"
      class="sds-input-datepicker__input"
      data-rac=""
    >
      <span
        role="spinbutton"
        aria-valuenow="25"
        aria-valuetext="25"
        aria-valuemin="1"
        aria-valuemax="31"
        id="react-aria-_R_5l7_"
        aria-label="dag, "
        aria-labelledby="react-aria-_R_5l7H1_ react-aria-_R_1H4_"
        aria-describedby="react-aria-_R_57H3_ react-aria-_R_57H4_ react-aria-_R_1H6_ react-aria-_R_1H7_"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="day"
      >
        25
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuenow="8"
        aria-valuetext="08 – august"
        aria-valuemin="1"
        aria-valuemax="12"
        id="react-aria-_R_dl7_"
        aria-label="måned, "
        aria-labelledby="react-aria-_R_dl7H1_ react-aria-_R_1H4_"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="month"
      >
        08
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuenow="2026"
        aria-valuetext="2026"
        aria-valuemin="1"
        aria-valuemax="9999"
        id="react-aria-_R_ll7_"
        aria-label="år, "
        aria-labelledby="react-aria-_R_ll7H1_ react-aria-_R_1H4_"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="year"
      >
        2026
      </span>
    </div>
    <input type="text" hidden="" class="" data-rac="" value="2026-08-25" />
    <button
      class="sds-button sds-button--transparent sds-button--small"
      aria-label="Åpne kalender"
      type="button"
    >
      <span class="sds-button__icon sds-button__icon--only"
        ><!-- icon: DateCalendarIcon --></span
      >
    </button>
  </div>
</div>
<div
  style="
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: fixed;
    width: 1px;
    white-space: nowrap;
    top: 0;
    left: 0;
  "
  aria-hidden="true"
  data-react-aria-prevent-focus="true"
  data-a11y-ignore="aria-hidden-focus"
  data-testid="hidden-dateinput-container"
>
  <input tabindex="-1" type="date" form="" step="60" value="2026-08-25" />
</div>
```

### WithError

```html
<div
  class="sds-input sds-input--error sds-input-datepicker"
  data-rac=""
  data-invalid="true"
>
  <span class="react-aria-Label" id="react-aria-_R_1H4_">
    <label class="sds-form__label sds-form__label--error" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
    </label>
  </span>
  <div
    data-react-aria-pressable="true"
    id="react-aria-_R_1H3_"
    aria-labelledby="react-aria-_R_1H4_"
    aria-describedby="react-aria-_R_1H6_ react-aria-_R_1H7_"
    role="group"
    class="sds-input__wrapper sds-input-datepicker__wrapper"
    data-rac=""
    data-invalid="true"
  >
    <div
      id="react-aria-_R_1H2_"
      role="presentation"
      data-react-aria-pressable="true"
      style="unicode-bidi: isolate"
      class="sds-input-datepicker__input"
      data-rac=""
      data-invalid="true"
    >
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="31"
        id="react-aria-_R_5l7_"
        aria-label="dag, "
        aria-labelledby="react-aria-_R_5l7H1_ react-aria-_R_1H4_"
        aria-invalid="true"
        aria-describedby="react-aria-_R_57H3_ react-aria-_R_57H4_ react-aria-_R_1H6_ react-aria-_R_1H7_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-invalid="true"
        data-type="day"
      >
        dd
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-invalid="true"
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="12"
        id="react-aria-_R_dl7_"
        aria-label="måned, "
        aria-labelledby="react-aria-_R_dl7H1_ react-aria-_R_1H4_"
        aria-invalid="true"
        aria-describedby="react-aria-_R_57H3_ react-aria-_R_57H4_ react-aria-_R_1H6_ react-aria-_R_1H7_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-invalid="true"
        data-type="month"
      >
        mm
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-invalid="true"
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="9999"
        id="react-aria-_R_ll7_"
        aria-label="år, "
        aria-labelledby="react-aria-_R_ll7H1_ react-aria-_R_1H4_"
        aria-invalid="true"
        aria-describedby="react-aria-_R_57H3_ react-aria-_R_57H4_ react-aria-_R_1H6_ react-aria-_R_1H7_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-invalid="true"
        data-type="year"
      >
        åååå
      </span>
    </div>
    <input type="text" hidden="" class="" data-rac="" value="" />
    <button
      class="sds-button sds-button--critical sds-button--small"
      aria-label="Åpne kalender"
      type="button"
    >
      <span class="sds-button__icon sds-button__icon--only"
        ><!-- icon: DateCalendarIcon --></span
      >
    </button>
  </div>
  <span class="react-aria-Text" id="react-aria-_R_1H6_" slot="description">
    <div class="sds-form__help-text">Helpful text</div>
  </span>
  <span class="react-aria-Text" id="react-aria-_R_1H7_" slot="errorMessage">
    <div
      class="sds-form__help-text sds-form__help-text--error"
      id="REPLACE_ME_0-error-text"
    >
      Error: Message
    </div>
  </span>
</div>
<div
  style="
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: fixed;
    width: 1px;
    white-space: nowrap;
    top: 0;
    left: 0;
  "
  aria-hidden="true"
  data-react-aria-prevent-focus="true"
  data-a11y-ignore="aria-hidden-focus"
  data-testid="hidden-dateinput-container"
>
  <input tabindex="-1" type="date" form="" step="60" value="" />
</div>
```

### WithHelpText

```html
<div class="sds-input sds-input-datepicker" data-rac="">
  <span class="react-aria-Label" id="react-aria-_R_1H4_">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
    </label>
  </span>
  <div
    data-react-aria-pressable="true"
    id="react-aria-_R_1H3_"
    aria-labelledby="react-aria-_R_1H4_"
    aria-describedby="react-aria-_R_1H6_ react-aria-_R_1H7_"
    role="group"
    class="sds-input__wrapper sds-input-datepicker__wrapper"
    data-rac=""
  >
    <div
      id="react-aria-_R_1H2_"
      role="presentation"
      data-react-aria-pressable="true"
      style="unicode-bidi: isolate"
      class="sds-input-datepicker__input"
      data-rac=""
    >
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="31"
        id="react-aria-_R_5l7_"
        aria-label="dag, "
        aria-labelledby="react-aria-_R_5l7H1_ react-aria-_R_1H4_"
        aria-describedby="react-aria-_R_57H3_ react-aria-_R_57H4_ react-aria-_R_1H6_ react-aria-_R_1H7_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="day"
      >
        dd
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="12"
        id="react-aria-_R_dl7_"
        aria-label="måned, "
        aria-labelledby="react-aria-_R_dl7H1_ react-aria-_R_1H4_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="month"
      >
        mm
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="9999"
        id="react-aria-_R_ll7_"
        aria-label="år, "
        aria-labelledby="react-aria-_R_ll7H1_ react-aria-_R_1H4_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="year"
      >
        åååå
      </span>
    </div>
    <input type="text" hidden="" class="" data-rac="" value="" />
    <button
      class="sds-button sds-button--transparent sds-button--small"
      aria-label="Åpne kalender"
      type="button"
    >
      <span class="sds-button__icon sds-button__icon--only"
        ><!-- icon: DateCalendarIcon --></span
      >
    </button>
  </div>
  <span class="react-aria-Text" id="react-aria-_R_1H6_" slot="description">
    <div class="sds-form__help-text">Helpful text</div>
  </span>
</div>
<div
  style="
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: fixed;
    width: 1px;
    white-space: nowrap;
    top: 0;
    left: 0;
  "
  aria-hidden="true"
  data-react-aria-prevent-focus="true"
  data-a11y-ignore="aria-hidden-focus"
  data-testid="hidden-dateinput-container"
>
  <input tabindex="-1" type="date" form="" step="60" value="" />
</div>
```

### WithMinAndMaxValue

```html
<div class="sds-input sds-input-datepicker" data-rac="">
  <span class="react-aria-Label" id="react-aria-_R_1H4_">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
    </label>
  </span>
  <div
    data-react-aria-pressable="true"
    id="react-aria-_R_1H3_"
    aria-labelledby="react-aria-_R_1H4_"
    aria-describedby="react-aria-_R_1H6_ react-aria-_R_1H7_"
    role="group"
    class="sds-input__wrapper sds-input-datepicker__wrapper"
    data-rac=""
  >
    <div
      id="react-aria-_R_1H2_"
      role="presentation"
      data-react-aria-pressable="true"
      style="unicode-bidi: isolate"
      class="sds-input-datepicker__input"
      data-rac=""
    >
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="31"
        id="react-aria-_R_5l7_"
        aria-label="dag, "
        aria-labelledby="react-aria-_R_5l7H1_ react-aria-_R_1H4_"
        aria-describedby="react-aria-_R_57H3_ react-aria-_R_57H4_ react-aria-_R_1H6_ react-aria-_R_1H7_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="day"
      >
        dd
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="12"
        id="react-aria-_R_dl7_"
        aria-label="måned, "
        aria-labelledby="react-aria-_R_dl7H1_ react-aria-_R_1H4_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="month"
      >
        mm
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="9999"
        id="react-aria-_R_ll7_"
        aria-label="år, "
        aria-labelledby="react-aria-_R_ll7H1_ react-aria-_R_1H4_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="year"
      >
        åååå
      </span>
    </div>
    <input type="text" hidden="" class="" data-rac="" value="" />
    <button
      class="sds-button sds-button--transparent sds-button--small"
      aria-label="Åpne kalender"
      type="button"
    >
      <span class="sds-button__icon sds-button__icon--only"
        ><!-- icon: DateCalendarIcon --></span
      >
    </button>
  </div>
</div>
<div
  style="
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: fixed;
    width: 1px;
    white-space: nowrap;
    top: 0;
    left: 0;
  "
  aria-hidden="true"
  data-react-aria-prevent-focus="true"
  data-a11y-ignore="aria-hidden-focus"
  data-testid="hidden-dateinput-container"
>
  <input tabindex="-1" type="date" form="" step="60" value="" />
</div>
```

### WithTime

```html
<div class="sds-input sds-input-datepicker" data-rac="">
  <span class="react-aria-Label" id="react-aria-_R_1H4_">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
    </label>
  </span>
  <div
    data-react-aria-pressable="true"
    id="react-aria-_R_1H3_"
    aria-labelledby="react-aria-_R_1H4_"
    aria-describedby="react-aria-_R_1H6_ react-aria-_R_1H7_"
    role="group"
    class="sds-input__wrapper sds-input-datepicker__wrapper"
    data-rac=""
  >
    <div
      id="react-aria-_R_1H2_"
      role="presentation"
      data-react-aria-pressable="true"
      style="unicode-bidi: isolate"
      class="sds-input-datepicker__input"
      data-rac=""
    >
      <span
        role="spinbutton"
        aria-valuenow="25"
        aria-valuetext="25"
        aria-valuemin="1"
        aria-valuemax="31"
        id="react-aria-_R_5l7_"
        aria-label="dag, "
        aria-labelledby="react-aria-_R_5l7H1_ react-aria-_R_1H4_"
        aria-describedby="react-aria-_R_57H3_ react-aria-_R_57H4_ react-aria-_R_1H6_ react-aria-_R_1H7_"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="day"
      >
        25
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuenow="8"
        aria-valuetext="08 – august"
        aria-valuemin="1"
        aria-valuemax="12"
        id="react-aria-_R_dl7_"
        aria-label="måned, "
        aria-labelledby="react-aria-_R_dl7H1_ react-aria-_R_1H4_"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="month"
      >
        08
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuenow="2026"
        aria-valuetext="2026"
        aria-valuemin="1"
        aria-valuemax="9999"
        id="react-aria-_R_ll7_"
        aria-label="år, "
        aria-labelledby="react-aria-_R_ll7H1_ react-aria-_R_1H4_"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="year"
      >
        2026
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        ,
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        ⁦
      </span>
      <span
        role="spinbutton"
        aria-valuenow="10"
        aria-valuetext="10"
        aria-valuemin="0"
        aria-valuemax="23"
        id="react-aria-_R_11l7_"
        aria-label="time, "
        aria-labelledby="react-aria-_R_11l7H1_ react-aria-_R_1H4_"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="hour"
      >
        10
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        :
      </span>
      <span
        role="spinbutton"
        aria-valuenow="13"
        aria-valuetext="13"
        aria-valuemin="0"
        aria-valuemax="59"
        id="react-aria-_R_19l7_"
        aria-label="minutt, "
        aria-labelledby="react-aria-_R_19l7H1_ react-aria-_R_1H4_"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="minute"
      >
        13
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        ⁩
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      ></span>
      <span
        role="textbox"
        aria-readonly="true"
        id="react-aria-_R_1ll7_"
        aria-label="tidssone, "
        aria-labelledby="react-aria-_R_1ll7H1_ react-aria-_R_1H4_"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="timeZoneName"
      >
        CEST
      </span>
    </div>
    <input
      type="text"
      hidden=""
      class=""
      data-rac=""
      value="2026-08-25T10:13:11.106+02:00[Europe/Oslo]"
    />
    <button
      class="sds-button sds-button--transparent sds-button--small"
      aria-label="Åpne kalender"
      type="button"
    >
      <span class="sds-button__icon sds-button__icon--only"
        ><!-- icon: DateCalendarIcon --></span
      >
    </button>
  </div>
</div>
<div
  style="
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: fixed;
    width: 1px;
    white-space: nowrap;
    top: 0;
    left: 0;
  "
  aria-hidden="true"
  data-react-aria-prevent-focus="true"
  data-a11y-ignore="aria-hidden-focus"
  data-testid="hidden-dateinput-container"
>
  <input
    tabindex="-1"
    type="datetime-local"
    form=""
    step="60"
    value="2026-08-25T10:13:11.106"
  />
</div>
```

## InputDaterangepicker.stories

### Default

```html
<div class="sds-input sds-input-datepicker" data-rac="">
  <span class="react-aria-Label" id="react-aria-_R_1H1_">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
    </label>
  </span>
  <div
    data-react-aria-pressable="true"
    id="react-aria-REPLACE_ME_1"
    aria-labelledby="react-aria-_R_1H1_"
    aria-describedby="react-aria-_R_1H3_ react-aria-_R_1H4_"
    role="group"
    class="sds-input__wrapper sds-input-datepicker__wrapper"
    data-rac=""
  >
    <div
      role="presentation"
      data-react-aria-pressable="true"
      style="unicode-bidi: isolate"
      class="sds-input-datepicker__input"
      slot="start"
      data-rac=""
    >
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="31"
        id="react-aria-_R_2pb_"
        aria-label="dag, Startdato, "
        aria-labelledby="react-aria-_R_2pbH1_ react-aria-_R_1H1_"
        aria-describedby="react-aria-_R_1bH3_ react-aria-_R_1bH4_ react-aria-_R_1H3_ react-aria-_R_1H4_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="day"
      >
        dd
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="12"
        id="react-aria-_R_6pb_"
        aria-label="måned, Startdato, "
        aria-labelledby="react-aria-_R_6pbH1_ react-aria-_R_1H1_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="month"
      >
        mm
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="9999"
        id="react-aria-_R_apb_"
        aria-label="år, Startdato, "
        aria-labelledby="react-aria-_R_apbH1_ react-aria-_R_1H1_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="year"
      >
        åååå
      </span>
    </div>
    <input type="text" hidden="" class="" data-rac="" value="" />
    <span class="sds-input-datepicker__separator" aria-hidden="true">–</span>
    <div
      role="presentation"
      data-react-aria-pressable="true"
      style="unicode-bidi: isolate"
      class="sds-input-datepicker__input sds-input-datepicker__input--end"
      slot="end"
      data-rac=""
    >
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="31"
        id="react-aria-_R_2rb_"
        aria-label="dag, Sluttdato, "
        aria-labelledby="react-aria-_R_2rbH1_ react-aria-_R_1H1_"
        aria-describedby="react-aria-_R_3bH3_ react-aria-_R_3bH4_ react-aria-_R_1H3_ react-aria-_R_1H4_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="day"
      >
        dd
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="12"
        id="react-aria-_R_6rb_"
        aria-label="måned, Sluttdato, "
        aria-labelledby="react-aria-_R_6rbH1_ react-aria-_R_1H1_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="month"
      >
        mm
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="9999"
        id="react-aria-_R_arb_"
        aria-label="år, Sluttdato, "
        aria-labelledby="react-aria-_R_arbH1_ react-aria-_R_1H1_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="year"
      >
        åååå
      </span>
    </div>
    <input type="text" hidden="" class="" data-rac="" value="" />
    <button
      class="sds-button sds-button--transparent sds-button--small"
      aria-label="Åpne kalender"
      type="button"
    >
      <span class="sds-button__icon sds-button__icon--only"
        ><!-- icon: DateCalendarIcon --></span
      >
    </button>
  </div>
</div>
```

### WithClearOption

```html
<div class="sds-input sds-input-datepicker" data-rac="">
  <span class="react-aria-Label" id="react-aria-_R_1H1_">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
    </label>
  </span>
  <div
    data-react-aria-pressable="true"
    id="react-aria-REPLACE_ME_1"
    aria-labelledby="react-aria-_R_1H1_"
    aria-describedby="react-aria-_R_1H3_ react-aria-_R_1H4_"
    role="group"
    class="sds-input__wrapper sds-input-datepicker__wrapper"
    data-rac=""
  >
    <div
      role="presentation"
      data-react-aria-pressable="true"
      style="unicode-bidi: isolate"
      class="sds-input-datepicker__input"
      slot="start"
      data-rac=""
    >
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="31"
        id="react-aria-_R_2pb_"
        aria-label="dag, Startdato, "
        aria-labelledby="react-aria-_R_2pbH1_ react-aria-_R_1H1_"
        aria-describedby="react-aria-_R_1bH3_ react-aria-_R_1bH4_ react-aria-_R_1H3_ react-aria-_R_1H4_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="day"
      >
        dd
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="12"
        id="react-aria-_R_6pb_"
        aria-label="måned, Startdato, "
        aria-labelledby="react-aria-_R_6pbH1_ react-aria-_R_1H1_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="month"
      >
        mm
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="9999"
        id="react-aria-_R_apb_"
        aria-label="år, Startdato, "
        aria-labelledby="react-aria-_R_apbH1_ react-aria-_R_1H1_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="year"
      >
        åååå
      </span>
    </div>
    <input type="text" hidden="" class="" data-rac="" value="" />
    <span class="sds-input-datepicker__separator" aria-hidden="true">–</span>
    <div
      role="presentation"
      data-react-aria-pressable="true"
      style="unicode-bidi: isolate"
      class="sds-input-datepicker__input sds-input-datepicker__input--end"
      slot="end"
      data-rac=""
    >
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="31"
        id="react-aria-_R_2rb_"
        aria-label="dag, Sluttdato, "
        aria-labelledby="react-aria-_R_2rbH1_ react-aria-_R_1H1_"
        aria-describedby="react-aria-_R_3bH3_ react-aria-_R_3bH4_ react-aria-_R_1H3_ react-aria-_R_1H4_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="day"
      >
        dd
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="12"
        id="react-aria-_R_6rb_"
        aria-label="måned, Sluttdato, "
        aria-labelledby="react-aria-_R_6rbH1_ react-aria-_R_1H1_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="month"
      >
        mm
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuetext="Tom"
        aria-valuemin="1"
        aria-valuemax="9999"
        id="react-aria-_R_arb_"
        aria-label="år, Sluttdato, "
        aria-labelledby="react-aria-_R_arbH1_ react-aria-_R_1H1_"
        data-placeholder="true"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="year"
      >
        åååå
      </span>
    </div>
    <input type="text" hidden="" class="" data-rac="" value="" />
    <button
      class="sds-button sds-button--transparent sds-button--small"
      aria-label="Åpne kalender"
      type="button"
    >
      <span class="sds-button__icon sds-button__icon--only"
        ><!-- icon: DateCalendarIcon --></span
      >
    </button>
  </div>
</div>
```

### WithDate

```html
<div class="sds-input sds-input-datepicker" data-rac="">
  <span class="react-aria-Label" id="react-aria-_R_1H1_">
    <label class="sds-form__label" for="REPLACE_ME_0">
      <span class="sds-form__label-text">Label</span>
    </label>
  </span>
  <div
    data-react-aria-pressable="true"
    id="react-aria-REPLACE_ME_1"
    aria-labelledby="react-aria-_R_1H1_"
    aria-describedby="react-aria-_R_1H3_ react-aria-_R_1H4_"
    role="group"
    class="sds-input__wrapper sds-input-datepicker__wrapper"
    data-rac=""
  >
    <div
      role="presentation"
      data-react-aria-pressable="true"
      style="unicode-bidi: isolate"
      class="sds-input-datepicker__input"
      slot="start"
      data-rac=""
    >
      <span
        role="spinbutton"
        aria-valuenow="24"
        aria-valuetext="24"
        aria-valuemin="1"
        aria-valuemax="31"
        id="react-aria-_R_2pb_"
        aria-label="dag, Startdato, "
        aria-labelledby="react-aria-_R_2pbH1_ react-aria-_R_1H1_"
        aria-describedby="react-aria-_R_1bH3_ react-aria-_R_1bH4_ react-aria-_R_1H3_ react-aria-_R_1H4_"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="day"
      >
        24
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuenow="8"
        aria-valuetext="08 – august"
        aria-valuemin="1"
        aria-valuemax="12"
        id="react-aria-_R_6pb_"
        aria-label="måned, Startdato, "
        aria-labelledby="react-aria-_R_6pbH1_ react-aria-_R_1H1_"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="month"
      >
        08
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuenow="2026"
        aria-valuetext="2026"
        aria-valuemin="1"
        aria-valuemax="9999"
        id="react-aria-_R_apb_"
        aria-label="år, Startdato, "
        aria-labelledby="react-aria-_R_apbH1_ react-aria-_R_1H1_"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="year"
      >
        2026
      </span>
    </div>
    <input type="text" hidden="" class="" data-rac="" value="2026-08-24" />
    <span class="sds-input-datepicker__separator" aria-hidden="true">–</span>
    <div
      role="presentation"
      data-react-aria-pressable="true"
      style="unicode-bidi: isolate"
      class="sds-input-datepicker__input sds-input-datepicker__input--end"
      slot="end"
      data-rac=""
    >
      <span
        role="spinbutton"
        aria-valuenow="25"
        aria-valuetext="25"
        aria-valuemin="1"
        aria-valuemax="31"
        id="react-aria-_R_2rb_"
        aria-label="dag, Sluttdato, "
        aria-labelledby="react-aria-_R_2rbH1_ react-aria-_R_1H1_"
        aria-describedby="react-aria-_R_3bH3_ react-aria-_R_3bH4_ react-aria-_R_1H3_ react-aria-_R_1H4_"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="day"
      >
        25
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuenow="8"
        aria-valuetext="08 – august"
        aria-valuemin="1"
        aria-valuemax="12"
        id="react-aria-_R_6rb_"
        aria-label="måned, Sluttdato, "
        aria-labelledby="react-aria-_R_6rbH1_ react-aria-_R_1H1_"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="month"
      >
        08
      </span>
      <span
        aria-hidden="true"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="literal"
      >
        .
      </span>
      <span
        role="spinbutton"
        aria-valuenow="2026"
        aria-valuetext="2026"
        aria-valuemin="1"
        aria-valuemax="9999"
        id="react-aria-_R_arb_"
        aria-label="år, Sluttdato, "
        aria-labelledby="react-aria-_R_arbH1_ react-aria-_R_1H1_"
        contentEditable="true"
        spellCheck="false"
        autoCorrect="off"
        enterKeyHint="next"
        inputMode="numeric"
        tabindex="0"
        style="caret-color: transparent"
        class="sds-input-datepicker__input-segment"
        data-rac=""
        data-type="year"
      >
        2026
      </span>
    </div>
    <input type="text" hidden="" class="" data-rac="" value="2026-08-25" />
    <button
      class="sds-button sds-button--transparent sds-button--small"
      aria-label="Åpne kalender"
      type="button"
    >
      <span class="sds-button__icon sds-button__icon--only"
        ><!-- icon: DateCalendarIcon --></span
      >
    </button>
  </div>
</div>
```
