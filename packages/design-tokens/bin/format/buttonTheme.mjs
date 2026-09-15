import { createThemeVariablesFormat } from "./themeVariables.mjs";

/**
 * Custom Format: Button Theme
 * Outputs the default (main) button color values to :root, and
 * "neutral"/"danger" mode values to [data-button-theme] overrides.
 */
export const buttonThemeFormat = createThemeVariablesFormat({
  name: "format/button/theme",
  attribute: "data-button-theme",
  baseKey: "main",
});
