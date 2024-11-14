import cpy from "cpy";
import { config } from "../src/icons.config.mjs";

let icons = [];
icons.push(
  ...config
    .filter(({ id }) => !id.endsWith("-fill"))
    .map(
      ({ id }) =>
        `../../node_modules/@phosphor-icons/core/assets/regular/${id}.svg`,
    ),
);
icons.push(
  ...config
    .filter(({ id }) => id.endsWith("-fill"))
    .map(
      ({ id }) =>
        `../../node_modules/@phosphor-icons/core/assets/fill/${id}.svg`,
    ),
);

cpy(icons, "dist/assets", {
  flat: true,
  rename: (basename) => {
    const id = basename.split(".")[0];
    const ext = basename.split(".")[1];
    const icon = config.find((icon) => icon.id === id);
    return `${icon.name}.${ext}`;
  },
});
