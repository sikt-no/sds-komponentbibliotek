import { Meta, StoryObj } from "@storybook/react-webpack5";
import { InfoIcon } from "../../icons/index";
import { TagStatus } from "../../tag/index";
import { TabLink, TabLinkProps } from "../index";

const meta: Meta = {
  title: "Components/Tabs/TabLink",
  component: TabLink,
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

type Story = StoryObj<TabLinkProps>;

export const Default: Story = {
  args: {
    children: "Tab Link",
    href: "#link",
    isSelected: true,
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: <InfoIcon />,
  },
};

export const WithTag: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        Tab Link
        <TagStatus>Status</TagStatus>
      </>
    ),
  },
};
