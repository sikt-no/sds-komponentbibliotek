import { InfoIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import { TagCategory, TagCategoryProps } from "../index";

const meta: Meta = {
  title: "Components/Tag/Category",
  component: TagCategory,
  argTypes: {
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
