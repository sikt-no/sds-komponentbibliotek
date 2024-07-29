import cpy from "cpy";
import { config } from "../src/icons.config.mjs";

let icons = [];
icons.push(
  ...config
    .filter((icon) => !icon.endsWith("-fill"))
    .map(
      (icon) =>
        `../../node_modules/@phosphor-icons/core/assets/regular/${icon}.svg`,
    ),
);
icons.push(
  ...config
    .filter((icon) => icon.endsWith("-fill"))
    .map(
      (icon) =>
        `../../node_modules/@phosphor-icons/core/assets/fill/${icon}.svg`,
    ),
);

cpy(icons, "dist/assets", { flat: true });
