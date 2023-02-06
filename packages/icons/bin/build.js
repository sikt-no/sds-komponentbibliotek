#!/usr/bin/env node

const cpy = require("cpy");
const config = require("../icons.config");

const icons = config.icons.map(
  (icon) => `../../node_modules/@phosphor-icons/core/assets/regular/${icon}.svg`
);

cpy(icons, "dist/assets", { flat: true });
