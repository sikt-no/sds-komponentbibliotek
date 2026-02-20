import cpy from "cpy";
import { config } from "../src/icons.config.mjs";

// Build all icon file paths based on their source and type
const icons = config.map(({ id, source }) => {
  if (source === "sds") return `src/svg/${id}.svg`;

  return id.endsWith("-fill")
    ? `../../node_modules/@phosphor-icons/core/assets/fill/${id}.svg`
    : `../../node_modules/@phosphor-icons/core/assets/regular/${id}.svg`;
});

// Copy all icons to dist/assets and rename them according to config
await cpy(icons, "dist/assets", {
  flat: true,
  rename: (source, destination) => {
    const id = source.nameWithoutExtension;
    const icon = config.find((icon) => icon.id === id);
    destination.nameWithoutExtension = icon.name;
  },
});
