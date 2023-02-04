#!/usr/bin/env node

const cpy = require("cpy");
const config = require("../icons.config");

const icons = config.icons.toString();

cpy(
  "../../node_modules/@phosphor-icons/core/assets/regular/{" + icons + "}.svg",
  "dist/assets",
  { flat: true }
);
