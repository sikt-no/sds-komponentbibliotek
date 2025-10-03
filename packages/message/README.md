# `@sikt/sds-message`

## Consume

```sh
npm i -s @sikt/sds-message
```

### Components

#### Alert

Denne komponenten brukes for å gi tilbakemelding til brukeren på handlinger de har utført, som f.eks å sende inn et skjema eller lagre endringer.

#### ApplicationStatus

Denne komponenten brukes i tilfeller der man ønsker å indikere status på applikasjonsnivå.

Den vil typisk ligge under hovedmenyen/applikasjonsheader.

I de fleste tilfeller kan den ikke lukkes av brukeren, da den må være synlig så lenge systemstatusen er korrekt.

#### ErrorSummary

Denne komponenten oppsummerer formelle feil i skjemakomponenter slik at brukeren kan fikse disse. Den gjør det enklere for brukeren å finne frem når det er mange feil.

#### GuidePanel

Denne komponenten inneholder hjelpetekster eller retningslinjer for brukeren  i kontekster der informasjonen gjelder flere komponenter samlet. Komponenten er alltid synlig, og dukker ikke opp som resultat av brukerens handlinger eller i forbindelse med validering av inputs.

Den en vanlig del av sidens statiske innhold som er formgitt for å skille seg ut og bli lagt merke til.

For eksempel: et skjema som automatisk fylles med data fra en ekstern kilde,  der man ber brukeren sjekke at skjemaet er korrekt utfylt. I dette tilfellet har ikke systemet mulighet til å vite om informasjonen er riktig, og vi er avhengige av at brukeren selv går gjennom skjemaet og korrigerer eventuelle feil.

#### MessageButton & MessageButtonLink

Use this button or link for `callToAction`.

### React

```js
import { Alert, MessageButton } from "@sikt/sds-message";
import "@sikt/sds-message/dist/index.css";

<Alert callToAction={<MessageButton>Action</MessageButton>}>Message</Alert>;
```

#### Caveats

Do not use conditional rendering of these components since they need to be in the DOM for the `aria-live` attribute to take effect when a message text is added. The component handles this internally with a conditional rendering based on if the `children` prop is set.

Do:

```jsx
<Alert {...rest}>{shouldRender && message}</Alert>
```

Don't:

```jsx
{
  shouldRender && <Alert {...rest}>{message}</Alert>;
}
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-message");
```

Create custom markup:

```html
<div class="sds-message">
  <span class="sds-message__icon">icon</span>
  <span class="sds-message__message">Message</span>
  <span class="sds-message__cta">
    <button>Action</button>
  </span>
</div>
```
