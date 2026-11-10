import type { Meta, StoryObj } from "@storybook/react-vite";
import { useArgs } from "storybook/preview-api";
import { Pagination, PaginationProps } from "../index";

const meta: Meta<PaginationProps> = {
  title: "SD3/Pagination",
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component:
          "Navigation control for paged lists. Use when a result set is split into pages the user moves through one at a time.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "inline-radio" },
      options: ["standard", "compact"],
    },
    i18n: {
      control: { type: "inline-radio" },
      options: ["en", "nb", "nn"],
    },
  },
  render: (args) => {
    const [, updateArgs] = useArgs<Record<string, unknown>>();
    return (
      <Pagination
        {...args}
        onPageChange={(index) => {
          updateArgs({ currentIndex: index });
        }}
      />
    );
  },
};
export default meta;

type Story = StoryObj<PaginationProps>;

export const Default: Story = {
  args: {
    "aria-label": "Paginering",
    count: 42,
    currentIndex: 0,
  },
};

export const CustomLabels: Story = {
  args: {
    "aria-label": "Sidnumrering",
    lang: "sv",
    count: 42,
    currentIndex: 0,
  },
  render: (args) => {
    const [, updateArgs] = useArgs<Record<string, unknown>>();
    return (
      <Pagination
        {...args}
        i18n={{
          previousLabel: "Föregående",
          nextLabel: "Nästa",
        }}
        onPageChange={(index) => {
          updateArgs({ currentIndex: index });
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Pass a custom `PaginationI18n` object for locales outside the presets. Shown here with Swedish — `lang="sv"` tells assistive tech to pronounce the labels in Swedish.',
      },
      source: {
        code: `<Pagination
  aria-label="Sidnumrering"
  lang="sv"
  count={42}
  currentIndex={currentIndex}
  onPageChange={setCurrentIndex}
  i18n={{
    previousLabel: "Föregående",
    nextLabel: "Nästa",
  }}
/>`,
      },
    },
  },
};
