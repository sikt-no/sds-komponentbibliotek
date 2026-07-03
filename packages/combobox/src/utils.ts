import type { OptionHTMLAttributes } from "react";
import type {
  ComboboxItem,
  ComboboxOption,
  ComboboxSelected,
} from "./Combobox";
import type { ComboboxOptionGroupProps } from "./OptionGroup";

export const isOptionGroup = (
  item: ComboboxOption,
): item is ComboboxOptionGroupProps =>
  "options" in item && Array.isArray(item.options);

export const flattenOptions = (
  items: ComboboxOption[],
): OptionHTMLAttributes<HTMLOptionElement>[] =>
  items.flatMap((item) => (isOptionGroup(item) ? item.options : [item]));

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
export const text = (el: Element): string => el.textContent?.trim() || "";

/**
 * Converts various input types to a consistent array of ComboboxItem objects.
 *
 * Handles different input formats:
 * - null/undefined → returns empty array []
 * - string → returns [{ label: string, value: string }]
 * - ComboboxItem → returns [ComboboxItem]
 * - array of strings/ComboboxItems → returns array of ComboboxItems
 *
 * This ensures the component always works with a predictable data structure.
 */
export const sanitizeItems = (
  values: ComboboxSelected | null | undefined = [],
): ComboboxItem[] => {
  if (values == null) {
    return [];
  }

  if (typeof values === "string") {
    return [{ label: values, value: values }];
  }

  if (!Array.isArray(values)) {
    return [values];
  }

  return values.map((value): ComboboxItem =>
    typeof value === "string" ? { label: value, value } : value,
  );
};

/**
 * Calculates the next selected items when user clicks on an option.
 *
 * For single selection: returns the clicked item or undefined
 * For multiple selection: adds/removes the clicked item from the current list
 */
export function nextItems(
  data: HTMLDataElement,
  prev?: ComboboxSelected,
  multiple?: boolean,
): ComboboxItem | ComboboxItem[] | undefined {
  const item: ComboboxItem = { label: text(data), value: data.value };

  if (!multiple) {
    // Single selection: return item if selecting, undefined if deselecting
    return data.isConnected ? undefined : item;
  }

  // Multiple selection: add or remove item from list
  return data.isConnected
    ? sanitizeItems(prev).filter(({ value }) => value !== item.value) // Remove item
    : [...sanitizeItems(prev), item]; // Add item
}

export const i18n = {
  nb: {
    "data-sr-added": "Lagt til",
    "data-sr-removed": "Fjernet",
    "data-sr-remove": "Trykk for å fjerne",
    "data-sr-empty": "Ingen valgte",
    "data-sr-found": "Naviger til venstre for å finne %d valgte",
    "data-sr-invalid": "Ugyldig verdi",
    "data-sr-of": "av",
    "data-sr-singular": "%d treff",
    "data-sr-plural": "%d treff",
    "data-sr-clear": "Fjern tekst",
  },
  nn: {
    "data-sr-added": "Lagt til",
    "data-sr-removed": "Fjerna",
    "data-sr-remove": "Trykk for å fjerne",
    "data-sr-empty": "Ingen valde",
    "data-sr-found": "Naviger til venstre for å finne %d valde",
    "data-sr-invalid": "Ugyldig verdi",
    "data-sr-of": "av",
    "data-sr-singular": "%d treff",
    "data-sr-plural": "%d treff",
    "data-sr-clear": "Fjern tekst",
  },
  en: {
    "data-sr-added": "Added",
    "data-sr-removed": "Removed",
    "data-sr-remove": "Press to remove",
    "data-sr-empty": "No selected",
    "data-sr-found": "Navigate left to find %d selected",
    "data-sr-invalid": "Invalid value",
    "data-sr-of": "of",
    "data-sr-singular": "%d hit",
    "data-sr-plural": "%d hits",
    "data-sr-clear": "Clear text",
  },
};

export const getTextProps = (lang: keyof typeof i18n) => i18n[lang];
