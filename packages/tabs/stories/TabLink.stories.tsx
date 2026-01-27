import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Badge } from "../../badge/index";
import { InfoIcon } from "../../icons/index";
import { TagStatus } from "../../tag/index";
import { TabLink, TabLinkProps } from "../index";

const meta: Meta = {
  title: "Components/Tabs/TabLink",
  component: TabLink,
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

export const WithBadge: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        Tab Link
        <Badge count={10} maxCount={9} />
      </>
    ),
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
