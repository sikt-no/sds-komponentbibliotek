import { createThemeVariablesFormat } from "./themeVariables.mjs";

/**
 * Custom Format: Space Theme
 * Outputs the default (comfortable) space-layout values to :root, and
 * "compact"/"spacious" mode values to [data-space-theme] overrides.
 */
export const spaceThemeFormat = createThemeVariablesFormat({
  name: "format/space/theme",
  attribute: "data-space-theme",
});
