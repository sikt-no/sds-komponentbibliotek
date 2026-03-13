import { InfoIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import { TagStatus, TagStatusProps } from "../index";

const meta: Meta = {
  title: "Components/Tag/Status",
  component: TagStatus,
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

type Story = StoryObj<TagStatusProps>;

export const Default: Story = {
  args: {
    children: "Status",
    variant: "brand",
    visibility: "subtle",
  },
};

export const IconLeft: Story = {
  args: {
    ...Default.args,
    icon: <InfoIcon />,
  },
};
