# Tutorial

## Workshop

### 3. Init new package

#### Init package

```sh
npm init -y -w ./packages/confetti-button
```

#### Edit `./packages/confetti-button/package.json`

```json
{
  "name": "@sikt/sds-confetti-button",
  "version": "0.1.0",
  "license": "UNLICENSED",
  "main": "dist/index.cjs",
  "module": "dist/index.mjs",
  "exports": {
    "import": {
      "types": "./dist/index.d.mts",
      "default": "./dist/index.mjs"
    },
    "require": {
      "types": "./dist/index.d.cts",
      "default": "./dist/index.cjs"
    }
  },
  "types": "dist/index.d.cts",
  "style": "dist/index.css",
  "files": ["dist"],
  "scripts": {
    "build": "tsdown"
  }
}
```

#### Update package-lock

```sh
npm i
```
