# @sikt/sds-filter-list — HTML snippets

Rendered HTML for every Storybook story in `packages/filter-list`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-filter-list/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/filter-list.md`) to pick up the visual styles for these classes.

## FilterList.stories

### CategoryExample

```html
<div class="sds-filter-list sds-filter-list-max-width">
  <div class="sds-filter-list-expand">
    <div class="sds-filter-list-expand__header" id="REPLACE_ME_0-title">
      <div class="sds-filter-list-category">
        <label class="sds-checkbox sds-filter-list-item__input" for="_R_2n_">
          <input
            class="sds-checkbox__input"
            id="_R_2n_"
            type="checkbox"
            aria-invalid="false"
            aria-describedby="REPLACE_ME_1"
            checked=""
          />
          <span class="sds-checkbox__icon-wrapper"
            ><!-- icon: ConfirmIcon --></span
          >
          <span class="sds-checkbox__input-label">Category example</span>
        </label>
        <span
          class="sds-notification sds-notification--brand"
          id="REPLACE_ME_1"
        >
          <span class="sds-notification__count">2</span>
        </span>
      </div>
      <button
        class="sds-button sds-button--transparent sds-button--small"
        aria-label="Show category example"
        type="button"
        aria-expanded="false"
        aria-controls="REPLACE_ME_0-content"
      >
        <span class="sds-button__icon sds-button__icon--only"
          ><!-- icon: ExpandShowIcon --></span
        >
      </button>
    </div>
    <div class="sds-filter-list-expand__content">
      <div
        role="region"
        id="REPLACE_ME_0-content"
        aria-labelledby="REPLACE_ME_0-title"
        hidden=""
      >
        <div class="sds-filter-list-category__content">
          <fieldset class="sds-form-fieldset" aria-invalid="false">
            <legend class="sds-form-fieldset__legend">Category example</legend>
            <div class="sds-filter-list-item">
              <label
                class="sds-checkbox sds-filter-list-item__input"
                for="_R_2ar_"
              >
                <input
                  class="sds-checkbox__input"
                  id="_R_2ar_"
                  type="checkbox"
                  aria-invalid="false"
                  name="_R_b_"
                  checked=""
                  value="hasGoodGrades"
                />
                <span class="sds-checkbox__icon-wrapper"
                  ><!-- icon: ConfirmIcon --></span
                >
                <span class="sds-checkbox__input-label">
                  <span class="sds-filter-list-item__input-label">
                    <span>Has good grades</span>
                    <span>(3)</span>
                  </span>
                </span>
              </label>
            </div>
            <div class="sds-filter-list-item">
              <label
                class="sds-checkbox sds-filter-list-item__input"
                for="_R_2ir_"
              >
                <input
                  class="sds-checkbox__input"
                  id="_R_2ir_"
                  type="checkbox"
                  aria-invalid="false"
                  name="_R_b_"
                  checked=""
                  value="hasBadGrades"
                />
                <span class="sds-checkbox__icon-wrapper"
                  ><!-- icon: ConfirmIcon --></span
                >
                <span class="sds-checkbox__input-label">
                  <span class="sds-filter-list-item__input-label">
                    <span>Has bad grades</span>
                    <span>(33)</span>
                  </span>
                </span>
              </label>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</div>
```

### IconExample

```html
<div class="sds-filter-list sds-filter-list-max-width">
  <div class="sds-filter-list-item">
    <label class="sds-checkbox sds-filter-list-item__input" for="REPLACE_ME_0">
      <input
        class="sds-checkbox__input"
        id="REPLACE_ME_0"
        type="checkbox"
        aria-invalid="false"
        value="itemInList"
      />
      <span class="sds-checkbox__icon-wrapper"><!-- icon: ConfirmIcon --></span>
      <span class="sds-checkbox__input-label">
        <div class="sds-filter-list-icon-label">
          <span class="sds-filter-list-icon-label__icon"
            ><!-- icon: AttachmentIcon --></span
          >
          <span>Item in list</span>
        </div>
      </span>
    </label>
  </div>
  <div class="sds-filter-list-expand">
    <div class="sds-filter-list-expand__header" id="REPLACE_ME_1-title">
      <div class="sds-filter-list-category">
        <label class="sds-checkbox sds-filter-list-item__input" for="_R_au_">
          <input
            class="sds-checkbox__input"
            id="_R_au_"
            type="checkbox"
            aria-invalid="false"
          />
          <span class="sds-checkbox__icon-wrapper"
            ><!-- icon: ConfirmIcon --></span
          >
          <span class="sds-checkbox__input-label">
            <div class="sds-filter-list-icon-label">
              <span class="sds-filter-list-icon-label__icon"
                ><!-- icon: ArchiveIcon --></span
              >
              <span>Category in list</span>
            </div>
          </span>
        </label>
      </div>
      <button
        class="sds-button sds-button--transparent sds-button--small"
        aria-label="Show/hide category in list"
        type="button"
        aria-expanded="false"
        aria-controls="REPLACE_ME_1-content"
      >
        <span class="sds-button__icon sds-button__icon--only"
          ><!-- icon: ExpandShowIcon --></span
        >
      </button>
    </div>
    <div class="sds-filter-list-expand__content">
      <div
        role="region"
        id="REPLACE_ME_1-content"
        aria-labelledby="REPLACE_ME_1-title"
        hidden=""
      >
        <div class="sds-filter-list-category__content">
          <div class="sds-filter-list-item">
            <label
              class="sds-checkbox sds-filter-list-item__input"
              for="_R_5e_"
            >
              <input
                class="sds-checkbox__input"
                id="_R_5e_"
                type="checkbox"
                aria-invalid="false"
                value="itemInCategory"
              />
              <span class="sds-checkbox__icon-wrapper"
                ><!-- icon: ConfirmIcon --></span
              >
              <span class="sds-checkbox__input-label">
                <div class="sds-filter-list-icon-label">
                  <span class="sds-filter-list-icon-label__icon">
                    <!-- icon: AttachmentIcon -->
                  </span>
                  <span>Item in category</span>
                </div>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### ItemWithCheckbox

```html
<div class="sds-filter-list sds-filter-list-max-width">
  <fieldset class="sds-form-fieldset" aria-invalid="false">
    <legend class="sds-form-fieldset__legend">Grade-filters</legend>
    <div class="sds-filter-list-item">
      <label class="sds-checkbox sds-filter-list-item__input" for="_R_4l_">
        <input
          class="sds-checkbox__input"
          id="_R_4l_"
          type="checkbox"
          aria-invalid="false"
          name="REPLACE_ME_0"
          value="hasGoodGrades"
        />
        <span class="sds-checkbox__icon-wrapper"
          ><!-- icon: ConfirmIcon --></span
        >
        <span class="sds-checkbox__input-label">
          <span class="sds-filter-list-item__input-label">
            <span>Has good grades</span>
            <span>(3)</span>
          </span>
        </span>
      </label>
    </div>
    <div class="sds-filter-list-item">
      <label
        class="sds-checkbox sds-filter-list-item__input"
        for="REPLACE_ME_1"
      >
        <input
          class="sds-checkbox__input"
          id="REPLACE_ME_1"
          type="checkbox"
          aria-invalid="false"
          name="REPLACE_ME_0"
          checked=""
          value="hasBadGrades"
        />
        <span class="sds-checkbox__icon-wrapper"
          ><!-- icon: ConfirmIcon --></span
        >
        <span class="sds-checkbox__input-label">
          <span class="sds-filter-list-item__input-label">
            <span>Has bad grades</span>
            <span>(33)</span>
          </span>
        </span>
      </label>
    </div>
  </fieldset>
</div>
```

### ItemWithRadio

```html
<div class="sds-filter-list sds-filter-list-max-width">
  <fieldset class="sds-form-fieldset" aria-invalid="false">
    <legend class="sds-form-fieldset__legend">Countries</legend>
    <div class="sds-filter-list-item">
      <label class="sds-radio sds-filter-list-item__input" for="_R_2l_">
        <input
          class="sds-radio__input"
          id="_R_2l_"
          type="radio"
          name="REPLACE_ME_0"
          checked=""
          value="norway"
        />
        <span class="sds-radio__input-label">
          <span class="sds-filter-list-item__input-label">
            <span>Norway</span>
            <span>(10)</span>
          </span>
        </span>
      </label>
    </div>
    <div class="sds-filter-list-item">
      <label class="sds-radio sds-filter-list-item__input" for="REPLACE_ME_1">
        <input
          class="sds-radio__input"
          id="REPLACE_ME_1"
          type="radio"
          name="REPLACE_ME_0"
          value="denmark"
        />
        <span class="sds-radio__input-label">
          <span class="sds-filter-list-item__input-label">
            <span>Denmark</span>
            <span>(14)</span>
          </span>
        </span>
      </label>
    </div>
    <div class="sds-filter-list-item">
      <label class="sds-radio sds-filter-list-item__input" for="_R_3l_">
        <input
          class="sds-radio__input"
          id="_R_3l_"
          type="radio"
          name="REPLACE_ME_0"
          value="sweden"
        />
        <span class="sds-radio__input-label">
          <span class="sds-filter-list-item__input-label">
            <span>Sweden</span>
            <span>(0)</span>
          </span>
        </span>
      </label>
    </div>
  </fieldset>
</div>
```

### SectionExample

```html
<div class="sds-filter-list sds-filter-list-max-width">
  <div class="sds-filter-list-section">
    <span class="sds-filter-list-section__label">Not expandable section</span>
  </div>
  <fieldset class="sds-form-fieldset" aria-invalid="false">
    <legend class="sds-form-fieldset__legend">Not expandable section</legend>
    <div class="sds-filter-list-item">
      <label class="sds-checkbox sds-filter-list-item__input" for="_R_2ap_">
        <input
          class="sds-checkbox__input"
          id="_R_2ap_"
          type="checkbox"
          aria-invalid="false"
          name="REPLACE_ME_0"
          value="dummyItem1"
        />
        <span class="sds-checkbox__icon-wrapper"
          ><!-- icon: ConfirmIcon --></span
        >
        <span class="sds-checkbox__input-label">checkbox 1</span>
      </label>
    </div>
    <div class="sds-filter-list-item">
      <label class="sds-checkbox sds-filter-list-item__input" for="_R_2ip_">
        <input
          class="sds-checkbox__input"
          id="_R_2ip_"
          type="checkbox"
          aria-invalid="false"
          name="REPLACE_ME_0"
          value="dummyItem2"
        />
        <span class="sds-checkbox__icon-wrapper"
          ><!-- icon: ConfirmIcon --></span
        >
        <span class="sds-checkbox__input-label">checkbox 2</span>
      </label>
    </div>
  </fieldset>
  <div class="sds-filter-list-expand">
    <button
      class="sds-filter-list-expand__header sds-filter-list-expand__header-clickable"
      id="REPLACE_ME_1-title"
      aria-controls="REPLACE_ME_1-content"
      aria-expanded="true"
    >
      <div class="sds-filter-list-section sds-filter-list-section--expandable">
        <span class="sds-filter-list-section__label">Expandable section</span>
        <span class="sds-notification sds-notification--brand">
          <span class="sds-notification__count">2</span>
        </span>
      </div>
      <div class="sds-filter-list-expand--icon-container">
        <!-- icon: ExpandShowIcon -->
      </div>
    </button>
    <div
      class="sds-filter-list-expand__content sds-filter-list-expand__content--open"
    >
      <div
        role="region"
        id="REPLACE_ME_1-content"
        aria-labelledby="REPLACE_ME_1-title"
      >
        <fieldset class="sds-form-fieldset" aria-invalid="false">
          <legend class="sds-form-fieldset__legend">Expandable section</legend>
          <div class="sds-filter-list-item">
            <label
              class="sds-checkbox sds-filter-list-item__input"
              for="_R_4lm_"
            >
              <input
                class="sds-checkbox__input"
                id="_R_4lm_"
                type="checkbox"
                aria-invalid="false"
                name="_R_m_"
                checked=""
                value="hasGoodGrades"
              />
              <span class="sds-checkbox__icon-wrapper"
                ><!-- icon: ConfirmIcon --></span
              >
              <span class="sds-checkbox__input-label">
                <span class="sds-filter-list-item__input-label">
                  <span>Has good grades</span>
                  <span>(3)</span>
                </span>
              </span>
            </label>
          </div>
          <div class="sds-filter-list-item">
            <label
              class="sds-checkbox sds-filter-list-item__input"
              for="_R_55m_"
            >
              <input
                class="sds-checkbox__input"
                id="_R_55m_"
                type="checkbox"
                aria-invalid="false"
                name="_R_m_"
                checked=""
                value="hasBadGrades"
              />
              <span class="sds-checkbox__icon-wrapper"
                ><!-- icon: ConfirmIcon --></span
              >
              <span class="sds-checkbox__input-label">
                <span class="sds-filter-list-item__input-label">
                  <span>Has bad grades</span>
                  <span>(33)</span>
                </span>
              </span>
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</div>
```
