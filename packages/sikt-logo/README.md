# `@sikt/sd3-sikt-logo`

## Consume

```sh
npm i -s @sikt/sd3-sikt-logo
```

### Logo

#### React

```js
import { Logo } from "@sikt/sd3-sikt-logo";
import "@sikt/sd3-sikt-logo/dist/index.css";

<Logo />;
```

Supported languages: Norwegian Bokmål (nb), Norwegian Nynorsk (nn), English (en), Northern Sámi (se), Lule Sámi (smj), Southern Sámi (sma), Kven (fkv).

### Favicon

`index.html`:

```html
<head>
  <link
    rel="icon"
    href="@sikt/sd3-sikt-logo/Favicon-Light@32px.png"
    sizes="any"
  />
  <link
    rel="icon"
    href="@sikt/sd3-sikt-logo/Favicon-Dark@32px.png"
    sizes="any"
    media="(prefers-color-scheme: dark)"
  />
  <link
    rel="icon"
    href="@sikt/sd3-sikt-logo/Favicon-Light.svg"
    type="image/svg+xml"
  />
  <link
    rel="icon"
    href="@sikt/sd3-sikt-logo/Favicon-Dark.svg"
    type="image/svg+xml"
    media="(prefers-color-scheme: dark)"
  />
  <link
    rel="apple-touch-icon"
    href="@sikt/sd3-sikt-logo/Favicon-Light@180px.png"
  />
  <link
    rel="apple-touch-icon"
    href="@sikt/sd3-sikt-logo/Favicon-Dark@180px.png"
    media="(prefers-color-scheme: dark)"
  />
  <link rel="manifest" href="/manifest.webmanifest" />
  <link
    rel="manifest"
    href="/manifest-dark.webmanifest"
    media="(prefers-color-scheme: dark)"
  />
</head>
```

`manifest.webmanifest`:

```json
{
  "icons": [
    {
      "src": "@sikt/sd3-sikt-logo/Favicon-Light@192px.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "@sikt/sd3-sikt-logo/Favicon-Light@512px.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}
```
