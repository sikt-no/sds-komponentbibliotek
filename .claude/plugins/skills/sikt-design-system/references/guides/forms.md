# Forms

Patterns for SDS form components: inputs, validation and accessibility.

## No placeholder text

Never use the `placeholder` prop on SDS input components. Placeholder text disappears on focus and is an accessibility anti-pattern — screen reader users may never hear it, and sighted users lose the hint once they start typing. Use `helpText` instead — it renders persistently below the input:

```tsx
// ✅ Correct
<TextInput label="E-post" helpText="Vi bruker denne til å sende kvittering" />

// ❌ Wrong
<TextInput label="E-post" placeholder="din@epost.no" />
```

## Labels, help text, and errors

Every SDS input requires either a `label` prop or an `aria-labelledby` pointing at a visible label elsewhere in the DOM. Never use `aria-label` alone — it is not exposed to all AT in form context.

```tsx
import { TextInput, SearchInput } from "@sikt/sds-input";

// label prop — most common
<TextInput label="Fornavn" />

// aria-labelledby — when a heading or custom element is the label
<TextInput aria-labelledby="search-heading" />
```

`errorText` renders the validation message and sets `aria-invalid` + `aria-errormessage` automatically:

```tsx
<TextInput
  label="E-post"
  errorText={errors.email?.message}
  helpText="Brukes til pålogging"
/>
```

`helpText` is always shown. `errorText` replaces it visually when present — both can be set simultaneously; `helpText` reappears when the error clears.

## onChange signature

SDS inputs pass `(event, newValue)` to `onChange` — the second argument is the extracted string. Always use `newValue`, not `event.target.value`:

```tsx
// ✅ Correct
<TextInput
  label="Navn"
  value={name}
  onChange={(_, newValue) => setName(newValue)}
/>

// ❌ Wrong — reads from event (works, but bypasses the SDS API)
<TextInput
  label="Navn"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

## Custom form field layout with FormField

When you need to wrap a non-SDS input (e.g. a date picker, a custom widget) in SDS form field chrome — label, helpText, errorText, consistent spacing — use `FormField` from `@sikt/sds-form`:

```tsx
import { FormField } from "@sikt/sds-form";

<FormField
  label="Fødselsdato"
  helpText="Format: DD.MM.ÅÅÅÅ"
  errorText={errors.birthDate?.message}
  htmlFor="birthdate-input"
>
  <input id="birthdate-input" type="date" />
</FormField>;
```

`htmlFor` wires the label's `for` attribute to the inner input's `id`.

## Grouping inputs with Fieldset

Use `Fieldset` from `@sikt/sds-form` to group related inputs under a shared label. This is required for checkbox groups or any set of inputs that share a single question.

```tsx
import { Fieldset } from "@sikt/sds-form";
import { CheckboxInput } from "@sikt/sds-checkbox";

<Fieldset legend="Velg fagområder" helpText="Velg ett eller flere">
  <CheckboxInput label="Matematikk" value="math" />
  <CheckboxInput label="Naturfag" value="science" />
  <CheckboxInput label="Norsk" value="norwegian" />
</Fieldset>;
```

`legend` is the group label — screen readers announce it before each option. `errorText` sets a group-level error and marks the fieldset as invalid:

```tsx
<Fieldset legend="Velg fagområder" errorText={groupError}>
  ...
</Fieldset>
```

Note: `RadioFieldset` from `@sikt/sds-radio` is a specialised fieldset for radio groups and handles grouping automatically — no need to wrap it in `Fieldset`.
