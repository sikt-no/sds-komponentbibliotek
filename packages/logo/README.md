# `@sikt/sds-logo`

## Consume

```sh
npm i -s @sikt/sds-logo
```

### Logo

#### React

```js
import { PrimaryLogo } from "@sikt/sds-logo";
import "@sikt/sds-logo/dist/index.css";

<PrimaryLogo />;
```

Supported languages: Norwegian Bokmål (nb), Norwegian Nynorsk (nn), English (en), Northern Sámi (se), Lule Sámi (smj), Southern Sámi (sma), Kven (fkv).

### Favicon

`index.html`:

```html
<head>
  <link rel="icon" href="@sikt/sds-logo/Favicon-Light@32px.png" sizes="any" />
  <link
    rel="icon"
    href="@sikt/sds-logo/Favicon-Light.svg"
    type="image/svg+xml"
  />
  <link rel="apple-touch-icon" href="@sikt/sds-logo/Favicon-Light@180px.png" />
  <link rel="manifest" href="/manifest.webmanifest" />
</head>
```

`manifest.webmanifest`:

```json
{
  "icons": [
    {
      "src": "@sikt/sds-logo/Favicon-Light@192px.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "@sikt/sds-logo/Favicon-Light@512px.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}
```
