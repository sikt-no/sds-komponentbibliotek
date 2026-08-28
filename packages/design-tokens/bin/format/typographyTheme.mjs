import { createThemeVariablesFormat } from "./themeVariables.mjs";

/**
 * Custom Format: Typography Theme
 * Outputs the default (comfortable) typography values to :root, and
 * "compact"/"spacious" mode values to [data-typography-theme] overrides.
 */
export const typographyThemeFormat = createThemeVariablesFormat({
  name: "format/typography/theme",
  attribute: "data-typography-theme",
});
