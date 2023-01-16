# `@sikt/horisont-logo`

## Consume

```sh
npm i -s @sikt/horisont-logo
```

### Favicon

`index.html`

```html
<head>
  <link
    rel="icon"
    href="@sikt/horisont-logo/Favicon-Light@32px.png"
    sizes="any"
  />
  <link
    rel="icon"
    href="@sikt/horisont-logo/Favicon-Light.svg"
    type="image/svg+xml"
  />
  <link
    rel="apple-touch-icon"
    href="@sikt/horisont-logo/Favicon-Light@180px.png"
  />
  <link rel="manifest" href="/manifest.webmanifest" />
</head>
```

`manifest.webmanifest`

```json
{
  "icons": [
    {
      "src": "@sikt/horisont-logo/Favicon-Light@192px.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "@sikt/horisont-logo/Favicon-Light@512px.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}
```
