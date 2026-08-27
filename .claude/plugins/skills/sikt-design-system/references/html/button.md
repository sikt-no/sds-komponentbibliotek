# @sikt/sds-button — HTML snippets

Rendered HTML for every Storybook story in `packages/button`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-button/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/button.md`) to pick up the visual styles for these classes.

## Button.stories

### Default

```html
<button class="sds-button sds-button--subtle" type="button">
  <span class="sds-button__label">Button</span>
</button>
```

### IconLeft

```html
<button
  class="sds-button sds-button--subtle sds-button--icon-left"
  type="button"
>
  <span class="sds-button__label">Button</span>
  <span class="sds-button__icon sds-button__icon--left"
    ><!-- icon: NavigateToPreviousIcon --></span
  >
</button>
```

### IconOnly

```html
<button class="sds-button sds-button--subtle" aria-label="Button" type="button">
  <span class="sds-button__icon sds-button__icon--only"
    ><!-- icon: NavigateToNextIcon --></span
  >
</button>
```

### IconRight

```html
<button class="sds-button sds-button--subtle" type="button">
  <span class="sds-button__label">Button</span>
  <span class="sds-button__icon sds-button__icon--right"
    ><!-- icon: NavigateToNextIcon --></span
  >
</button>
```

### Small

```html
<button class="sds-button sds-button--subtle sds-button--small" type="button">
  <span class="sds-button__label">Button</span>
</button>
```

### WithNotification

```html
<button class="sds-button sds-button--subtle" aria-label="Alerts" type="button">
  <span class="sds-button__icon sds-button__icon--only"
    ><!-- icon: AlertIcon --></span
  >
  <span class="sds-button__notification">
    <span class="sds-notification sds-notification--info">
      <span class="sds-notification__count">5</span>
    </span>
  </span>
</button>
```

### WithNotificationAndText

```html
<button class="sds-button sds-button--subtle" type="button">
  <span class="sds-button__label">View feedback</span>
  <span class="sds-button__notification">
    <span class="sds-notification sds-notification--info">
      <span class="sds-notification__count">3</span>
    </span>
  </span>
</button>
```

### WithNotificationIconLeft

```html
<button
  class="sds-button sds-button--subtle sds-button--icon-left"
  type="button"
>
  <span class="sds-button__label">User activity</span>
  <span class="sds-button__icon sds-button__icon--left"
    ><!-- icon: UserProfileIcon --></span
  >
  <span class="sds-button__notification">
    <span class="sds-notification sds-notification--info">
      <span class="sds-notification__count">9+</span>
    </span>
  </span>
</button>
```

### WithNotificationMaxCount

```html
<button
  class="sds-button sds-button--transparent"
  aria-label="Inbox"
  type="button"
>
  <span class="sds-button__icon sds-button__icon--only"
    ><!-- icon: EmailIcon --></span
  >
  <span class="sds-button__notification">
    <span class="sds-notification sds-notification--info">
      <span class="sds-notification__count">99+</span>
    </span>
  </span>
</button>
```

### WithNotificationNoCount

```html
<button
  class="sds-button sds-button--transparent"
  aria-label="Messages"
  type="button"
>
  <span class="sds-button__icon sds-button__icon--only"
    ><!-- icon: NotificationIcon --></span
  >
  <span class="sds-button__notification">
    <span class="sds-notification sds-notification--info"></span>
  </span>
</button>
```

## ButtonGroup.stories

### Default

```html
<div
  role="group"
  class="sds-button-group sds-button-group--auto sds-button-group--split"
>
  <button
    class="sds-button sds-button--critical sds-button--icon-left"
    type="button"
  >
    <span class="sds-button__label">Critical</span>
    <span class="sds-button__icon sds-button__icon--left">
      <!-- icon: NavigateToPreviousIcon -->
    </span>
  </button>
  <button class="sds-button sds-button--subtle" type="button">
    <span class="sds-button__label">Subtle</span>
  </button>
  <button class="sds-button sds-button--strong" type="button">
    <span class="sds-button__label">Strong</span>
    <span class="sds-button__icon sds-button__icon--right"
      ><!-- icon: NavigateToNextIcon --></span
    >
  </button>
</div>
```

## ButtonLink.stories

### AsChild

```html
<a
  href="/path/to/target"
  class="sds-button-link sds-button sds-button--subtle"
  aria-label="Link"
>
  <span class="sds-button__icon sds-button__icon--only"
    ><!-- icon: NavigateToNextIcon --></span
  >
</a>
```

### Default

```html
<a class="sds-button-link sds-button sds-button--subtle" href="#link">
  <span class="sds-button__label">Button Link</span>
</a>
```

### IconLeft

```html
<a
  class="sds-button-link sds-button sds-button--subtle sds-button--icon-left"
  href="#link"
>
  <span class="sds-button__label">Button Link</span>
  <span class="sds-button__icon sds-button__icon--left"
    ><!-- icon: NavigateToPreviousIcon --></span
  >
</a>
```

### IconOnly

```html
<a
  class="sds-button-link sds-button sds-button--subtle"
  href="#link"
  aria-label="Button Link"
>
  <span class="sds-button__icon sds-button__icon--only"
    ><!-- icon: NavigateToNextIcon --></span
  >
</a>
```

### IconRight

```html
<a class="sds-button-link sds-button sds-button--subtle" href="#link">
  <span class="sds-button__label">Button Link</span>
  <span class="sds-button__icon sds-button__icon--right"
    ><!-- icon: NavigateToNextIcon --></span
  >
</a>
```

### Small

```html
<a
  class="sds-button-link sds-button sds-button--subtle sds-button--small"
  href="#link"
>
  <span class="sds-button__label">Button Link</span>
</a>
```

### WithFeedbackNotification

```html
<a
  class="sds-button-link sds-button sds-button--subtle sds-button--icon-left"
  href="#feedback"
>
  <span class="sds-button__label">User feedback</span>
  <span class="sds-button__icon sds-button__icon--left"
    ><!-- icon: FeedbackIcon --></span
  >
  <span class="sds-button__notification">
    <span class="sds-notification sds-notification--info">
      <span class="sds-notification__count">3</span>
    </span>
  </span>
</a>
```

### WithNotification

```html
<a
  class="sds-button-link sds-button sds-button--subtle"
  href="#alerts"
  aria-label="View alerts"
>
  <span class="sds-button__icon sds-button__icon--only"
    ><!-- icon: AlertIcon --></span
  >
  <span class="sds-button__notification">
    <span class="sds-notification sds-notification--info">
      <span class="sds-notification__count">5</span>
    </span>
  </span>
</a>
```

### WithNotificationAndText

```html
<a class="sds-button-link sds-button sds-button--subtle" href="#messages">
  <span class="sds-button__label">View all messages</span>
  <span class="sds-button__icon sds-button__icon--right"
    ><!-- icon: MessageIcon --></span
  >
  <span class="sds-button__notification">
    <span class="sds-notification sds-notification--info">
      <span class="sds-notification__count">9+</span>
    </span>
  </span>
</a>
```

### WithNotificationMaxCount

```html
<a
  class="sds-button-link sds-button sds-button--transparent"
  href="#inbox"
  aria-label="Inbox"
>
  <span class="sds-button__icon sds-button__icon--only"
    ><!-- icon: EmailIcon --></span
  >
  <span class="sds-button__notification">
    <span class="sds-notification sds-notification--info">
      <span class="sds-notification__count">99+</span>
    </span>
  </span>
</a>
```
