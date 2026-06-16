# Brand fonts & Content-Security-Policy

`@sikt/sds-core` does **not** bundle the Haffer brand font — its `@font-face` rules
load the files from an external origin:

- `https://static.sikt.no/Haffer-Regular.woff2` (+ `.woff`)
- `https://static.sikt.no/Haffer-SemiBold.woff2` (+ `.woff`)

If your app sends a `Content-Security-Policy`, the browser blocks these unless
`font-src` allows that origin. The symptom is subtle: nothing crashes, but text
falls back to the system font (often Arial) and the console fills with:

> Refused to load https://static.sikt.no/Haffer-Regular.woff2 because it does not
> appear in the font-src directive of the Content Security Policy.

**Fix** — add `https://static.sikt.no` to the `font-src` directive wherever your
CSP is defined (helmet, a custom middleware, a `<meta http-equiv>` tag, Next.js
`headers()`, nginx, …):

```
/* ✅ */
font-src 'self' https://static.sikt.no;

/* ❌ — blocks the Haffer fonts, text falls back to Arial */
font-src 'self';
```

Notes:

- Only `font-src` matters here — fonts are **not** covered by `connect-src` or
  `style-src`. If you have no `font-src` at all, the browser falls back to
  `default-src`, so either widen that or add an explicit `font-src`.
- The CSP is usually applied by your server/framework, **not** the Vite dev
  server — so this often only shows up in a production build or when the backend
  serves the bundled client. Test the production path, not just `vite dev`.
- Prefer no external dependency? Self-host: copy the four woff/woff2 files into
  your app, redeclare the `@font-face` rules against your own origin, and then
  `font-src 'self'` is enough.
