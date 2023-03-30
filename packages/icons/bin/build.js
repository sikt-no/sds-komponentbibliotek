#!/usr/bin/env node

const cpy = require("cpy");
const config = require("../icons.config");

let icons = [];
icons.push(
  ...config.icons
    .filter((icon) => !icon.endsWith("-fill"))
    .map(
      (icon) => `./node_modules/@phosphor-icons/core/assets/regular/${icon}.svg`
    )
);
icons.push(
  ...config.icons
    .filter((icon) => icon.endsWith("-fill"))
    .map(
      (icon) => `./node_modules/@phosphor-icons/core/assets/fill/${icon}.svg`
    )
);

cpy(icons, "dist/assets", { flat: true });
