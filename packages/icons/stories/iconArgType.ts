import type { ComponentType } from "react";
import * as icons from "../index";
import { config } from "../src/icons.config.mjs";

export type IconComponent = ComponentType;

interface IconConfigEntry {
  id: string;
  name: string;
  category: string;
}

const toPascalCase = (kebab: string): string =>
  kebab
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

const humanize = (name: string): string => {
  const spaced = name.replace(/-/g, " ");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
};

const iconEntries = (config as IconConfigEntry[])
  .map(({ name, category }) => {
    const component = (icons as Record<string, IconComponent | undefined>)[
      `${toPascalCase(name)}Icon`
    ];
    return component ? { name, category, component } : null;
  })
  .filter(
    (
      entry,
    ): entry is { name: string; category: string; component: IconComponent } =>
      entry !== null,
  )
  .sort((a, b) =>
    a.category !== b.category
      ? a.category.localeCompare(b.category)
      : a.name.localeCompare(b.name),
  );

const options = ["None", ...iconEntries.map(({ name }) => name)];

const mapping: Record<string, IconComponent | null> = {
  None: null,
  ...Object.fromEntries(
    iconEntries.map(({ name, component }) => [name, component]),
  ),
};

const labels: Record<string, string> = {
  None: "None",
  ...Object.fromEntries(iconEntries.map(({ name }) => [name, humanize(name)])),
};

/**
 * Storybook argType for picking an icon component in a story control.
 *
 * The picker is populated from `packages/icons/src/icons.config.mjs` — the
 * canonical list of non-deprecated icons — and grouped in the dropdown by
 * category, then alphabetically within each category.
 *
 * @example
 * ```tsx
 * import { iconArgType, type IconComponent } from "../../icons/_stories/iconArgType";
 *
 * type StoryArgs = MyProps & { icon?: IconComponent | null };
 *
 * const meta: Meta<StoryArgs> = {
 *   component: MyComponent,
 *   argTypes: { icon: iconArgType },
 * };
 *
 * export const Default: StoryObj<StoryArgs> = {
 *   args: { icon: null },
 *   render: ({ icon: Icon, ...args }) => (
 *     <MyComponent {...args}>
 *       {Icon && <MyComponent.Icon><Icon /></MyComponent.Icon>}
 *     </MyComponent>
 *   ),
 * };
 * ```
 *
 * Notes:
 * - The arg is story-only — it isn't a prop on the component. Consume it in
 *   `render` and pass into the component's icon slot.
 * - Default the arg to `null` in `args` so the "None" option is selected on
 *   first load.
 * - The control value is the resolved icon component (or `null`), courtesy of
 *   Storybook's `mapping`. Rename it in the destructure (e.g. `icon: Icon`) so
 *   you can use it as a JSX tag.
 */
export const iconArgType = {
  name: "Icon",
  options,
  mapping,
  control: { type: "select" as const, labels },
  description:
    "Story-only picker: selects an icon component from `@sikt/sds-icons`. Place it in your `render` using the component's icon slot.",
  table: { category: "Composition" },
};
