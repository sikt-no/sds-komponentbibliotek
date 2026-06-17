import { InfoIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react-vite";
import { TagCategory, TagCategoryProps } from "../index";

const meta: Meta = {
  title: "Components/Tag/Category",
  component: TagCategory,
  argTypes: {
    category: {
      // Override docgen's "enum" type with "string" so Storybook's mapArgsToTypes
      // coerces URL args like category:7 (number) to "7" (string) before
      // validateOptions runs, which uses strict equality against string options.
      type: { name: "string" },
    },
    children: {
      control: { type: "text" },
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<TagCategoryProps>;

export const Default: Story = {
  args: {
    children: "Category",
    category: "1",
  },
};

export const IconLeft: Story = {
  args: {
    ...Default.args,
    icon: <InfoIcon />,
  },
};
