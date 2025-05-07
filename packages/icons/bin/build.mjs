import cpy from "cpy";
import { config } from "../src/icons.config.mjs";

let icons = [];
icons.push(
  ...config
    .filter(({ id, source }) => !id.endsWith("-fill") && source !== "sds")
    .map(
      ({ id }) =>
        `../../node_modules/@phosphor-icons/core/assets/regular/${id}.svg`,
    ),
);
icons.push(
  ...config
    .filter(({ id, source }) => id.endsWith("-fill") && source !== "sds")
    .map(
      ({ id }) =>
        `../../node_modules/@phosphor-icons/core/assets/fill/${id}.svg`,
    ),
);
icons.push(
  ...config
    .filter(({ source }) => source === "sds")
    .map(({ id }) => `src/svg/${id}.svg`),
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
