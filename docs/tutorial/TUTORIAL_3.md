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
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "exports": {
    "import": {
      "types": "./dist/index.d.mts",
      "default": "./dist/index.mjs"
    },
    "require": {
      "types": "./dist/index.d.ts",
      "default": "./dist/index.js"
    }
  },
  "types": "dist/index.d.ts",
  "style": "dist/index.css",
  "files": ["dist"],
  "scripts": {
    "build": "tsup"
  }
}
```

#### Update package-lock

```sh
npm i
```
