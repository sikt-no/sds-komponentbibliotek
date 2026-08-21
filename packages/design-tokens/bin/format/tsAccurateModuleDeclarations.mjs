import JsonToTS from "json-to-ts";

/**
 * Custom Format: TypeScript Accurate Module Declarations
 * This generates more accurate TypeScript types using json-to-ts.
 * Based on the official StyleDictionary documentation pattern:
 * https://styledictionary.com/reference/hooks/formats/predefined/
 */
export const tsAccurateModuleDeclarationsFormat = {
  name: "format/typescript/accurate-module-declarations",
  format: function ({ dictionary }) {
    try {
      const typeInterfaces = JsonToTS(dictionary.tokens);

      if (!Array.isArray(typeInterfaces) || typeInterfaces.length === 0) {
        throw new Error("JsonToTS returned invalid or empty type definitions");
      }

      return (
        "declare const root: RootObject\n" +
        "export default root\n" +
        typeInterfaces.join("\n")
      );
    } catch (error) {
      console.error(
        "Error generating TypeScript types with json-to-ts:",
        error.message,
      );
      console.error("Falling back to basic type declaration");

      // Fallback to a basic type declaration if json-to-ts fails
      return (
        "declare const root: any\n" +
        "export default root\n" +
        "// Error: Could not generate accurate types, falling back to 'any'"
      );
    }
  },
};
